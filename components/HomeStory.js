import React from 'react';
import {View, Image, StyleSheet, ImageBackground, Text } from 'react-native';
import { SEVENTH_OF_WIDTH } from '../constants';

const storyBackground = require('../assets/story-background.png');

const styles = StyleSheet.create({
    storyBackground: {
        width: SEVENTH_OF_WIDTH,
        height: SEVENTH_OF_WIDTH,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 9,
        marginRight: 9,
      },
    story: {
        width: SEVENTH_OF_WIDTH - 7,
        height: SEVENTH_OF_WIDTH - 7,  

    },
    storyText: {
        marginTop: 3,
        fontSize: 10
    },
    storyAndTextWrapper: {
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center'
    }
});

const maybeEllipsisText = text => text.length > 12 ? text.slice(0, 10) + '...' : text;

export default function HomeStory(props) {
    return (
        <View style={styles.storyAndTextWrapper}>
          <ImageBackground source={storyBackground} style={styles.storyBackground}>
            <Image source={props.image} style={styles.story}></Image>
          </ImageBackground>
          <Text style={styles.storyText}>{maybeEllipsisText(props.text)}</Text>
        </View>
    );
}