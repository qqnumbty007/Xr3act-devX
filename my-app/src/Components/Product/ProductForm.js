import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import FormField from '../Common/FormField';
import { productFormField } from './formFields';

class ProductForm extends Component {
    renderFields(formFields){
        
        return formFields.map(({name, label, type, required}) => {
            return (
                <Field key={name} label={label} name={name} type={type} required={required} component={FormField} />
            )
        })
    }
    render(){
        const { onProductSubmit } = this.props;
        return (
            <div>
                <form onSubmit={this.props.handleSubmit(onProductSubmit)}>
                    {this.renderFields(productFormField)}
                    <button className="btn btn-block btn-info title" type="submit" >
                        บันทึก
                    </button>
                </form>
            </div>
        )
    }
}

function validate(values) {
    // console.log(values);
    const errors = {};
    productFormField.forEach(({ name, required }) => {
        if(!values[name] && required){
            errors[name] = "กรุณากรอกข้อมูลด้วยค่ะ";
        }
    });
    return errors;
}

ProductForm = reduxForm({ validate,form: "productForm"})(ProductForm)

const mapStateToProps = ({products}) => {
    if(products && products.id){
        return { initialValues: products};
    } else {
        return {};
    }
}

export default connect(mapStateToProps)(ProductForm);