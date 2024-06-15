import { toast } from 'react-toastify';

export const ErrorInfo = () => {
  toast.error('Щось пішло не так, спробуйте перезавантажити сторінку', {
    position: 'top-right',
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'light',
  });
};
