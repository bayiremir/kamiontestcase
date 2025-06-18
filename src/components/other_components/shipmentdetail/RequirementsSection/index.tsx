import React from 'react';
import {View, Text} from 'react-native';
import {styles} from '../../../../screens/tabs/CargoDetailScreen/styles';

interface RequirementsSectionProps {
  shipmentData?: any;
}

const RequirementsSection = ({shipmentData}: RequirementsSectionProps) => {
  return (
    <>
      <Text style={[styles.sectionTitle, {marginBottom: 20}]}>
        Taşıma Gereksinimleri
      </Text>
      <View style={styles.requirementsWrapper}>
        <View style={[styles.requirementContainer]}>
          <Text style={styles.requirementLabel}>ARAÇ</Text>
          <View style={{flexDirection: 'row', gap: 4}}>
            <Text style={styles.requirementValue}>
              {shipmentData?.shipment_detail?.trailer_type_value?.[0]}
            </Text>
            <Text style={styles.requirementValue}>
              {shipmentData?.shipment_detail?.vehicle_type_value}
            </Text>
          </View>
        </View>
        <View style={styles.requirementContainer}>
          <Text style={styles.requirementLabel}>DORSE</Text>
          <Text style={styles.requirementValue}>
            {shipmentData?.shipment_detail?.trailer_type_value?.[0]}
          </Text>
        </View>
        <View style={styles.requirementContainer}>
          <Text style={styles.requirementLabel}>TONAJ</Text>
          <Text style={styles.requirementValue}>
            {shipmentData?.shipment_detail?.tonnage?.min} Ton Max.
          </Text>
        </View>
        <View style={styles.requirementContainer}>
          <Text style={styles.requirementLabel}>ÜRÜN TİPİ</Text>
          <Text style={styles.requirementValue}>
            {shipmentData?.shipment_detail?.base_type_value} /{' '}
            {shipmentData?.shipment_detail?.package_type_value} /{' '}
            {shipmentData?.shipment_detail?.way_of_loading_value}
          </Text>
        </View>
        <View style={styles.requirementContainer}>
          <Text style={styles.requirementLabel}>YÜKLEME TİPİ</Text>
          <Text style={styles.requirementValue}>
            {shipmentData?.shipment_detail?.base_type_value} /{' '}
            {shipmentData?.shipment_detail?.package_type_value}
          </Text>
        </View>
      </View>
    </>
  );
};

export default RequirementsSection;
