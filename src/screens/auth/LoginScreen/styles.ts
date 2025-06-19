import {StyleSheet} from 'react-native';
import {Fonts} from '../../../interface/fonts.enum';
import {COLORS} from '../../../constants/COLORS';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  content: {
    flex: 1,
    backgroundColor: COLORS.lightBackground,
    paddingHorizontal: 36,
    paddingBottom: 50,
    paddingTop: 50,
    gap: 24,
  },
  logo: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    borderRadius: 50,
    marginBottom: 40,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    alignSelf: 'center',
  },
  headerText: {
    fontSize: 24,
    fontFamily: Fonts.SemiBold,
    color: COLORS.text,
    textAlign: 'center',
  },
  headerText2: {
    fontSize: 24,
    fontFamily: Fonts.Light,
    color: COLORS.text,
    textAlign: 'center',
  },
  description: {
    fontSize: 14,
    fontFamily: Fonts.Light,
    color: '#93979B',
    textAlign: 'center',
  },
  form: {
    width: '100%',
    gap: 10,
    marginTop: 30,
  },
  input: {
    flex: 1,
    paddingHorizontal: 0,
    fontSize: 13,
    fontFamily: Fonts.Regular,
    color: COLORS.text,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#E3E6EE',
    paddingHorizontal: 16,
    height: 72,
    justifyContent: 'space-between',
  },
  button: {
    backgroundColor: COLORS.button,
    height: 64,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 12,
    fontFamily: Fonts.Bold,
    color: '#FFFFFF',
  },
});
