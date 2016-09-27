import React, { Component } from 'react';

class RowTable extends Component {
  render() {
    let color = this.props.item.breezometer_color
    let style = {
      backgroundColor: color,
    }
    return(
      <tr>
        <td>{this.props.item.country_name.place}</td>
        <td>{this.props.item.breezometer_aqi}</td>
        <td style={style}></td>
        <td>{this.props.item.breezometer_description}</td>
      </tr>
    )
  }
}

export default RowTable;
