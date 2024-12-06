import { View, Text } from 'react-native';
import { Link } from 'expo-router';

export function BrandCard({ name }: { name: string }) {
  return (
    <Link href={`/brand/${name}`} asChild>
      <View>
        <Text>{name}</Text>
      </View>
    </Link>
  );
}