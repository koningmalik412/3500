import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import { initializeDatabase } from "./utils/database";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Create a context
const DatabaseContext = createContext<any | null>(null);

// DatabaseProvider component
export const DatabaseProvider = ({ children }: { children: ReactNode }) => {
  const [db, setDb] = useState<any>(null); // Assuming you manage your database state here
  const [session, setSession] = useState("");
  const [user, setUser] = useState({});

  const saveSession = async (token: string) => {
    try {
      await AsyncStorage.setItem("userToken", token);
      setSession(token);
    } catch (error) {
      console.error("Failed to save session", error);
    }
  };

  // Load session from AsyncStorage
  const loadSession = async () => {
    try {
      const token = await AsyncStorage.getItem("userToken");
      if (token) {
        setSession(token);
      }
    } catch (error) {
      console.error("Failed to load session", error);
    }
  };

  // Clear session
  const clearSession = async () => {
    try {
      await AsyncStorage.removeItem("userToken");
      setSession("");
    } catch (error) {
      console.error("Failed to clear session", error);
    }
  };

  const loadUser = (user: {}) => {
    setUser(user);
    console.log("User set as:", user);
  };

  const clearUser = () => {
    setUser({});
  };

  // Initialize or manage your database here
  useEffect(() => {
    const setupDatabase = async () => {
      try {
        const database = await initializeDatabase();
        setDb(database);
      } catch (error) {
        console.error("Failed to initialize the database:", error);
      }
    };

    setupDatabase();
    loadSession();
  }, []);

  return (
    <DatabaseContext.Provider
      value={{
        db,
        setDb,
        session,
        saveSession,
        clearSession,
        user,
        loadUser,
        clearUser,
      }}
    >
      {children}
    </DatabaseContext.Provider>
  );
};

// Custom hook to use the database context
export const useDatabase = () => {
  const context = useContext(DatabaseContext);
  if (!context) {
    throw new Error("useDatabase must be used within a DatabaseProvider");
  }
  return context;
};
