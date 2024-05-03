import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  //Pag Home:
  
  ImgLogo: {
   height: 302,
   width: 300,
   marginBottom: 40,
  },

  TextHome: {
   fontSize: 25,
   marginTop: 75,
  },

  BtnLoginHome: {
   alignSelf: 'center',
   marginTop: 25,
   alignItems: 'center',
   justifyContent: 'center',
   height: 30,
   width: 120,
   backgroundColor: '#755645',
   borderRadius: 25,
   borderBottomWidth: 1,
   borderColor: 'black',
   margin: 7
  },

  BtnCdsHome: {
    alignSelf: 'center',
    marginTop: 25,
    alignItems: 'center',
    justifyContent: 'center',
    height: 30,
    width: 120,
    borderRadius: 25,
    borderBottomWidth: 1,
    borderColor: 'black',
    margin: 7
   },

  BtnSaiba: {
   alignSelf: 'center',
   marginTop: 25,
   alignItems: 'center',
   justifyContent: 'center',
   height: 30,
   width: 255,
   backgroundColor: '#d4a57b',
   borderRadius: 25,
  },

  //Pag Login:

  Login: {
    fontSize: 15,
    marginBottom: 50,
  
  },

  BtnLogin: {
    alignSelf: 'center',
    marginTop: 25,
    alignItems: 'center',
    justifyContent: 'center',
    height: 30,
    width: 200,
    backgroundColor: '#d4a57b',
    borderRadius: 25,
    borderBottomWidth: 1,
    borderColor: 'black',
    margin: 7
  },

  Welcome: {
   fontSize: 25,
   right: 70 ,
   fontWeight: 'bold',
   marginBottom: 40,
  },

  TelaLogin:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 35,
  
  },

  InputName: {
   width: 320,
   height: 30,
   borderBottomWidth: 1,
   borderBottomColor: 'black',
   marginTop: 10,
  },

  //Pag Cadastro:

  ViewCadastro: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 60,
  },

  TituloCds: {
    fontSize: 25,
    right: 80 ,
    fontWeight: 'bold',
    marginBottom: 40,
  },

  BtnCds: {
    alignSelf: 'center',
    marginTop: 25,
    alignItems: 'center',
    justifyContent: 'center',
    height: 30,
    width: 200,
    backgroundColor: '#d4a57b',
    borderRadius: 25,
    borderBottomWidth: 1,
    borderColor: 'black',
    margin: 7
  },


});