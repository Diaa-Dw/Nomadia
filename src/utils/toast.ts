import toast from 'react-hot-toast';

export const showErrorToast = (message: string) => {
  toast.error(message || 'Somthing went wrong');
};

export const showSuccessToast = (message: string) => {
  toast.success(message);
};


