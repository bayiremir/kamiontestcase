import {
  Image,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import {styles} from './styles';
import {COLORS} from '../../../constants/COLORS';
import {
  LockClosedIcon as LockClosedIconOutline,
  EnvelopeIcon as EnvelopeIconOutline,
} from 'react-native-heroicons/outline';
import {useLoginMutation} from '../../../redux/services/mobileApi';
import {useDispatch} from 'react-redux';
import {loginSuccess} from '../../../redux/slices/userSlice';
import {LoginResponse} from '../../../interface/userslice.interface';
import Toast from 'react-native-toast-message';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [login, {isLoading, data, error}] = useLoginMutation();

  console.log(data, error);
  const dispatch = useDispatch();

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Hata', 'Lütfen email ve şifrenizi giriniz.');
      return;
    }

    try {
      const result = (await login({email, password}).unwrap()) as LoginResponse;

      if (result.success && result.data) {
        Toast.show({
          type: 'success',
          text1: 'Başarılı',
          text2: 'Giriş yapıldı.',
          topOffset: 80,
        });
        dispatch(loginSuccess(result.data));
      } else {
        Alert.alert('Hata', result.message || 'Giriş yapılamadı.');
      }
    } catch (err: any) {
      Alert.alert('Hata', err?.data?.message || 'Bir hata oluştu.');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View>
          <Image
            source={require('../../../../assets/images/logo.png')}
            style={styles.logo}
          />
          <View style={styles.header}>
            <Text style={styles.headerText}>Kamion'a</Text>
            <Text style={styles.headerText2}> Hoşgeldiniz</Text>
          </View>
          <Text style={styles.description}>
            Lütfen email ve şifrenizi girerek giriş yapınız.
          </Text>
        </View>
        <View style={styles.form}>
          <View style={styles.inputContainer}>
            <TextInput
              placeholder="Email Adresiniz"
              style={styles.input}
              placeholderTextColor={COLORS.text}
              keyboardType="email-address"
              autoCapitalize="none"
              value={email}
              onChangeText={setEmail}
            />
            <EnvelopeIconOutline size={24} color={COLORS.button} />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              placeholder="Şifreniz"
              style={styles.input}
              placeholderTextColor={COLORS.text}
              secureTextEntry
              value={password}
              onChangeText={setPassword}
            />
            <LockClosedIconOutline size={24} color={COLORS.button} />
          </View>
        </View>
        <TouchableOpacity
          style={[styles.button, isLoading && {opacity: 0.7}]}
          onPress={handleLogin}
          disabled={isLoading}>
          <Text style={styles.buttonText}>
            {isLoading ? 'Giriş Yapılıyor...' : 'Giriş Yapın'}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
