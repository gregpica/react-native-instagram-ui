import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import IconFeather from 'react-native-vector-icons/Feather';
import { TOTAL_WIDTH, TENTH_OF_WIDTH } from '../constants';

const styles = StyleSheet.create({
    bottomIconsWrapper: {
      flexDirection: 'row',
      marginTop: 5
    },
    leftBottomIcons: {
      flex: 2,
      flexDirection: 'row',
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'flex-start',
      paddingLeft: 2,
    },  
    rightBottomIcons: {
      flex: 2,
      flexDirection: 'row',
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'flex-end',
    },
    postImage: {
      height: TOTAL_WIDTH,
      width: TOTAL_WIDTH
    },
    likes: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
      paddingLeft: 10,
      marginTop: 5,
      marginBottom: 5,
      fontWeight: '600'
    },
    nameCaptionWrapper: {
      flexDirection: 'row',
      paddingLeft: 10,
      paddingRight: 10
    },
    userName: {
      fontWeight: '600',
      marginRight: 5
    },
    time: {
      fontWeight: '200',
      fontSize: 9,
      paddingLeft: 10,
      marginTop: 5,
      marginBottom: 15
    },
    profilePhoto: {
      width: TENTH_OF_WIDTH,
      height: TENTH_OF_WIDTH,
      marginRight: 10,
      marginLeft: 10
    },
    location: {
      fontSize: 12
    },
    profilePhotoAndTextWrapper: {
      flexDirection: 'row',
      marginTop: 7,
      marginBottom: 7
    },
    headerWrapper: {
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    ellipsisIcon: {
      justifyContent: 'center',
      marginRight: 15
    }
  });
  
export default function HomeFeedPost(props) {
    return (
      <View>
        <View style={styles.headerWrapper}>
          <View style={[styles.profilePhotoAndTextWrapper, {alignItems: props.location ? 'flex-end' : 'center'}]}> 
            <Image source={props.profilePhoto} style={styles.profilePhoto}/>
            <View>
              <Text style={styles.userName}>{props.userName}</Text>
              <Text style={[styles.location, {display: props.location ? 'flex' : 'none'}]}>{props.location}</Text>
            </View>
          </View>
          <View style={styles.ellipsisIcon}>
          <IconFeather name="more-horizontal" style={{fontSize: 17}}/>
          </View>
        </View>
        <Image source={props.postImage} style={styles.postImage}/>
        <View style={styles.bottomIconsWrapper}>
          <View style={styles.leftBottomIcons}>
            <Icon.Button name="heart-o" backgroundColor='white' color='black'> </Icon.Button>
            <Icon.Button name="comment-o" backgroundColor='white' color='black'> </Icon.Button>
            <IconFeather.Button name="send" backgroundColor='white' color='black'> </IconFeather.Button>
          </View>
          <View style={styles.rightBottomIcons}>
            <Icon.Button name="bookmark-o" backgroundColor='white' color='black'> </Icon.Button>
          </View>
        </View>
        <Text style={styles.likes}>{props.likes} Likes</Text>
        <View style={styles.nameCaptionWrapper}>
          <Text>          
              <Text style={styles.userName}>{props.userName}</Text>
              <Text> {props.caption}</Text>
          </Text>
        </View>
        <Text style={styles.time}>{props.time}</Text>
      </View>
    );
}