import styled from "styled-components";
import { Colors } from "../../../common/CommonStyle";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";




//NewPrimaryOrder.js Styling
export const PlaceOrderContainer = styled.section`
  width: calc(100% - 35px);
  margin: 0px;

  @media only screen and (min-width: 768px) {
    width: calc(100% - 75px);
    margin-left: 30px;
    margin-bottom: 25px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }
`;

//NewOrderCard.js Stying
export const CardContainer = styled(Card)`
  width: 275px;
  margin: 25px;
  border-radius: 15px !important;
  box-shadow: ${(props) => props.theme.boxShadow} !important;
  background-color: ${(props) => props.theme.background} !important;
`;

export const CardImageContainer = styled.section`
  width: 150px;
  height: 150px;
  margin-left: 45px;
  margin-top: -10px;
  margin-bottom: 15px;
  box-shadow: rgb(0 0 0 / 25%) 1px 2px 6px !important;
`;

export const ProductImage = styled.img`
  width: 150px;
  height: 150px;
`;

export const ProductTitle = styled(Typography)`
  text-align: center;
  font-family: futura_book !important;
  font-weight: 600 !important;
  color: ${Colors.PrimaryColor};
`;

export const ProductDescription = styled(Typography)`
  font-family: futura_book !important;
  font-size: 13px !important;
  color: ${(props) => props.theme.color};
`;

export const ProductDetailContainer = styled.section`
  display: flex;
`;

export const LocationLabel = styled(Typography)`
  width: 210px;
  padding-top: 12px;
  font-family: futura_book !important;
  font-size: 15px;
  color: ${(props) => props.theme.color};
`;

export const LocationDropdown = styled.select`
  width: 230px;
  height: 25px;
  margin: 10px;
  background-color: ${Colors.AccentColor2};
  border: 1px solid ${Colors.SecondaryColor};
  border-radius: 3px;
`;

export const PriorityLabel = styled(Typography)`
  width: 115px;
  padding-top: 5px;
  font-family: futura_book !important;
  font-size: 15px;
  color: ${(props) => props.theme.color};
`;

export const PriorityToggleContainer = styled.section`
  height: 20px;
  width: 115px;
  border-radius: 10px;
  margin-top: 5px;
  background-color: ${(props) =>
    props.toggleAcive ? "rgb(49, 238, 231)" : "red"};
`;

export const ToggleSwitch = styled.section`
  height: 20px;
  width: 40px;
  background-color: #e3e3e3;
  border-radius: 10px;
  margin-left: ${(props) => (props.toggleActive ? "76px" : "-1px")};
  border-bottom-right-radius: ${(props) => (props.toggleActive ? "10px" : 0)};
  border-top-right-radius: ${(props) => (props.toggleActive ? "10px" : 0)};
  border-bottom-left-radius: ${(props) => (props.toggleActive ? 0 : "10px")};
  border-top-left-radius: ${(props) => (props.toggleActive ? 0 : "10px")};
  transition: 500ms;
  font-size: 14px;
  font-weight: 600;
`;

export const AddToCartActionContainer = styled(CardActions)`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

export const AddToCartButton = styled(Button)`
  width: 140px;
  height: 30px;
  background-color: #31eee7 !important;
  font-family: futura_book !important;
  font-weight: 600 !important;
  border-radius: 20px !important;
  color: ${Colors.SecondaryColor} !important;
  box-shadow: rgb(98 98 98 / 95%) 1px 1px 4px !important;
  margin-bottom: 7px;
`;
