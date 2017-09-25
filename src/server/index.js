import { axios } from "@/utils";

function getSceneInfo(endpoint, method, isFormData, host, data, timeout) {
  return axios({
    url: "/api/getSceneInfo",
    params: {
      sceneId: data
    }
  });
}

export { getSceneInfo };
