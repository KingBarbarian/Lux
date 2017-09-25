import createRequestTypes from "./actionHelper";

/**
 * ACTION_DEMO_GET
 */
const ACTION_DEMO_GET = createRequestTypes("ACTION_DEMO_GET");
const actionDemoGet = obj => {
    return {
        type: ACTION_DEMO.REQUEST,
        endpoint: "/action/get",
        data: obj,
        method: "GET"
    };
};

export default {
    SCHEDULE_ORDER_GET,
    getScheduleOrderByCustomer
};
