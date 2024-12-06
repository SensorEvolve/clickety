import { View, Text } from "react-native";

export function BrandCard({ name }: { name: string }) {
  return (
    <View>
      <Text>{name}</Text>
    </View>
  );
}