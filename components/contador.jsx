import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

const Contador = () => {
  const [contador, setContador] = useState(0);
  const [resultado, setResultado] = useState('');

  const incrementar = () => {
    setContador(contador + 1);
  }

  const verificarParImpar = () => {
    if (contador % 2 === 0) {
      setResultado('Par');
    } else {
      setResultado('Ímpar');
    }
  }

  return (
    <View>
      <Text>Contador: {contador}</Text>
      <Button title="Incrementar" onPress={incrementar} />
      <Button title="Verificar Par ou Ímpar" onPress={verificarParImpar} />
      {resultado && <Text>O número é {resultado}</Text>}
    </View>
  );
}

export default Contador;
