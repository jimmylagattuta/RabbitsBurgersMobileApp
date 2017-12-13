import React, { Component } from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import axios from 'axios';
import { Card } from './Card';
import { CardSection } from './CardSection';
import { Input } from './Input';
import { Button } from './Button';

class LoginForm extends Component {
  state = {
    emailSignup: '',
    emailSignin: '',
    passwordSignup: '',
    passwordSignupConfirmation: '',
    passwordSignin: '',
    secretQuestion: '',
    secretAnswer: '',
    loading: '',
    firstName: '',
    lastName: ''
  }

  componentWillMount() {
    console.log('componentWillMount LoginForm');
  }

  onButtonPress() {
    this.setState({ loading: true });
    const items = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      secretQuestion: this.state.secretQuestion,
      secretAnswer: this.state.secretAnswer,
      emailSignup: this.state.emailSignup,
      passwordSignup: this.state.passwordSignup,
      passwordSignupConfirmation: this.state.passwordSignupConfirmation
    };
    const itemsTwo = {
      emailSignup: this.state.emailSignup,
      passwordSignup: this.state.passwordSignup
    };

    this.props.signUp(itemsTwo);

        axios.post('http://localhost:3000/api/v1/users/signup', items)
          .then((response) => {
            if (response.data.content !== 'No User Found') {
              this.setState({
                loading: false,
                emailSignup: '',
                passwordSignup: '',
                passwordSignupConfirmation: '',
                secretQuestion: '',
                secretAnswer: '',
                firstName: '',
                lastName: ''
              });
              const page = '';
              this.props.resetPage(page);
            }
          })
          .catch((response) => {
            console.log('catch response', response);
            this.setState({
              loading: false,
              emailSignup: '',
              passwordSignup: '',
              passwordSignupConfirmation: '',
              secretQuestion: '',
              secretAnswer: '',
              firstName: '',
              lastName: ''
            });
            const page = '';
            this.props.resetPage(page);
          });
  }

  onButtonPressSignin() {
    this.setState({ loading: true });

    const items = {
      emailSignin: this.state.emailSignin,
      passwordSignin: this.state.passwordSignin
    };
    this.props.signIn(items);

        axios.post('http://localhost:3000/api/v1/users/login', items)
          .then((response) => {
            this.setState({
              loading: false,
              emailSignin: '',
              passwordSignin: ''
            });
            const page = 'logged in';
            console.log('response to find userObject', response.data.content);
            const userObject = response.data.content;
            this.props.signIn(items);
            this.props.setUser(userObject);
            this.props.resetPage(page);
          })
          .catch((response) => {
            console.log('response', response);
            this.setState({
              loading: false,
              emailSignin: '',
              passwordSignin: ''
            });
            const page = '';
            this.props.resetPage(page);
          });
  }

  // renderButtonSignup() {
  //   if (this.props.loading) {
  //     return <Spinner size="large" />;
  //   }

  //   return (
  //     <Button onPress={this.onButtonPress()}>
  //         Signup
  //     </Button>
  //   );
  // }

  render() {
    return (
      <View>
        <View>
          <Image
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              width: 300,
              height: 100,
              marginTop: 45,
              marginBottom: -40,
              marginLeft: 15
            }}
            name="top bun"
            source={{ uri: 'https://i.imgur.com/GJKq9PF.png' }}
          />
        </View>

        <View>
          <Image
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              width: 300,
              height: 160,
              marginTop: 10,
              marginLeft: 22,
              opacity: 0.8
            }}
            name="tomatoes"
            source={{ uri: 'https://i.imgur.com/Dxevesb.png' }}
          />
        </View>

        <ScrollView style={{ maxHeight: 200, backgroundColor: '#E6FAE1', borderRadius: 0.2 }}>
          <View
            style={{
              borderWidth: 4,
              borderRadius: 4,
              borderColor: '#CFC826',
              borderBottomWidth: 2,
              shadowColor: '#8C8B85',
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.1,
              shadowRadius: 2,
              elevation: 1,
              marginLeft: 5,
              marginRight: 5
            }}
          >
            <CardSection>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: 'bold',
                  justifyContent: 'center'
                }}
              >
                Signup
              </Text>
            </CardSection>

            <CardSection>
              <Input
                style={{ 
                  backgroundColor: '#E6FAE1'
                 }}
                placeholder="first name"
                value={this.state.firstName}
                onChangeText={(text) => {
                  this.setState({ firstName: text });
                }}
              />
            </CardSection>

            <CardSection>
              <Input
                style={{ 
                  backgroundColor: '#E6FAE1'
                }}
                placeholder="last name"
                value={this.state.lastName}
                onChangeText={(text) => {
                  this.setState({ lastName: text });
                }}
              />
            </CardSection>

            <CardSection>
              <Input
                style={{ 
                  backgroundColor: '#E6FAE1'
                 }}
                placeholder="your@email.com"
                value={this.state.emailSignup}
                onChangeText={(text) => {
                  this.setState({ emailSignup: text });
                }} 
              />
            </CardSection>

            <CardSection>
              <Input
                secureTextEntry
                style={{ 
                  backgroundColor: '#E6FAE1'
                 }}
                placeholder="password"
                value={this.state.passwordSignup}
                onChangeText={(text) => {
                  this.setState({ passwordSignup: text });
                }}
              />
            </CardSection>

            <CardSection>
              <Input
                secureTextEntry
                style={{ 
                  backgroundColor: '#E6FAE1'
                 }}
                placeholder="password confirmation"
                value={this.state.passwordSignupConfirmation}
                onChangeText={(text) => {
                  this.setState({ passwordSignupConfirmation: text });
                }} 
              />
            </CardSection>

            <CardSection>
              <Input
                style={{ 
                  backgroundColor: '#E6FAE1'
                 }}
                label="Secret Question"
                placeholder="question"
                value={this.state.secretQuestion}
                onChangeText={(text) => {
                  this.setState({ secretQuestion: text });
                }}
              />
            </CardSection>

            <CardSection>
              <Input
                style={{ 
                  backgroundColor: '#E6FAE1'
                 }}
                label="Secret Answer"
                placeholder="answer"
                value={this.state.secretAnswer}
                onChangeText={(text) => {
                  this.setState({ secretAnswer: text });
                }}
              />
            </CardSection>

            <CardSection>
              <Button onPress={text => this.onButtonPress(text)}>
                Signup
              </Button>
            </CardSection>
          </View>
        </ScrollView>

        <View>
          <Image
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              width: 300,
              height: 190,
              marginTop: -10,
              marginBottom: -60,
              marginLeft: 15
            }}
            name="lettuce"
            source={{ uri: 'https://i.imgur.com/N6UDbP8.png' }}
          />
        </View>

        <View>
          <Image
            style={{
                justifyContent: 'center',
                alignItems: 'center',
                width: 260,
                height: 100,
                marginLeft: 37,
                marginBottom: 50
            }}
            name="patty and cheese"
            source={{ uri: 'https://i.imgur.com/b9sND4v.png?1' }}

          />
        </View>

        <Card>
          <View
            style={{
              borderWidth: 4,
              borderRadius: 4,
              borderColor: '#CFC826',
              borderBottomWidth: 2,
              shadowColor: '#8C8B85',
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.1,
              shadowRadius: 2,
              elevation: 1,
              marginLeft: 5,
              marginRight: 5
            }}
          >
            <CardSection>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: 'bold',
                  justifyContent: 'center'
                }}
              >
                Signin
              </Text>
            </CardSection>

            <CardSection>
              <Input
                placeholder="email"
                value={this.state.emailSignin}
                onChangeText={(text) => {
                  this.setState({ emailSignin: text });
                }}
              />
            </CardSection>

            <CardSection>
              <Input
                secureTextEntry
                placeholder="password"
                value={this.state.passwordSignin}
                onChangeText={(text) => {
                  this.setState({ passwordSignin: text });
                }}
              />
            </CardSection>

            <CardSection>
              <Button onPress={text => this.onButtonPressSignin(text)}>
                Signin
              </Button>
            </CardSection>
          </View>
        </Card>

        <View>
          <Image
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              width: 300,
              height: 80,
              marginTop: 30,
              marginBottom: 20,
              marginLeft: 22,
              opacity: 0.8
            }}
            name="bottom bun"
            source={{ uri: 'https://i.imgur.com/85QttKs.png?1' }}
          />
        </View>
      </View>
    );
  }
}

// const styles = {
//   errorTextStyle: {
//     fontSize: 20,
//     alignSelf: 'center',
//     color: 'red'
//   }
// };

export { LoginForm };
