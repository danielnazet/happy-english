import { Slot, useRouter, useSegments } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { AuthProvider, useAuth } from "./context/auth";

// Prosty system autoryzacji - możesz go później rozbudować
const useProtectedRoute = () => {
	const segments = useSegments();
	const router = useRouter();
	const { user } = useAuth();

	useEffect(() => {
		const inAuthGroup = segments[0] === "(auth)";

		if (!user && !inAuthGroup) {
			// Przekieruj do logowania jeśli nie jest zalogowany
			router.replace("/(auth)/login");
		} else if (user && inAuthGroup) {
			// Przekieruj do odpowiedniego dashboardu w zależności od roli
			if (user.role === "teacher") {
				router.replace("/(tabs)/dashboard");
			} else if (user.role === "parent") {
				router.replace("/(tabs)/parent-dashboard");
			}
		}
	}, [user, segments]);

	return { user };
};

function RootLayoutNav() {
	const { user } = useAuth();
	const segments = useSegments();
	const router = useRouter();
	const [isReady, setIsReady] = useState(false);

	useEffect(() => {
		setIsReady(true);
	}, []);

	useEffect(() => {
		if (!isReady) return;

		const inAuthGroup = segments[0] === "(auth)";

		if (!user && !inAuthGroup) {
			router.replace("/(auth)/login");
		} else if (user && inAuthGroup) {
			if (user.role === "teacher") {
				router.replace("/(tabs)/dashboard");
			} else if (user.role === "parent") {
				router.replace("/(tabs)/parent-dashboard");
			}
		}
	}, [user, segments, isReady]);

	return <Slot />;
}

export default function RootLayout() {
	return (
		<AuthProvider>
			<RootLayoutNav />
			<StatusBar style="auto" />
		</AuthProvider>
	);
}
