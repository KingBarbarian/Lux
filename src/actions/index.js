import userActions from "./user";
import messageActions from "./message";
import paginateActions from "./paginate";
import customerActions from "./customer";

module.exports = {
  ...userActions,
  ...messageActions,
  ...paginateActions,
  ...customerActions
};
