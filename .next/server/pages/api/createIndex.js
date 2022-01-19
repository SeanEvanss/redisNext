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
exports.id = "pages/api/createIndex";
exports.ids = ["pages/api/createIndex"];
exports.modules = {

/***/ "redis-om":
/*!***************************!*\
  !*** external "redis-om" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("redis-om");

/***/ }),

/***/ "./lib/redis.js?36d7":
/*!**********************!*\
  !*** ./lib/redis.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createCar\": () => (/* binding */ createCar),\n/* harmony export */   \"createIndex\": () => (/* binding */ createIndex)\n/* harmony export */ });\n/* harmony import */ var redis_om__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redis-om */ \"redis-om\");\n/* harmony import */ var redis_om__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redis_om__WEBPACK_IMPORTED_MODULE_0__);\n\nconst client = new redis_om__WEBPACK_IMPORTED_MODULE_0__.Client();\nconst url = process.env.REDIS_URL;\nasync function connect() {\n    if (!client.isOpen()) {\n        await client.open(url);\n        console.log(\"Connected\");\n    }\n}\nclass Car extends redis_om__WEBPACK_IMPORTED_MODULE_0__.Entity {\n}\nlet schema = new redis_om__WEBPACK_IMPORTED_MODULE_0__.Schema(Car, {\n    make: {\n        type: 'string'\n    },\n    model: {\n        type: 'string'\n    },\n    image: {\n        type: 'string'\n    },\n    description: {\n        type: 'string',\n        textSearch: true\n    }\n}, {\n    dataStructure: 'JSON'\n});\nasync function createCar(data) {\n    await connect();\n    const repository = new redis_om__WEBPACK_IMPORTED_MODULE_0__.Repository(schema, client);\n    const car = repository.createEntity(data);\n    const id = await repository.save(car);\n    return id;\n}\nasync function createIndex() {\n    await connect();\n    const repository = new redis_om__WEBPACK_IMPORTED_MODULE_0__.Repository(schema, client);\n    await repository.createIndex();\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvcmVkaXMuanM/MzZkNy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQTZEO0FBRTdELEtBQUssQ0FBQ0ksTUFBTSxHQUFHLEdBQUcsQ0FBQ0osNENBQU07QUFDekIsS0FBSyxDQUFDSyxHQUFHLEdBQUVDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxTQUFTO2VBRWpCQyxPQUFPLEdBQUcsQ0FBQztJQUN0QixFQUFFLEdBQUdMLE1BQU0sQ0FBQ00sTUFBTSxJQUFJLENBQUM7UUFDbkIsS0FBSyxDQUFDTixNQUFNLENBQUNPLElBQUksQ0FBQ04sR0FBRztRQUNyQk8sT0FBTyxDQUFDQyxHQUFHLENBQUMsQ0FBVztJQUUzQixDQUFDO0FBQ0wsQ0FBQztNQUVLQyxHQUFHLFNBQVNiLDRDQUFNOztBQUN4QixHQUFHLENBQUNjLE1BQU0sR0FBRyxHQUFHLENBQUNiLDRDQUFNLENBQ25CWSxHQUFHLEVBQ0gsQ0FBQztJQUNDRSxJQUFJLEVBQUUsQ0FBQztRQUFDQyxJQUFJLEVBQUUsQ0FBUTtJQUFDLENBQUM7SUFDeEJDLEtBQUssRUFBRSxDQUFDO1FBQUNELElBQUksRUFBRSxDQUFRO0lBQUMsQ0FBQztJQUN6QkUsS0FBSyxFQUFFLENBQUM7UUFBQ0YsSUFBSSxFQUFFLENBQVE7SUFBQyxDQUFDO0lBQ3pCRyxXQUFXLEVBQUUsQ0FBQztRQUFDSCxJQUFJLEVBQUUsQ0FBUTtRQUFFSSxVQUFVLEVBQUUsSUFBSTtJQUFDLENBQUM7QUFDbkQsQ0FBQyxFQUNELENBQUM7SUFDQ0MsYUFBYSxFQUFFLENBQU07QUFDdkIsQ0FBQztBQUdFLGVBQWVDLFNBQVMsQ0FBQ0MsSUFBSSxFQUFDLENBQUM7SUFDbEMsS0FBSyxDQUFDZixPQUFPO0lBRWIsS0FBSyxDQUFDZ0IsVUFBVSxHQUFHLEdBQUcsQ0FBQ3RCLGdEQUFVLENBQUNZLE1BQU0sRUFBRVgsTUFBTTtJQUNoRCxLQUFLLENBQUNzQixHQUFHLEdBQUVELFVBQVUsQ0FBQ0UsWUFBWSxDQUFDSCxJQUFJO0lBQ3ZDLEtBQUssQ0FBQ0ksRUFBRSxHQUFFLEtBQUssQ0FBQ0gsVUFBVSxDQUFDSSxJQUFJLENBQUNILEdBQUc7SUFDbkMsTUFBTSxDQUFDRSxFQUFFO0FBQ2IsQ0FBQztBQUdNLGVBQWVFLFdBQVcsR0FBRSxDQUFDO0lBQ2xDLEtBQUssQ0FBQ3JCLE9BQU87SUFDYixLQUFLLENBQUNnQixVQUFVLEdBQUcsR0FBRyxDQUFDdEIsZ0RBQVUsQ0FBQ1ksTUFBTSxFQUFFWCxNQUFNO0lBQ2hELEtBQUssQ0FBQ3FCLFVBQVUsQ0FBQ0ssV0FBVztBQUM5QixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVkaXNuZXh0Ly4vbGliL3JlZGlzLmpzP2ZhYzQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2xpZW50LCBFbnRpdHksIFNjaGVtYSwgUmVwb3NpdG9yeSB9IGZyb20gJ3JlZGlzLW9tJztcblxuY29uc3QgY2xpZW50ID0gbmV3IENsaWVudCgpO1xuY29uc3QgdXJsPSBwcm9jZXNzLmVudi5SRURJU19VUkw7XG5cbmFzeW5jIGZ1bmN0aW9uIGNvbm5lY3QoKSB7ICAgIFxuICAgIGlmICghY2xpZW50LmlzT3BlbigpKSB7XG4gICAgICAgIGF3YWl0IGNsaWVudC5vcGVuKHVybCk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiQ29ubmVjdGVkXCIpO1xuXG4gICAgfVxufVxuXG5jbGFzcyBDYXIgZXh0ZW5kcyBFbnRpdHl7fVxubGV0IHNjaGVtYSA9IG5ldyBTY2hlbWEoXG4gICAgQ2FyLFxuICAgIHtcbiAgICAgIG1ha2U6IHsgdHlwZTogJ3N0cmluZycgfSxcbiAgICAgIG1vZGVsOiB7IHR5cGU6ICdzdHJpbmcnIH0sXG4gICAgICBpbWFnZTogeyB0eXBlOiAnc3RyaW5nJyB9LFxuICAgICAgZGVzY3JpcHRpb246IHsgdHlwZTogJ3N0cmluZycsIHRleHRTZWFyY2g6IHRydWUgfSxcbiAgICB9LFxuICAgIHtcbiAgICAgIGRhdGFTdHJ1Y3R1cmU6ICdKU09OJyxcbiAgICB9XG4pO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlQ2FyKGRhdGEpe1xuICAgIGF3YWl0IGNvbm5lY3QoKTtcbiAgICBcbiAgICBjb25zdCByZXBvc2l0b3J5ID0gbmV3IFJlcG9zaXRvcnkoc2NoZW1hLCBjbGllbnQpO1xuICAgIGNvbnN0IGNhcj0gcmVwb3NpdG9yeS5jcmVhdGVFbnRpdHkoZGF0YSk7XG4gICAgY29uc3QgaWQ9IGF3YWl0IHJlcG9zaXRvcnkuc2F2ZShjYXIpO1xuICAgIHJldHVybiBpZDtcbn1cblxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlSW5kZXgoKXtcbiAgYXdhaXQgY29ubmVjdCgpO1xuICBjb25zdCByZXBvc2l0b3J5ID0gbmV3IFJlcG9zaXRvcnkoc2NoZW1hLCBjbGllbnQpO1xuICBhd2FpdCByZXBvc2l0b3J5LmNyZWF0ZUluZGV4KCk7XG59Il0sIm5hbWVzIjpbIkNsaWVudCIsIkVudGl0eSIsIlNjaGVtYSIsIlJlcG9zaXRvcnkiLCJjbGllbnQiLCJ1cmwiLCJwcm9jZXNzIiwiZW52IiwiUkVESVNfVVJMIiwiY29ubmVjdCIsImlzT3BlbiIsIm9wZW4iLCJjb25zb2xlIiwibG9nIiwiQ2FyIiwic2NoZW1hIiwibWFrZSIsInR5cGUiLCJtb2RlbCIsImltYWdlIiwiZGVzY3JpcHRpb24iLCJ0ZXh0U2VhcmNoIiwiZGF0YVN0cnVjdHVyZSIsImNyZWF0ZUNhciIsImRhdGEiLCJyZXBvc2l0b3J5IiwiY2FyIiwiY3JlYXRlRW50aXR5IiwiaWQiLCJzYXZlIiwiY3JlYXRlSW5kZXgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/redis.js?36d7\n");

/***/ }),

/***/ "./pages/api/createIndex.js":
/*!**********************************!*\
  !*** ./pages/api/createIndex.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _lib_redis__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/redis */ \"./lib/redis.js?36d7\");\n\nasync function handler(req, res) {\n    await (0,_lib_redis__WEBPACK_IMPORTED_MODULE_0__.createIndex)();\n    res.status(200).send(\"Index created\");\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvY3JlYXRlSW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBNkM7QUFFOUIsZUFBZUMsT0FBTyxDQUFDQyxHQUFHLEVBQUVDLEdBQUcsRUFBQyxDQUFDO0lBQzVDLEtBQUssQ0FBQ0gsdURBQVc7SUFDakJHLEdBQUcsQ0FBQ0MsTUFBTSxDQUFDLEdBQUcsRUFBRUMsSUFBSSxDQUFDLENBQWU7QUFDeEMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3JlZGlzbmV4dC8uL3BhZ2VzL2FwaS9jcmVhdGVJbmRleC5qcz9jMWI1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUluZGV4IH0gZnJvbSBcIi4uLy4uL2xpYi9yZWRpc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKXtcbiAgICBhd2FpdCBjcmVhdGVJbmRleCgpO1xuICAgIHJlcy5zdGF0dXMoMjAwKS5zZW5kKFwiSW5kZXggY3JlYXRlZFwiKTtcbn0iXSwibmFtZXMiOlsiY3JlYXRlSW5kZXgiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwic3RhdHVzIiwic2VuZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/createIndex.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/createIndex.js"));
module.exports = __webpack_exports__;

})();