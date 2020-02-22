module.exports = {
    port: 3000,         //启动端口
    DB_URL: 'mongodb://127.0.0.1:27017/takeaway',    //数据库地址
    notifyUrl: 'http://39.108.3.12:3000/v1/notify_url',      //支付异步通知地址
    synNotifyUrl: 'http://39.108.3.12',              //客户端同步跳转
    sessionStorageURL: 'mongodb://127.0.0.1:27017/session',   //数据库存放session地址
    Bucket: 'meituan-74',   //七牛云bucket
    AccessKey: 'SYG3SptaNRuuj-bihv8pglHgM4Y00U37-Fmh84i9',   //七牛云accessKey
    SecretKey: '35lEerajvWbjyQR_gCE7y-MU29f5SpFWPg-OlUSa',    //七牛云secretKey
    tencentkey: 'YDSBZ-B7AKK-NH3JC-AUJLJ-5QTY3-H4FD5',        //腾讯位置secreKey
    tencentkey2: '',        //腾讯位置服务secreKey
    wechatAppid: '',  // 微信小程序appid
    wecahatSecret: '' // 微信小程序密钥
};


