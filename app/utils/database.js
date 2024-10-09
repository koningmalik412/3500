import * as SQLite from "expo-sqlite";
import * as FileSystem from "expo-file-system";
import { hashPassword } from "./passwordHash.js";
import studentsData from "./data/students.json";
import hobbiesData from "./data/hobbies.json";

// Open the SQLite database asynchronously
const openDatabase = async () => {
  try {
    const db = await SQLite.openDatabaseAsync("mydatabase.db");
    return db;
  } catch (error) {
    console.error("Error opening the database:", error);
    throw error;
  }
};

// Initialize the database and create the tables
export const initializeDatabase = async () => {
  const db = await openDatabase();

  try {
    // Using execAsync for executing multiple statements at once
    await db.execAsync(`
      PRAGMA journal_mode = WAL;

      CREATE TABLE IF NOT EXISTS users (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          username TEXT NOT NULL UNIQUE,
          password TEXT NOT NULL, -- Hash the password before storing
          full_name TEXT,
          date_of_birth DATE,
          study_program TEXT,
          major TEXT,
          study_status TEXT,
          nickname TEXT,
          mbti TEXT,
          bio TEXT,
          ethnicity TEXT,
          gender TEXT,
          home_country TEXT,
          created_at DATETIME DEFAULT CURRENT_TIMESTAMP
      );

      CREATE TABLE IF NOT EXISTS hobbies (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          hobby TEXT NOT NULL,
          category TEXT NOT NULL
      );

      CREATE TABLE IF NOT EXISTS user_hobbies (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          user_id INTEGER NOT NULL,
          hobby_id INTEGER NOT NULL,
          FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
          FOREIGN KEY (hobby_id) REFERENCES hobbies(id) ON DELETE CASCADE,
          UNIQUE (user_id, hobby_id) -- Ensure each user-hobby combination is unique
      );
    `);
    console.log("Tables created or verified");

    // Pre-populate the users table
    const userCount = await getUserCount(db);
    if (userCount === 0) {
      await insertInitialUsers(db);
    }
    const hobbyCount = await getHobbyCount(db);
    if (hobbyCount === 0) {
      await insertInitialHobbies(db);
    }
  } catch (error) {
    console.error("Error initializing the database:", error);
    throw error;
  }
};

const getUserCount = async (db) => {
  try {
    const result = await db.getFirstAsync(
      "SELECT COUNT(*) AS count FROM users"
    );
    return result.count;
  } catch (error) {
    console.error("Error getting user count:", error);
    throw error;
  }
};

const getHobbyCount = async (db) => {
  try {
    const result = await db.getFirstAsync(
      "SELECT COUNT(*) AS count FROM hobbies"
    );
    return result.count;
  } catch (error) {
    console.error("Error getting hobby count:", error);
    throw error;
  }
};

// Pre-populate the users database with initial data
const insertInitialUsers = async (db) => {
  for (const user of studentsData) {
    try {
      const hashedPassword = await hashPassword(user.password);

      await db.runAsync(
        "INSERT INTO users (username, password, full_name, date_of_birth, study_program, major, study_status) VALUES (?, ?, ?, ?, ?, ?, ?)",
        user.username,
        hashedPassword, // Ensure to hash passwords before storing
        user.full_name,
        user.date_of_birth,
        user.study_program,
        user.major,
        user.study_status
      );
      console.log(`Inserted user: ${user.username}`);
    } catch (error) {
      console.error(`Error inserting user ${user.username}:`, error);
      // Handle specific errors if necessary (e.g., UNIQUE constraint violation)
    }
  }
};

// Insert initial hobbies into the database
const insertInitialHobbies = async (db) => {
  try {
    // Insert each hobby with category into the hobbies table
    for (const { hobby, category } of hobbiesData) {
      await db.runAsync(
        "INSERT INTO hobbies (hobby, category) VALUES (?, ?)",
        hobby,
        category
      );
      console.log(`Inserted hobby: ${hobby} with category: ${category}`);
    }
  } catch (error) {
    console.error("Error inserting initial hobbies:", error);
    throw error;
  }
};

// Associate a user with a hobby
export const associateUserWithHobby = async (userId, hobbyId) => {
  const db = await openDatabase();

  try {
    const result = await db.runAsync(
      "INSERT INTO user_hobbies (user_id, hobby_id) VALUES (?, ?)",
      userId,
      hobbyId
    );
    console.log(
      "User-hobby association created with ID:",
      result.lastInsertRowId
    );
  } catch (error) {
    console.error("Error associating user with hobby:", error);
    throw error;
  }
};

// Fetch all hobbies for a user
export const fetchHobbiesByUserId = async (userId) => {
  const db = await openDatabase();

  try {
    const hobbies = await db.getAllAsync(
      `
      SELECT h.* FROM hobbies h
      JOIN user_hobbies uh ON h.id = uh.hobby_id
      WHERE uh.user_id = ?
    `,
      [userId]
    );
    console.log("Fetched hobbies for user:", hobbies);
    return hobbies;
  } catch (error) {
    console.error("Error fetching hobbies:", error);
    throw error;
  }
};

// Fetch all users for a hobby
export const fetchUsersByHobbyId = async (hobbyId) => {
  const db = await openDatabase();

  try {
    const users = await db.getAllAsync(
      `
      SELECT u.* FROM users u
      JOIN user_hobbies uh ON u.id = uh.user_id
      WHERE uh.hobby_id = ?
    `,
      [hobbyId]
    );
    console.log("Fetched users for hobby:", users);
    return users;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
};

// Update a user's information
export const updateUser = async (id, updates) => {
  const db = await openDatabase();

  const fields = [];
  const values = [];

  for (const [key, value] of Object.entries(updates)) {
    fields.push(`${key} = ?`);
    values.push(value);
  }

  values.push(id);

  const query = `UPDATE users SET ${fields.join(", ")} WHERE id = ?`;

  try {
    await db.runAsync(query, ...values);
    console.log(`User with ID ${id} updated`);
  } catch (error) {
    console.error("Error updating user:", error);
    throw error;
  }
};

// Delete a user by ID
export const deleteUserById = async (id) => {
  const db = await openDatabase();

  try {
    await db.runAsync("DELETE FROM users WHERE id = ?", [id]);
    console.log(`User with ID ${id} deleted`);
  } catch (error) {
    console.error("Error deleting user:", error);
    throw error;
  }
};

// Delete a hobby by ID
export const deleteHobbyById = async (id) => {
  const db = await openDatabase();

  try {
    await db.runAsync("DELETE FROM hobbies WHERE id = ?", [id]);
    console.log(`Hobby with ID ${id} deleted`);
  } catch (error) {
    console.error("Error deleting hobby:", error);
    throw error;
  }
};

export const deleteAllHobbies = async () => {
  const db = await openDatabase();

  try {
    // Using runAsync for delete operation
    await db.runAsync("DELETE FROM hobbies");
    console.log("All hobbies deleted");
  } catch (error) {
    console.error("Error deleting all hobbies:", error);
    throw error;
  }
};

// Fetch all users
export const fetchAllUsers = async () => {
  const db = await openDatabase();

  try {
    const users = await db.getAllAsync("SELECT * FROM users");
    console.log("Fetched users:", users);
    return users;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
};

export const fetchAllHobbies = async () => {
  const db = await openDatabase();

  try {
    const hobbies = await db.getAllAsync("SELECT * FROM hobbies");
    console.log("Fetched hobbies:", hobbies);
    return hobbies;
  } catch (error) {
    console.error("Error fetching hobbies:", error);
    throw error;
  }
};

export const fetchHobbyCategories = async () => {
  const db = await openDatabase();

  try {
    const categories = await db.getAllAsync(
      "SELECT DISTINCT category FROM hobbies"
    );
    console.log("Fetched categories:", categories);
    return categories;
  } catch (error) {
    console.error("Error fetching categories:", error);
    throw error;
  }
};

// Iterate over each user
export const fetchEachUser = async () => {
  const db = await openDatabase();

  try {
    for await (const user of db.getEachAsync("SELECT * FROM users")) {
      console.log("User:", user);
    }
  } catch (error) {
    console.error("Error iterating users:", error);
    throw error;
  }
};
