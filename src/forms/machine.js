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
          label: "购买处",
          placeholder: "请选择购买处",
          sceneName: "DistributorSelect"
        },
        {
          fieldType: "selectItem",
          name: "models",
          label: "购买类型",
          placeholder: "请选择购买类型",
          sceneName: "MachineSelect"
        },
        {
          fieldType: "inputItem",
          name: "totalPrice",
          label: "机器总价",
          placeholder: "请输入机器总价",
          type: "number"
        },
        {
          fieldType: "inputItem",
          name: "capital",
          label: "首付款",
          placeholder: "请输入首付款",
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
