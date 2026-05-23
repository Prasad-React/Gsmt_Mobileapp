import { useRouter } from "expo-router";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "../styles/homeStyles";

export default function EntryScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>

      {/* HEADER SECTION */}
      <View style={styles.header}>

        <View style={styles.logoWrapper}>
          <Image
            source={require("../assets/images/gsmt.png")}
            style={styles.logo}
            resizeMode="contain"
          />
        </View>

        <Text style={styles.title}>GSMT Transport</Text>
        <Text style={styles.subtitle}>Track • Manage • Deliver</Text>

      </View>

      {/* LOGIN CARDS */}
      <View style={styles.cardSection}>

        <TouchableOpacity
          style={styles.cardEmployee}
          onPress={() => router.push("/employee/login")}
        >
          <Text style={styles.cardTitle}>👷 Employee Login</Text>
          <Text style={styles.cardText}>Driver / Staff Access</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.cardAdmin}
          onPress={() => router.push("/admin/login")}
        >
          <Text style={styles.cardTitle}>🧑‍💼 Admin Login</Text>
          <Text style={styles.cardText}>Management Access</Text>
        </TouchableOpacity>

      </View>

      {/* MENU GRID */}
      <View style={styles.menuGrid}>

        <TouchableOpacity style={styles.menuBox}>
          <Text style={styles.menuEmoji}>🏠</Text>
          <Text style={styles.menuText}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuBox}>
          <Text style={styles.menuEmoji}>👤</Text>
          <Text style={styles.menuText}>Profile</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuBox}>
          <Text style={styles.menuEmoji}>🚚</Text>
          <Text style={styles.menuText}>Services</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuBox}>
          <Text style={styles.menuEmoji}>⚙️</Text>
          <Text style={styles.menuText}>Settings</Text>
        </TouchableOpacity>

      </View>

      {/* FOOTER */}
      <Text style={styles.footer}>
        © 2026 GSMT Pvt Ltd
      </Text>

    </View>
  );
}