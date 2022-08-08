import React, {useState} from "react";
import {Navigation} from "./navigation";
import InternalShipping from "./ShippingCalculator/InternalShipping";
import ExternalShipping from "./ShippingCalculator/ExternalShipping";

 const Calculator = () => {


     return (<>
    <Navigation />

          <div id='portfolio' className='text-right'>
              <div id={"bg"} dir={"rtl"}  className={"container"}>
                  <h2>حساب سعر الشحنة</h2>
                  <form>
                      <div id={"con1"}>
                          <h3 id={"header"}>عنوان نقل الشحن</h3>
                          <ExternalShipping />
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

         <div dir={"rtl"} id='portfolio2' className='text-right'>
             <div id={"bg"}  className={"container"}>

                 <table id="customers">
                     <tr>
                         <th>اتجاه الشحنة</th>
                         <th>نوع الشحنة</th>
                         <th>وزن الشحنة</th>
                         <th>التكلفة الشحنة</th>
                     </tr>
                     <tr>
                         <td> <span> من </span>العراق<span> الى </span>فلسطين</td>
                         <td>طرد</td>
                         <td>25<span> kg </span></td>
                         <td className={"price-view"}>25<span> دينار عراقي </span></td>
                     </tr>
                 </table>

             </div>
         </div>
    </>
  );
};
export default Calculator;