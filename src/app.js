import {createAppContainer, createSwitchNavigator} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import Login from './modules/Login/containers/login'
import Register from './modules/Login/containers/register'
import Inicio from './modules/Home/containers/inicio'
import Loading  from './modules/sections/containers/loading'


const LoginNavigator=createStackNavigator({
  //esta variable contendra la pantalla que declaré anteriormente
  Login:{
    screen:Login, // screen va a tener el nombre que le di a mi pantalla 
    navigationOptions: {
      header:null, // para que aparezca la pantalla en modo completo

    }

  },
  Register:{
    screen:Register,
    navigationOptions:{
      header:null
    }
  },


});

const HomeNavigator=createStackNavigator({

  Inicio:{
    screen:Inicio,
    navigationOptions:{
      
      header:null,
      

    }
    
  }
})


//creo el initialRouteName con el valor de loading para que sea esta pantalla quien escoga hacia donde ir, si no está logeado irá a Login, en caso contrario irá a inicio

const SwitchNavigator=createSwitchNavigator({

  UserLogin:LoginNavigator,
  Loading,
  Home: HomeNavigator
},

{
  initialRouteName:'Loading'

})
export default createAppContainer(SwitchNavigator)