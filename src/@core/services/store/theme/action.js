import {Theme} from '../types';

export const themeValue = (theme) =>{
    console.log("theme", theme);
    return{
        type: Theme,
        theme
    }
}