import React, {Component} from 'react'; 
import {View,AsyncStorage} from 'react-native'


class logout extends Component {

  constructor(props){
    super(props);
    
  }
  componentWillMount(){
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