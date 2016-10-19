/**
 * @providesModule Button
 * @flow
 */

import React from 'react';
import { TouchableHighlight, Text } from 'react-native';
import styles from './styles';

type Props = {
  onPress: () => void,
  children?: string,
}

function Button({ onPress, children }: Props) {
  return (
    <TouchableHighlight
      onPress={onPress}
      style={styles.container}
    >
      <Text style={styles.text}>
        {children}
      </Text>
    </TouchableHighlight>
  );
}

export default Button;
