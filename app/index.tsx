import { Text, View } from 'react-native';

export default function Home() {
  console.log("Ładuje się app/index.tsx");
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#ffe' }}>
      <Text style={{ fontSize: 22, color: 'red' }}>To jest app/index.tsx!</Text>
    </View>
  );
}
