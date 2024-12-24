import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 justify-center items-center">
      <Text className="font-bold text-4xl absolute top-20">Welcome to Restate</Text>
      <Link href="/signin">Sign In</Link>
      <Link href="/explorer">Explorer</Link>
      <Link href="/profile">Profile</Link>
      <Link href="/properties/1">Property</Link>
    </View>
  );
}
