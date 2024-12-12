import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Appbar, TextInput, Button } from 'react-native-paper';

const AddNoteScreen = ({ navigation, route }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const { addNote } = route.params;

  const handleSave = () => {
    if (title && content) {
      const newNote = { id: Date.now().toString(), title, content };
      addNote(newNote);
      navigation.goBack();
    }
  };

  return (
    <View style={styles.container}>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title="Tambah Catatan" />
      </Appbar.Header>

      <TextInput
        label="Judul"
        value={title}
        onChangeText={setTitle}
        style={styles.input}
      />
      <TextInput
        label="Isi Catatan"
        value={content}
        onChangeText={setContent}
        multiline
        numberOfLines={4}
        style={styles.input}
      />
      <Button mode="contained" onPress={handleSave} style={styles.button}>
        Simpan
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  input: {
    marginBottom: 16,
  },
  button: {
    marginTop: 16,
  },
});

export default AddNoteScreen;
