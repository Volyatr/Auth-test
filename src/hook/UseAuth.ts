// Позволит определить авторизован пользователь или нет и под какими данными
import { useAppSelector } from "./redux-hooks";
export function UseAuth() {
  const { email, token, id } = useAppSelector((state) => state.user);
  return {
    isAuth: !!email,
    email,
    token,
    id,
  };
}
