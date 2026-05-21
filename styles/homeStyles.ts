import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#F5F7FB",
    paddingHorizontal: 20,
    paddingTop: 50,
  },

  /* HEADER */
  header: {
    alignItems: "center",
    marginBottom: 25,
  },

  logoWrapper: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: "#E8F5E9",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
    elevation: 4,
  },

  logo: {
    width: 70,
    height: 70,
  },

  title: {
    fontSize: 24,
    fontWeight: "700",
    color: "#111827",
  },

  subtitle: {
    fontSize: 13,
    color: "#6B7280",
    marginTop: 4,
  },

  /* LOGIN CARDS */
  cardSection: {
    marginTop: 10,
  },

  cardEmployee: {
    backgroundColor: "#22C55E",
    padding: 18,
    borderRadius: 14,
    marginBottom: 12,
    elevation: 5,
  },

  cardAdmin: {
    backgroundColor: "#2563EB",
    padding: 18,
    borderRadius: 14,
    elevation: 5,
  },

  cardTitle: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "center",
  },

  cardText: {
    color: "#E5E7EB",
    fontSize: 12,
    textAlign: "center",
    marginTop: 4,
  },

  /* MENU GRID */
  menuGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginTop: 30,
  },

  menuBox: {
    width: "47%",
    backgroundColor: "#FFFFFF",
    paddingVertical: 20,
    borderRadius: 14,
    alignItems: "center",
    marginBottom: 15,
    elevation: 3,
  },

  menuEmoji: {
    fontSize: 22,
    marginBottom: 6,
  },

  menuText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#374151",
  },

  /* FOOTER */
  footer: {
    textAlign: "center",
    color: "#9CA3AF",
    fontSize: 12,
    marginTop: 10,
    marginBottom: 10,
  },
});