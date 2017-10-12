import React from "react";
import { List, WhiteSpace, Button } from "antd-mobile";
import { connect } from "react-redux";
import Forms from "@/forms";
import FormWrapper from "@/components/form-wrapper";
import { addMachineValidate } from "@/validations";

@connect()
class Machine extends React.Component {
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
    console.log(values);
    let values_ = {
      accountType: {
        id: 0,
        name: "string"
      },
      applyAmount: 30000,
      brandId: "XYZ",
      brandName: "雷沃",
      dealerId: "JX1000",
      dealerName: "马鞍山农机经销商",
      description: "购买农机申请",
      downPayment: 20000,
      machineCode: "M100000",
      machineName: "收割机-久保田-PRO-GH688Q",
      machineTypeId: "XYZ",
      machineTypeName: "收割机",
      marginAmount: 0,
      marginState: false,
      payeeType: {
        id: 0,
        name: "string"
      },
      price: 50000,
      useId: "AU100001"
    };
  };

  render() {
    const { dispatch } = this.props;
    let machineFormProp = Forms.Machine;
    return (
      <List>
        <FormWrapper
          formProp={machineFormProp}
          bindSubmit={this.handleBindSubmit}
          onSubmit={this.handleOnSubmit}
          dispatch={dispatch}
          validate={addMachineValidate}
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

export default Machine;
