import { formatDate } from '@/utils';
import { Table, TableBody, TableRow, Typography } from '@mui/material';
import { ROWS } from './bookingConfirmation.constants';
import {
  Container,
  ContentContainer,
  LabelCell,
  PrintButton,
  StyledTableContainer,
  ValueCell,
} from './BookingConfirmationDetails.styles';
import { BookingConfirmationDetailsProps } from './BookingConfirmationDetails.types';

const BookingConfirmationDetails = ({ details }: BookingConfirmationDetailsProps) => {
  return (
    <Container maxWidth={'xl'}>
      <ContentContainer>
        <Typography component="h1" variant="h5" fontWeight={600}>
          Confirmation Details
        </Typography>

        <StyledTableContainer>
          <Table>
            <TableBody>
              {ROWS.map(({ label, field, isDate }) => {
                let value = details[field as keyof typeof details];
                if (isDate && value) {
                  value = formatDate(new Date(value as string));
                }
                return (
                  <TableRow key={label}>
                    <LabelCell component="th">{label}</LabelCell>
                    <ValueCell>{value}</ValueCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </StyledTableContainer>

        <PrintButton variant="contained" disableElevation onClick={() => window.print()}>
          Print Details
        </PrintButton>
      </ContentContainer>
    </Container>
  );
};

export default BookingConfirmationDetails;
