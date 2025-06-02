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
}) => {
  const [field, meta] = useField(name);
  const hasError = meta.touched && Boolean(meta.error);

  const startAdornmentElement = startIcon ? (
    <InputAdornment position="start">{startIcon}</InputAdornment>
  ) : undefined;

  const slotProps = {
    input: {
      startAdornment: startAdornmentElement,
    },
  };

  const textFieldProps = {
    ...field,
    ...resetProps,
    placeholder: placeholder,
    error: hasError,
    helperText: hasError ? meta.error : '',
    slotProps,
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
