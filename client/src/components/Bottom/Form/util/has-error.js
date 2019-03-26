// Returns semantic-ui error class
const hasError = ({ error, touched }) => {
  if (touched && error) {
    return "ui error";
  }
  return "";
};

export default hasError;
