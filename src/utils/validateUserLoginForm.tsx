export const validateUserLoginForm = ({ username, password }: { username: string; password: string }) => {
  interface errors {
    [key: string]: any;
  }

  const errors: errors = {};

  if (!username) {
    errors.username = "Required";
  }

  if (!password) {
    errors.password = "Required";
  }

  return errors;
};
