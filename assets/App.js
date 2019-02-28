/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList
} from "react-native";
var hi = false;
const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});
var number = [];
var item = [];
var x = [];
var r = {};
type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      refresh: true
    };
  }


  ex = () => {
    number = [];
    for (i = 0; i < this.state.name; i++) {
      number.push({num: i, status: "Pending"});
      x.push({num: i, status: "Pending"});
    }
    console.log(number);

    this.setState({refresh: !this.state.refresh});

    r = number[Math.floor(Math.random() * number.length)];
    r.status = "Enabled";

    console.log(r);
this.setState({refresh: !this.state.refresh});
  };

  click = item => {
    for (i = 0; i < number.length; i++) {
      for (j = 0; j < x.length; j++) {
        if (item.num == number[i].num) {
          number[i].status = "Disabled";

          console.log(number);
          if (item.num == x[j].num) {

            if(x.length == 1){
              for (k = 0; k < number.length; k++) {

                r="";
            number[k].status = "Disabled";

            console.log("KK", number)

            }

            }else{
              x.splice(j, 1);
              r = x[Math.floor(Math.random() * x.length)];
            }

            console.log("k", r);


            console.log("d", x);
          }
        } else {

        }



      }

      for (k = 0; k < number.length; k++) {
  if(number[k].num == r.num){
    number[k].status = "Enabled";
    break;
  }else{
    continue;
  }


    }
    }
    console.log(number);
    this.setState({refresh: !this.state.refresh});
  };

  renderItem() {
    return number.map((data, index) => {
      if (data.status == "Enabled") {
        return (
          <View key={index}>
            <TouchableOpacity
              style={{
                height: 40,
                width: 100,
                backgroundColor: "green",
                margin: 5,
                flexDirection: "row"
              }}
              onPress={() => this.click(data)}
            >
              <Text>{data.num}</Text>
            </TouchableOpacity>
          </View>
        );
      } else if (data.status == "Disabled") {
        return (
          <View key={index}>
            <TouchableOpacity
              style={{
                height: 40,
                width: 100,
                backgroundColor: "#ccc",
                margin: 5,
                flexDirection: "row"
              }}
            >
              <Text>{data.num}</Text>
            </TouchableOpacity>
          </View>
        );
      } else if (data.status == "Pending") {
        return (
          <View key={index}>
            <TouchableOpacity
              style={{
                height: 40,
                width: 100,
                backgroundColor: "yellow",
                margin: 5,
                flexDirection: "row"
              }}
            >
              <Text>{data.num}</Text>
            </TouchableOpacity>
          </View>
        );
      }
      else if (data.status == "Cancel") {
        return (
          <View key={index}>
            <TouchableOpacity
              style={{
                height: 40,
                width: 100,
                backgroundColor: "red",
                margin: 5,
                flexDirection: "row"
              }}
            >
              <Text>{data.num}</Text>
            </TouchableOpacity>
          </View>
        );
      }
    });
  }
  render() {
    return (
      <View style={styles.container} refresh={this.state.refresh}>
        <TextInput
          style={{backgroundColor: "#fff", width: 300}}
          onChangeText={text => this.setState({name: text})}
        />
        <TouchableOpacity
          style={{height: 40, width: 100, backgroundColor: "#f2f2f2"}}
          onPress={() => this.ex()}
        >
          <Text> Submit</Text>
        </TouchableOpacity>
        <View style={{flex: 1}}>{this.renderItem()}</View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
