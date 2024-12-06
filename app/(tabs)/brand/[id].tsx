import { useLocalSearchParams } from 'expo-router';
import { View } from 'react-native';
import { SwitchDetail } from '../../../components/SwitchDetail';
import { Switch } from '../../../types';

export default function DetailScreen() {
  const { id } = useLocalSearchParams();
  
  // TODO: Get actual data from CSV
  const data: Switch = {
    name: "Cherry",
    product: "MX Red",
    type: "Linear",
    actuationForce: 45,
    totalTravel: 4.0,
    actuationPoint: 2.0,
    durability: "100 million",
    price: 10
  };

  return (
    <View>
      <SwitchDetail data={data} />
    </View>
  );
}