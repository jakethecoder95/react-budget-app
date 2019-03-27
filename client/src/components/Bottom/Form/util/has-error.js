// Returns semantic-ui error class
const hasError = ({ error, submitFailed }) => {
  if (error && submitFailed) {
    return "ui error";
  }
  return "";
};

export default hasError;
