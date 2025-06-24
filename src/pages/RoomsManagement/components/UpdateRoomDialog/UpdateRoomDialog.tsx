import useUpdateRoomForm from '../../hooks/useUpdateRoomForm';
import { UpdateRoomRequest } from '../../types';
import { RoomDialog } from '../RoomDialog';
import { UpdateRoomDialogProps } from './UpdateRoomDialog.types';

const UpdateRoomDialog = ({ roomToUodate, open, onClose }: UpdateRoomDialogProps) => {
  const { formikProps, isUpdating } = useUpdateRoomForm(roomToUodate);

  return (
    <RoomDialog<UpdateRoomRequest>
      open={open}
      onClose={onClose}
      title={'Update Room'}
      formikProps={formikProps}
      isPending={isUpdating}
      actionText="Update"
    />
  );
};

export default UpdateRoomDialog;
