import React, { useEffect, useRef } from "react";
import { StatusBar as RNStatusBar } from "react-native";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Platform,
  Animated,
} from "react-native";
import { StatusBar } from "expo-status-bar";

export default function App() {
  // ANIMAÇÕES
  const titleAnim = useRef(new Animated.Value(40)).current;  // Posição inicial (fora da tela)
  const subtitleAnim = useRef(new Animated.Value(40)).current;
  const cardAnim = useRef(new Animated.Value(60)).current;

  // Opacidade das animações
  const titleOpacity = useRef(new Animated.Value(0)).current;  // Inicialmente invisível
  const subtitleOpacity = useRef(new Animated.Value(0)).current;
  const item1Opacity = useRef(new Animated.Value(0)).current;
  const item2Opacity = useRef(new Animated.Value(0)).current;
  const item3Opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Timeline das animações
    Animated.stagger(120, [
      // Título com animação de posição e opacidade
      Animated.timing(titleAnim, {
        toValue: 0,
        duration: 600,
        useNativeDriver: true,
      }),
      Animated.timing(titleOpacity, {
        toValue: 1,
        duration: 600,
        useNativeDriver: true,
      }),

      // Subtítulo com animação de posição e opacidade
      Animated.timing(subtitleAnim, {
        toValue: 0,
        duration: 600,
        useNativeDriver: true,
      }),
      Animated.timing(subtitleOpacity, {
        toValue: 1,
        duration: 600,
        useNativeDriver: true,
      }),

      // Card principal (aparece de baixo para cima)
      Animated.timing(cardAnim, {
        toValue: 0,
        duration: 700,
        useNativeDriver: true,
      }),

      // Animação dos itens com opacidade (depois que o card aparece)
      Animated.timing(item1Opacity, {
        toValue: 1,
        duration: 600,
        useNativeDriver: true,
      }),
      Animated.timing(item2Opacity, {
        toValue: 1,
        duration: 600,
        useNativeDriver: true,
      }),
      Animated.timing(item3Opacity, {
        toValue: 1,
        duration: 600,
        useNativeDriver: true,
      }),

    ]).start();
  }, []);

  return (
    <SafeAreaView style={styles.safe}>
      <RNStatusBar barStyle="dark-content" backgroundColor="#e8f0ec" />

      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      >
        {/* TÍTULO ANIMADO */}
        <Animated.View style={{ transform: [{ translateY: titleAnim }], opacity: titleOpacity }}>
          <Text style={styles.title}>Explore o Meio Ambiente</Text>
        </Animated.View>

        {/* SUBTÍTULO ANIMADO */}
        <Animated.View style={{ transform: [{ translateY: subtitleAnim }], opacity: subtitleOpacity }}>
          <Text style={styles.subtitle}>
            Descubra fauna, biomas e práticas sustentáveis de um jeito simples e visual.
          </Text>
        </Animated.View>

        {/* CARD PRINCIPAL ANIMADO */}
        <Animated.View style={[styles.card, { transform: [{ translateY: cardAnim }] }]}>
          
          {/* ITEM 1 */}
          <Animated.View style={[styles.item, { opacity: item1Opacity, transform: [{ translateY: item1Opacity }] }]}>
            <Text style={styles.icon}>🐾</Text>
            <Text style={styles.itemText}>Fauna — espécies e curiosidades</Text>
          </Animated.View>

          {/* ITEM 2 */}
          <Animated.View style={[styles.item, { opacity: item2Opacity, transform: [{ translateY: item2Opacity }] }]}>
            <Text style={styles.icon}>🌳</Text>
            <Text style={styles.itemText}>Biomas — clima e vegetação</Text>
          </Animated.View>

          {/* ITEM 3 */}
          <Animated.View style={[styles.item, styles.lastItem, { opacity: item3Opacity, transform: [{ translateY: item3Opacity }] }]}>
            <Text style={styles.icon}>🌱</Text>
            <Text style={styles.itemText}>Sustentabilidade — ações do dia a dia</Text>
          </Animated.View>

        </Animated.View>

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
      web: { paddingTop: 25 },
    }),
  },

  container: {
    flexGrow: 1,
    paddingHorizontal: 28,
    paddingVertical: Platform.select({
      web: 60,
      default: 40,
    }),
    justifyContent: "center",
    maxWidth: Platform.select({
      web: 900,
      default: "100%",
    }),
    width: "100%",
    alignSelf: "center",
  },

  title: {
    fontSize: Platform.select({ web: 44, default: 34 }),
    fontWeight: "900",
    color: "#1d3a2a",
    marginBottom: 12,
    textAlign: "center",
  },

  subtitle: {
    fontSize: Platform.select({ web: 18, default: 17 }),
    color: "#3a5a40",
    lineHeight: 26,
    maxWidth: Platform.select({ web: 700, default: "100%" }),
    opacity: 0.9,
    marginBottom: 32,
    textAlign: "center",
    alignSelf: "center",
  },

  card: {
    backgroundColor: "#ffffff",
    paddingVertical: 24,
    paddingHorizontal: 24,
    borderRadius: 28,
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 8 },
        shadowRadius: 20,
      },
      android: {
        elevation: 10,
      },
      web: {
        boxShadow: "0px 10px 25px rgba(0,0,0,0.1)",
        maxWidth: 600,
        width: "100%",
        alignSelf: "center",
      },
    }),
  },

  item: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },

  lastItem: {
    borderBottomWidth: 0,
  },

  icon: {
    fontSize: 30,
    marginRight: 16,
  },

  itemText: {
    fontSize: 18,
    color: "#1d3a2a",
    fontWeight: "700",
    flexShrink: 1,
  },
});
