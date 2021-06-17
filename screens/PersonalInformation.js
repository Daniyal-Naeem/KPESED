import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  KeyboardAvoidingView,
  ScrollView,
  Dimensions,
} from 'react-native';
import {TextInput, Surface, Button} from 'react-native-paper';
import COLORS from '../consts/colors';
import DropDownPicker from 'react-native-dropdown-picker';
const screenHeight = Dimensions.get('screen').height;

const PersonalInformation = ({navigation}) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'level1', value: 'level1'},
    {label: 'level2', value: 'level2'},
    {label: 'level3', value: 'level3'},
    {label: 'level4', value: 'level4'},
    {label: 'level5', value: 'level5'},
    {label: 'level6', value: 'level6'},
    {label: 'level7', value: 'level7'},
    {label: 'level8', value: 'level8'},
  ]);
  return (
    <KeyboardAvoidingView style={{flex: 1}}>
      <ScrollView
        contentContainerStyle={{minHeight: screenHeight}}
        bounces={false}>
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.text_header} onPress={() => navigation.navigate('PriorityScreen')}>KPESED eTransfer</Text>
          </View>
          <Surface style={styles.surface}>
            <Text style={styles.heading}>Personal Information</Text>
            <Text>Name</Text>
            <View style={styles.action}>
              <TextInput
                mode="outlined"
                label="Name"
                placeholder="Your Name"
                keyboardType="name"
                style={styles.textInput}
                autoCapitalize="none"
                onChangeText={() => {}}
              />
            </View>
            <Text>Father/Husband Name</Text>
            <View style={styles.action}>
              <TextInput
                mode="outlined"
                label="Father Name"
                placeholder="Your Name"
                keyboardType="name"
                style={styles.textInput}
                autoCapitalize="none"
                onChangeText={() => {}}
              />
            </View>
            <Text>Phone & CNIC No:</Text>
            <View style={styles.action}>
              <TextInput
                mode="outlined"
                label="tel"
                placeholder="Phone"
                keyboardType="phone-pad"
                style={styles.textInput}
                autoCapitalize="none"
                onChangeText={() => {}}
              />
              <TextInput
                mode="outlined"
                label="Cnic"
                placeholder="cnic"
                keyboardType="numeric"
                style={styles.textInput}
                autoCapitalize="none"
                onChangeText={() => {}}
              />
            </View>
            <Text>Gander & DOB</Text>
            <DropDownPicker
              placeholder="Select Gander"
              open={open}
              value={value}
              items={items}
              setItems={setItems}
              setOpen={setOpen}
              setValue={setValue}
              style={{
                  width: '73%',
                  marginTop: 10,
                  marginLeft: 50,
                  marginBottom:10
                }}
                /> 
            <View>
              <Text
                style={{
                  color: COLORS.green,
                  fontWeight: 'bold',
                }}>
                Highest Qualification
              </Text>
            </View>
            <Text>Level</Text>
            <DropDownPicker
              placeholder="Select Level"
              open={open}
              value={value}
              items={items}
              setItems={setItems}
              setOpen={setOpen}
              setValue={setValue}
              style={{
                width: '73%',
                marginTop: 10,
                marginBottom: 20,
                marginLeft: 50,
              }}
            />
            <Text>Major Subjects</Text>
            <View style={styles.action}>
              <TextInput
                mode="outlined"
                label="Enter your major subjects here"
                placeholder="Highest Qualification"
                keyboardType="name"
                style={styles.textInput}
                autoCapitalize="none"
                onChangeText={() => {}}
              />
            </View>
            <View style={styles.bottumBtn}>
              <Button
                style={{width: '40%'}}
                color={COLORS.grey}
                mode="contained"
                onPress={() => navigation.navigate('Appointment')}>
                Back
              </Button>
              <Button
                style={{width: '40%', marginLeft: 10}}
                color={COLORS.green}
                mode="contained"
                onPress={() => navigation.navigate('Marking')}>
                Next
              </Button>
            </View>
          </Surface>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default PersonalInformation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.green,
  },
  heading: {
    color: COLORS.green,
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: -150,
    marginBottom: 30,
    marginLeft: 150,
    width: '90%',
  },
  bottumBtn: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  surface: {
    borderRadius: 30,
    paddingTop: 10,
    height: '100%',
    width: '95%',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
    marginTop: 20,
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
  action: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
    width: '80%',
  },
  textInput: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    color: '#05375a',
    height: 45,
  },
});
