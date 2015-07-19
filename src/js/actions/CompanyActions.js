'use strict';

import AppDispatcher from '../dispatcher/AppDispatcher';
import CompanyConstants from '../constants/CompanyConstants';

var CompanyActions = {
  setCsvData: function(csvData){
    AppDispatcher.dispatch({
      actionType: CompanyConstants.SET_CSV_DATA,
      csvData: csvData
    });
  },

  setSeparator: function(separator){
    AppDispatcher.dispatch({
      actionType: CompanyConstants.SET_SEPARATOR,
      separator: separator
    });
  },

  setMapping: function(columnIndex, mappingKey){
    AppDispatcher.dispatch({
      actionType: CompanyConstants.SET_MAPPING,
      mappingKey: mappingKey,
      columnIndex: columnIndex
    });
  },

  sortCompaniesBy: function(columnIndex){
    AppDispatcher.dispatch({
      actionType: CompanyConstants.SORT_COMPANIES,
      columnIndex: columnIndex
    });
  },

  filterCompaniesBy: function(filterQuery){
    AppDispatcher.dispatch({
      actionType: CompanyConstants.FILTER_COMPANIES,
      filterQuery: filterQuery
    });
  }
};

export default CompanyActions;