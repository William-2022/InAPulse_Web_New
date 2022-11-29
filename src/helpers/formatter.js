import Moment from "moment";

export const formatPhone = (phone) =>
  phone.slice(0, 2) +
  " (" +
  phone.slice(2, 5) +
  ") " +
  phone.slice(5, 8) +
  "-" +
  phone.slice(8);

export const dateTimeFormat = (date) => {
  Moment.locale("en");
  return Moment(date).format("MMM DD, h:mm A ");
};
