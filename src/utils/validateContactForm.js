export const validateContactForm = (values) => {

  const errors = {};

  if (!values.email) {
    errors.email = "Required";
  }

  if (!values.firstName) {
    errors.firstName = "Required";
  }

  if (!values.lastName) {
    errors.lastName = "Required";
  }

  if (!values.request) {
    errors.request = "Required";
  }

  return errors;
};
