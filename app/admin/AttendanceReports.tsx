import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Image,
  Linking,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { useRouter } from "expo-router";
import api from "../utils/axiosConfig";

interface Attendance {
  id: number;
  employeeId: string;
  status: string;
  latitude: number;
  longitude: number;
  photoPath: string;
  date?: string;
}

const AttendanceReports = () => {

  const router = useRouter();

  const [attendance, setAttendance] =
    useState<Attendance[]>([]);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {

    fetchAttendance();

  }, []);

  const fetchAttendance = async () => {

    try {

      const response =
        await api.get("/attendance/all");

      setAttendance(response.data);

    } catch (error) {

      console.log(error);

    } finally {

      setLoading(false);
    }
  };

  const openMap = (
    lat: number,
    long: number
  ) => {

    Linking.openURL(
      `https://www.google.com/maps?q=${lat},${long}`
    );
  };

  if (loading) {

    return (

      <View style={styles.loadingContainer}>

        <ActivityIndicator
          size="large"
          color="#2563eb"
        />

        <Text style={styles.loadingText}>
          Loading Reports...
        </Text>

      </View>
    );
  }

  return (

    <View style={styles.container}>

      {/* Header */}

      <View style={styles.header}>

        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.push("./AdminDashboard")}
        >

          <Text style={styles.backButtonText}>
            ← Back
          </Text>

        </TouchableOpacity>

        <Text style={styles.title}>
          Attendance Reports
        </Text>

      </View>

      {/* Table Header */}

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>

        <View>

          <View style={styles.tableHeader}>
              <Text style={styles.headerText1}>
              S.No
            </Text>

            <Text style={styles.headerText}>
              Employee
            </Text>

            <Text style={styles.headerText}>
              Selfie
            </Text>

            <Text style={styles.headerText}>
              Status
            </Text>

            <Text style={styles.headerText}>
              Latitude
            </Text>

            <Text style={styles.headerText}>
              Longitude
            </Text>

            <Text style={styles.headerText}>
              Date
            </Text>

            <Text style={styles.headerText}>
              Map
            </Text>

          </View>

          <FlatList
            data={attendance}
            keyExtractor={(item) =>
              item.id.toString()
            }
            renderItem={({ item, index }) => (

              <View style={styles.tableRow}>
            <Text style={styles.cellText1}>
                  {index+1}
                </Text>
                <Text style={styles.cellText}>
                  {item.employeeId}
                </Text>

                <View style={styles.imageCell}>

                  <Image
                    source={{
                      uri: item.photoPath,
                    }}
                    style={styles.selfie}
                  />

                </View>

                <View
                  style={
                    item.status === "Present"
                      ? styles.presentBox
                      : styles.absentBox
                  }
                >

                  <Text
                    style={
                      item.status === "Present"
                        ? styles.presentText
                        : styles.absentText
                    }
                  >
                    {item.status}
                  </Text>

                </View>

                <Text style={styles.cellText}>
                  {item.latitude}
                </Text>

                <Text style={styles.cellText}>
                  {item.longitude}
                </Text>

                <Text style={styles.cellText}>
                  {item.date || "N/A"}
                </Text>

                <TouchableOpacity
                  style={styles.mapButton}
                  onPress={() =>
                    openMap(
                      item.latitude,
                      item.longitude
                    )
                  }
                >

                  <Text style={styles.mapButtonText}>
                    Open
                  </Text>

                </TouchableOpacity>

              </View>
            )}
          />

        </View>

      </ScrollView>

    </View>
  );
};

export default AttendanceReports;

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#f3f4f6",
    paddingTop: 50,
    paddingHorizontal: 12,
  },

  header: {
    marginBottom: 20,
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

  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#111827",
  },

  tableHeader: {
    flexDirection: "row",
    backgroundColor: "#2563eb",
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    paddingVertical: 14,
  },

  headerText1: {
    width: 40,
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 14,
    textAlign: "center",
  },
  headerText: {
    width: 120,
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 14,
    textAlign: "center",
  },

  tableRow: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ffffff",
    marginBottom: 2,
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: "#e5e7eb",
  },

  cellText: {
    width: 120,
    textAlign: "center",
    color: "#374151",
    fontWeight: "600",
    fontSize: 13,
  },
cellText1: {
    width: 40,
    textAlign: "center",
    color: "#374151",
    fontWeight: "600",
    fontSize: 13,
  },
  imageCell: {
    width: 100,
    alignItems: "center",
  },

  selfie: {
  width: 120,
  height: 90,
  borderRadius: 14,
  borderWidth: 2,
  borderColor: "#2563eb",
},

  presentBox: {
    width: 130,
    alignItems: "center",
  },

  presentText: {
    backgroundColor: "#dcfce7",
    color: "#15803d",
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 20,
    fontWeight: "bold",
  },

  absentBox: {
    width: 130,
    alignItems: "center",
  },

  absentText: {
    backgroundColor: "#fee2e2",
    color: "#dc2626",
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 20,
    fontWeight: "bold",
  },

  mapButton: {
    backgroundColor: "#2563eb",
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 12,
    marginLeft: 20,
  },

  mapButtonText: {
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 13,
  },

  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
  },

  loadingText: {
    marginTop: 14,
    fontSize: 18,
    fontWeight: "bold",
    color: "#374151",
  },

});