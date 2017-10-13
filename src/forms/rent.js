export default {
  formName: "rent",
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
          name: "year",
          label: "承包年限",
          placeholder: "请输入承包年限",
          type: "number"
        },
        {
          fieldType: "inputItem",
          name: "area",
          label: "承包亩数",
          placeholder: "请输入承包亩数",
          type: "number"
        },
        {
          fieldType: "inputItem",
          name: "totalPrice",
          label: "总价",
          placeholder: "请输入总价",
          type: "text"
        },
        {
          fieldType: "inputItem",
          name: "capital",
          label: "申请金额",
          placeholder: "请输入申请金额",
          type: "text"
        },
        {
          fieldType: "inputItem",
          name: "applyAmount",
          label: "补贴金额",
          placeholder: "请输入补贴金额",
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
