import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
    Alert,
    Modal,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from "react-native";

type FormType = {
  name: string;
  mobile: string;
  email?: string;
  dob: string;
  city?: string;
  password: string;
};

const RegisterScreen = ({ navigation }: any) => {
      const router = useRouter();
    
    const [loading, setLoading] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
const [empId, setEmpId] = useState("");
const [userName, setUserName] = useState("");

  const [form, setForm] = useState<FormType>({
    name: "",
    mobile: "",
    email: "",
    dob: "",
    city: "",
    password: "",
  });

  const handleChange = (key: keyof FormType, value: string) => {
    setForm({ ...form, [key]: value });
  };

 const handleRegister = async () => {
      setLoading(true);

  try {
    const res = await fetch("http://localhost:8080/api/employee/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    const data = await res.json();

    if (res.ok) {

        setEmpId(data.employeeId);
  setUserName(data.name);
  setShowSuccess(true);
      Alert.alert(
        "🎉 Registration Successful",
        `Welcome ${data.name}!\n\nYour Employee ID is:\n${data.employeeId}`,
        [
          {
            text: "Go to Login",
            onPress: () => navigation.navigate("Login"),
          },
        ]
      );
    
  

 

      // ✅ Optional: Clear form after success
      setForm({
        name: "",
        mobile: "",
        email: "",
        dob: "",
        city: "",
        password: "",
      });

    } else {
      Alert.alert("❌ Error", data || "Registration failed");
    }
  } catch (err: any) {
    Alert.alert("❌ Error", err.message);
  }
  finally {
    setLoading(false);
  }
};

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register</Text>

      <TextInput placeholder="Name" style={styles.input} onChangeText={(v) => handleChange("name", v)} />
      <TextInput placeholder="Mobile" style={styles.input} keyboardType="numeric" onChangeText={(v) => handleChange("mobile", v)} />
      <TextInput placeholder="Email (optional)" style={styles.input} onChangeText={(v) => handleChange("email", v)} />
      <TextInput placeholder="DOB (YYYY-MM-DD)" style={styles.input} onChangeText={(v) => handleChange("dob", v)} />
      <TextInput placeholder="City (optional)" style={styles.input} onChangeText={(v) => handleChange("city", v)} />
      <TextInput placeholder="Password" secureTextEntry style={styles.input} onChangeText={(v) => handleChange("password", v)} />

      <TouchableOpacity style={styles.button} onPress={handleRegister} disabled={loading}>
        <Text style={styles.buttonText}>{loading ? "Registering..." : "Register"}</Text>
      </TouchableOpacity>
      <Text style={styles.link} onPress={() => router.push("/employee/login")}>
        Already have account? Login
      </Text>

      <Modal visible={showSuccess} transparent animationType="fade">
  <View style={styles.modalOverlay}>
    <View style={styles.modalBox}>
      
      <Text style={styles.successTitle}>🎉 Registration Successful</Text>

      <Text style={styles.successText}>
        Welcome {userName}!
      </Text>

      <Text style={styles.successText}>
        Your Employee ID is:
      </Text>

      <Text style={styles.empId}>{empId}</Text>

      <TouchableOpacity
  style={styles.modalButton}
  onPress={() => {
    setShowSuccess(false); // ✅ close modal first
    router.push("/employee/login"); // ✅ navigate
  }}
>
  <Text style={styles.buttonText}>Go to Login</Text>
      </TouchableOpacity>

    </View>
  </View>
</Modal>
    </View>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 20 },
  title: { fontSize: 24, textAlign: "center", marginBottom: 20 },
  input: {
    borderWidth: 1,
    marginBottom: 12,
    padding: 12,
    borderRadius: 8,
  },
  button: {
    backgroundColor: "green",
    padding: 15,
    borderRadius: 8,
  },

  modalOverlay: {
  flex: 1,
  backgroundColor: "rgba(0,0,0,0.5)",
  justifyContent: "center",
  alignItems: "center",
},

modalBox: {
  width: "80%",
  backgroundColor: "#fff",
  padding: 20,
  borderRadius: 12,
  alignItems: "center",
},

successTitle: {
  fontSize: 20,
  fontWeight: "bold",
  marginBottom: 10,
},

successText: {
  fontSize: 16,
  marginBottom: 5,
},

empId: {
  fontSize: 22,
  fontWeight: "bold",
  color: "green",
  marginVertical: 10,
},

modalButton: {
  backgroundColor: "green",
  padding: 12,
  borderRadius: 8,
  marginTop: 10,
},
  buttonText: { color: "#fff", textAlign: "center" },
  link: { textAlign: "center", marginTop: 10 },
});