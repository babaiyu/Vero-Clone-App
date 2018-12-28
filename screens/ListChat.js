import React, { Component } from 'react'
import { View } from 'react-native'
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, Card, CardItem, Thumbnail, Fab, List, ListItem, Image } from 'native-base';

export default class ListChat extends Component {
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
                        <Title style={{color: 'white'}}>Message</Title>
                    </Right>
                </Header>
                <Content>
                    <List>
                        <ListItem avatar onPress={()=> this.props.navigation.push('ChatScreen')}>
                            <Left>
                                <Thumbnail source={{uri: 'https://www.wowkeren.com/display/images/photo/2018/09/12/00223802.jpg'}} />
                            </Left>
                            <Body>
                                <Text>Lisa BlackPink</Text>
                                <Text note>Hai Permana, I Love You.... :*</Text>
                            </Body>
                            <Right>
                                <Text note></Text>
                            </Right>
                        </ListItem>
                        <ListItem avatar onPress={()=> this.props.navigation.push('ChatScreen')}>
                            <Left>
                                <Thumbnail source={{uri: 'https://pbs.twimg.com/profile_images/1001808982615277568/EPVaEr4P_400x400.jpg'}} />
                            </Left>
                            <Body>
                                <Text>Sarah Viloid</Text>
                                <Text note>Nanti malem main PUBG Mobile ya...</Text>
                            </Body>
                            <Right>
                                <Text note></Text>
                            </Right>
                        </ListItem>
                    </List>
                </Content>
                <View>
                    <Fab
                        style={{ backgroundColor: '#00aba9'}}
                        position="bottomLeft"
                        onPress={()=> this.props.navigation.navigate('Post')}
                    >
                        <Icon name="text" />
                    </Fab>
                </View>
            </Container>
        );
    }
}