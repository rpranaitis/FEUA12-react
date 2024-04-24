import { Formik, Form, Field, ErrorMessage } from 'formik';
import { registerUser } from '../../api/users';
import { personalFields, addressFields, companyFields } from './fields';
import { hasNestedProperty } from '../../utils/helpers';
import Button from '../Button/Button';
import style from './RegisterForm.module.scss';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const registerInitialValues = {
  username: '',
  name: '',
  email: '',
  address: {
    street: '',
    suite: '',
    city: '',
    zipcode: '',
    geo: {
      lat: '',
      lng: '',
    },
  },
  phone: '',
  website: '',
  company: {
    name: '',
    catchPhrase: '',
    bs: '',
  },
};

const RegisterForm = ({ editingUser }) => {
  const handleSubmit = async (values, { resetForm, setSubmitting }) => {
    try {
      const response = editingUser ? await updateUser(values) : await registerUser(values);
      resetForm();
      setSubmitting(false);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Formik
      initialValues={editingUser ?? registerInitialValues}
      enableReinitialize
      onSubmit={handleSubmit}
      validate={(values) => {
        const errors = {};

        const checkValues = (obj, path = '') => {
          for (const key in obj) {
            const currentPath = path === '' ? key : `${path}.${key}`;
            if (typeof obj[key] === 'object') {
              checkValues(obj[key], currentPath);
            } else {
              if (!obj[key]) {
                errors[currentPath] = 'This field is required';
              }
            }
          }
        };

        checkValues(values);

        return errors;
      }}
    >
      {({ errors, isSubmitting }) => (
        <Form className={style.form}>
          <div className={style.fieldsContainerTitle}>Personal information</div>
          <div className={style.fieldsContainer}>
            {personalFields.map((field, fieldIndex) => (
              <div className={classNames(style.fieldWrapper, style[field['size']])} key={`${field.name}${fieldIndex}`}>
                <Field
                  className={`${style.formField} ${hasNestedProperty(errors, field.name) ? style.errorBorder : ''}`}
                  name={field.name}
                  type={field.type}
                  placeholder={field.placeholder}
                />
                <ErrorMessage name={field.name}>
                  {(error) => <div style={{ color: '#f16b6b', fontSize: '10px', marginBottom: '5px' }}>{error}</div>}
                </ErrorMessage>
              </div>
            ))}
          </div>
          <div className={style.fieldsContainerTitle}>Address</div>
          <div className={style.fieldsContainer}>
            {addressFields.map((field, fieldIndex) => (
              <div className={classNames(style.fieldWrapper, style[field['size']])} key={`${field.name}${fieldIndex}`}>
                <Field
                  className={style.formField}
                  name={field.name}
                  type={field.type}
                  placeholder={field.placeholder}
                />
                <ErrorMessage name={field.name} component="div" />
              </div>
            ))}
          </div>
          <div className={style.fieldsContainerTitle}>Company</div>
          <div className={style.fieldsContainer}>
            {companyFields.map((field, fieldIndex) => (
              <div className={classNames(style.fieldWrapper, style[field['size']])} key={`${field.name}${fieldIndex}`}>
                <Field
                  className={style.formField}
                  name={field.name}
                  type={field.type}
                  placeholder={field.placeholder}
                />
                <ErrorMessage name={field.name} component="div" />
              </div>
            ))}
          </div>
          <Button type="submit" style={{ width: '100%', marginTop: '10px' }} disabled={isSubmitting} color="primary">
            REGISTER
          </Button>
        </Form>
      )}
    </Formik>
  );
};

RegisterForm.propTypes = {
  editingUser: PropTypes.object,
};

export default RegisterForm;
