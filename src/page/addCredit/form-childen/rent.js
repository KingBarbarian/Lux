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
      customerId: values.customer.key,
      brandId: values.models.brandId,
      brandName: values.models.brandName,
      dealerId: values.dealers.key,
      dealerName: values.dealers.value,
      description: values.models.description,
      machineCode: values.models.machineModel,
      machineName: values.models.name,
      machineTypeId: values.models.machineTypeId,
      machineTypeName: values.models.machineTypeId,
      price: values.totalPrice,
      subsidy: values.subsidies
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
