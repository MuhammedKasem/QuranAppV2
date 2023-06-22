import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'

import styles from './ScreenHeaderBtn.style'

const ScreenHeaderBtn = ( {iconUrl, dimensions, handlePress }) => {
    return (
        <TouchableOpacity style={styles.btnContainer}>
            <Image
                source={iconUrl}
                resizeMode="cover"
                style={styles.btnImg(dimensions)}
            />
        </TouchableOpacity>
    )
}

export default ScreenHeaderBtn