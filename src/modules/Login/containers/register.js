import React, { Component } from 'react';
import { View, } from "react-native";
import * as Font from 'expo-font';
import {StyleSheet,KeyboardAvoidingView,Alert, ScrollView,StatusBar} from 'react-native'
import { Container, Content, Card, CardItem, Text, Body, Button,Item,Label,Input, Icon,Picker} from 'native-base';

import api from '../../../utils/api'
class Registro extends Component {
  state = {sex: ''}
   updateUser = (sex) => {
      this.setState({ sex: sex })
   }
  constructor(props){
    super(props);
    this.state={
      isReady:false,
      icon:'eye-off',
      fontLoaded:false,
      selected: "hombre",
      selected2: "en muslo",
      password:true,
      user:'',
      pass:'',
      sexo:'',
      edad:'',
      ocupacion:'',
      tipo_amp:''
    };
  }
  _changeIcon(){
    this.setState(prevState=>({
      icon:prevState.icon==='eye'?'eye-off':'eye',
      password:!prevState.password
    }));
  }
  //función para registrar los usuarios a en la pantalla registro
  register=()=>{
    if (this.state.user=='' || this.state.pass=='' || this.state.edad=='' || this.state.ocupacion=='' ){
      Alert.alert("Debe completar todos los campos para poder terminar el registro")
    }
    else{
      api.registerData(this.state.user,this.state.pass,this.state.sexo,this.state.edad,this.state.ocupacion,this.state.tipo_amp)
      this.props.navigation.navigate('Login')
    }
    
  }
  
  componentWillMount(){
    this.loadFonts();
  }
  

  async loadFonts() {
    await Font.loadAsync({
    
      'Roboto': require('../../../../node_modules/native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('../../../../node_modules/native-base/Fonts/Roboto_medium.ttf'),
      'Courgette-Regular': require('../../../../assets/fonts/Courgette-Regular.ttf'),
      'Quicksand-SemiBold': require('../../../../assets/fonts/Quicksand-SemiBold.ttf'),
      'Quicksand-Regular': require('../../../../assets/fonts/Quicksand-Regular.ttf'),
    })
    
    this.setState({ isReady: true })
  }

  render() {
    if (!this.state.isReady) {
      return (
        <View></View>
      );
    }
    return (
      
      <Container style={styles.Content}>
        
        <Content padder contentContainerStyle={styles.Content}>
          <StatusBar translucent={true} backgroundColor="#FFF" />
          <KeyboardAvoidingView behavior='padding' enabled>
          <Card>
            <CardItem bordered>
              <Text style={styles.textCenter}>Registrar usuario</Text>
            </CardItem>
            <CardItem bordered>
              <Body style={styles.body}>
                <Item>
                <Input placeholder="Nombre de usuario" style={{fontFamily:'Quicksand-Regular',fontSize:18
                }}onChangeText={(user)=>this.setState({user})} />
                </Item>
                <Item>
                <Input placeholder="Contraseña" style={{fontFamily:'Quicksand-Regular',fontSize:18
                }} onChangeText={(pass)=>this.setState({pass})} secureTextEntry={this.state.password} />
                <Icon name={this.state.icon} onPress={()=>this._changeIcon()}/>
                </Item>
                <Item picker>
                  <Label style={{marginLeft:8,fontFamily:'Quicksand-Regular',fontSize:18}}>Sexo</Label>
                  <Picker
                    mode="dropdown"
                    iosIcon={<Icon name="arrow-down" />}
                    style={{ width: undefined }}
                    placeholder="Seleccione"
                    placeholderStyle={{ color: "#bfc6ea" }}
                    placeholderIconColor="#007aff"
                    selectedValue={this.state.selected}
                    onValueChange={(itemValue, itemIndex) =>
                      this.setState({ selected: itemValue,
                                      sexo:itemValue})}
                    onChangeText={()=>this.setState({sexo:this.state.selected})}
                    
                  >
                    <Picker.Item label="Hombre" value="hombre" />
                    <Picker.Item label="Mujer" value="mujer" />
                    
                  </Picker>
                </Item>
                <Item>
                <Input placeholder="Edad (en años)" style={{fontFamily:'Quicksand-Regular',fontSize:18
                        }} keyboardType={'numeric'} onChangeText={(edad)=>this.setState({edad})}/>
                </Item>
                <Item>
                <Input placeholder="Ocupación (breve)" style={{fontFamily:'Quicksand-Regular',fontSize:18
                }} onChangeText={(ocupacion)=>this.setState({ocupacion})}/>
                </Item>
                <Item picker>
                  <Label style={{marginLeft:8,fontFamily:'Quicksand-Regular',fontSize:18}}>Tipo de amputación</Label>
                  <Picker
                    mode="dropdown"
                    iosIcon={<Icon name="arrow-down" />}
                    style={{ width: undefined }}
                    placeholder="Seleccione"
                    placeholderStyle={{ color: "#bfc6ea" }}
                    placeholderIconColor="#007aff"
                    selectedValue={this.state.selected2}
                    onValueChange={(itemValue, itemIndex) =>
                      this.setState({ selected2: itemValue,
                                      tipo_amp:itemValue})}
                    oonChangeText={()=>this.setState({tipo_amp:this.state.selected2})}
                  >
                    <Picker.Item label="En muslo" value="en muslo" />
                    <Picker.Item label="En pierna" value="en pierna" />
                    <Picker.Item label="En pie" value="en pie" />
                    <Picker.Item label="Ninguna" value="ninguna" />
                  </Picker>
                </Item>

              </Body>
            </CardItem>
            <CardItem footer bordered>
          
            
            </CardItem>
          </Card>
          </KeyboardAvoidingView>
          <Button block danger style={styles.boton} onPress={this.register}>
            <Text style={{fontFamily:'Quicksand-SemiBold', fontSize:18}}>Finalizar</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

const styles= StyleSheet.create({
  textCenter:{
    width:'100%',
    textAlign:'center',
    fontFamily:'Quicksand-SemiBold',
    fontSize:23,
    color: "#0A7FBA",
  },
  Content:{
    flex:1,
    justifyContent:'center',
    backgroundColor:'#FFF',
    alignItems:'center',
    
  },
  boton:{
    marginBottom:10,
    backgroundColor:'#2ca0c2'
    
  },

  body:{
    paddingVertical:30
  },
  fuente:{
    fontFamily:'Courgette-Regular',
    fontSize:35,
    color:'#FFF',
    width:'100%',
    textAlign:'center',
  },
  logo:{
    
    width:200,
    height:250,
    
    resizeMode:'contain'// trata de acuerdo a la imagen y al tamaño ponerla de la mejor manera
    
  },
  
  text: {
    fontSize: 30,
    alignSelf: 'center',
    color: 'red'
 }

})



export default Registro