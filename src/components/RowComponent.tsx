import { View, TouchableOpacity, ViewStyle } from 'react-native';
import React from 'react';
import { globalStyles } from '../styles/globalStyles';
import { StyleProp } from 'react-native';

interface Props {
  children?: React.ReactNode;
  justify?:
    | 'flex-start'
    | 'center'
    | 'flex-end'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
    | undefined;
  styles?: StyleProp<ViewStyle>;
  onPress?: () => void;
}
const RowComponent = (props: Props) => {
  const { children, justify, onPress, styles } = props;
  const localStyle = [
    globalStyles.row,
    { justifyContent: justify ?? 'center' },
    styles,
  ];
  return onPress ? (
    <TouchableOpacity
      style={localStyle}
      onPress={onPress ? () => onPress() : undefined}
    >
      {children}
    </TouchableOpacity>
  ) : (
    <View style={localStyle}>{children}</View>
  );
};

export default RowComponent;
