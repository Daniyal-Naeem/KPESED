import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  KeyboardAvoidingView,
  ScrollView,
  Dimensions,
} from 'react-native';
import {Surface, Searchbar} from 'react-native-paper';
import COLORS from '../consts/colors';
import ItemList from '../consts/ItemList';
import DropDownPicker from 'react-native-dropdown-picker';
const screenHeight = Dimensions.get('screen').height;

const AllPostsScreen = ({navigation}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const onChangeSearch = query => setSearchQuery(query);

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Peshawar', value: 'Peshawar'},
    {label: 'Charsadda', value: 'Charsadda'},
    {label: 'Mardan', value: 'Mardan'},
    {label: 'Nowshera', value: 'Nowshera'},
    {label: 'Sawabi', value: 'Sawabi'},
    {label: 'Dir', value: 'Dir'},
    {label: 'Sawat', value: 'Sawat'},
    {label: 'Kohat', value: 'Kohat'},
  ]);
  return (
    <KeyboardAvoidingView style={{flex: 1}}>
      <ScrollView
        contentContainerStyle={{minHeight: screenHeight}}
        bounces={false}>
        <View style={styles.container}>
          <View style={styles.header}>
            <Text
              style={styles.text_header}
              onPress={() => navigation.navigate('Appointment')}>
              Districts
            </Text>
          </View>
            <DropDownPicker
              placeholder="Search District"
              open={open}
              value={value}
              items={items}
              setItems={setItems}
              setOpen={setOpen}
              setValue={setValue}
              style={{
                width: '90%',
                marginTop: 10,
                marginLeft: 20,
                borderRadius: 10,
              }}
            />
             <Searchbar
            placeholder="Search"
            onChangeText={onChangeSearch}
            value={searchQuery}
            style={{
              width: '90%',
              marginTop: 10,
              marginLeft: 20,
              marginBottom:20,
              borderRadius: 10,
            }}
          />
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
