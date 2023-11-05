var ckb = document.getElementById('temaCkb');
var lblCkb = document.getElementById('labelCkb')

ckb.addEventListener("change", function() {
    if (this.checked) {
        document.documentElement.style.setProperty('--varCorFont', '#000');
        document.documentElement.style.setProperty('--varCorFundo', 'whitesmoke');
        document.documentElement.style.setProperty('--varCorFundoSecundario', '#fff');
        document.documentElement.style.setProperty('--varCorSlide', '#ffffff7c');
        lblCkb.style.background = '#262626';
        lblCkb.style.color = '#fff';


    } else {
        document.documentElement.style.setProperty('--varCorFont', '#fff');
        document.documentElement.style.setProperty('--varCorFundo', '#262626');
        document.documentElement.style.setProperty('--varCorFundoSecundario', '#333333');
        document.documentElement.style.setProperty('--varCorSlide', '#0000007c');    
        lblCkb.style.background = 'whitesmoke';
        lblCkb.style.color = '#000';
    }
});