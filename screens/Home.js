import React, { Component } from 'react'
import { Image, View } from 'react-native'
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, Card, CardItem, Thumbnail, Fab } from 'native-base';

class CardIdentity extends Component {
  render() {
    return (
      <Card transparent style={{backgroundColor: '#34495e'}}>
        <CardItem>
          <Left>
            <Thumbnail source={{uri: this.props.thumbnail}}/>
            <Body>
              <Text>{this.props.name}</Text>
              <Text note>{this.props.hastag}</Text>
            </Body>
            <Right>
                <Icon name="ios-heart" style={{color: 'red'}} />
            </Right>
          </Left>
        </CardItem>
        <CardItem cardBody>
          <Image source={{uri: this.props.image}} style={{height: 200, width: null, flex: 1}}/>
        </CardItem>
        <CardItem>
            <Left>
            <Button transparent onPress={()=> alert("Thanks for Like")}>
              <Text>999</Text>
              <Icon name="thumbs-up"/>
            </Button>
            <Button transparent>
              <Icon name="chatboxes"/>
            </Button>
          </Left>
          <Right>
            <Icon name="more" />
          </Right>
        </CardItem>
      </Card>
    )
  }
}

export default class Home extends Component {
  render() {
    return (
      <Container style={{backgroundColor: '#ecf0f1'}}>
        <Header transparent style={{backgroundColor: '#00aba9', justifyContent: 'center'}}>
          <View  />
          <Left>
            <Title style={{justifyContent: 'center', alignItems: 'center'}}>VERO</Title>
          </Left>
          <Right>
            <Icon name="ios-person" style={{marginRight: 15, color: 'white'}} onPress={()=> this.props.navigation.navigate('Profile')} />
            <Icon name="ios-chatbubbles"style={{marginRight: 10, color: 'white'}} onPress={()=> this.props.navigation.navigate('ListChat')} />
          </Right>
        </Header>
        <Content>
          <CardIdentity name="Lisa BlackPink" thumbnail="https://www.wowkeren.com/display/images/photo/2018/09/12/00223802.jpg" image="https://images.pexels.com/photos/1633679/pexels-photo-1633679.jpeg?cs=srgb&dl=bird-s-eye-view-daylight-drone-footage-1633679.jpg&fm=jpg" hastag="@lalalalisa_m" />
          <CardIdentity name="Sarah Viloid" thumbnail="https://pbs.twimg.com/profile_images/1001808982615277568/EPVaEr4P_400x400.jpg" image="https://images.pexels.com/photos/1638502/pexels-photo-1638502.jpeg?cs=srgb&dl=beverage-books-coffee-1638502.jpg&fm=jpg" hastag="@sarahviloid.id" />
        </Content>
        <View>
          <Fab
            style={{ backgroundColor: '#00aba9'}}
            position="bottomLeft"
            onPress={()=> this.props.navigation.navigate('Post')}
          >
            <Icon name="add" />
          </Fab>
        </View>
      </Container>
    );
  }
}