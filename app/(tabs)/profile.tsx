import React from "react";
import {
	SafeAreaView,
	ScrollView,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from "react-native";

export default function ProfileScreen({ navigation }) {
	const userInfo = {
		name: "Jan Kowalski",
		email: "jan.kowalski@example.com",
		class: "3A",
		role: "Uczeń",
	};

	const settings = [
		{ id: 1, title: "Edytuj profil", icon: "👤" },
		{ id: 2, title: "Powiadomienia", icon: "🔔" },
		{ id: 3, title: "Język", icon: "🌍" },
		{ id: 4, title: "Pomoc", icon: "❓" },
		{ id: 5, title: "Wyloguj się", icon: "🚪" },
	];

	return (
		<SafeAreaView style={styles.container}>
			<ScrollView style={styles.scrollView}>
				<View style={styles.profileHeader}>
					<View style={styles.avatarContainer}>
						<Text style={styles.avatarText}>
							{userInfo.name.charAt(0)}
						</Text>
					</View>
					<Text style={styles.name}>{userInfo.name}</Text>
					<Text style={styles.role}>{userInfo.role}</Text>
					<Text style={styles.class}>Klasa: {userInfo.class}</Text>
					<Text style={styles.email}>{userInfo.email}</Text>
				</View>

				<View style={styles.settingsContainer}>
					{settings.map((setting) => (
						<TouchableOpacity
							key={setting.id}
							style={styles.settingItem}
						>
							<Text style={styles.settingIcon}>
								{setting.icon}
							</Text>
							<Text style={styles.settingTitle}>
								{setting.title}
							</Text>
						</TouchableOpacity>
					))}
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
	},
	profileHeader: {
		alignItems: "center",
		padding: 20,
		borderBottomWidth: 1,
		borderBottomColor: "#eee",
	},
	avatarContainer: {
		width: 100,
		height: 100,
		borderRadius: 50,
		backgroundColor: "#2196F3",
		justifyContent: "center",
		alignItems: "center",
		marginBottom: 15,
	},
	avatarText: {
		fontSize: 40,
		color: "#fff",
		fontWeight: "bold",
	},
	name: {
		fontSize: 24,
		fontWeight: "bold",
		marginBottom: 5,
	},
	role: {
		fontSize: 16,
		color: "#666",
		marginBottom: 5,
	},
	class: {
		fontSize: 16,
		color: "#666",
		marginBottom: 5,
	},
	email: {
		fontSize: 14,
		color: "#999",
	},
	settingsContainer: {
		padding: 20,
	},
	settingItem: {
		flexDirection: "row",
		alignItems: "center",
		paddingVertical: 15,
		borderBottomWidth: 1,
		borderBottomColor: "#eee",
	},
	settingIcon: {
		fontSize: 24,
		marginRight: 15,
	},
	settingTitle: {
		fontSize: 16,
	},
});