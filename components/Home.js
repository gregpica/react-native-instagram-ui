import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import FeedPost from './FeedPost';
import bosImage from '../assets/bos.png';
import laImage from '../assets/la.png';
import rutlandImage from '../assets/rutland.png';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff'
  },
  headerLeftIcon: {
    paddingLeft: 15,
    fontSize: 20
  },
  headerRightIcon: {
    paddingRight: 15,
    fontSize: 20
  }
});

//Dummy data 
const feedPostContent = [
  {
    pic: bosImage,
    likes: 98,
    userName: 'bob_smith',
    caption: "This is my caption for my really really cool IG post, it's lit. Random words.",
    time: '8 MINUTES AGO'

  }, 
  {
    pic: laImage,
    likes: 77,
    userName: 'traveler99',
    caption: "LA!",
    time: '22 MINUTES AGO'
  },
  {
    pic: rutlandImage,
    likes: 1023,
    userName: 'g00fyGuy',
    caption: 'Boston skies',
    time: '26 MINUTES AGO'
  }
];

const feedPosts = feedPostContent.map((post, i) => {
  return (
     <FeedPost 
        key={i}
        pic={post.pic}  
        likes={post.likes}  
        userName={post.userName}
        caption={post.caption}
        time={post.time}
    />
  )
})


export default class Home extends React.Component {

  static navigationOptions = {
      headerLeft: <Icon name="camera" style={styles.headerLeftIcon}/>,
      title: "Instagram",
      headerRight: <Icon name="send" style={styles.headerRightIcon}/>,
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        {feedPosts}
      </ScrollView>
    );
  }
}



