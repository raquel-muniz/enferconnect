import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router'
import Cabecalho from '../../components/Cabecalho';

export default function App() {
  return (
    <View style={styles.container}>

      {/* CABECALHO */}
      <Cabecalho text="Retorno da escala de morse" nextPage='escala_de_morse' />

      {/* CONTEUDO PRINCIAL */}
      <View style={styles.content}>

        <Text>de retorno de morse</Text>

        {/* ADICIONAR DPS OS FORMS... */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F0F0',
    alignItems: 'center',
    justifyContent: 'center',
  },

  content: {
    flex: 12
  }
});
