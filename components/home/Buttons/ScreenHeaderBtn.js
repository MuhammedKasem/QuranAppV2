import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'

import styles from './ScreenHeaderBtn.style'
import {Ionicons} from "@expo/vector-icons";

const ScreenHeaderBtn = ( {iconName,  color, handlePress }) => {

    let dimensions = 35;
    return (
        <TouchableOpacity style={styles.btnContainer}>
            <Ionicons name={iconName} size={dimensions} color={color} />
        </TouchableOpacity>
    )
}

export default ScreenHeaderBtn