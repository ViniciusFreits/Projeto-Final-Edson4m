import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Text, View, Platform } from "react-native";
import { SafeAreaView } from "react-native";
import foto from "../assets/foto.jpg";

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.title}>Sobre mim</Text>

        <View style={styles.main}>
          <View>
            <Image source={foto} style={styles.foto} />
          </View>

          <View>
            <Text style={styles.subtitle}>
              <Text style={{ fontWeight: "bold" }}>Nome: </Text> Edson Vinicius
            </Text>

            <Text style={styles.subtitle}>
              <Text style={{ fontWeight: "bold" }}>RM: </Text> 08382
            </Text>

            <Text style={styles.subtitle}>
              <Text style={{ fontWeight: "bold" }}>Endereco: </Text> Rua
              Raimundo Virgulino da Cruz
            </Text>
            <Text style={styles.subtitle}>
              <Text style={{ fontWeight: "bold" }}>Cidade: </Text> Presidente
              Epítacio
            </Text>
            <Text style={styles.subtitle}>
              <Text style={{ fontWeight: "bold" }}>Estado: </Text> São Paulo
            </Text>
          </View>

          <StatusBar style="auto" />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#b2e9f0ff",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  main: {
    flexDirection: Platform.OS === "web" ? "row" : "column",
    gap: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: Platform.OS === "web" ? 48 : 36,
    marginBottom: 20,
    textTransform: "uppercase",
    fontWeight: Platform.OS === "web" ? "bold" : null,
  },
  subtitle: {
    fontSize: 18,
    color: "#888",
  },
  foto: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 20,
  },
});
