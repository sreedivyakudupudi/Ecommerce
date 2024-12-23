import { useState, useEffect, useContext, createContext } from "react";
import axios from "axios";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({
        user: null,
        token: "",
    });

    //default axios
    axios.defaults.headers.common["Authorization"] = auth?.token;

    useEffect(() => {
        console.log("useEffect triggered");
        const data = localStorage.getItem("auth");
        if (data) {
            const parseData = JSON.parse(data);
            console.log("Parsed Data: ", parseData);
            setAuth({
                ...auth,
                user: parseData.user,
                token: parseData.token,
            });
        } else {
            console.log("No auth data in localStorage");
        }
    }, []); // Empty dependency array to avoid infinite re-rendering

    return (
        <AuthContext.Provider value={[auth, setAuth]}>
            {children}
        </AuthContext.Provider>
    );
};

// Custom hook for accessing the auth context
const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };
