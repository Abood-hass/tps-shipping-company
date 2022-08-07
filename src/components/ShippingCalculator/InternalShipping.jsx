import React, {Component, useState} from 'react';


const InternalShipping = () => {

        return (
            <>
            <div  id={"in"} className="mb-3">
                <label className={"lab"} >الإرسال من</label>
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
        <label className={"lab"} >الإرسال الى</label>
        <select
            className="form-control"
            placeholder="ادخال"
        >
            <option>طرد</option>
            <option>وثائق</option>
        </select>
    </div>
    <div  id={"in"}  className="mb-3">
        <div className="custom-control custom-checkbox">

        </div>
    </div>
                </>
);
}

export default InternalShipping;