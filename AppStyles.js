import { StyleSheet, Dimensions } from 'react-native';

// Get the device width
const deviceWidth = Dimensions.get('window').width;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyItems: 'space-around',
  },
  contentContainer: {
    width: '100%',
    padding: '10 rem',
    textAlign: 'center',
    fontSize: 30,
    padding: 20,
  },
  buttonIOS: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#007bff',
    borderRadius: 20,
    paddingBottom: 30,
  },
  buttonAndroid: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: 'mediumpurple',
    borderRadius: 70,
  },
  buttonText: {
    color: '#ffffff',
  },
  listContainer: {
    flex: 1,
    width: '100%',
  },    
    pokemon: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 10,
      width: '100%',
    },
    sprite: {
      width: 80,
      height: 80,
      marginRight: 30,
    },
    name: {
      fontSize: 16,
      color: '#333',
      width:'19%',
    },
});
