import { fetchUsers } from '../../api/users';
import { useEffect, useState } from 'react';
import { CiEdit } from 'react-icons/ci';
import style from './UsersView.module.scss';
import Button from '../../components/Button/Button';

const UsersView = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchUsers();
        setUsers(response);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const fields = ['Username', 'Name', 'Email', 'Address', 'Phone', 'Website', 'Company'];

  const getUserFieldValue = (user, field) => {
    const lowercasedField = field.toLowerCase();

    switch (field) {
      case 'Address':
        return `${user[lowercasedField]['suite']} ${user[lowercasedField]['street']}, ${user[lowercasedField]['zipcode']}, ${user[lowercasedField]['city']}`;
      case 'Company':
        return user[lowercasedField]['name'];
      default:
        return user[lowercasedField];
    }
  };

  return (
    <div className={style.wrapper}>
      {users.map((user) => (
        <div className={style.user} key={user.id}>
          <div className={style.details}>
            {fields.map((field, fieldIndex) => (
              <div className={style.detail} key={fieldIndex}>
                <div className={style.fieldKey}>{field}:</div>
                <div>{getUserFieldValue(user, field)}</div>
              </div>
            ))}
          </div>
          <div className={style.edition}>
            <Button color="secondary">
              <CiEdit />
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UsersView;
