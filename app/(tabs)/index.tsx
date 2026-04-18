import { Image, StyleSheet } from "react-native";

// 1. Root Components (Going up two levels to the main folder)
import { ThemedText } from "../..//components/themed-text";
import ParallaxScrollView from "../../components/parallax-scroll-view";
import { ThemedView } from "../../components/themed-view";

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
      headerImage={
        <Image
          // 2. Assets in src (Going up two levels, then into src/assets)
          source={require("../../src/assets/images/logo.png")}
          style={styles.reactLogo}
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">GoGourmet</ThemedText>
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 1: Folder Refactor</ThemedText>
        <ThemedText>
          Your assets are now safely in{" "}
          <ThemedText type="defaultSemiBold">src/assets</ThemedText>. This keeps
          your project clean and professional.
        </ThemedText>
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 2: Component Check</ThemedText>
        <ThemedText>
          Since your components are in the root, we used{" "}
          <ThemedText type="defaultSemiBold">../../components</ThemedText>
          to find them.
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
