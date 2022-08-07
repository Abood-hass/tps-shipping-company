import React from "react";
import {Navigation} from "./navigation";
import InternalShipping from "./ShippingCalculator/InternalShipping";
 
 const Calculator = () => {
  return (<>
    <Navigation />
    <InternalShipping />
    </>
  );
};
export default Calculator;