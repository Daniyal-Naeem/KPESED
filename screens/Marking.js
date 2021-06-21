import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  KeyboardAvoidingView,
  ScrollView,
  Dimensions,
} from 'react-native';
import {Surface, RadioButton, Checkbox} from 'react-native-paper';
import COLORS from '../consts/colors';
import AppButton from '../components/AppButton';
const screenHeight = Dimensions.get('screen').height;

const Marking = ({navigation}) => {
  const [checked, setChecked] = useState('first');
  const [Boxchecked, setBoxChecked] = useState(false);
  return (
    <KeyboardAvoidingView style={{flex: 1}}>
      <ScrollView
        contentContainerStyle={{minHeight: screenHeight}}
        bounces={false}>
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.text_header}>Marking</Text>
          </View>
          <Surface style={styles.surface}>
            <Text style={styles.heading}>Marking & Sorting Indicators</Text>
            <View>
              <Text style={{color: COLORS.green, fontSize: 17, marginLeft: 10}}>
                Annual HSSC Result (of the subject taught by the teacher)
              </Text>
              <View style={styles.radio}>
                <RadioButton
                  value="first"
                  status={checked === 'first' ? 'checked' : 'unchecked'}
                  onPress={() => setChecked('first')}
                />
                <Text>90% or above</Text>
              </View>
              <View style={styles.radio}>
                <RadioButton
                  value="sec"
                  status={checked === 'sec' ? 'checked' : 'unchecked'}
                  onPress={() => setChecked('sec')}
                />
                <Text>80% to 90%</Text>
              </View>
              <View style={styles.radio}>
                <RadioButton
                  value="third"
                  status={checked === 'third' ? 'checked' : 'unchecked'}
                  onPress={() => setChecked('third')}
                />
                <Text>70% to 80%</Text>
              </View>
              <View style={styles.radio}>
                <RadioButton
                  value="fourth"
                  status={checked === 'fourth' ? 'checked' : 'unchecked'}
                  onPress={() => setChecked('fourth')}
                />
                <Text>60% to 70%</Text>
              </View>
              <View style={styles.radio}>
                <RadioButton
                  value="fifth"
                  status={checked === 'fifth' ? 'checked' : 'unchecked'}
                  onPress={() => setChecked('fifth')}
                />
                <Text>below 60%</Text>
              </View>
            </View>
            <View>
              <Text
                style={{
                  color: COLORS.green,
                  fontSize: 17,
                  marginTop: 20,
                  marginLeft: 10,
                  marginRight: 10,
                }}>
                Disability (Marks will only be awarded only to those with
                physical disability. Proof required will be special person CNIC
                + Standing Medical Board Disability certificate. )
              </Text>
              <View style={{flexDirection:'row', alignItems:'center'}}>
              <Checkbox
                status={Boxchecked ? 'checked' : 'unchecked'}
                onPress={() => {
                    setBoxChecked(!Boxchecked);
                }}
                />
                <Text>Tick only if you are applicable</Text>
            </View>
            </View>
            <View style={styles.bottumBtn}>
              <AppButton
                title='back'
                color={COLORS.primary}
                style={{width:150}}
                onPress={() => navigation.navigate('Appointment')}/>
        
              <AppButton
                title="next"
                color={COLORS.green}
                style={{marginLeft:20, width:150}}
                onPress={() => navigation.navigate('PersonalInformation')}/>
            </View>
          </Surface>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Marking;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.green,
  },
  heading: {
    color: COLORS.green,
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: -300,
    marginBottom: 30,
    width: '80%',
    marginLeft: 40,
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
  datePickerStyle: {
    width: 300,
    marginTop: 10,
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
