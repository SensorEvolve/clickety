import { StyleSheet } from "react-native";
import { View } from "@/components/Themed";
import BrandCard from "@/components/brand/BrandCard";
import { ScrollView } from "react-native";

export default function BrandsScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.grid}>
        <BrandCard name="Brand A" />
        <BrandCard name="Brand B" />
        {/* Add more BrandCards as needed */}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    padding: 10,
  },
});
