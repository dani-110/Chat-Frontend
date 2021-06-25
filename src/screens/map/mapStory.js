//import liraries
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import imagePath from '../../assets/assetsPath'
import { styles } from './map.styles'
// create a component

export const MapStory = (props) => {
    const {
        setDesLoc,
        startCords,
        riderCords,
        dropCords,
        coordinates,
        mapRef,
        markerRef,
        onCenter,
        latitudeDelta,
        longitudeDelta
    } = props;


    const mapKey = 'AIzaSyAin3sdbQcj2uUzDHxG6kIgMe-VrdW35G8';
    return (
        <View style={{ flex: 1 }}>
            <View style={{ flex: 1 }}>
                <MapView
                    ref={mapRef}
                    style={StyleSheet.absoluteFill}
                    initialRegion={{
                        ...startCords,
                        latitudeDelta: latitudeDelta,
                        longitudeDelta: longitudeDelta
                    }}>
                    <Marker
                        coordinate={startCords}
                        image={imagePath.startLoc}
                    />
                    <Marker.Animated
                        ref={markerRef}
                        coordinate={coordinates}
                        image={imagePath.riderLoc}
                    />
                    {Object.keys(dropCords).length != 0 ?
                        <Marker
                            coordinate={dropCords}
                            image={imagePath.desLoc}
                        />
                        : null
                    }
                    {Object.keys(dropCords).length != 0 ?
                        <MapViewDirections
                            origin={startCords}
                            destination={dropCords}
                            apikey={mapKey}
                            strokeWidth={3}
                            strokeColor="hotpink"
                            optimizeWaypoints={true}
                            onStart={(params) => {
                                console.log(`Started routing between "${params.origin}" and "${params.destination}"`);
                            }}
                            onReady={result => {
                                console.log(result.distance + "Km")
                                console.log(result.duration + "min")
                                mapRef.current.fitToCoordinates(result.coordinates, {
                                    edgePadding: {
                                        right: 30,
                                        left: 30,
                                        bottom: 300,
                                        top: 100
                                    }
                                })
                            }}
                        />
                        : null
                    }
                </MapView>
                <TouchableOpacity
                    style={{ position: 'absolute', bottom: 0, right: 0 }}
                    onPress={onCenter}
                >
                    <Image source={imagePath.greenIndicator} />
                </TouchableOpacity>
            </View>
            <View style={styles.bottomCard}>
                <Text>Where you gona go?</Text>
                <TouchableOpacity style={styles.inputBtn} onPress={setDesLoc} >
                    <Text>Choose your destination location ...</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};
