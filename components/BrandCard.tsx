import { StyleSheet, Pressable } from "react-native";
import { View, Text } from "@/components/Themed";
import { router } from "expo-router";

export default function BrandCard({ name }: { name: string }) {
  return (
    <Pressable
      style={styles.card}
      onPress={() => router.push(`/brand/${name}`)}
    >
      <View style={styles.inner}>
        <Text style={styles.title}>{name}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "48%",
    margin: "1%",
    aspectRatio: 1,
  },
  inner: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    backgroundColor: "#f0f0f0",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
