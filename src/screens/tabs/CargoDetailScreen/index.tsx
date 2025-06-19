import {View, ScrollView} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {useRoute} from '@react-navigation/native';
import {RootRouteProp} from '../../../interface/navigation.interface';
import {useShipmentByIdQuery} from '../../../redux/services/mobileApi';
import GoBackTabBar from '../../../components/tab_components/GoBackTabBar';
import Lottie from '../../../components/other_components/lottie';
import RouteSection from '../../../components/other_components/shipmentdetail/RouteSection';
import MapSection from '../../../components/other_components/shipmentdetail/MapSection';
import RouteDetailsSection from '../../../components/other_components/shipmentdetail/RouteDetailsSection';
import DriverSection from '../../../components/other_components/shipmentdetail/DriverSection';
import CompanySection from '../../../components/other_components/shipmentdetail/CompanySection';
import RequirementsSection from '../../../components/other_components/shipmentdetail/RequirementsSection';
import StatusSection from '../../../components/other_components/shipmentdetail/StatusSection';

const CargoDetailScreen = () => {
  const route = useRoute<RootRouteProp<'CargoDetailScreen'>>();
  const {id} = route.params;
  const {data, isLoading} = useShipmentByIdQuery({id: id.toString()});

  const formatDate = (timestamp: number) => {
    const date = new Date(timestamp * 1000);
    return date.toLocaleDateString('tr-TR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    });
  };

  const shipmentData = data?.data?.[0];

  return (
    <View style={styles.container}>
      <GoBackTabBar headerText={'SEFER NO'} headerId={id} />
      {isLoading ? (
        <Lottie />
      ) : (
        <ScrollView
          contentContainerStyle={styles.contentContainer}
          showsVerticalScrollIndicator={false}
          style={styles.scrollContainer}>
          <RouteSection shipmentData={shipmentData} formatDate={formatDate} />
          <MapSection />
          <RouteDetailsSection shipmentData={shipmentData} />
          <View style={styles.divider} />
          <DriverSection shipmentData={shipmentData} />
          <View style={styles.divider} />
          <CompanySection shipmentData={shipmentData} />
          <View style={styles.divider} />
          <RequirementsSection shipmentData={shipmentData} />
          <StatusSection shipmentData={shipmentData} />
        </ScrollView>
      )}
    </View>
  );
};

export default CargoDetailScreen;
