import { Typography, Button } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import { setCurrentRoute } from "../redux/navigationSlice";

const useStyles = makeStyles(() => ({
  root: {
    width: "100%",
    height: "10%",
    position: "absolute",
    top: "30%",
    textAlign: "center",
  },
}));

export default function PageNotFound() {
  const { root } = useStyles();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const goToHome = () => {
    navigate("/");
    dispatch(setCurrentRoute("home"));
  };

  return (
    <div className={root}>
      <Typography color='error' variant='body1'>
        "Oops! Page not found"
      </Typography>
      <Button color='primary' variant='text' onClick={goToHome}>
        Back to Home
      </Button>
    </div>
  );
}
