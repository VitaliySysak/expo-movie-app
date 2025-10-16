import { icons } from "@/constants/icons";
import { cn } from "@/lib/utils";
import { Link } from "expo-router";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

interface Props extends Movie {
  className?: string;
}

const MovieCard: React.FC<Props> = ({ className, id, poster_path, title, vote_average, release_date }) => {
  return (
    <Link className={cn("", className)} href={`/movies/${id}`} asChild>
      <TouchableOpacity className="w-[30%]">
        <Image
          source={{
            uri: poster_path
              ? `https://image.tmdb.org/t/p/w500${poster_path}`
              : "https://placehold.co/600x400/1a1a1a/ffffff.png",
          }}
          className="w-full h-52 rounded-lg"
          resizeMode="cover"
        />
        <Text className="text-white text-sm" numberOfLines={1}>
          {title}
        </Text>
        <View className="flex-row items-center">
          <Image source={icons.star} className="size-4" />
          <Text className="text-xs text-white font-bold uppercase">{Math.round(vote_average) / 2}</Text>
        </View>
        <View>
          <Text className="text-xs text-light-300 font-medium mt-1">{release_date.split("-")[0]}</Text>
        </View>
      </TouchableOpacity>
    </Link>
  );
};

export default MovieCard;
