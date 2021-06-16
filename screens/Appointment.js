import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  KeyboardAvoidingView,
  ScrollView,
  Dimensions,
} from 'react-native';
import {Surface, RadioButton, Button} from 'react-native-paper';
import COLORS from '../consts/colors';

const screenHeight = Dimensions.get('screen').height;

const Appointment = ({navigation}) => {
  const [checked, setChecked] = useState('first');
  return (
    <KeyboardAvoidingView style={{flex: 1}}>
      <ScrollView
        contentContainerStyle={{minHeight: screenHeight}}
        bounces={false}>
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.text_header}>Appointment</Text>
          </View>
          <Surface style={styles.surface}>
            <Text style={styles.heading}>
              Appointment & Tenure at Current School
            </Text>
            <View>
              <Text style={{color: COLORS.green, fontSize: 17, marginTop: 0}}>
                Are you Appointed on contract basis ?
              </Text>
              <View style={styles.radio}>
                <RadioButton
                  value="first"
                  status={checked === 'first' ? 'checked' : 'unchecked'}
                  onPress={() => setChecked('first')}
                />
                <Text>Yes</Text>
                <RadioButton
                  value="second"
                  status={checked === 'second' ? 'checked' : 'unchecked'}
                  onPress={() => setChecked('second')}
                />
                <Text>No</Text>
              </View>
            </View>
            <View>
              <Text
                style={{
                  color: COLORS.green,
                  fontSize: 17,
                  marginTop: 20,
                  marginRight: 33,
                }}>
                Date of posting in current school ?
              </Text>
            </View>
            <View style={styles.bottumBtn}>
              <Button
                style={{width: '40%'}}
                color={COLORS.grey}
                mode="contained"
                onPress={() => console.log('Pressed Back')}>
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

export default Appointment;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.green,
  },
  heading: {
    color: COLORS.green,
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: -500,
    marginBottom: 30,
    width: '90%',
  },
  bottumBtn: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  radio: {
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
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
    width: '80%',
  },
});
