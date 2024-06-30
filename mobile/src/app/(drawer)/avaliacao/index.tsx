import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface AvaliacaoProps {}

const Avaliacao = (props: AvaliacaoProps) => {
  return (
    <View style={styles.container}>
      <Text>Avaliacao</Text>
    </View>
  );
};

export default Avaliacao;

const styles = StyleSheet.create({
  container: {}
});
