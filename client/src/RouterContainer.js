// import { CircularProgress } from "@material-ui/core";
// import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
// import { makeStyles } from "@material-ui/core/styles";
// import { useDispatch } from "react-redux";
import PageNotFound from "./pages/PageNotFound";
import Home from "./pages/Home";

// const useStyles = makeStyles(() => ({
//   contentArea: {
//     height: "100%",
//     display: "flex",
//   },
// }));

// function ProtectedRoute({ element: { type }, ...rest }) {
//TODO: We want to accept users to our Protected route just if they have all these information
// const { account, jwt } = useSelector(({ user }) => user);
// }

export default function RoutesContainer() {
  // const { contentArea } = useStyles();
  // const dispatch = useDispatch();

  //TODO: We want to accept users to our Protected route just if they have all these information
  // const { roles, classrooms, jwt } = useSelector(state => state.user);

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/pageNotFound' element={<PageNotFound />} />
    </Routes>
  );
}
