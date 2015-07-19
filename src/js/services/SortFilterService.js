'use strict';

import SortTypes from '../constants/SortTypes';

class SortFilterService {
  static sortMatrixByColumn(matrix, newSortIndex, currentDirection, currentSortIndex) {
    var sortDir = currentDirection;
    var sortBy = newSortIndex;
    if (sortBy === currentSortIndex) {
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
}

export default SortFilterService;