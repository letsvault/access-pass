"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/mint-nft";
exports.ids = ["pages/api/mint-nft"];
exports.modules = {

/***/ "@google-cloud/secret-manager":
/*!***********************************************!*\
  !*** external "@google-cloud/secret-manager" ***!
  \***********************************************/
/***/ ((module) => {

module.exports = require("@google-cloud/secret-manager");

/***/ }),

/***/ "@thirdweb-dev/sdk":
/*!************************************!*\
  !*** external "@thirdweb-dev/sdk" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("@thirdweb-dev/sdk");

/***/ }),

/***/ "(api)/./pages/api/mint-nft.ts":
/*!*******************************!*\
  !*** ./pages/api/mint-nft.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _thirdweb_dev_sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @thirdweb-dev/sdk */ \"@thirdweb-dev/sdk\");\n/* harmony import */ var _thirdweb_dev_sdk__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_thirdweb_dev_sdk__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _google_cloud_secret_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @google-cloud/secret-manager */ \"@google-cloud/secret-manager\");\n/* harmony import */ var _google_cloud_secret_manager__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_google_cloud_secret_manager__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst client = new _google_cloud_secret_manager__WEBPACK_IMPORTED_MODULE_1__.SecretManagerServiceClient({\n    credentials: {\n        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\\\n/g, \"\\n\"),\n        client_email: process.env.GOOGLE_CLIENT_EMAIL\n    }\n});\nconst name = \"projects/204118709939/secrets/University/versions/latest\";\nasync function getSecretVersion() {\n    const [version] = await client.accessSecretVersion({\n        name: name\n    });\n    const payload = version.payload?.data?.toString();\n    return payload;\n}\nasync function handler(req, res) {\n    try {\n        console.log(req.body);\n        const { recipientWalletAddress  } = req.body;\n        // console.log(\"req.body.address: \", address)\n        const key = await getSecretVersion();\n        if (key) {\n            const sdk = _thirdweb_dev_sdk__WEBPACK_IMPORTED_MODULE_0__.ThirdwebSDK.fromPrivateKey(key, \"polygon\");\n            const contractAddress = process.env.CONTRACT_ADDRESS;\n            const contract = await sdk.getContract(contractAddress, \"edition-drop\");\n            const tokenId = 1;\n            const quantity = 1;\n            await contract.claimTo(recipientWalletAddress, tokenId, quantity);\n            const metadata = (await contract.get(tokenId)).metadata;\n            res.status(200).json(metadata);\n        }\n    } catch (error) {\n        console.log(error);\n        res.status(500).json(error);\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbWludC1uZnQudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDeUU7QUFDQztBQUUxRSxNQUFNRSxNQUFNLEdBQUcsSUFBSUQsb0ZBQTBCLENBQUM7SUFDMUNFLFdBQVcsRUFBRTtRQUNYQyxXQUFXLEVBQUVDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxrQkFBa0IsRUFBRUMsT0FBTyxTQUFTLElBQUksQ0FBQztRQUNsRUMsWUFBWSxFQUFFSixPQUFPLENBQUNDLEdBQUcsQ0FBQ0ksbUJBQW1CO0tBQzlDO0NBQ0YsQ0FBQztBQUNKLE1BQU1DLElBQUksR0FBRywwREFBMEQ7QUFHdkUsZUFBZUMsZ0JBQWdCLEdBQUc7SUFDOUIsTUFBTSxDQUFDQyxPQUFPLENBQUMsR0FBRyxNQUFNWCxNQUFNLENBQUNZLG1CQUFtQixDQUFDO1FBQ2pESCxJQUFJLEVBQUVBLElBQUk7S0FDWCxDQUFDO0lBRUYsTUFBTUksT0FBTyxHQUFHRixPQUFPLENBQUNFLE9BQU8sRUFBRUMsSUFBSSxFQUFFQyxRQUFRLEVBQUU7SUFFakQsT0FBT0YsT0FBTyxDQUFDO0FBQ25CLENBQUM7QUFFYyxlQUFlRyxPQUFPLENBQ2pDQyxHQUFtQixFQUNuQkMsR0FBb0IsRUFDdEI7SUFDRSxJQUFJO1FBQ0FDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSCxHQUFHLENBQUNJLElBQUksQ0FBQyxDQUFDO1FBQ3RCLE1BQU0sRUFBRUMsc0JBQXNCLEdBQUUsR0FBR0wsR0FBRyxDQUFDSSxJQUFJO1FBQzNDLDZDQUE2QztRQUU3QyxNQUFNRSxHQUFHLEdBQUcsTUFBTWIsZ0JBQWdCLEVBQUU7UUFFcEMsSUFBSWEsR0FBRyxFQUFFO1lBQ0wsTUFBTUMsR0FBRyxHQUFHMUIseUVBQTBCLENBQ2xDeUIsR0FBRyxFQUNILFNBQVMsQ0FDWjtZQUVELE1BQU1HLGVBQWUsR0FBR3ZCLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDdUIsZ0JBQWdCO1lBQ3BELE1BQU1DLFFBQVEsR0FBRyxNQUFNSixHQUFHLENBQUNLLFdBQVcsQ0FBQ0gsZUFBZSxFQUFFLGNBQWMsQ0FBQztZQUV2RSxNQUFNSSxPQUFPLEdBQUcsQ0FBQztZQUNqQixNQUFNQyxRQUFRLEdBQUcsQ0FBQztZQUVsQixNQUFNSCxRQUFRLENBQUNJLE9BQU8sQ0FBQ1Ysc0JBQXNCLEVBQVlRLE9BQU8sRUFBRUMsUUFBUSxDQUFDLENBQUM7WUFFNUUsTUFBTUUsUUFBUSxHQUFHLENBQUMsTUFBTUwsUUFBUSxDQUFDTSxHQUFHLENBQUNKLE9BQU8sQ0FBQyxFQUFFRyxRQUFRO1lBRXZEZixHQUFHLENBQUNpQixNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQ0gsUUFBUSxDQUFDLENBQUM7UUFDL0IsQ0FBQztJQUNULEVBQ0EsT0FBT0ksS0FBSyxFQUFDO1FBQ1RsQixPQUFPLENBQUNDLEdBQUcsQ0FBQ2lCLEtBQUssQ0FBQyxDQUFDO1FBQ25CbkIsR0FBRyxDQUFDaUIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUNDLEtBQUssQ0FBQyxDQUFDO0lBQ2hDLENBQUM7QUFDTCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYWNjZXNzLXBhc3MvLi9wYWdlcy9hcGkvbWludC1uZnQudHM/MWJmNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tICduZXh0JztcbmltcG9ydCB7IFRoaXJkd2ViU0RLLCBUcmFuc2FjdGlvblJlc3VsdFdpdGhJZCB9IGZyb20gXCJAdGhpcmR3ZWItZGV2L3Nka1wiO1xuaW1wb3J0IHsgU2VjcmV0TWFuYWdlclNlcnZpY2VDbGllbnQgfSBmcm9tICdAZ29vZ2xlLWNsb3VkL3NlY3JldC1tYW5hZ2VyJztcblxuY29uc3QgY2xpZW50ID0gbmV3IFNlY3JldE1hbmFnZXJTZXJ2aWNlQ2xpZW50KHtcbiAgICBjcmVkZW50aWFsczoge1xuICAgICAgcHJpdmF0ZV9rZXk6IHByb2Nlc3MuZW52LkdPT0dMRV9QUklWQVRFX0tFWT8ucmVwbGFjZSgvXFxcXG4vZywgXCJcXG5cIiksXG4gICAgICBjbGllbnRfZW1haWw6IHByb2Nlc3MuZW52LkdPT0dMRV9DTElFTlRfRU1BSUwsXG4gICAgfSxcbiAgfSk7XG5jb25zdCBuYW1lID0gJ3Byb2plY3RzLzIwNDExODcwOTkzOS9zZWNyZXRzL1VuaXZlcnNpdHkvdmVyc2lvbnMvbGF0ZXN0JztcblxuXG5hc3luYyBmdW5jdGlvbiBnZXRTZWNyZXRWZXJzaW9uKCkge1xuICAgIGNvbnN0IFt2ZXJzaW9uXSA9IGF3YWl0IGNsaWVudC5hY2Nlc3NTZWNyZXRWZXJzaW9uKHtcbiAgICAgIG5hbWU6IG5hbWUsXG4gICAgfSk7XG5cbiAgICBjb25zdCBwYXlsb2FkID0gdmVyc2lvbi5wYXlsb2FkPy5kYXRhPy50b1N0cmluZygpO1xuXG4gICAgcmV0dXJuIHBheWxvYWQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKFxuICAgIHJlcTogTmV4dEFwaVJlcXVlc3QsIFxuICAgIHJlczogTmV4dEFwaVJlc3BvbnNlXG4pIHtcbiAgICB0cnkge1xuICAgICAgICBjb25zb2xlLmxvZyhyZXEuYm9keSk7XG4gICAgICAgIGNvbnN0IHsgcmVjaXBpZW50V2FsbGV0QWRkcmVzcyB9ID0gcmVxLmJvZHk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwicmVxLmJvZHkuYWRkcmVzczogXCIsIGFkZHJlc3MpXG5cbiAgICAgICAgY29uc3Qga2V5ID0gYXdhaXQgZ2V0U2VjcmV0VmVyc2lvbigpO1xuXG4gICAgICAgIGlmIChrZXkpIHtcbiAgICAgICAgICAgIGNvbnN0IHNkayA9IFRoaXJkd2ViU0RLLmZyb21Qcml2YXRlS2V5KFxuICAgICAgICAgICAgICAgIGtleSwgLy8gWW91ciB3YWxsZXQgcHJpdmF0ZSBrZXlcbiAgICAgICAgICAgICAgICBcInBvbHlnb25cIiwgLy8gY29uZmlndXJlIHRoaXMgdG8geW91ciBuZXR3b3JrXG4gICAgICAgICAgICApO1xuICAgIFxuICAgICAgICAgICAgY29uc3QgY29udHJhY3RBZGRyZXNzID0gcHJvY2Vzcy5lbnYuQ09OVFJBQ1RfQUREUkVTUyBhcyBzdHJpbmc7XG4gICAgICAgICAgICBjb25zdCBjb250cmFjdCA9IGF3YWl0IHNkay5nZXRDb250cmFjdChjb250cmFjdEFkZHJlc3MsIFwiZWRpdGlvbi1kcm9wXCIpO1xuXG4gICAgICAgICAgICBjb25zdCB0b2tlbklkID0gMTtcbiAgICAgICAgICAgIGNvbnN0IHF1YW50aXR5ID0gMTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgYXdhaXQgY29udHJhY3QuY2xhaW1UbyhyZWNpcGllbnRXYWxsZXRBZGRyZXNzIGFzIHN0cmluZywgdG9rZW5JZCwgcXVhbnRpdHkpO1xuXG4gICAgICAgICAgICBjb25zdCBtZXRhZGF0YSA9IChhd2FpdCBjb250cmFjdC5nZXQodG9rZW5JZCkpLm1ldGFkYXRhO1xuXG4gICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbihtZXRhZGF0YSk7XG4gICAgICAgICAgICB9XG4gICAgfVxuICAgIGNhdGNoIChlcnJvcil7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgcmVzLnN0YXR1cyg1MDApLmpzb24oZXJyb3IpO1xuICAgIH1cbn0iXSwibmFtZXMiOlsiVGhpcmR3ZWJTREsiLCJTZWNyZXRNYW5hZ2VyU2VydmljZUNsaWVudCIsImNsaWVudCIsImNyZWRlbnRpYWxzIiwicHJpdmF0ZV9rZXkiLCJwcm9jZXNzIiwiZW52IiwiR09PR0xFX1BSSVZBVEVfS0VZIiwicmVwbGFjZSIsImNsaWVudF9lbWFpbCIsIkdPT0dMRV9DTElFTlRfRU1BSUwiLCJuYW1lIiwiZ2V0U2VjcmV0VmVyc2lvbiIsInZlcnNpb24iLCJhY2Nlc3NTZWNyZXRWZXJzaW9uIiwicGF5bG9hZCIsImRhdGEiLCJ0b1N0cmluZyIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJjb25zb2xlIiwibG9nIiwiYm9keSIsInJlY2lwaWVudFdhbGxldEFkZHJlc3MiLCJrZXkiLCJzZGsiLCJmcm9tUHJpdmF0ZUtleSIsImNvbnRyYWN0QWRkcmVzcyIsIkNPTlRSQUNUX0FERFJFU1MiLCJjb250cmFjdCIsImdldENvbnRyYWN0IiwidG9rZW5JZCIsInF1YW50aXR5IiwiY2xhaW1UbyIsIm1ldGFkYXRhIiwiZ2V0Iiwic3RhdHVzIiwianNvbiIsImVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/mint-nft.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/mint-nft.ts"));
module.exports = __webpack_exports__;

})();