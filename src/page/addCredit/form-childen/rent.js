import React from "react";
import { List, WhiteSpace, Button } from "antd-mobile";
import { connect } from "react-redux";
import Forms from "@/forms";
import FormWrapper from "@/components/form-wrapper";
import { addRentValidate } from "@/validations";
import { addCreditRent } from "@/actions";

const TEMPLATEID = "AT10014";

@connect()
class Rent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  initialValues = () => {
    let initialValues = {};
    return initialValues;
  };

  handleSubmit = () => {
    this.submit();
  };

  handleBindSubmit = submit => {
    this.submit = submit;
  };

  handleOnSubmit = values => {
    const { dispatch } = this.props;
    let values_ = {
      applyAmount: values.applyAmount,
      area: values.area,
      customerId: values.customer.key,
      description: values.remark,
      price: values.totalPrice,
      year: values.year
    };
    dispatch(addCreditRent(values_, TEMPLATEID));
  };

  render() {
    const { dispatch } = this.props;
    let rentFormProp = Forms.Rent;
    return (
      <List>
        <FormWrapper
          formProp={rentFormProp}
          bindSubmit={this.handleBindSubmit}
          onSubmit={this.handleOnSubmit}
          dispatch={dispatch}
          validate={addRentValidate}
        />
        <WhiteSpace />
        <WhiteSpace />
        <div>
          <Button
            type="primary"
            style={{ marginRight: "15px", marginLeft: "15px" }}
            onClick={this.handleSubmit}
          >
            保存
          </Button>
        </div>
        <WhiteSpace />
        <WhiteSpace />
      </List>
    );
  }
}

export default Rent;
