'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "manifest.json": "de31a5b34180718e961ac83536c65a7e",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"icons/favicon-32x32.png": "235421f7af0cb76ae2dedf562e2f861d",
"icons/android-chrome-192x192.png": "2e7d3ee15c7199ded7d747164ce6a4d0",
"icons/apple-touch-icon.png": "fbb78c01f99f7bb4460502785bb2df46",
"icons/android-chrome-512x512.png": "58b5a26120bea315b8a592e048a48d2c",
"icons/mstile-150x150.png": "e7f2cf83ea4dc8cd95fb46f237986f13",
"icons/favicon.ico": "baebf0ad473991f8e8cf7f90aff14d91",
"icons/favicon-16x16.png": "239f5d2752b43a19c680844d536600ea",
"icons/browserconfig.xml": "b1d1573fa01804cdc7bf92634a1707b0",
"icons/safari-pinned-tab.svg": "14d4e83e388c52e6231a5254600d5974",
"icons/site.webmanifest": "93b5c5eac86859e387cf758d1ce2c85a",
"index.html": "b0219673ffade455dc7d0da1068f4437",
"/": "b0219673ffade455dc7d0da1068f4437",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/profiling/canvaskit.js.old": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm.old": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/canvaskit.js.old": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm.old": "4b83d89d9fecbea8ca46f2f760c5a9ba",
".git/index": "ead8ecf16bc643a0ffb80ab954ce4559",
".git/COMMIT_EDITMSG": "609ce1f10002112a47185277244fd1f4",
".git/logs/refs/remotes/origin/main": "ca0d649d4e04cf978c0f7f0c1b68b094",
".git/logs/refs/heads/main": "87b3b4f8eb9df9a6524a6513f6c35a09",
".git/logs/HEAD": "87b3b4f8eb9df9a6524a6513f6c35a09",
".git/refs/remotes/origin/main": "4e585d796ecf16266a66294f1a7492d8",
".git/refs/heads/main": "4e585d796ecf16266a66294f1a7492d8",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/objects/16/bad81cf189ed3f381fb4167218d29ad4dee164": "6e476be29f99ffd20f35eaf6487a2421",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/28/4dbd7eb32a0acecd87f5be981b47ac57f3b644": "bca3cfd065777b972a244c01d78a8263",
".git/objects/28/e88f1b39a0f09a2faf5a3a35acb5849a2cdbe2": "24d742fcae63b8a8a14abedb3c688005",
".git/objects/b7/611bb22376e1a07894ae1fee7ef386db0c9c75": "afeb55623d798222e059c1ae810f5fb5",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/0d/5f593a0de3c1ac584a9eff369049b4d8ba37f3": "d495305ea85780d370fa9c597281dad7",
".git/objects/85/7477e1573f1cc308503afb1948614ad88943c8": "ff1d0f5c7802e47b125fe6022be1e2df",
".git/objects/85/6ec159a5b75c2fae04c17b6d78092f2b5d04f5": "b0ba8b248ab39a75f321eb1bdcf8b8ce",
".git/objects/44/6d329e8ee956bce9ff26f98c9fe6daaf5f6203": "369431e148d8f77f36f14c52810e4aab",
".git/objects/70/7347c4e644c1c33995e13b565ea8dd64a361fa": "1e497f77e68923e8d2b515b4772e5a78",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/24/cdd649036182afee8ca16f0c55614298cee872": "0af2c1f2124ca2fdbb8c109e0b11b236",
".git/objects/5f/0412dcec9f26568b4ac4084796c7c974538207": "8f550aebc9646ce3b49333540c4cb585",
".git/objects/1a/9528762f5bfacc0c73849aed8b8451a219661c": "063c74aeecf025c1a4cd9c97b09f7156",
".git/objects/1a/85dff40111fb6c8ab203e2956c15265e08a777": "055e655ce0192261ea250fed607592bc",
".git/objects/03/5656b228142783d88cb3680f1ce7a6fe46673c": "2f635e0350d2b5b4f77c1bf796c63cdb",
".git/objects/03/24f3f764da38333a81c8fa46d53ab4732e177f": "b025d11349bb70c88ab448337315a46a",
".git/objects/68/e94a3df768466cf4d5f4696c70b5dcf4f1459a": "788f5df2c5d0d04c3e1034c560a6ed64",
".git/objects/61/f41ef3fda076cd44d00357a980984a67372d10": "55b04cebeb0dbd09666fff8410f80f07",
".git/objects/61/1c234269620741dc414e5ba2816b8d1ba96fee": "29e04db534df8a1ddc97cb1a5c8dbd94",
".git/objects/ec/fb3ba9b20200369133d4e2a0304e6532ee1221": "e88a9c8d6fc8a4269b4820929aa78f98",
".git/objects/43/82f3a039dd65085163c7a555cc7c52820d24e3": "ab83cb7ecc28662a611afbd1d020d8e4",
".git/objects/3a/7da69e6a72a95bc78ef60f8240d392cffb93e9": "18483912b7b65c1eb109cd70e3737bda",
".git/objects/3a/29f26497950810af1f58a52625552a2fa07a4a": "a1560dbdeb0fcc5b0b1e2310ab3a8544",
".git/objects/9a/b0456f80fab85852d8c575388399bbcb6b63b6": "4617cc1b9ee44cad993dddee7eb8317c",
".git/objects/c0/aec83d83b6f7ffaee2f24d17feb1eb4d4e9cdf": "485023b4515eb1a99713b44e905c5d58",
".git/objects/d9/09c897885283e60e50820167d0bd8276960a41": "45337e5910713a029333ed8b3553d7ae",
".git/objects/d9/64d2ab1d2ab3613848c0df4b82d045a19f9d64": "80dd75eba43437e55df9ee85da00aa98",
".git/objects/92/a20d714848d70a4185828de3ce7d59978aa1a2": "a982bf94c9623b7f7b97f7c9b467432a",
".git/objects/89/1afd92cf6dc0143bfdac0e39f1eec3dcfbac59": "f0840df07ce6d0cf068417ba331796ae",
".git/objects/80/e1e7a6e1f775b08ae6006816f63b737d38aad1": "0c72fe111c172f8c2b2cf431f81a4c41",
".git/objects/c1/7ad87e3a4778fdc073b1e7b8915bbcfb5fa7c5": "5a5b9a4820426d041b5d88a3f49bf4c1",
".git/objects/93/1200857326d092563cb618f68d148e0918ede9": "e9f2d81e76f830ff6b94641f10f9c9ca",
".git/objects/1b/4b499729d2c8e75b8c4b8147b84a88b5fe9323": "598d4e31d151c65d4538aa4c5d293071",
".git/objects/04/41a5997a6e9bb76c133e27dcb260d3a50ba5e2": "8527367e51ff0ae8ca94cd0698dd4aa4",
".git/objects/c3/569dab851e6797ed6bc13e075931e8d5599834": "6b2d191036e682ef789c483c9d981b67",
".git/objects/2c/28f001ecd50d359738f751dcbbb559eb61914e": "ac42d32bc1224e6573e2d63d283762e2",
".git/objects/d0/e6748cc0718a4bbdf094eca38bad424e8bdc3f": "09c1ddb438cf83b75ce9e81da8626933",
".git/objects/d0/1b20cfa4dc0d34b83eb1c7714208b5ce0c092e": "4fd7edef1d885d20ecdf04a55138e7bb",
".git/objects/60/d4185aef1408929a50b08a4e2cfacf14929f83": "9dc43ddb2a8c5976026e5bd6efe03ae0",
".git/objects/60/5d1b1db87e986dac0e18f5d75aa7c6789d7008": "51e09bfaeebe869ab036e84a9276eddb",
".git/objects/53/e0a9b40de429253119bae8a0e0bf1052e5e560": "16f5752e401311baa04a6027c66d7404",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/db/66f6a864390e8cd913d38154a3f05a974760d0": "cb5bcf899915cb768703a4c5efb478be",
".git/objects/27/cd5dd54f2073fb76b4efed465b402e1201462b": "a2a29f08dc3e3ea73708b62c59159516",
".git/objects/27/361ad4476c6f46f8b710a863083c947bd2859f": "f5217989d57b7fbd6aa661fb70cb3b71",
".git/objects/ce/5a4ef56a8800208da2ab2139264b0ee7b2f975": "6d10e72e36d4e7faf11353de183e4c09",
".git/objects/21/9f6e8feb983934f124b6efe072d755356a25bd": "1faf501fb99e9bdeb5b2fd68e7580dd1",
".git/objects/42/ebc4648c45b7f1a407c34db339c24ce666b0e2": "49d543cab98c7aaa9b11b7208e849aab",
".git/objects/42/6131a8922be8fae8c70290eb1daea23b359d07": "9138c0791d88e02b45745f4150047d46",
".git/objects/6b/4191859b38e4e461b63e93356a3ec8af7c13fd": "f35cadbe3fdeb5b6a0af5039bdc483cb",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/69/7414fdc6cc32a61966595c8fadc211af0fbc69": "81f49a85b4c82940e8eb19029ee0febe",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/cd/376f71e75d76f1b2b0d20c145ba91fa52f09ad": "008a9baff71ed8af1279b1ee765d5df0",
".git/objects/eb/a75d7421fde52ede6f7c4a937e9e84f0733e74": "8208f2d3087f1cfe5af9e2191d679a71",
".git/objects/38/c14e3da38e6570017a4244bc6fd98a1cc9ecc6": "d00093af193bc0d55c7a95c770ed7e26",
".git/objects/38/fa86e88cb45f18ebf6fdf35fb667e5f6858a59": "06d4093c2b9dcbf6845561609a6a701a",
".git/objects/1d/9afd674f37f54bad94c510221a58e54ae96e0a": "f7769b98e018599fe8df434d02b43722",
".git/objects/4b/7639e6874e3f9a3c33fbb39d236c5c336e7d4f": "f59edb02b159028fca8f31525bcfda25",
".git/objects/4b/477adc81166fe25c7786cc215182b15f9d7cc3": "41ca447774b4ed4d0179aa9b19f8dd76",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/c2/e4c9aa2bf3f6a9ed1379a25cae728ea8356b7b": "d7d80a8d1ca04d49a2bd253c627ea33b",
".git/objects/b0/884744c5be3e7f5ecbf9299474a00772a283e9": "5e05231878681d130ab80a94092b9944",
".git/objects/8e/ca02b78e01351a3cbd02bbc93cd9d51fa30662": "9cdd610f9b5af31d47d2f5651f6be2f6",
".git/objects/fe/89aa2407e7d2ad5b55c9e7afd0539af02db882": "b8e24e3ea9f60e12fd4d6db9d80c90e4",
".git/objects/b5/ba793320d27a763a994cfaa51c3df5e0537346": "c3f037f4e896f0d05c189a7c7eb88925",
".git/objects/b5/a06ac767ca446a78f2b863cbd070b4f27b3203": "936378c1599753a8be2f6fd6fcffdc79",
".git/objects/20/985a74d9bc9d260eff190984da4852b317e07b": "eb10d58a64e9623c80165ee9e4b99852",
".git/objects/25/9ac50c6f5401e96e3631791b5f937f7625847e": "26adc465cb886682d9741ccc6c17710e",
".git/objects/25/19978ac80b7376fb7fa0bf9e472d24cfb53d98": "5d71644e6e846dbcd0ee2ba6d28ab409",
".git/objects/aa/69acee2b6a209ff9166dcd9208d703941823d0": "a85b5f4d0694ea262992e36d2a6fc013",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/02/0f5e56a927a04113ecb38d06238b0c2998ee52": "b74ec5f14b7d6eaa207cddb2b632edf0",
".git/objects/06/cdca290ea51f51191b41333c17fa711484283c": "a4cdc7af38b2735217402a5df53106b3",
".git/objects/07/165cfc7ecd1ec201aefe6ca4aa731a20cb7b57": "1f444d425fbacc5924f99edd44283a3c",
".git/objects/07/64f8b14774a5bbd7cb480b57e0c3b5e855342c": "862460eae5c2a1909e2f26bfb88fe63f",
".git/objects/9c/d192f975c5d1df54307520a343e1552cbc74db": "7c7c1fcef8238b8e6a07dc74b57d9f2e",
".git/objects/2d/004275027c6c27ff0bc6164b2bcf6235fdbb5d": "15dd532154e36cb97e24b3706134cf8b",
".git/objects/2d/acb089cada02d8065880bb4c2e71f0cb270e90": "1c01da3950578d5d196bac31086ad3c8",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/31/edc9da7400d6e076f38657597878570fcba8be": "0d3205174e8f6918afd4bf0addc22166",
".git/objects/29/2214367c0af9a2eee8f873b2944224e2fe3f0c": "902d6cf3d5ea70392a74bfc9ded583bb",
".git/objects/5a/ad0d7546cc6f7e243ef2ef154fb06033d0874d": "95e49a569a9d7f1e0deaed187bc012bc",
".git/objects/34/ef05b226cd27cec2036e7412b9c41800a3da24": "72096af4cf52698387e0f41ed36231fc",
".git/objects/72/f99275f63ffb03b5fa3bb7247b9e1a50a5c6a7": "83dd1b92442e87eee093e6c7a3f5723e",
".git/objects/a3/be1a88df19b6a0060ede181110c245087312d8": "d5a3bf79dbb435638f65a0386e2376d2",
".git/objects/a3/737f8c38de53921e3aeeeddfd6d679ed50c4dd": "930dcb69affdfe5bdb883335b0dcd6ca",
".git/objects/a3/f38d889ce621cbf0fb301df745aa273081a8aa": "c45d5682b4c190bb0314063cc5949a19",
".git/objects/15/f9b0f0096ceae9555f4a5f9a37b2651c6e2640": "156b36d17fe411f652a88e22345993e7",
".git/objects/35/f35884598472a4120ffdf060ecdee5f99cef75": "747f4ae3f8e7a1852b26355e31cf9173",
".git/objects/b8/47c35f578946ef4889fd3fe32b0d7d4169fab7": "9d291689931c513d56eb27025f7ef3d4",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/4d/de1f24bd1394dd2f54a0bc76d594c5e988e71e": "ab62608f8a500e316f97e2d8e4bf9212",
".git/objects/4d/8f3e5b90404074b70b27ea542de6d37baeb9a3": "c4d58e7884fe5680e540cbac5f1a8d52",
".git/objects/ca/e0beead6ed44dfb8a21fee2c3f58357c712ad4": "429665af8aa54117e1e12663d653454f",
".git/objects/c5/e2cfb37488c46ca1adb5a794601b3e0d03dc2a": "003f3ab5c6a2c3d91fc7728379b70371",
".git/objects/7d/e69f645db57384c4b260ffc48a37eb9c14ba0c": "4fac5148cbed910d1914253647c6ec75",
".git/objects/7d/404db4206ea9e097402c7e077077b78d23dd57": "d20ecc22fd44cb3d8d3f4fa2e65f7082",
".git/objects/7d/f8777e32c43a2216d2c627a205dab512ea05cf": "d3f5a17af0c7ac379d152f86804ffe5f",
".git/objects/50/f95e92b409bba7af634d0fd41dd382575a698f": "4728a2bfaa13746f8bef169affefa7a4",
".git/objects/a4/0ed9c3c3cb01c92cb7fd5f3d813b6f380cbf46": "06f6fc584f43f1eebfdaa50d2ec7796f",
".git/objects/a4/c40f81c06ef7056e11c490c583c9779ce960cc": "6e0856940141e4793f8c6067df6e23a4",
".git/objects/7c/ffdbf860a5ba56b08b6248c979ede4afe67ca9": "8b188d62ab1e3210a8cee01b321cd1b3",
".git/objects/7c/31d3c0dd51c515bf711c20cd57b358d8ff081e": "b657b5df1ac70154fd3bfb597ba34aa0",
".git/objects/39/67b037563d1ab41cc13b68d88d3c701c5c4720": "ceb7d031ec8c4b5fb76c1775cd486d0f",
".git/objects/39/c02be24d3ec9d9acb7f17c0d98e175b83e2b1f": "43564b47a42143ffc15b288f3d71397b",
".git/objects/c8/7d9e56f451337ffd2f7915ee8a706616cc8864": "fc485a1e36ffa55c02a85a20ae526a97",
".git/objects/c8/4fe4ffad88b7670ea1950399be7da4be8ade06": "f333bf53ac6ddc603f56e427edd51124",
".git/objects/10/be84b48e100926d6280607bc27054aa20f01ec": "741a304e6fc7693896cc604b9ff80673",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/config": "085aed3edcc22325a0c9cf1bbfb9a789",
"main.dart.js": "2ddbadcbf807995642ba2a1ea26a6b58",
"version.json": "14df0c6bb15c3cf0c3f680d653c1d205",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "8bf5af328328fb0777e323daf3c3adca",
"assets/AssetManifest.json": "46cf1a4debbfde9e90658e8a963ff0cd",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/FontManifest.json": "e57c6b6b62bde6c76d0b336caaed51f4",
"assets/assets/fonts/Open_Sans/static/OpenSans/OpenSans-ExtraBold.ttf": "907d99fe588e4649680159671dfe74f4",
"assets/assets/fonts/Open_Sans/static/OpenSans/OpenSans-Regular.ttf": "3eb5459d91a5743e0deaf2c7d7896b08",
"assets/assets/fonts/Open_Sans/static/OpenSans/OpenSans-SemiBoldItalic.ttf": "ac6de8932b6838e3e7739115e2145a7e",
"assets/assets/fonts/Open_Sans/static/OpenSans/OpenSans-ExtraBoldItalic.ttf": "4991d99c8494b79917a682eac37d0555",
"assets/assets/fonts/Open_Sans/static/OpenSans/OpenSans-Italic.ttf": "07cd1acf656521af831f0a37e304c5bb",
"assets/assets/fonts/Open_Sans/static/OpenSans/OpenSans-LightItalic.ttf": "bc84c22b39c8edfaaa7e821477ce9215",
"assets/assets/fonts/Open_Sans/static/OpenSans/OpenSans-BoldItalic.ttf": "c1817c8c96e3dca8b13f779ee339b1bc",
"assets/assets/fonts/Open_Sans/static/OpenSans/OpenSans-SemiBold.ttf": "af0b2118d34dcaf6e671ee67cf4d5be2",
"assets/assets/fonts/Open_Sans/static/OpenSans/OpenSans-Light.ttf": "3dd221ea976bc4c617c40d366580bfe8",
"assets/assets/fonts/Open_Sans/static/OpenSans/OpenSans-Bold.ttf": "5bc6b8360236a197d59e55f72b02d4bf",
"assets/assets/fonts/Open_Sans/static/OpenSans/OpenSans-Medium.ttf": "0cbcac22e73cab1d6dbf2cfcc269b942",
"assets/assets/fonts/Open_Sans/static/OpenSans/OpenSans-MediumItalic.ttf": "af8809ff3bd655a62950c8e21361695f",
"assets/assets/sumarus.json": "5b359e24bfd5ef46774cdcbaae72d83f"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
