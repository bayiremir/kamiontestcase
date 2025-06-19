import {StyleSheet, Text, View, Dimensions} from 'react-native';
import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Fonts} from '../../../interface/fonts.enum';
import {COLORS} from '../../../constants/COLORS';
const TabBar = ({headerText}: {headerText: string}) => {
  const insets = useSafeAreaInsets();
  const statusBarHeight = insets.top;
  const screenHeight = Dimensions.get('window').height;
  const dynamicHeight = screenHeight * 0.12;

  return (
    <View
      style={[
        styles.container,
        {paddingTop: statusBarHeight, height: dynamicHeight},
      ]}>
      <Text style={styles.headerText}>{headerText}</Text>
    </View>
  );
};

export default TabBar;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.lightBackground,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontFamily: Fonts.Medium,
    fontSize: 16,
    color: COLORS.text,
  },
});
