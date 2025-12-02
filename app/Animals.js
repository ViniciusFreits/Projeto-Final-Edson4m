import { StyleSheet, Text, View, ScrollView, Image, Pressable, Animated, Platform } from 'react-native';
import { useRef } from 'react';
import leao from '../assets/leao.webp';
import coruja from '../assets/coruja.webp';
import tartaruga from '../assets/tartaruga.jpg';
import golfinho from '../assets/golfinho.jpg';
import lobo from '../assets/lobo.jpg';
import arara from '../assets/arara.webp';

const isWeb = Platform.OS === "web";

export default function Animals() {
  const animals = [
    {
      nome: "Leão",
      emoji: "🦁",
      img: leao,
      desc: "Grande felino da África, conhecido como 'Rei da Savana'. Vive em grupos chamados alcateias e possui um rugido que pode ser ouvido a até 8 km."
    },
    {
      nome: "Coruja",
      emoji: "🦉",
      img: coruja,
      desc: "Ave noturna com visão e audição extremamente aguçadas. Consegue girar a cabeça em até 270° e voa quase sem emitir som."
    },
    {
      nome: "Tartaruga",
      emoji: "🐢",
      img: tartaruga,
      desc: "Animal antigo que existe desde o tempo dos dinossauros. Algumas espécies podem viver mais de 150 anos."
    },
    {
      nome: "Golfinho",
      emoji: "🐬",
      img: golfinho,
      desc: "Mamífero marinho extremamente inteligente e sociável. Usa sons complexos para se comunicar e dorme com metade do cérebro de cada vez."
    },
    {
      nome: "Lobo",
      emoji: "🐺",
      img: lobo,
      desc: "Caçador habilidoso que vive em matilhas organizadas. Possui mais de 10 tipos de uivo, cada um com um significado diferente."
    },
    {
      nome: "Arara",
      emoji: "🦜",
      img: arara,
      desc: "Ave brasileira muito colorida e inteligente. Vive em bandos e pode chegar a 80 anos de idade."
    }
  ];

  return (
    <View style={[styles.container, isWeb && { paddingTop: 90, maxWidth: 900, alignSelf: "center" }]}>
      <Text style={styles.title}>🐾 Animais do Mundo</Text>
      <Text style={styles.subtitle}>Aprenda sobre espécies, hábitos e curiosidades</Text>

      <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>
        {animals.map((a, i) => (
          <AnimalCard animal={a} key={i} />
        ))}
      </ScrollView>
    </View>
  );
}

function AnimalCard({ animal }) {
  const scale = useRef(new Animated.Value(1)).current;

  const pressIn = () => {
    Animated.spring(scale, { toValue: 0.98, speed: 10, useNativeDriver: true }).start();
  };

  const pressOut = () => {
    Animated.spring(scale, { toValue: 1, friction: 4, useNativeDriver: true }).start();
  };

  return (
    <Pressable onPressIn={pressIn} onPressOut={pressOut}>
      <Animated.View style={[styles.card, isWeb && { maxWidth: 600, alignSelf: "center" }, { transform: [{ scale }] }]}>

        <Image
          source={typeof animal.img === 'string' ? { uri: animal.img } : animal.img}
          style={styles.image}
        />

        <View style={styles.cardHeader}>
          <Text style={styles.icon}>🍃</Text>
          <Text style={styles.animalName}>{animal.emoji} {animal.nome}</Text>
        </View>

        <Text style={styles.desc}>{animal.desc}</Text>

      </Animated.View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 55,
    paddingHorizontal: 20,
    backgroundColor: '#0f3d1f',
  },

  title: {
    fontSize: 32,
    fontWeight: '700',
    color: '#e8ffe8',
    textAlign: 'center',
    textShadowColor: '#0c240f',
    textShadowRadius: 7,
  },

  subtitle: {
    fontSize: 17,
    textAlign: 'center',
    color: '#c8f5d0',
    marginBottom: 20,
  },

  scroll: {
    width: '100%',
  },

  card: {
    backgroundColor: '#f3fff4',
    borderRadius: 18,
    padding: 18,
    marginBottom: 25,

    shadowColor: '#000',
    shadowOpacity: 0.18,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 3 },

    borderWidth: 1,
    borderColor: '#d6e8d8',
  },

  image: {
    width: '100%',
    height: 190,
    borderRadius: 14,
    marginBottom: 14,
  },

  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },

  icon: {
    fontSize: 22,
    marginRight: 8,
  },

  animalName: {
    fontSize: 23,
    fontWeight: '700',
    color: '#1d502d',
  },

  desc: {
    fontSize: 15,
    color: '#315c3a',
    lineHeight: 21,
  },
});
