import { createContext, useContext, useEffect, useState } from "react";
import { getUserProfile, signIn, signOut, supabase } from "../lib/supabase";

const AuthContext = createContext({});

export function AuthProvider({ children }) {
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		// Sprawdź sesję przy starcie aplikacji
		checkUser();

		// Nasłuchuj zmian w autoryzacji
		const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
			if (session) {
				loadUserProfile(session.user.id);
			} else {
				setUser(null);
			}
		});

		return () => {
			subscription?.unsubscribe();
		};
	}, []);

	const checkUser = async () => {
		try {
			const { data: { session } } = await supabase.auth.getSession();
			if (session) {
				await loadUserProfile(session.user.id);
			}
		} catch (error) {
			console.error("Błąd podczas sprawdzania sesji:", error);
		} finally {
			setLoading(false);
		}
	};

	const loadUserProfile = async (userId) => {
		try {
			const { data, error } = await getUserProfile(userId);
			if (error) throw error;
			setUser(data);
		} catch (error) {
			console.error("Błąd podczas ładowania profilu:", error);
			setUser(null);
		}
	};

	const login = async (email, password) => {
		try {
			const { data, error } = await signIn(email, password);
			if (error) throw error;
			return true;
		} catch (error) {
			console.error("Błąd logowania:", error);
			return false;
		}
	};

	const logout = async () => {
		try {
			const { error } = await signOut();
			if (error) throw error;
			setUser(null);
		} catch (error) {
			console.error("Błąd wylogowania:", error);
		}
	};

	return (
		<AuthContext.Provider value={{ user, login, logout, loading }}>
			{children}
		</AuthContext.Provider>
	);
}

export const useAuth = () => {
	return useContext(AuthContext);
};
