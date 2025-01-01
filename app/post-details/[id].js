import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Stack, useRouter, useLocalSearchParams } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import useFetch from "../../hooks/useFetch";
import { ActivityIndicator } from "react-native";
import { ScrollView } from "react-native";

const PostDetail = () => {
  const router = useRouter();

  const params = useLocalSearchParams();

  const postEndpoint = `posts/${params.id}`;
  const commentsEndpoint = `posts/${params.id}/comments`;

  const {
    data: postData,
    isLoading: postLoading,
    error: postError,
  } = useFetch(postEndpoint);
  const {
    data: commentsData,
    isLoading: commentsLoading,
    error: commentsError,
  } = useFetch(commentsEndpoint);

  return (
    <ScrollView className="bg-white h-full">
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: "white" },
          headerShadowVisible: false,
          headerBackVisible: false,
          headerTitle: "Post Details",
          headerTitleStyle: { color: "black" },
          headerTitleAlign: "center",
          headerLeft: () => (
            <TouchableOpacity onPress={() => router.back()}>
              <Ionicons name="arrow-back" size={24} color="black" />
            </TouchableOpacity>
          ),
        }}
      />

      <View>
        {postLoading ? (
          <ActivityIndicator />
        ) : postError ? (
          <Text>Something went wrong</Text>
        ) : (
          <View className="px-6 h-fit">
            <Text className="text-3xl font-bold text-gray-800 mb-4">
              {postData.title}
            </Text>
            <Text className="text-base text-gray-600">{postData.body}</Text>
          </View>
        )}
      </View>

      <View className="px-6">
        {commentsLoading ? (
          <ActivityIndicator />
        ) : commentsError ? (
          <Text>Something went wrong with the comments.</Text>
        ) : (
          <View className="mt-6">
            <Text className="text-xl font-bold text-gray-800 mb-4">
              Comments:
            </Text>
            {commentsData && commentsData.length > 0 ? (
              commentsData.map((comment) => (
                <View
                  key={comment.id}
                  className="bg-gray-100 p-4 rounded-xl shadow-lg mb-4"
                >
                  <View className="mb-2">
                    <Text className="text-sm text-gray-500">
                      {comment.email}
                    </Text>
                  </View>
                  <Text className="text-base text-gray-700">
                    {comment.body}
                  </Text>
                </View>
              ))
            ) : (
              <Text className="text-gray-500">No comments available</Text>
            )}
          </View>
        )}
      </View>
    </ScrollView>
  );
};

export default PostDetail;
