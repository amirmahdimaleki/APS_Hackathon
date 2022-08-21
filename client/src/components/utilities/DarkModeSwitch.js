import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";

const useStyles = makeStyles(theme => ({
  root: {
    width: 42,
    height: 26,
    padding: 0,
    margin: theme.spacing(1),
    overflow: "unset",
  },
  switchBase: {
    padding: 1,
    "&$checked": {
      transform: "translateX(16px)",
      color: "#CFD2CF",
      "& + $track": {
        backgroundColor: "#2B4865",
        opacity: 1,
        border: "none",
      },
    },
    "&$focusVisible $thumb": {
      color: "#2B4865",
      border: "6px solid #fff",
    },
  },
  thumb: {
    width: 24,
    height: 24,
    color: "#CFD2CF",
  },
  track: {
    borderRadius: 26 / 2,
    border: `1px solid ${theme.palette.grey[400]}`,
    backgroundColor: "#F5E8C7",
    opacity: 1,
    transition: theme.transitions.create(["background-color", "border"]),
  },
  checked: {},
  focusVisible: {},
}));

export default function CustomizedSwitches({ mode, onChange }) {
  const [state, setState] = useState(false);
  const [label, setLabel] = useState("Dark Mode");
  const { root, switchBase, thumb, track, focusVisible } = useStyles();

  const handleChange = () => {
    onChange();
    setState(mode === "light" ? true : false);
    setLabel(mode === "light" ? "Light Mode" : "Dark Mode");
  };

  return (
    <FormGroup>
      <FormControlLabel
        control={
          <Switch
            focusVisibleClassName={focusVisible}
            disableRipple
            classes={{
              root: root,
              switchBase: switchBase,
              thumb: thumb,
              track: track,
            }}
            checked={state}
          />
        }
        onChange={handleChange}
        label={label}
      />
    </FormGroup>
  );
}
