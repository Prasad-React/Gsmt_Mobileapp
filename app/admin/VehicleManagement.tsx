import React, { useState } from "react";
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function VehicleManagement() {
  const [vehicleNo, setVehicleNo] = useState("");
  const [driver, setDriver] = useState("");

  const addVehicle = () => {
    Alert.alert("Success", "Vehicle Added");
    setVehicleNo("");
    setDriver("");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add Vehicle</Text>

      <TextInput
        placeholder="Vehicle Number"
        style={styles.input}
        value={vehicleNo}
        onChangeText={setVehicleNo}
      />

      <TextInput
        placeholder="Driver Name"
        style={styles.input}
        value={driver}
        onChangeText={setDriver}
      />

      <TouchableOpacity style={styles.button} onPress={addVehicle}>
        <Text style={styles.buttonText}>Add Vehicle</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{flex:1,padding:20,justifyContent:"center"},
  title:{fontSize:24,fontWeight:"bold",marginBottom:20},
  input:{borderWidth:1,padding:12,borderRadius:10,marginBottom:15},
  button:{backgroundColor:"green",padding:15,borderRadius:12},
  buttonText:{color:"#fff",textAlign:"center"}
});