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
  }
};

export default CompanyActions;