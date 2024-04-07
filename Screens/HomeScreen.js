import { View, Dimensions, FlatList, StyleSheet, Pressable, Image, Text } from 'react-native';
import { Video, ResizeMode } from 'expo-av';
import React, { useEffect, useRef, useState } from 'react';
import BottomNavigation from '../Components/BottomNavigation';

const videos = [
  "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
  "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
  "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
  "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
  "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
];

function HomeScreen() {
  const [currentViewableItemIndex, setCurrentViewableItemIndex] = useState(0);

  const onViewableItemsChanged = ({ viewableItems }) => {
    if (viewableItems.length > 0) {
      setCurrentViewableItemIndex(viewableItems[0].index ?? 0);
    }
  };

  const viewabilityConfigCallbackPairs = useRef([{ viewabilityConfig: { viewAreaCoveragePercentThreshold: 50 }, onViewableItemsChanged }]);

  return (
    <View style={styles.container}>
      <FlatList
        data={videos}
        renderItem={({ item, index }) => (
          <Item item={item} shouldPlay={index === currentViewableItemIndex} />
        )}
        keyExtractor={item => item}
        pagingEnabled
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        viewabilityConfigCallbackPairs={viewabilityConfigCallbackPairs.current}
      />
    </View>
  );
}

const Item = ({ item, shouldPlay }) => {
  const video = useRef(null);
  const [status, setStatus] = useState(null);
  const [showFullDescription, setShowFullDescription] = useState(false);

  useEffect(() => {
    if (!video.current) return;

    if (shouldPlay) {
      video.current.playAsync();
    } else {
      video.current.pauseAsync();
      video.current.setPositionAsync(0);
    }
  }, [shouldPlay]);

  const handlePress = () => {
    if (status && status.isPlaying) {
      video.current.pauseAsync();
    } else {
      video.current.playAsync();
    }
  };

  // Fonction pour basculer entre la description tronquée et la description complète
  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  return (
    <View>
      <Pressable onPress={handlePress}>
      <View style={styles.container}>
        <View style={styles.videoContainer}>
          <Video
            ref={video}
            source={{ uri: item }}
            style={styles.video}
            isLooping
            resizeMode="stretch"
            useNativeControls={false}
            onPlaybackStatusUpdate={status => setStatus(status)}
          />
          <View style={styles.userInfoContainer}>
            <Image
              source={require('../assets/icons/profilpic.png')}
              style={styles.profilePic}
            />
            <Text style={styles.username}>username</Text>
          </View>
          <View style={styles.descriptionContainer}>
            <Text style={styles.descriptionText}>
              {showFullDescription ? 'Description de la vidéo Description de la vidéo efeferferfzefezfzf ygyugyuguyguygyunjjjjjjjjjj' : 'Description tronquée... '}
             
              {showFullDescription ? (
                <Text style={styles.seeMoreText} onPress={toggleDescription}>Voir moins</Text>
              ) : (
                <Text style={styles.seeMoreText} onPress={toggleDescription}>Voir plus</Text>
              )}
            </Text>
          </View>
        </View>
      </View>
    </Pressable>

    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  videoContainer: {
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height,
    position: 'relative',
  },
  video: {
    flex: 1,
    width: '100%',
    height: '100%'
  },
  userInfoContainer: {
    position: 'absolute',
    top: 20,
    right: 20,
    alignItems: 'center',
  },
  profilePic: {
    width: 37,
    height: 37,
    borderRadius: 25,
    marginTop: 25
  },
  username: {
    color: 'white',
    fontSize: 11,
    fontWeight: 'bold',
    fontFamily: 'Lemonada'
  },
  descriptionContainer: {
    position: 'absolute',
    bottom:150,
    left: 20,
  },
  descriptionText: {
    color: 'white',
    fontSize: 10,
    maxWidth: 200,
    maxHeight: 50
  },
  seeMoreText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default HomeScreen;
