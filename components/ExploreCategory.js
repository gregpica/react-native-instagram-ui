import React from 'react';
import {StyleSheet, ImageBackground, Text } from 'react-native';
import { FIFTH_OF_WIDTH, TOTAL_WIDTH } from '../constants';

const categoryWidth = TOTAL_WIDTH * .28;

const styles = StyleSheet.create({
    category: {
        width: categoryWidth,
        height: FIFTH_OF_WIDTH,
        marginLeft: 10,
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    categoryText: {
        color: 'white',
        marginBottom: 10,
        fontWeight: '700',
        textShadowColor: 'black',
        textShadowRadius: 10,
        textShadowOffset: {width: -1, height: 1}
      },
});

export default function ExploreCategory(props) {
    return (
      <ImageBackground blurRadius={props.blurRadius} imageStyle={{borderRadius: 10}} source={props.image} style={styles.category}>
        <Text style={styles.categoryText}>{props.text}</Text>
      </ImageBackground>
    );
}