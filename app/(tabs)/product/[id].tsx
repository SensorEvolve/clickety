import { useLocalSearchParams } from "expo-router";
import { View, ScrollView, StyleSheet, Image } from "react-native";
import { Text } from "@/components/Themed";
import AudioPlayer from "@/components/AudioPlayer";
import { useState, useEffect } from "react";

type Product = {
  brand_name: string;
  product_name: string;
  description: string;
  image_url: string;
  sound_url: string;
};

export default function ProductScreen() {
  const { id } = useLocalSearchParams();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    // Temporary mock data
    setProduct({
      brand_name: "Brand Name",
      product_name: "Product Name",
      description: "Detailed product description goes here...",
      image_url: "temp/image.jpg",
      sound_url: "temp/sound.mp3",
    });
  }, [id]);

  if (!product) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <Image
        source={{ uri: product.image_url }}
        style={styles.image}
        resizeMode="cover"
      />
      <View style={styles.content}>
        <Text style={styles.title}>{product.product_name}</Text>
        <Text style={styles.description}>{product.description}</Text>
        <AudioPlayer soundUrl={product.sound_url} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: "100%",
    height: 300,
  },
  content: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 20,
  },
});
