import React, { Component } from 'react'
import { Table } from 'react-bootstrap';
import RowTable from './RowTable'

class DataTable extends Component {
  render() {
    let rows = [];
    this.props.items.forEach((item) => {
      rows.push(<RowTable key={rows.length + 1} item={item} />);
    })

    return(
      <Table className="DataTable" striped bordered condensed>
        <thead>
          <tr>
            <th>Place</th>
            <th>Air Quality Index (BAQI)</th>
            <th>Air Quality Index Color.</th>
            <th>Air Quality Index interpretation.</th>
          </tr>
        </thead>
        <tbody>
          {rows}
        </tbody>
      </Table>
    )
  }
}

export default DataTable;