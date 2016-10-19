/**
 * @providesModule Home
 * @flow
 */

import React, { PropTypes } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

import { add, subtract } from 'CounterActions';
import Button from 'Button';

type Props = {
  count: number,
  dispatch: () => void,
};

function Home({ count, dispatch }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>
        React Native Starter App
      </Text>
      <View>
        <Button onPress={() => dispatch(subtract())}>-</Button>
        <Text>{count}</Text>
        <Button onPress={() => dispatch(add())}>+</Button>
      </View>
      <View>
        <Button onPress={Actions.child}>
          Go to child scene...
        </Button>
      </View>
    </View>
  );
}

Home.propTypes = {
  count: PropTypes.number.isRequired,
  dispatch: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  header: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

// Grab/Subscribe our redux data
function select(state) {
  return {
    count: state.counter.count,
  };
}

export default connect(select)(Home);
