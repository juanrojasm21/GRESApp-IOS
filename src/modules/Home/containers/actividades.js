import React, {Component} from 'react'; 
import { View } from "react-native";
import * as Font from 'expo-font';
import Constants from 'expo-constants'
import {WebView} from 'react-native-webview'
import {StyleSheet, Image,Platform,StatusBar} from 'react-native'
import { Container, Header,Left,Right,Content,Card, CardItem, Text, Body, Button, Icon,Title} from 'native-base';
import { Video } from 'expo-av';
class Actividades extends Component {
  
  constructor(props){
    super(props);
    this.state={
      isReady:false,//estado para saber si se cargó la fuente
      fontLoaded:false, //define que la fuente no se ha cargado
      /**selected: "key1",
      selected3: undefined,
      selected2: undefined**/
    };
    
  }
  
  UNSAFE_componentWillMount(){
    this.loadFonts();
    //carga las fuentes
  }
  

  async loadFonts() {
    //función para cargar las fuentes
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
    return (
      
      <Container style={styles.Content}>
        
        <Header noShadow style={styles.header}>
        <Left>
        <Button transparent>
          <Icon name="menu" onPress={()=>this.props.navigation.openDrawer()}/>
        </Button>
        </Left>
        <Body>
            <Title style={styles.title}>Retorno a las actividades diarias</Title>
        </Body>
        <Right>
        <Button transparent>
            
        </Button>
        </Right>
        </Header>
        <Content padder>
        <View style={styles.MainContainer}>
        <StatusBar translucent={true} backgroundColor="#2ca0c2" />
        <Image source={require('../../../../assets/actividades1.jpg')} style={{ resizeMode: 'contain', height:200}}  />
        <Card > 
          
          <CardItem>
          <Text style={styles.textCenter}>Es importante tener en cuenta que luego de la amputación puedes progresivamente retomar las actividades de la vida diaria.
                                            Es por eso que en este apartado se darán una serie de recomendaciones que están al alcance de todos para conseguir este objetivo.
                                            Sige paso a paso los consejos dados en el siguiente video.</Text>
            
          </CardItem>
          
        </Card>
          
        </View>
        <View style={{ marginBottom:10, marginTop:10,overflow: 'hidden'}}>
                <WebView
                            style={ {opacity: 0.99} }
                            startInLoadingState={true} 
                            javaScriptEnabled={true}
                            domStorageEnabled={true}
                            useWebKit={true}
                            source={{uri:"https://www.youtube.com/embed/pfUVVmTr2Y0"}}
                            
                            style={{height: 300}}
                    />
                  
              </View>
        </Content>
        
      </Container>
    );
  }
}

const styles= StyleSheet.create({
  textCenter:{
    width:'100%',
    textAlign:'justify',
    fontFamily:'Quicksand-Regular',
    color: "#0A7FBA"
  },
  Content:{
    justifyContent:'center',
    backgroundColor:'#FFF',
  },

  header:{
    marginTop:Constants.statusBarHeight,
    backgroundColor:'#2ca0c2'
  },
  MainContainer:
    {
      paddingTop: (Platform.OS === 'ios') ? 0 : 0,
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor:'#FFF'
    },

  title:{
    color:'#FFF',
    fontFamily:'Quicksand-SemiBold'
  },
 

})


export default Actividades