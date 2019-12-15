import React, { Component } from 'react';
// import { formFields } from '../product/formFields';
export default ({ input, label, type, required, meta : {error, touched} }) => {
    // console.log(meta);
    return (
        <div className="form-group">
            <label className="title">{label}</label>
            <input type={type} required={required} {...input} className="form-control" /*onClick={(e) => console.log(this) }*/ />
            { error && touched && (
                <div className="mt-2 text-danger title">{error}</div>
            )}
        </div>
    )
}