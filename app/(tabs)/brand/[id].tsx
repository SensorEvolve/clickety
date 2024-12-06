import { useLocalSearchParams } from "expo-router";
import { View, ScrollView, StyleSheet } from "react-native";
import { Text } from "@/components/Themed";
import ProductCard from "@/components/product/ProductCard";
import { useState, useEffect } from "react";

type Product = {
  brand_name: string;
  product_name: string;
  description: string;
  image_url: string;
  sound_url: string;
};

export default function BrandScreen() {
  const { id } = useLocalSearchParams();
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    // Temporary mock data
    setProducts([
      {
        brand_name: id as string,
        product_name: "Product 1",
        description: "Description for product 1",
        image_url: "temp/image1.jpg",
        sound_url: "temp/sound1.mp3",
      },
      {
        brand_name: id as string,
        product_name: "Product 2",
        description: "Description for product 2",
        image_url: "temp/image2.jpg",
        sound_url: "temp/sound2.mp3",
      },
    ]);
  }, [id]);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>{id}</Text>
      <View style={styles.productsGrid}>
        {products.map((product) => (
          <ProductCard
            key={product.product_name}
            name={product.product_name}
            image={product.image_url}
            onPress={() => {
              // Navigate to product detail
            }}
          />
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    padding: 20,
  },
  productsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    padding: 10,
    justifyContent: "space-between",
  },
});
