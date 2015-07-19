'use strict';

import SortTypes from '../constants/SortTypes';

class SortFilterService {
  static sortMatrixByColumn(matrix, newSortIndex, currentDirection, currentSortIndex, keepSortDir) {
    var sortDir = currentDirection;
    var sortBy = newSortIndex;
    if (!keepSortDir && sortBy === currentSortIndex) {
      sortDir = currentDirection === SortTypes.ASC ? SortTypes.DESC : SortTypes.ASC;
    } else {
      sortDir = SortTypes.ASC;
    }

    var matrixCopy = matrix.slice();
    matrixCopy.sort((a, b) => {
      var sortVal = 0;
      if (a[sortBy] > b[sortBy]) {
        sortVal = 1;
      }
      if (a[sortBy] < b[sortBy]) {
        sortVal = -1;
      }

      if (sortDir === SortTypes.DESC) {
        sortVal = sortVal * -1;
      }

      return sortVal;
    });

    return {
      matrix: matrixCopy,
      sortBy: sortBy,
      sortDir: sortDir
    }
  }

  static filterMatrixBy(matrix, filterQuery) {
    var matrixCopy = matrix.slice();
    return filterQuery ? matrixCopy.filter(function(row){
      return row.some(function(value) {
        return value.toLowerCase().indexOf(filterQuery.toLowerCase()) >= 0
      });
    }) : matrixCopy;
  }
}

export default SortFilterService;