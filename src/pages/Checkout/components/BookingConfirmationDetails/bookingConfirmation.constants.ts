import { RowDef } from './BookingConfirmationDetails.types';

export const ROWS: RowDef[] = [
  { label: 'Customer Name', field: 'customerName' },
  { label: 'Hotel Name', field: 'hotelName' },
  { label: 'Room Type', field: 'roomType' },
  { label: 'Room Number', field: 'roomNumber' },
  { label: 'Total Cost', field: 'totalCost' },
  { label: 'Booking Date', field: 'bookingDateTime', isDate: true },
  { label: 'Payment Method', field: 'paymentMethod' },
];
