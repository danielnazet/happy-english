import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { useAuth } from "../context/auth";

export default function TabsLayout() {
	const { user } = useAuth();
	const isTeacher = user?.role === "teacher";

	return (
		<Tabs
			screenOptions={{
				headerShown: false,
				tabBarActiveTintColor: "#007AFF",
				tabBarInactiveTintColor: "#8E8E93",
				tabBarStyle: {
					borderTopWidth: 1,
					borderTopColor: "#E5E5EA",
				},
			}}
		>
			<Tabs.Screen
				name="dashboard"
				options={{
					title: "Home",
					tabBarIcon: ({ color, size }) => (
						<Ionicons name="home" size={size} color={color} />
					),
					href: isTeacher ? undefined : null,
				}}
			/>
			<Tabs.Screen
				name="parent-dashboard"
				options={{
					title: "Home",
					tabBarIcon: ({ color, size }) => (
						<Ionicons name="home" size={size} color={color} />
					),
					href: !isTeacher ? undefined : null,
				}}
			/>
			<Tabs.Screen
				name="homework"
				options={{
					title: "Homework",
					tabBarIcon: ({ color, size }) => (
						<Ionicons name="book" size={size} color={color} />
					),
				}}
			/>
			<Tabs.Screen
				name="feedback"
				options={{
					title: "Feedback",
					tabBarIcon: ({ color, size }) => (
						<Ionicons name="chatbubble" size={size} color={color} />
					),
				}}
			/>
			<Tabs.Screen
				name="profile"
				options={{
					title: "Profile",
					tabBarIcon: ({ color, size }) => (
						<Ionicons name="person" size={size} color={color} />
					),
				}}
			/>
			<Tabs.Screen
				name="absence"
				options={{
					href: isTeacher ? undefined : null,
				}}
			/>
		</Tabs>
	);
}