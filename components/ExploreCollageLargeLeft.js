import React from 'react';
import {View, Image, StyleSheet, ImageBackground } from 'react-native';
import { TWO_THIRDS_OF_WIDTH } from '../constants';
import Icon from 'react-native-vector-icons/MaterialIcons';

const styles = StyleSheet.create({
    largeImage: {
      height: TWO_THIRDS_OF_WIDTH,
      width: TWO_THIRDS_OF_WIDTH - (1/3),
    },
    borderRight: {
        borderColor: 'white',
        borderRightWidth: 1
    },
    icon: {
        color: 'white',
        fontSize: 40,
        marginLeft: 10,
        marginTop: 10
    }
});

export default function ExploreCollageLargeLeft(props) {
    return (
        <View style={props.rowWrapperStyle}>
            <View style={[styles.borderRight, props.borderBottomStyle]}> 
                <ImageBackground source={props.largeImage} style={styles.largeImage}>
                     <Icon name="play-circle-outline" style={styles.icon} />
                </ImageBackground>
            </View>
            <View>
                <View style={props.borderBottomStyle}>
                     <Image source={props.smallImageTop} style={props.smallImageStyle}></Image>
                </View>
                <View style={props.borderBottomStyle}>
                     <Image source={props.smallImageBottom} style={props.smallImageStyle}></Image>
                </View>
            </View>
        </View>
    );
}