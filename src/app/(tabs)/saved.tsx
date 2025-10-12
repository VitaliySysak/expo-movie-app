import { cn } from "@/lib/utils";
import React from "react";
import { Text, View } from "react-native";

interface Props {
  className?: string;
}

const Saved: React.FC<Props> = ({ className }) => {
  return (
    <View className={cn("", className)}>
      <Text>Saved</Text>
    </View>
  );
};

export default Saved;
