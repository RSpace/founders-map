'use strict';

class CSVParserService {
  static getArrayFromCSVString(csvString, separator = ',') {
    let columns = csvString.split('\n');
    return columns.map((column) => {
      return column.split(separator);
    });
  }
}

export default CSVParserService;