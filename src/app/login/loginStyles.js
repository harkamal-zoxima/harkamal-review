import styled from "styled-components";

export const Container = styled.section`
  margin: 0 auto;
  padding: 0;
  height: 100vh;
  width: 100%;
  float: left;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.background};

  @media only screen and (min-width: 768px) {
    justify-content: space-evenly;
    overflow: hidden;
  }
`;

export const LoginForm = styled.section`
  width: 272px;
  height: 312px;
  background-color: ${(props) => props.theme.background};
  border-radius: 20px;
  box-shadow: ${(props) => props.theme.background} 2px 2px 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  overflow: hidden;

  @media only screen and (min-width: 768px) {
    margin-left: 10%;
    margin-right: 15%;
    width: 300px;
    height: 350px;
  }
`;

export const Logo = styled.img`
  margin-top: 6%;
  width: 35%;
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 15px;
  padding-right: 15px;
  border-radius: 30px;
  background-color: white;
`;

export const InputContainer = styled.section`
  width: 70%;
  line-height: 25px;
  border-radius: 20px;
  border: none;
  background-color: ${(props) => props.theme.background} !important;
  position: relative;

  @media only screen and (min-width: 768px) {
    width: calc(100%-70px);
    border-bottom-left-radius: 0px;
    border-top-left-radius: 0px;
    margin-left: -30%;
  }
`;

export const Input = styled.input`
  display: block;
  line-height: 25px;
  border-radius: 20px;
  padding-left: 35px;
  padding-right: 20px;
  border: none;
  background-color: ${(props) => props.theme.background} !important;
  position: relative;
  
  @media only screen and (min-width: 768px) {
    border-bottom-left-radius: 0px;
    border-top-left-radius: 0px;
    width: 100%;
  }
`;

export const Button = styled.button`
  background-color: ${(props) => props.theme.background};
  height: 25px;
  color: ${(props) => props.theme.color};
  border-radius: 30px;
  font-weight: bolder;
  font-size: 12px;
  width: 31%;
  cursor: pointer;
  border: none;
  box-shadow: ${props => props.theme.shadow} 0 0 4px;

  @media only screen and (min-width: 768px) {
    height: 28px;
    font-size: 13px;
  }
`;

export const LoginResetText = styled.p`
  font-style: italic;
  font-weight: lighter;
  color: ${(props) => props.theme.color};
  text-decoration: underline;
  font-size: 11px;
  cursor: pointer;
`;

export const BannerImage = styled.img`
  height: 100vh;
  display: none;
  @media only screen and (min-width: 768px) {
    display: block;
    margin-left: 15%;
  }
`;