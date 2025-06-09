import { useRouter } from "expo-router";
import React from "react";
import {
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import { useAuth } from "../context/auth";

export default function ParentDashboardScreen() {
	const router = useRouter();
	const { user } = useAuth();
	const child = user?.children?.[0]; // Zakładamy, że rodzic ma jedno dziecko

	const upcomingLessons = [
		{ id: 1, subject: "Angielski", time: "10:00", date: "2024-03-15" },
		{ id: 2, subject: "Angielski", time: "12:00", date: "2024-03-16" },
	];

	const recentGrades = [
		{ id: 1, subject: "Angielski", grade: "5", date: "2024-03-10" },
		{ id: 2, subject: "Angielski", grade: "4", date: "2024-03-03" },
	];

	return (
		<SafeAreaView style={styles.container}>
			<ScrollView style={styles.scrollView}>
				<View style={styles.header}>
					<Text style={styles.welcomeText}>
						Witaj, {user?.name}!
					</Text>
					<Text style={styles.childInfo}>
						{child?.name} - Klasa {child?.class}
					</Text>
				</View>

				<View style={styles.section}>
					<Text style={styles.sectionTitle}>Nadchodzące lekcje</Text>
					{upcomingLessons.map((lesson) => (
						<View key={lesson.id} style={styles.card}>
							<Text style={styles.cardTitle}>
								{lesson.subject}
							</Text>
							<Text style={styles.cardText}>
								{lesson.date} o {lesson.time}
							</Text>
						</View>
					))}
				</View>

				<View style={styles.section}>
					<Text style={styles.sectionTitle}>Ostatnie oceny</Text>
					{recentGrades.map((grade) => (
						<View key={grade.id} style={styles.card}>
							<Text style={styles.cardTitle}>
								{grade.subject}
							</Text>
							<View style={styles.gradeContainer}>
								<Text style={styles.grade}>{grade.grade}</Text>
								<Text style={styles.gradeDate}>
									{grade.date}
								</Text>
							</View>
						</View>
					))}
				</View>

				<View style={styles.actionsContainer}>
					<TouchableOpacity
						style={styles.actionButton}
						onPress={() => router.push("/(tabs)/absence")}
					>
						<Text style={styles.actionButtonText}>
							Zgłoś nieobecność
						</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={[styles.actionButton, styles.secondaryButton]}
						onPress={() => router.push("/(tabs)/messages")}
					>
						<Text style={styles.actionButtonText}>
							Wiadomości do nauczyciela
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
	header: {
		marginBottom: 30,
	},
	welcomeText: {
		fontSize: 24,
		fontWeight: "bold",
		color: "#007AFF",
	},
	childInfo: {
		fontSize: 18,
		color: "#666",
		marginTop: 5,
	},
	section: {
		marginBottom: 25,
	},
	sectionTitle: {
		fontSize: 20,
		fontWeight: "bold",
		marginBottom: 15,
	},
	card: {
		backgroundColor: "#f5f5f5",
		padding: 15,
		borderRadius: 10,
		marginBottom: 10,
	},
	cardTitle: {
		fontSize: 16,
		fontWeight: "bold",
	},
	cardText: {
		fontSize: 14,
		color: "#666",
		marginTop: 5,
	},
	gradeContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginTop: 5,
	},
	grade: {
		fontSize: 18,
		fontWeight: "bold",
		color: "#007AFF",
	},
	gradeDate: {
		fontSize: 14,
		color: "#666",
	},
	actionsContainer: {
		marginTop: 20,
	},
	actionButton: {
		backgroundColor: "#007AFF",
		padding: 15,
		borderRadius: 8,
		marginBottom: 10,
	},
	secondaryButton: {
		backgroundColor: "#34C759",
	},
	actionButtonText: {
		color: "#fff",
		fontSize: 16,
		fontWeight: "bold",
		textAlign: "center",
	},
}); 