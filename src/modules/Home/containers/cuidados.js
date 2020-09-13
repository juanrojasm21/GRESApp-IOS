import React, {Component} from 'react'; 
import { View } from "react-native";
import * as Font from 'expo-font';
import Constants from 'expo-constants'
import { Video } from 'expo-av';
import {StyleSheet, Image,Platform,StatusBar,WebView} from 'react-native'
import { Container, Header,Left,Right,Content,Card, CardItem, Text, Body, Button, Icon,Title} from 'native-base';

class Cuidados extends Component {

  constructor(props){
    super(props);
    this.state={
      isReady:false,
      fontLoaded:false,
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
            <Title style={styles.title}>Cuidados y vendajes del muñón</Title>
        </Body>
        <Right>
        <Button transparent>
            
        </Button>
        </Right>
        </Header>
        <Content padder>
        <StatusBar translucent={true} backgroundColor="#2ca0c2" />
        <View style={styles.MainContainer}>
        
        <Card > 
          
          <CardItem>
            <Image source={require('../../../../assets/care.jpg')} style={{ resizeMode: 'cover', height:200}}  />
          </CardItem>
          
        </Card>
          <CardItem bordered >
            <Text style={styles.textCenter}>En este apartado encontrará la información necesaria para el cuidado del muñón.</Text>
          </CardItem>
          <CardItem>
          <Text style={styles.textCenter}>1) Vendaje del muñón</Text>
          
          </CardItem>
          
          
        </View>
        <Video
            source={{ uri: 'https://caeptudea.com.co/gresapp/vendaje.mp4' }}
            rate={1.0}
            volume={1.0}
            isMuted={false}
            resizeMode="contain"
            useNativeControls={true}
            style={{ width: '100%', height: 300 }}
          />
        <Text style={styles.textCenter}>2) Cuidados del muñón</Text>
        <Video
            source={{ uri: 'https://caeptudea.com.co/gresapp/cuidados.mp4' }}
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
    fontSize:17,
    width:'100%',
    textAlign:'center',
    fontFamily:'Quicksand-Regular',
    color: "#0A7FBA"
  },

  title:{
    color:'#FFF',
    fontFamily:'Quicksand-SemiBold'
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
  Content:{
    backgroundColor:'#FFF',
  }
 

})


export default Cuidados