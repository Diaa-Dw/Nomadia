import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  userName: Yup.string()
    .required('Username is required')
    .min(3, 'Username must be at least 3 characters long'),

  password: Yup.string()
    .required('Password is required')
    .min(4, 'Password must be at least 4 characters long'),
});

export default validationSchema;
