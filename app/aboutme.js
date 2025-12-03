import { useRef, useEffect } from 'react';
import { StyleSheet, Platform, Animated } from 'react-native';
import foto from '../assets/foto.jpg';

const isWeb = Platform.OS === "web";

export default function AboutMe() {
  const scrollY = useRef(new Animated.Value(0)).current;

  const imgAnim = useRef(new Animated.Value(0)).current;
  const nameAnim = useRef(new Animated.Value(0)).current;
  const roleAnim = useRef(new Animated.Value(0)).current;
  const descAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.stagger(200, [
      Animated.timing(imgAnim, {
        toValue: 1,
        duration: 600,
        useNativeDriver: true,
      }),
      Animated.timing(nameAnim, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.timing(roleAnim, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.timing(descAnim, {
        toValue: 1,
        duration: 700,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  return (
    <Animated.ScrollView
      style={styles.container}
      contentContainerStyle={{ paddingBottom: 100 }}
      onScroll={Animated.event(
        [{ nativeEvent: { contentOffset: { y: scrollY } } }],
        { useNativeDriver: true }
      )}
      scrollEventThrottle={16}
      decelerationRate="fast"
      bounces={true}
      overScrollMode="always"
    >
      <Animated.View style={styles.profileContainer}>
        <Animated.Image
          source={foto}
          style={[
            styles.image,
            {
              opacity: imgAnim,
              transform: [
                {
                  scale: imgAnim.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0.8, 1],
                  }),
                },
              ],
            },
          ]}
        />

        <Animated.Text
          style={[
            styles.name,
            {
              opacity: nameAnim,
              transform: [
                {
                  translateY: nameAnim.interpolate({
                    inputRange: [0, 1],
                    outputRange: [20, 0],
                  }),
                },
              ],
            },
          ]}
        >
          Olá, eu sou o Edson!!
        </Animated.Text>

        <Animated.Text
          style={[
            styles.role,
            {
              opacity: roleAnim,
              transform: [
                {
                  translateY: roleAnim.interpolate({
                    inputRange: [0, 1],
                    outputRange: [20, 0],
                  }),
                },
              ],
            },
          ]}
        >
          Desenvolvedor & Agropecuária
        </Animated.Text>

        <Animated.Text
          style={[
            styles.description,
            {
              opacity: descAnim,
              transform: [
                {
                  translateY: descAnim.interpolate({
                    inputRange: [0, 1],
                    outputRange: [20, 0],
                  }),
                },
              ],
            },
          ]}
        >
          Tenho 17 anos e sou apaixonado por tecnologia, especialmente
          desenvolvimento mobile com React Native. Gosto de criar interfaces
          modernas, animações fluidas e soluções que realmente ajudam as
          pessoas. Também tenho uma conexão forte com o agro, onde cresci e
          aprendi a importância do trabalho duro, disciplina e responsabilidade.

          Sou curioso, penso muito sobre a vida e sempre busco evoluir — como
          pessoa e como desenvolvedor. Estou construindo meu futuro com foco,
          calma e consistência.
        </Animated.Text>
      </Animated.View>
    </Animated.ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#0f3d1f",
    minHeight: isWeb ? "100vh" : "100%",
  },
  profileContainer: {
    backgroundColor: "#f3fff4",
    borderRadius: 18,
    padding: 20,
    marginTop: isWeb ? 80 : 60,
    marginHorizontal: 20,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#d6e8d8",
  },
  image: {
    width: isWeb ? 180 : 140,
    height: isWeb ? 180 : 140,
    borderRadius: isWeb ? 90 : 70,
    marginBottom: 16,
  },
  name: {
    fontSize: isWeb ? 28 : 24,
    fontWeight: "700",
    color: "#1d502d",
    marginBottom: 4,
  },
  role: {
    fontSize: isWeb ? 20 : 16,
    fontWeight: "500",
    color: "#315c3a",
    marginBottom: 12,
  },
  description: {
    fontSize: isWeb ? 17 : 15,
    color: "#315c3a",
    textAlign: "center",
    lineHeight: isWeb ? 26 : 22,
    marginBottom: 20,
    maxWidth: isWeb ? 600 : "100%",
  },
});
