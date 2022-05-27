import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Linking} from 'react-native';
import Clipboard from '@react-native-clipboard/clipboard';
import Toast from 'react-native-simple-toast';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

const NoteItem = props => {
  const email = 'yourMajesty.myQueen@gmail.com';
  const subject = 'Her Majesty';
  const sig = 'yours loyalty';
  const handleClipboard = () => {
    Clipboard.setString(props.title);
    // ToastAndroid.show('Text is copied to Clipboard!');
    // ToastAndroid.SHORT;
    Toast.showWithGravity(
      'Text is copied to Clipboard!',
      Toast.SHORT,
      Toast.BOTTOM,
    );
    // console.log('Text is copied to Clipboard!');
  };

  return (
    <TouchableOpacity
      style={styles.touchable}
      activeOpacity={0.8}
      onPress={()=>handleClipboard()}>
      <MaterialIcon
        name="delete-outline"
        size={25}
        color="red"
        style={styles.icons}
        onPress={() => props.onDelete(props.id)}
      />
      <View style={styles.listItem}>
        <Text style={styles.noteText}>{props.title}</Text>
      </View>
      <MaterialIcon
        name="share"
        size={25}
        color="#1DA1F2"
        style={{marginLeft: 5}}
        onPress={() => {
          Linking.openURL(
            `mailto:${email}?subject=${subject}&body=${props.title}\n\n${sig}`,
          );
        }}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  touchable: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  listItem: {
    alignItems: 'center',
    padding: 10,
    marginVertical: 10,
    backgroundColor: 'rgba(153, 153, 153, 0.8)',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
    width: '80%',
  },
  icons: {
    marginRight: 10,
  },
  noteText: {
    fontSize: 16,
    color: 'white',
  },
});

export default NoteItem;
