import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";

export default function TeacherFeedbackScreen() {
	const feedbackList = [
		{
			id: 1,
			subject: "Angielski",
			teacher: "Anna Kowalska",
			date: "2024-03-05",
			feedback:
				"Świetna praca na ostatniej lekcji! Widać duży postęp w wymowie.",
			grade: "5",
		},
	];

	return (
		<SafeAreaView style={styles.container}>
			<ScrollView style={styles.scrollView}>
				<Text style={styles.title}>Opinie nauczycieli</Text>

				{feedbackList.map((feedback) => (
					<View key={feedback.id} style={styles.feedbackCard}>
						<View style={styles.feedbackHeader}>
							<Text style={styles.subject}>
								{feedback.subject}
							</Text>
							<Text style={styles.grade}>{feedback.grade}</Text>
						</View>
						<Text style={styles.teacher}>{feedback.teacher}</Text>
						<Text style={styles.date}>{feedback.date}</Text>
						<Text style={styles.feedback}>{feedback.feedback}</Text>
					</View>
				))}
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
	feedbackCard: {
		backgroundColor: "#f5f5f5",
		padding: 15,
		borderRadius: 10,
		marginBottom: 15,
	},
	feedbackHeader: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginBottom: 10,
	},
	subject: {
		fontSize: 18,
		fontWeight: "bold",
	},
	grade: {
		fontSize: 20,
		fontWeight: "bold",
		color: "#2196F3",
	},
	teacher: {
		fontSize: 16,
		color: "#666",
		marginBottom: 5,
	},
	date: {
		fontSize: 14,
		color: "#999",
		marginBottom: 10,
	},
	feedback: {
		fontSize: 16,
		lineHeight: 22,
	},
});
