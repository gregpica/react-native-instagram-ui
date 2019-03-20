import React from 'react';
import {View, Image, StyleSheet, ImageBackground, Text } from 'react-native';
import { TWO_THIRDS_OF_WIDTH } from '../constants';
import Icon from 'react-native-vector-icons/MaterialIcons';

const styles = StyleSheet.create({
    largeImage: {
      height: TWO_THIRDS_OF_WIDTH,
      width: TWO_THIRDS_OF_WIDTH - (1/3),
      justifyContent: 'space-between'
    },
    borderLeft: {
        borderColor: 'white',
        borderLeftWidth: 1
    },
    icon: {
        color: 'white',
        fontSize: 40,
        marginLeft: 10,
        marginTop: 10
    },
    textContainer: {
        marginLeft: 10,
        marginBottom: 10,
    },
    smallText: {
        color: '#e2e2e2',
        fontWeight: '600',
        fontSize: 11
    },
    largeText: {
        color: 'white',
        fontWeight: '500',
        fontSize: 18
    }
});

const maybeDisplayText = index => {
    //Index 2 is the very first Large image on the Explore page
    if (index === 2) {
        return (
            <View style={styles.textContainer}> 
                <Text style={styles.smallText}>WATCH</Text>
                <Text style={styles.largeText}>Videos You Might Like</Text>
            </View>
        )
    }
}

export default function ExploreCollageLargeRight(props) {
    return (
        <View style={props.rowWrapperStyle}>
            <View>
                <View style={props.borderBottomStyle}>
                     <Image source={props.smallImageTop} style={props.smallImageStyle}></Image>
                </View>
                <View style={props.borderBottomStyle}>
                     <Image source={props.smallImageBottom} style={props.smallImageStyle}></Image>
                </View>
            </View>
            <View style={[styles.borderLeft, props.borderBottomStyle]}>
                <ImageBackground source={props.largeImage} style={styles.largeImage}>
                     <Icon name="play-circle-outline" style={styles.icon} />
                     {maybeDisplayText(props.index)}
                </ImageBackground>
            </View>
        </View>
    );
}