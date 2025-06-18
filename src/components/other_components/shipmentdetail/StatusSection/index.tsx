import React from 'react';
import {View, Text} from 'react-native';
import {styles} from '../../../../screens/tabs/CargoDetailScreen/styles';

interface StatusSectionProps {
  shipmentData?: any;
}

const StatusSection = ({shipmentData}: StatusSectionProps) => {
  return (
    <View style={styles.statusContainer}>
      <Text style={styles.statusText}>
        Taşıma Durumu: {shipmentData?.carrier_payment_status_value}
      </Text>
    </View>
  );
};

export default StatusSection;
