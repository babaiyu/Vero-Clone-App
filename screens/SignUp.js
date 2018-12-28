import React, { Component } from 'react'
import { Text } from 'react-native'
import { Container, Header, Content, Form, Button, Item, Input, Label, H1, H3, Footer, FooterTab, Icon, Left, Right, Body, DeckSwiper} from 'native-base'

export default class Login extends Component {
  render() {
    return (
      <Container>
        <Header transparent>
          <Left>
            <Button transparent onPress={()=> this.props.navigation.goBack()}>
              <Text style={{color: 'skyblue'}}>Back</Text>
            </Button>
          </Left>
          <Body style={{justifyContent: 'center', alignItems: 'center'}}>
            <H3 style={{marginLeft: 75}}>Sign Up</H3>
          </Body>
          <Right>
            <Button transparent onPress={()=> this.props.navigation.push('Login')}><Text>Next</Text></Button>
          </Right>
        </Header>
        <Content padder style={{marginTop: 50}}>
          <Form style={{alignItems: 'center', justifyContent: 'center'}}>
            <Item floatingLabel>
              <Label>Fullname</Label>
              <Input />
            </Item>
            <Item floatingLabel>
              <Label>Email</Label>
              <Input />
            </Item>
            <Item floatingLabel>
              <Label>Confirm Email</Label>
              <Input />
            </Item>
            <Item floatingLabel last style={{border: 1}}>
              <Label>Password (Min. 6 characters)</Label>
              <Input />
            </Item>
          </Form>
        </Content>
        <Footer style={{justifyContent: 'center', alignItems: 'center', backgroundColor: 'white'}}>
          <Button transparent onPress={()=> alert("Don't Copy and Paste if you want understand the code")}><Text>Privacy and Term Conditions</Text></Button>
        </Footer>
      </Container>
    );
  }
}