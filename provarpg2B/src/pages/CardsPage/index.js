import { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import CardRpg from '../../components/CardRpg';
import { SafeAreaView } from 'react-native';

export default function CardsPage() {

  const listaCards = []

  return (
    <View style={styles.container}>
      <CardRpg cards= {listaCards[0]}/>
      <CardRpg cards= {listaCards[1]}/>
      <CardRpg cards= {listaCards[2]}/>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});