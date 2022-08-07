import React, {useState} from "react";
import {Navigation} from "./navigation";
import InternalShipping from "./ShippingCalculator/InternalShipping";
import ExternalShipping from "./ShippingCalculator/ExternalShipping";


 const Calculator = () => {

     let [Switch, setSwitch] = useState(false);
     const switchState = () => {
        if(Switch){
            return (<ExternalShipping />)
        }else {
            return (<InternalShipping />)
        }
     }
     const changeSwitch = () => {
         if(Switch){
             setSwitch(false)
         }else {
             setSwitch(true)
         }
         console.log(Switch)
     }

     return (<>
    <Navigation />

          <div dir={"rtl"} id='portfolio' className='text-right'>
              <div id={"bg"}  className={"container"}>
                  <form>
                      <div id={"con1"}>
                          <h3 id={"header"}>عنوان نقل الشحن</h3>
                          <div>
                              <span id={"exShipping"} className={"lab"}>خارج العراق</span>
                              <label className="switch">
                              <input type="checkbox" onChange={() => {
                                  changeSwitch()}}/>
                                  <span className="slider"></span>
                          </label>
                              <span id={"inShipping"}  className={"lab"}>داخل العراق</span>
                          </div>
                          <br />
                          <br />
                          {switchState()}
                      </div>

                      <div id={"con2"}>
                          <h3 id={"header"}>بيانات الشحنة</h3>
                          <div  id={"in"} className="mb-3">
                              <label className={"lab"} >أدخل وزن الشحنة (Kg)</label>
                              <input
                                  aria-label={"أدخل وزن الشحنة (Kg)"}
                                  type="number"
                                  min={0}
                                  max={200}
                                  className="form-control"
                                  placeholder="ادخل الوزن الخاص بالشحنة"
                              />
                              <br />
                          </div>
                          <div   id={"in"} className="mb-3">
                              <label className={"lab"} >نوع الطرد</label>
                              <select
                                  className="form-control"
                                  placeholder="ادخال"
                              >
                                  <option>طرد</option>
                                  <option>وثائق</option>
                              </select>
                          </div>
                          <br />
                          <div   id={"btn"} className="mb-3">
                              <a id={'submit'} className='btn btn-custom btn-lg'>
                                  إرسال
                              </a>
                          </div>
                      </div>
                  </form>

              </div>

          </div>
    </>
  );
};
export default Calculator;