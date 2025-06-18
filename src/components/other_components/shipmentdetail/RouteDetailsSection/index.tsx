import React from 'react';
import {View, Text} from 'react-native';
import {styles} from '../../../../screens/tabs/CargoDetailScreen/styles';

interface RouteDetailsSectionProps {
  shipmentData?: any;
}

const RouteDetailsSection = ({shipmentData}: RouteDetailsSectionProps) => {
  return (
    <View style={styles.routeDetails}>
      <View style={styles.routeStep}>
        <View style={styles.routeStepIndicator}>
          <View style={[styles.routeStepDot, {backgroundColor: '#3B82F6'}]} />
          <Text style={[styles.routeStepNumber, {color: '#3B82F6'}]}>
            KALKIŞ
          </Text>
        </View>
        <View style={styles.routeStepContent}>
          <Text style={[styles.routeStepLocation, {color: '#3B82F6'}]}>
            {shipmentData?.departure_address?.city?.name},{' '}
            {shipmentData?.departure_address?.district?.name}
          </Text>
        </View>
      </View>

      <View style={styles.routeStep}>
        <View style={styles.routeStepIndicator}>
          <View style={[styles.hollowDot]} />
          <Text style={styles.routeStepNumber}>VARIŞ</Text>
        </View>
        <View style={styles.routeStepContent}>
          <Text style={styles.routeStepLocation}>
            {shipmentData?.delivery_address?.city?.name},{' '}
            {shipmentData?.delivery_address?.district?.name}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default RouteDetailsSection;
