export default {
  name: "distributor",
  data: [
    {
      id: "sorts",
      headerDisplay: true,
      type: "select",
      options: [
        {
          id: "-CREATED_TIME",
          name: "创建时间降序"
        },
        {
          id: "CREATED_TIME",
          name: "创建时间升序"
        },
        {
          id: "-POOL_UPDATE_TIME",
          name: "更新时间降序"
        },
        {
          id: "POOL_UPDATE_TIME",
          name: "更新时间升序"
        }
      ]
    }
  ]
};
