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

export default function EmployeeLogin() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [employeeId, setEmployeeId] = useState("");
  const [password, setPassword] = useState("");

  const loginEmployee = async () => {
    if (!employeeId || !password) {
      Alert.alert("Error", "Enter Employee ID and Password");
      return;
    }

    try {
      const response = await api.post(
        "/employee/login",
        {
          employeeId,
          password,
        }
      );

      Alert.alert("Success", response.data);

      router.push({
        pathname: "/employee/EmployeeDashboard",
        params: { employeeId }
      });

    } catch (error) {
      Alert.alert("Error", "Invalid Credentials");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Employee Login</Text>

      <TextInput
        placeholder="Employee ID"
        style={styles.input}
        value={employeeId}
        onChangeText={setEmployeeId}
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
        style={styles.button}
        onPress={loginEmployee}
      >
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => router.push("/employee/ForgotPassword")}
      >
        <Text style={styles.forgot}>Forgot Password?</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    padding:20,
    justifyContent:"center"
  },
  title:{
    fontSize:24,
    fontWeight:"bold",
    marginBottom:20
  },
  input:{
    borderWidth:1,
    padding:12,
    borderRadius:10,
    marginBottom:15
  },
  button:{
    backgroundColor:"#2563EB",
    padding:15,
    borderRadius:12
  },
  buttonText:{
    color:"#fff",
    textAlign:"center"
  },
  forgot:{
    marginTop:15,
    textAlign:"center",
    color:"blue"
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