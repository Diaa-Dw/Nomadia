import { useField } from 'formik';
import { Box, InputAdornment, TextField as MuiTextField, Typography } from '@mui/material';
import type { TextFieldProps } from './';
import type { FC } from 'react';

const TextField: FC<TextFieldProps> = ({
  name,
  label,
  startIcon,
  placeholder = '',
  ...resetProps
}: TextFieldProps) => {
  const [field, meta] = useField(name);
  const hasError = meta.touched && Boolean(meta.error);

  const startAdornmentElement = startIcon ? (
    <InputAdornment position="start">{startIcon}</InputAdornment>
  ) : undefined;

  const textFieldProps = {
    ...field,
    placeholder,
    error: hasError,
    helperText: hasError ? meta.error : '',
    ...resetProps,
    InputProps: {
      startAdornment: startAdornmentElement,
      ...(resetProps.InputProps || {}),
    },
  };

  return (
    <Box>
      {label && (
        <Typography variant="body2" fontWeight={600}>
          {label}
        </Typography>
      )}
      <MuiTextField {...textFieldProps} fullWidth />
    </Box>
  );
};

export default TextField;
