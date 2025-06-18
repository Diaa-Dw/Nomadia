import { FormHelperText, Typography } from '@mui/material';
import { useField, useFormikContext } from 'formik';
import { StyledPhoneInput } from './PhoneInputField.styles';
import { PhoneInputFieldProps } from './PhoneInputField.types';

const PhoneInputField = ({ name, label }: PhoneInputFieldProps) => {
  const { setFieldValue, setFieldTouched } = useFormikContext();
  const [field, meta] = useField(name);

  const hasError = Boolean(meta.touched && meta.error);

  return (
    <div>
      {label && (
        <Typography variant="body2" fontWeight={600}>
          {label}
        </Typography>
      )}
      <StyledPhoneInput
        country={'ps'}
        value={field.value}
        onChange={val => setFieldValue(name, val)}
        onBlur={() => setFieldTouched(name, true)}
        inputStyle={{
          width: '100%',
          borderColor: hasError ? '#d32f2f' : undefined,
        }}
      />
      {hasError && <FormHelperText error>{meta.error}</FormHelperText>}
    </div>
  );
};

export default PhoneInputField;
