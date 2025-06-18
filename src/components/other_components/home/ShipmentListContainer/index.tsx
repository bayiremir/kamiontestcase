import {Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import DashedLine from 'react-native-dashed-line';
import {styles} from './styles';
import {useNavigation} from '@react-navigation/native';
import {RootNavigationType} from '../../../../interface/navigation.interface';
import {ChevronDownIcon as ChevronDownIconOutline} from 'react-native-heroicons/outline';
import {ShipmentListContainerProps} from './types';
import {formatDate} from './utils';
import {renderLocationInfo} from './helpers';

const ShipmentListContainer = ({item}: ShipmentListContainerProps) => {
  const navigation = useNavigation<RootNavigationType>();

  const totalStops =
    (item.departure_address?.address?.length > 0 ? 1 : 0) +
    (item.delivery_address?.address?.length > 0 ? 1 : 0);

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() =>
        navigation.navigate('CargoDetailScreen', {id: item.id.toString()})
      }>
      <View style={styles.headerRow}>
        <Text style={styles.idText}>{item.id}</Text>
        <View style={styles.infoContainer}>
          <Text style={styles.dateText}>{formatDate(item.pick_up_date)}</Text>
        </View>
        <View style={styles.priceContainer}>
          <Text style={styles.priceText}>
            {item.price.shipper.freight_price}
            <Text style={styles.currencyText}>₺+KDV</Text>
          </Text>
        </View>
      </View>
      <View style={styles.routeContainer}>
        <View style={styles.routeWithStopContainer}>
          <View style={styles.routeInfoContainer}>
            <View style={styles.departureRow}>
              <View style={styles.dotContainer}>
                <View style={styles.solidDot} />
              </View>
              <View style={styles.departureContainer}>
                {renderLocationInfo(
                  'ÇIKIŞ',
                  item.departure_address.city.name,
                  item.departure_address.district.name,
                )}
              </View>
            </View>
            <View style={styles.connectingLineContainer}>
              <DashedLine
                dashLength={3}
                dashThickness={1}
                dashGap={3}
                dashColor="#7EAFE8"
                axis="vertical"
                style={styles.dashedLineComponent}
              />
            </View>
            <View style={styles.arrivalRow}>
              <View style={styles.dotContainer}>
                <View style={styles.hollowDot} />
              </View>
              <View style={styles.arrivalContainer}>
                {renderLocationInfo(
                  'VARIŞ',
                  item.delivery_address.city.name,
                  item.delivery_address.district.name,
                )}
              </View>
            </View>
          </View>
          <View style={styles.stopContainer}>
            <ChevronDownIconOutline size={16} color="#092256" />
            <Text style={styles.stopText}>{totalStops} DURAK</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ShipmentListContainer;
