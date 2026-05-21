import { useLocalSearchParams, useRouter } from "expo-router";
import React from "react";
import {
  Alert,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";


export default function EmployeeDashboard() {
  const router = useRouter();
  const { employeeId } = useLocalSearchParams();

  const handleLogout = () => {
  Alert.alert(
    "Logout",
    "Are you sure you want to logout?",
    [
      {
        text: "Cancel",
        style: "cancel"
      },
      {
        text: "Yes",
        onPress: () => router.push("/entryScreen")
      }
    ]
  );
};

  return (
    <View style={styles.container}>
      <Text style={styles.header}>GSMT Employee Dashboard</Text>

      <View style={styles.profileCard}>
        <Text style={styles.name}>Welcome Employee</Text>
        <Text style={styles.id}>ID: {employeeId}</Text>
      </View>

      <TouchableOpacity
        style={styles.card}
        onPress={() =>
          router.push({
            pathname: "/employee/EmployeeAttendance",
            params: { employeeId }
          })
        }
      >
        <Text style={styles.cardTitle}>Attendance</Text>
        <Text style={styles.cardSub}>
          Mark your daily attendance
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.card}>
        <Text style={styles.cardTitle}>Route Details</Text>
        <Text style={styles.cardSub}>
          View assigned routes
        </Text>
      </TouchableOpacity>

     <TouchableOpacity
  style={styles.logoutBtn}
  onPress={() => router.replace("/entryScreen")}
>
  <Text style={styles.logoutText}>Logout</Text>
</TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3F4F6",
    padding: 20
  },

  header: {
    fontSize: 26,
    fontWeight: "bold",
    marginTop: 40,
    marginBottom: 25,
    textAlign: "center"
  },

  profileCard: {
    backgroundColor: "#2563EB",
    padding: 25,
    borderRadius: 20,
    marginBottom: 25
  },

  name: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold"
  },

  id: {
    color: "#E5E7EB",
    marginTop: 8,
    fontSize: 16
  },

  card: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 18,
    marginBottom: 18,
    elevation: 5
  },

  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5
  },

  cardSub: {
    color: "#6B7280"
  },

  logoutBtn: {
    backgroundColor: "#EF4444",
    padding: 16,
    borderRadius: 15,
    marginTop: 20
  },

  logoutText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16
  }
});