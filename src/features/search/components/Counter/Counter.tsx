// src/components/form/fields/FormikCounterField.tsx

import { SearchFormPayload } from '@/types';
import { Grid, Typography } from '@mui/material';
import { useFormikContext } from 'formik';
import { Container, CounterButton, CounterContainer, ReadOnlyCounterField } from './Counter.style';
import { CounterProps } from './Counter.type';

const Counter = ({
  name,
  displayName,
  preventDecrementOn = 0,
  preventIncrementOn,
}: CounterProps) => {
  const { setFieldValue, values } = useFormikContext<SearchFormPayload>();

  const onIncrement = () => {
    setFieldValue(name as string, (values[name] as number) + 1);
  };

  const onDecrement = () => {
    setFieldValue(name as string, (values[name] as number) - 1);
  };

  const incrementDisabled = preventIncrementOn === values[name];
  const decrementDisabled = preventDecrementOn === values[name];

  return (
    <Container direction="row" alignItems="center" justifyContent="space-between">
      <Grid>
        <Typography variant="subtitle2" textTransform="capitalize">
          {displayName ?? (name as string)}
        </Typography>
      </Grid>

      <Grid>
        <CounterContainer>
          <CounterButton onClick={onDecrement} disabled={decrementDisabled}>
            -
          </CounterButton>

          <ReadOnlyCounterField name={name} value={values[name]} aria-readonly />

          <CounterButton onClick={onIncrement} disabled={incrementDisabled}>
            +
          </CounterButton>
        </CounterContainer>
      </Grid>
    </Container>
  );
};

export default Counter;
