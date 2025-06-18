import React from 'react';
import {View, Text} from 'react-native';
import {WalletIcon as WalletIconOutline} from 'react-native-heroicons/outline';
import {styles} from '../../../../screens/tabs/CargoDetailScreen/styles';

interface DriverSectionProps {
  shipmentData?: any;
}

const DriverSection = ({shipmentData}: DriverSectionProps) => {
  if (!shipmentData?.creator) return null;

  return (
    <View style={styles.driverSection}>
      <View style={styles.driverInfo}>
        <View style={styles.driverAvatar}>
          <Text style={styles.driverAvatarText}>
            {shipmentData.creator.name?.charAt(0)}
            {shipmentData.creator.surname?.charAt(0)}
          </Text>
        </View>
        <View style={styles.driverDetails}>
          <Text style={styles.driverName}>
            {shipmentData.creator.name} {shipmentData.creator.surname}
          </Text>
          <Text style={styles.driverPhone}>{shipmentData.creator.phone}</Text>
        </View>
      </View>
      <View style={styles.earningsIconContainer}>
        <WalletIconOutline size={20} color="#0F5FBD" />
      </View>
      <View style={styles.earningsContainer}>
        <Text style={styles.earningsLabel}>KAZANCINIZ</Text>
        <Text style={styles.earningsAmount}>
          {shipmentData.price?.carrier?.carrier_price_tax_free}₺ + KDV
        </Text>
      </View>
    </View>
  );
};

export default DriverSection;
