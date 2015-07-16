import React, {PropTypes} from 'react';
import FixedDataTable from 'fixed-data-table';
import ResponsiveFixedDataTable from 'responsive-fixed-data-table';
import style from '../../scss/components/Table.scss';
import fixedDataTableStyle from 'fixed-data-table/dist/fixed-data-table.css'
import CompanyStore from '../stores/CompanyStore';

const Table = React.createClass({

  displayName: 'Table',

  propTypes: {
  },

  getInitialState() {
    return {
      headers: CompanyStore.getHeaders(),
      companies: CompanyStore.getCompanies()
    };
  },

  componentDidMount() {
    CompanyStore.addChangeListener(this._onChange);
  },
  componentWillUnmount() {
    CompanyStore.removeChangeListener(this._onChange);
  },
  _onChange() {
    this.setState({
      headers: CompanyStore.getHeaders(),
      companies: CompanyStore.getCompanies()
    })
  },

  rowGetter(rowIndex) {
    return this.state.companies[rowIndex];
  },

  toColumn(header, index) {
    return (
      <FixedDataTable.Column
        label={header}
        width={100}
        flexGrow={1}
        dataKey={index}
        key={'header' + index}
      />
    );
  },

  render() {
    return (
      <ResponsiveFixedDataTable
        rowHeight={50}
        rowGetter={this.rowGetter}
        rowsCount={this.state.companies.length}
        headerHeight={50}>
        {this.state.headers.map(this.toColumn, this)}
      </ResponsiveFixedDataTable>
    );
  }

});

export default Table;
