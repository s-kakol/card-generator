import { SafeAreaView, StyleSheet, View } from 'react-native';
import Text from './components/utility/Text';
import React from 'react';
import Theme from './config/themes';
import { Route, Routes } from 'react-router-native';
import AppBar from './components/AppBar';
import TileList from './components/TileList';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: Theme.colors.background,
  },
});

const ExampleElement = (props: { exampleText: string }): JSX.Element => (
  <View>
    <Text>{`Witaj ${props.exampleText}`}</Text>
  </View>
);

const Main = (): JSX.Element => (
  <SafeAreaView style={styles.container}>
    <AppBar />
    <Routes>
      <Route path="/" element={<ExampleElement exampleText="Ulubione" />} />
      <Route path="/spells" element={<TileList />} />
      <Route
        path="/items"
        element={<ExampleElement exampleText="Przedmioty" />}
      />
    </Routes>
  </SafeAreaView>
);
export default Main;
