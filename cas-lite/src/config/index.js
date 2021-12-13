const config={
    PORT :3030,
    API_KEY:'INFY',
    HOST:'https://127.0.0.1',
    MYSQL:{
        HOST:'127.0.0.1',
        USER:'root',
        PASSKEY:'rootpass',
        PORT:"3306"
    },
    MONGO:{
        CONNECTION_URL_SSO:'mongodb://127.0.0.1:27017/sso',
        CONNECTION_URL_APP:'mongodb://127.0.0.1:27017/app_monitor'
    },
    SMTP:{
        USER:'smtpuser',
        PASSKEY:'smtppass',
        HOST:'smtphost',
        PORT:25,
        MAIL:'mail@smtp.com'
    },
    CLIENT:'HOBS',
    PASS_RESET_LINK:'/v2/cas/resetPassword'
}
module.exports = config;