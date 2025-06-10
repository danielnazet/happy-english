import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
	Alert,
	ScrollView,
	StyleSheet
} from "react-native";

export default function AbsenceScreen(): React.ReactElement {
	const router = useRouter();
	const [reason, setReason] = useState<string>("");
	const [date, setDate] = useState<string>("");
	const [duration, setDuration] = useState<string>("");

	const handleSubmit = () => {
		if (!date || !duration || !reason) {
			Alert.alert("Błąd", "Proszę wypełnić wszystkie pola");
			return;
		}
		// ...existing code...
	};

	return (
		<ScrollView style={styles.container}>
			{/* ...existing code... */}
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		justifyContent: "center",
		alignItems: "center",
	},
});
