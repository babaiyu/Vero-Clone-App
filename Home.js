import React, { Component } from 'react'
import { Image } from 'react-native'
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, Card, CardItem, Thumbnail } from 'native-base';

class CardIdentity extends Component {
  
  render() {
    return (
      <Card style={{backgroundColor: '#34495e'}}>
        <CardItem>
          <Left>
            <Thumbnail source={{uri: this.props.thumbnail}}/>
            <Body>
              <Text>{this.props.name}</Text>
              <Text note>{this.props.hastag}</Text>
            </Body>
            <Right>
                <Icon name="heart" style={{color: 'red'}} />
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
              <Text>875</Text>
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

export default class CardExample extends Component {
  render() {
    return (
      <Container style={{backgroundColor: '#ecf0f1'}}>
        <Header noShadow style={{backgroundColor: '#00aba9'}}>
          <Body>
            <Title>vero</Title>
          </Body>
          <Right>
            <Icon name="search" style={{marginRight: 15, color: 'white' }} />
            <Icon name="notifications" style={{marginRight: 15, color: 'white'}} />
            <Icon name="chatbubbles"style={{marginRight: 10, color: 'white'}} />
          </Right>
        </Header>
        <Content padder>
          <CardIdentity name="Lisa BlackPink" thumbnail="https://www.wowkeren.com/display/images/photo/2018/09/12/00223802.jpg" image="https://images.pexels.com/photos/1633679/pexels-photo-1633679.jpeg?cs=srgb&dl=bird-s-eye-view-daylight-drone-footage-1633679.jpg&fm=jpg" hastag="@lalalalisa_m" />
          <CardIdentity name="Sarah Viloid" thumbnail="https://pbs.twimg.com/profile_images/1001808982615277568/EPVaEr4P_400x400.jpg" image="https://images.pexels.com/photos/1638502/pexels-photo-1638502.jpeg?cs=srgb&dl=beverage-books-coffee-1638502.jpg&fm=jpg" hastag="@sarahviloid.id" />
        </Content>
      </Container>
    );
  }
}