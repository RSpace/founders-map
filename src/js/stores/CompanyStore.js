'use strict';

import AppDispatcher from '../dispatcher/AppDispatcher';
import CompanyConstants from '../constants/CompanyConstants';
import CSVParserService from '../services/CSVParserService';
import SortFilterService from '../services/SortFilterService';
import objectAssign from 'react/lib/Object.assign';
import Events from 'events';
var EventEmitter = Events.EventEmitter;

var CHANGE_EVENT = 'change';

var _store = {
  csvData: "Id,Company Name,Founder,City,Country,Postal Code, Street,Photo,Home Page,Garage Latitude,Garage Longitude\n1,Google,Larry Page & Sergey Brin,Mountain View,USA,CA 94043,1600 Amphitheatre Pkwy,http://interviewsummary.com/wp-content/uploads/2013/07/larry-page-and-sergey-brin-of-google-620x400.jpg,http://google.com,37.457674,-122.163452\n2,Apple,Steve Jobs & Steve Wozniak,Cupertino,USA,CA 95014,1 Infinite Loop,http://i.dailymail.co.uk/i/pix/2013/02/08/article-2275512-172E13BB000005DC-732_634x505.jpg,http://apple.com,37.3403188,-122.0581469\n3,Microsoft,Bill Gates,Redmond,USA,WA 98052-7329,One Microsoft Way,http://www.techtricksworld.com/wp-content/uploads/2013/04/Young-Bill-Gates.jpg,http://microsoft.com,37.472189,-122.190191",
  companies: [],
  sortedFilteredCompanies: null,
  headers: [],
  mappings: {
    markerLabel: 1,
    latitude: 9,
    longitude: 10
  },
  separator: ',',
  sort: {
    by: null,
    direction: null
  },
  filterQuery: null
};

var setCsvData = function(csvData) {
  _store.csvData = csvData;
  syncFromCsvData();
};

var setSeparator = function(separator) {
  _store.separator = separator;
  syncFromCsvData();
};

var setMapping = function(mappingKey, columnIndex) {
  _store.mappings[mappingKey] = columnIndex;
};

var sortCompaniesBy = function(columnIndex) {
  var sorted = SortFilterService.sortMatrixByColumn(
    _store.sortedFilteredCompanies, columnIndex, _store.sort.direction, _store.sort.by);

  _store.sortedFilteredCompanies = sorted.matrix;
  _store.sort.by = sorted.sortBy;
  _store.sort.direction = sorted.sortDir;
};

var filterCompaniesBy = function(filterQuery) {
  _store.filterQuery = filterQuery;

  var filtered = SortFilterService.filterMatrixBy(_store.companies, _store.filterQuery);
  var sortedFiltered = SortFilterService.sortMatrixByColumn(
    filtered, _store.sort.by, _store.sort.direction, _store.sort.by, true);
  _store.sortedFilteredCompanies = filtered;
};

var syncFromCsvData = function() {
  var dataArray = CSVParserService.getArrayFromCSVString(_store.csvData, _store.separator);
  _store.headers = dataArray[0];
  _store.companies = dataArray.slice(1);
  filterCompaniesBy(_store.filterQuery); // Apply current sorting and filtering
};

var CompanyStore = objectAssign({}, EventEmitter.prototype, {
  addChangeListener: function(cb){
    this.on(CHANGE_EVENT, cb);
  },
  removeChangeListener: function(cb){
    this.removeListener(CHANGE_EVENT, cb);
  },
  getCsvData: function() {
    return _store.csvData;
  },
  getCompanies: function() {
    return _store.sortedFilteredCompanies || _store.companies;
  },
  getHeaders: function() {
    return _store.headers;
  },
  getMappings: function() {
    return _store.mappings;
  },
  getSeparator: function() {
    return _store.separator;
  },
  getSort: function() {
    return _store.sort;
  }
});

AppDispatcher.register(function(action){
  switch(action.actionType){
    case CompanyConstants.SET_CSV_DATA:
      setCsvData(action.csvData);
      CompanyStore.emit(CHANGE_EVENT);
      break;
    case CompanyConstants.SET_SEPARATOR:
      setSeparator(action.separator);
      CompanyStore.emit(CHANGE_EVENT);
      break;
    case CompanyConstants.SET_MAPPING:
      setMapping(action.mappingKey, action.columnIndex);
      CompanyStore.emit(CHANGE_EVENT);
      break;
    case CompanyConstants.SORT_COMPANIES:
      sortCompaniesBy(action.columnIndex);
      CompanyStore.emit(CHANGE_EVENT);
      break;
    case CompanyConstants.FILTER_COMPANIES:
      filterCompaniesBy(action.filterQuery);
      CompanyStore.emit(CHANGE_EVENT);
      break;
    default:
      return true;
  }
});

syncFromCsvData();

export default CompanyStore;