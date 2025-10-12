import React from 'react';
import { cn } from '@/lib/utils';
import { Text, View } from 'react-native';

interface Props {
  className?: string;
  
}

const MovieDetails: React.FC<Props> = ({className}) => {

  return (
    <View className={cn("", className)}>
      <Text>
       [Id]
      </Text>
    </View>
  );
};

export default MovieDetails;