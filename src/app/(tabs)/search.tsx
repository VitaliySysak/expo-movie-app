import { cn } from "@/lib/utils";
import React from "react";
import { Text, View } from "react-native";

interface Props {
  className?: string;
}

const Search: React.FC<Props> = ({ className }) => {
  return (
    <View className={cn("", className)}>
      <Text>Search</Text>
    </View>
  );
};

export default Search;
