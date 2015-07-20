'use strict';

import AppDispatcher from '../dispatcher/AppDispatcher';
import UIConstants from '../constants/UIConstants';

var UIActions = {
  inputFieldFocused: function(csvData){
    AppDispatcher.dispatch({
      actionType: UIConstants.INPUT_FIELD_FOCUSED
    });
  },

  inputFieldBlurred: function(separator){
    AppDispatcher.dispatch({
      actionType: UIConstants.INPUT_FIELD_BLURRED
    });
  }
};

export default UIActions;