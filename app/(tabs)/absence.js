import { useRouter } from "expo-router";
import { useState } from "react";
import {
	Alert,
	ScrollView,
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from "react-native";

export default function AbsenceScreen() {
	const router = useRouter();
	const [reason, setReason] = useState("");
	const [date, setDate] = useState("");
	const [duration, setDuration] = useState("");

	const handleSubmit = () => {
		if (!date || !duration || !reason) {
			Alert.alert("Błąd", "Proszę wypełnić wszystkie pola");
			return;
		}

		// Tutaj możesz dodać logikę wysyłania zgłoszenia
		Alert.alert("Sukces", "Nieobecność została zgłoszona", [
			{
				text: "OK",
				onPress: () => router.back(),
			},
		]);
	};

	return (
		<ScrollView style={styles.container}>
			<View style={styles.content}>
				<Text style={styles.title}>Zgłoś nieobecność</Text>

				<View style={styles.form}>
					<Text style={styles.label}>Data nieobecności</Text>
					<TextInput
						style={styles.input}
						placeholder="YYYY-MM-DD"
						value={date}
						onChangeText={setDate}
						keyboardType="numeric"
					/>

					<Text style={styles.label}>Czas trwania</Text>
					<TextInput
						style={styles.input}
						placeholder="np. 2 godziny, cały dzień"
						value={duration}
						onChangeText={setDuration}
					/>

					<Text style={styles.label}>Powód nieobecności</Text>
					<TextInput
						style={[styles.input, styles.textArea]}
						placeholder="Podaj powód nieobecności..."
						value={reason}
						onChangeText={setReason}
						multiline
						numberOfLines={4}
						textAlignVertical="top"
					/>

					<TouchableOpacity
						style={styles.button}
						onPress={handleSubmit}
					>
						<Text style={styles.buttonText}>Wyślij zgłoszenie</Text>
					</TouchableOpacity>
				</View>
			</View>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
	},
	content: {
		padding: 20,
	},
	title: {
		fontSize: 24,
		fontWeight: "bold",
		marginBottom: 20,
		color: "#007AFF",
	},
	form: {
		gap: 15,
	},
	label: {
		fontSize: 16,
		fontWeight: "600",
		color: "#333",
	},
	input: {
		backgroundColor: "#F5F5F5",
		padding: 15,
		borderRadius: 10,
		fontSize: 16,
		borderWidth: 1,
		borderColor: "#E5E5EA",
	},
	textArea: {
		height: 100,
		paddingTop: 15,
	},
	button: {
		backgroundColor: "#007AFF",
		padding: 15,
		borderRadius: 10,
		alignItems: "center",
		marginTop: 20,
	},
	buttonText: {
		color: "#fff",
		fontSize: 16,
		fontWeight: "bold",
	},
});
