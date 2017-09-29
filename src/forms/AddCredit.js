
export default {
  formName: "creditAdd",
  sections: [
    {
      fields: [
        {
          fieldType: "selectItem",
          name: "user.customer",
          label: "选择客户",
          placeholder: "请选择客户",
          sceneName:"CustomerSelect",
          bindName:"user.username"
        },
        {
          fieldType: "inputItem",
          name: "user.username",
          label: "账号",
          placeholder: "请输入账号",
          type: "text"
        },
        {
          fieldType: "inputItem",
          name: "user.password",
          label: "密码",
          placeholder: "请输入密码",
          type: "password"
        },
        {
          fieldType: "inputItem",
          name: "user.phone",
          label: "电话",
          placeholder: "请输入电话号码",
          type: "phone"
        }
      ]
    }
  ]
};
