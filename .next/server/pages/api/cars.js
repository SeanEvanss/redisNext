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
exports.id = "pages/api/cars";
exports.ids = ["pages/api/cars"];
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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createCar\": () => (/* binding */ createCar)\n/* harmony export */ });\n/* harmony import */ var redis_om__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redis-om */ \"redis-om\");\n/* harmony import */ var redis_om__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redis_om__WEBPACK_IMPORTED_MODULE_0__);\n\nconst client = new redis_om__WEBPACK_IMPORTED_MODULE_0__.Client();\nconst url = process.env.REDIS_URL;\nasync function connect() {\n    if (!client.isOpen()) {\n        await client.open(url);\n        console.log(\"Connected\");\n    }\n}\nclass Car extends redis_om__WEBPACK_IMPORTED_MODULE_0__.Entity {\n}\nlet schema = new redis_om__WEBPACK_IMPORTED_MODULE_0__.Schema(Car, {\n    make: {\n        type: 'string'\n    },\n    model: {\n        type: 'string'\n    },\n    image: {\n        type: 'string'\n    },\n    description: {\n        type: 'string',\n        textSearch: true\n    }\n}, {\n    dataStructure: 'JSON'\n});\nasync function createCar(data) {\n    await connect();\n    const repository = new redis_om__WEBPACK_IMPORTED_MODULE_0__.Repository(schema, client);\n    const car = repository.createEntity(data);\n    const id = await repository.save(car);\n    return id;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvcmVkaXMuanM/MzZkNy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBNkQ7QUFFN0QsS0FBSyxDQUFDSSxNQUFNLEdBQUcsR0FBRyxDQUFDSiw0Q0FBTTtBQUN6QixLQUFLLENBQUNLLEdBQUcsR0FBRUMsT0FBTyxDQUFDQyxHQUFHLENBQUNDLFNBQVM7ZUFFakJDLE9BQU8sR0FBRyxDQUFDO0lBQ3RCLEVBQUUsR0FBR0wsTUFBTSxDQUFDTSxNQUFNLElBQUksQ0FBQztRQUNuQixLQUFLLENBQUNOLE1BQU0sQ0FBQ08sSUFBSSxDQUFDTixHQUFHO1FBQ3JCTyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxDQUFXO0lBRTNCLENBQUM7QUFDTCxDQUFDO01BRUtDLEdBQUcsU0FBU2IsNENBQU07O0FBQ3hCLEdBQUcsQ0FBQ2MsTUFBTSxHQUFHLEdBQUcsQ0FBQ2IsNENBQU0sQ0FDbkJZLEdBQUcsRUFDSCxDQUFDO0lBQ0NFLElBQUksRUFBRSxDQUFDO1FBQUNDLElBQUksRUFBRSxDQUFRO0lBQUMsQ0FBQztJQUN4QkMsS0FBSyxFQUFFLENBQUM7UUFBQ0QsSUFBSSxFQUFFLENBQVE7SUFBQyxDQUFDO0lBQ3pCRSxLQUFLLEVBQUUsQ0FBQztRQUFDRixJQUFJLEVBQUUsQ0FBUTtJQUFDLENBQUM7SUFDekJHLFdBQVcsRUFBRSxDQUFDO1FBQUNILElBQUksRUFBRSxDQUFRO1FBQUVJLFVBQVUsRUFBRSxJQUFJO0lBQUMsQ0FBQztBQUNuRCxDQUFDLEVBQ0QsQ0FBQztJQUNDQyxhQUFhLEVBQUUsQ0FBTTtBQUN2QixDQUFDO0FBR0UsZUFBZUMsU0FBUyxDQUFDQyxJQUFJLEVBQUMsQ0FBQztJQUNsQyxLQUFLLENBQUNmLE9BQU87SUFFYixLQUFLLENBQUNnQixVQUFVLEdBQUcsR0FBRyxDQUFDdEIsZ0RBQVUsQ0FBQ1ksTUFBTSxFQUFFWCxNQUFNO0lBQ2hELEtBQUssQ0FBQ3NCLEdBQUcsR0FBRUQsVUFBVSxDQUFDRSxZQUFZLENBQUNILElBQUk7SUFDdkMsS0FBSyxDQUFDSSxFQUFFLEdBQUUsS0FBSyxDQUFDSCxVQUFVLENBQUNJLElBQUksQ0FBQ0gsR0FBRztJQUNuQyxNQUFNLENBQUNFLEVBQUU7QUFDYixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVkaXNuZXh0Ly4vbGliL3JlZGlzLmpzP2ZhYzQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2xpZW50LCBFbnRpdHksIFNjaGVtYSwgUmVwb3NpdG9yeSB9IGZyb20gJ3JlZGlzLW9tJztcblxuY29uc3QgY2xpZW50ID0gbmV3IENsaWVudCgpO1xuY29uc3QgdXJsPSBwcm9jZXNzLmVudi5SRURJU19VUkw7XG5cbmFzeW5jIGZ1bmN0aW9uIGNvbm5lY3QoKSB7ICAgIFxuICAgIGlmICghY2xpZW50LmlzT3BlbigpKSB7XG4gICAgICAgIGF3YWl0IGNsaWVudC5vcGVuKHVybCk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiQ29ubmVjdGVkXCIpO1xuXG4gICAgfVxufVxuXG5jbGFzcyBDYXIgZXh0ZW5kcyBFbnRpdHl7fVxubGV0IHNjaGVtYSA9IG5ldyBTY2hlbWEoXG4gICAgQ2FyLFxuICAgIHtcbiAgICAgIG1ha2U6IHsgdHlwZTogJ3N0cmluZycgfSxcbiAgICAgIG1vZGVsOiB7IHR5cGU6ICdzdHJpbmcnIH0sXG4gICAgICBpbWFnZTogeyB0eXBlOiAnc3RyaW5nJyB9LFxuICAgICAgZGVzY3JpcHRpb246IHsgdHlwZTogJ3N0cmluZycsIHRleHRTZWFyY2g6IHRydWUgfSxcbiAgICB9LFxuICAgIHtcbiAgICAgIGRhdGFTdHJ1Y3R1cmU6ICdKU09OJyxcbiAgICB9XG4pO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlQ2FyKGRhdGEpe1xuICAgIGF3YWl0IGNvbm5lY3QoKTtcbiAgICBcbiAgICBjb25zdCByZXBvc2l0b3J5ID0gbmV3IFJlcG9zaXRvcnkoc2NoZW1hLCBjbGllbnQpO1xuICAgIGNvbnN0IGNhcj0gcmVwb3NpdG9yeS5jcmVhdGVFbnRpdHkoZGF0YSk7XG4gICAgY29uc3QgaWQ9IGF3YWl0IHJlcG9zaXRvcnkuc2F2ZShjYXIpO1xuICAgIHJldHVybiBpZDtcbn0iXSwibmFtZXMiOlsiQ2xpZW50IiwiRW50aXR5IiwiU2NoZW1hIiwiUmVwb3NpdG9yeSIsImNsaWVudCIsInVybCIsInByb2Nlc3MiLCJlbnYiLCJSRURJU19VUkwiLCJjb25uZWN0IiwiaXNPcGVuIiwib3BlbiIsImNvbnNvbGUiLCJsb2ciLCJDYXIiLCJzY2hlbWEiLCJtYWtlIiwidHlwZSIsIm1vZGVsIiwiaW1hZ2UiLCJkZXNjcmlwdGlvbiIsInRleHRTZWFyY2giLCJkYXRhU3RydWN0dXJlIiwiY3JlYXRlQ2FyIiwiZGF0YSIsInJlcG9zaXRvcnkiLCJjYXIiLCJjcmVhdGVFbnRpdHkiLCJpZCIsInNhdmUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/redis.js?36d7\n");

/***/ }),

/***/ "./pages/api/cars.js?9055":
/*!***************************!*\
  !*** ./pages/api/cars.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _lib_redis__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/redis */ \"./lib/redis.js?36d7\");\n\nasync function handler(req, res) {\n    const id = await (0,_lib_redis__WEBPACK_IMPORTED_MODULE_0__.createCar)(req.body);\n    console.log(id);\n    res.status(200).json({\n        id\n    });\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvY2Fycy5qcz85MDU1LmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQTJDO0FBRzVCLGVBQWVDLE9BQU8sQ0FBQ0MsR0FBRyxFQUFFQyxHQUFHLEVBQUUsQ0FBQztJQUM3QyxLQUFLLENBQUNDLEVBQUUsR0FBRyxLQUFLLENBQUNKLHFEQUFTLENBQUNFLEdBQUcsQ0FBQ0csSUFBSTtJQUNuQ0MsT0FBTyxDQUFDQyxHQUFHLENBQUNILEVBQUU7SUFDZEQsR0FBRyxDQUFDSyxNQUFNLENBQUMsR0FBRyxFQUFFQyxJQUFJLENBQUMsQ0FBQztRQUFDTCxFQUFFO0lBQUMsQ0FBQztBQUMvQixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVkaXNuZXh0Ly4vcGFnZXMvYXBpL2NhcnMuanM/MDQ4YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDYXIgfSBmcm9tICcuLi8uLi9saWIvcmVkaXMnO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcbiAgICBjb25zdCBpZCA9IGF3YWl0IGNyZWF0ZUNhcihyZXEuYm9keSk7XG4gICAgY29uc29sZS5sb2coaWQpO1xuICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgaWQgfSlcbn0iXSwibmFtZXMiOlsiY3JlYXRlQ2FyIiwiaGFuZGxlciIsInJlcSIsInJlcyIsImlkIiwiYm9keSIsImNvbnNvbGUiLCJsb2ciLCJzdGF0dXMiLCJqc29uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/cars.js?9055\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/cars.js?9055"));
module.exports = __webpack_exports__;

})();