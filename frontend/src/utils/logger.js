export const LOG_LEVELS = {
    DEBUG: 'debug',
    INFO: 'info',
    WARN: 'warn',
    ERROR: 'error'
};



const CURRENT_LOG_LEVEL = process.env.REACT_APP_NODE_ENV === 'prod'? LOG_LEVELS.WARN: LOG_LEVELS.DEBUG; // Change this to set the current log level

export const logger = {
  debug: (...args) => CURRENT_LOG_LEVEL <= LOG_LEVELS.DEBUG && console.debug(...args),
  info: (...args) => CURRENT_LOG_LEVEL <= LOG_LEVELS.INFO && console.info(...args),
  warn: (...args) => CURRENT_LOG_LEVEL <= LOG_LEVELS.WARN && console.warn(...args),
  error: (...args) => console.error(...args), // Always log errors
};
