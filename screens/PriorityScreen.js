import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  KeyboardAvoidingView,
  ScrollView,
  Dimensions,
} from 'react-native';
import {TextInput, Surface, List} from 'react-native-paper';
import COLORS from '../consts/colors';
import DropDownPicker from 'react-native-dropdown-picker';
import AppButton from '../components/AppButton';
const screenHeight = Dimensions.get('screen').height;

const PriorityScreen = ({navigation}) => {
  const [expanded, setExpanded] = useState(true);
  const handlePress = () => setExpanded(!expanded);

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
            <Text style={styles.text_header}>KPESED eTransfer</Text>
          </View>
          <Surface style={styles.surface}>
            <Text style={styles.heading}>
              Selection of School (Priority-wise)
            </Text>
            <View style={{width: '90%', marginTop:50}}>
              <List.Section>
                <List.Accordion
                  title="Priority No. 1"
                  left={props => <List.Icon {...props} icon="folder" />}>
                  <Text>EMIS Code | School Name </Text>
                  <DropDownPicker
              placeholder="EMIS Code"
              open={open}
              value={value}
              items={items}
              setItems={setItems}
              setOpen={setOpen}
              setValue={setValue}
              style={{
                  width: '60%',
                  height:30,
                  marginTop: 10,
                  marginLeft: 50,
                  marginBottom:10
                }}
                />
                <Text>Post Requested for Transfer</Text>
                <DropDownPicker
              placeholder="Head Master"
              open={open}
              value={value}
              items={items}
              setItems={setItems}
              setOpen={setOpen}
              setValue={setValue}
              style={{
                  width: '60%',
                  height:30,
                  marginTop: 10,
                  marginLeft: 50,
                  marginBottom:10
                }}
                />
                <Text>Distance (School to School)</Text>
                <View style={{marginLeft:-12, marginRight:30}}>
                <TextInput
                mode="outlined"
                label="Distance"
                placeholder="Distance"
                keyboardType="numeric"
                autoCapitalize="none"
                onChangeText={() => {}}
                style={{height:40, width:'80%'}}
                />
                </View>
                </List.Accordion>
                <List.Accordion
                  style={{marginTop: 20}}
                  title="Priority No. 2"
                  left={props => <List.Icon {...props} icon="folder" />}>
                       <Text>EMIS Code | School Name </Text>
                  <DropDownPicker
              placeholder="EMIS Code"
              open={open}
              value={value}
              items={items}
              setItems={setItems}
              setOpen={setOpen}
              setValue={setValue}
              style={{
                  width: '60%',
                  height:30,
                  marginTop: 10,
                  marginLeft: 50,
                  marginBottom:10
                }}
                />
                <Text>Post Requested for Transfer</Text>
                <DropDownPicker
              placeholder="Head Master"
              open={open}
              value={value}
              items={items}
              setItems={setItems}
              setOpen={setOpen}
              setValue={setValue}
              style={{
                  width: '60%',
                  height:30,
                  marginTop: 10,
                  marginLeft: 50,
                  marginBottom:10
                }}
                />
                <Text>Distance (School to School)</Text>
                <View style={{marginLeft:-12, marginRight:30}}>
                <TextInput
                mode="outlined"
                label="Distance"
                placeholder="Distance"
                keyboardType="numeric"
                autoCapitalize="none"
                onChangeText={() => {}}
                style={{height:40, width:'80%'}}
                />
                </View>
                </List.Accordion>
              </List.Section>
            </View>

            <View style={styles.bottumBtn}>
              <AppButton
                title="back"
                style={{width:100,marginRight:10}}
                color={COLORS.primary}
                onPress={() => navigation.navigate('Marking')}/>
              <AppButton
                title="cancel"
                color={COLORS.red}
                style={{width:100,marginRight:10}}
                onPress={() => navigation.navigate('Appointment')}/>
                   <AppButton
                title="submit"
                color={COLORS.green}
                onPress={() => navigation.navigate('Posting')}/>
            </View> 
          </Surface>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default PriorityScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.green,
  },
  heading: {
    color: COLORS.green,
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: -100,
    marginBottom: 30,
    marginLeft: 30,
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
});
