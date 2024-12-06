import { View, Text, Image } from 'react-native';

type Switch = {
  name: string;
  product: string;
  type: string;
  actuationForce: number;
  totalTravel: number;
  actuationPoint: number;
  durability: string;
  price: number;
  image?: string;
};

export function SwitchDetail({ data }: { data: Switch }) {
  return (
    <View>
      <Text>{data.name} - {data.product}</Text>
      <Text>Type: {data.type}</Text>
      <Text>Force: {data.actuationForce}g</Text>
      <Text>Travel: {data.totalTravel}mm</Text>
      <Text>Actuation: {data.actuationPoint}mm</Text>
      <Text>Durability: {data.durability}</Text>
      <Text>Price: ${data.price}</Text>
      {data.image && (
        <Image 
          source={require('../../assets/images/' + data.image)} 
          style={{ width: 100, height: 100 }}
          resizeMode="contain"
        />
      )}
    </View>
  );
}