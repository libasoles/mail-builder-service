import basic from './basic';
import vouchers from './vouchers';

/** Each mail type should merge basic styles */
export default {
  basic,
  vouchers: {
    ...basic,
    ...vouchers,
  },
};
