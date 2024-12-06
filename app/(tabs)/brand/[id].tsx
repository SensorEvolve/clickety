import { useLocalSearchParams } from 'expo-router';
import { View } from 'react-native';
import { SwitchDetail } from '../../../components/SwitchDetail';

export default function DetailScreen() {
  const { id } = useLocalSearchParams();
  return (
    <View>
      <SwitchDetail data={switchData} />
    </View>
  );
}