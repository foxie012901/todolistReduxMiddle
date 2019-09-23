import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Button,
    FlatList,
    TouchableOpacity,
    YellowBox

} from 'react-native';

import styles from "./MSagaStyle";

export default class MSaga extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        let {
            inputValue,
            list,
            _handleInputChange,
            _onChangeData,
        } = this.props
        return (
            <View style={styles.content}>
                <Text>saga</Text>
                <View style={{ width: "100%", marginBottom: 10 }}>
                    <TextInput
                        placeholder={'Write Something...'}
                        placeholderTextColor={'#BBBBBB'}
                        style={styles.tInput}
                        onChangeText={_handleInputChange}
                        value={inputValue}
                    />

                    <TouchableOpacity
                        style={{ marginTop: 10 }}
                        onPress={_onChangeData}
                    >
                        <View style={styles.btnSty}><Text style={styles.btnTxtSty}>Click Me</Text></View>
                    </TouchableOpacity>
                </View>
                <FlatList
                    keyExtractor={(item, index) => index.toString()}
                    data={list}
                    // data={[1,2,3]}
                    renderItem={this._renderItem}
                    style={{ width: "100%" }}
                />
            </View>
        );
    }

    // _keyFlatlist = e => {
    //     console.log(e)
    // }
    _renderItem = ({ item, index }) => {
        // console.warn(index)
        return (
            <View style={styles.row}>
                <Text >{item}</Text>
                <TouchableOpacity
                    onPress={() => this.props._openId(index)}
                    style={styles.rowTouch}
                >
                    <Text style={styles.rowTouchTxt}>delete</Text>
                </TouchableOpacity>
            </View>
        )
    }
}
