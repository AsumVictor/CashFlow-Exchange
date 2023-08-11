const currentDate = new Date();

// One week ago
export const convertWeekAgo = () => {
  const oneWeekAgo = new Date(currentDate);
  oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
  return oneWeekAgo.toISOString().split("T")[0];
};

export const convertMonthAgo = () => {
  const oneMonthAgo = new Date(currentDate);
  oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1);
  return oneMonthAgo.toISOString().split("T")[0];
};

export const convertYearAgo = () => {
  const oneYearAgo = new Date(currentDate);
  oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);
  return oneYearAgo.toISOString().split("T")[0];
};
