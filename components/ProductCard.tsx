import { StyleSheet, Pressable, Image } from "react-native";
import { View, Text } from "@/components/Themed";
import { router } from "expo-router";

type Props = {
  brand: string;
  name: string;
  image: string;
};

export default function ProductCard({ brand, name, image }: Props) {
  return (
    <Pressable
      style={styles.card}
      onPress={() => router.push(`/product/${brand}-${name}`)}
    >
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
    marginVertical: 8,
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
    height: 200,
    borderRadius: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 8,
  },
});
