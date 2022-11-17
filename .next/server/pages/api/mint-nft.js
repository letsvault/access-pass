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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _thirdweb_dev_sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @thirdweb-dev/sdk */ \"@thirdweb-dev/sdk\");\n/* harmony import */ var _thirdweb_dev_sdk__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_thirdweb_dev_sdk__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _google_cloud_secret_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @google-cloud/secret-manager */ \"@google-cloud/secret-manager\");\n/* harmony import */ var _google_cloud_secret_manager__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_google_cloud_secret_manager__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst client = new _google_cloud_secret_manager__WEBPACK_IMPORTED_MODULE_1__.SecretManagerServiceClient({\n    credentials: {\n        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\\\n/g, \"\\n\"),\n        client_email: process.env.GOOGLE_CLIENT_EMAIL\n    }\n});\nconst name = \"projects/204118709939/secrets/University/versions/latest\";\nasync function getSecretVersion() {\n    const [version] = await client.accessSecretVersion({\n        name: name\n    });\n    const payload = version.payload?.data?.toString();\n    return payload;\n}\nasync function handler(req, res) {\n    try {\n        const { address  } = req.body;\n        const key = await getSecretVersion();\n        if (key) {\n            const sdk = _thirdweb_dev_sdk__WEBPACK_IMPORTED_MODULE_0__.ThirdwebSDK.fromPrivateKey(key, \"polygon\");\n            const contractAddress = \"0xB5CBF0BE6413F8F7241A1D32725286DB078784ed\";\n            const contract = await sdk.getContract(contractAddress, \"edition-drop\");\n            const tokenId = 1;\n            const quantity = 1;\n            const transaction = await contract.claimTo(address, tokenId, quantity);\n            const metadata = (await contract.get(tokenId)).metadata;\n            res.status(200).json(metadata);\n        }\n    } catch (error) {\n        console.log(error);\n        res.status(500).json(error);\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbWludC1uZnQudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDeUU7QUFDQztBQUUxRSxNQUFNRSxNQUFNLEdBQUcsSUFBSUQsb0ZBQTBCLENBQUM7SUFDMUNFLFdBQVcsRUFBRTtRQUNYQyxXQUFXLEVBQUVDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxrQkFBa0IsRUFBRUMsT0FBTyxTQUFTLElBQUksQ0FBQztRQUNsRUMsWUFBWSxFQUFFSixPQUFPLENBQUNDLEdBQUcsQ0FBQ0ksbUJBQW1CO0tBQzlDO0NBQ0YsQ0FBQztBQUNKLE1BQU1DLElBQUksR0FBRywwREFBMEQ7QUFHdkUsZUFBZUMsZ0JBQWdCLEdBQUc7SUFDOUIsTUFBTSxDQUFDQyxPQUFPLENBQUMsR0FBRyxNQUFNWCxNQUFNLENBQUNZLG1CQUFtQixDQUFDO1FBQ2pESCxJQUFJLEVBQUVBLElBQUk7S0FDWCxDQUFDO0lBRUYsTUFBTUksT0FBTyxHQUFHRixPQUFPLENBQUNFLE9BQU8sRUFBRUMsSUFBSSxFQUFFQyxRQUFRLEVBQUU7SUFFakQsT0FBT0YsT0FBTyxDQUFDO0FBQ25CLENBQUM7QUFFYyxlQUFlRyxPQUFPLENBQ2pDQyxHQUFtQixFQUNuQkMsR0FBb0IsRUFDdEI7SUFDRSxJQUFJO1FBQ0EsTUFBTSxFQUFFQyxPQUFPLEdBQUUsR0FBR0YsR0FBRyxDQUFDRyxJQUFJO1FBRTVCLE1BQU1DLEdBQUcsR0FBRyxNQUFNWCxnQkFBZ0IsRUFBRTtRQUVwQyxJQUFJVyxHQUFHLEVBQUU7WUFDTCxNQUFNQyxHQUFHLEdBQUd4Qix5RUFBMEIsQ0FDbEN1QixHQUFHLEVBQ0gsU0FBUyxDQUNaO1lBRUQsTUFBTUcsZUFBZSxHQUFHLDRDQUE0QztZQUNwRSxNQUFNQyxRQUFRLEdBQUcsTUFBTUgsR0FBRyxDQUFDSSxXQUFXLENBQUNGLGVBQWUsRUFBRSxjQUFjLENBQUM7WUFFdkUsTUFBTUcsT0FBTyxHQUFHLENBQUM7WUFDakIsTUFBTUMsUUFBUSxHQUFHLENBQUM7WUFDbEIsTUFBTUMsV0FBVyxHQUFHLE1BQU1KLFFBQVEsQ0FBQ0ssT0FBTyxDQUFDWCxPQUFPLEVBQVlRLE9BQU8sRUFBRUMsUUFBUSxDQUFDO1lBRWhGLE1BQU1HLFFBQVEsR0FBRyxDQUFDLE1BQU1OLFFBQVEsQ0FBQ08sR0FBRyxDQUFDTCxPQUFPLENBQUMsRUFBRUksUUFBUTtZQUV2RGIsR0FBRyxDQUFDZSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQ0gsUUFBUSxDQUFDLENBQUM7UUFDL0IsQ0FBQztJQUNULEVBQ0EsT0FBT0ksS0FBSyxFQUFDO1FBQ1RDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixLQUFLLENBQUMsQ0FBQztRQUNuQmpCLEdBQUcsQ0FBQ2UsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUNDLEtBQUssQ0FBQyxDQUFDO0lBQ2hDLENBQUM7QUFDTCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYWNjZXNzLXBhc3MvLi9wYWdlcy9hcGkvbWludC1uZnQudHM/MWJmNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tICduZXh0JztcbmltcG9ydCB7IFRoaXJkd2ViU0RLLCBUcmFuc2FjdGlvblJlc3VsdFdpdGhJZCB9IGZyb20gXCJAdGhpcmR3ZWItZGV2L3Nka1wiO1xuaW1wb3J0IHsgU2VjcmV0TWFuYWdlclNlcnZpY2VDbGllbnQgfSBmcm9tICdAZ29vZ2xlLWNsb3VkL3NlY3JldC1tYW5hZ2VyJztcblxuY29uc3QgY2xpZW50ID0gbmV3IFNlY3JldE1hbmFnZXJTZXJ2aWNlQ2xpZW50KHtcbiAgICBjcmVkZW50aWFsczoge1xuICAgICAgcHJpdmF0ZV9rZXk6IHByb2Nlc3MuZW52LkdPT0dMRV9QUklWQVRFX0tFWT8ucmVwbGFjZSgvXFxcXG4vZywgXCJcXG5cIiksXG4gICAgICBjbGllbnRfZW1haWw6IHByb2Nlc3MuZW52LkdPT0dMRV9DTElFTlRfRU1BSUwsXG4gICAgfSxcbiAgfSk7XG5jb25zdCBuYW1lID0gJ3Byb2plY3RzLzIwNDExODcwOTkzOS9zZWNyZXRzL1VuaXZlcnNpdHkvdmVyc2lvbnMvbGF0ZXN0JztcblxuXG5hc3luYyBmdW5jdGlvbiBnZXRTZWNyZXRWZXJzaW9uKCkge1xuICAgIGNvbnN0IFt2ZXJzaW9uXSA9IGF3YWl0IGNsaWVudC5hY2Nlc3NTZWNyZXRWZXJzaW9uKHtcbiAgICAgIG5hbWU6IG5hbWUsXG4gICAgfSk7XG5cbiAgICBjb25zdCBwYXlsb2FkID0gdmVyc2lvbi5wYXlsb2FkPy5kYXRhPy50b1N0cmluZygpO1xuXG4gICAgcmV0dXJuIHBheWxvYWQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKFxuICAgIHJlcTogTmV4dEFwaVJlcXVlc3QsIFxuICAgIHJlczogTmV4dEFwaVJlc3BvbnNlXG4pIHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCB7IGFkZHJlc3MgfSA9IHJlcS5ib2R5O1xuXG4gICAgICAgIGNvbnN0IGtleSA9IGF3YWl0IGdldFNlY3JldFZlcnNpb24oKTtcblxuICAgICAgICBpZiAoa2V5KSB7XG4gICAgICAgICAgICBjb25zdCBzZGsgPSBUaGlyZHdlYlNESy5mcm9tUHJpdmF0ZUtleShcbiAgICAgICAgICAgICAgICBrZXksIC8vIFlvdXIgd2FsbGV0IHByaXZhdGUga2V5XG4gICAgICAgICAgICAgICAgXCJwb2x5Z29uXCIsIC8vIGNvbmZpZ3VyZSB0aGlzIHRvIHlvdXIgbmV0d29ya1xuICAgICAgICAgICAgKTtcbiAgICBcbiAgICAgICAgICAgIGNvbnN0IGNvbnRyYWN0QWRkcmVzcyA9ICcweEI1Q0JGMEJFNjQxM0Y4RjcyNDFBMUQzMjcyNTI4NkRCMDc4Nzg0ZWQnO1xuICAgICAgICAgICAgY29uc3QgY29udHJhY3QgPSBhd2FpdCBzZGsuZ2V0Q29udHJhY3QoY29udHJhY3RBZGRyZXNzLCBcImVkaXRpb24tZHJvcFwiKTtcblxuICAgICAgICAgICAgY29uc3QgdG9rZW5JZCA9IDE7XG4gICAgICAgICAgICBjb25zdCBxdWFudGl0eSA9IDE7XG4gICAgICAgICAgICBjb25zdCB0cmFuc2FjdGlvbiA9IGF3YWl0IGNvbnRyYWN0LmNsYWltVG8oYWRkcmVzcyBhcyBzdHJpbmcsIHRva2VuSWQsIHF1YW50aXR5KTtcblxuICAgICAgICAgICAgY29uc3QgbWV0YWRhdGEgPSAoYXdhaXQgY29udHJhY3QuZ2V0KHRva2VuSWQpKS5tZXRhZGF0YTtcblxuICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24obWV0YWRhdGEpO1xuICAgICAgICAgICAgfVxuICAgIH1cbiAgICBjYXRjaCAoZXJyb3Ipe1xuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKGVycm9yKTtcbiAgICB9XG59Il0sIm5hbWVzIjpbIlRoaXJkd2ViU0RLIiwiU2VjcmV0TWFuYWdlclNlcnZpY2VDbGllbnQiLCJjbGllbnQiLCJjcmVkZW50aWFscyIsInByaXZhdGVfa2V5IiwicHJvY2VzcyIsImVudiIsIkdPT0dMRV9QUklWQVRFX0tFWSIsInJlcGxhY2UiLCJjbGllbnRfZW1haWwiLCJHT09HTEVfQ0xJRU5UX0VNQUlMIiwibmFtZSIsImdldFNlY3JldFZlcnNpb24iLCJ2ZXJzaW9uIiwiYWNjZXNzU2VjcmV0VmVyc2lvbiIsInBheWxvYWQiLCJkYXRhIiwidG9TdHJpbmciLCJoYW5kbGVyIiwicmVxIiwicmVzIiwiYWRkcmVzcyIsImJvZHkiLCJrZXkiLCJzZGsiLCJmcm9tUHJpdmF0ZUtleSIsImNvbnRyYWN0QWRkcmVzcyIsImNvbnRyYWN0IiwiZ2V0Q29udHJhY3QiLCJ0b2tlbklkIiwicXVhbnRpdHkiLCJ0cmFuc2FjdGlvbiIsImNsYWltVG8iLCJtZXRhZGF0YSIsImdldCIsInN0YXR1cyIsImpzb24iLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/mint-nft.ts\n");

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