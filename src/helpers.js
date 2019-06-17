export const summaryDonations = (danations) => (
  danations.reduce((accumulator, value) => (accumulator + (isNaN(value) ? 0 : value)))
);
