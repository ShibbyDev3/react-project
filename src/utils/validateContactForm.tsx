export const validateContactForm = (values: any) => {
    const errors = {
        email:'',
        firstName:'',
        lastName:'',
        request:''
    };
     
    if(!values.email) {
        errors.email = 'Required';
    }

    if(!values.firstName) {
        errors.firstName = 'Required';
    }

    if(!values.lastName) {
        errors.lastName = 'Required';
    }

    if(!values.request) {
        errors.request = 'Required';
    }

    return errors
}