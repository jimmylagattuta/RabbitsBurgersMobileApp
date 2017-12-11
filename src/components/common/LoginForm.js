import React, { Component } from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import axios from 'axios';
import { Card } from './Card';
import { CardSection } from './CardSection';
import { Input } from './Input';
import { Button } from './Button';
import { Spinner } from './Spinner';

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
              const page = 'logged in';
              this.props.resetPage(page);
            }
          })
          .catch((response) => {
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

        axios.post('http://localhost:3000/api/v1/sessions/login', items)
          .then((response) => {
            this.setState({
              loading: false,
              emailSignin: '',
              passwordSignin: ''
            });
            const page = 'logged in';
            this.props.resetPage(page);
          })
          .catch((response) => {
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
              marginTop: 25,
              marginBottom: -40,
              marginLeft: 15
            }}
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
              marginBottom: -40,
              marginLeft: 22,
              opacity: 0.8
            }}
            source={{ uri: 'https://i.imgur.com/Dxevesb.png' }}
          />
        </View>

        <ScrollView style={{ maxHeight: 200 }}>
          <CardSection>
            <Text style={{ fontSize: 20, fontWeight: 'bold', justifyContent: 'center' }}>Signup</Text>
          </CardSection>

          <CardSection>
            <Input
              placeholder="first name"
              value={this.state.firstName}
              onChangeText={(text) => {
                this.setState({ firstName: text });
              }}
            />
          </CardSection>

          <CardSection>
            <Input
              placeholder="last name"
              value={this.state.lastName}
              onChangeText={(text) => {
                this.setState({ lastName: text });
              }}
            />
          </CardSection>

          <CardSection>
            <Input
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
              placeholder="password confirmation"
              value={this.state.passwordSignupConfirmation}
              onChangeText={(text) => {
                this.setState({ passwordSignupConfirmation: text });
              }} 
            />
          </CardSection>

          <CardSection>
            <Input
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
        </ScrollView>

        <View>
          <Image
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              width: 300,
              height: 60,
              marginTop: 20,
              marginBottom: -30,
              marginLeft: 20
            }}
            source={{ uri: 'https://i.imgur.com/WgAeuGh.png' }}
          />
        </View>

        <View>
          <Image
            style={{
                justifyContent: 'center',
                alignItems: 'center',
                width: 300,
                height: 190,
                marginTop: -30,
                marginBottom: -40,
                marginLeft: 15
            }}
              source={{ uri: 'https://i.imgur.com/9IUGewb.png' }}

          />
        </View>

        <Card>
          <CardSection>
            <Text style={{ fontSize: 20, fontWeight: 'bold', justifyContent: 'center', alignItems: 'center', marginTop: -20 }}>Signin</Text>
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
            source={{ uri: 'https://i.imgur.com/GJKq9PF.png' }}
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
