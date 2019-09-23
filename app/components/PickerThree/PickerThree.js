import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class PickerThree extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>这是一个redux中间件的练习</Text>
        <Text>分为3个部分</Text>
        <Text>基本redux使用,redux中间件thunk,redux中间价saga </Text>
        <Text>使用方法详见每个组件的.md文档</Text>
        <Text>3种组件不能同时依赖,用哪种去App.js修改tabbar</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'lightblue'
  }
})