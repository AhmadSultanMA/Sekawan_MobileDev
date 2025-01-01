import { View, Text, ActivityIndicator, FlatList } from "react-native";

import { StatusBar } from "expo-status-bar";
import useFetch from "../../hooks/useFetch";
import PostCard from "../../components/cards/PostCard";
import { useRouter } from "expo-router";

export default function HomeScreen() {
  const { data, isLoading, error } = useFetch("posts");

  const router = useRouter();

  return (
    <View className="p-6 h-screen bg-white">
      <Text className="text-3xl mb-4">DataHub</Text>

      <View>
        {isLoading ? (
          <ActivityIndicator />
        ) : error ? (
          <Text>Something went wrong</Text>
        ) : (
          <FlatList
            data={data}
            renderItem={({ item }) => (
              <PostCard
                item={item}
                handleCardPress={() => router.push(`post-details/${item.id}`)}
              />
            )}
            keyExtractor={(item) => item.id}
          />
        )}
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
