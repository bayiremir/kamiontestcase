import React from 'react';
import {View, Text} from 'react-native';
import {HomeModernIcon as HomeModernIconOutline} from 'react-native-heroicons/outline';
import {styles} from '../../../../screens/tabs/CargoDetailScreen/styles';

interface CompanySectionProps {
  shipmentData?: any;
}

const CompanySection = ({shipmentData}: CompanySectionProps) => {
  return (
    <View style={styles.companySection}>
      <View
        style={[styles.earningsIconContainer, {backgroundColor: '#EEEEFF'}]}>
        <HomeModernIconOutline size={20} color="#6B46C1" />
      </View>
      <Text style={styles.companyName}>{shipmentData?.shipper?.name}</Text>
    </View>
  );
};

export default CompanySection;
