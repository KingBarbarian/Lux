export default {
  formName: "food",
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
          name: "grow",
          label: "收粮品种",
          placeholder: "请选择收粮品种",
          sceneName: "FoodBreedSelect"
        },
        {
          fieldType: "inputItem",
          name: "tonnage",
          label: "重量",
          placeholder: "请输入重量",
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
