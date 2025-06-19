import {StyleSheet} from 'react-native';
import {COLORS} from '../../../../constants/COLORS';
import {Fonts} from '../../../../interface/fonts.enum';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.lightBackground,
    borderRadius: 12,
    marginHorizontal: 16,
    gap: 16,
    paddingTop: 16,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 20,
    marginVertical: 8,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  idText: {
    flex: 1,
    fontSize: 14,
    fontFamily: Fonts.SemiBold,
    color: COLORS.darktext,
  },
  infoContainer: {
    backgroundColor: '#6C2DF20F',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 11,
    paddingHorizontal: 12,
    gap: 6,
    borderRadius: 111,
  },
  dateText: {
    fontSize: 12,
    fontFamily: Fonts.Book,
    color: COLORS.darkesttext,
    paddingHorizontal: 12,
  },
  priceContainer: {
    flexDirection: 'row',
    backgroundColor: '#ECF5FF',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 11,
    paddingHorizontal: 12,
    gap: 6,
    borderRadius: 111,
  },
  priceText: {
    fontSize: 12,
    fontFamily: Fonts.Bold,
    color: '#0F5FBD',
  },
  currencyText: {
    color: '#0F5FBD',
    fontFamily: Fonts.Regular,
  },
  routeContainer: {
    gap: 0,
  },
  routeWithStopContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  routeInfoContainer: {
    flex: 1,
    gap: 0,
  },
  departureRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  arrivalRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  dotContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 22,
  },
  solidDot: {
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: '#0F5FBD',
  },
  hollowDot: {
    width: 16,
    height: 16,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: COLORS.ligtestblue,
    alignItems: 'center',
    justifyContent: 'center',
  },
  connectingLineContainer: {
    alignItems: 'center',
    width: 22,
  },
  dashedLineComponent: {
    height: 20,
    marginVertical: 2,
  },
  departureContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  arrivalContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  locationLabel: {
    fontSize: 12,
    color: '#93979B',
    fontFamily: Fonts.Regular,
    marginRight: 8,
    width: 40,
    textAlign: 'left',
  },
  locationText: {
    fontFamily: Fonts.Regular,
    color: '#092256',
    width: '80%',
  },
  stopContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    backgroundColor: '#F2F3F4',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 12,
    justifyContent: 'center',
    marginLeft: 16,
  },
  stopText: {
    fontSize: 10,
    fontFamily: Fonts.SemiBold,
    color: '#092256',
    textAlign: 'center',
  },
});
