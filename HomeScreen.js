import React, { useState, useEffect } from "react";
import { View, Text, FlatList, Image } from "react-native";
import {
  Platform,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
import { styles } from "./AppStyles";
import { ScrollView } from "react-native-web";

const PlatformButton = ({ title, onPress }) => {
  const buttonStyle =
    Platform.OS === "ios" ? styles.buttonIOS : styles.buttonAndroid;
  return (
    <TouchableOpacity style={buttonStyle} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

function HomeScreen({ navigation }) {
  const [pokemons, setPokemons] = useState([]);

  let fetchPokemons = () => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
      .then((response) => response.json())
      .then((data) => {
        const pokemonRequests = data.results.map((pokemon) =>
          fetch(pokemon.url).then((res) => res.json())
        );
        Promise.all(pokemonRequests).then((pokemonDetails) => {
          setPokemons(
            pokemonDetails.map((details) => ({
              name: details.name,
              sprite: details.sprites.front_default,
            }))
          );
        });
      });
  };

  useEffect(() => {
    fetchPokemons();
    if (pokemons.length > 0) {
      console.log("First Pokemon:", pokemons[0]);
      // Or log the entire array if needed
      console.log("All Pokemons:", pokemons);
    }
  }, [pokemons]);

  React.useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Text style={styles.contentContainer}>Pokemon API</Text>
      </View>
        <View style={styles.button}>
          <PlatformButton
            title="Show all in your location!"
            color="transparent"
            onPress={() => navigation.navigate('Details')}
          />
        </View>
      <ScrollView style={styles.listContainer}>
        <FlatList         
          data={pokemons}
          keyExtractor={(item) => item.name}
          renderItem={({ item }) => (
            <View style={styles.pokemon}>
              <Image source={{ uri: item.sprite }} style={styles.sprite} />
              <Text style={styles.name}>{item.name.charAt(0).toUpperCase() + item.name.slice(1)}</Text>
            </View>
          )}
        />
      </ScrollView>
    </View>
  );
}

export default HomeScreen;
