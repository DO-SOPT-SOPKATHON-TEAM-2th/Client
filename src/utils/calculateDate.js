const calculateDate = () => {
  const fulldate = new Date();
  const Month = fulldate.getMonth() + 1;
  const Day = fulldate.getDate() + 1;

  return { Month, Day };
};

export default calculateDate;
