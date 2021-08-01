import React, { useState } from "react";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Paper from "@material-ui/core/Paper";
import CustomForm from "../../common/components/form";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { makeStyles } from "@material-ui/core/styles";
import RequestCard from "./requestCard";
import IconButton from "@material-ui/core/IconButton";
import * as MdIcons from "react-icons/md";
import * as FaIcons from "react-icons/fa";
import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import {
  MainContainer,
  HeaderContainer,
  RouteTopicContainer,
  BreadcrumbLink,
  PageTopic,
  Colors,
} from "../../common/CommonStyle";
import {
  RequestTableContainer,
  DesktopTableContainer,
  RequestContainer,
  CardContainer,
  DeliveryTableContainer,
  StyledModal,
} from "./requestStyles";

const dataNewAddress = {
  inputData: [
    {
      label: "Customer Name",
      required: true,
      type: "textField",
    },
    {
      label: "City Name",
      required: true,
      type: "textField",
    },
    {
      label: "Postal Code",
      required: true,
      type: "textField",
    },
    {
      label: "Address",
      required: true,
      type: "textArea",
    },
    {
      label: "Select State",
      required: true,
      type: "dropDown",
      dropDownList: [
        "Punjab",
        "Haryana",
        "Uttar Pradesh",
        "Uttrakhand",
        "Rajasthan",
        "Sikkim",
        "Madhya Pradesh",
        "Maharashtra",
        "Kerala",
        "Karnataka",
        "Tamil Nadu",
        "West Bengal",
      ],
    },
    {
      label: "Select Address",
      required: true,
      type: "dropDown",
      dropDownList: ["a", "b", "c", "d"],
    },
  ],
  buttonData: [
    {
      label: "RESET",
      type: "button",
    },
    {
      label: "SUBMIT",
      type: "button",
    },
  ],
};

const dataContact = {
  inputData: [
    {
      label: "Enter Name",
      required: true,
      type: "textField",
    },
    {
      label: "Enter Mobile No.",
      required: true,
      type: "textField",
    },
    {
      label: "",
      required: false,
      type: "textField",
      placeholder: "Alternate No.",
    },
    {
      label: "Enter Phone No.",
      required: true,
      type: "textField",
    },
    {
      label: "Enter Email ID",
      required: true,
      type: "textField",
    },
  ],
  buttonData: [
    {
      label: "RESET",
      type: "button",
    },
    {
      label: "SUBMIT",
      type: "button",
    },
  ],
};

const dataDeliveryAddress = {
  header: {
    title: "EDIT DETAILS",
    details: "C0490-01",
  },
  inputData: [
    {
      label: "Name",
      required: true,
      type: "textField",
    },
    {
      label: "City",
      required: true,
      type: "textField",
    },
    {
      label: "Postal Code",
      required: true,
      type: "textField",
    },
    {
      label: "Address",
      required: true,
      type: "textArea",
    },
    {
      label: "Contact Person",
      required: true,
      type: "textField",
    },
    {
      label: "GST Number",
      required: true,
      type: "textField",
    },
  ],
  buttonData: [
    {
      label: "RESET",
      type: "button",
    },
    {
      label: "SUBMIT",
      type: "button",
    },
  ],
};

const useStyles = makeStyles((theme) => ({
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
      margin: 30,
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
    outline: "none",
    width: 310,
    boxShadow: "rgb(0 0 0 / 34%) 2px 2px 6px",
    borderRadius: 3,

    "@media only screen and (min-width: 768px)": {
      width: "auto",
      padding: 10,
      height: "auto",
    },
  },
}));

function Request() {
  const themeContext = useContext(ThemeContext);
  const [deliveryModalOpen, setDeliveryModalOpen] = useState(false);

  const handleDeliveryModal = () => {
    setDeliveryModalOpen(true);
  };

  const handleClose = () => {
    setDeliveryModalOpen(false);
  };

  const DeliveryTable = () => {
    const classes = useStyles();

    return (
      <>
        <DeliveryTableContainer component={Paper}>
          <Table aria-label="customized table">
            <TableHead>
              <TableRow>
                <TableCell>
                  <b>Code</b>
                </TableCell>
                <TableCell>
                  <b>Address</b>
                </TableCell>
                <TableCell>
                  <b>City</b>
                </TableCell>
                <TableCell>
                  <b>Contact Person</b>
                </TableCell>
                <TableCell>
                  <b>Pin</b>
                </TableCell>
                <TableCell>
                  <b>GSTN</b>
                </TableCell>
                <TableCell>
                  <b>Action</b>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow key="Name">
                <TableCell>C0490-01</TableCell>
                <TableCell>
                  Plot No. 88 C and D, Government Industrial Estate
                </TableCell>
                <TableCell>Mumbai</TableCell>
                <TableCell>Mr. Harish - 09876564743</TableCell>
                <TableCell>400067</TableCell>
                <TableCell>CK-102AN48E9</TableCell>
                <TableCell>
                  <IconButton
                    style={{ color: Colors.PrimaryColor }}
                    onClick={handleDeliveryModal}
                  >
                    <FaIcons.FaEdit />
                  </IconButton>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </DeliveryTableContainer>
        <StyledModal open={deliveryModalOpen} onClose={handleClose}>
          <div className={classes.paper}>
            <IconButton
              onClick={handleClose}
              style={{ position: "absolute", right: -5, top: -5 }}
            >
              <MdIcons.MdCancel />
            </IconButton>
            <CustomForm formContent={dataDeliveryAddress} />
          </div>
        </StyledModal>
      </>
    );
  };

  return (
    <MainContainer style={{ overflowX: "hidden" }}>
      <HeaderContainer>
        <RouteTopicContainer>
        <Breadcrumbs style={{color: themeContext.breadcrumbActiveColor}}>
            <BreadcrumbLink
              color="inherit"
              custom={{
                color: themeContext.breadcrumbActiveColor,
                fontFamily: themeContext.fontFamily,
                fontSize: "15px"
              }}
            >
              Request
            </BreadcrumbLink>
          </Breadcrumbs>
          <PageTopic>REQUEST CHANGE DETAILS</PageTopic>
        </RouteTopicContainer>
      </HeaderContainer>

      {/* PageContent */}
      <RequestContainer>
        {/* Left page Content always visible*/}
        <CardContainer>
          <RequestCard
            content="NEW ADDRESS"
            icon={<FaIcons.FaAddressCard style={{ fontSize: 45 }} />}
            body={<CustomForm formContent={dataNewAddress} />}
          />

          <RequestCard
            content="CONTACT"
            icon={<MdIcons.MdPermContactCalendar style={{ fontSize: 45 }} />}
            body={<CustomForm formContent={dataContact} />}
          />

          <RequestCard
            content="DELIVERY ADDRESS"
            icon={<MdIcons.MdShoppingCart style={{ fontSize: 45 }} />}
            // body={<CustomForm formContent={dataDeliveryAddress} />}
            body={<DeliveryTable />}
          />
        </CardContainer>

        {/* Right page Content only visible with screen size greater than 768px */}
        <DesktopTableContainer>
          <RequestTableContainer component={Paper}>
            <Table aria-label="customized table">
              <TableHead>
                <TableRow>
                  <TableCell
                    colSpan={8}
                    align="center"
                    style={{ color: "#1a7fd6", fontFamily: "futura_bold" }}
                  >
                    {" "}
                    <u>Current Pending Approvals</u>{" "}
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell>Code</TableCell>
                  <TableCell>Address</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow key="Name">
                  <TableCell>Mr. Harish</TableCell>
                  <TableCell>C0490-01</TableCell>
                  <TableCell>
                    Plot No. 88 C and D, Government Industrial Estate
                  </TableCell>
                </TableRow>
                <TableRow key="Name">
                  <TableCell>Mr. Harish</TableCell>
                  <TableCell>C0490-01</TableCell>
                  <TableCell>
                    Plot No. 88 C and D, Government Industrial Estate
                  </TableCell>
                </TableRow>
                <TableRow key="Name">
                  <TableCell>Mr. Harish</TableCell>
                  <TableCell>C0490-01</TableCell>
                  <TableCell>
                    Plot No. 88 C and D, Government Industrial Estate
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </RequestTableContainer>
        </DesktopTableContainer>
      </RequestContainer>
    </MainContainer>
  );
}

export default Request;
