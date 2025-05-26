import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(() => {
        const storedUser = localStorage.getItem("LibyanUser");
        return storedUser ? JSON.parse(storedUser) : null;
    });

    const login = (userData = '') => {
        if (!userData || typeof userData !== "object") return;
    
        setUser(userData);
        localStorage.setItem("LibyanUser", JSON.stringify(userData));
    };
    

    const logout = () => {
        setUser(null);
        localStorage.removeItem("LibyanUser"); // Remove from localStorage
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
