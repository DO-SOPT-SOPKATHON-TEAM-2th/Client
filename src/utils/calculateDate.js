const calculateDate = () => {
  const fulldate = new Date();
  const Month = fulldate.getMonth() + 1;
  const Day = fulldate.getDate();

  return { Month, Day };
};

export default calculateDate;
