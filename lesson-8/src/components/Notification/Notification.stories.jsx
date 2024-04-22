import Notification from './Notification';

export default {
  title: 'Components/Notification',
  component: Notification,
};

export const Primary = {
  args: {
    children: 'This is primary notification!',
    type: 'primary',
  },
};

export const Success = {
  args: {
    children: 'This is success notification!',
    type: 'success',
  },
};

export const Error = {
  args: {
    children: 'This is error notification!',
    type: 'error',
  },
};
