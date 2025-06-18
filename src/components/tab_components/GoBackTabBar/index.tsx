import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Fonts} from '../../../interface/fonts.enum';
import {COLORS} from '../../../constants/COLORS';
import {useNavigation} from '@react-navigation/native';
import {RootNavigationType} from '../../../interface/navigation.interface';
import {ArrowLeftCircleIcon} from 'react-native-heroicons/outline';
const GoBackTabBar = ({
  headerText,
  headerId,
}: {
  headerText: string;
  headerId: string;
}) => {
  const navigation = useNavigation<RootNavigationType>();
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
      <View style={styles.contentContainer}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}>
          <ArrowLeftCircleIcon size={24} color={COLORS.text} />
        </TouchableOpacity>

        <View style={styles.centerContainer}>
          <View style={styles.headerContainer}>
            <Text style={styles.headerText}>{headerText} :</Text>
            <Text style={styles.headerId}>{headerId}</Text>
          </View>
        </View>

        <View style={styles.rightSpacer} />
      </View>
    </View>
  );
};

export default GoBackTabBar;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.lightBackground,
    justifyContent: 'center',
  },
  contentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  backButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  centerContainer: {
    flex: 1,
    alignItems: 'center',
  },
  rightSpacer: {
    width: 40,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  headerText: {
    fontFamily: Fonts.Book,
    fontSize: 16,
    color: COLORS.text,
  },
  headerId: {
    fontFamily: Fonts.Medium,
    fontSize: 16,
    color: COLORS.text,
  },
});
