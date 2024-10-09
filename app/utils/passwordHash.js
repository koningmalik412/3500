import * as Crypto from "expo-crypto";

// Hash a password using SHA-256
export const hashPassword = async (password) => {
  try {
    const hashedPassword = await Crypto.digestStringAsync(
      Crypto.CryptoDigestAlgorithm.SHA256,
      password
    );
    return hashedPassword;
  } catch (error) {
    console.error("Error hashing password:", error);
    throw error;
  }
};

// Password verification (SHA-256 version)
export const verifyPassword = async (password, hashedPassword) => {
  try {
    const newHashedPassword = await hashPassword(password);
    return newHashedPassword === hashedPassword;
  } catch (error) {
    console.error("Error verifying password:", error);
    throw error;
  }
};
