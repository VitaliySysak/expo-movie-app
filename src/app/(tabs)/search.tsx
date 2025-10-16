import MovieCard from '@/components/movie-card';
import SearchBar from '@/components/search-bar';
import { icons } from '@/constants/icons';
import { images } from '@/constants/images';
import { useFetch } from '@/hooks/useFetch';
import { cn } from '@/lib/utils';
import { fetchPopularMovies } from '@/services/api';
import React from 'react';
import { ActivityIndicator, FlatList, Image, Text, View } from 'react-native';

interface Props {
  className?: string;
}

const Search: React.FC<Props> = ({ className }) => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const {
    data: movies,
    loading,
    error,
    refetch,
    reset,
  } = useFetch(() => fetchPopularMovies({ query: searchQuery }), false);

  React.useEffect(() => {
    const timeOut = setTimeout(async () => {
      if (searchQuery.trim()) {
        await refetch();
      } else {
        reset();
      }
    }, 500);

    return () => clearTimeout(timeOut);
  }, [searchQuery]);
  return (
    <View className={cn('flex-1 bg-primary', className)}>
      <Image source={images.bg} className="flex-1 absolute w-full z-0" resizeMode="cover" />
      <FlatList
        data={movies}
        renderItem={({ item }) => <MovieCard {...item} />}
        keyExtractor={(item) => item.id.toString()}
        className="px-5"
        numColumns={3}
        columnWrapperStyle={{ justifyContent: 'center', gap: 16, marginVertical: 16 }}
        contentContainerStyle={{ paddingBottom: 100 }}
        ListHeaderComponent={
          <>
            <View className="w-full flex-row justify-center mt-20">
              <Image source={icons.logo} className="w-12 h-10 mb-5" />
            </View>
            <View className="my-5">
              <SearchBar
                placeholder="Search movies..."
                value={searchQuery}
                onChangeText={(text: string) => setSearchQuery(text)}
              />
            </View>
            {loading && <ActivityIndicator size="large" color="#000ff" className="my-3" />}
            {error && <Text className="text-red-500 px-5 my-3">Error: {error.message}</Text>}
            {!loading && !error && searchQuery.trim() && movies?.length > 0 && (
              <Text className="text-xl text-white font-bold">
                Search Results for <Text className="text-accent">{searchQuery}</Text>
              </Text>
            )}
          </>
        }
        ListEmptyComponent={
          !loading && !error ? (
            <View className="mt-10 px-5">
              <Text className="text-center text-gray-500">
                {searchQuery.trim() ? 'No movies found' : 'Search for a movie'}
              </Text>
            </View>
          ) : null
        }
      />
    </View>
  );
};

export default Search;
