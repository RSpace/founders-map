import React, {PropTypes} from 'react';
import FixedDataTable from 'fixed-data-table';
import ResponsiveFixedDataTable from 'responsive-fixed-data-table';
import style from '../../scss/components/Table.scss';
import fixedDataTableStyle from 'fixed-data-table/dist/fixed-data-table.css'
import CompanyStore from '../stores/CompanyStore';
import CompanyActions from '../actions/CompanyActions';
import Markup from './Markup.jsx';
import SortTypes from '../constants/SortTypes';

const Table = React.createClass({

  displayName: 'Table',

  getInitialState() {
    return this._getStateFromStore();
  },

  componentDidMount() {
    CompanyStore.addChangeListener(this._onChange);
  },
  componentWillUnmount() {
    CompanyStore.removeChangeListener(this._onChange);
  },

  _getStateFromStore() {
    return {
      headers: CompanyStore.getHeaders(),
      companies: CompanyStore.getCompanies(),
      mappings: CompanyStore.getMappings(),
      sort: CompanyStore.getSort()
    }
  },

  _onChange() {
    this.setState(this._getStateFromStore());
  },

  rowGetter(rowIndex) {
    return this.state.companies[rowIndex];
  },

  cellRenderer(cellData, cellDataKey, rowData, rowIndex, columnData, width) {
    return <Markup>{cellData}</Markup>
  },

  headerRenderer(label, cellDataKey, columnData, rowData, width) {
    var selectedMapping = this.getSelectedMapping(cellDataKey);
    return (
      <div>
        <div><a onClick={this.handleSortCompaniesBy.bind(null, cellDataKey)}>{label}</a></div>
        <div>
          <select defaultValue={selectedMapping} onChange={this.handleSetMapping.bind(this, cellDataKey)}>
            <option value="">Mapping...</option>
            {Object.keys(this.state.mappings).map(this.toMappingOption, this)}
          </select>
        </div>
      </div>
    );
  },

  toMappingOption(mappingKey, index) {
    return (
      <option value={mappingKey} key={mappingKey}>{mappingKey}</option>
    );
  },

  getSelectedMapping(cellDataKey) {
    var selectedMapping;
    Object.keys(this.state.mappings).forEach(function(mappingKey) {
      if (this.state.mappings[mappingKey] === cellDataKey) {
        selectedMapping = mappingKey;
      }
    }.bind(this));
    return selectedMapping;
  },

  toColumn(header, index) {
    var sortDirArrow = '';

    if (this.state.sort.by === index && this.state.sort.direction !== null){
      sortDirArrow = this.state.sort.direction === SortTypes.DESC ? ' ↓' : ' ↑';
    }

    return (
      <FixedDataTable.Column
        label={header + sortDirArrow}
        width={100}
        flexGrow={1}
        dataKey={index}
        key={'header' + index}
        headerRenderer={this.headerRenderer}
        cellRenderer={this.cellRenderer}
      />
    );
  },

  handleSetMapping(columnIndex, event) {
    CompanyActions.setMapping(columnIndex, event.target.value);
  },

  handleSortCompaniesBy(columnIndex, event) {
    CompanyActions.sortCompaniesBy(columnIndex);
  },

  render() {
    return (
      <div className="table-component">
        <ResponsiveFixedDataTable
          rowHeight={50}
          rowGetter={this.rowGetter}
          rowsCount={this.state.companies.length}
          headerHeight={70}>
          {this.state.headers.map(this.toColumn, this)}
        </ResponsiveFixedDataTable>
      </div>
    );
  }

});

export default Table;
