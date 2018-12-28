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
            <H3 style={{marginLeft: 75}}>Login</H3>
          </Body>
          <Right>
            <Button transparent onPress={()=> this.props.navigation.push('Home')}><Text>Done</Text></Button>
          </Right>
        </Header>
        <Content padder style={{marginTop: 100}}>
          <Form style={{alignItems: 'center', justifyContent: 'center'}}>
            <H1>Welcome Back</H1>
            <Text>Sign In with your Vero account</Text>
            <Item floatingLabel>
              <Label>Email</Label>
              <Input />
            </Item>
            <Item floatingLabel last style={{border: 1}}>
              <Label>Password</Label>
              <Input />
            </Item>
            <Item style={{marginTop: 50}}>
              <Text note>Did you forgot your Password?</Text>
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