import React, { Component } from 'react';
import {
  Button,
  Text, TextInput,
  View
} from 'react-native';

export default class HitungLuasBalok extends Component {
  constructor(props) {
    super(props);
    this.state = {
       panjang: 0,
       lebar: 0,
       tinggi: 0,
      luas: 0
    };
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#bbdefb' }}>

        <View style={{ backgroundColor: '#2196f3' }}>
           <Text style={{ padding: 10, fontSize: 20, color: 'white', textAlign: 'center' }}>
            Menghitung luas Balok
          </Text>
         </View>

        <View style={{ margin: 20, padding: 10, backgroundColor: '#e3f2fd' }}>

            <TextInput
            style={{ height: 40 }}
              placeholder="Masukkan Panjang"
              onChangeText={(panjang) => this.setState({ panjang })}

              keyboardType='numeric'
            />
            <TextInput
            style={{ height: 40 }}
              placeholder="Masukkan Lebar"
              onChangeText={(lebar) => this.setState({ lebar })}
              keyboardType='numeric'
            />
            <TextInput
            style={{ height: 40 }}
              placeholder="Masukkan Tinggi"
              onChangeText={(tinggi) => this.setState({ tinggi })}
              keyboardType='numeric'
            />

            <Button
              onPress={() => this.setState({
              luas: (this.state.panjang * this.state.lebar * this.state.tinggi)
              })}
            title="Hitung"
              accessibilityLabel="Klik untuk menghitung"
            />
       </View>

        <View style={{ margin: 20, backgroundColor: '#90caf9' }}>
          <Text style={{ padding: 10, fontSize: 20 }}>
              Panjang ={this.state.panjang} {'\n'}
              Lebar ={this.state.lebar} {'\n'}
              Tinggi ={this.state.tinggi} {'\n'}
              Luas = {this.state.luas}
          </Text>
         </View>
   </View>
    );
  }
}
