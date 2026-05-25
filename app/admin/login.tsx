import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import api from "../utils/axiosConfig";


export default function AdminLogin() {
  const router = useRouter();
   const [showPassword, setShowPassword] = useState(false); 
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

 const handleLogin = async (): Promise<void> => {
  try {
    const response = await api.post(
      "/admin/login",
      {
        username,
        password,
      }
    );
    console.log(response.data);
    if (response.data.trim() === "Login Successful") {
      router.replace("/admin/AdminDashboard");
    } else {
      Alert.alert("Error", response.data);
    }
  } catch (error: any) {
    console.log(error);
    Alert.alert("Error", error.message);
  }
};
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Admin Login</Text>

        <TextInput
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
          style={styles.input}
        />
 <View style={styles.passwordContainer}>
  <TextInput
    placeholder="Password"
    secureTextEntry={!showPassword}
    style={styles.passwordInput}
    value={password}
    onChangeText={setPassword}
  />
  <TouchableOpacity
    onPress={() => setShowPassword(!showPassword)}
  >
    <Ionicons
      name={showPassword ? "eye-off" : "eye"}
      size={24}
      color="gray"
    />
  </TouchableOpacity>
</View>

        <TouchableOpacity
          onPress={() => router.push("/admin/ForgotPassword")}
        >
          <Text style={styles.link}>Forgot Password?</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 20 },
  card: { backgroundColor: "#fff", padding: 20, borderRadius: 20 },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
  input: {
    borderWidth: 1,
    padding: 12,
    borderRadius: 10,
    marginBottom: 15,
  },
  link: {
    color: "blue",
    marginBottom: 15,
  },
  button: {
    backgroundColor: "#2563EB",
    padding: 15,
    borderRadius: 12,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
  },
  passwordContainer: {
  flexDirection: "row",
  alignItems: "center",
  borderWidth: 1,
  borderRadius: 10,
  paddingHorizontal: 12,
  marginBottom: 15,
},

passwordInput: {
  flex: 1,
  padding: 12,
}
});