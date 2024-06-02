import { useEffect } from 'react';

import Userfront from '@userfront/toolkit/react';
import { Store } from 'react-notifications-component';

export const useNotifications = () => {
  const isUserAuthorized = Userfront.tokens.accessToken;

  useEffect(() => {
    if (Store.getCounter()) return;

    Store.addNotification({
      title: isUserAuthorized
        ? 'Вы успешно вошли в систему'
        : 'Вы не авторизованы',
      type: isUserAuthorized ? 'success' : 'danger',
      insert: 'bottom',
      container: 'bottom-right',
      animationIn: ['animate__animated', 'animate__fadeIn'],
      animationOut: ['animate__animated', 'animate__fadeOut'],
      dismiss: {
        duration: 3000,
        onScreen: true,
      },
    });
  }, [isUserAuthorized]);
};
