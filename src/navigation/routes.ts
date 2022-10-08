import { SignIn, SignUp } from '../screens';

export const routes = [
  {
    name: 'SignIn',
    component: SignIn,
    showHeader: false,
    headerProps: {
      showBackButton: false,
    },
  },
  {
    name: 'SignUp',
    component: SignUp,
    showHeader: false,
    headerProps: {
      showBackButton: false,
    },
  },
];
