const QRCode = require('qrcode');
QRCode.toString('https://taobao.com', { type: 'terminal' },
    function (err, data) { 
        console.log(data);
    }
)