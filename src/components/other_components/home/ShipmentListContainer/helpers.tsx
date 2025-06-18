import React from 'react';
import {Text} from 'react-native';
import {styles} from './styles';

export const renderLocationInfo = (
  label: string,
  city: string,
  district: string,
) => (
  <>
    <Text style={styles.locationLabel}>{label}</Text>
    <Text style={styles.locationText}>
      {city}, {district}
    </Text>
  </>
);
