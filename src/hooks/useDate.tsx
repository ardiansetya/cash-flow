export const useDate = () => {
  const greeting = new Date().getHours();

  if (greeting > 12) {
    const text = "Good Afternoon";
    return text;
  } else if (greeting < 12) {
    const text = "Good Morning";
    return text;
  } else if (greeting > 18) {
    const text = "Good Evening";
    return text;
  }
};
