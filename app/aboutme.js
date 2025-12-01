import { useRef, useEffect } from 'react';
import { StyleSheet, Image, Pressable, Animated, ScrollView, Text, View } from 'react-native';
import foto from '../assets/foto.jpg';

export default function AboutMe() {
  const fadeAnim = useRef(new Animated.Value(0)).current; // fade-in
  const scaleAnim = useRef(new Animated.Value(0.9)).current; // zoom-in

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 800,
        useNativeDriver: true,
      }),
      Animated.spring(scaleAnim, {
        toValue: 1,
        friction: 5,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  return (
    <ScrollView style={styles.container}>
      <Animated.View
        style={[
          styles.profileContainer,
          { opacity: fadeAnim, transform: [{ scale: scaleAnim }] },
        ]}
      >
        <Image source={foto} style={styles.image} />

        <Text style={styles.name}>Olá, eu sou o Edson!!!</Text>
        <Text style={styles.role}>Desenvolvedor React Native & Agropecuária</Text>

        <Text style={styles.description}>
          Sou apaixonado por criar aplicativos móveis bonitos e funcionais. Tenho experiência em
          animações, interfaces interativas e design responsivo. Adoro aprender novas tecnologias
          e compartilhar conhecimento.
        </Text>

        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Vamos Conectar!</Text>
        </Pressable>
      </Animated.View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f3d1f',
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  profileContainer: {
    backgroundColor: '#f3fff4',
    borderRadius: 18,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.18,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 3 },
    borderWidth: 1,
    borderColor: '#d6e8d8',
  },
  image: {
    width: 140,
    height: 140,
    borderRadius: 70,
    marginBottom: 16,
  },
  name: {
    fontSize: 24,
    fontWeight: '700',
    color: '#1d502d',
    marginBottom: 4,
  },
  role: {
    fontSize: 16,
    fontWeight: '500',
    color: '#315c3a',
    marginBottom: 12,
  },
  description: {
    fontSize: 15,
    color: '#315c3a',
    textAlign: 'center',
    lineHeight: 22,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#1d502d',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 12,
  },
  buttonText: {
    color: '#f3fff4',
    fontWeight: '700',
    fontSize: 16,
  },
});
