import React from 'react';
import {Image} from 'react-native';
import {Card, CardItem, Left, Body, Text} from 'native-base';

export default Berita = ({news, navigator}) => (
<Card>
  <CardItem
  button
  onPress={()=>navigator.push({
    screen: 'tab.detail',
    passProps: {
      news: news
    }
  })}
  >
    <Left>
      <Body>
        <Text>{news.title}</Text>
        <Text note>{news.author}</Text>
        <Text note>{news.publishedAt}</Text>
      </Body>
    </Left>
  </CardItem>
  <CardItem
    cardBody
    button
    onPress={()=>navigator.push({
      screen: 'tab.detail',
      passProps: {
        news: news
      }
    })}
  >
    <Image source={{uri: news.urlToImage}} style={{height: 200, width: null, flex: 1}}/>
  </CardItem>
  <CardItem
  button
  onPress={()=>navigator.push({
    screen: 'tab.detail',
    passProps: {
      news: news
    }
  })}
  >
    <Body>
      <Text>{news.description}</Text>
    </Body>
  </CardItem>
</Card>
)
