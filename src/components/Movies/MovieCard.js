import React, { useState } from 'react';
import { Text, StyleSheet, View, ActivityIndicator } from 'react-native';
import Rating from '../Rating';
import ActorsList from './ActorsList';
import MovieCardImage from './MovieCardImage';
import MovieFullscreenImage from './MovieFullscreenImage';

const styles = StyleSheet.create({
  container: {
    borderRadius: 15,
    backgroundColor: '#ecf0f1',
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    padding: 10,
    textAlign: 'center',
  },
  subtitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  description: {
    fontSize: 15,
    padding: 10,
  },
  textColor: {
    color: '#34495e',
  },
  bigFont: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  likeRating: {
    position: 'absolute',
    left: 20,
    top: 20,
    borderRadius: 30,
    zIndex: 9,
    padding: 0,
    elevation: 10,
    backgroundColor: 'white',
  },
});

const MovieCard = ({ posterurl, title, year, imdbRating, actors }) => {
  const [isLoading, updateIsLoading] = useState(true);
  const [validImage, updateValidImage] = useState(true);
  const [starRating, updateStarRating] = useState(1);
  const [like, updateLike] = useState(false);
  const [showFullscreenImage, updateShowFullscreenImage] = useState(false);

  const starRatingChange = starPosition => updateStarRating(starPosition);
  const toggleLike = () => updateLike(!like);
  const toggleFullscreen = () =>
    updateShowFullscreenImage(!showFullscreenImage);

  return (
    <View style={styles.container}>
      {isLoading && <ActivityIndicator color="red" size="large" />}
      {showFullscreenImage && validImage && (
        <MovieFullscreenImage
          onPress={toggleFullscreen}
          source={{ uri: posterurl }}
        />
      )}
      <MovieCardImage
        validImage={validImage}
        posterurl={posterurl}
        onError={() => updateValidImage(false)}
        onLoadEnd={() => updateIsLoading(false)}
        onLongPress={toggleFullscreen}
      />
      <View style={styles.likeRating}>
        <Rating heart like={like} onRatingPress={toggleLike} />
      </View>
      <Text style={[styles.title, styles.textColor]}>{title}</Text>
      <View style={styles.subtitle}>
        <Text style={[styles.description, styles.textColor]}>{year}</Text>
        <Rating star starRating={starRating} onRatingPress={starRatingChange} />
        <Text style={[styles.description, styles.textColor, styles.bigFont]}>
          {imdbRating}
        </Text>
      </View>
      <ActorsList actors={actors} />
    </View>
  );
};

export default MovieCard;
