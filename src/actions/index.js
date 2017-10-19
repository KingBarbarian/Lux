import messageActions from "./message";
import paginateActions from "./paginate";
import customerActions from "./customer";
import distributors from "./distributor";
import credit from "./credit";

module.exports = {
  ...messageActions,
  ...paginateActions,
  ...customerActions,
  ...distributors,
  ...credit
};
