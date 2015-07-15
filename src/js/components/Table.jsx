import React, {PropTypes} from 'react';
import FixedDataTable from 'fixed-data-table';
import ResponsiveFixedDataTable from 'responsive-fixed-data-table';
import style from '../../scss/components/Table.scss';
import fixedDataTableStyle from 'fixed-data-table/dist/fixed-data-table.css'

const Table = React.createClass({

  displayName: 'Table',

  propTypes: {
  },

  getInitialState() {
    return {};
  },

  componentDidMount() {
  },

  rowGetter(rowIndex) {
    return ['test', 'test'];
  },

  render() {
    return (
      <ResponsiveFixedDataTable
        rowHeight={50}
        rowGetter={this.rowGetter}
        rowsCount={10}
        headerHeight={50}>
        <FixedDataTable.Column
          label="Col 1"
          width={100}
          flexGrow={1}
          dataKey={0}
        />
        <FixedDataTable.Column
          label="Col 2"
          width={100}
          flexGrow={1}
          dataKey={1}
        />
      </ResponsiveFixedDataTable>
    );
  }

});

export default Table;
