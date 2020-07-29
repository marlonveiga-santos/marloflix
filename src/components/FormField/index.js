import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import "./styles.css";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "20ch",
      color: "white",
    },
  },
}));

const CustomInput = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "var(--white)",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "var(--white)",
      },
      "&:hover fieldset": {
        borderColor: "var(--blackLighter)",
      },
      "&:hover": {
        color: "var(--blackLighter)",
      },
      "&.Mui-focused fieldset": {
        borderColor: "var(--white)",
        color: "var(--white)",
      },
      "&.MuiInput.input": {
        color: "var(--white)",
      },
    },
  },
})(TextField);

function FormField({ label, type, name, value, onChange }) {
  const classes = useStyles();

  const renderSwitch = (param) => {
    switch (param) {
      case "textarea":
        return (
          <div>
            <CustomInput
              multiline
              className={classes.root}
              label={label}
              value={value}
              name={name}
              onChange={onChange}
              variant="outlined"
            />
          </div>
        );
      case "color":
        return (
          <div>
            <label>
              {label}:&nbsp;
              <input
                type={type}
                value={value}
                name={name}
                onChange={onChange}
              />
            </label>
          </div>
        );
      default:
        return (
          <div>
            <CustomInput
              className={classes.root}
              label={label}
              value={value}
              name={name}
              onChange={onChange}
              variant="outlined"
            />
          </div>
        );
    }
  };

  return renderSwitch(type);
}

export default FormField;
