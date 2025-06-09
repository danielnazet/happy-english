import { useState } from "react";
import {
	Alert,
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from "react-native";
import { useAuth } from "../context/auth";

export default function LoginScreen() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const { login } = useAuth();

	const handleLogin = () => {
		if (login(email, password)) {
			// Logowanie udane - przekierowanie obsługiwane przez RootLayout
		} else {
			Alert.alert("Błąd", "Nieprawidłowy email lub hasło");
		}
	};

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Happy English</Text>
			<Text style={styles.subtitle}>Panel nauczyciela</Text>

			<View style={styles.form}>
				<TextInput
					style={styles.input}
					placeholder="Email"
					value={email}
					onChangeText={setEmail}
					autoCapitalize="none"
					keyboardType="email-address"
				/>
				<TextInput
					style={styles.input}
					placeholder="Hasło"
					value={password}
					onChangeText={setPassword}
					secureTextEntry
				/>
				<TouchableOpacity style={styles.button} onPress={handleLogin}>
					<Text style={styles.buttonText}>Zaloguj się</Text>
				</TouchableOpacity>
			</View>

			<View style={styles.testAccount}>
				<Text style={styles.testAccountTitle}>Konto testowe:</Text>
				<Text style={styles.testAccountText}>
					Email: teacher@test.com
				</Text>
				<Text style={styles.testAccountText}>Hasło: teacher123</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 20,
		backgroundColor: "#fff",
		justifyContent: "center",
	},
	title: {
		fontSize: 32,
		fontWeight: "bold",
		textAlign: "center",
		color: "#007AFF",
		marginBottom: 10,
	},
	subtitle: {
		fontSize: 18,
		textAlign: "center",
		color: "#666",
		marginBottom: 40,
	},
	form: {
		width: "100%",
	},
	input: {
		backgroundColor: "#F5F5F5",
		padding: 15,
		borderRadius: 10,
		marginBottom: 15,
		fontSize: 16,
	},
	button: {
		backgroundColor: "#007AFF",
		padding: 15,
		borderRadius: 10,
		alignItems: "center",
	},
	buttonText: {
		color: "#fff",
		fontSize: 16,
		fontWeight: "bold",
	},
	testAccount: {
		marginTop: 40,
		padding: 15,
		backgroundColor: "#F5F5F5",
		borderRadius: 10,
	},
	testAccountTitle: {
		fontSize: 16,
		fontWeight: "bold",
		marginBottom: 10,
	},
	testAccountText: {
		fontSize: 14,
		color: "#666",
		marginBottom: 5,
	},
});
