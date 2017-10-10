export default {
  formName: "machine",
  sections: [
    {
      fields: [
        {
          fieldType: "selectItem",
          name: "customer",
          label: "客户",
          placeholder: "请选择客户",
          sceneName: "CustomerSelect"
        },
        {
          fieldType: "selectItem",
          name: "dealers",
          label: "经销商",
          placeholder: "请选择经销商",
          sceneName: "DistributorSelect"
        },
        {
          fieldType: "selectItem",
          name: "models",
          label: "购买机型",
          placeholder: "请选择购买机型",
          sceneName: "CustomerSelect"
        },
        {
          fieldType: "inputItem",
          name: "totalPrice",
          label: "总价",
          placeholder: "0.00",
          type: "text"
        },
        {
          fieldType: "inputItem",
          name: "capital",
          label: "首付款",
          placeholder: "0.00",
          type: "text"
        },
        {
          fieldType: "inputItem",
          name: "applyAmount",
          label: "申请金额",
          placeholder: "0.00",
          type: "text"
        },
        {
          fieldType: "inputItem",
          textArea: true,
          name: "remark",
          label: "备注",
          placeholder: "请输入备注信息",
          type: "text"
        }
      ]
    }
  ]
};
