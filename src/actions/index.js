import userActions from "./user";
import messageActions from "./message";
import paginateActions from "./paginate";
import customerActions from "./customer";
import distributors from "./distributor";

module.exports = {
  ...userActions,
  ...messageActions,
  ...paginateActions,
  ...customerActions,
  ...distributors
};
