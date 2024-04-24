import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  username: Yup.string().required('Username is required'),
  name: Yup.string().required('Name is required'),
  email: Yup.string().required('Email is required'),
  address: Yup.object().shape({
    suite: Yup.string().required('Suite is required'),
    street: Yup.string().required('Street is required'),
    city: Yup.string().required('City is required'),
    zipcode: Yup.string().required('Zip code is required'),
    geo: Yup.object().shape({
      lat: Yup.string().required('Latitude is required'),
      lng: Yup.string().required('Longitude is required'),
    }),
  }),
  phone: Yup.string().required('Phone is required'),
  website: Yup.string().required('Website is required'),
  company: Yup.object().shape({
    name: Yup.string().required('Name is required'),
    catchPhrase: Yup.string().required('Catch phrase is required'),
    bs: Yup.string().required('Bs is required'),
  }),
});
