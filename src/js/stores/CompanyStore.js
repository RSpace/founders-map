'use strict';

import AppDispatcher from '../dispatcher/AppDispatcher';
import CompanyConstants from '../constants/CompanyConstants';
import CSVParserService from '../services/CSVParserService'
import objectAssign from 'react/lib/Object.assign';
import Events from 'events';
var EventEmitter = Events.EventEmitter;

var CHANGE_EVENT = 'change';

var _store = {
  companies: [],
  csvData: "Id,Company Name,Founder,City,Country,Postal Code, Street,Photo,Home Page,Garage Latitude,Garage Longitude\n1,Google,Larry Page & Sergey Brin,Mountain View,USA,CA 94043,1600 Amphitheatre Pkwy,http://interviewsummary.com/wp-content/uploads/2013/07/larry-page-and-sergey-brin-of-google-620x400.jpg,http://google.com,37.457674,-122.163452\n2,Apple,Steve Jobs & Steve Wozniak,Cupertino,USA,CA 95014,1 Infinite Loop,http://i.dailymail.co.uk/i/pix/2013/02/08/article-2275512-172E13BB000005DC-732_634x505.jpg,http://apple.com,37.3403188,-122.0581469\n3,Microsoft,Bill Gates,Redmond,USA,WA 98052-7329,One Microsoft Way,http://postdefiance.com/wp-content/uploads/2013/02/bill-gates-microsoft-young.jpg,http://microsoft.com,37.472189,-122.190191"
};

var setCsvData = function(csvData){
  _store.csvData = csvData;
  _store.companies = CSVParserService.getArrayFromCSVString(_store.csvData);
};

var CompanyStore = objectAssign({}, EventEmitter.prototype, {
  addChangeListener: function(cb){
    this.on(CHANGE_EVENT, cb);
  },
  removeChangeListener: function(cb){
    this.removeListener(CHANGE_EVENT, cb);
  },
  getCompanies: function(){
    return _store.companies;
  },
  getCsvData: function() {
    return _store.csvData;
  }
});

AppDispatcher.register(function(action){
  switch(action.actionType){
    case CompanyConstants.SET_CSV_DATA:
      setCsvData(action.csvData);
      CompanyStore.emit(CHANGE_EVENT);
      break;
    default:
      return true;
  }
});

export default CompanyStore;