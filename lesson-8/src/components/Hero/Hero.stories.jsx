import Hero from './Hero';

export default {
  title: 'Components/Hero',
  component: Hero,
};

export const Primary = {
  args: {
    title: 'Primary title',
    subtitle: 'Primary subtitle',
    type: 'primary',
  },
};

export const Secondary = {
  args: {
    title: 'Secondary title',
    subtitle: 'Secondary subtitle',
    type: 'secondary',
  },
};
