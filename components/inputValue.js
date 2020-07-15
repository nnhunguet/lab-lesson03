import React, { Component } from 'react';
import { Text, TextInput, StyleSheet, View } from 'react-native';
import ConversionTypeButton from './ConversionTypeButton';
import FormattedCurrency from './FormattedCurrency';

export default class input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentCurrencyValue: 0,
      convertedCurrencyValue: 0,
      fromCurrency: 'vnd',
      toCurrency: 'usd',
    }
  }
  
  setConversionCurrencies = (from, to) => {
    this.setState({
      fromCurrency: from,
      toCurrency: to
      });
  };

  onCurrencyChange = (currentCurrency) => {
    let convertedCurrency;
    this.state.fromCurrency === "vnd" ? convertedCurrency = currentCurrency / 23000 : convertedCurrency = currentCurrency * 23000
    this.setState({
      currentCurrencyValue: currentCurrency,
      convertedCurrencyValue: convertedCurrency
    })
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Please enter the value of the currency you want to convert</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          autoFocus={true}
          textAlign="center"
          placeholder="100,000,000 VND"
          selectionColor="red"
          onChangeText={(text) => this.onCurrencyChange(parseInt(text)) }
        />
        <ConversionTypeButton
          from="vnd"
          to="usd"
          toCurrency={this.state.toCurrency}
          fromCurrency={this.state.fromCurrency}
          setConversionCurrencies={this.setConversionCurrencies}
        />
        <ConversionTypeButton
          from="usd"
          to="vnd"
          toCurrency={this.state.toCurrency}
          fromCurrency={this.state.fromCurrency}
          setConversionCurrencies={this.setConversionCurrencies}
        />
        <View style={styles.wrapCurrencyText}>
          <Text>Current currency:</Text>
            <FormattedCurrency 
              type={this.state.fromCurrency}
              value={this.state.currentCurrencyValue}
            />
          <Text>Conversion currenecy:</Text>
          <FormattedCurrency
            type={this.state.toCurrency}
            value={this.state.convertedCurrencyValue}
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  text: {
    justifyContent:"flex-end",
    fontSize: 16,
  },
  input: {
    height: 60,
    padding: 5,
    width: 300,
    fontSize: 35,
    borderWidth: 1,
    borderColor: 'lightblue'
  },
  wrapCurrencyText: {
    alignItems: "center",
  },
})