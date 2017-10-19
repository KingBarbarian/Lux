import React from "react";
import { List, WhiteSpace, Button, Flex } from "antd-mobile";
import { connect } from "react-redux";
import Forms from "@/forms";
import FormWrapper from "@/components/form-wrapper";
import { addCreditFarmWorkValidate } from "@/validations";
import { addCreditFarmWork } from "@/actions";

const TEMPLATEID = "AT10017";

@connect()
class FarmWork extends React.Component {
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
      farmWorkType: {
        id: values.farmWorkType
      },
      growModel: values.breed.growModel,
      growProductId: values.breed.id,
      operationType: {
        id: values.practices || values.farming
      },
      price: 50000
    };
    dispatch(addCreditFarmWork(values_, TEMPLATEID));
  };

  render() {
    const { dispatch } = this.props;
    let farmWorkFormProp = Forms.FarmWork;
    return (
      <List>
        <FormWrapper
          formProp={farmWorkFormProp}
          bindSubmit={this.handleBindSubmit}
          onSubmit={this.handleOnSubmit}
          dispatch={dispatch}
          validate={addCreditFarmWorkValidate}
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
        <WhiteSpace />
      </List>
    );
  }
}

export default FarmWork;
