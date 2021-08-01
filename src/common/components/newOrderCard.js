import React from 'react';
import CardContent from '@material-ui/core/CardContent';
import {
    CardContainer,
    CardImageContainer,
    ProductImage,
    ProductTitle,
    ProductDescription,
    ProductDetailContainer,
    LocationLabel,
    LocationDropdown,
    PriorityLabel,
    PriorityToggleContainer,
    ToggleSwitch,
    AddToCartActionContainer,
    AddToCartButton,
} from "../../app/orders/primary/primaryStyles"
import "../global.css"
import { useContext } from "react";
import { ThemeContext } from "styled-components";

export default function PlaceNewOrderCard() {
    const themeContext = useContext(ThemeContext);
    console.log(themeContext);
    const [toggleActive, setToggleActive] = React.useState(false)

    const handleToggle = () => {
        setToggleActive(!toggleActive)
    }

    return (
        <CardContainer theme={{background: themeContext.productCardColor, boxShadow: themeContext.productCardBoxShadow}}>
            <CardContent>
                <CardImageContainer >
                    <ProductImage src="https://static.suppliersplanet.com/uploads/products/2019/11/borewell-submersible-pipes-by-prince-pipes-and-fittings-limited.jpg" />
                </CardImageContainer>
                <ProductTitle >
                    Moulded Fitting Coupler
                </ProductTitle>
                <ProductDescription theme={{color: themeContext.productLabelColor}}>
                    (UP TO 2" DSR 11 & ABOVE 2" SCH 80)
                </ProductDescription>
                <ProductDetailContainer >
                    <LocationLabel theme={{color: themeContext.productLabelColor}}>
                        Select Location
                    </LocationLabel>
                    <LocationDropdown>
                        <option value="None">None</option>
                        <option value="Dadra">Dadra</option>
                    </LocationDropdown>
                </ProductDetailContainer>
                <ProductDetailContainer>
                    <PriorityLabel theme={{color: themeContext.productLabelColor}}>
                        Select Priority
                    </PriorityLabel>
                    <PriorityToggleContainer onClick={handleToggle} toggleActive={toggleActive}>
                        <ToggleSwitch toggleActive={toggleActive} >
                            <center>{toggleActive ? "High" : "Low"}</center>
                        </ToggleSwitch>
                    </PriorityToggleContainer>
                </ProductDetailContainer>

            </CardContent>
            <AddToCartActionContainer>
                <AddToCartButton>
                    ADD TO CART
                </AddToCartButton>
            </AddToCartActionContainer>
        </CardContainer>
    );
}