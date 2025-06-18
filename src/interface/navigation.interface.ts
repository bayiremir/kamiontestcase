import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RouteProp} from '@react-navigation/native';

export type RootStackParamList = {
  HomeScreen: {};
  CargoLoadScreen: {};
  LoginScreen: {};
  CargoDetailScreen: {id: string};
};

export type RootNavigationType = NativeStackNavigationProp<RootStackParamList>;

export type RootRouteProp<T extends keyof RootStackParamList> = RouteProp<
  RootStackParamList,
  T
>;
