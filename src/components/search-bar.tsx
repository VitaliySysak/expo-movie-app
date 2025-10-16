import { icons } from '@/constants/icons';
import { cn } from '@/lib/utils';
import React from 'react';
import { Image, TextInput, View } from 'react-native';

interface Props {
  className?: string;
  placeholder: string;
  value?: string;
  onChangeText?: (text: string) => void;
  onPress?: () => void;
}

const SearchBar: React.FC<Props> = ({ className, placeholder, value, onChangeText, onPress }) => {
  return (
    <View className={cn('flex-row items-center bg-dark-200 rounded-full px-5 py-4', className)}>
      <Image source={icons.search} className="size-5" resizeMode="contain" tintColor="#ab8bff" />
      <TextInput
        onPress={onPress}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        placeholderTextColor="#a8b5db"
        className="flex-1 ml-2 text-white"
      />
    </View>
  );
};

export default SearchBar;
