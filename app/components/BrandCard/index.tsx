import { View, Text, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';

export function BrandCard({ brand }: { brand: string }) {
  return (
    <Link href={`/brand/${brand}`} asChild>
      <TouchableOpacity>
        <Text>{brand}</Text>
      </TouchableOpacity>
    </Link>
  );
}