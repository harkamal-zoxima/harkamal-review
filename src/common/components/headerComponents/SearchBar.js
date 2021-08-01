import React,{useState} from 'react'
import * as FiIcons from "react-icons/fi";
import * as MdIcons from "react-icons/md";
import {
    ActiveSearchContainer,
    ActiveSearchInput,
    SearchHeaderComponent,
    Colors
} from "../../CommonStyle"

function SearchBar() {
    const [activeSearch, setActiveSearch] = useState(false);
    return (
        <SearchHeaderComponent activeSearch={activeSearch}>
        {activeSearch ? (
          <ActiveSearchContainer>
            <MdIcons.MdClose
              fontSize="25px"
              color={Colors.PrimaryColor}
              onClick={() => setActiveSearch(false)}
            />
            <ActiveSearchInput />
          </ActiveSearchContainer>
        ) : (
          ""
        )}
        <FiIcons.FiSearch
          fontSize="22px"
          color={Colors.PrimaryColor}
          onClick={() => setActiveSearch(true)}
        />
      </SearchHeaderComponent>
    )
}

export default SearchBar
