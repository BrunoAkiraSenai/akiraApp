// Importa o componente de status da barra superior
import { StatusBar } from "expo-status-bar";

// Importa os componentes visuais do React Native
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  ImageBackground,
  Button,
  TouchableOpacity,
} from "react-native";

// Importa ícones das bibliotecas de ícones
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Entypo from "@expo/vector-icons/Entypo";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

// Declara o componente principal do aplicativo
export default function App() {
  // Função executada ao digitar algo no campo de texto
  changeText = () => {
    console.log("Foi digitado algo no TEXT INPUT");
  };

  return (
    // Define uma imagem de fundo ocupando toda a tela
    <ImageBackground
      style={styles.container}
      source={require("./src/assents/imagem/2.jpg")}
    >
      {/* Exibe o ícone de perfil */}
      <FontAwesome6
        name="user-circle"
        size={125}
        color="white"
        style={styles.icon}
      />

      {/* Exibe o nome do aplicativo */}
      <View>
        <Text style={styles.text}>𝔸𝕜𝕚𝕣𝕒𝔸𝕡𝕡</Text>
      </View>

      {/* Campo de entrada para o nome de usuário */}
      <TextInput
        style={styles.input}
        placeholder="Username"
        placeholderTextColor="white"
        autoCapitalize="characters"
        multline={true}
      />

      {/* Campo de entrada para a senha */}
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
        placeholderTextColor="white"
        autoCapitalize="characters"
        multline={true}
      />

      {/* Botão de login com alerta */}
      <TouchableOpacity style={styles.btn} onPress={() => alert("Login")}>
        <Text>Sing in</Text>
      </TouchableOpacity>

      {/* Conjunto de ícones de redes sociais */}
      <View style={styles.icons}>
        <AntDesign name="instagram" size={24} color="white" />
        <FontAwesome name="whatsapp" size={24} color="white" />
        <Entypo name="facebook" size={24} color="white" />
        <FontAwesome6 name="x-twitter" size={24} color="white" />
      </View>
    </ImageBackground>
  );
}

// Define os estilos dos componentes
const styles = StyleSheet.create({
  container: {
    flex: 1, // Ocupa toda a tela
    alignItems: "center", // Alinha horizontalmente ao centro
    justifyContent: "center", // Alinha verticalmente ao centro
  },
  text: {
    color: "#365c4d", // Cor do texto
    fontSize: 35, // Tamanho da fonte
    top: -250, // Posição em relação ao topo
  },
  icon: {
    margin: 50, // Espaçamento externo
  },

  input: {
    textAlign: "center", // Texto centralizado
    backgroundColor: "grey", // Cor de fundo
    borderRadius: 20, // Bordas arredondadas
    color: "black", // Cor do texto
    width: 300, // Largura do campo
    padding: 10, // Espaçamento interno
    borderBottomWidth: 1, // Borda inferior
    margin: 10, // Espaçamento externo
  },

  btn: {
    width: 300, // Largura do botão
    padding: 10, // Espaçamento interno
    backgroundColor: "white", // Cor de fundo
    color: "white", // Cor do texto
    alignItems: "center", // Alinha conteúdo ao centro
    marginTop: 40, // Margem superior
    borderRadius: 20, // Bordas arredondadas
    borderWidt: 1, // Largura da borda
    borderColor: "#79746e", // Cor da borda
  },
  icons: {
    flexDirection: "row", // Disposição em linha
    top: 20, // Posição em relação ao topo
    gap: 10, // Espaço entre os ícones
  },
});
