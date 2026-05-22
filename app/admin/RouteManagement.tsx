import React, { useState } from "react";
import {
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import api from "../utils/axiosConfig";


export default function RouteManagement() {
  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [message, setMessage] = useState("");

  const addRoute = async () => {
    if (!source || !destination) {
      setMessage("Please fill all fields");
      setModalVisible(true);
      return;
    }

    try {
      const response = await api.post(
        "/route/add",
        {
          source,
          destination,
        }
      );

      setMessage("Route added successfully");
      setModalVisible(true);
      setSource("");
      setDestination("");
    } catch (error) {
      setMessage("Failed to add route");
      setModalVisible(true);
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add Route</Text>

      <TextInput
        placeholder="Source"
        style={styles.input}
        value={source}
        onChangeText={setSource}
      />

      <TextInput
        placeholder="Destination"
        style={styles.input}
        value={destination}
        onChangeText={setDestination}
      />

      <TouchableOpacity style={styles.button} onPress={addRoute}>
        <Text style={styles.buttonText}>Add Route</Text>
      </TouchableOpacity>

      <Modal transparent visible={modalVisible} animationType="fade">
        <View style={styles.modalOverlay}>
          <View style={styles.modalBox}>
            <Text style={styles.modalTitle}>{message}</Text>

            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setModalVisible(false)}
            >
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
  button:{backgroundColor:"#F59E0B",padding:15,borderRadius:12},
  buttonText:{color:"#fff",textAlign:"center",fontWeight:"bold"},
  modalOverlay:{
    flex:1,
    backgroundColor:"rgba(0,0,0,0.5)",
    justifyContent:"center",
    alignItems:"center"
  },
  modalBox:{
    width:"80%",
    backgroundColor:"#fff",
    padding:20,
    borderRadius:15,
    alignItems:"center"
  },
  modalTitle:{fontSize:18,fontWeight:"bold",marginBottom:20},
  closeButton:{backgroundColor:"#F59E0B",padding:12,borderRadius:10}
});