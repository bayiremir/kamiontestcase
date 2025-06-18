import React from 'react';
import {View, Text} from 'react-native';
import {ClockIcon as ClockIconOutline} from 'react-native-heroicons/outline';
import {styles} from '../../../../screens/tabs/CargoDetailScreen/styles';

interface RouteSectionProps {
  shipmentData?: any;
  formatDate: (timestamp: number) => string;
}

const RouteSection = ({shipmentData, formatDate}: RouteSectionProps) => {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Güzergah</Text>
      <View style={styles.dateTimeContainer}>
        <ClockIconOutline size={16} color="#6B46C1" />
        <Text style={styles.dateTimeText}>
          {shipmentData?.pick_up_date && formatDate(shipmentData.pick_up_date)}
          {shipmentData?.time_interval?.start &&
            shipmentData?.time_interval?.end &&
            ` / ${shipmentData?.time_interval?.start}-${shipmentData?.time_interval?.end}`}
        </Text>
      </View>
    </View>
  );
};

export default RouteSection;
