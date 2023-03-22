export const validateContactForm = (values: { email: string; firstName: string; lastName: string; request: string }) => {
  interface errors {
    [key: string]: any;
  }

  const errors: errors = {};

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
