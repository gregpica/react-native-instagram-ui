import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import IconFeather from 'react-native-vector-icons/Feather';
import { TOTAL_WIDTH } from '../constants';


const styles = StyleSheet.create({
    iconWrapper: {
      flexDirection: 'row',
      marginTop: 5
    },
    leftIcons: {
      flex: 2,
      flexDirection: 'row',
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'flex-start',
      paddingLeft: 2,
    },  
    rightIcons: {
      flex: 2,
      flexDirection: 'row',
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'flex-end',
    },
    pic: {
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
      paddingRight: 10,
      flexWrap: 'wrap'
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
    }
  });
  
export default function FeedPost(props) {
    return (
     <View>
        <Image source={props.pic} style={styles.pic}/>
        <View style={styles.iconWrapper}>
          <View style={styles.leftIcons}>
            <Icon.Button name="heart-o" backgroundColor='white' color='black'> </Icon.Button>
            <Icon.Button name="comment-o" backgroundColor='white' color='black'> </Icon.Button>
            <IconFeather.Button name="send" backgroundColor='white' color='black'> </IconFeather.Button>
          </View>
          <View style={styles.rightIcons}>
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