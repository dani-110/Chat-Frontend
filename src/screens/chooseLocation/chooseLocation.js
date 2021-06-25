//import liraries
import React, { useState } from 'react';
import { ChooseLocationStory } from './chooseLocationStory'
import { showError, showSuccess } from '../../shared/functions/showMesssage'
// create a component
export const ChooseLocation = (props) => {
    const { navigation } = props;
    const [state, setState] = useState({
        dropCords: {}
    })
    const { dropCords } = state
    let zipcode = ""
    const fetchAddress = (lat, lng) => {
        setState({
            ...state,
            dropCords: {
                latitude: lat,
                longitude: lng
            }
        })
    }

    const checkValid = () => {
        if (Object.keys(dropCords).length == 0) {
            showError('Please enter your destination location')
            return false
        }
        return true
    }

    const onDone = () => {
        if (checkValid()) {
            props.route.params.getCords({ dropCords })
            showSuccess('Your destination location is set')
            navigation.goBack()
        }
    }

    
    const onPressAddress = (data, details) => {
        console.log(details);
        let filterResCity = details.address_components.filter(val => {
            if (val.types.includes("locality") || val.types.includes("sublocality")) {
                return val
            }
            if (val.types.includes("postal_code")) {
                zipcode = val.long_name
            }
            return false
        })
        console.log(zipcode, filterResCity)
        const lat = details.geometry.location.lat
        const lng = details.geometry.location.lng
        fetchAddress(lat, lng)
    }

    return (
        <ChooseLocationStory
            fetchAddress={fetchAddress}
            goBck={onDone}
            onPressAddress={onPressAddress}
        />
    );
};

