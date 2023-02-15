export const isBirthdayMonth = (birthday) => {
  const month = birthday.getMonth();
  const today = new Date();

  return month === today.getMonth();
};
