import React, { Component } from 'react'
import { Content, Container, Button, Text, H1, Icon, Footer } from 'native-base';
import { Grid, Row, Col } from 'react-native-easy-grid'

class RowIcon extends Component {
  render() {
    return (
      <Row style={{marginTop: 50}}>
        <Col style={{justifyContent: 'center', alignItems: 'center'}}>
            <Icon style={{color: 'white'}} name={this.props.RowIcon} onPress={()=> alert(this.props.rowalert)} />
            <Text note>{this.props.rowtext}</Text>
        </Col>
        <Col style={{justifyContent: 'center', alignItems: 'center'}}>
          <Icon style={{color: 'white'}} name={this.props.RowIcon2} onPress={()=> alert(this.props.rowalert2)} />
          <Text note>{this.props.rowtext2}</Text>
        </Col>
      </Row>
    );
  }
}

export default class App extends Component {
  render() {
    return (
      <Container style={{backgroundColor: '#2c3e50'}}>
        <Content padder>
          <Grid>
            <Row>
              <Col style={{marginTop: 100,justifyContent: 'center', alignItems: 'center'}}><H1 style={{color: 'white'}}>Create Post</H1></Col>
            </Row>
            <RowIcon RowIcon="camera" RowIcon2="link" rowalert="Camera" rowalert2="Link" rowtext="Camera" rowtext2="Link" />
            <RowIcon RowIcon="musical-notes" RowIcon2="videocam" rowalert="Music" rowalert2="VideoCam" rowtext="Music" rowtext2="Video Cam" />
            <RowIcon RowIcon="map" RowIcon2="book" rowalert="Place" rowalert2="Book" rowtext="Place" rowtext2="Book" />
          </Grid>
          <Footer style={{marginTop: 75, backgroundColor: 'none'}}>
            <Button rounded danger onPress={()=> this.props.navigation.goBack()}><Icon name="close" /></Button>
          </Footer>
        </Content>
      </Container>
    );
  }
}
