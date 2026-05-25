import { useRouter } from "expo-router";
import { useState } from "react";

import {
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import api from "../utils/axiosConfig";


export default function CreateEmployee() {
  const [employeeId, setEmployeeId] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [dob, setDob] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
const [isSuccess, setIsSuccess] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [message, setMessage] = useState("");
  const router = useRouter();

  const createEmployee = async () => {
    if (!employeeId || !name || !password || !phoneNumber || !dob || !email) {
      setMessage("Please fill all required fields");
      setModalVisible(true);
      return;
    }

    try {
      const response = await api.post(
        "/employee/register",
        {
          employeeId,
          name,
          password,
          phoneNumber,
          dob,
          email,
          city,
        }
      );

      setMessage("Employee Created Successfully");
      setModalVisible(true);

      setEmployeeId("");
      setName("");
      setPassword("");
      setPhoneNumber("");
      setDob("");
      setEmail("");
      setCity("");
setIsSuccess(true);

    } catch (error) {
        setIsSuccess(false);

      setMessage("Employee creation failed");
      setModalVisible(true);
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
 <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.push("./AdminDashboard")}
        >

          <Text style={styles.backButtonText}>
            ← Back
          </Text>

        </TouchableOpacity>

      <Text style={styles.title}>Create Employee</Text>

      <TextInput
        placeholder="Employee ID"
        style={styles.input}
        value={employeeId}
        onChangeText={setEmployeeId}
      />

      <TextInput
        placeholder="Employee Name"
        style={styles.input}
        value={name}
        onChangeText={setName}
      />

      <TextInput
        placeholder="Password"
        secureTextEntry
        style={styles.input}
        value={password}
        onChangeText={setPassword}
      />

      <TextInput
        placeholder="Phone Number"
        keyboardType="phone-pad"
        style={styles.input}
        value={phoneNumber}
        onChangeText={setPhoneNumber}
      />

      <TextInput
        placeholder="DOB (YYYY-MM-DD)"
        style={styles.input}
        value={dob}
        onChangeText={setDob}
      />

      <TextInput
        placeholder="Email"
        style={styles.input}
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        placeholder="City (Optional)"
        style={styles.input}
        value={city}
        onChangeText={setCity}
      />

      <TouchableOpacity style={styles.button} onPress={createEmployee}>
        <Text style={styles.buttonText}>Create</Text>
      </TouchableOpacity>
      {/* Modal */}
      <Modal
        transparent
        animationType="fade"
        visible={modalVisible}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalBox}>
            <Text style={styles.modalTitle}>{message}</Text>

            <TouchableOpacity
              style={styles.closeButton}
onPress={() => {
  setModalVisible(false);

  if (isSuccess) {
    navigation.navigate("AdminDashboard");
  }
}}            >
              <Text style={styles.buttonText}>OK</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{flex:1,padding:20,justifyContent:"center"},
  title:{fontSize:24,fontWeight:"bold",marginBottom:20},
  input:{borderWidth:1,padding:12,borderRadius:10,marginBottom:15},
  button:{backgroundColor:"#2563EB",padding:15,borderRadius:12},
  buttonText:{color:"#fff",textAlign:"center",fontWeight:"bold"},

  modalOverlay:{
    flex:1,
    backgroundColor:"rgba(0,0,0,0.5)",
    justifyContent:"center",
    alignItems:"center"
  },
backButton: {
    backgroundColor: "#111827",
    alignSelf: "flex-start",
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: 12,
    marginBottom: 15,
  },

  backButtonText: {
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 15,
  },
  modalBox:{
    width:"80%",
    backgroundColor:"#fff",
    padding:25,
    borderRadius:15,
    alignItems:"center"
  },

  modalTitle:{
    fontSize:18,
    fontWeight:"bold",
    marginBottom:20
  },

  closeButton:{
    backgroundColor:"#2563EB",
    paddingVertical:12,
    paddingHorizontal:30,
    borderRadius:10
  }
});