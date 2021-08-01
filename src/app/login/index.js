import React,{useRef} from "react";
import PrincePipesLogo1 from "../assets/images/princePipesLogo.png";
import LoginBannerImage from "../assets/images/loginBanner.png";
import { Colors } from "../../common/CommonStyle";
import {
  Container,
  LoginForm,
  Logo,
  InputContainer,
  Input,
  Button,
  LoginResetText,
  BannerImage,
} from "./loginStyles";
import * as FaIcons from "react-icons/fa";
import * as RiIcons from "react-icons/ri";
import UserActions from "../redux/stores/user/actions";
import { connect } from "react-redux";
import { helperService } from "../../common/utils/helperService";

function Login({form, loading, changeForm, submitForm, history}) {
  const buttonRef = useRef(null);
  helperService.loggedIn() && history.push("/dashboard")
  return (
    <Container theme={{ background: Colors.AccentColor2 }}>
      <LoginForm theme={{ background: Colors.SecondaryColor }}>
        <Logo src={PrincePipesLogo1} />

        <InputContainer>
          <Input
            placeholder="Phone Number"
            theme={{ background: Colors.AccentColor2 }}
            onChange={(value) =>
              changeForm({
                edited_field: "username",
                edited_value: value.target.value,
              })
            }
          />
          <FaIcons.FaUserAlt
            style={{ position: "absolute", top: 5, left: 5 }}
            color={Colors.SecondaryColorTranslucent}
          />
        </InputContainer>

        <InputContainer>
          <Input
            placeholder="Password"
            theme={{ background: Colors.AccentColor2 }}
            type="password"
            onChange={(value) =>
              changeForm({
                edited_field: "password",
                edited_value: value.target.value,
              })
            }
          />
          <RiIcons.RiLockPasswordFill
            style={{ position: "absolute", top: 5, left: 5 }}
            color={Colors.SecondaryColorTranslucent}
          />
        </InputContainer>

        <Button
        ref={buttonRef}
          onClick={() => {
            helperService.clickAnimation(buttonRef.current)
            submitForm({ ...form, history: history })

        }}
          theme={{
            background: Colors.PrimaryColor,
            color: Colors.AccentColor2,
            shadow: Colors.PrimaryColorTranslucent,
          }}
        >
          LOGIN
        </Button>
        <LoginResetText theme={{ color: Colors.AccentColor2 }}>
          Problem logging in!
        </LoginResetText>
      </LoginForm>
      <div className="imageDiv">
        <BannerImage src={LoginBannerImage} />
      </div>
    </Container>
  );
}

function mapStateToProps(state) {
  return {
    form: state.users.loginForm,
    loading: state.users.loginLoader,
  };
}

const mapDispatchToProps = (dispatch) => ({
  submitForm: (params) => dispatch(UserActions.submitLoginForm(params)),
  changeForm: (params) => dispatch(UserActions.changeLoginForm(params)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);