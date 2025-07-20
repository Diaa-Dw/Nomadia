import toast, { ToastOptions } from 'react-hot-toast';

const defaultOptions: ToastOptions = {
  duration: 4000,
  position: 'top-center',
  style: {
    borderRadius: '12px',
    padding: '8px 12px',
    fontSize: '14px',
    fontWeight: 500,
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
    border: '1px solid',
  },
};

const errorOptions: ToastOptions = {
  ...defaultOptions,
  style: {
    ...defaultOptions.style,
    background: '#fef2f2',
    color: '#dc2626',
    borderColor: '#fecaca',
  },
  iconTheme: {
    primary: '#dc2626',
    secondary: '#fef2f2',
  },
};

const successOptions: ToastOptions = {
  ...defaultOptions,
  style: {
    ...defaultOptions.style,
    background: '#f0fdf4',
    color: '#16a34a',
    borderColor: '#bbf7d0',
  },
  iconTheme: {
    primary: '#16a34a',
    secondary: '#f0fdf4',
  },
};

export const showErrorToast = (message: string, options?: ToastOptions) => {
  toast.error(message || 'Something went wrong', {
    ...errorOptions,
    ...options,
  });
};

export const showSuccessToast = (message: string, options?: ToastOptions) => {
  toast.success(message, {
    ...successOptions,
    ...options,
  });
};
