//import liraries
import React, { useState, useEffect, useRef } from 'react';
import { MapStory } from './mapStory'
import { locationPermission, getCurrentLocation } from '../../shared/functions/locationPermission'
import { AnimatedRegion } from 'react-native-maps';
import { Dimensions, Platform } from 'react-native';

const screen = Dimensions.get('window');
const ASPECT_RATIO = screen.width / screen.height;
const LATITUDE_DELTA = 0.9222;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
// create a component
export const Map = (props) => {
    const { navigation } = props;
    const mapRef = useRef()
    const markerRef = useRef()
    const [state, setState] = useState({
        startCords: {
            latitude: 24.8607,
            longitude: 67.0011
        },
        riderCords: {},
        dropCords: {},
        coordinates: new AnimatedRegion({
            latitude: 24.8607,
            longitude: 67.0011,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA
        })
    })
    const { startCords, riderCords, dropCords, coordinates } = state

    useEffect(() => {
        getLiveLocation()
        getstartLocation()
    }, [])

    const getstartLocation = async () => {
        const locPermissionDenied = await locationPermission()
        if (locPermissionDenied) {
            const { latitude, longitude } = await getCurrentLocation()
            // console.log('res =>', latitude, longitude)
            setState({
                ...state,
                startCords: {
                    latitude,
                    longitude
                }
            })
        }
    }

    const getLiveLocation = async () => {
        const locPermissionDenied = await locationPermission()
        if (locPermissionDenied) {
            const { latitude, longitude } = await getCurrentLocation()
            animate(latitude, longitude)
            // console.log('res =>', latitude, longitude)
            setState({
                ...state,
                riderCords: { latitude, longitude },
                coordinates: new AnimatedRegion({
                    latitude: latitude,
                    longitude: longitude,
                    latitudeDelta: LATITUDE_DELTA,
                    longitudeDelta: LONGITUDE_DELTA
                })
            })
        }
    }

    const animate = (lat, lng) => {
        const newCoordinate = { lat, lng };
        if (Platform.OS == 'android') {
            if (markerRef.current) {
                markerRef.current.animateMarkerToCoordinate(newCoordinate, 5000);
            }
        } else {
            coordinates.timing(newCoordinate).start();
        }
    }

    const onCenter = () => {
        mapRef.current.animateToRegion({
            latitude: startCords.latitude,
            longitude: startCords.longitude,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA
        })
    }

    useEffect(() => {
        const interval = setInterval(() => {
            getLiveLocation()
        }, 5000);
        return () => clearInterval(interval)
    })

    const fetchValues = (data) => {
        setState({
            ...state,
            dropCords: {
                latitude: data.dropCords.latitude,
                longitude: data.dropCords.longitude
            }
        })
    }
    return (
        <MapStory
            setDesLoc={() => navigation.navigate('chooseLocation', { getCords: fetchValues })}
            startCords={startCords}
            riderCords={riderCords}
            dropCords={dropCords}
            coordinates={coordinates}
            mapRef={mapRef}
            markerRef={markerRef}
            onCenter={onCenter}
            latitudeDelta={LATITUDE_DELTA}
            longitudeDelta={LONGITUDE_DELTA}
        />
    );
};

