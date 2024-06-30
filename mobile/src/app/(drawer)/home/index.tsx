import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface homeProps {}

const home = (props: homeProps) => {
  return (
    <View style={styles.container}>
      <Text>home</Text>
    </View>
  );
};

export default home;

const styles = StyleSheet.create({
  container: {}
});
