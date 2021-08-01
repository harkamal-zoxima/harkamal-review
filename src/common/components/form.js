import React from "react";
import { Colors } from "../CommonStyle";
import "../global.css";
import {
  RequestModalForm,
  FormHeader,
  FormHeaderDetails,
  FormContent,
  FormLabelTypography,
  FormTextField,
  FormTextArea,
  FormDropDown,
  FormButtonContainer,
  Button,
} from "../../app/request/requestStyles";

function CustomForm(props) {
  const data = props.formContent

  return (
    <RequestModalForm autocomplete="off">
      {/* Form Heading */}
      {data &&
        data.header &&
        <FormHeader>
          <center><u><b>{data.header.title}</b></u>
            <FormHeaderDetails><u>{data.header.details}</u></FormHeaderDetails> </center>
        </FormHeader>
      }

      {/* Form Content */}
      {data &&
        data.inputData.map((item) => {
          // For TextField
          if (item.type === "textField") {
            return (
              <FormContent className="textField_Container" >
                {/* Labels */}
                <FormLabelTypography>
                  {item.label} {item.label ? <span style={{ color: Colors.PrimaryColor }}>*</span> : ""}
                </FormLabelTypography>
                {/* TextFields */}
                {item.placeholder ?
                  <FormTextField
                    required={item.required}
                    placeholder={item.placeholder} />
                  : <FormTextField
                     required={item.required} />
                }
              </FormContent>
            );
          }
          // For TextArea
          else if (item.type === "textArea") {
            return (
              <FormContent>
                {/* Labels */}
                <FormLabelTypography>
                  {item.label} <span style={{ color: Colors.PrimaryColor }}>*</span>
                </FormLabelTypography>
                {/* TextArea */}
                <FormTextArea
                  required />
              </FormContent>
            );
          }
          // For DropDown
          else if (item.type === "dropDown") {
            return (
              <FormContent className="dropDown_Container">
                {/* Labels */}
                <FormLabelTypography>
                  {item.label} {item.label ? <span style={{ color: Colors.PrimaryColor }}>*</span> : ""}
                </FormLabelTypography>
                {/* Dropdown */}
                <FormDropDown>
                  <option value="None">
                    None
                  </option>
                  {item.dropDownList && item.dropDownList.map((item) => {
                    return <option value={item}>{item}</option>
                  })}
                </FormDropDown>
              </FormContent>
            );
          }
        })}

      {/* Form Button Container */}
      <FormButtonContainer>
        {data &&
          data.buttonData.map((item) => {
            return (
              <Button
                theme={{ background: Colors.PrimaryColor, fontFamily: "futura_book" }} >
                {item.label}
              </Button>
            );
          })}
      </FormButtonContainer>
    </RequestModalForm>
  );
}

export default CustomForm;
