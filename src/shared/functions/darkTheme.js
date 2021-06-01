
import React from 'react';
import { themeValue } from '../../@core/services/store';
import { connect } from 'react-redux';

import { lightTheme, darkTheme } from '../../constants/theme';
import { TouchableOpacity, Text } from 'react-native';

const Theme = (props) => {

    function setTheme() {
        let isDark;
        if (props.theme.isDark == true) {
            isDark = { isDark: false, UI: lightTheme }
        } else {
            isDark = { isDark: true, UI: darkTheme }
        }
        props.themeFN(isDark)
    }

    return (
        <TouchableOpacity
            // style={styles.button}
            onPress={setTheme}
        >
            <Text style={{ color: props.theme.UI.textColor }}>Set Theme</Text>
        </TouchableOpacity>
    )
}

const mapStatetoProps = (state) => {
    return {
        theme: state.themeReducer
    }
}

const mapDispatchtoProps = (dispatch) => {
    return {
        themeFN: function (data) {
            return dispatch(themeValue(data))
        }
    }
}

//make this component available to the app
export default connect(mapStatetoProps, mapDispatchtoProps)(Theme);