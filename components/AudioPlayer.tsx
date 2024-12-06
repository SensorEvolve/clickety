import { useState, useEffect } from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { Text } from "@/components/Themed";
import { Audio } from "expo-av";
import { FontAwesome } from "@expo/vector-icons";

type AudioPlayerProps = {
  soundUrl: string;
};

export default function AudioPlayer({ soundUrl }: AudioPlayerProps) {
  const [sound, setSound] = useState<Audio.Sound | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  async function loadSound() {
    try {
      const { sound } = await Audio.Sound.createAsync({ uri: soundUrl });
      setSound(sound);
    } catch (error) {
      console.error("Error loading sound:", error);
    }
  }

  useEffect(() => {
    loadSound();
    return () => {
      sound?.unloadAsync();
    };
  }, [soundUrl]);

  async function toggleSound() {
    if (!sound) return;

    try {
      if (isPlaying) {
        await sound.pauseAsync();
      } else {
        await sound.playAsync();
      }
      setIsPlaying(!isPlaying);
    } catch (error) {
      console.error("Error playing sound:", error);
    }
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleSound} style={styles.button}>
        <FontAwesome
          name={isPlaying ? "pause" : "play"}
          size={24}
          color="black"
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  button: {
    padding: 15,
    backgroundColor: "#eee",
    borderRadius: 25,
    width: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
  },
});
