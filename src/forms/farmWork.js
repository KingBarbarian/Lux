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
          fieldType: "radioButtonItem",
          name: "practices",
          label: "耕种方式",
          options: FormUtil.convertMap2List(Constant.Practices)
        },
        {
          fieldType: "inputItem",
          name: "numberMu",
          label: "亩数",
          placeholder: "请输入亩数",
          type: "numbe"
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
          name: "applyPrice",
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
