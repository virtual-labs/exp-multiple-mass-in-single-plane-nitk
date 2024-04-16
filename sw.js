importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.2.0/workbox-sw.js');

workbox.precaching.precacheAndRoute([{"revision":"7cc40c199d128af6b01e74a28c5900b0","url":"assets/css/bootstrap.min.css"},{"revision":"b1e92a5593c58e6832c7f6dce30a06ce","url":"assets/css/common-styles-responsive.css"},{"revision":"77f3d6639e02a6b774981b1ad75806f5","url":"assets/css/common-styles.css"},{"revision":"22d85286c513f3d4038c42b486ea1bf6","url":"assets/css/fontawesome.min.css"},{"revision":"613745964e452941615d4e3d1a387ab7","url":"assets/css/github-markdown.min.css"},{"revision":"a394012067cf46c79ab70d75f9caf500","url":"assets/css/katex.min.css"},{"revision":"6d9501ec2a9a6e52b90a8d27340202b6","url":"assets/css/vlabs-style.css"},{"revision":"269550530cc127b6aa5a35925a7de6ce","url":"assets/fonts/font-awesome-4.7.0/css/font-awesome.min.css"},{"revision":"912ec66d7572ff821749319396470bde","url":"assets/fonts/font-awesome-4.7.0/fonts/fontawesome-webfont.svg"},{"revision":"ff2be0cf35ad764cfcc9779f148aa8ac","url":"assets/images/favicon.png"},{"revision":"59cbb9b31115938b15a1786dcedd7796","url":"assets/images/logo-new.png"},{"revision":"97524ffa51690acdcb0e54a4f5b8502a","url":"assets/images/logo.png"},{"revision":"7d45f6653f4b7219600292be2d83f1b4","url":"assets/images/popout.png"},{"revision":"7924fe35ba7c22ce467efd504cce93d7","url":"assets/images/vlabs-color-small-moe.jpg"},{"revision":"cd2bcc63369f82702340cbc2281c38d1","url":"assets/js/assessment_v2.js"},{"revision":"0c6c2d6c8bd1ff223774dc9689ee7788","url":"assets/js/assessment.js"},{"revision":"315a02d258e75a35cd6575839161db03","url":"assets/js/event-handler.js"},{"revision":"0f6278fc4d074348edaba4042b4dd1f8","url":"assets/js/iframeResize.js"},{"revision":"4ae9cbf2f402c4a1dde3d8f0e3e8cf1b","url":"assets/js/instruction-box.js"},{"revision":"d9b11ca4d877c327889805b73bb79edd","url":"assets/js/jquery-3.4.1.slim.min.js"},{"revision":"bc2456c37c311bbdd25f4f54e0e8d1b9","url":"assets/js/toggleSidebar.js"},{"revision":"30ef592489ce0ac84ab367ce9eb0d597","url":"assets/js/webcomponents-loader.min.js"},{"revision":"0f2e317d41fb69dfb0270dbdf749e380","url":"assets/js/zero-md.min.js"},{"revision":"caf1062309e21ed583d00d24cac20912","url":"assets/katex_assets/katex.min.css"},{"revision":"01894f6b58da02c2870de2dc1c123c67","url":"details.json"},{"revision":"f81d741825984e93f26a974a930797ee","url":"feedback.html"},{"revision":"40ba5b57a3d406c9d54ef39842849fec","url":"images/fc.png"},{"revision":"38acf508da9ef80751dc22512dd2cc35","url":"images/fc1.png"},{"revision":"929c796c1da7a1bbe3f5aa5a9e50afe7","url":"images/fh.png"},{"revision":"f74f405d442af804f04289e25e096b3c","url":"images/formula.png"},{"revision":"156cf434beb37e6d87d84485de6e3a4d","url":"images/next2.png"},{"revision":"7960c24f4ea318739e8f02d438e23977","url":"images/omega.png"},{"revision":"e6bf3f22b9adfd173c943d33f3fe95df","url":"images/pause.png"},{"revision":"2225932b1270549d8047b0ccbe05772a","url":"images/play1.png"},{"revision":"24bd198a3c2c9f3ceb15043ecb2bfca9","url":"images/prev.png"},{"revision":"214c61ece2baac11ffc306d9786b4ddd","url":"images/result.png"},{"revision":"bfa80d2c1e6c60e85eab231068281f4d","url":"images/resultscreen.png"},{"revision":"17feb6c00b95745a7e87a55149545b72","url":"images/rotate_clockwise.png"},{"revision":"bc31235e7e4c73b4a13a17fa25cc8441","url":"images/Simscreen1.png"},{"revision":"c7668180e7e58019e14574ddcc731d35","url":"images/simulation.png"},{"revision":"7b4bb9a2dc520af02573305999059604","url":"images/theta.png"},{"revision":"e8b0c2e3bf8f0bff3b264bb7b959cb66","url":"images/theta1.png"},{"revision":"f249d66ea63b24f5b12e180c7c73b588","url":"images/theta2.png"},{"revision":"876f0988f11a55820cfc117365666335","url":"images/theta3.png"},{"revision":"e19607460d17261bbb4ca4fe4dee8a3a","url":"images/theta4.png"},{"revision":"579333e34cba2adf12887902deb0a3cf","url":"images/thetafinal.png"},{"revision":"058eed80d5b2d62bcb265b56e12787a8","url":"images/var1.png"},{"revision":"983bba88adbf88ff4663585e99ed6e5c","url":"images/var2.png"},{"revision":"21990ea88c9b227e579f387e14cd7d98","url":"index.html"},{"revision":"7321ca399230ac1dbf2e0861694a9b39","url":"performance-report.html"},{"revision":"914e243a5d6373b22585e9bdd0c25eef","url":"plugins/svc-rating/checkEventSubmission.js"},{"revision":"e99077e253b07129d0b9755e6a06f93f","url":"plugins/svc-rating/config.js"},{"revision":"40bc0d089f560247a1bfb0cd151232ad","url":"plugins/svc-rating/imageData.js"},{"revision":"a47af25e8d8500c59a6c26bac42a0cd9","url":"plugins/svc-rating/images/empty-star.svg"},{"revision":"6ad37561267a21d6bcb558f9c7c3fe8a","url":"plugins/svc-rating/images/half-star.svg"},{"revision":"7924fe35ba7c22ce467efd504cce93d7","url":"plugins/svc-rating/images/logo.jpg"},{"revision":"f2be5f1d57e0a2c690e34cf9095bed16","url":"plugins/svc-rating/images/mobile_rating_icon.png"},{"revision":"17c8ce8f2faa7937f7978a4dfb69df3a","url":"plugins/svc-rating/images/mobile-icon.svg"},{"revision":"96102a862f070a61a20193b621188ef3","url":"plugins/svc-rating/images/star.svg"},{"revision":"e083f28aa9e5a670a2e5de02197c261f","url":"plugins/svc-rating/index.html"},{"revision":"db18c05646b11f1fa66ef3ebb87116ca","url":"plugins/svc-rating/index.js"},{"revision":"fdc8b6772fb88081e86497fd2f75e20b","url":"plugins/svc-rating/package-lock.json"},{"revision":"7039ff00a75fd32443048e6ed0020a91","url":"plugins/svc-rating/package.json"},{"revision":"1ed592c19b20d396536ebd3611f3ef40","url":"plugins/svc-rating/rating-display.js"},{"revision":"0267f54f7993bcd47793dd7f7be56c92","url":"plugins/svc-rating/rating-submit.js"},{"revision":"57e53998ce85ab911eea27fdc421480d","url":"plugins/svc-rating/rating.js"},{"revision":"1bb81f97b0723bfdd89184d485a0ecad","url":"plugins/tool-performance/config.json"},{"revision":"3062d3749c84c5dc3fc7013e11376fce","url":"plugins/tool-performance/css/main.css"},{"revision":"8ec7b430663c34b8e9882c923e34e86e","url":"plugins/tool-performance/index.html"},{"revision":"6fc8455688b00e5dd6d392b61743473a","url":"plugins/tool-performance/js/api/gsc.js"},{"revision":"d62937417a11fee561c78bf3b145d85d","url":"plugins/tool-performance/js/api/lighthouse.js"},{"revision":"d42b124fa3c85371ea563f49f38e5a3d","url":"plugins/tool-performance/js/commonData.js"},{"revision":"11e328184e68c05f60030c19aa4efca9","url":"plugins/tool-performance/js/main.js"},{"revision":"66d4aa241bb986851066c1684270d236","url":"plugins/tool-performance/js/parse.js"},{"revision":"3f82067c934ff332a430c76f9e37b260","url":"plugins/tool-performance/js/populate/gsc.js"},{"revision":"9e183c67dc9157cd26b8a076ccf04d69","url":"plugins/tool-performance/js/populate/lighthouse.js"},{"revision":"1709dc5f9149e869449dcb2b7a8b3a20","url":"plugins/tool-performance/js/util.js"},{"revision":"1bb81f97b0723bfdd89184d485a0ecad","url":"plugins/tool-validation/config.json"},{"revision":"95c086500b7a5941bd950f22c888cc41","url":"plugins/tool-validation/css/main.css"},{"revision":"8c8a8e5422cc687a53deffd1326e5556","url":"plugins/tool-validation/index.html"},{"revision":"a35ebe17ce73daf38433381fbe0071de","url":"plugins/tool-validation/js/link_validation.js"},{"revision":"acc595e531160409a0194bf7190696d0","url":"plugins/tool-validation/js/main.js"},{"revision":"49049daf46cd95b6d8754b4df6cd57b2","url":"plugins/tool-validation/package-lock.json"},{"revision":"3e614b98b80bb07eef3338b563d697af","url":"plugins/tool-validation/package.json"},{"revision":"a6a81f1a679b5d3757cd84a8ee4f8ad5","url":"posttest.html"},{"revision":"cee3868d9fdd81e0976f25356a20d753","url":"posttest.json"},{"revision":"87d212f4f745c3e474da328108dea422","url":"pretest.html"},{"revision":"1a3093e11af4ef4323750c3cb9f1de3f","url":"pretest.json"},{"revision":"5f8fa2ac639e858ca9c3f5abb9ba1f9e","url":"procedure.html"},{"revision":"e437422e33488931c11018678d0f199c","url":"references.html"},{"revision":"9b5cfe92ec9fbd714706fa5a9be8c0d5","url":"simulation.html"},{"revision":"549739d5e0acf123b1c78b0e49072121","url":"simulation/css/general.css"},{"revision":"3e795b8e5867cd06a70b638f3d58d4fa","url":"simulation/css/jquery-ui.css"},{"revision":"ac98d13c7e13a19514c1c3d6885bf506","url":"simulation/css/query.css"},{"revision":"f5aa7d38ba3c31895a3e3790d65e4bd4","url":"simulation/css/style.css"},{"revision":"735b493e653256fc427aff4d634b3041","url":"simulation/images/bluebkdulls.svg"},{"revision":"5b06cc73cafff95d18de145dce2a147c","url":"simulation/images/bluebkdullsbw.png"},{"revision":"660630f8b0e00a5d1b1077b96ba89f76","url":"simulation/images/bluebkwdulls.svg"},{"revision":"2bda3afdc72aae9ed0c3c8ddd50275fd","url":"simulation/images/blueccwdull.svg"},{"revision":"8c66a36cd036f83d336f38db1312b346","url":"simulation/images/bluecwdull.svg"},{"revision":"08ce4011dc3c489dc39569e5ccb20f3d","url":"simulation/images/bluefwddullsbw.png"},{"revision":"f286896a0e223f36cc9db97ebe7a63e6","url":"simulation/images/bluepausedull.svg"},{"revision":"2605b8ba706fa1c485d282b784c23b7b","url":"simulation/images/blueplaydull.svg"},{"revision":"1e01241b44562ec9be28ccdaee5741c2","url":"simulation/images/logo_nitk.png"},{"revision":"02b3856455113dbe967bd95f04df94f7","url":"simulation/images/slider_handles.png"},{"revision":"8a24243072df38bdec6a9693ea77b9f5","url":"simulation/images/solve_.png"},{"revision":"ebe6b6902a408fbf9cac6379a1477525","url":"simulation/images/ui-icons_222222_256x240.png"},{"revision":"119dd0c2e94ad689de873ef39fd43e6e","url":"simulation/images/ui-icons_454545_256x240.png"},{"revision":"6f3bb0e6ff912d047d324d16accb1798","url":"simulation/index.html"},{"revision":"f7593ff5a5e4cd4106c1a5b3d0fe719d","url":"simulation/js/dpi.js"},{"revision":"84ca747eb5f076445ff836de49608628","url":"simulation/js/jquery-3.6.0.js"},{"revision":"5da2fa2a91f7059b60e7fd508be63d02","url":"simulation/js/jquery-ui.js"},{"revision":"aad94c542c7f4b7ebfb105e2118a1c53","url":"simulation/js/jquery-ui.min.js"},{"revision":"0652da382b6fceb033dfe2b6c06d4d11","url":"simulation/js/jquery.min.js"},{"revision":"08a481084856867d371586cbf8e835ef","url":"simulation/js/jquery.ui.touch-punch.js"},{"revision":"9b9e5df5ef16f8fdd3e65c14e2149f1f","url":"simulation/js/jquery.ui.touch-punch.min.js"},{"revision":"cd48e64863a56ca34e57a0fc2f0d8368","url":"simulation/js/MOMscript.js"},{"revision":"c69877f9a3bb6b79e933cd68937e418e","url":"simulation/js/newscript.js"},{"revision":"33dd956a63776199f072f33150e57909","url":"theory.html"},{"revision":"57f519d76c26d47b4eaada4abe7e84ef","url":"validator-report.html"}]);

// Add runtime caching for images, fonts, js, css.
workbox.routing.registerRoute(
    ({request}) => request.destination === 'script' || request.destination === 'style' || request.destination === 'font' || request.destination === 'image',
    new workbox.strategies.CacheFirst()
);

// Cache the json data from url https://github.com/exp-adder-circuit-iiith/pretest.json
// workbox.routing.registerRoute(
//     ({url}) => url.origin === 'https://github.com' && url.pathname === '/exp-adder-circuit-iiith/pretest.json',
//     new workbox.strategies.NetworkFirst()
// );