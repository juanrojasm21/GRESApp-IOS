import React, { Component } from 'react';
import {StyleSheet, View, ActivityIndicator, Platform,StatusBar,SafeAreaView} from 'react-native';
import * as Font from 'expo-font';
import Constants from 'expo-constants'
import { Container, Accordion,Header,Left,Right,Content, Text, Card, CardItem, Body, Button, Icon,Title} from 'native-base';

class Faqs extends Component {
  _isMounted = false;//esta variable se usará para evitar el warning del componentDidMount que aparecía cuando se accedía a esta pantalla y se salia luego de la app
  _renderHeader(item, expanded) {
    return (
      <View style={{
        flexDirection: "row",
        padding: 20,
        paddingRight: 1,
        justifyContent: "flex-start",
        alignItems: "center" ,
        backgroundColor: "#FFF" }}>
        
        {expanded
          ? <Icon style={{ fontSize: 18 }} name="remove-circle" />
          : <Icon style={{ fontSize: 18 }} name="add-circle" />}


      <Text style={{ marginRight:20, fontFamily:"Quicksand-SemiBold", color:'#2ca0c2' }}>

          {"  "}{item.pregunta}{" "}
        
        </Text>
        
      </View>
    );
  }
  _renderContent(item) {
    return (
      <Text
        style={{
          backgroundColor: "#FAFAFA",
          padding: 10,
          fontFamily:"Quicksand-Regular",
          fontSize:17,
          justifyContent: "flex-start",
          height:'100%'
        }}
      >
        {item.respuesta}
      </Text>
    );
  }
  constructor(props)
  {

    super(props);
    this.state = { 
    isLoading: true,
    isReady:false,
    fontLoaded:false,
  }
  }

  componentDidMount() {
    this._isMounted = true;
    this.getData()

     }


  getData(){
    //obtiene constantemente cualquier pregunta que se agrege a la base de datos en la tabla de preguntas
    setTimeout(async()=>{
      //el setTimeOut() es una función recurrente que se ejecuta cada determinado tiempo y actualiza las preguntas casi en tiempo real
      this.getData()
      return fetch('https://caeptudea.com.co/gresapp/faqs.php')
      .then((response) => response.json())
      .then((responseJson) => {
        if(this._isMounted){
          this.setState({
            isLoading: false,
            dataSource: responseJson
          }, function() {
          });
        }
        
      })
      .catch((error) => {
        console.error(error);
      });
      },1000
    )
  }
FlatListItemSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "100%",
          backgroundColor: "#607D8B",
        }}
      />
    );
  }

  UNSAFE_componentWillMount(){
    this.loadFonts();
  }
  componentWillUnmount() {
    this._isMounted = false;
  }
  

  async loadFonts() {
    await Font.loadAsync({
    
      'Quicksand-SemiBold': require('../../../../assets/fonts/Quicksand-SemiBold.ttf'),
      'Quicksand-Regular': require('../../../../assets/fonts/Quicksand-Regular.ttf'),
      'Roboto': require('../../../../node_modules/native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('../../../../node_modules/native-base/Fonts/Roboto_medium.ttf')
      
    })
    
    this.setState({ isReady: true })
  }


  render() {
    if (!this.state.isReady) {
      return (
        <View></View>
      );
    }
    if (this.state.isLoading) {
      return (
        <View style={{flex: 1, paddingTop: 20}}>
          <ActivityIndicator />
        </View>
      );
    }

    return (
      <Container style={styles.Content}>
        
        <Header noShadow style={styles.header}>
          <Left>
          <Button transparent>
            <Icon name="menu" onPress={()=>this.props.navigation.openDrawer()}/>
          </Button>
          </Left>
          <Body>
              <Title style={styles.title}>Faqs</Title>
          </Body>
          <Right>
          <Button transparent>
              
          </Button>
          </Right>
        </Header>
        
        <StatusBar translucent={true} backgroundColor="#2ca0c2" />
        <SafeAreaView style={{flex: 1}}>
        <Card>
          <CardItem bordered>
            <Text style={styles.textCenter}>A continuación encontrará las preguntas más frecuentes, estas son respondidas por expertos en el área de rehabilitación y constantemente actualizadas con el fin de tener la mejor información a la mano</Text>
          </CardItem>
        </Card> 
          
          <Accordion
              dataArray={this.state.dataSource}
              animation={true}
              expanded={true}
              renderHeader={this._renderHeader}
              renderContent={this._renderContent}
            />
          
        
          
        </SafeAreaView>

      </Container>


            
    );
  }
}

const styles = StyleSheet.create({

  textCenter:{
    width:'100%',
    textAlign:'justify',
    color: "#0A7FBA",
    fontFamily:"Quicksand-Regular",
    fontSize:17
  },
  Content:{
    flex:1,
    justifyContent:'center',
    backgroundColor:'#FFF',
  },
  MainContainer :{

  justifyContent: 'center',
  flex:1,
  paddingTop: (Platform.OS === 'ios') ? 0 : 0,
  padding: 5,
  
  },
  title:{
    color:'#FFF',
    fontFamily:'Quicksand-SemiBold'
  },

  header:{
    marginTop:Constants.statusBarHeight,
    backgroundColor:'#2ca0c2'
  },

  FlatListItemStyle: {
    padding: 10,
    fontSize: 15
  },

});

export default Faqs