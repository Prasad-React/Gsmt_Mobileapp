import React from "react";
import {
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function Reports() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Reports</Text>

      <View style={styles.card}>
        <Text>Total Employees: 25</Text>
      </View>

      <View style={styles.card}>
        <Text>Total Vehicles: 12</Text>
      </View>

      <View style={styles.card}>
        <Text>Total Routes: 18</Text>
      </View>

      <View style={styles.card}>
        <Text>Today's Bookings: 56</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{flex:1,padding:20},
  title:{fontSize:24,fontWeight:"bold",marginBottom:20},
  card:{
    backgroundColor:"#fff",
    padding:20,
    borderRadius:12,
    marginBottom:15
  }
});