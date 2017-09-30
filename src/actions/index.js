import userActions from "./user";
import messageActions from "./message";
import paginateActions from "./paginate";
import dynamicActions from "./dynamic";

module.exports = {
  ...userActions,
  ...messageActions,
  ...paginateActions,
  ...dynamicActions
};
