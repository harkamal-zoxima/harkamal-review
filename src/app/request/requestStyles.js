import styled from "styled-components";
import Modal from "@material-ui/core/Modal";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import TableContainer from "@material-ui/core/TableContainer";
import { Colors } from "../../common/CommonStyle";

//Request Card Page Styling
export const StyledModal = styled(Modal)`
  height: auto;
  margin-left: 5px;
  margin-top: 10%;

  @media only screen and (min-width: 768px) {
    margin-left: 35%;
    margin-top: 9%;
  }
`;

export const StyledCardContent = styled(CardContent)`
  display: flex;
  color: ${(props) => props.theme.color};
`;

export const StyledTypography = styled(Typography)`
  line-height: 2em !important;
  font-size: 1.3rem !important;
  margin-left: 10px !important;
  font-family: futura_book !important;
  letter-spacing: 0.04em !important;

  @media only screen and (min-width: 768px) {
    font-weight: 600 !important;
    line-height: 1.9em !important;
    font-size: 1.6rem !important;
    margin-left: 20px !important;
  }
`;

//Request Index Page Styling
export const RequestTableContainer = styled(TableContainer)`
  height: 530px;
  margin-top: 20px;
  background-color: ${Colors.AccentColor1} !important;
`;

export const DeliveryTableContainer = styled(TableContainer)`
  height: auto;
  margin-top: 30px;
  background-color: ${Colors.AccentColor1} !important;
  width: 300px !important;

  @media only screen and (min-width: 768px) {
    width: 700px !important;
  }
`;

export const DesktopTableContainer = styled.section`
  display: none;

  @media only screen and (min-width: 768px) {
    width: 40%;
    display: block;
  }
`;

export const RequestContainer = styled.section`
  display: flex;
  height: 100vh;
  width: 100%;

  @media only screen and (min-width: 768px) {
    margin-left: 50px;
  }
`;

export const CardContainer = styled.section`
height: 100vh;
margin: 15px;

@media only screen and (min-width: 768px) {
  width: 40%;
  height: 50%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  margin-left: 5%
  margin-right: 15px;
  margin-top: 0px;
}
`;

//Form Page Styling
export const RequestModalForm = styled.form`
  height: auto;
  display: flex;
  flex-direction: column;
  padding: 34px;

  @media only screen and (min-width: 768px) {
    padding: 56px;
  }
`;

export const FormHeader = styled.section`
  margin-top: -5%;
  margin-bottom: 5%;
  color: #1a7fd6;
  font-family: futura_bold;
  font-size: 17px;
`;

export const FormHeaderDetails = styled.span`
  // margin-left: 30px;
  position: absolute !important;
  right: 77px !important;
  color: black;
  font-family: futura_book;
  font-size: 12px !important;

  @media only screen and (min-width: 768px) {
    font-size: 16px !important;
    right: 122px;
    font-size: 15px !important;
  }
`;

export const FormContent = styled.section`
  display: flex;
  justify-content: center;
`;

export const FormLabelTypography = styled(Typography)`
  width: 150px;
  padding-top: 15px;
  font-family: futura_book !important;
  font-weight: 600 !important;
  font-size: 11.43px !important;

  @media only screen and (min-width: 768px) {
    font-size: 16px !important;
  }
`;

export const FormTextField = styled.input`
  margin: 10px;
  width: 128px;
  height: 30px;
  background-color: ${Colors.AccentColor2};
  border: 1px solid ${Colors.SecondaryColor};
  border-radius: 3px;

  @media only screen and (min-width: 768px) {
    width: 220px;
  }
`;

export const FormTextArea = styled.textarea`
  margin: 10px;
  width: 220px;
  height: 50px;
  background-color: ${Colors.AccentColor2};
  border: 1px solid ${Colors.SecondaryColor};
  border-radius: 3px;

  @media only screen and (min-width: 768px) {
    max-width: 220px;
    min-width: 220px;
    max-height: 66px;
  }
`;

export const FormDropDown = styled.select`
  margin: 10px;
  width: 230px;
  height: 35px;
  background-color: ${Colors.AccentColor2};
  border: 1px solid ${Colors.SecondaryColor};
  border-radius: 3px;
`;

export const FormButtonContainer = styled.section`
  display: flex;
  flex-direction: row;
  margin: 10px;
  justify-content: space-evenly;
`;

export const Button = styled.button`
  width: 100px;
  background-color: ${(props) => props.theme.background};
  border: none;
  height: 25px;
  border-radius: 20px;
  color: white;
  font-size: 15px;
  font-family: ${(props) => props.theme.fontFamily};
  letter-spacing: 1.5px;

  & :hover {
    cursor: pointer;
  }

  @media only screen and (min-width: 768px) {
    background-color: ${(props) => props.theme.background};
    border: none;
    height: 30px;
    border-radius: 20px;
    color: white;
    font-size: 15px;
    font-family: ${(props) => props.theme.fontFamily};
  }
`;
