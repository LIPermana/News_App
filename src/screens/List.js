import React, {Component} from 'react';
import {View, Image, ScrollView} from 'react-native';
import {
  Container,
  Content,
  Text,
  Header,
  Left,
  Body,
  Right,
  Thumbnail,
  Card,
  CardItem,
  Button,
  Icon
} from 'native-base';
import axios from 'axios';
import News from '../Components/News';

export default class List extends Component {

  static navigatorStyle = {
    navBarTextColor: '#fff',
    navBarBackgroundColor: '#9900FF',
    topBarElevationShadowEnabled: false,
    tabBarHidden: true,
    statusBarColor: '#6E03B5',
    navBarTitleTextCentered: true,
  };

  constructor(){
    super();
    this.state = {
      articles: [],
      articlesTechnology: [],
      articlesEntertainment: [],
    }
  }

  componentDidMount(){
    const self = this;
    axios.all([
      axios.get('https://newsapi.org/v2/top-headlines?country=id&apiKey=0bf4bdd3534d4609a61c04f0380e652a'),
      axios.get('https://newsapi.org/v2/top-headlines?country=id&category=technology&apiKey=0bf4bdd3534d4609a61c04f0380e652a'),
      axios.get('https://newsapi.org/v2/top-headlines?country=id&category=entertainment&apiKey=0bf4bdd3534d4609a61c04f0380e652a'),
    ])
    .then(axios.spread((umum, technology, entertainment)=>{
      self.setState({articles: umum.data.articles});
      self.setState({articlesTechnology: technology.data.articles});
      self.setState({articlesEntertainment: entertainment.data.articles});
    })).catch((error)=>{
      console.log('Astaghfirullah')
      console.log(error)
    })
  }

  render(){
    return(
      <Container style={{backgroundColor: '#DCDCDC'}}>
      <View style={forstyle.navbar}>
      </View>
        <Content>
          <ScrollView style={forstyle.card}>
            {this.state.articlesTechnology.map((news, key)=><News key={key} news={news} {...this.props}/>)}
            {this.state.articles.map((news, key)=><News key={key} news={news} {...this.props}/>)}
          </ScrollView>
        </Content>
      </Container>
    )
  }
}

const forstyle = {
  navbar: {
    height: 50,
    width: '100%',
    backgroundColor: '#9900FF',
    position: 'absolute',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  card: {
    paddingLeft: 15,
    paddingRight: 15,
  }
}
