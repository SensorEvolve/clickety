import { View, ScrollView } from 'react-native';
import { BrandCard } from '../brand/BrandCard';

export function BrandList() {
  return (
    <ScrollView>
      <BrandCard name="Cherry" />
      <BrandCard name="Gateron" />
    </ScrollView>
  );
}