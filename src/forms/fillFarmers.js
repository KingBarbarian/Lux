export default {
  formName: "fillFarmers",
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
          sceneName: "MachineSelect"
        },
        {
          fieldType: "inputItem",
          name: "totalPrice",
          label: "总价",
          placeholder: "请输入总价",
          type: "number"
        },
        {
          fieldType: "inputItem",
          name: "applyAmount",
          label: "申请金额",
          placeholder: "请输入申请金额",
          type: "number"
        },
        {
          fieldType: "inputItem",
          name: "subsidies",
          label: "补贴金额",
          placeholder: "请输入补贴金额",
          type: "number"
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
