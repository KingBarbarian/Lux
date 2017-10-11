import { combineEpics } from "redux-observable";
import { Distributor } from "@/actions";
import { baseAjax } from "./tools";

const getMachineData = (action$, store) =>
  action$
    .ofType(
      Distributor.GET_MACHINE_TYPES.REQUEST,
      Distributor.GETMACHINE_CODE.REQUEST,
      Distributor.GET_MACHINE_BRAND.REQUEST
    )
    .mergeMap(action => {
      return baseAjax(
        action$,
        store,
        action.origin.SUCCESS,
        action.origin.FAILD
      );
    })

export default combineEpics(getMachineData);
