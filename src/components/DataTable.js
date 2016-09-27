import React, { Component } from 'react'

class DataTable extends Component {
  render() {
    return(
      <table className="DataTable">
        <thead>
          <tr>
            <th>Place</th>
            <th>Air Quality Index (BAQI)</th>
            <th>Air Quality Index Color.</th>
            <th>Air Quality Index interpretation.</th>
          </tr>
        </thead>
        <tbody>
            <td>item 1 </td>
            <td>item 1 </td>
            <td>item 1 </td>
            <td>item 1 </td>
        </tbody>
      </table>
    )
  }
}

export default DataTable;