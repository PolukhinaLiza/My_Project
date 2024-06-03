import { useEffect } from 'react';
import Userfront from '@userfront/toolkit/react';

import { sendNotification } from '../utils/sendNotification';

export const useAuthNotifications = () => {
  const isUserAuthorized = Userfront.tokens.accessToken;
  let counter = 0;

  useEffect(() => {
    ++counter;
    if (counter % 2) return;

    sendNotification(
      isUserAuthorized
        ? 'Вы успешно авторизовались в системе'
        : 'Вы не авторизованы',
      isUserAuthorized ? 'success' : 'danger'
    );
  }, [isUserAuthorized]);
};
