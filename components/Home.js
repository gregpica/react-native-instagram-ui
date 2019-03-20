import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import FeedPost from './FeedPost';

const feedPostContent = require('../dummy-data/HomeFeedPostContent');

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

export default class Home extends React.Component {

  static navigationOptions = {
      headerLeft: <Icon name="camera" style={styles.headerLeftIcon}/>,
      title: "Instagram",
      headerRight: <Icon name="send" style={styles.headerRightIcon}/>,
  };

  displayFeedPosts = () => (
    feedPostContent.map((post, i) => {
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
  );

  render() {
    return (
      <ScrollView style={styles.container}>
        {this.displayFeedPosts()}
      </ScrollView>
    );
  }
}



