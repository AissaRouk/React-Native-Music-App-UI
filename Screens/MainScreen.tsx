import React, { useContext } from "react";
import { StyleSheet, ScrollView, SafeAreaView, StatusBar } from "react-native";
import mockupSongs from "../Data/mockupSongs";
import SearchBar from "../Components/SearchBar";
import { Song } from "../Types/Song";
import SongComponent from "../Components/SongComponent";
import SmallSongComponent from "../Components/SmallSongComponent";
import { AppContext } from "../Context/Context";
import genericStyles, { blackTheme, greyColor } from "../Styles/GenericStyles";

const MainScreen = () => {
  const { currentSong, setPlayingSong } = useContext(AppContext);

  return (
    <SafeAreaView style={styles.container}>
      <SearchBar data={[]} />
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        {mockupSongs.map((item: Song) => (
          <SongComponent
            key={item.id}
            item={item}
            setCurrentSong={(item) => setPlayingSong(item)}
          />
        ))}
      </ScrollView>
      {/* Current song View */}
      {currentSong && <SmallSongComponent currentSong={currentSong} />}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: StatusBar.currentHeight || 0,
  },
  scrollViewContainer: {
    paddingHorizontal: 20,
    flex: 1,
  },

  smallView: {
    height: 80,
    backgroundColor: blackTheme,
    flexDirection: "row",
    alignItems: "center",
    overflow: "hidden",
    borderColor: "black",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  smallViewImage: {
    height: "100%",
    width: 80,
    left: 0,
    borderRadius: 9,
    marginRight: 10, // Add margin to separate image from text
  },
  smallViewText: {
    color: "white",
  },
});

export default MainScreen;
