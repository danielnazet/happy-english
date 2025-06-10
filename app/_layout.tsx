import { Slot, useRouter, useSegments } from "expo-router";
import { StatusBar } from "expo-status-bar";
import * as React from "react";
import { AuthProvider, useAuth } from "./context/auth";

function RootLayoutNav(): React.ReactElement | null {
	const { user, loading } = useAuth();
	const segments = useSegments();
	const router = useRouter();
	const [isReady, setIsReady] = React.useState(false);

	React.useEffect(() => {
		setIsReady(true);
	}, []);

	React.useEffect(() => {
		if (!isReady || loading) return;

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
	}, [user, segments, isReady, loading]);

	if (loading) {
		return null;
	}

	// TEST: jeśli w URL jest segment "test", pokaż stronę testową
	if (segments.includes("test")) {
		return (
			<>
				{/* Testowa strona */}
				<div style={{ flex: 1, justifyContent: "center", alignItems: "center", display: "flex" }}>
					<h1>To jest TESTOWA STRONA!</h1>
				</div>
			</>
		);
	}

	return <Slot />;
}

export default function RootLayout(): React.ReactElement {
	return (
		<AuthProvider>
			<RootLayoutNav />
			<StatusBar style="auto" />
		</AuthProvider>
	);
}