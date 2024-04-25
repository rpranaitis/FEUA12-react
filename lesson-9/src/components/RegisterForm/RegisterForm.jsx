import { Formik, Form, Field, ErrorMessage } from 'formik';
import { registerUser, updateUser } from '../../api/users';
import { fields } from './fields';
import { registerInitialValues } from './initialValues';
import { validationSchema } from './validationSchema';
import Button from '../Button/Button';
import style from './RegisterForm.module.scss';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Error from '../Error/Error';

const RegisterForm = ({ editingUser, setEditingUser }) => {
  const handleSubmit = async (values, { resetForm, setSubmitting }) => {
    try {
      const response = editingUser ? await updateUser(values) : await registerUser(values);
      setEditingUser(null);
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
          {fields.map((item, itemIndex) => {
            return (
              <div key={itemIndex}>
                <div className={style.fieldsContainerTitle}>{item.name}</div>
                <div className={style.fieldsContainer}>
                  {item.fields.map((field, fieldIndex) => (
                    <div
                      className={classNames(style.fieldWrapper, style[field['size']])}
                      key={`${field.name}${fieldIndex}`}
                    >
                      <Field
                        className={style.formField}
                        name={field.name}
                        type={field.type}
                        placeholder={field.placeholder}
                      />
                      <ErrorMessage name={field.name} component={Error} />
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
          <Button type="submit" style={{ width: '100%', marginTop: '10px' }} disabled={isSubmitting} color="primary">
            {editingUser ? 'EDIT' : 'REGISTER'}
          </Button>
        </Form>
      )}
    </Formik>
  );
};

RegisterForm.propTypes = {
  editingUser: PropTypes.shape({
    username: PropTypes.string,
    name: PropTypes.string,
    email: PropTypes.string,
    address: PropTypes.shape({
      street: PropTypes.string,
      suite: PropTypes.string,
      city: PropTypes.string,
      zipcode: PropTypes.string,
      geo: PropTypes.shape({
        lat: PropTypes.string,
        lng: PropTypes.string,
      }),
    }),
    phone: PropTypes.string,
    website: PropTypes.string,
    company: PropTypes.shape({
      name: PropTypes.string,
      catchPhrase: PropTypes.string,
      bs: PropTypes.string,
    }),
  }),
  setEditingUser: PropTypes.func,
};

export default RegisterForm;
