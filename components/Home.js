import React from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { FIFTH_OF_WIDTH, OFF_WHITE } from '../constants';
import HomeFeedPost from './HomeFeedPost';
import HomeStory from './HomeStory';

const feedPostContent = require('../dummy-data/HomeFeedPostContent');
const stories = require('../dummy-data/HomeStories');

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
  },
  storiesWrapper: {
    height: FIFTH_OF_WIDTH + 5,
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 3,
    backgroundColor: OFF_WHITE
  },
  rowWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: 'white'
  }
});

export default class Home extends React.Component {

  static navigationOptions = {
      headerLeft: <Icon name="camera" style={styles.headerLeftIcon}/>,
      title: "Instagram",
      headerRight: <Icon name="send" style={styles.headerRightIcon}/>,
      headerStyle: {backgroundColor: OFF_WHITE}
  };

  displayFeedPosts = () => (
    feedPostContent.map((post, i) => {
      return (
         <HomeFeedPost 
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

  displayStories = () => (
    stories.map((story, i) => {
      return (
        <HomeStory 
          key={i}
          image={story.image}  
          text={story.text}  
        />
      )
    })
  );

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.rowWrapper}>
          <ScrollView 
            horizontal={true} 
            showsHorizontalScrollIndicator={false} 
            style={{backgroundColor: OFF_WHITE}}
          > 
            <View style={styles.storiesWrapper}>
              {this.displayStories()}
            </View>
          </ScrollView>
        </View> 
        {this.displayFeedPosts()}
      </ScrollView>
    );
  }
}



