import React from 'react'

import { GiftedChat } from 'react-native-gifted-chat'
 
export default class Example extends React.Component {
  state = {
    messages: [],
  }
 
  componentWillMount() {
    this.setState({
      messages: [
        {
          _id: 1,
          text: 'Hai Permana, I Love You.... :*',
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'Lisa BlackPink',
            avatar: 'https://www.wowkeren.com/display/images/photo/2018/09/12/00223802.jpg',
          },
        },
      ],
    })
  }
 
  onSend(messages = []) {
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }))
  }
 
  render() {
    return (
      <GiftedChat
        messages={this.state.messages}
        onSend={messages => this.onSend(messages)}
        user={{
          _id: 1,
        }}
      />
    )
  }
}