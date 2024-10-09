import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import { initializeDatabase } from "./utils/database";

// Create a context
const DatabaseContext = createContext<any | null>(null);

// DatabaseProvider component
export const DatabaseProvider = ({ children }: { children: ReactNode }) => {
  const [db, setDb] = useState<any>(null); // Assuming you manage your database state here

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
  }, []);

  return (
    <DatabaseContext.Provider value={{ db, setDb }}>
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
