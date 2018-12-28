import React from 'react'
import {Modal, Text, TouchableHighlight, View, Alert, Image} from 'react-native';
import { Container, Header, Content, Thumbnail, Footer, Button, Left, Right, Body, Icon, H5, List, ListItem, Switch, Fab, Title } from 'native-base'

export default class Profile extends React.Component {
    render() {
        return(
            <Container>
                <Header transparent style={{backgroundColor: '#00aba9'}}>
                    <Left>
                        <Button transparent onPress={()=> this.props.navigation.goBack()}>
                            <Icon name="ios-arrow-back" style={{color: 'white'}} />
                        </Button>
                    </Left>
                    <Right>
                        <Title style={{color: 'white'}}>Profile</Title>
                    </Right>
                </Header>
                <Content padder>
                    <Body>
                        <Thumbnail large source={{uri: 'https://www.wowkeren.com/display/images/photo/2018/09/12/00223802.jpg'}}/>
                        <Text style={{fontSize: 23}}>Lisa BlackPink</Text>
                        <Text note>@lalalalisa_m</Text>
                    </Body>
                </Content>
                <Footer style={{justifyContent: 'center', alignItems: 'center', backgroundColor: '#a20025'}}>
                    <Button block transparent onPress={()=> this.props.navigation.navigate('Login')}>
                        <Text style={{color: 'white'}}>Log Out</Text>
                    </Button>
                </Footer>
            </Container>
        );
    }
}