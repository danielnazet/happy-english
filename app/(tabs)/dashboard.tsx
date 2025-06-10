import { useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import {
	SafeAreaView,
	ScrollView,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from "react-native";
import { useAuth } from "../context/auth";
import { getParentsWithChildren } from "../lib/supabase";

export default function DashboardScreen() {
	const router = useRouter();
	const { user } = useAuth();
	const [parents, setParents] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchData = async () => {
			if (user?.role === "teacher") {
				const { data, error } = await getParentsWithChildren();
				if (!error) setParents(data);
			}
			setLoading(false);
		};
		fetchData();
	}, [user]);

	if (loading) {
		return (
			<SafeAreaView style={styles.container}>
				<Text>Ładowanie...</Text>
			</SafeAreaView>
		);
	}

	if (user?.role === "teacher") {
		return (
			<SafeAreaView style={styles.container}>
				<ScrollView style={styles.scrollView}>
					<Text style={styles.title}>Baza rodziców i dzieci</Text>
					{parents.map((parent) => (
						<View key={parent.id} style={styles.parentCard}>
							<Text style={styles.parentName}>Rodzic: {parent.name}</Text>
							{parent.students && parent.students.length > 0 ? (
								parent.students.map((student) => (
									<View key={student.id} style={styles.studentCard}>
										<Text>Dziecko: {student.name}</Text>
										<Text>Klasa: {student.class}</Text>
										<Text>Poziom: {student.level}</Text>
									</View>
								))
							) : (
								<Text>Brak dzieci</Text>
							)}
						</View>
					))}
				</ScrollView>
			</SafeAreaView>
		);
	}

	const upcomingLessons = [
		{ id: 1, subject: "Angielski", time: "10:00", date: "2025-06-09" },
		{ id: 2, subject: "Angielski", time: "12:00", date: "2025-06-10" },
	];

	return (
		<SafeAreaView style={styles.container}>
			<ScrollView style={styles.scrollView}>
				<Text style={styles.title}>Nadchodzące lekcje</Text>

				{upcomingLessons.map((lesson) => (
					<View key={lesson.id} style={styles.lessonCard}>
						<Text style={styles.lessonSubject}>
							{lesson.subject}
						</Text>
						<Text style={styles.lessonTime}>{lesson.time}</Text>
						<Text style={styles.lessonDate}>{lesson.date}</Text>
					</View>
				))}

				<View style={styles.actionsContainer}>
					<TouchableOpacity
						style={styles.actionButton}
						onPress={() => router.push("/(tabs)/absence")}
					>
						<Text style={styles.actionButtonText}>
							Zgłoś nieobecność
						</Text>
					</TouchableOpacity>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
	},
	scrollView: {
		flex: 1,
		padding: 20,
	},
	title: {
		fontSize: 24,
		fontWeight: "bold",
		marginBottom: 20,
	},
	lessonCard: {
		backgroundColor: "#f5f5f5",
		padding: 15,
		borderRadius: 10,
		marginBottom: 10,
	},
	lessonSubject: {
		fontSize: 18,
		fontWeight: "bold",
	},
	lessonTime: {
		fontSize: 16,
		color: "#666",
		marginTop: 5,
	},
	lessonDate: {
		fontSize: 14,
		color: "#999",
		marginTop: 5,
	},
	actionsContainer: {
		marginTop: 20,
	},
	actionButton: {
		backgroundColor: "#2196F3",
		padding: 15,
		borderRadius: 8,
		marginBottom: 10,
	},
	actionButtonText: {
		color: "#fff",
		fontSize: 16,
		fontWeight: "bold",
		textAlign: "center",
	},
	parentCard: {
		backgroundColor: "#e3f2fd",
		padding: 15,
		borderRadius: 10,
		marginBottom: 15,
	},
	parentName: {
		fontSize: 18,
		fontWeight: "bold",
		marginBottom: 8,
	},
	studentCard: {
		backgroundColor: "#fff",
		padding: 10,
		borderRadius: 8,
		marginBottom: 8,
		marginLeft: 10,
	},
});