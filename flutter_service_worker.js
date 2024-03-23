'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "6afa24d28e539074b3e62110ec156cc6",
"favicon.ico": "64dc01f6127f6f150c171bebb857d4b0",
"index.html": "15a707f0b2f1b199d912490e1c691ec9",
"/": "15a707f0b2f1b199d912490e1c691ec9",
"main.dart.js": "f7ac86a0d973ffe076b9ba2f0ddc0348",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"icons/favicon-16x16.png": "278d3229a77bd0a84fbd7af044afa22a",
"icons/android-chrome-192x192.png": "f07afba8bd2f3d0b6d19be44cfc13806",
"icons/apple-touch-icon.png": "dcf0e552fa46dede1e9fe62bdf740a5f",
"icons/android-chrome-512x512.png": "7857474e07125ddff709a65634b2f25e",
"icons/favicon-32x32.png": "d2da67067efe2dd3bd5df40f871c87a4",
"manifest.json": "b508104defd48a849fef9a65a47dc766",
".git/config": "8345397db3e643f7dfa87bcb3b1aac1b",
".git/objects/95/df96bc3f6e3f7f7fb73f85366781f16be27489": "a8a55f273c63aa063a10175ae2cff9ee",
".git/objects/95/a310df664af674478d2e74025c97f06df61230": "070493efde783763fb93ac98007e24fa",
".git/objects/03/4dde5096b88bc68a4bf8afea4cb8c296b55989": "6d860da88a49a36006a6b288f4a3787f",
".git/objects/9b/e428c5718884b92ec25419775ae7b9433e27b4": "44c02b1edac83d23df7bed034390922d",
".git/objects/6a/562868741911ffc3a5345f3c094a71eb0d073d": "ad3237b80e6dc65be0e2000c6c0a445f",
".git/objects/56/12670d7c65428bba7dcb11081e38029bdf19df": "461f33ad0f83b1d0879200b7eafeac1a",
".git/objects/3d/708de6c5e97e9fe6003fd55998f2cbd141d3eb": "e6142c5a18f95a91f0c509385967aa57",
".git/objects/67/c73518b09a0acccf4c6c88d9976d74f19ff7f3": "0d61b9b170cb7b0a635ba3f7ad955bbe",
".git/objects/0b/15d4a15715470c6814896a16e6e154e3e814e0": "efb028a6b1304b451a23c73e4b3723c7",
".git/objects/94/a681e038bfdf7e23cbbe66b59716f182b2be43": "8b3f03292bcf2b2af8b1f19a3969b091",
".git/objects/60/0533b823b8104d837464040c36849a9fe07857": "45824517e8e557becf67e719387e523f",
".git/objects/60/0bafe19badef4590422405dab856450d4545ef": "f110e656283c53e3017f21b4a6213e41",
".git/objects/34/727ffdee042c625b38bfe9215faaad313e29ad": "14d53917b2795453630aa26f33f86537",
".git/objects/5f/fa0530c6f1c7201f89ea5d68176376b9b20a13": "2aa085e17a07a3b077a3958c06d1afb5",
".git/objects/05/a6537841cd87494363ff4534e3c80b573dc982": "bdb51e2cd5c4581b6d138de85f28e2f0",
".git/objects/9d/589801887b303561f8eea65f271cb8d720b1f1": "e9d22811b45da94c9ee0fbb2b3584bda",
".git/objects/a3/46b83033b2f31a059b50842fcb36e2127467ee": "ddde5fb51e1bf0fbf1689aa035eb3f75",
".git/objects/b5/01c9fa032b39c348bb20c7ea3008d73b3a37dd": "83a5444958dbbeb1d771509e45726bbf",
".git/objects/ac/5e0fe316b9ef7bfe7e1de01b10488d1945d8b1": "caac5673053eeed433779dc53d752528",
".git/objects/ad/7dd0536fbbed2a6cc7cbcaed4cdbb3ca0ec096": "ee799128024baa44c328d6483489d9fe",
".git/objects/be/06e7fdca57d8fc360647d7b7a6a0c7b2da7e26": "bae1db93c8ff34b5d96b8a5eaf24771a",
".git/objects/da/bf7c242e938c49fccd0cba88dc2fdccb2f65ee": "bbf7d12e4139b11a89628b8be2fcfda5",
".git/objects/a5/647604b8a04a974438c41910c5fff8f255bd70": "b394b17ad2e8b72963aefd4d785ac23e",
".git/objects/d6/edfa591c6899b948c8b690d0f7cd6f35859f2b": "f1750093847ad2dc287b9045e1a6bc06",
".git/objects/ae/fd4f714a1b51284513cb864e4e143854114e5d": "f14fae56f9dac039e74c4dcbe2168945",
".git/objects/d8/153b83b435c8ce77f6cf449d9ebf1dda975479": "efb5f69752d059f852ffab74c76e30db",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/f4/e7a28c2cae1ac30897abc0dfeba82f48d64611": "fd3929abe935afeab92df24ca4160f61",
".git/objects/f4/ed39295a91728a6efc777ab671663d33bf0135": "b30c619944781f7d72ed72764851d62d",
".git/objects/f3/9ebb929c4bee5c842de5dd93354bb1198b969e": "b764b8ff60c42de846c08f998f31d20f",
".git/objects/eb/e7346fe676c3405f6d8aa93cc7715cde7a0563": "133dccb1ba1739a7220b83818dd575f6",
".git/objects/fd/8302368eca98adf02d9e3f7787ec2f59f76b48": "b91438365a190660c9e709236cdf9b95",
".git/objects/e3/9e797d33bb8dfae3df9f540ac716f6cc00d013": "6eb75fb6b470f873c6565d7c9593d8b5",
".git/objects/e3/65d853c083b86b1540a1b172b417c5ef30cc78": "dd1eba0cab5246b1052b6f906bb0676a",
".git/objects/20/e03e8c7a78efabc355c8636d7a540c57179cd8": "bc82f874d5461f0018ef16e662a80210",
".git/objects/18/f324770cad041d2b2ea2446001d3c8c7aad5fb": "9d6baee2312f1e8bedb9da22a6225b98",
".git/objects/4b/ce11f832f26ee264d95b6790237601cf5a6088": "d9243641979aa81a886b057ab392745a",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/11/ccd1970a3013413d48483c890d57f27365181b": "60f4bf7e6eb0d5750d61889c61c2e33a",
".git/objects/73/a5ca9e6ea457a8e87e3e88047b9268f15bb75b": "437e873491b95548ba60fecc00fa7933",
".git/objects/87/dc5d8ceabbd3227eab5f24ac01975dd2ed174d": "86deb45fd2f6d6375c93ed5a4ba4a43a",
".git/objects/87/1a4c29fa9e23a90e02b12b252d56ebfec2b1c3": "7bb137adaabcef5b53605f6b4f28bd9a",
".git/objects/8f/3e71212c75ce40f54818e5664a005abd2e8e08": "1031abf9ad1b844f9a286a25121c1ce2",
".git/objects/8a/03491c1ca21089f294c85a3372ab7d000923a8": "07bfd717a1ed7aa724b61f9e8a1df1a8",
".git/objects/19/b216f382f4baf93c18b873f3a80ed92ab07a7b": "9df014c3c8bfa1cd6b865792f39342b0",
".git/objects/4d/ee126bbf9b6e6fa01f8d418dc85afab0f9e19e": "91987237c93ef3ea819c590f4c1d4795",
".git/objects/81/b00c2e9abea9a012dd7356813735c20bade097": "8839e4f897bd48e900e78d70aa4e3c90",
".git/objects/2a/b022196b0fad3910d38ae050ab6814be931799": "effb58727f53792624b2dede6a94285d",
".git/objects/2f/33be282c72d0dab6c9bbb0eeff78fdee780b2a": "4b2994b15282eb60b832cf2e82a32ca9",
".git/objects/9f/168779f592896fcb4a0e2b8fecb258e67ee7d6": "7a1dce3b77787cf8ea779db8a570d5f5",
".git/objects/6b/f76af18b207c379e1c0d358b26ab711e147256": "15caf3ab4c01d45b98fb446059ab8664",
".git/objects/38/31a8b6cb19d877b5f093e92fbb310bd8395c41": "fe838f361097dd6e92a28987cd0156c3",
".git/objects/36/7dce72de869b4100d7b1685da3b4780a595caa": "cef3df44a0013c58b9acd00764eb6491",
".git/objects/36/269fa8f910fd128e51994ead95ada55684fe91": "3cae57829cd9340cdfbf032cec4a5628",
".git/objects/5c/200b1ee910baa05a0efeaf179aa4c62026d6cc": "0b8631ca1292a439735ff11bb0172283",
".git/objects/30/34e9b2b97f5e1956366280ca267eda0d3e0067": "64c46fc84102bebb196c677ba4a61564",
".git/objects/5e/a06e453e19a4c3ef35cdcbdedb0f7d2cd3e47b": "51c8eda6ee68682588a3cc695d3c42c0",
".git/objects/37/7ead7488ba04497de54363ee4e4436edf85774": "d08a584d3f7b4fb2a65c159d695456ff",
".git/objects/01/d812a46fd0b7d225c026f511615edbb11cb11d": "4ab99743ddaa664b0eb021f76317dfae",
".git/objects/52/65820c6fb07e2f2c93b79c30709e8a47ecb8f2": "438b32618fdd67db003975252b570a97",
".git/objects/55/919b0b32f21410d9755ffbe64aeb2d07650744": "ffb88073b04c5f9454f1e7f08edc733c",
".git/objects/63/3e007bd7d301bf40d34bdf19ca341e57b5326c": "9dbdfe63088de4f46a800d47964d3621",
".git/objects/a7/1c873097bd0f25ecb391f1b76211cc9a75e228": "8ae4f5db15c3677a1ab15f86e23bb42d",
".git/objects/a7/384749ade6951e5ebbb0a1c8764a637281b8a3": "a58f95693f0fd5fa2caaad6ce12fe2a4",
".git/objects/a7/83b7e34b66040a3edadfb977512b11676a9026": "26eb5ee63aa9b3439ebebeef6883bd79",
".git/objects/b6/1de8ec5d966cbdd3a23e7a8f571a285e5fa28e": "fbc9cde92e70fdc2b0e84b5c0946a902",
".git/objects/a9/1ce65a725690f57666e4586de256fc3e055887": "81b1656c24f97675e0c3f88d3a515b0e",
".git/objects/d5/5957b83cd7b4a19df7c158447fb0ade907924a": "035a465012e1be7c9a80b4774f170bf9",
".git/objects/aa/f9775aa89c03137dbf48721cdc05191703de5e": "25802b31f0bee36b4e1a7a67835f99f0",
".git/objects/aa/6a81b7a3ade352dd380eeedf0af4e1c6a65a12": "6a6987542a23a00575521ffeba09d64c",
".git/objects/db/e31348da8edeac0c140a9ea17daac04d958848": "1a9db12a62a511c6eb7ab3ff4fe41ae1",
".git/objects/db/d23409d3b0df0ef50c2cccbb32dadcc8a9304d": "7bba7f28c9134f225d3d1672d42863d1",
".git/objects/a6/8520ac5decf4ca0dbb9bd615c7a22ff9d0d397": "b2701ac98ec112c41c005d0b7ff94c6e",
".git/objects/b9/4d47f3af31505f3cfcba533da52b881b6a1b33": "ab777130815383dc41d27318b6ffbe0e",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/ea/a729540b54c148b42f0ab94087a5a2b6b6bff8": "6dc1c4833705d5c89879d497f351f134",
".git/objects/f0/1e144fc05b4e9c25d41a5aa7ee92d5a0589db2": "82116a5d6b8c00f8ed80ebb3f256eac1",
".git/objects/f0/6df5827c510d5187a496fd8cf5f352e60a3843": "3029c54dc3389fae7c30fdd61ad391ef",
".git/objects/f7/5ff5a363d0da0961084127aa2bb1bbfd0939a6": "9f44dd2b3f5f9a45671ad50e67ebef4f",
".git/objects/e9/0e87ed69a7ebb8d965ec248fb86286423f103f": "4abcf8c77330fc7fd658318fc2374d78",
".git/objects/e7/1809e9a295583c2766364d675d988b2bbb311b": "cb97df2b2e22f52f343ee674c6691211",
".git/objects/cb/56bfb6247c3b4fbb7004093a6db2a6e754b8b1": "dc19e3bdf35d70c289fbdf8e57849944",
".git/objects/ce/a9906cd5298876e0f6f3d5a8783299e42ed457": "526268a36d5b3ef6732dda2fd85b32fc",
".git/objects/46/203996d3943540d81e516dc03e54ed112aec36": "92f0c5d2d370b0d8748fc85b4c9fb64c",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/1b/ccb3d07bfc77df8c08bacda9b2e97733ae08af": "eaedbcd714adee7aee97c3f0b7131f5d",
".git/objects/84/3882a60ab858b914fc019acd8582a69fde45d1": "ce16da4b1e01457292fd42d04b31d46d",
".git/objects/4a/1a501fb4154804b69e6dbabd5d51ba8a56de3d": "6b5661408d01b07ded4fe25b94257ef1",
".git/objects/8d/443d5d56ac36091e9689cd5d1b1948d9124545": "eb1c5a32937a98bb8b8612d5fad02130",
".git/objects/12/5c284dc2bbed823ed6389e50cc75a8a1ef2351": "9ab0bcea773dc4fd6ef989aef459b28a",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/85/f0595bc00cd6b0b968383778419a036f8e0412": "80e29e644db1948aabb8d9b39e537c0c",
".git/objects/1d/9318035f6d387968fc29f87a5c1c564c6f02e6": "0e4cf85e8ddfef1ac7e97e4d97cff0ae",
".git/objects/76/3c816f8d07dc6451d0c40f323c9079397c1fe3": "fda8ecfcbcf82c40ef70f14eed4bb8d6",
".git/objects/49/dcedd2cf2d41c84d27645446b7bb401529c3b5": "8a510945e458645c03c83681d422e289",
".git/objects/78/3446df945234e9a5607f5fc6797d24fb797087": "c75e6777f6982d73176515a9eedd360e",
".git/objects/14/3569fde6377aeb4f9ce14ad1f5c2e2330578a5": "5a32c1c051d38b6970a0516e73f648d4",
".git/objects/22/feb4c88aa2d3a62b86080b67cb0a90fcf04ad5": "4610ed83fe2b5853d909eac40642c136",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "749d1b6b2929a15bfadbfd5ffd028ff7",
".git/logs/refs/heads/main": "aebb810ffffed6419ddef9d3c829050a",
".git/logs/refs/remotes/origin/main": "10ac89f81aff44916ebd9b6d00f87261",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "7fe0e358ec6b6ebad2c50c2890643fa4",
".git/refs/remotes/origin/main": "7fe0e358ec6b6ebad2c50c2890643fa4",
".git/index": "9839d25afe27559ec87173b75301be6e",
".git/packed-refs": "a891e6bb26eb0d480aef486a7e8ea166",
".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/FETCH_HEAD": "d43c8ef9af7bf61969dbfee807721aee",
"assets/AssetManifest.json": "b8e07c8b34049966740c11128534f645",
"assets/NOTICES": "3a2d426899f60320d98bea8b45ca3fa4",
"assets/FontManifest.json": "663783f541c46e7f04c244ce710d1b61",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/assets/imgs/robinhood.png": "be431f8b32029860d500d8d050592a2c",
"assets/assets/imgs/hbsuper.png": "8337f422d448af67642d0d255403a006",
"assets/assets/imgs/desktop.png": "900507250cacea3aff269c7fe2911162",
"assets/assets/imgs/hbneo_icon.png": "d63237af67bdb3286403f9ccfec94b4e",
"assets/assets/imgs/suraj.png": "e213792750ec350bc2ec8665364a7d6f",
"assets/assets/imgs/flutter.png": "0b5a2f8d3f4d173805affaf9f84f6c87",
"assets/assets/imgs/04.png": "d38477d42dc77d62ff7a25744fd87d64",
"assets/assets/imgs/robinhood_icon.png": "aba33bb41b725044b5a573f300c69f52",
"assets/assets/imgs/BG01.png": "292fe68441561eae14b077f8f112acf9",
"assets/assets/imgs/hbneo.png": "5623cfb240d7b381fda05789c2778b1b",
"assets/assets/imgs/super_icon.png": "c9a12abedb17de535ead98ddfcd928ca",
"assets/assets/imgs/aahar_pos_icon.png": "6f8679546cf1bf7df09c70935ebd7395",
"assets/assets/imgs/aahar_pos.png": "5ce1345ad8edcb6fb703ade3248bb66e",
"assets/assets/imgs/bg.png": "479adb5025af1020760bb9332651ff5c",
"assets/assets/icons/android.svg": "e57e55c11155e0da56d4913db52486c7",
"assets/assets/icons/DOC-20230508-WA0001": "5b00db571b6b77a22ddfbef4aaf84c31",
"assets/assets/icons/graphic.svg": "6f05c1c6706df22c79a37a7ca4df3214",
"assets/assets/icons/website.svg": "421f827e65eb765b8ad10e386bf07849",
"assets/assets/icons/swift.png": "077379166993ea3d067842463b07d4df",
"assets/assets/icons/program.png": "bd32f054553603820f096d4ec584604c",
"assets/assets/icons/api.png": "0534a7727758ff13e40c7a69e5cad7b9",
"assets/assets/icons/apple.svg": "81afc16bd2183fcbdad794cd391e7f0d",
"assets/assets/fonts/montserrat/montserrat.ttf": "ee6539921d713482b8ccd4d0d23961bb",
"assets/assets/fonts/poppins/Poppins-Light.ttf": "f6ea751e936ade6edcd03a26b8153b4a",
"assets/assets/fonts/poppins/Poppins-Medium.ttf": "f61a4eb27371b7453bf5b12ab3648b9e",
"assets/assets/fonts/poppins/Poppins-Regular.ttf": "8b6af8e5e8324edfd77af8b3b35d7f9c",
"assets/assets/fonts/poppins/Poppins-Bold.ttf": "a3e0b5f427803a187c1b62c5919196aa",
"assets/assets/fonts/poppins/Poppins-SemiBold.ttf": "4cdacb8f89d588d69e8570edcbe49507",
"assets/assets/fonts/poppins/Poppins-Italic.ttf": "5e956c44060a7b3c0e39819ae390ab15",
"assets/assets/gif/hi.gif": "cad5918d86b6a7e83f1fb4acead70e4c",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
