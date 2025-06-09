import { createContext, useContext, useState } from "react";
import { validateCredentials } from "../constants/auth";

const AuthContext = createContext({});

export function AuthProvider({ children }) {
	const [user, setUser] = useState(null);

	const login = (email, password) => {
		const userData = validateCredentials(email, password);
		if (userData) {
			setUser(userData);
			return true;
		}
		return false;
	};

	const logout = () => {
		setUser(null);
	};

	return (
		<AuthContext.Provider value={{ user, login, logout }}>
			{children}
		</AuthContext.Provider>
	);
}

export const useAuth = () => {
	return useContext(AuthContext);
};
