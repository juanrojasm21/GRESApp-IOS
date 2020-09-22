import React, {Component} from 'react'; 
import {View,AsyncStorage} from 'react-native'


class logout extends Component {

  constructor(props){
    super(props);
    
  }
  UNSAFE_componentWillMount(){
    //se remueve el userLogin del asyncStorage de tal manera que el loading carge la pantalla de login
    AsyncStorage.removeItem('userLogin')
    this.props.navigation.navigate('Loading')
  }
  

  render() {
    
      return (
        <View></View>
      );
      }
}


export default logout