import { summaryDonations } from '../helpers';

describe('helpers', function() {
  test('`summaryDonations` should calculate donations correctly', function() {
    expect(summaryDonations([1, 2, 3, 4])).toEqual(10);
  });

  test('`summaryDonations` should calculate donations only number correctly', function() {
    expect(summaryDonations([1, 2, 3, 'four' , ''])).toEqual(6);
  });
});