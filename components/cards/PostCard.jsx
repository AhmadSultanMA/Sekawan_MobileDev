import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";

const PostCard = ({ item, handleCardPress }) => {
  return (
    <TouchableOpacity onPress={handleCardPress}>
      <View className="w-full bg-gray-100 p-4 rounded-xl shadow-sm mb-4">
        <Text className="text-xl font-semibold text-gray-800">
          {item.title}
        </Text>
        <Text className="text-gray-600 mt-2 text-justify">{item.body}</Text>
        <StatusBar style="auto" />
      </View>
    </TouchableOpacity>
  );
};

export default PostCard;
