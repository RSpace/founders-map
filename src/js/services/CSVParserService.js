'use strict';

class CSVParserService {
  static getArrayFromCSVString(csvString) {
    let columns = csvString.split('\n');
    return columns.map((column) => {
      return column.split(',');
    });
  }
}

export default CSVParserService;