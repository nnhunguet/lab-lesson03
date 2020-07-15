import React, { Component } from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';

export default class ConversionTypeButton extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {fromCurrency, toCurrency, from, to, setConversionCurrencies} = this.props;

    const backgroundColor =
     fromCurrency === from && toCurrency === to
      ? 'lightblue'
      : null;
    const buttonStyle = { backgroundColor: backgroundColor };

    const flagFrom = from === "usd" ? '🇺🇸' : '🇻🇳';
    const flagTo = to === "usd" ? '🇺🇸' : '🇻🇳';

    return (
      <TouchableOpacity 
        style={[styles.button, buttonStyle]}
        onPress={() => setConversionCurrencies(from,to)}
      >
        <Text>
          {flagFrom} from {flagTo}
        </Text>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  button: {
    height: 35,
    width: 200,
    margin: 10,
    borderWidth: 2,
    borderRadius: 20,
    alignItems: 'center',
    borderColor: 'lightblue',
    justifyContent: 'center'
  }
})