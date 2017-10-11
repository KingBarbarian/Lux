import { Distributor } from "@/actions";
const defaultState = {
  machineData: []
};

const distributor = (state = defaultState, action) => {
  switch (action.type) {
    case Distributor.GET_MACHINE_TYPES:
      return {
        ...state,
        machineData: action.payload.data.map(type => ({
          value: type.id,
          label: type.name
        }))
      };
    case Distributor.GET_MACHINE_BRAND:
      let machineType = state.find(
        type => type.value === action.data.machineTypeId
      );
      machineType.children = action.payload.data.map(brand => ({
        value: brand.id,
        label: brand.name
      }));
      return { ...state };
    case Distributor.GET_MACHINE_CODE:
      let machineBrand = state
        .find(type => type.value === action.data.machineId)
        .find(brand => brand.value === action.data.brandId);
      machineBrand.children = action.payload.data.map(machine => ({
        value: machine.id,
        label: machine.name
      }));
      return { ...state };
    default:
      return state;
  }
};

module.exports = distributor;
