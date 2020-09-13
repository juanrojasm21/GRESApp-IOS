import React, {Component} from 'react'; 
import { View } from "react-native";
import * as Font from 'expo-font';
import Constants from 'expo-constants'
import {StyleSheet, Image,Platform,StatusBar} from 'react-native'
import { Container, Header,Left,Right,Content,Card, CardItem, Text, Body, Button, Icon,Title} from 'native-base';
import { Video } from 'expo-av';
class Actividades extends Component {
  
  constructor(props){
    super(props);
    this.state={
      isReady:false,
      fontLoaded:false,
      /**selected: "key1",
      selected3: undefined,
      selected2: undefined**/
    };
    
  }
  
  componentWillMount(){
    this.loadFonts();
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
        <Card > 
          
          <CardItem>
            <Image source={require('../../../../assets/actividades1.jpg')} style={{ resizeMode: 'cover', height:200}}  />
          </CardItem>
          
        </Card>
          <CardItem>
          <Text style={styles.textCenter}>Es importante tener en cuenta que luego de la amputación puedes progresivamente retomar las actividades de la vida diaria.
                                            Es por eso que en este apartado se darán una serie de recomendaciones que están al alcance de todos para conseguir este objetivo.
                                            Sige paso a paso los consejos dados en el siguiente video.</Text>
          
          </CardItem>
          
          
        </View>
        <Video
            source={{ uri: 'https://caeptudea.com.co/gresapp/Recomendaciones.mp4' }}
            rate={1.0}
            volume={1.0}
            isMuted={false}
            resizeMode="contain"
            useNativeControls={true}
            style={{ width: '100%', height: 300 }}
          />
        </Content>
        
      </Container>
    );
  }
}

const styles= StyleSheet.create({
  textCenter:{
    width:'100%',
    textAlign:'center',
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