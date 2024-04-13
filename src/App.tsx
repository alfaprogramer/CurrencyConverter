/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import type {PropsWithChildren} from 'react';
import { SafeAreaView, StatusBar, Text, View } from 'react-native';

//Constants
import { currencyByRupee } from './constants';
//components
import CurrencyButton from './components/CurrencyButton';



import Snackbar from 'react-native-snackbar';




function App(): React.JSX.Element {
    const [inputvalue, setinputvalue]= useState('')
    const [resultvalue, setresultvalue]= useState('')
    const [targetcurrency, settargetcurrency ]= useState('')

    const buttpnPressed = (targetvalue: Currency) => {
      if(!inputvalue){
        return Snackbar.show({
          text:"Enter a value to convert",
          backgroundColor:"#EA7773",
          textColor:"black"
        })
        
      }

      const inputAmount = parseFloat(inputvalue)
      if(!isNaN(inputAmount)){
        const convertedValue = inputAmount * targetvalue.value
        const result = `${targetvalue.symbol} ${convertedValue.toFixed(2) }`
        setresultvalue(result)
        settargetcurrency(targetvalue.name)
      }else{
        return Snackbar.show({
          text:"Enter a Number to convert",
          backgroundColor:"#F4BE2C",
          textColor:"black"
        })
      }
    }

  return (
    <SafeAreaView>
      <StatusBar />
      <View>
        <Text>1</Text>
      </View>
    </SafeAreaView>
    
  );
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#515151',
  },
  topContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  resultTxt: {
    fontSize: 32,
    color: '#000000',
    fontWeight: '800',
  },
  rupee: {
    marginRight: 8,

    fontSize: 22,
    color: '#000000',
    fontWeight: '800',
  },
  rupeesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputAmountField: {
    height: 40,
    width: 200,
    padding: 8,
    borderWidth: 1,
    borderRadius: 4,
    backgroundColor: '#FFFFFF',
  },
  bottomContainer: {
    flex: 3,
  },
  button: {
    flex: 1,

    margin: 12,
    height: 60,

    borderRadius: 12,
    backgroundColor: '#fff',
    elevation: 2,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#333',
    shadowOpacity: 0.1,
    shadowRadius: 1,
  },
  selected: {
    backgroundColor: '#ffeaa7',
  },
});


export default App;
