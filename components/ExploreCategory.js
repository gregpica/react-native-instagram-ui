import React from 'react';
import {StyleSheet, ImageBackground, Text, Image } from 'react-native';
import { FIFTH_OF_WIDTH, TOTAL_WIDTH, TENTH_OF_WIDTH } from '../constants';
import youImage from '../assets/greg.png';

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
        textShadowRadius: 5,
        textShadowOffset: {width: -1, height: 1}
    },
    userPhoto: {
        width: TENTH_OF_WIDTH,
        height: TENTH_OF_WIDTH,  
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 20,
        marginBottom: 5
    }
});

const addBlurRadiusForFirst = index => index === 0 ? 25 : 0;

const addUserPhotoForFirst = index => index === 0 ? <Image source={youImage} style={styles.userPhoto}></Image> : null;
  
export default function ExploreCategory(props) {
    return (
      <ImageBackground blurRadius={addBlurRadiusForFirst(props.index)} imageStyle={{borderRadius: 10}} source={props.image} style={styles.category}>
        {addUserPhotoForFirst(props.index)}
        <Text style={styles.categoryText}>{props.text}</Text>
      </ImageBackground>
    );
}