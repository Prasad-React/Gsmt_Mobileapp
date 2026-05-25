import * as ImagePicker from "expo-image-picker";
import * as Location from "expo-location";
import { useLocalSearchParams, useRouter } from "expo-router";
import React, { useState } from "react";
import {
  Alert,
  Image,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import api from "../utils/axiosConfig";

export default function EmployeeAttendance() {
  const router = useRouter();
  const { employeeId } = useLocalSearchParams();

  const [location, setLocation] = useState<any>(null);
  const [photo, setPhoto] = useState<string | null>(null);

  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const capturePhoto = async () => {
    const permission =
      await ImagePicker.requestCameraPermissionsAsync();

    if (!permission.granted) {
      Alert.alert("Permission denied");
      return;
    }

    const result = await ImagePicker.launchCameraAsync({
      quality: 0.5,
    });

    if (!result.canceled) {
      setPhoto(result.assets[0].uri);
    }
  };

  const getLocation = async () => {
    const { status } =
      await Location.requestForegroundPermissionsAsync();

    if (status !== "granted") {
      Alert.alert("Location permission denied");
      return;
    }

    const loc = await Location.getCurrentPositionAsync({});
    setLocation(loc.coords);
  };

  const markAttendance = async (status: string) => {
    if (!photo || !location) {
      Alert.alert("Please capture photo and location");
      return;
    }

    try {
      const empId = Array.isArray(employeeId)
        ? employeeId[0]
        : employeeId;

      const formData = new FormData();

      formData.append("employeeId", String(empId));
      formData.append("status", status);
      formData.append(
        "latitude",
        String(location.latitude)
      );
      formData.append(
        "longitude",
        String(location.longitude)
      );

      const imageFile = {
        uri: photo,
        type: "image/jpeg",
        name: "selfie.jpg",
      };

      formData.append("photo", imageFile as any);

      console.log("SENDING FORM DATA:", formData);

const res = await api.post(
  "/attendance/mark",
  formData,
  {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  }
);
      console.log("SUCCESS RESPONSE:", res.data);

      setSuccessMessage(
        `${status} marked successfully`
      );

      setShowSuccessModal(true);

    } catch (error: any) {
      console.log(
        "FULL ERROR:",
        JSON.stringify(error, null, 2)
      );

      console.log("MESSAGE:", error.message);

      Alert.alert(
        "Error",
        error.message || "Attendance failed"
      );
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Employee Attendance
      </Text>

      <Text style={styles.empId}>
        Employee: {employeeId}
      </Text>

      <TouchableOpacity
        style={styles.locationBtn}
        onPress={getLocation}
      >
        <Text style={styles.btnText}>
          Get Location
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.cameraBtn}
        onPress={capturePhoto}
      >
        <Text style={styles.btnText}>
          Capture Selfie
        </Text>
      </TouchableOpacity>

      {photo && (
        <Image
          source={{ uri: photo }}
          style={styles.image}
        />
      )}

      {location && (
        <Text style={styles.locationText}>
          Lat: {location.latitude}
          {"\n"}
          Long: {location.longitude}
        </Text>
      )}

      <TouchableOpacity
        style={styles.presentBtn}
        onPress={() =>
          markAttendance("Present")
        }
      >
        <Text style={styles.btnText}>
          Mark Present
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.absentBtn}
        onPress={() =>
          markAttendance("Absent")
        }
      >
        <Text style={styles.btnText}>
          Mark Absent
        </Text>
      </TouchableOpacity>

      <Modal
        visible={showSuccessModal}
        transparent
        animationType="fade"
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalBox}>
            <Text style={styles.modalTitle}>
              Success
            </Text>

            <Text style={styles.modalText}>
              {successMessage}
            </Text>

            <TouchableOpacity
              style={styles.modalButton}
              onPress={() => {
                setShowSuccessModal(false);

                setTimeout(() => {
                  router.push({
                    pathname:
                      "/employee/EmployeeDashboard",
                    params: {
                      employeeId:
                        employeeId as string,
                    },
                  });
                }, 300);
              }}
            >
              <Text style={styles.btnText}>
                Go to Dashboard
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    backgroundColor: "#F9FAFB",
  },

  title: {
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },

  empId: {
    textAlign: "center",
    marginBottom: 25,
    fontWeight: "600",
  },

  locationBtn: {
    backgroundColor: "#2563EB",
    padding: 15,
    borderRadius: 15,
    marginBottom: 15,
  },

  cameraBtn: {
    backgroundColor: "#7C3AED",
    padding: 15,
    borderRadius: 15,
    marginBottom: 15,
  },

  presentBtn: {
    backgroundColor: "#10B981",
    padding: 16,
    borderRadius: 15,
    marginTop: 20,
  },

  absentBtn: {
    backgroundColor: "#EF4444",
    padding: 16,
    borderRadius: 15,
    marginTop: 15,
  },

  btnText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
  },

  image: {
    width: 150,
    height: 150,
    alignSelf: "center",
    borderRadius: 15,
    marginVertical: 20,
  },

  locationText: {
    textAlign: "center",
    marginBottom: 20,
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
    borderRadius: 15,
    alignItems: "center",
  },

  modalTitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#10B981",
  },

  modalText: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: "center",
  },

  modalButton: {
    backgroundColor: "#2563EB",
    padding: 12,
    borderRadius: 10,
    width: "100%",
  },
});