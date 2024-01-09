
import React from 'react';
import { View, Text, Button, Platform, TouchableOpacity} from 'react-native';
import { styles } from './AppStyles';

const PlatformButton = ({ title, onPress }) => {
    const buttonStyle = Platform.OS === 'ios' ? styles.buttonIOS: styles.buttonAndroid;
      return (
        <TouchableOpacity style={buttonStyle} onPress={onPress}>
          <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
      );
};

function DetailsScreen({ navigation }) {
    React.useLayoutEffect(() => {
        navigation.setOptions( { headerShown: false});
    }, [navigation]);
  return (
    <View style={styles.container}>
        <View style={styles.contentContainer}>
            <Text style={styles.container}>Details Screen</Text>
        </View>
            <View style={styles.button}>
                <PlatformButton
                    title="Go to Home"
                    color='transparent'
                    onPress={() => navigation.navigate('Home')}
                />
            </View>
    </View>
  );
}

export default DetailsScreen;
