//import liraries
import React from 'react';
import { View, ScrollView, TouchableOpacity, Text } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { styles } from './chooseLocation.styles'
// create a component
export const ChooseLocationStory = (props) => {
    const {
        goBck,
        onPressAddress
    } = props;
    const mapKey = 'AIzaSyAin3sdbQcj2uUzDHxG6kIgMe-VrdW35G8';
    
    return (
        <View style={{ flex: 1 }}>
            <ScrollView
                keyboardShouldPersistTaps="handled"
                style={{ backgroundColor: '#fff', flex: 1, padding: 24 }}
            >
                <GooglePlacesAutocomplete
                    placeholder='Enter your destination location'
                    onPress={onPressAddress}
                    fetchDetails={true}
                    query={{
                        key: mapKey,
                        language: 'en',
                    }}
                    styles={{
                        textInputContainer: styles.containerStyle,
                        textInput: styles.textInputStyle
                    }}
                />
                <View>
                    <TouchableOpacity style={styles.btnStyle} onPress={goBck}>
                        <Text>Done</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>

        </View>
    );
};
