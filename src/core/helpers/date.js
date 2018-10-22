import moment from 'moment-timezone';

export const formatDateTime = (timestamp, format) => moment.unix(timestamp).tz(config.timezone).format(format);
