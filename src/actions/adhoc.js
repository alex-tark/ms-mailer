const Promise = require('bluebird');
const sendMail = require('../utils/sendMail');

/**
 * Sends message via passed auth params for the account
 * @param  {Mixed} params { account: Object, email, [ctx] }
 * @return {Promise}
 */
module.exports = function adhoc({ params }) {
  const disposableConnection = this.initDisposableTransport(params.account, { pool: false });
  return Promise.using(disposableConnection, transport => (
    sendMail(transport, params.email, params.ctx)
  ));
};
