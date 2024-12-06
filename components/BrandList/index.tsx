import { View, FlatList } from 'react-native';
import { BrandCard } from '../BrandCard';

export function BrandList() {
  return (
    <View>
      <BrandCard name="Cherry" />
      <BrandCard name="Gateron" />
    </View>
  );
}