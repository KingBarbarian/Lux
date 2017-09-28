import userActions from "./user";
import messageActions from './message';

module.exports = {
  ...userActions,
  ...messageActions,
};
