import SortFilterService from '../services/SortFilterService.js';
import SortTypes from '../constants/SortTypes';
import expect from 'unexpected';

describe('SortFilterService', () => {

  describe('sortMatrixByColumn', () => {

    const unsortedMatrix = [['Google', 'Larry'], ['Apple', 'Steve'], ['Microsoft', 'Bill']];

    it('sorts correctly and defaults to ascending', () => {
      let sortResult = SortFilterService.sortMatrixByColumn(
        unsortedMatrix, 0, null, null);
      expect(sortResult, 'to be defined');

      let sortedMatrix = sortResult.matrix;
      expect(sortedMatrix, 'to have length', 3);
      expect(sortedMatrix[0], 'to equal', ['Apple', 'Steve']);
      expect(sortedMatrix[1], 'to equal', ['Google', 'Larry']);
      expect(sortedMatrix[2], 'to equal', ['Microsoft', 'Bill']);

      expect(sortResult.sortBy, 'to be', 0);
      expect(sortResult.sortDir, 'to be', SortTypes.ASC);
    });

    it('sorts reverses sort direction when already sorting by index', () => {
      let sortResult = SortFilterService.sortMatrixByColumn(
        unsortedMatrix, 1, SortTypes.ASC, 1);
      expect(sortResult, 'to be defined');

      let sortedMatrix = sortResult.matrix;
      expect(sortedMatrix, 'to have length', 3);
      expect(sortedMatrix[0], 'to equal', ['Apple', 'Steve']);
      expect(sortedMatrix[1], 'to equal', ['Google', 'Larry']);
      expect(sortedMatrix[2], 'to equal', ['Microsoft', 'Bill']);

      expect(sortResult.sortBy, 'to be', 1);
      expect(sortResult.sortDir, 'to be', SortTypes.DESC);
    });

  });

});
