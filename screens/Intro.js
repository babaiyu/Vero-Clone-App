import React, { Component } from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { Container, Header, Content, Card, CardItem, Form, Button, Item, Input, Label, H1, H3, Footer, FooterTab, Icon, Left, Right, Body, DeckSwiper, Thumbnail} from 'native-base'

const cards = [
    {
        text: 'Less social network, more social life',
        name: 'Welcome to Vero',
        image: source={uri: 'https://lh3.googleusercontent.com/G3pcWFFl5KDEQh_KdTxxk00xjD6cUMcQicSy6wAOhAIs_cQ0-HW9f4qHoBUwfRHcv-Zn=w1366-h657-rw'}
    },
    {
        text: 'Share What You Want',
        name: 'Create a Post',
        image: source={uri: 'https://lh3.googleusercontent.com/7pMbeANOIpL3KS9zNsRI3aRz_bNzCv3l9T_F4GrIGn1Jvkuqo0PWpCvu7UrXcA39wkgf=w720-h310-rw'}
    },
    {
        text: 'Easily Control Who Sees Your Posts',
        name: 'Manage Posts',
        image: source={uri: 'https://lh3.googleusercontent.com/rU115nl6Ylc-QDlaO71klsTP3h2CepBq_hR29DSFiZpuutO3eb2hIip3Vf2qtxpHqxU=w720-h310-rw'}
    },
    {
        text: 'Search Everything Thats Ever Been Shared With You ',
        name: 'Search Everything',
        image: source={uri: 'https://lh3.googleusercontent.com/qV06bJnpToPuMHk4ONZYrTe9Th41W3ghS2jXpg_nU-7LPTfPp55qd-UJkX7vnM0I3j8=w720-h310-rw'}
    },
    {
        text: 'Chat With Your Friends',
        name: 'Featured Chat',
        image: source={uri: 'https://lh3.googleusercontent.com/TpA97Z6HzfX9dWGi39a5NZKPFu68Ntx6JnRqkz1OHbvI92Bu7akcPGMPgnV8cbbZQY6r=w720-h310-rw'}
    }
];

export default class Intro extends Component {
    render() {
        return(
            <Container>
                <Header style={{backgroundColor: 'none'}}>
                    <Button dark style={{marginRight: 15}} onPress={()=> this.props.navigation.push('Login')}><Text style={{color: 'white'}}>Sign In</Text></Button>
                    <Button style={{backgroundColor: 'skyblue'}} onPress={()=> this.props.navigation.push('SignUp')}><Text style={{color: 'white'}}>Sign Up</Text></Button>
                </Header>
                <View style={{marginTop: 10}}>
                    <DeckSwiper
                        dataSource={cards}
                        renderItem={item => 
                            <Card>
                                <CardItem>
                                    <Left>
                                        <Thumbnail source={item.image} />
                                        <Body>
                                            <Text>{item.text}</Text>
                                            <Text note>Vero - True Social</Text>
                                        </Body>
                                    </Left>
                                </CardItem>
                                <CardItem cardBody>
                                    <Image style={{ height: 300, flex: 1 }} source={item.image} />
                                </CardItem>
                                <CardItem>
                                    <Text>{item.name}</Text>
                                </CardItem>
                            </Card>
                        }
                    />
                </View>
            </Container>
        );
    }
}
