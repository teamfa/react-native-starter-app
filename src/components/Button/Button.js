/**
 * @providesModule Button
 * @flow
 */

import React, { PropTypes } from 'react';
import { TouchableHighlight, Text } from 'react-native';
import styles from './styles';

function Button({ onPress, children }) {
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

Button.propTypes = {
  onPress: PropTypes.func,
  children: PropTypes.string.isRequired,
};

export default Button;
