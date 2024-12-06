import React from 'react';
import { View, ScrollView } from 'react-native';
import { BrandList } from '../../../components/brand/BrandList';

export default function BrandScreen() {
  return (
    <ScrollView>
      <BrandList />
    </ScrollView>
  );
}