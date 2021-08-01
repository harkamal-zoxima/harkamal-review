import React, { useState, useRef, useEffect } from "react";
import anime from "animejs";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import * as MdIcons from "react-icons/md";
import { Colors } from "../../common/CommonStyle";
import {
  StyledModal,
  StyledCardContent,
  StyledTypography,
} from "./requestStyles";

const useStyles = makeStyles(() => ({
  root: {
    minWidth: 150,
    marginBottom: 20,
    maxWidth: "100%",
    background: "#1a7fd6",
    display: "flex",
    alignItems: "center",

    "@media only screen and (min-width: 768px)": {
      width: "100%",
      height: "150px",
      margin: 20,
    },
  },

  activeRoot: {
    minWidth: 150,
    marginBottom: 20,
    maxWidth: "100%",
    background: "#1AD6C0",
    display: "flex",
    alignItems: "center",
    opacity: 1,

    "@media only screen and (min-width: 768px)": {
      width: "100%",
      height: "150px",
      margin: 30,
    },
  },

  paper: {
    position: "absolute",
    backgroundColor: Colors.AccentColor1,
    border: 0,
    boxShadow: "rgb(0 0 0 / 34%) 2px 2px 6px",
    borderRadius: 3,
    outline: "none",
    width: 310,

    "@media only screen and (min-width: 768px)": {
      width: "auto",
      padding: 10,
      height: 500,
    },
  },
}));

export default function RequestCard(props) {
  const modalRef = useRef();
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(false);

  const clickAnimation = (target) =>
    anime({
      targets: target,
      opacity: [0, 1],
      easing: "linear",
      duration: 1000,
    });

  const toggleModal = () => {
    setActive(!active);
    setOpen(!open);
  };

  useEffect(() => {
    clickAnimation(modalRef.current);
  }, [open, active]);

  return (
    <>
      <Card className={active ? classes.activeRoot : classes.root}>
        <CardActions onClick={toggleModal} style={{ width: "100%" }}>
          <StyledCardContent
            theme={{
              color: Colors.AccentColor2,
            }}
          >
            <section>{props.icon}</section>
            <StyledTypography variant="h5" component="h2">
              {props.content}
            </StyledTypography>
          </StyledCardContent>
        </CardActions>
      </Card>

      <StyledModal ref={modalRef} open={open} onClose={toggleModal}>
        <div className={classes.paper}>
          <IconButton
            onClick={toggleModal}
            style={{ position: "absolute", right: -5, top: -5 }}
          >
            <MdIcons.MdCancel />
          </IconButton>
          {props.body}
        </div>
      </StyledModal>
    </>
  );
}
