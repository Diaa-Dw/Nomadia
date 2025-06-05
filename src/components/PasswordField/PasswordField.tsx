import { Lock, Visibility, VisibilityOff } from '@mui/icons-material';
import {
  Box,
  IconButton,
  InputAdornment,
  TextField as MUITextField,
  Typography,
} from '@mui/material';
import { useField } from 'formik';
import { useState } from 'react';
import type { PasswordFieldProps } from './';

const PasswordField = ({ name, label = 'Password', ...resetProps }: PasswordFieldProps) => {
  const [field, meta] = useField(name);
  const [showPassword, setShowPassword] = useState(false);

  const hasError = Boolean(meta.touched && meta.error);

  const togglePasswordVisibility = () => {
    setShowPassword(prev => !prev);
  };

  const startAdornmentElement = <InputAdornment position="start">{<Lock />}</InputAdornment>;

  const endAdornmentElement = (
    <InputAdornment position="end">
      <IconButton onClick={togglePasswordVisibility} edge="end">
        {showPassword ? <VisibilityOff /> : <Visibility />}
      </IconButton>
    </InputAdornment>
  );

  const slotProps = {
    input: {
      startAdornment: startAdornmentElement,
      endAdornment: endAdornmentElement,
    },
  };

  const textFieldProps = {
    placeholder: '••••••••',
    ...field,
    ...resetProps,
    type: showPassword ? 'text' : 'password',
    error: hasError,
    helperText: hasError ? meta.error : '',
    slotProps,
  };

  return (
    <Box>
      <Typography variant="body2" fontWeight={600}>
        {label}
      </Typography>
      <MUITextField {...textFieldProps} />
    </Box>
  );
};

export default PasswordField;
