import React from "react";
import { StatusBar as RNStatusBar } from "react-native";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Platform,
} from "react-native";
import { StatusBar } from "expo-status-bar";

export default function App() {
  return (
    <SafeAreaView style={styles.safe}>
      <RNStatusBar barStyle="dark-content" backgroundColor="#e8f0ec" />

      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.hero}>
          <Text style={styles.title}>Explore o Meio Ambiente</Text>

          <Text style={styles.subtitle}>
            Descubra fauna, biomas e práticas sustentáveis de um jeito simples
            e visual.
          </Text>
        </View>

        <View style={styles.card}>
          <View style={styles.item}>
            <Text style={styles.icon}>🐾</Text>
            <Text style={styles.itemText}>Fauna — espécies e curiosidades</Text>
          </View>

          <View style={styles.item}>
            <Text style={styles.icon}>🌳</Text>
            <Text style={styles.itemText}>Biomas — clima e vegetação</Text>
          </View>

          <View style={styles.item}>
            <Text style={styles.icon}>🌱</Text>
            <Text style={styles.itemText}>
              Sustentabilidade — ações do dia a dia
            </Text>
          </View>
        </View>

        <StatusBar style="dark" />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#e8f0ec",
    ...Platform.select({
      web: {
        paddingTop: 25, // 🔥 evita o bug do scroll no topo
      },
    }),
  },

  container: {
    flexGrow: 1,
    paddingHorizontal: 28,
    paddingVertical: Platform.select({
      web: 50, // 🔥 web fica mais espaçado
      default: 36,
    }),
    justifyContent: "center",
    maxWidth: Platform.select({
      web: 900, // 🔥 limita a largura para ficar bonito igual site
      default: "100%",
    }),
    width: "100%",
    alignSelf: "center",
  },

  hero: {
    marginBottom: 28,
  },

  title: {
    fontSize: Platform.select({
      web: 40, // 🔥 maior no web pra parecer site
      default: 32,
    }),
    fontWeight: "800",
    color: "#1b4332",
    marginBottom: 10,
  },

  subtitle: {
    fontSize: 16,
    color: "#3a5a40",
    lineHeight: 22,
    maxWidth: Platform.select({
      web: 700, // 🔥 largura fixa pro texto ficar bonito no PC
      default: "100%",
    }),
  },

  card: {
    backgroundColor: "#ffffff",
    paddingVertical: 22,
    paddingHorizontal: 20,
    borderRadius: 22,

    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOpacity: 0.12,
        shadowOffset: { width: 0, height: 6 },
        shadowRadius: 16,
      },
      android: {
        elevation: 6,
      },
      web: {
        boxShadow: "0px 4px 14px rgba(0,0,0,0.15)", // 🔥 sombra perfeita web
        maxWidth: 600,
        width: "100%",
        alignSelf: "center",
      },
    }),
  },

  item: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 18,
  },

  icon: {
    fontSize: 26,
    marginRight: 14,
  },

  itemText: {
    fontSize: 17,
    color: "#1d3a2a",
    fontWeight: "600",
    flexShrink: 1,
  },
});
