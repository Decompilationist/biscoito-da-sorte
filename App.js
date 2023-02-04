import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';


function App() {
  
  

const [img, setImg] = useState(require('./src/biscoito.png'));
const [textoFrase, setTextoFrase] = useState('');

let frases = [

  'Mosquitos não costumam estourar na parede.',
  'Pare de copiar mano gabriels e vá codar.',
  'Controle os seus pensamentos gordinho, exclua a feijoada do sesi de sua mente.',
  'Seja menos vagabundo abê.',
  'Doce, Doce...',
  'Menino ou Menina?',
  'Após esbarrar em uma pessoa no metrô, não saia correndo atrás de seu amigo gordo.',
  'Tentar desviar de uma poça de lama, pulando em cima de uma poça de lama talvez não seja a melhor solução.'
];


function quebraBiscoito(){
  let numeroAleatorio = Math.floor(Math.random() * frases.length)

  // console.log(frases[numeroAleatorio]) --- Para ver no console as frases

  setTextoFrase(' " ' + frases[numeroAleatorio] + '" ');
  setImg(require('./src/biscoitoaberto.png'));
}

function reiniciar(){
  setImg(require('./src/biscoito.png'));
  setTextoFrase('');
}

  return (  
    <View style={styles.container}>
      
    <Image style={styles.img}
    source={img} />

    <Text style={styles.textoFrase}>{textoFrase}</Text>

    <TouchableOpacity style={styles.botao} onPress={quebraBiscoito}>
      <View style={styles.btnArea}>
        <Text style={styles.btnTexto}>Quebrar Biscoito</Text>
      </View>
    </TouchableOpacity>

    <TouchableOpacity style={[styles.botao, {marginTop: 15, borderColor: '#121212'}]} onPress={ reiniciar }>
      <View style={styles.btnArea}>
        <Text style={[styles.btnTexto, {color:'#121212'}]}>Reiniciar Biscoito</Text>
      </View>
    </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  img:{
    width: 230,
    height: 230,
  },
  textoFrase:{
    fontSize: 20,
    color: '#dd7b22',
    margin: 30,
    fontStyle: 'italic',
    textAlign: 'center'
  },
  botao:{
    width: 230,
    height: 50,
    borderColor: '#dd7b22',
    borderWidth: 2,
    borderRadius: 25
  },
  btnArea:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnTexto:{
    fontSize: 17,
    fontWeight: 'bold',
    color: '#dd7b22'
  }
})

export default App;