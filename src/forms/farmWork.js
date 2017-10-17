import { Constant } from "@/commons";
import { FormUtil } from "@/utils";
export default {
  formName: "farmWork",
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
          fieldType: "radioButtonItem",
          name: "farmWorkType",
          label: "农活类型",
          options: FormUtil.convertMap2List(Constant.FarmWorkType)
        },
        {
          fieldType: "selectItem",
          name: "breed",
          label: "品种",
          placeholder: "请选择品种",
          sceneName: "FoodBreedSelect",
          dependencies: [
            {
              type: "and",
              rules: [
                {
                  fieldName: "farmWorkType",
                  type: "regular",
                  value: "[^2]"
                }
              ]
            }
          ]
        },
        {
          fieldType: "radioButtonItem",
          name: "practices",
          label: "作业方式",
          options: FormUtil.convertMap2List(Constant.Practices),
          dependencies: [
            {
              type: "and",
              rules: [
                {
                  fieldName: "farmWorkType",
                  type: "regular",
                  value: "[^2]"
                }
              ]
            }
          ]
        },
        {
          fieldType: "radioButtonItem",
          name: "farming",
          label: "耕种方式",
          options: FormUtil.convertMap2List(Constant.Farming),
          dependencies: [
            {
              type: "and",
              rules: [
                {
                  fieldName: "farmWorkType",
                  type: "regular",
                  value: 2
                }
              ]
            }
          ]
        },
        {
          fieldType: "inputItem",
          name: "area",
          label: "亩数",
          placeholder: "请输入亩数",
          type: "number"
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
