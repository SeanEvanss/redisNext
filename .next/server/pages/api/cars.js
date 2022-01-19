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

/***/ "./lib/redis.js":
/*!**********************!*\
  !*** ./lib/redis.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createCar\": () => (/* binding */ createCar),\n/* harmony export */   \"createIndex\": () => (/* binding */ createIndex),\n/* harmony export */   \"searchCars\": () => (/* binding */ searchCars)\n/* harmony export */ });\n/* harmony import */ var redis_om__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redis-om */ \"redis-om\");\n/* harmony import */ var redis_om__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redis_om__WEBPACK_IMPORTED_MODULE_0__);\n\nconst client = new redis_om__WEBPACK_IMPORTED_MODULE_0__.Client();\nconst url = process.env.REDIS_URL;\nasync function connect() {\n    if (!client.isOpen()) {\n        await client.open(url);\n        console.log(\"Connected\");\n    }\n}\nclass Car extends redis_om__WEBPACK_IMPORTED_MODULE_0__.Entity {\n}\nlet schema = new redis_om__WEBPACK_IMPORTED_MODULE_0__.Schema(Car, {\n    make: {\n        type: 'string'\n    },\n    model: {\n        type: 'string'\n    },\n    image: {\n        type: 'string'\n    },\n    description: {\n        type: 'string',\n        textSearch: true\n    }\n}, {\n    dataStructure: 'JSON'\n});\nasync function createCar(data) {\n    await connect();\n    const repository = new redis_om__WEBPACK_IMPORTED_MODULE_0__.Repository(schema, client);\n    const car = repository.createEntity(data);\n    const id = await repository.save(car);\n    return id;\n}\nasync function createIndex() {\n    await connect();\n    const repository = new redis_om__WEBPACK_IMPORTED_MODULE_0__.Repository(schema, client);\n    await repository.createIndex();\n}\nasync function searchCars(query) {\n    await connect();\n    const repository = new redis_om__WEBPACK_IMPORTED_MODULE_0__.Repository(schema, client);\n    const cars = await repository.search().where(\"make\").equals(query).or(\"model\").equals(query).return.all();\n    return cars;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvcmVkaXMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBNkQ7QUFFN0QsS0FBSyxDQUFDSSxNQUFNLEdBQUcsR0FBRyxDQUFDSiw0Q0FBTTtBQUN6QixLQUFLLENBQUNLLEdBQUcsR0FBRUMsT0FBTyxDQUFDQyxHQUFHLENBQUNDLFNBQVM7ZUFFakJDLE9BQU8sR0FBRyxDQUFDO0lBQ3RCLEVBQUUsR0FBR0wsTUFBTSxDQUFDTSxNQUFNLElBQUksQ0FBQztRQUNuQixLQUFLLENBQUNOLE1BQU0sQ0FBQ08sSUFBSSxDQUFDTixHQUFHO1FBQ3JCTyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxDQUFXO0lBRTNCLENBQUM7QUFDTCxDQUFDO01BRUtDLEdBQUcsU0FBU2IsNENBQU07O0FBQ3hCLEdBQUcsQ0FBQ2MsTUFBTSxHQUFHLEdBQUcsQ0FBQ2IsNENBQU0sQ0FDbkJZLEdBQUcsRUFDSCxDQUFDO0lBQ0NFLElBQUksRUFBRSxDQUFDO1FBQUNDLElBQUksRUFBRSxDQUFRO0lBQUMsQ0FBQztJQUN4QkMsS0FBSyxFQUFFLENBQUM7UUFBQ0QsSUFBSSxFQUFFLENBQVE7SUFBQyxDQUFDO0lBQ3pCRSxLQUFLLEVBQUUsQ0FBQztRQUFDRixJQUFJLEVBQUUsQ0FBUTtJQUFDLENBQUM7SUFDekJHLFdBQVcsRUFBRSxDQUFDO1FBQUNILElBQUksRUFBRSxDQUFRO1FBQUVJLFVBQVUsRUFBRSxJQUFJO0lBQUMsQ0FBQztBQUNuRCxDQUFDLEVBQ0QsQ0FBQztJQUNDQyxhQUFhLEVBQUUsQ0FBTTtBQUN2QixDQUFDO0FBR0UsZUFBZUMsU0FBUyxDQUFDQyxJQUFJLEVBQUMsQ0FBQztJQUNsQyxLQUFLLENBQUNmLE9BQU87SUFFYixLQUFLLENBQUNnQixVQUFVLEdBQUcsR0FBRyxDQUFDdEIsZ0RBQVUsQ0FBQ1ksTUFBTSxFQUFFWCxNQUFNO0lBQ2hELEtBQUssQ0FBQ3NCLEdBQUcsR0FBRUQsVUFBVSxDQUFDRSxZQUFZLENBQUNILElBQUk7SUFDdkMsS0FBSyxDQUFDSSxFQUFFLEdBQUUsS0FBSyxDQUFDSCxVQUFVLENBQUNJLElBQUksQ0FBQ0gsR0FBRztJQUNuQyxNQUFNLENBQUNFLEVBQUU7QUFDYixDQUFDO0FBR00sZUFBZUUsV0FBVyxHQUFFLENBQUM7SUFDbEMsS0FBSyxDQUFDckIsT0FBTztJQUNiLEtBQUssQ0FBQ2dCLFVBQVUsR0FBRyxHQUFHLENBQUN0QixnREFBVSxDQUFDWSxNQUFNLEVBQUVYLE1BQU07SUFDaEQsS0FBSyxDQUFDcUIsVUFBVSxDQUFDSyxXQUFXO0FBQzlCLENBQUM7QUFFTSxlQUFlQyxVQUFVLENBQUNDLEtBQUssRUFBQyxDQUFDO0lBQ3RDLEtBQUssQ0FBQ3ZCLE9BQU87SUFDYixLQUFLLENBQUNnQixVQUFVLEdBQUcsR0FBRyxDQUFDdEIsZ0RBQVUsQ0FBQ1ksTUFBTSxFQUFFWCxNQUFNO0lBQ2hELEtBQUssQ0FBQzZCLElBQUksR0FBRSxLQUFLLENBQUNSLFVBQVUsQ0FBQ1MsTUFBTSxHQUNoQ0MsS0FBSyxDQUFDLENBQU0sT0FBRUMsTUFBTSxDQUFDSixLQUFLLEVBQzFCSyxFQUFFLENBQUMsQ0FBTyxRQUFFRCxNQUFNLENBQUNKLEtBQUssRUFDeEJNLE1BQU0sQ0FBQ0MsR0FBRztJQUViLE1BQU0sQ0FBQ04sSUFBSTtBQUNiLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWRpc25leHQvLi9saWIvcmVkaXMuanM/ZmFjNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDbGllbnQsIEVudGl0eSwgU2NoZW1hLCBSZXBvc2l0b3J5IH0gZnJvbSAncmVkaXMtb20nO1xuXG5jb25zdCBjbGllbnQgPSBuZXcgQ2xpZW50KCk7XG5jb25zdCB1cmw9IHByb2Nlc3MuZW52LlJFRElTX1VSTDtcblxuYXN5bmMgZnVuY3Rpb24gY29ubmVjdCgpIHsgICAgXG4gICAgaWYgKCFjbGllbnQuaXNPcGVuKCkpIHtcbiAgICAgICAgYXdhaXQgY2xpZW50Lm9wZW4odXJsKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJDb25uZWN0ZWRcIik7XG5cbiAgICB9XG59XG5cbmNsYXNzIENhciBleHRlbmRzIEVudGl0eXt9XG5sZXQgc2NoZW1hID0gbmV3IFNjaGVtYShcbiAgICBDYXIsXG4gICAge1xuICAgICAgbWFrZTogeyB0eXBlOiAnc3RyaW5nJyB9LFxuICAgICAgbW9kZWw6IHsgdHlwZTogJ3N0cmluZycgfSxcbiAgICAgIGltYWdlOiB7IHR5cGU6ICdzdHJpbmcnIH0sXG4gICAgICBkZXNjcmlwdGlvbjogeyB0eXBlOiAnc3RyaW5nJywgdGV4dFNlYXJjaDogdHJ1ZSB9LFxuICAgIH0sXG4gICAge1xuICAgICAgZGF0YVN0cnVjdHVyZTogJ0pTT04nLFxuICAgIH1cbik7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVDYXIoZGF0YSl7XG4gICAgYXdhaXQgY29ubmVjdCgpO1xuICAgIFxuICAgIGNvbnN0IHJlcG9zaXRvcnkgPSBuZXcgUmVwb3NpdG9yeShzY2hlbWEsIGNsaWVudCk7XG4gICAgY29uc3QgY2FyPSByZXBvc2l0b3J5LmNyZWF0ZUVudGl0eShkYXRhKTtcbiAgICBjb25zdCBpZD0gYXdhaXQgcmVwb3NpdG9yeS5zYXZlKGNhcik7XG4gICAgcmV0dXJuIGlkO1xufVxuXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVJbmRleCgpe1xuICBhd2FpdCBjb25uZWN0KCk7XG4gIGNvbnN0IHJlcG9zaXRvcnkgPSBuZXcgUmVwb3NpdG9yeShzY2hlbWEsIGNsaWVudCk7XG4gIGF3YWl0IHJlcG9zaXRvcnkuY3JlYXRlSW5kZXgoKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNlYXJjaENhcnMocXVlcnkpe1xuICBhd2FpdCBjb25uZWN0KCk7XG4gIGNvbnN0IHJlcG9zaXRvcnkgPSBuZXcgUmVwb3NpdG9yeShzY2hlbWEsIGNsaWVudCk7XG4gIGNvbnN0IGNhcnM9IGF3YWl0IHJlcG9zaXRvcnkuc2VhcmNoKClcbiAgICAud2hlcmUoXCJtYWtlXCIpLmVxdWFscyhxdWVyeSlcbiAgICAub3IoXCJtb2RlbFwiKS5lcXVhbHMocXVlcnkpXG4gICAgLnJldHVybi5hbGwoKTtcblxuICByZXR1cm4gY2Fycztcbn0iXSwibmFtZXMiOlsiQ2xpZW50IiwiRW50aXR5IiwiU2NoZW1hIiwiUmVwb3NpdG9yeSIsImNsaWVudCIsInVybCIsInByb2Nlc3MiLCJlbnYiLCJSRURJU19VUkwiLCJjb25uZWN0IiwiaXNPcGVuIiwib3BlbiIsImNvbnNvbGUiLCJsb2ciLCJDYXIiLCJzY2hlbWEiLCJtYWtlIiwidHlwZSIsIm1vZGVsIiwiaW1hZ2UiLCJkZXNjcmlwdGlvbiIsInRleHRTZWFyY2giLCJkYXRhU3RydWN0dXJlIiwiY3JlYXRlQ2FyIiwiZGF0YSIsInJlcG9zaXRvcnkiLCJjYXIiLCJjcmVhdGVFbnRpdHkiLCJpZCIsInNhdmUiLCJjcmVhdGVJbmRleCIsInNlYXJjaENhcnMiLCJxdWVyeSIsImNhcnMiLCJzZWFyY2giLCJ3aGVyZSIsImVxdWFscyIsIm9yIiwicmV0dXJuIiwiYWxsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/redis.js\n");

/***/ }),

/***/ "./pages/api/cars.js":
/*!***************************!*\
  !*** ./pages/api/cars.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _lib_redis__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/redis */ \"./lib/redis.js\");\n\nasync function handler(req, res) {\n    const id = await (0,_lib_redis__WEBPACK_IMPORTED_MODULE_0__.createCar)(req.body);\n    console.log(id);\n    res.status(200).json({\n        id\n    });\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvY2Fycy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUEyQztBQUc1QixlQUFlQyxPQUFPLENBQUNDLEdBQUcsRUFBRUMsR0FBRyxFQUFFLENBQUM7SUFDN0MsS0FBSyxDQUFDQyxFQUFFLEdBQUcsS0FBSyxDQUFDSixxREFBUyxDQUFDRSxHQUFHLENBQUNHLElBQUk7SUFDbkNDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSCxFQUFFO0lBQ2RELEdBQUcsQ0FBQ0ssTUFBTSxDQUFDLEdBQUcsRUFBRUMsSUFBSSxDQUFDLENBQUM7UUFBQ0wsRUFBRTtJQUFDLENBQUM7QUFDL0IsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3JlZGlzbmV4dC8uL3BhZ2VzL2FwaS9jYXJzLmpzPzA0OGMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ2FyIH0gZnJvbSAnLi4vLi4vbGliL3JlZGlzJztcblxuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XG4gICAgY29uc3QgaWQgPSBhd2FpdCBjcmVhdGVDYXIocmVxLmJvZHkpO1xuICAgIGNvbnNvbGUubG9nKGlkKTtcbiAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IGlkIH0pXG59Il0sIm5hbWVzIjpbImNyZWF0ZUNhciIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJpZCIsImJvZHkiLCJjb25zb2xlIiwibG9nIiwic3RhdHVzIiwianNvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/cars.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/cars.js"));
module.exports = __webpack_exports__;

})();