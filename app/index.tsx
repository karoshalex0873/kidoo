import { Text, View } from "react-native";
import { Link } from 'expo-router'

export default function Index() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-xl font-bold text-blue-500">
        Welcome to Nativewind!
      </Text>
      <Link href="/onboarding" className='mt-4 rounded-md text-white bg-black'>Onboarding</Link>

      <Link href="/(auth)/sign_in" className='mt-4 rounded-md text-white bg-black'>Go to Sign In</Link>

      <Link href="/(auth)/sign-up" className='mt-4 rounded-md text-white bg-black'>Go to Sign Up</Link>


      {/* link */}
      <Link
        href="/billing"
        className="mt-4 rounded-md text-white bg-black px-4 py-2"
      >
        View Bill 123
      </Link>

      <Link
      href={{
        pathname:"/bills/[id]",
        params:{id:"123"}
      }}
      >
        Clude Max sub
      </Link>

    </View>
  );
}
