(this["webpackJsonpvanity-safe-generator"]=this["webpackJsonpvanity-safe-generator"]||[]).push([[0],{1054:function(e,n){},1301:function(e,n){},1617:function(e,n){},1666:function(e,n){},1779:function(e,n,t){"use strict";t.r(n);var r,a,c=t(11),i=t(35),s=t(0),o=t.n(s),d=t(34),u=t.n(d),f=t(32),l=t(9),b=t.n(l),p=t(27),x=t(61),j=t(138),h=t(39),y=t(261),O=t.n(y),m=t(664),v=t(117),g=t(262),w=t(665),F=t(666),A={1:{masterCopyAddress:"0x6851D6fDFAfD08c0295C392436245E5bc78B0185",proxyFactoryAddress:"0x76E2cFc1F5Fa8F6a5b3fC4c8F4788F0116861F9B",fallbackHandlerAddress:"0xd5D82B6aDDc9027B22dCA772Aa68D5d74cdBdF44"},4:{masterCopyAddress:"0x6851D6fDFAfD08c0295C392436245E5bc78B0185",proxyFactoryAddress:"0x76E2cFc1F5Fa8F6a5b3fC4c8F4788F0116861F9B",fallbackHandlerAddress:"0xd5D82B6aDDc9027B22dCA772Aa68D5d74cdBdF44"},5:{masterCopyAddress:"0x6851D6fDFAfD08c0295C392436245E5bc78B0185",proxyFactoryAddress:"0x76E2cFc1F5Fa8F6a5b3fC4c8F4788F0116861F9B",fallbackHandlerAddress:"0xd5D82B6aDDc9027B22dCA772Aa68D5d74cdBdF44"},42:{masterCopyAddress:"0x6851D6fDFAfD08c0295C392436245E5bc78B0185",proxyFactoryAddress:"0x76E2cFc1F5Fa8F6a5b3fC4c8F4788F0116861F9B",fallbackHandlerAddress:"0xd5D82B6aDDc9027B22dCA772Aa68D5d74cdBdF44"},100:{masterCopyAddress:"0x6851D6fDFAfD08c0295C392436245E5bc78B0185",proxyFactoryAddress:"0x76E2cFc1F5Fa8F6a5b3fC4c8F4788F0116861F9B",fallbackHandlerAddress:"0xd5D82B6aDDc9027B22dCA772Aa68D5d74cdBdF44"},246:{masterCopyAddress:"0x6851D6fDFAfD08c0295C392436245E5bc78B0185",proxyFactoryAddress:"0x76E2cFc1F5Fa8F6a5b3fC4c8F4788F0116861F9B",fallbackHandlerAddress:"0xd5D82B6aDDc9027B22dCA772Aa68D5d74cdBdF44"},73799:{masterCopyAddress:"0x6851D6fDFAfD08c0295C392436245E5bc78B0185",proxyFactoryAddress:"0x76E2cFc1F5Fa8F6a5b3fC4c8F4788F0116861F9B",fallbackHandlerAddress:"0xd5D82B6aDDc9027B22dCA772Aa68D5d74cdBdF44"}},C="0x".concat("0".repeat(40)),D=function(e){return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g," ")},B=function(e){return Math.round(1e4*e)/100},k=t(767),S=function(){var e=Object(x.a)(b.a.mark((function e(n,t){var c,i;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r&&r){e.next=11;break}return(c=k({abi:w})).setProvider(n.currentProvider),e.next=5,c.at(t.masterCopyAddress);case 5:return r=e.sent,(i=k({abi:F})).setProvider(n.currentProvider),e.next=10,i.at(t.proxyFactoryAddress);case 10:a=e.sent;case 11:return e.abrupt("return",{masterCopy:r,proxyFactory:a});case 12:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),T=function(){var e=Object(x.a)(b.a.mark((function e(n,t,r){var a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.contract.methods.setup([t],1,C,"0x",r.fallbackHandlerAddress,C,0,C).encodeABI();case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}}),e)})));return function(n,t,r){return e.apply(this,arguments)}}(),E=function(){var e=Object(x.a)(b.a.mark((function e(n,t,r){var a,c,i,s,o,d,u,f,l,p,x,j;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.eth.net.getId();case 2:return e.t0=e.sent,a=A[e.t0],e.next=6,S(n,a);case 6:return c=e.sent,i=c.masterCopy,s=c.proxyFactory,e.next=11,T(i,t,a);case 11:return o=e.sent,d=O.a.rawEncode(["uint256"],[r]).toString("hex"),e.next=15,s.proxyCreationCode();case 15:return u=e.sent,f=O.a.rawEncode(["address"],[i.address]).toString("hex"),l=Object(v.toBuffer)(s.address),p=Object(g.keccak256)(Object(v.toBuffer)("0x"+Object(g.keccak256)(Object(v.toBuffer)(o)).toString("hex")+d)),x=Object(v.toBuffer)(u+f),j="0x"+Object(m.generateAddress2)(l,p,x).toString("hex"),e.abrupt("return",n.utils.toChecksumAddress(j));case 22:case"end":return e.stop()}}),e)})));return function(n,t,r){return e.apply(this,arguments)}}(),z=function(){var e=Object(x.a)(b.a.mark((function e(n,t,r){var a,c,i,s,o,d,u;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.eth.net.getId();case 2:return e.t0=e.sent,a=A[e.t0],e.next=6,S(r,a);case 6:return c=e.sent,i=c.masterCopy,s=c.proxyFactory,e.next=11,T(i,n,a);case 11:return o=e.sent,e.next=14,s.createProxyWithNonce(i.address,o,t,{from:n});case 14:return d=e.sent,u="0x"+d.receipt.rawLogs[0].data.substr(-40),e.abrupt("return",u);case 17:case"end":return e.stop()}}),e)})));return function(n,t,r){return e.apply(this,arguments)}}(),P=function(){var e=Object(x.a)(b.a.mark((function e(n,t,r,a){var c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c=r.substr(2,n.length),t||n.toLowerCase()===c.toLowerCase()){e.next=3;break}return e.abrupt("return",!1);case 3:if(!t||n===c){e.next=5;break}return e.abrupt("return",!1);case 5:return e.next=7,a.eth.getCode(r);case 7:return e.t0=e.sent,e.abrupt("return","0x"===e.t0);case 9:case"end":return e.stop()}}),e)})));return function(n,t,r,a){return e.apply(this,arguments)}}(),H=t(376),I=t.n(H);function M(){var e=Object(h.a)(["\n  justify-content: center;\n"]);return M=function(){return e},e}function R(){var e=Object(h.a)(["\n  display: flex;\n  height: 50px;\n  align-items: center;\n  & > p:first-child {\n    font-weight: bold;\n    margin-right: 10px;\n  }\n"]);return R=function(){return e},e}function L(){var e=Object(h.a)(["\n  margin: 24px;\n  @media screen and (max-width: 950px) {\n    margin: 10px auto;\n    width: 600px;\n  }\n  @media screen and (max-width: 650px) {\n    margin: 10px 0;\n    width: 100%;\n  }\n"]);return L=function(){return e},e}var V=Object(f.default)(i.Card)(L()),G=f.default.div(R()),J=Object(f.default)(G)(M()),N=t(668),W=t.n(N);function _(){var e=Object(h.a)(["\n  display: flex;\n  justify-content: center;\n\n  .web3connect-connect-button {\n    outline: none;\n    background: #008c73;\n    border: 1px solid #008c73;\n    border-radius: 4px;\n    color: #fff;\n    cursor: pointer;\n    transform: none;\n    padding: 0 25px;\n    font-weight: normal;\n    font-size: 14px;\n    box-shadow: none;\n  }\n  .sc-bdVaJa {\n    padding: 0;\n  }\n  .idCQSl {\n    transform: none;\n  }\n  .idCQSl:hover {\n    background: #005546;\n    box-shadow: none;\n    transform: none;\n  }\n"]);return _=function(){return e},e}var q=t(1658).default,Q=f.default.div(_()),Y=function(e){var n=e.onConnect;return Object(c.jsx)(Q,{children:Object(c.jsx)(W.a.Button,{providerOptions:{walletconnect:{package:q,options:{infuraId:"b42c928da8fd4c1f90374b18aa9ac6ba"}}},onConnect:n,onClose:function(){}})})};function Z(){var e=Object(h.a)(["\n  color: #008c73;\n  padding: 0 15px 0 0;\n  @media screen and (max-width: 500px) {\n    padding: 0 0 15px 0;\n  }\n"]);return Z=function(){return e},e}function K(){var e=Object(h.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  @media screen and (max-width: 500px) {\n    flex-direction: column;\n    text-align: center;\n  }\n"]);return K=function(){return e},e}var U=f.default.div(K()),X=Object(f.default)(i.Title)(Z()),$=function(e){var n=e.owner,t=e.setWeb3,r=function(){var e=Object(x.a)(b.a.mark((function e(n){var r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n&&(r=new I.a(n),t(r));case 1:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return Object(c.jsx)(V,{children:Object(c.jsxs)(U,{children:[Object(c.jsx)(X,{size:"md",withoutMargin:!0,children:"Vanity Safe Generator"}),Object(c.jsx)(G,{children:n?Object(c.jsx)(i.EthHashInfo,{hash:n,name:"Safe owner:",showIdenticon:!0,identiconSize:"lg",textSize:"xl",showCopyBtn:!0,showEtherscanBtn:!0,shortenHash:4}):Object(c.jsx)(Y,{onConnect:r})})]})})};function ee(){var e=Object(h.a)(["\n  display: flex;\n  justify-content: center;\n  margin: 20px auto 0;\n  button {\n    @media screen and (max-width: 950px) {\n      width: 100%;\n    }\n  }\n"]);return ee=function(){return e},e}function ne(){var e=Object(h.a)(["\n  text-decoration: none;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n"]);return ne=function(){return e},e}function te(){var e=Object(h.a)(["\n  margin-left: 5px;\n"]);return te=function(){return e},e}function re(){var e=Object(h.a)(["\n  display: flex;\n  justify-content: center;\n  padding: 30px 0 10px 0;\n"]);return re=function(){return e},e}function ae(){var e=Object(h.a)(["\n  opacity: ",";\n  min-width: 490px;\n  @media screen and (max-width: 950px) {\n    min-width: 100%;\n    width: 100%;\n  }\n"]);return ae=function(){return e},e}var ce=f.default.div(ae(),(function(e){return e.opaque?.2:1})),ie=f.default.div(re()),se=Object(f.default)(i.Loader)(te()),oe=f.default.a(ne()),de=f.default.div(ee()),ue=function(e){var n=Object(s.useState)(!1),t=Object(j.a)(n,2),r=t[0],a=t[1],o=e.safeState,d=e.web3,u=e.setSafeState,f=o.nonce,l=o.owner,h=o.outputAddress,y=o.isValid,O=o.isDeploying,m=o.deployedAddress;Object(s.useEffect)((function(){window.innerWidth<=650?a(!0):a(!1)}),[y]);var v=function(){var e=Object(x.a)(b.a.mark((function e(n,t){var r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u((function(e){return Object(p.a)(Object(p.a)({},e),{},{isDeploying:!0})})),e.prev=1,e.next=4,z(n,t,d);case 4:r=e.sent,u((function(e){return Object(p.a)(Object(p.a)({},e),{},{deployedAddress:r})})),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),u((function(e){return Object(p.a)(Object(p.a)({},e),{},{deployedAddress:""})}));case 11:u((function(e){return Object(p.a)(Object(p.a)({},e),{},{isDeploying:!1})}));case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(n,t){return e.apply(this,arguments)}}();return Object(c.jsxs)(V,{children:[Object(c.jsx)(J,{children:Object(c.jsx)(ce,{opaque:!y,children:Object(c.jsx)(i.EthHashInfo,{hash:h,name:"Safe address:",showIdenticon:!0,identiconSize:"lg",textSize:"xl",network:"rinkeby",showCopyBtn:y,showEtherscanBtn:y,shortenHash:r?8:0})})}),O&&Object(c.jsx)(ie,{children:Object(c.jsx)(se,{size:"sm"})}),m&&Object(c.jsx)(ie,{children:Object(c.jsx)(J,{children:Object(c.jsx)(i.Text,{size:"xl",color:"primary",children:"Congratulations! Your Safe is ready!"})})}),Object(c.jsx)(de,{children:m?Object(c.jsx)(oe,{href:"https://rinkeby.gnosis-safe.io/app/#/safes/".concat(m),target:"_blank",rel:"noreferrer",children:Object(c.jsx)(i.Button,{size:"lg",color:"primary",variant:"contained",children:"Open in Safe Multisig app"})}):Object(c.jsx)(i.Button,{size:"lg",color:"primary",variant:"contained",onClick:function(){return v(l,f)},disabled:!y,children:"Deploy Safe"})})]})};function fe(){var e=Object(h.a)(["\n  @media screen and (max-width: 950px) {\n    text-align: center;\n  }\n  button {\n    display: block;\n    width: 100%;\n  }\n  .eAuvgm {\n    @media screen and (max-width: 950px) {\n      max-width: 100%;\n      width: 100%;\n    }\n  }\n"]);return fe=function(){return e},e}var le=f.default.div(fe()),be=function(e){var n=e.search,t=e.addressPattern,r=e.isCaseSensitive,a=e.setSearchState,s=e.disabled;return Object(c.jsxs)(V,{children:[Object(c.jsx)(G,{children:Object(c.jsx)(i.Text,{size:"xl",children:"Safe address prefix:"})}),Object(c.jsxs)(le,{children:[Object(c.jsx)(i.TextField,{id:"targetAddress",label:"0x",value:t,onChange:function(e){return a((function(n){return Object(p.a)(Object(p.a)({},n),{},{addressPattern:e.target.value})}))},autoComplete:"off"}),Object(c.jsx)(G,{children:Object(c.jsx)(i.Checkbox,{name:"checkbox",checked:r,onChange:function(e,n){return a((function(e){return Object(p.a)(Object(p.a)({},e),{},{isCaseSensitive:n})}))},label:"Case-sensitive"})}),Object(c.jsx)(i.Button,{size:"lg",color:"primary",variant:"contained",onClick:n,disabled:s,children:"Generate custom Safe address"})]})]})};function pe(){var e=Object(h.a)(["\n  width: 65px;\n"]);return pe=function(){return e},e}function xe(){var e=Object(h.a)(["\n  background: #008c73;\n  height: 15px;\n  width: ",";\n"]);return xe=function(){return e},e}function je(){var e=Object(h.a)(["\n  background: #f0efee;\n  --width: 140px;\n  flex: 1;\n  margin-right: 10px;\n  border-radius: 4px;\n  overflow: hidden;\n"]);return je=function(){return e},e}var he=f.default.div(je()),ye=f.default.div(xe(),(function(e){return e.width+"%"})),Oe=f.default.div(pe()),me=function(e){var n=e.difficulty,t=e.attempts,r=e.probability,a=e.isRunning;return Object(c.jsxs)(V,{children:[Object(c.jsxs)(G,{children:[Object(c.jsx)(i.Text,{size:"xl",children:"Difficulty:"}),Object(c.jsx)(i.Text,{size:"xl",children:D(n)})]}),Object(c.jsxs)(G,{children:[Object(c.jsx)(i.Text,{size:"xl",children:"Generated:"}),Object(c.jsxs)(i.Text,{size:"xl",children:[D(t)," addresses"]})]}),Object(c.jsxs)(G,{children:[Object(c.jsx)(i.Text,{size:"xl",children:"Probability:"}),Object(c.jsx)(he,{children:Object(c.jsx)(ye,{width:B(r)})}),Object(c.jsx)(Oe,{children:Object(c.jsxs)(i.Text,{size:"xl",children:[B(r),"%"]})})]}),Object(c.jsxs)(G,{children:[Object(c.jsx)(i.Text,{size:"xl",children:"Status:"}),Object(c.jsx)(i.Text,{size:"xl",children:a?"Running":"Stopped"})]})]})};function ve(){var e=Object(h.a)(["\n  display: flex;\n  & > div {\n    flex: 1 1;\n  }\n  @media screen and (max-width: 950px) {\n    flex-direction: column;\n  }\n"]);return ve=function(){return e},e}function ge(){var e=Object(h.a)(["\n  padding: 10px;\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n  max-width: 950px;\n  margin: 0 auto;\n"]);return ge=function(){return e},e}var we=f.default.div(ge()),Fe=f.default.div(ve()),Ae="0x ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ?",Ce={addressPattern:"",isCaseSensitive:!1},De={nonce:0,owner:"",outputAddress:Ae,isValid:!1,isDeploying:!1,deployedAddress:""},Be={attempts:0,difficulty:0,probability:0,isRunning:!1},ke=function(){var e=Object(s.useState)(void 0),n=Object(j.a)(e,2),t=n[0],r=n[1],a=Object(s.useState)(Ce),i=Object(j.a)(a,2),o=i[0],d=i[1],u=Object(s.useState)(De),f=Object(j.a)(u,2),l=f[0],h=f[1],y=Object(s.useState)(Be),O=Object(j.a)(y,2),m=O[0],v=O[1];Object(s.useEffect)((function(){var e=function(){var e=Object(x.a)(b.a.mark((function e(n){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.t0=n.eth.defaultAccount,e.t0){e.next=5;break}return e.next=4,n.eth.getAccounts();case 4:e.t0=e.sent[0];case 5:t=e.t0,h((function(e){return Object(p.a)(Object(p.a)({},e),{},{owner:t})}));case 7:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();t&&e(t)}),[t]),Object(s.useEffect)((function(){var e=o.addressPattern,n=o.isCaseSensitive,t=0;e&&(t=n?Math.pow(22,e.length):Math.pow(16,e.length)),v((function(e){return Object(p.a)(Object(p.a)({},e),{},{difficulty:t})}))}),[o]),Object(s.useEffect)((function(){var e=function(){var e=Object(x.a)(b.a.mark((function e(){var n,r,a,c,i;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:return n=l.owner,r=l.nonce,a=o.addressPattern,c=o.isCaseSensitive,e.next=6,E(t,n,r.toString());case 6:return i=e.sent,e.next=9,P(a,c,i,t);case 9:if(e.sent){e.next=14;break}h((function(e){return Object(p.a)(Object(p.a)({},e),{},{outputAddress:i,nonce:e.nonce+1})})),v((function(e){return Object(p.a)(Object(p.a)({},e),{},{attempts:e.attempts+1,probability:1-Math.pow(1-1/e.difficulty,e.attempts)})})),e.next=16;break;case 14:h((function(e){return Object(p.a)(Object(p.a)({},e),{},{outputAddress:i,isValid:!0})})),v((function(e){return Object(p.a)(Object(p.a)({},e),{},{isRunning:!1})}));case 16:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();m.isRunning&&e()}),[t,m.isRunning,o,l]);return Object(c.jsxs)(we,{children:[Object(c.jsx)($,{owner:l.owner,setWeb3:r}),Object(c.jsxs)(Fe,{children:[Object(c.jsx)(be,Object(p.a)(Object(p.a)({search:function(){v((function(e){return Object(p.a)(Object(p.a)({},e),{},{attempts:0,probability:0,isRunning:!0})})),h((function(e){return Object(p.a)(Object(p.a)({},e),{},{nonce:0,outputAddress:Ae,isValid:!1,isDeploying:!1,deployedAddress:""})}))}},o),{},{setSearchState:d,disabled:!l.owner||!o.addressPattern||m.isRunning})),Object(c.jsx)(me,Object(p.a)({},m))]}),Object(c.jsx)(ue,{safeState:l,web3:t,setSafeState:h})]})},Se=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,1846)).then((function(n){var t=n.getCLS,r=n.getFID,a=n.getFCP,c=n.getLCP,i=n.getTTFB;t(e),r(e),a(e),c(e),i(e)}))},Te=t(669),Ee=t(670);function ze(){var e=Object(h.a)(["\n  * {\n    margin: 0;\n    padding: 0;\n    font-size: 14px;\n    box-sizing: border-box;\n  }\n\n  body {\n    margin: 0;\n    padding: 0;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n    background: #F7F5F5;\n    @media screen and (max-width: 950px) {\n      padding: 10px;\n    }\n  }\n\n  @font-face {\n    font-family: 'Averta';\n    font-display: swap;\n    src: local('Averta'), local('Averta Bold'),\n    url(",") format('woff2'),\n    url(",") format('woff');\n  }\n\n  /* EthHashInfo styles */\n  .fZMulI {\n    & > p:first-child {\n      font-weight: bold;\n    }\n  }\n"]);return ze=function(){return e},e}var Pe=Object(f.createGlobalStyle)(ze(),Ee.a,Te.a);u.a.render(Object(c.jsx)(o.a.StrictMode,{children:Object(c.jsxs)(f.ThemeProvider,{theme:i.theme,children:[Object(c.jsx)(Pe,{}),Object(c.jsx)(ke,{})]})}),document.getElementById("root")),Se()},665:function(e){e.exports=JSON.parse('[{"constant":false,"inputs":[{"internalType":"address[]","name":"_owners","type":"address[]"},{"internalType":"uint256","name":"_threshold","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"bytes","name":"data","type":"bytes"},{"internalType":"address","name":"fallbackHandler","type":"address"},{"internalType":"address","name":"paymentToken","type":"address"},{"internalType":"uint256","name":"payment","type":"uint256"},{"internalType":"address payable","name":"paymentReceiver","type":"address"}],"name":"setup","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}]')},666:function(e){e.exports=JSON.parse('[{"constant":true,"inputs":[],"name":"proxyCreationCode","outputs":[{"internalType":"bytes","name":"","type":"bytes"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"_mastercopy","type":"address"},{"internalType":"bytes","name":"initializer","type":"bytes"},{"internalType":"uint256","name":"saltNonce","type":"uint256"}],"name":"createProxyWithNonce","outputs":[{"internalType":"contract GnosisSafeProxy","name":"proxy","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"function"}]')},707:function(e,n){},708:function(e,n){},738:function(e,n){},740:function(e,n){},751:function(e,n){},753:function(e,n){},764:function(e,n){},832:function(e,n){},838:function(e,n){},866:function(e,n){},873:function(e,n){},877:function(e,n){},881:function(e,n){},888:function(e,n){},928:function(e,n){},957:function(e,n){},959:function(e,n){},966:function(e,n){},967:function(e,n){},985:function(e,n){},991:function(e,n){}},[[1779,1,2]]]);
//# sourceMappingURL=main.fec300d8.chunk.js.map