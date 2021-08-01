import React, { useState } from "react";
import * as TiIcons from "react-icons/ti";
import {
  Colors,
  FilterHeaderComponent,
  ActiveFilterContainer,
  FilterTitle,
} from "../../CommonStyle";

import {
  FilterContainerComponent,
  FilterLabel,
  FilterDropDown,
  FilterInputContainerComponent,
  FilterInput,
  FilterHeader,
  FilterButtonContainer,
  Button,
} from "./filterStyles";

function Filter() {
  const [activeFilter, setActiveFilter] = useState(false);

  return (
    <div>
      <FilterHeaderComponent
        onClick={() => setActiveFilter(!activeFilter)}
        activeFilter={activeFilter}
      >
        <TiIcons.TiFilter fontSize="22px" color={Colors.black} />
        <FilterTitle>Filter</FilterTitle>
      </FilterHeaderComponent>

      <ActiveFilterContainer activeFilter={activeFilter}>
        <FilterHeader>FILTER PANEL</FilterHeader>

        <FilterContainerComponent>
          <FilterLabel><b>Select Column</b></FilterLabel>
          <FilterDropDown>
            <option value="None">None</option>
            <option selected value="Order ID">Order ID</option>
            <option value="Order Date">Order Date</option>
            <option value="Invoice ID">Invoice ID</option>
            <option value="Invoive Date">Invoice Date</option>
          </FilterDropDown>
        </FilterContainerComponent>

        <FilterContainerComponent>
          <FilterLabel><b>Select Filter Type</b></FilterLabel>
          <FilterDropDown>
            <option value="None">Equals</option>
            <option value="Equals">Contains</option>
          </FilterDropDown>
        </FilterContainerComponent>

        <FilterInputContainerComponent>
          <FilterLabel><b>Enter Value</b></FilterLabel>
          <FilterInput placeholder="Enter value to be compared..." />
        </FilterInputContainerComponent>

        <FilterButtonContainer>
          <Button
            theme={{
              background: Colors.AccentColor1,
              fontFamily: "futura_book",
              color: Colors.SecondaryColor,
              fontWeight: 600,
            }}
            onClick={()=> setActiveFilter(false)}
          >
            CANCEL
          </Button>
          <Button
            theme={{
              background: Colors.PrimaryColor,
              fontFamily: "futura_book",
              color: "white",
            }}
          >
            APPLY FILTER
          </Button>
        </FilterButtonContainer>
      </ActiveFilterContainer>
    </div>
  );
}

export default Filter;