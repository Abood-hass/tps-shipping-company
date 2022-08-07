import React, {Component, useState} from 'react';


const ExternalShipping = () => {

    return (
        <>
            <div  id={"in"} className="mb-3">
                <label className={"lab"} >الدولة</label>
                <select
                    className="form-control"
                    placeholder="ادخال"
                >
                    <option>طرد</option>
                    <option>وثائق</option>
                </select>
                <br />
            </div>
            <div   className={"in"} className="mb-3">
                <label className={"lab"} >المدينة (لا تؤثر المدينة على تكلفة الشحن)</label>
                <input
                    aria-label={"أدخل اسم المدينة"}
                    type="text"
                    min={0}
                    max={200}
                    className="form-control"
                    placeholder="ادخل أدخل اسم المدينة"
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
        </>
    );
}

export default ExternalShipping;