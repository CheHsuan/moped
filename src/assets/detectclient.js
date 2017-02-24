var urlPath ='#';
var urlHref = location.href;

if(true) {
    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        urlHref = urlHref.replace(urlPath,'mobile/index.html');
        //特殊情况,首頁
        if(location.pathname === '/') {
            urlHref='/mobile/index.html'; //直接轉到行動版首頁
        }
        window.location.replace(urlHref); //轉址
    }
}
