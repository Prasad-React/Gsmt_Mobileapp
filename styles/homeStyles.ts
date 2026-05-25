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

  card: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 20,
    marginBottom: 12,
  },


  heading: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#111827",
  },

  totalBox: {
    backgroundColor: "#2563eb",
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 16,
  },

  totalText: {
    color: "#fff",
    fontWeight: "bold",
  },

  tableContainer: {
    backgroundColor: "#fff",
    borderRadius: 24,
    overflow: "hidden",
    elevation: 5,
  },

  tableHeader: {
    flexDirection: "row",
    backgroundColor: "#111827",
  },

  headerCell: {
    color: "#fff",
    fontWeight: "bold",
    padding: 14,
    width: 130,
  },

  tableRow: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#e5e7eb",
    backgroundColor: "#fff",
  },

  cell: {
    width: 130,
    padding: 14,
    color: "#374151",
    fontWeight: "600",
  },

  imageCell: {
    width: 130,
    padding: 10,
  },

  selfieImage: {
    width: 70,
    height: 70,
    borderRadius: 16,
  },

  statusBoxPresent: {
    backgroundColor: "#dcfce7",
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 30,
    alignSelf: "flex-start",
  },

  statusTextPresent: {
    color: "#15803d",
    fontWeight: "bold",
  },

  statusBoxAbsent: {
    backgroundColor: "#fee2e2",
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 30,
    alignSelf: "flex-start",
  },

  statusTextAbsent: {
    color: "#dc2626",
    fontWeight: "bold",
  },

  mapButton: {
    backgroundColor: "#2563eb",
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 14,
    margin: 10,
  },

  mapButtonText: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
  },

  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  loadingText: {
    marginTop: 12,
    fontSize: 18,
    fontWeight: "bold",
    color: "#374151",
  },


});