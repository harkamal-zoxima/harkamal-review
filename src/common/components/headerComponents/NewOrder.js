import React from "react";
import { HeaderComponents, Colors } from "../../CommonStyle";
import * as GoIcons from "react-icons/go";

function NewOrder() {
  return (
    <HeaderComponents>
      <GoIcons.GoPlus fontSize="22px" color={Colors.PrimaryColor} />
    </HeaderComponents>
  );
}

export default NewOrder;
