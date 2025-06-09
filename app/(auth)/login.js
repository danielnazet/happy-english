import { useState } from "react";
import {
    ActivityIndicator,
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
	const [isLoading, setIsLoading] = useState(false);
	const { login } = useAuth();

	const handleLogin = async () => {
		if (!email || !password) {
			Alert.alert("Błąd", "Proszę wypełnić wszystkie pola");
			return;
		}

		setIsLoading(true);
		try {
			const success = await login(email, password);
			if (!success) {
				Alert.alert("Błąd", "Nieprawidłowy email lub hasło");
			}
		} catch (error) {
			Alert.alert("Błąd", "Wystąpił problem podczas logowania");
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Happy English</Text>
			<Text style={styles.subtitle}>Zaloguj się do swojego konta</Text>

			<View style={styles.form}>
				<TextInput
					style={styles.input}
					placeholder="Email"
					value={email}
					onChangeText={setEmail}
					autoCapitalize="none"
					keyboardType="email-address"
					editable={!isLoading}
				/>
				<TextInput
					style={styles.input}
					placeholder="Hasło"
					value={password}
					onChangeText={setPassword}
					secureTextEntry
					editable={!isLoading}
				/>
				<TouchableOpacity
					style={[styles.button, isLoading && styles.buttonDisabled]}
					onPress={handleLogin}
					disabled={isLoading}
				>
					{isLoading ? (
						<ActivityIndicator color="#fff" />
					) : (
						<Text style={styles.buttonText}>Zaloguj się</Text>
					)}
				</TouchableOpacity>
			</View>

			<View style={styles.testAccounts}>
				<Text style={styles.testAccountTitle}>Konta testowe:</Text>
				<View style={styles.testAccountSection}>
					<Text style={styles.testAccountRole}>Nauczyciel:</Text>
					<Text style={styles.testAccountText}>
						Email: teacher@test.com
					</Text>
					<Text style={styles.testAccountText}>Hasło: teacher123</Text>
				</View>
				<View style={styles.testAccountSection}>
					<Text style={styles.testAccountRole}>Rodzic:</Text>
					<Text style={styles.testAccountText}>
						Email: parent@test.com
					</Text>
					<Text style={styles.testAccountText}>Hasło: parent123</Text>
				</View>
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
	buttonDisabled: {
		opacity: 0.7,
	},
	buttonText: {
		color: "#fff",
		fontSize: 16,
		fontWeight: "bold",
	},
	testAccounts: {
		marginTop: 40,
		padding: 15,
		backgroundColor: "#F5F5F5",
		borderRadius: 10,
	},
	testAccountTitle: {
		fontSize: 16,
		fontWeight: "bold",
		marginBottom: 15,
	},
	testAccountSection: {
		marginBottom: 15,
	},
	testAccountRole: {
		fontSize: 14,
		fontWeight: "600",
		color: "#007AFF",
		marginBottom: 5,
	},
	testAccountText: {
		fontSize: 14,
		color: "#666",
		marginBottom: 3,
	},
});
