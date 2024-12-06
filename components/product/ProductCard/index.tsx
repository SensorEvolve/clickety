import { StyleSheet, Pressable, Image } from "react-native";
import { View, Text } from "@/components/Themed";

interface ProductCardProps {
  key: string;
  name: string;
  image: string;
  onPress: () => void; // Add this prop type
}

export default function ProductCard({
  name,
  image,
  onPress,
}: ProductCardProps) {
  return (
    <Pressable style={styles.card} onPress={onPress}>
      <View style={styles.inner}>
        <Image
          source={{ uri: image }}
          style={styles.image}
          resizeMode="cover"
        />
        <Text style={styles.title}>{name}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "48%",
    margin: "1%",
    backgroundColor: "#fff",
    borderRadius: 8,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  inner: {
    padding: 10,
  },
  image: {
    width: "100%",
    height: 150,
    borderRadius: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 8,
    textAlign: "center",
  },
});
