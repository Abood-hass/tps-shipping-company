import React, {useEffect, useState} from "react";
import {Navigation} from "./navigation";
import 'react-notifications/lib/notifications.css';
import {NotificationContainer, NotificationManager} from "react-notifications";
import {fetchDataPaper, fetchDataPackage, paperType, packageType, neighboringCountries} from '../data/Countries'

 const Calculator =  () => {
     let countries1 = packageType || []
     let countries2 = paperType || []
//////////////////////////////////////////////////////
     let [shippingWay, setShippingWay] = useState("");
    let ShippingWays1 = ["بري","جوي"]
     let ShippingWays2 = ["بحري","جوي"]
     function  handleShippingWayChange  (event) {
         event.preventDefault();
         let option = event.target.value;
         setShippingWay(option);
     }
/////////////////////////////////////////////////////
     let [country, setCountry] = useState("");

     function  handleCountryChange  (event) {
         event.preventDefault();
         let option = event.target.value;
         setCountry(option);
     }

/////////////////////////////////////////////////////
     let [shippingNeighboringCountriesStatus , setShippingNeighboringCountriesStatus] = useState(false);
     let [shippingFromTurkeyStatus, setShippingFromTurkeyStatus] = useState(false);
     let [shippingFromAmericaStatus, sstShippingFromAmericaStatus] = useState(false);



     let [shippingType, setShippingType] = useState("");
     let shippingTypeList = [
          "شحن دولي",
          "النقل البري لدول الجوار",
          "الشحن من تريكا - ملابس",
          "الشحن من امريكا"
     ]



     function  handleShippingTypeChange  (event) {
         event.preventDefault();
         let option = event.target.value;
         setShippingType(option);

         setShippingNeighboringCountriesStatus(option === shippingTypeList[1])
         setShippingFromTurkeyStatus(option === shippingTypeList[2])
         sstShippingFromAmericaStatus(option === shippingTypeList[3])

         setCountry(changingCountryOfType)

     }

     function changingCountryOfType () {

         if(shippingFromTurkeyStatus){
             return ("تركيا")
         }else if(shippingFromAmericaStatus){
             return ("الولايات المتحدة")
         }else{
             return country
         }
     }


     function changingWayOfType () {
         if(shippingNeighboringCountriesStatus){
             return (ShippingWays1[0])
         }else{
             return shippingWay
         }

     }

/////////////////////////////////////////////////////
     let [city, setCity] = useState("");

     function  handleCityChange  (event) {
         event.preventDefault();
         let option = event.target.value;
         setCity(option);
     }

/////////////////////////////////////////////////////
     let [type, setType] = useState("");
     let types =[ "طرد","وثائق"];
     let showTypeOption =
         types.map((type) =>
                <option>{type}</option>
         )

     function handleTypeChange  (event) {
         event.preventDefault();
         let type = event.target.value
         setType(type);
     }
/////////////////////////////////////////////////////
     let [weight, setWeight] = useState(0);

     function handleWightChange  (event) {
         event.preventDefault();
         setWeight(event.target.value || 0);
     }

/////////////////////////////////////////////////////
     let [packageContent, setPackageContent] = useState("");
     let packageContentList = ["إعتيادي","خاص"]


     function handlePackageContentChange  (event) {
         event.preventDefault();
         setPackageContent(event.target.value || "");
     }

////////////////////////////////////////////////////

     let [price, setPrice] = useState(0);


     const handleSubmit = async () => {

         if(shippingNeighboringCountriesStatus){
             console.log({
                 weight: weight,
                 country: country,
                 type: type,
                 shippingWay: "بري",
                 packageContent:packageContent
             })
             await fetch('http://localhost:3000/neighboringCountriesShipping', {
                 method: 'POST',
                 headers: {
                     'Content-Type': 'application/json;charset=utf-8'
                 },
                 body: JSON.stringify({
                     weight: weight,
                     country: country,
                     type: type,
                     shippingWay: shippingWay,
                     packageContent:packageContent,
                     city: city
                 })
             }).then(function (response) {
                 return response.json();
             }).then(function (myJson) {
                 if (myJson['msg'] !== '') {
                     console.log(myJson)
                     setPrice(myJson['msg']);
                 } else {
                     NotificationManager.warning('تاكد من إدخال البيانات', '', 3000);
                 }
             });
         } if(shippingFromTurkeyStatus){

             await fetch('http://localhost:3000/turkeyShipping', {
                 method: 'POST',
                 headers: {
                     'Content-Type': 'application/json;charset=utf-8'
                 },
                 body: JSON.stringify({
                     weight: weight
                 })
             }).then(function (response) {
                 return response.json();
             }).then(function (myJson) {
                 if (myJson['msg'] !== '') {
                     setPrice(myJson['msg']);
                 } else {
                     console.log(myJson['msg'])
                     NotificationManager.warning('تاكد من إدخال البيانات', '', 3000);
                 }
             });
         }else
            //  if(shippingNeighboringCountriesStatus){
            //      await fetch('http://localhost:3000/neighboringCountriesShipping', {
            //          method: 'POST',
            //          headers: {
            //              'Content-Type': 'application/json;charset=utf-8'
            //          },
            //          body: JSON.stringify({
            //              weight: weight,
            //              country: country,
            //              shippingWay: ShippingWays1[0],
            //              city: city,
            //              packageContent:packageContent
            //          })
            //      }).then(function (response) {
            //          return response.json();
            //      }).then(function (myJson) {
            //          if (myJson['msg'] !== '') {
            //              setPrice(myJson['msg']);
            //          } else {
            //              NotificationManager.warning('تاكد من إدخال البيانات', '', 3000);
            //          }
            //      });
            // }else
                {
             await fetch('http://localhost:3000/', {
                 method: 'POST',
                 headers: {
                     'Content-Type': 'application/json;charset=utf-8'
                 },
                 body: JSON.stringify({
                     weight: weight,
                     country: country,
                     type: type,
                     shippingWay: shippingWay,
                     packageContent:packageContent
                 })
             }).then(function (response) {
                 return response.json();
             }).then(function (myJson) {
                 if (myJson['msg'] !== '') {
                     setPrice(myJson['msg']);
                 } else {
                     NotificationManager.warning('تاكد من إدخال البيانات', '', 3000);
                 }
             });
         }
     }



/////////////////////////////////////////////////////
     return (<>
    <Navigation />

          <div id='portfolio' className='text-right'>
              <NotificationContainer/>
              <div id={"bg"} dir={"rtl"}  className={"container"}>


                  <br/>
                  <h2 className={"central-text"}>حساب سعر الشحنة</h2>
                  <form>
                      <select
                      aria-selected={"false"}
                      value={shippingType}
                      onChange={handleShippingTypeChange}
                      className="form-control"
                      placeholder="ادخال"
                  >
                      <option disabled={true} value="">
                          --اختر نوع الشحن--
                      </option>
                      {shippingTypeList.map((type) =>{
                          return (<option>{type}</option>)
                      })}
                  </select>
                      <br/>
                      <div id={"con1"}>

                          <h3 id={"header"}>عنوان نقل الشحن</h3>
                          <div  id={"in"} className="mb-3">
                              <label className={"lab"} >الدولة المشحون لها</label>

                              {<select
                                  className="form-control"
                                  placeholder="ادخال"
                                  value={changingCountryOfType()}
                                  disabled={
                                      shippingFromAmericaStatus||
                                    shippingFromTurkeyStatus}
                                  onChange={handleCountryChange}>
                                  <option disabled={true} value="">
                                  --اختر الدولة التي تود الشحن لها--
                              </option>
                                  {shippingNeighboringCountriesStatus ?
                                      neighboringCountries.map((country) =>{
                                      // console.log(country)
                                      return <option value={country}>{country}</option>
                                  }):countries2.map((country) =>{
                                      // console.log(country)
                                      return <option value={country}>{country}</option>
                                  })}
                              </select>}


                          </div>

                              <div   id={"in"} className="mb-3">
                                  <br/>
                                  <label className={"lab"} >طريقة الشحن (من حيث بري او بحري)</label>
                                  <select
                                      disabled={
                                          (shippingNeighboringCountriesStatus)
                                      }
                                      aria-selected={"false"}
                                      value={changingWayOfType()}
                                      onChange={handleShippingWayChange}
                                      className="form-control"
                                      placeholder="ادخال"
                                  ><option disabled={true} value="">
                                      --اختر طريقة الشحن--
                                  </option>

                                      {(country === "تركيا" ||
                                          country === "الولايات المتحدة" ||
                                          country === "الصين (بيك، كان، شا، شن)" ||
                                            shippingFromTurkeyStatus) ?
                                          ShippingWays1.map((way) => {
                                              return <option value={way}>{way}</option>
                                          }) : ShippingWays2.map((way) => {
                                              return <option value={way}>{way}</option>
                                          })}
                                  </select>
                              </div>


                          <br />
                          <div   className={"in"} className="mb-3">
                              <label className={"lab"} >المدينة (لا تؤثر المدينة على تكلفة الشحن)</label>
                              <input
                                  value={city}
                                  aria-label={"أدخل اسم المدينة"}
                                  type="text"
                                  min={0}
                                  className="form-control"
                                  placeholder="ادخل أدخل اسم المدينة"
                                  onChange={handleCityChange}
                              />
                          </div>
                          <br />
                          <div  className="mb-3">
                              <div className="custom-control custom-checkbox">
                                  <label className={"lab"} >الرمز البريدي</label>
                                  <input
                                      aria-label={"ادخل الرمز البريدي"}
                                      type="text"
                                      maxLength={8}
                                      className="form-control"
                                      placeholder="ادخل الوزن الخاص بالشحنة"
                                  />
                              </div>
                          </div>
                      </div>
                      <div id={"con2"}>
                          <h3 id={"header"}>بيانات الشحنة</h3>
                          <div   id={"in"} className="mb-3">
                          <label className={"lab"} >نوع الشحنة في حال كانت برية</label>
                          <select
                              aria-selected={"false"}
                              value={packageContent}
                              onChange={handlePackageContentChange}
                              className="form-control"
                              placeholder="ادخال"
                          >
                                {(
                                    shippingNeighboringCountriesStatus
                                )?
                                  packageContentList.map((way) =>{
                                      return <option value={way}>{way}</option>
                                  }):<option value={"إعتيادي"}>إعتيادي</option>
                                  } ) }
                          </select>
                      </div> <br />

                          <div  id={"in"} className="mb-3">
                              <label className={"lab"} >أدخل وزن الشحنة (Kg)</label>
                              <input
                                  aria-label={"أدخل وزن الشحنة (Kg)"}
                                  type="number"
                                  min={0}
                                  step={0.5}
                                  className="form-control"
                                  value={weight}
                                  onChange={handleWightChange}
                                  placeholder="ادخل الوزن الخاص بالشحنة"
                              />
                              <br />
                          </div>
                          <div   id={"in"} className="mb-3">
                              <label className={"lab"} >نوع الشحنة</label>
                              <select
                                  aria-selected={"false"}
                                  value={type}
                                  onChange={handleTypeChange}
                                  className="form-control"
                                  placeholder="ادخال"
                              ><option disabled={true} value="">
                                  --اختر النوع الخاص بالشحنة--
                              </option>
                                  {showTypeOption}
                              </select>
                          </div>
                          <br />
                          <div   id={"btn"} className="mb-3">
                              <a onClick={handleSubmit} id={'submit'} className='btn btn-custom btn-lg'>
                                  حساب
                              </a>
                          </div>
                      </div>
                  </form>

              </div>

          </div>

         <div dir={"rtl"} id='portfolio2' className='text-right'>
             <div id={"bg"}  className={"container"}>

                 <table id="customers">
                     <tr className={"tHeader"}>
                         <th>اتجاه الشحنة</th>
                         <th>نوع الشحنة</th>
                         <th>وزن الشحنة</th>
                         <th>التكلفة الشحنة</th>
                     </tr>
                     <tr>
                         <td> <span> من </span>العراق<span> الى </span>{country}</td>
                         <td>{type}</td>
                         <td>{weight}<span> kg </span></td>
                         <td className={"price-view"}>{price}<span> $ </span></td>
                     </tr>
                 </table>

             </div>
         </div>
    </>
  );

};

export default Calculator;