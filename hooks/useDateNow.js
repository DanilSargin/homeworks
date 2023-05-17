export const useDateNow = () => {
  const today = new Date();

  const months = [
    "января",
    "февраля",
    "марта",
    "апреля",
    "мая",
    "июня",
    "июля",
    "августа",
    "сентября",
    "октября",
    "ноября",
    "декабря",
  ];

  const day = today.getDate();
  const month = today.getMonth();

  const formattedDate = `${day < 10 ? "0" + day : day} ${months[month]}`;

  const hours = today.getHours();
  const minutes = today.getMinutes();

  const formattedTime = `${hours < 10 ? "0" + hours : hours}:${
    minutes < 10 ? "0" + minutes : minutes
  }`;

  const formattedDateTime = `${formattedDate}, ${today.getFullYear()} | ${formattedTime}`;

  return { formattedDateTime };
};
