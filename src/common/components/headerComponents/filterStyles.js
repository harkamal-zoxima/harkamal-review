import styled from "styled-components";
import { Typography } from "@material-ui/core";
import { Colors } from "../../CommonStyle";

export const FilterContainerComponent = styled.section`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

export const FilterHeader = styled.section`
  color: ${Colors.PrimaryColor};
  font-family: futura_bold;
  font-size: 15px;
  text-align: center;
  letter-spacing: 1px;

  @media only screen and (min-width: 1024px) {
    font-size: 20px;
  }
`;

export const FilterLabel = styled(Typography)`
  font-size: 13px !important;

  @media only screen and (min-width: 1024px) {
    font-size: 24px;
  }
`;

export const FilterDropDown = styled.select`
  @media only screen and (min-width: 1024px) {
    font-size: 15px !important;
    width: 150px;
  }
`;

export const FilterInputContainerComponent = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 20px;
`;

export const FilterInput = styled.input`
  margin-top: 10px;
  height: 20px;
  border: 1px solid ${Colors.SecondaryColor};
  color: ${Colors.SecondaryColor};
  padding: 5px;
  font-family: futura_book;

  @media only screen and (min-width: 1024px) {
    font-size: 15px !important;
  }
`;

export const FilterButtonContainer = styled.section`
  display: flex;
  justify-content: space-around;
  margin-top: 30px;

  @media only screen and (min-width: 1024px) {
    margin-top: 35px;
  }
`;

export const Button = styled.button`
  width: 80px;
  background-color: ${(props) => props.theme.background};
  border: none;
  height: 35px;
  border-radius: 8px;
  color: ${(props) => props.theme.color};
  font-size: 12px;
  font-family: ${(props) => props.theme.fontFamily};
  font-weight: ${(props) => props.theme.fontWeight};
  //   letter-spacing: 1.5px;
  box-shadow: rgb(217 217 217 / 95%) 2px 2px 6px;

  & :hover {
    cursor: pointer;
  }

  @media only screen and (min-width: 1024px) {
    width: 120px;
    background-color: ${(props) => props.theme.background};
    border: none;
    height: 40px;
    border-radius: 8px;
    color: ${(props) => props.theme.color};
    font-size: 15px;
    font-family: ${(props) => props.theme.fontFamily};
    letter-spacing: 1px;
    font-weight: 600;
  }
`;
