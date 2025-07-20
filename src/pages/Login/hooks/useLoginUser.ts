import { login } from '@/features';
import { useAppDispatch } from '@/store';
import { parseJwtToLoginPayload, setAuthToken, showErrorToast } from '@/utils';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../API';

const useLoginUser = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { mutate: loginMutate, isPending } = useMutation({
    mutationFn: loginUser,
    onSuccess: res => {
      const token = res.authentication;

      const payload = parseJwtToLoginPayload(token);

      if (!payload) {
        return;
      }

      setAuthToken(token, payload.expirationDate);

      dispatch(login(payload));

      navigate('/');
    },
    onError: () => {
      showErrorToast(`Invalid Credentials`);
      return;
    },
  });

  return { loginMutate, isPending };
};

export default useLoginUser;
