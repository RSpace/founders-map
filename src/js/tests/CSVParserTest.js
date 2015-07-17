import CSVParserService from '../services/CSVParserService.js';
import expect from 'unexpected';

describe('CSVParserService', () => {

  describe('getArrayFromCSVString', () => {

    it('parses a comma-separated string correctly', () => {
      const csvString = "1,Google,Larry Page & Sergey Brin,Mountain View,USA,CA 94043,1600 Amphitheatre Pkwy,http://interviewsummary.com/wp-content/uploads/2013/07/larry-page-and-sergey-brin-of-google-620x400.jpg,http://google.com,37.457674,-122.163452\n2,Apple,Steve Jobs & Steve Wozniak,Cupertino,USA,CA 95014,1 Infinite Loop,http://i.dailymail.co.uk/i/pix/2013/02/08/article-2275512-172E13BB000005DC-732_634x505.jpg,http://apple.com,37.3403188,-122.0581469\n3,Microsoft,Bill Gates,Redmond,USA,WA 98052-7329,One Microsoft Way,http://postdefiance.com/wp-content/uploads/2013/02/bill-gates-microsoft-young.jpg,http://microsoft.com,37.472189,-122.190191";
      let array = CSVParserService.getArrayFromCSVString(csvString);

      expect(array, 'to be defined');
      expect(array, 'to have length', 3);
      expect(array[0], 'to equal', ['1', 'Google', 'Larry Page & Sergey Brin', 'Mountain View', 'USA', 'CA 94043', '1600 Amphitheatre Pkwy', 'http://interviewsummary.com/wp-content/uploads/2013/07/larry-page-and-sergey-brin-of-google-620x400.jpg', 'http://google.com', '37.457674', '-122.163452']);
    });

    it('parses a semi-colon string correctly', () => {
      const csvString = "1;ham;bum\n2;gram;num";
      let array = CSVParserService.getArrayFromCSVString(csvString, ';');

      expect(array, 'to equal', [['1', 'ham', 'bum'], ['2', 'gram', 'num']]);
    });

  });

});
