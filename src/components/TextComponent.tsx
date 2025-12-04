import { View, Text } from 'react-native';
import React from 'react';
import { globalStyles } from '../styles/globalStyles';
import { fontFamilies } from '../constants/fontFamilies';
import { corlors } from '../constants/colors';

interface Props {
  text: string;
  size?: number;
  font?: string;
  color?: string;
  flex?: number;
}

const TextComponent = (props: Props) => {
  const { text, size, font, color, flex } = props;
  return (
    <Text
      style={[
        globalStyles.text,
        {
          flex: flex ?? 1,
          fontSize: size ?? 14,
          fontFamily: font ?? fontFamilies.regular,
          color: color ?? corlors.desc,
        },
      ]}
    >
      {text}
    </Text>
  );
};

export default TextComponent;
