import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, ImageBackground} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import ExploreCollageLargeLeft from './ExploreCollageLargeLeft';
import ExploreCollageLargeRight from './ExploreCollageLargeRight';
import { TOTAL_WIDTH, THIRD_OF_WIDTH, FOURTH_OF_WIDTH, FIFTH_OF_WIDTH } from '../constants';

const images = require('../dummy-data/ExploreImages');
const categories = require('../dummy-data/ExploreCategories');

const categoryWidth = TOTAL_WIDTH * .28;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flexDirection: 'column',
    alignItems: 'center'
  },
  tabBarIcon: {
    fontSize: 22
  },
  searchWrapper: {
    flexDirection: 'row',
    backgroundColor: '#efefef',
    borderRadius: 5,
    width: '95%',
    height: 28,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 45
  },
  searchText: {
    color: '#666666',
    fontWeight: '300'
  },
  searchIcon: {
    color: '#666666'
  },
  categories: {
    height: FOURTH_OF_WIDTH,
    flexDirection: 'row',
    alignItems: 'center'
  },
  category: {
    width: categoryWidth,
    height: FIFTH_OF_WIDTH,
    marginLeft: 10,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  smallImage: {
    height: THIRD_OF_WIDTH - (1/2),
    width: THIRD_OF_WIDTH - (2/3),
  },
  rowWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: 'white'
  },
  borderBottom: {
    borderColor: 'white',
    borderBottomWidth: 1
  },
  categoryText: {
    color: 'white',
    marginBottom: 10,
    fontWeight: '700',
    textShadowColor: 'black',
    textShadowRadius: 10,
    textShadowOffset: {width: -1, height: 1}
  }

});

const isCenterColumnImage = index => ((index + 2) % 9 === 0 || (index + 5) % 9 === 0) ? true : false;

const isLeftColumnImage = index => ((index + 3) % 9 === 0 || (index + 6) % 9 === 0) ? true : false;

const getSmallImageStyle = index => {
  let smallImageStyle = [ styles.borderBottom ];

  if (isCenterColumnImage(index)) {
    smallImageStyle.push({borderLeftWidth: (1/3), borderRightWidth: (1/3)})
  } else if (isLeftColumnImage(index)) {
    smallImageStyle.push({borderRightWidth: (2/3)})
  } else {
    smallImageStyle.push({borderLeftWidth: (2/3)})
  };

  return smallImageStyle;
};

const getCollageComponent = (index, isLargeImageOnRight, prev, prevPrev, image) => {
  const sharedProps = {
    key: index,
    rowWrapperStyle: styles.rowWrapper,
    smallImageStyle: styles.smallImage,
    borderBottomStyle: styles.borderBottom
  };

  if(isLargeImageOnRight) {
      return {
        collage: <ExploreCollageLargeRight
          {...sharedProps}
          index={index}
          largeImage={image}
          smallImageTop={prevPrev}
          smallImageBottom={prev}
        />,
        isLargeImageOnRightNextTime: false 
      }
  }

  return {
    collage: <ExploreCollageLargeLeft
      {...sharedProps}
      largeImage={prevPrev}
      smallImageTop={prev}
      smallImageBottom={image}
    />,
    isLargeImageOnRightNextTime: true 
  }
};

export default class Explore extends React.Component {
  
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => <Icon name="ios-search" style={[ styles.tabBarIcon, { color: tintColor}]}/>,
  }

  displayImages = () => {
    let prevPrev;
    let prev;
    let isLargeImageOnRight = true; 

    return images.map((image, i) => {
      if (prev && prevPrev) {
        const { collage, isLargeImageOnRightNextTime } = getCollageComponent(i, isLargeImageOnRight, prev, prevPrev, image);
        prev = null;
        prevPrev = null;
        isLargeImageOnRight = isLargeImageOnRightNextTime;
        return collage;
      } else if (prevPrev) {
        prev = image;
      } else if (i % 9 === 0 ) {
        prevPrev = image;
      } else {
        return (
          <View key={i} style={getSmallImageStyle(i)}>
             <Image source={image} style={styles.smallImage}></Image>
          </View>
        )
      }
    })
  };

   displayCategories = () => (
    categories.map((category, i) => {
        let blurRadius = 0;
        i === 0 ? blurRadius = 25 : null;
        return (
          <ImageBackground key={i} blurRadius={blurRadius} imageStyle={{borderRadius: 10}} source={category.image} style={styles.category}>
            <Text style={styles.categoryText}>{category.text}</Text>
          </ImageBackground>
        )
    })
   );

  render() {
    return (
      <ScrollView contentContainerStyle={styles.container} stickyHeaderIndices={[1]}>
        <View style={styles.searchWrapper}>
          <Icon name="ios-search" style={styles.searchIcon}> </Icon>
          <Text style={styles.searchText}>Search</Text>
        </View>
        <View style={styles.rowWrapper}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}> 
            <View style={styles.categories}>
              {this.displayCategories()}
            </View>
          </ScrollView>
        </View> 
        <View style={styles.rowWrapper}>
          {this.displayImages()}
        </View>
      </ScrollView>
    );
  }
}

