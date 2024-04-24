import { Formik, Form, Field, ErrorMessage } from 'formik';
import { registerUser, updateUser } from '../../api/users';
import { personalFields, addressFields, companyFields } from './fields';
import { registerInitialValues } from './initialValues';
import { validationSchema } from './validationSchema';
import { hasNestedProperty } from '../../utils/helpers';
import Button from '../Button/Button';
import style from './RegisterForm.module.scss';
import classNames from 'classnames';
import PropTypes from 'prop-types';

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
      validationSchema={validationSchema}
    >
      {({ isSubmitting }) => (
        <Form className={style.form}>
          <div className={style.fieldsContainerTitle}>Personal information</div>
          <div className={style.fieldsContainer}>
            {personalFields.map((field, fieldIndex) => (
              <div className={classNames(style.fieldWrapper, style[field['size']])} key={`${field.name}${fieldIndex}`}>
                <Field
                  className={style.formField}
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
                <ErrorMessage name={field.name}>
                  {(error) => <div style={{ color: '#f16b6b', fontSize: '10px', marginBottom: '5px' }}>{error}</div>}
                </ErrorMessage>
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
                <ErrorMessage name={field.name}>
                  {(error) => <div style={{ color: '#f16b6b', fontSize: '10px', marginBottom: '5px' }}>{error}</div>}
                </ErrorMessage>
              </div>
            ))}
          </div>
          <Button type="submit" style={{ width: '100%', marginTop: '10px' }} disabled={isSubmitting} color="primary">
            {editingUser ? 'EDIT' : 'REGISTER'}
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
