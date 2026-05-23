import React, { ReactNode } from "react";
import { Image, SafeAreaView, StyleSheet, View } from "react-native";

type Props = {
  children: ReactNode;
};

const AppLayout: React.FC<Props> = ({ children }) => {
  return (
    <SafeAreaView style={styles.container}>
      
      {/* Header with GSMT Logo */}
      <View style={styles.header}>
        <Image
          source={require("../assets/images/gsmt.png")} // update path
          style={styles.logo}
          resizeMode="contain"
        />
      </View>


      {/* Screen Content */}
      <View style={styles.content}>{children}</View>
    </SafeAreaView>
  );
};

export default AppLayout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3F4F6",
  },

  header: {
    height: 200,
    justifyContent: "center",
    alignItems: "center",
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },

  logo: {
    width: 130,
    height: 80,
  },

  content: {
    flex: 1,
    padding: 20,
  },
});