import { View, Text } from 'react-native';

export function SwitchDetail({ data }) {
  return (
    <View>
      <Text>{data.name}</Text>
      <Text>{data.type}</Text>
    </View>
  );
}