import React from "react";
import { List, WhiteSpace, Button } from "antd-mobile";
import { connect } from "react-redux";
import Forms from "@/forms";
import FormWrapper from "@/components/form-wrapper";
import { addMachineValidate } from "@/validations";

@connect()
class FillFarmers extends React.Component {
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
    console.log(values);
  };

  render() {
    const { dispatch } = this.props;
    let fillFarmersFormProp = Forms.FillFarmers;
    return (
      <List renderHeader={() => "农机信贷"}>
        <FormWrapper
          formProp={fillFarmersFormProp}
          initialValues={this.initialValues}
          bindSubmit={this.handleBindSubmit}
          onSubmit={this.handleOnSubmit}
          dispatch={dispatch}
          validate={addMachineValidate}
        />
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
      </List>
    );
  }
}

export default FillFarmers;

