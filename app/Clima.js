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

const isWeb = Platform.OS === "web";

export default function Climate() {
  return (
    <SafeAreaView
      style={[
        styles.safe,
        isWeb && {
          paddingTop: 90,
          maxWidth: 1400,
          width: "100%",
          alignSelf: "center",
          paddingHorizontal: 40,
        },
      ]}
    >
      <ScrollView
        style={[styles.scroll, isWeb && { width: "100%" }]}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 30 }}
      >
        <Text style={styles.title}>🌍 Ações Climáticas</Text>
        <Text style={styles.subtitle}>
          Entenda o impacto climático no planeta e como podemos agir para reduzir
          os danos ambientais.
        </Text>

        {/* 🔥 EFEITO ESTUFA */}
        <View style={[styles.card, isWeb && styles.cardWeb]}>
          <Image source={estufa} style={styles.image} />
          <Text style={styles.cardTitle}>🔥 Efeito Estufa</Text>
          <Text style={styles.text}>
            O efeito estufa é um processo natural que mantém a Terra aquecida.
            Porém, o excesso de gases como CO₂ intensifica o calor e desequilibra
            o clima global.
            {"\n\n"}
            • 🌡️ Consequência: aquecimento global{'\n'}
            • 🌿 Causa principal: combustíveis fósseis{'\n'}
            • 🚗 Solução: transporte sustentável e energias limpas
          </Text>
        </View>

        {/* 🌡️ AQUECIMENTO GLOBAL */}
        <View style={[styles.card, isWeb && styles.cardWeb]}>
          <Image source={global} style={styles.image} />
          <Text style={styles.cardTitle}>🌡️ Aquecimento Global</Text>
          <Text style={styles.text}>
            O aquecimento global é o aumento da temperatura média do planeta,
            causado pelo excesso de gases poluentes.
            {"\n\n"}
            • 🧊 Derretimento de geleiras{'\n'}
            • 🔥 Ondas de calor{'\n'}
            • 🌊 Elevação do nível do mar{'\n\n'}
            Solução: reduzir emissões e proteger áreas verdes.
          </Text>
        </View>

        {/* 💨 POLUIÇÃO DO AR */}
        <View style={[styles.card, isWeb && styles.cardWeb]}>
          <Image source={ar} style={styles.image} />
          <Text style={styles.cardTitle}>💨 Poluição do Ar</Text>
          <Text style={styles.text}>
            A poluição vem de fábricas, carros, queimadas e processos químicos.
            {"\n\n"}
            • 🫁 Afeta a saúde{'\n'}
            • 🌫️ Reduz visibilidade{'\n'}
            • 🌱 Prejudica plantas e animais{'\n\n'}
            Solução: energia limpa e reflorestamento.
          </Text>
        </View>

        {/* 🌳 DESMATAMENTO */}
        <View style={[styles.card, isWeb && styles.cardWeb]}>
          <Image source={tronco} style={styles.image} />
          <Text style={styles.cardTitle}>🌳 Desmatamento</Text>
          <Text style={styles.text}>
            A remoção de florestas prejudica o clima e reduz a biodiversidade.
            {"\n\n"}
            • 🐾 Extinção de espécies{'\n'}
            • 🚱 Solo seco{'\n'}
            • 🌬️ Menos oxigênio{'\n\n'}
            Solução: reflorestamento urgente.
          </Text>
        </View>

        {/* 💧 CRISE HÍDRICA */}
        <View style={[styles.card, isWeb && styles.cardWeb]}>
          <Image source={crise} style={styles.image} />
          <Text style={styles.cardTitle}>💧 Crise Hídrica</Text>
          <Text style={styles.text}>
            A falta de água potável ocorre por poluição, desmatamento e mudanças
            climáticas.
            {"\n\n"}
            • 🚰 Racionamento{'\n'}
            • 🏭 Poluição de rios{'\n'}
            • 🔥 Mais queimadas{'\n\n'}
            Solução: preservar nascentes.
          </Text>
        </View>

        {/* ⚡ ENERGIAS RENOVÁVEIS */}
        <View style={[styles.card, isWeb && styles.cardWeb]}>
          <Image source={energia} style={styles.image} />
          <Text style={styles.cardTitle}>⚡ Energias Renováveis</Text>
          <Text style={styles.text}>
            Energias limpas reduzem impactos ambientais.
            {"\n\n"}
            • ☀️ Solar{'\n'}
            • 💨 Eólica{'\n'}
            • 🌊 Hidrelétrica{'\n\n'}
            Solução: incentivar fontes sustentáveis.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#0f3d1f",
    paddingTop: 38,
  },

  scroll: {
    paddingHorizontal: 20,
  },

  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#e8ffe8",
    textAlign: "center",
    marginBottom: 6,
  },

  subtitle: {
    fontSize: 17,
    color: "#c8f5d0",
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

  // 🌐 Ajuste especial para Web
  cardWeb: {
    maxWidth: 800,
    alignSelf: "center",
    width: "100%",
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
