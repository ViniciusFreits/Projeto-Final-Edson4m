import { StyleSheet, Text, View, ScrollView, Image, Pressable, Animated, Platform } from 'react-native';
import { useRef } from 'react';
import amazonia from '../assets/amazonia.jpg';
import cerrado from '../assets/cerrado.jpg';
import mataatlantica from '../assets/mata_atlantica.jpg';
import caatinga from '../assets/caatinga.jpg';
import pampa from '../assets/pampa.jpg';
import pantanal from '../assets/pantanal.webp';

const isWeb = Platform.OS === "web";

export default function Biomas() {
  const biomas = [
    {
      nome: "Amazônia",
      img: amazonia,
      desc: "Maior floresta tropical do mundo, com clima quente e úmido e altíssima biodiversidade."
    },
    {
      nome: "Cerrado",
      img: cerrado,
      desc: "Segundo maior bioma do Brasil. Árvores retorcidas, clima seco e fauna resistente."
    },
    {
      nome: "Mata Atlântica",
      img: mataatlantica,
      desc: "Bioma litorâneo úmido, extremamente rico em espécies, porém muito ameaçado."
    },
    {
      nome: "Caatinga",
      img: caatinga,
      desc: "Bioma exclusivo do Brasil, clima semiárido, vegetação adaptada à seca extrema."
    },
    {
      nome: "Pampa",
      img: pampa,
      desc: "Campos sulistas amplos, vegetação baixa, clima frio e fauna típica do sul."
    },
    {
      nome: "Pantanal",
      img: pantanal,
      desc: "Maior área alagável do planeta. Riquíssimo em aves, peixes e mamíferos."
    }
  ];

  return (
    <View style={[styles.container, isWeb && {
      paddingTop: 90,
      maxWidth: 1400,
      width: "100%",
      alignSelf: "center",
      paddingHorizontal: 40
    }]}>
      <Text style={styles.title}>🌿 Biomas do Brasil</Text>
      <Text style={styles.subtitle}>Explore a natureza de forma realista</Text>

      <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>
        {biomas.map((b, i) => (
          <BiomaCard bioma={b} key={i} />
        ))}
      </ScrollView>
    </View>
  );
}

function BiomaCard({ bioma }) {
  const scale = useRef(new Animated.Value(1)).current;

  const pressIn = () => {
    Animated.spring(scale, { toValue: 0.98, speed: 10, useNativeDriver: true }).start();
  };

  const pressOut = () => {
    Animated.spring(scale, { toValue: 1, friction: 4, useNativeDriver: true }).start();
  };

  return (
    <Pressable onPressIn={pressIn} onPressOut={pressOut}>
      <Animated.View style={[
        styles.card,
        isWeb && { maxWidth: 800, alignSelf: "center", width: "100%" },
        { transform: [{ scale }] }
      ]}>

        <Image
          source={typeof bioma.img === 'string' ? { uri: bioma.img } : bioma.img}
          style={styles.image}
        />

        <View style={styles.cardHeader}>
          <Text style={styles.icon}>🍃</Text>
          <Text style={styles.biomaName}>{bioma.nome}</Text>
        </View>

        <Text style={styles.desc}>{bioma.desc}</Text>
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
    borderWidth: 1,
    borderColor: '#d6e8d8',

    shadowColor: '#000',
    shadowOpacity: 0.18,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 3 },
  },

  image: {
    width: '100%',
    height: 180,
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

  biomaName: {
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
