export const CONFIG = {
    CHOREO_TOKEN_URL: window.env.CHOREO_SERVER_URL + "/oauth2/token",
    CHOREO_APP_CONSUMER_KEY: window.env.CHOREO_APP_CONSUMER_KEY,
    CHOREO_APP_CONSUMER_SECRET: window.env.CHOREO_APP_CONSUMER_SECRET,
    CHOREO_ACCOUNT_SERVICE_CONSUMER_KEY: window.env.CHOREO_ACCOUNT_SERVICE_CONSUMER_KEY,
    CHOREO_ACCOUNT_SERVICE_SECRET: window.env.CHOREO_ACCOUNT_SERVICE_SECRET,
    CHOREO_CONSENT_SERVICE_CONSUMER_KEY: window.env.CHOREO_CONSENT_SERVICE_CONSUMER_KEY,
    CHOREO_CONSENT_SERVICE_SECRET: window.env.CHOREO_CONSENT_SERVICE_SECRET,
    CHOREO_URL_AUTHORIZATION_API: window.env.CHOREO_API_HOST + "/authorizationapi/1.0.0/authorize",
    CHOREO_URL_USER_ACCESS_TOKEN_API: window.env.CHOREO_API_HOST + "/useraccesstokenapi/1.0.0/userAccessToken",
    CHOREO_URL_OPEN_BANKING_API: window.env.CHOREO_API_HOST + "/accountsandtransactionapi/1.0.0/accountAccessConsent",
    ASGARDEO_APP_CONSUMER_KEY: window.env.ASGARDEO_APP_CONSUMER_KEY,
    ASGARDEO_APP_CONSUMER_SECRET: window.env.ASGARDEO_APP_CONSUMER_SECRET,
    ASGARDEO_REDIRECT_URL: window.env.HOST_URL + "/oauth2/callback",
    CHOREO_URL_TRANSACTIONS_API: window.env.CHOREO_API_HOST + "/wealthaccounttransactions/1.0.0/transactions",
    CHOREO_URL_ACCOUNTS_API: window.env.CHOREO_API_HOST + "/wealthaccounttransactions/1.0.0/accountdetails",
    CHOREO_URL_BANKS_API: window.env.CHOREO_API_HOST + "/wealthmanagementbanks/1.0.0",
    SIGN_IN_REDIRECT_URL: window.env.HOST_URL + "/dashboard",
    SIGN_OUT_REDIRECT_URL: window.env.HOST_URL + "/",
    ASGARDEO_BASE_URL: window.env.ASGARDEO_BASE_URL,
    SCOPE: [ "profile" ],
    CHOREO_URL_ACC_TRAN_API: window.env.CHOREO_API_HOST + "/wealthaccounttransactions/1.0.0/investmentaccounts",
};
