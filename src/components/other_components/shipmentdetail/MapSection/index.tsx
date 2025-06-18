import React from 'react';
import {View, Text, TouchableOpacity, ImageBackground} from 'react-native';
import {MapPinIcon as MapPinIconOutline} from 'react-native-heroicons/outline';
import {styles} from '../../../../screens/tabs/CargoDetailScreen/styles';

const MapSection = () => {
  return (
    <ImageBackground
      source={require('../../../../../assets/images/maps.jpg')}
      style={styles.mapContainer}>
      <View style={styles.mapPlaceholder}>
        <TouchableOpacity style={styles.routeButton}>
          <MapPinIconOutline size={16} color="white" />
          <Text style={styles.routeButtonText}>Yol Tarifi Al</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default MapSection;
