import { Store } from 'react-notifications-component';

export const sendNotification = (title, type, display = true) => {
  if (!display) return;

  Store.addNotification({
    title,
    type,
    insert: 'bottom',
    container: 'bottom-right',
    animationIn: ['animate__animated', 'animate__fadeIn'],
    animationOut: ['animate__animated', 'animate__fadeOut'],
    dismiss: {
      duration: 3000,
      onScreen: true,
    },
  });
};
