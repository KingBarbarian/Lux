export default {
  formName: "labor",
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
          fieldType: "inputItem",
          name: "content",
          label: "用途描述",
          placeholder: "请输入用途描述",
          type: "text"
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
