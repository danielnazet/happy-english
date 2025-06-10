import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";

export default function HomeworkScreen() {
	const homeworkList = [
		{
			id: 1,
			subject: "Angielski",
			title: "Ćwiczenia z czasowników",
			dueDate: "2024-03-15",
			status: "Do zrobienia",
		},
	];

	const getStatusColor = (status) => {
		switch (status) {
			case "Do zrobienia":
				return "#FFA500";
			case "W trakcie":
				return "#2196F3";
			case "Zakończone":
				return "#4CAF50";
			default:
				return "#666";
		}
	};

	return (
		<SafeAreaView style={styles.container}>
			<ScrollView style={styles.scrollView}>
				<Text style={styles.title}>Zadania domowe</Text>

				{homeworkList.map((homework) => (
					<View key={homework.id} style={styles.homeworkCard}>
						<View style={styles.homeworkHeader}>
							<Text style={styles.subject}>
								{homework.subject}
							</Text>
							<Text
								style={[
									styles.status,
									{ color: getStatusColor(homework.status) },
								]}
							>
								{homework.status}
							</Text>
						</View>
						<Text style={styles.title}>{homework.title}</Text>
						<Text style={styles.dueDate}>
							Termin: {homework.dueDate}
						</Text>
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
	homeworkCard: {
		backgroundColor: "#f5f5f5",
		padding: 15,
		borderRadius: 10,
		marginBottom: 15,
	},
	homeworkHeader: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginBottom: 10,
	},
	subject: {
		fontSize: 18,
		fontWeight: "bold",
	},
	status: {
		fontSize: 14,
		fontWeight: "500",
	},
	dueDate: {
		fontSize: 14,
		color: "#666",
		marginTop: 5,
	},
});