import React, {Component} from 'react';
import {TouchableOpacity, ScrollView, View, Image, WebView} from 'react-native';
import PropTypes from 'prop-types';
import {
  Container,
  Content,
  Text,
  Header,
  Left,
  Body,
  Right,
  Thumbnail,
  Icon
} from 'native-base';

class Detail extends Component {

  static navigatorStyle = {
    title: 'Detail',
    statusBarColor: '#6E03B5',
    tabBarHidden: true,
    navBarTextColor: '#fff',
    navBarBackgroundColor: '#9900FF',
    navBarButtonColor: '#fff',
    navBarCustomViewInitialProps: {
      title: 'Detail'
    }
  };

  render(){

    const {news} = this.props;

    return(
      <WebView
        source={{uri: news.url}}
        startInLoadingState={true}
      />
    )
  }
}

Detail.propTypes = {
  news: PropTypes.object.isRequired
};

export default Detail;
