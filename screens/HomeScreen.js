import React, { useState } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { Appbar, FAB, Card, Title, Paragraph } from 'react-native-paper';

const HomeScreen = ({ navigation }) => {
  const [notes, setNotes] = useState([
    { id: '1', title: 'Catatan 1', content: 'Ini adalah catatan pertama.' },
    { id: '2', title: 'Catatan 2', content: 'Ini adalah catatan kedua.' },
  ]);

  return (
    <View style={styles.container}>
      <Appbar.Header>
        <Appbar.Content title="Catatan Harian" />
      </Appbar.Header>

      <FlatList
        data={notes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Card style={styles.card}>
            <Card.Content>
              <Title>{item.title}</Title>
              <Paragraph>{item.content}</Paragraph>
            </Card.Content>
          </Card>
        )}
      />

      <FAB
        style={styles.fab}
        icon="plus"
        onPress={() => navigation.navigate('AddNote', { addNote: (note) => setNotes([...notes, note]) })}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6f6f6',
  },
  card: {
    margin: 10,
  },
  fab: {
    position: 'absolute',
    right: 16,
    bottom: 16,
  },
});

export default HomeScreen;
