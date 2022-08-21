import { useSelector } from "react-redux";

export default function RoutesContainer() {
  const { roles, classrooms, jwt } = useSelector(state => state.user);
}
