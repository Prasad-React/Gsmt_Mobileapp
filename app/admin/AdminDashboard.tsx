import { useRouter } from "expo-router";
import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function AdminDashboard() {
  const router = useRouter();

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.logo}>GSMT</Text>
        <Text style={styles.subtitle}>Mini Transport Dashboard</Text>
      </View>

      {/* Welcome */}
      <View style={styles.welcomeCard}>
        <Text style={styles.welcomeText}>Welcome Admin 👋</Text>
        <Text style={styles.welcomeSub}>
          Manage employees, vehicles and routes
        </Text>
      </View>

      {/* Stats Cards */}
      <View style={styles.cardRow}>
        <View style={[styles.statCard, { backgroundColor: "#DBEAFE" }]}>
          <Text style={styles.cardTitle}>Employees</Text>
          <Text style={styles.cardValue}>25</Text>
        </View>

        <View style={[styles.statCard, { backgroundColor: "#DCFCE7" }]}>
          <Text style={styles.cardTitle}>Vehicles</Text>
          <Text style={styles.cardValue}>12</Text>
        </View>
      </View>

      <View style={styles.cardRow}>
        <View style={[styles.statCard, { backgroundColor: "#FEF3C7" }]}>
          <Text style={styles.cardTitle}>Routes</Text>
          <Text style={styles.cardValue}>18</Text>
        </View>

        <View style={[styles.statCard, { backgroundColor: "#F3E8FF" }]}>
          <Text style={styles.cardTitle}>Bookings</Text>
          <Text style={styles.cardValue}>56</Text>
        </View>
      </View>

      {/* Quick Actions */}
      <Text style={styles.sectionTitle}>Quick Actions</Text>

      <TouchableOpacity
        style={styles.actionButton}
        onPress={() => router.push("/admin/CreateEmployee")}
      >
        <Text style={styles.actionText}>➕ Create Employee</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.actionButton} onPress={() => router.push("/admin/VehicleManagement")}>
        <Text style={styles.actionText}>🚌 Add Vehicle</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.actionButton} onPress={() => router.push("/admin/RouteManagement")}>
        <Text style={styles.actionText}>📍 Add Route</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.actionButton} onPress={() => router.push("/admin/Reports")}>
        <Text style={styles.actionText}>📊 View Reports</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.actionButton} onPress={() => router.push("./AttendanceReports")}>
        <Text style={styles.actionText}>📊 Attendance Reports</Text>
      </TouchableOpacity>

      {/* Logout */}
      <TouchableOpacity
        style={styles.logoutButton}
        onPress={() => router.replace("/admin/login")}
      >
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8FAFC",
    padding: 20,
  },

  header: {
    marginTop: 40,
    marginBottom: 20,
  },

  logo: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#2563EB",
  },

  subtitle: {
    fontSize: 16,
    color: "#64748B",
  },

  welcomeCard: {
    backgroundColor: "#2563EB",
    padding: 20,
    borderRadius: 16,
    marginBottom: 20,
  },

  welcomeText: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
  },

  welcomeSub: {
    color: "#E0E7FF",
    marginTop: 5,
  },

  cardRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
  },

  statCard: {
    width: "48%",
    padding: 20,
    borderRadius: 16,
    alignItems: "center",
  },

  cardTitle: {
    fontSize: 16,
    color: "#374151",
  },

  cardValue: {
    fontSize: 28,
    fontWeight: "bold",
    marginTop: 10,
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 20,
  },

  actionButton: {
    backgroundColor: "#fff",
    padding: 18,
    borderRadius: 14,
    marginBottom: 12,
    elevation: 2,
  },

  actionText: {
    fontSize: 16,
    fontWeight: "600",
  },

  logoutButton: {
    backgroundColor: "#EF4444",
    padding: 16,
    borderRadius: 14,
    marginTop: 20,
    marginBottom: 50,
  },

  logoutText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
  },
});