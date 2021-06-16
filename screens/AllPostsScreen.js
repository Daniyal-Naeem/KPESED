import React, {createRef, useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  KeyboardAvoidingView,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  FlatList
} from 'react-native';
import {Surface, Searchbar, Button, List} from 'react-native-paper';
import COLORS from '../consts/colors';
import ItemList from '../consts/ItemList';
import ActionSheet from 'react-native-actions-sheet';
const screenHeight = Dimensions.get('screen').height;

const actionSheetRef = createRef();

const InputArray = [
    {
      id: '1',
      title: 'Peshawar',
    },
    {
      id: '2',
      title: 'Nowshera',
    },
    {
      id: '3',
      title: 'Mardan',
    },
    {
        id: '4',
        title: 'Sawabi',
    },
    {
        id: '5',
        title: 'Peshawar',
      },
      {
        id: '6',
        title: 'Nowshera',
      },
      {
        id: '7',
        title: 'Mardan',
      },
      {
          id: '8',
          title: 'Sawabi',
      },
  ];
  const Item = ({ item, onPress, backgroundColor, textColor }) => (
    <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
      <Text style={[styles.title, textColor]}>{item.title}</Text>
    </TouchableOpacity>
  );
const AllPostsScreen = ({navigation}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const onChangeSearch = query => setSearchQuery(query);

  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#41d96c" : COLORS.white;
    const color = item.id === selectedId ? 'white' : 'black';

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
      />
    );
  }; 
  return (
    <KeyboardAvoidingView style={{flex: 1}}>
      <ScrollView
        contentContainerStyle={{minHeight: screenHeight}}
        bounces={false}>
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.text_header}
            onPress={() => navigation.navigate('Appointment')}
            >Districts</Text>
          </View>
          <Searchbar
            placeholder="Search"
            onChangeText={onChangeSearch}
            value={searchQuery}
            style={{
              width: '90%',
              marginTop: 30,
              marginLeft: 20,
              borderRadius: 20,
            }}
          />
          <View
            style={{
              justifyContent: 'center',
              flex: 1,
            }}>
            <TouchableOpacity
              onPress={() => {
                actionSheetRef.current?.setModalVisible();
              }}>
              <Button
                mode="contained"
                style={styles.actionSheetBtn}
                color={COLORS.orange}>
                Select District
              </Button>
            </TouchableOpacity>

            <ActionSheet ref={actionSheetRef}>
              <View>
                <List.Section style={{alignItems:'center'}}>
                  <List.Subheader>Districts</List.Subheader>
                    <FlatList
                        data={InputArray}
                        renderItem={renderItem}
                        keyExtractor={(item) => item.id}
                        extraData={selectedId}
                      />
                </List.Section>
              </View>
            </ActionSheet>
          </View>

          <Surface style={styles.surface}>
            <Text style={{color: COLORS.green, fontSize: 25, marginTop: -170}}>
              All Posts
            </Text>

            <View style={{marginLeft: 70}}>
              <ItemList
                img={require('../assets/kplogo.jpg')}
                title="Head Masters/Mistress"
              />
              <ItemList
                img={require('../assets/kplogo.jpg')}
                title="Head Masters/Mistress"
              />
              <ItemList
                img={require('../assets/kplogo.jpg')}
                title="Head Masters/Mistress"
              />
              <ItemList
                img={require('../assets/kplogo.jpg')}
                title="Head Masters/Mistress"
              />
              <ItemList
                img={require('../assets/kplogo.jpg')}
                title="Head Masters/Mistress"
              />
            </View>
          </Surface>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default AllPostsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.green,
  },
  surface: {
    borderRadius: 30,
    paddingTop: 10,
    height: '100%',
    width: '95%',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
  },
  actionSheetBtn: {
    marginTop: 20,
    marginBottom: 10,
    marginLeft: 20,
    borderRadius: 15,
    width: '90%',
  },
  header: {
    flex: 3,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingBottom: 0,
    marginTop: 15,
  },
  text_header: {
    alignItems: 'center',
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 25,
  },
  searchContainer: {
    height: 50,
    backgroundColor: COLORS.light,
    borderRadius: 10,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  action: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    width: '80%',
  },
  sortBtn: {
    marginLeft: 10,
    height: 50,
    width: 50,
    borderRadius: 10,
    backgroundColor: COLORS.green,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
