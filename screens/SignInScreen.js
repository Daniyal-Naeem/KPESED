import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView,
  Dimensions,
} from 'react-native';
import COLORS from '../consts/colors';
import {Button, TextInput, Surface} from 'react-native-paper';
import {Formik} from 'formik';
import * as Yup from 'yup';


const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(4).label('Password'),
});

const screenHeight = Dimensions.get('screen').height
const SignInScreen = ({navigation}) => {

  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  


  const handleSubmit = () => {

    setEmail("")
    setPassword("")
  };
  return (
    <KeyboardAvoidingView style={{flex: 1}}>
      <ScrollView 
      contentContainerStyle={{minHeight: screenHeight}} 
      bounces={false}>
        <View style={styles.container}>
          <View
            style={{
              backgroundColor: COLORS.green,
              height: '70%',
              borderBottomLeftRadius: 40,
              borderBottomRightRadius: 40,
              paddingHorizontal: 20,
            }}>
            <View style={styles.header}>
              <Text style={styles.text_header}>LOGIN</Text>
              <Image
              style={{width: 100, height:100, marginTop: 40}}
              source={require('../assets/kplogo.jpg')}
            />
            </View>
          </View>
          <Surface style={styles.surface}>
            <Formik
              initialValues={{email: '', password: ''}}
              onSubmit={handleSubmit}
              validationSchema={validationSchema}>
              {({handleChange, handleSubmit, errors}) => (
                <>
                  <View style={styles.action}>
                    <TextInput
                      mode="outlined"
                      label="Email"
                      placeholder="Your Email"
                      keyboardType="email-address"
                      style={styles.textInput}
                      autoCapitalize="none"
                      onChangeText={handleChange("email")}
                    />
                  </View>
                  <Text style={{color:'red'}}>{errors.email}</Text>
                  <View style={styles.action}>
                    <TextInput
                      mode="outlined"
                      label="Password"
                      placeholder="Your Password"
                      secureTextEntry
                      style={styles.textInput}
                      autoCapitalize="none"
                      onChangeText={handleChange("password")}
                    />
                  </View>
                  <Text style={{color:'red'}}>{errors.password}</Text>
                  <TouchableOpacity>
                    <Text 
                    style={{color: '#663399', marginTop: 15}}
                    onPress={() => navigation.navigate('AllPostsScreen')}
                    >
                      Forgot password?
                    </Text>
                  </TouchableOpacity>
                  <View style={styles.button}>
                    <Button
                      mode="contained"
                      color= {COLORS.green}
                      style={{width: 250, height: 50, borderRadius: 10}}
                      onPress={() => handleSubmit()}>
                      Login
                    </Button>
                    <Button
                      mode="Text"
                      onPress={() => navigation.navigate('HomeScreen')}>
                      CREATE ACCOUNT
                    </Button>
                  </View>
                </>
              )}
            </Formik>
          </Surface>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
  surface: {
    borderRadius: 30,
    paddingTop: 10,
    height: '45%',
    width: '80%',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4,
    marginLeft: 40,
    marginTop: -250,
  },

  header: {
    flex: 3,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingBottom: 20,
    marginTop: 20,
  },
  text_header: {
    alignItems: 'center',
    color:COLORS.white,
    fontWeight: 'bold',
    fontSize: 15,
  },
  text_footer: {
    color: '#05375a',
    fontSize: 18,
  },
  action: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    color: '#05375a',
    height: 45,
    width: 80,
    borderRadius:20
  },
  button: {
    alignContent:'center',
    alignItems: 'center',
    marginTop: 20,
  },
  textSign: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});