import { Add } from '@mui/icons-material';
import useAddRoomForm from '../../hooks/useAddRoomForm';
import { RoomDialog } from '../RoomDialog';
import { AddRoomDialogProps } from './AddRoomDialog.types';
import { CreateRoomRequest } from '../../types';

const AddRoomDialog = ({ open, onClose, hotelId }: AddRoomDialogProps) => {
  const { formikProps, isAdding } = useAddRoomForm(hotelId);

  return (
    <RoomDialog<CreateRoomRequest>
      open={open}
      onClose={onClose}
      title={'Add Room'}
      formikProps={formikProps}
      isPending={isAdding}
      actionText="Add"
      actionIcon={<Add />}
    />
  );
};

export default AddRoomDialog;
