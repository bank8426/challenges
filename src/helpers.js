/**
 * @method summaryDonations
 * @summary summation total donation
 * @param {array} donations - array of number to be summation
 * @return {number} total - total donation
 */
export const summaryDonations = (donations) => (
  donations.reduce((accumulator, value) => (accumulator + (isNaN(value) ? 0 : value)))
);
