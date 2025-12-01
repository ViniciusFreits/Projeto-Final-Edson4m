
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Platform,
  SafeAreaView,
} from "react-native";
import global from "../assets/global.jpg";
import estufa from "../assets/estufa.jpg";
import ar from "../assets/ar.jpg";
import tronco from "../assets/tronco.jpg";
import crise from "../assets/crise.jpg";
import energia from "../assets/energia.webp";
export default function Climate() {
  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView
        style={styles.scroll}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 30 }}
      >
        <Text style={styles.title}>🌍 Ações Climáticas</Text>
        <Text style={styles.subtitle}>
          Entenda o impacto climático no planeta e como podemos agir para reduzir
          os danos ambientais.
        </Text>

        {/* 🔥 EFEITO ESTUFA */}
        <View style={styles.card}>
          <Image
            source={estufa}
            style={styles.image}
          />
          <Text style={styles.cardTitle}>🔥 Efeito Estufa</Text>
          <Text style={styles.text}>
            O efeito estufa é um processo natural que mantém a Terra aquecida.
            Porém, o excesso de gases como CO₂ intensifica o calor e desequilibra
            o clima global.
            {"\n\n"}
            • 🌡️ Consequência: aquecimento global
            • 🌿 Causa principal: queima de combustíveis fósseis
            • 🚗 Solução: transporte sustentável e energias limpas
          </Text>
        </View>

        {/* 🌡️ AQUECIMENTO GLOBAL */}
        <View style={styles.card}>
          <Image
            source={global}
            style={styles.image}
          />
          <Text style={styles.cardTitle}>🌡️ Aquecimento Global</Text>
          <Text style={styles.text}>
            O aquecimento global é o aumento da temperatura média do planeta,
            causado pelo excesso de gases poluentes.
            {"\n\n"}
            • 🧊 Derretimento de geleiras
            • 🔥 Aumento de ondas de calor
            • 🌊 Elevação do nível do mar
            {"\n"}
            Solução: reduzir emissões e proteger áreas verdes.
          </Text>
        </View>

        {/* 💨 POLUIÇÃO DO AR */}
        <View style={styles.card}>
          <Image
            source={ar}
            style={styles.image}
          />
          <Text style={styles.cardTitle}>💨 Poluição do Ar</Text>
          <Text style={styles.text}>
            A poluição atmosférica vem de fábricas, carros, queimadas e
            processos químicos.
            {"\n\n"}
            • 🫁 Afeta a saúde humana
            • 🌫️ Reduz visibilidade e qualidade do ar
            • 🌱 Prejudica plantas e animais
            {"\n"}
            Solução: transporte público, energia limpa e reflorestamento.
          </Text>
        </View>

        {/* 🌳 DESMATAMENTO */}
        <View style={styles.card}>
          <Image
            source={tronco}
            style={styles.image}
          />
          <Text style={styles.cardTitle}>🌳 Desmatamento</Text>
          <Text style={styles.text}>
            A remoção de florestas prejudica o clima, diminui a água dos rios e
            reduz a vida animal.
            {"\n\n"}
            • 🐾 Extinção de espécies
            • 🚱 Solo seco e sem nutrientes
            • 🌬️ Menos oxigênio na atmosfera
            {"\n"}
            Solução: reflorestamento e proteção ambiental.
          </Text>
        </View>

        {/* 💧 CRISE HÍDRICA */}
        <View style={styles.card}>
          <Image
            source={crise}
            style={styles.image}
          />
          <Text style={styles.cardTitle}>💧 Crise Hídrica</Text>
          <Text style={styles.text}>
            A falta de água potável é causada por poluição, desmatamento e
            mudanças climáticas.
            {"\n\n"}
            • 🚰 Racionamento em cidades
            • 🏭 Poluição de rios
            • 🔥 Aumento de queimadas
            {"\n"}
            Solução: preservar nascentes e usar água de forma consciente.
          </Text>
        </View>

        {/* ⚡ ENERGIAS RENOVÁVEIS */}
        <View style={styles.card}>
          <Image
            source={energia}
            style={styles.image}
          />
          <Text style={styles.cardTitle}>⚡ Energias Renováveis</Text>
          <Text style={styles.text}>
            As energias renováveis reduzem impactos ambientais e emissões.
            {"\n\n"}
            • ☀️ Solar
            • 💨 Eólica
            • 🌊 Hidrelétrica
            {"\n"}
            Solução: incentivar uso de fontes limpas e sustentáveis.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#a7d7a9",
    paddingTop: 38,
  },

  scroll: {
    paddingHorizontal: 20,
  },

  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#0a3d21",
    textAlign: "center",
    marginBottom: 6,
  },

  subtitle: {
    fontSize: 17,
    color: "#1f5d35",
    textAlign: "center",
    marginBottom: 25,
    lineHeight: 22,
  },

  card: {
    backgroundColor: "#e8f5e9",
    borderRadius: 20,
    padding: 20,
    marginBottom: 25,
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOpacity: 0.15,
        shadowOffset: { width: 0, height: 3 },
        shadowRadius: 6,
      },
      android: {
        elevation: 6,
      },
    }),
  },

  image: {
    width: "100%",
    height: 190,
    borderRadius: 15,
    marginBottom: 12,
  },

  cardTitle: {
    fontSize: 23,
    fontWeight: "700",
    color: "#1b5e20",
    marginBottom: 10,
  },

  text: {
    fontSize: 16,
    color: "#244b2c",
    lineHeight: 22,
  },
});
