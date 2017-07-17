import React, { Component } from 'react';
import { View, Text, Picker } from 'react-native';
import { CardSection, Input } from './common';
import { connect } from 'react-redux';
import { employeeUpdate } from '../actions';

class EmployeeForm extends Component {
  render() {
    return (
      <View>
        <CardSection>
          <Input
            onChangeText={(text) => this.props.employeeUpdate({ prop: 'name', value: text })}
            label="Name"
            placeholder="Karen"
            value={this.props.name}
            />
        </CardSection>

        <CardSection>
          <Input
            label="Phone"
            placeholder="555-555-555"
            value={this.props.phone}
            onChangeText={(phone) => this.props.employeeUpdate({ prop: 'phone', value: phone })}
            />
        </CardSection>

        <CardSection style={{ flexDirection: 'column' }}>
          <Text style={styles.labelStyle}> Shift </Text>
          <Picker
            style={styles.pickerStyle}
            selectedValue={this.props.shift}
            onValueChange={day => this.props.employeeUpdate({ prop: 'shift', value: day })}
            >
            <Picker.Item label="Monday" value="Monday" />
            <Picker.Item label="Tuesday" value="Tuesday" />
            <Picker.Item label="Wednesday" value="Wednesday" />
            <Picker.Item label="Thursday" value="Thursday" />
            <Picker.Item label="Friday" value="Friday" />
            <Picker.Item label="Saturday" value="Saturday" />
            <Picker.Item label="Sunday" value="Sunday" />
          </Picker>
        </CardSection>
      </View>
    );
  }
}

const styles = {
  pickerStyle: {

  },

  labelStyle: {
    fontSize: 18,
    paddingLeft: 20,
    paddingTop: 5
  }
}

function mapStateToProps(state) {
  const { name, phone, shift } = state.employeeForm;

  return {
    name,
    phone,
    shift
  }
}


export default connect(mapStateToProps, { employeeUpdate })(EmployeeForm);
