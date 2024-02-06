import { Text, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router'

// BOTAO COM A COR BRANCA
export function BotaoBranco({ texto, link }) {
  return (
    <Link href={link} asChild>
      <TouchableOpacity style={{
        width: 175,
        height: 58,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        borderColor: '#1A998E',
        borderWidth: 3,
        margin: 10
      }}>
        
        {/* texto do botao */}
        <Text style={{
          color: '#1A998E',
          fontSize: 18,
          fontWeight: 'bold'
        }}>
          {texto}
        </Text>

      </TouchableOpacity>
    </Link>
  );
}

// BOTAO COM A COR AZUL
export function BotaoAzul({ texto, link }) {
  return (
    <Link href={link} asChild>
      <TouchableOpacity style={{
        width: 175,
        height: 58,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#1A998E',
        margin: 10
      }}>

        {/* texto do botao */}
        <Text style={{
          color: 'white',
          fontSize: 18,
          fontWeight: 'bold'
        }}>
          {texto}
        </Text>

      </TouchableOpacity>
    </Link>
  );
}