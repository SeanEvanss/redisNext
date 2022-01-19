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
exports.id = "pages/api/search";
exports.ids = ["pages/api/search"];
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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createCar\": () => (/* binding */ createCar),\n/* harmony export */   \"createIndex\": () => (/* binding */ createIndex),\n/* harmony export */   \"searchCars\": () => (/* binding */ searchCars)\n/* harmony export */ });\n/* harmony import */ var redis_om__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redis-om */ \"redis-om\");\n/* harmony import */ var redis_om__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redis_om__WEBPACK_IMPORTED_MODULE_0__);\n\nconst client = new redis_om__WEBPACK_IMPORTED_MODULE_0__.Client();\nconst url = process.env.REDIS_URL;\nasync function connect() {\n    if (!client.isOpen()) {\n        await client.open(url);\n        console.log(\"Connected\");\n    }\n}\nclass Car extends redis_om__WEBPACK_IMPORTED_MODULE_0__.Entity {\n}\nlet schema = new redis_om__WEBPACK_IMPORTED_MODULE_0__.Schema(Car, {\n    make: {\n        type: 'string'\n    },\n    model: {\n        type: 'string'\n    },\n    image: {\n        type: 'string'\n    },\n    description: {\n        type: 'string',\n        textSearch: true\n    }\n}, {\n    dataStructure: 'JSON'\n});\nasync function createCar(data) {\n    await connect();\n    const repository = new redis_om__WEBPACK_IMPORTED_MODULE_0__.Repository(schema, client);\n    const car = repository.createEntity(data);\n    const id = await repository.save(car);\n    return id;\n}\nasync function createIndex() {\n    await connect();\n    const repository = new redis_om__WEBPACK_IMPORTED_MODULE_0__.Repository(schema, client);\n    await repository.createIndex();\n}\nasync function searchCars(query) {\n    await connect();\n    const repository = new redis_om__WEBPACK_IMPORTED_MODULE_0__.Repository(schema, client);\n    const cars = await repository.search().where(\"make\").equals(query).or(\"model\").equals(query).or(\"description\").matches(query).return.all();\n    return cars;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvcmVkaXMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBNkQ7QUFFN0QsS0FBSyxDQUFDSSxNQUFNLEdBQUcsR0FBRyxDQUFDSiw0Q0FBTTtBQUN6QixLQUFLLENBQUNLLEdBQUcsR0FBRUMsT0FBTyxDQUFDQyxHQUFHLENBQUNDLFNBQVM7ZUFFakJDLE9BQU8sR0FBRyxDQUFDO0lBQ3RCLEVBQUUsR0FBR0wsTUFBTSxDQUFDTSxNQUFNLElBQUksQ0FBQztRQUNuQixLQUFLLENBQUNOLE1BQU0sQ0FBQ08sSUFBSSxDQUFDTixHQUFHO1FBQ3JCTyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxDQUFXO0lBRTNCLENBQUM7QUFDTCxDQUFDO01BRUtDLEdBQUcsU0FBU2IsNENBQU07O0FBQ3hCLEdBQUcsQ0FBQ2MsTUFBTSxHQUFHLEdBQUcsQ0FBQ2IsNENBQU0sQ0FDbkJZLEdBQUcsRUFDSCxDQUFDO0lBQ0NFLElBQUksRUFBRSxDQUFDO1FBQUNDLElBQUksRUFBRSxDQUFRO0lBQUMsQ0FBQztJQUN4QkMsS0FBSyxFQUFFLENBQUM7UUFBQ0QsSUFBSSxFQUFFLENBQVE7SUFBQyxDQUFDO0lBQ3pCRSxLQUFLLEVBQUUsQ0FBQztRQUFDRixJQUFJLEVBQUUsQ0FBUTtJQUFDLENBQUM7SUFDekJHLFdBQVcsRUFBRSxDQUFDO1FBQUNILElBQUksRUFBRSxDQUFRO1FBQUVJLFVBQVUsRUFBRSxJQUFJO0lBQUMsQ0FBQztBQUNuRCxDQUFDLEVBQ0QsQ0FBQztJQUNDQyxhQUFhLEVBQUUsQ0FBTTtBQUN2QixDQUFDO0FBR0UsZUFBZUMsU0FBUyxDQUFDQyxJQUFJLEVBQUMsQ0FBQztJQUNsQyxLQUFLLENBQUNmLE9BQU87SUFFYixLQUFLLENBQUNnQixVQUFVLEdBQUcsR0FBRyxDQUFDdEIsZ0RBQVUsQ0FBQ1ksTUFBTSxFQUFFWCxNQUFNO0lBQ2hELEtBQUssQ0FBQ3NCLEdBQUcsR0FBRUQsVUFBVSxDQUFDRSxZQUFZLENBQUNILElBQUk7SUFDdkMsS0FBSyxDQUFDSSxFQUFFLEdBQUUsS0FBSyxDQUFDSCxVQUFVLENBQUNJLElBQUksQ0FBQ0gsR0FBRztJQUNuQyxNQUFNLENBQUNFLEVBQUU7QUFDYixDQUFDO0FBR00sZUFBZUUsV0FBVyxHQUFFLENBQUM7SUFDbEMsS0FBSyxDQUFDckIsT0FBTztJQUNiLEtBQUssQ0FBQ2dCLFVBQVUsR0FBRyxHQUFHLENBQUN0QixnREFBVSxDQUFDWSxNQUFNLEVBQUVYLE1BQU07SUFDaEQsS0FBSyxDQUFDcUIsVUFBVSxDQUFDSyxXQUFXO0FBQzlCLENBQUM7QUFFTSxlQUFlQyxVQUFVLENBQUNDLEtBQUssRUFBQyxDQUFDO0lBQ3RDLEtBQUssQ0FBQ3ZCLE9BQU87SUFDYixLQUFLLENBQUNnQixVQUFVLEdBQUcsR0FBRyxDQUFDdEIsZ0RBQVUsQ0FBQ1ksTUFBTSxFQUFFWCxNQUFNO0lBQ2hELEtBQUssQ0FBQzZCLElBQUksR0FBRSxLQUFLLENBQUNSLFVBQVUsQ0FBQ1MsTUFBTSxHQUNoQ0MsS0FBSyxDQUFDLENBQU0sT0FBRUMsTUFBTSxDQUFDSixLQUFLLEVBQzFCSyxFQUFFLENBQUMsQ0FBTyxRQUFFRCxNQUFNLENBQUNKLEtBQUssRUFDeEJLLEVBQUUsQ0FBQyxDQUFhLGNBQUVDLE9BQU8sQ0FBQ04sS0FBSyxFQUMvQk8sTUFBTSxDQUFDQyxHQUFHO0lBRWIsTUFBTSxDQUFDUCxJQUFJO0FBQ2IsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3JlZGlzbmV4dC8uL2xpYi9yZWRpcy5qcz9mYWM0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENsaWVudCwgRW50aXR5LCBTY2hlbWEsIFJlcG9zaXRvcnkgfSBmcm9tICdyZWRpcy1vbSc7XG5cbmNvbnN0IGNsaWVudCA9IG5ldyBDbGllbnQoKTtcbmNvbnN0IHVybD0gcHJvY2Vzcy5lbnYuUkVESVNfVVJMO1xuXG5hc3luYyBmdW5jdGlvbiBjb25uZWN0KCkgeyAgICBcbiAgICBpZiAoIWNsaWVudC5pc09wZW4oKSkge1xuICAgICAgICBhd2FpdCBjbGllbnQub3Blbih1cmwpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIkNvbm5lY3RlZFwiKTtcblxuICAgIH1cbn1cblxuY2xhc3MgQ2FyIGV4dGVuZHMgRW50aXR5e31cbmxldCBzY2hlbWEgPSBuZXcgU2NoZW1hKFxuICAgIENhcixcbiAgICB7XG4gICAgICBtYWtlOiB7IHR5cGU6ICdzdHJpbmcnIH0sXG4gICAgICBtb2RlbDogeyB0eXBlOiAnc3RyaW5nJyB9LFxuICAgICAgaW1hZ2U6IHsgdHlwZTogJ3N0cmluZycgfSxcbiAgICAgIGRlc2NyaXB0aW9uOiB7IHR5cGU6ICdzdHJpbmcnLCB0ZXh0U2VhcmNoOiB0cnVlIH0sXG4gICAgfSxcbiAgICB7XG4gICAgICBkYXRhU3RydWN0dXJlOiAnSlNPTicsXG4gICAgfVxuKTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUNhcihkYXRhKXtcbiAgICBhd2FpdCBjb25uZWN0KCk7XG4gICAgXG4gICAgY29uc3QgcmVwb3NpdG9yeSA9IG5ldyBSZXBvc2l0b3J5KHNjaGVtYSwgY2xpZW50KTtcbiAgICBjb25zdCBjYXI9IHJlcG9zaXRvcnkuY3JlYXRlRW50aXR5KGRhdGEpO1xuICAgIGNvbnN0IGlkPSBhd2FpdCByZXBvc2l0b3J5LnNhdmUoY2FyKTtcbiAgICByZXR1cm4gaWQ7XG59XG5cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUluZGV4KCl7XG4gIGF3YWl0IGNvbm5lY3QoKTtcbiAgY29uc3QgcmVwb3NpdG9yeSA9IG5ldyBSZXBvc2l0b3J5KHNjaGVtYSwgY2xpZW50KTtcbiAgYXdhaXQgcmVwb3NpdG9yeS5jcmVhdGVJbmRleCgpO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc2VhcmNoQ2FycyhxdWVyeSl7XG4gIGF3YWl0IGNvbm5lY3QoKTtcbiAgY29uc3QgcmVwb3NpdG9yeSA9IG5ldyBSZXBvc2l0b3J5KHNjaGVtYSwgY2xpZW50KTtcbiAgY29uc3QgY2Fycz0gYXdhaXQgcmVwb3NpdG9yeS5zZWFyY2goKVxuICAgIC53aGVyZShcIm1ha2VcIikuZXF1YWxzKHF1ZXJ5KVxuICAgIC5vcihcIm1vZGVsXCIpLmVxdWFscyhxdWVyeSlcbiAgICAub3IoXCJkZXNjcmlwdGlvblwiKS5tYXRjaGVzKHF1ZXJ5KVxuICAgIC5yZXR1cm4uYWxsKCk7XG5cbiAgcmV0dXJuIGNhcnM7XG59Il0sIm5hbWVzIjpbIkNsaWVudCIsIkVudGl0eSIsIlNjaGVtYSIsIlJlcG9zaXRvcnkiLCJjbGllbnQiLCJ1cmwiLCJwcm9jZXNzIiwiZW52IiwiUkVESVNfVVJMIiwiY29ubmVjdCIsImlzT3BlbiIsIm9wZW4iLCJjb25zb2xlIiwibG9nIiwiQ2FyIiwic2NoZW1hIiwibWFrZSIsInR5cGUiLCJtb2RlbCIsImltYWdlIiwiZGVzY3JpcHRpb24iLCJ0ZXh0U2VhcmNoIiwiZGF0YVN0cnVjdHVyZSIsImNyZWF0ZUNhciIsImRhdGEiLCJyZXBvc2l0b3J5IiwiY2FyIiwiY3JlYXRlRW50aXR5IiwiaWQiLCJzYXZlIiwiY3JlYXRlSW5kZXgiLCJzZWFyY2hDYXJzIiwicXVlcnkiLCJjYXJzIiwic2VhcmNoIiwid2hlcmUiLCJlcXVhbHMiLCJvciIsIm1hdGNoZXMiLCJyZXR1cm4iLCJhbGwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/redis.js\n");

/***/ }),

/***/ "./pages/api/search.js":
/*!*****************************!*\
  !*** ./pages/api/search.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _lib_redis__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/redis */ \"./lib/redis.js\");\n\n//export async handler\nasync function handler(req, res) {\n    const query = req.query.q;\n    const cars = await (0,_lib_redis__WEBPACK_IMPORTED_MODULE_0__.searchCars)(query);\n    res.status(200).json({\n        cars\n    });\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvc2VhcmNoLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQTRDO0FBRTVDLEVBQXNCO0FBQ1AsZUFBZUMsT0FBTyxDQUFDQyxHQUFHLEVBQUVDLEdBQUcsRUFBRSxDQUFDO0lBQzdDLEtBQUssQ0FBQ0MsS0FBSyxHQUFFRixHQUFHLENBQUNFLEtBQUssQ0FBQ0MsQ0FBQztJQUN4QixLQUFLLENBQUNDLElBQUksR0FBRSxLQUFLLENBQUNOLHNEQUFVLENBQUNJLEtBQUs7SUFDbENELEdBQUcsQ0FBQ0ksTUFBTSxDQUFDLEdBQUcsRUFBRUMsSUFBSSxDQUFDLENBQUNGO1FBQUFBLElBQUk7SUFBQSxDQUFDO0FBQy9CLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWRpc25leHQvLi9wYWdlcy9hcGkvc2VhcmNoLmpzPzVkM2EiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgc2VhcmNoQ2FycyB9IGZyb20gXCIuLi8uLi9saWIvcmVkaXNcIjtcblxuLy9leHBvcnQgYXN5bmMgaGFuZGxlclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xuICAgIGNvbnN0IHF1ZXJ5PSByZXEucXVlcnkucTtcbiAgICBjb25zdCBjYXJzPSBhd2FpdCBzZWFyY2hDYXJzKHF1ZXJ5KTtcbiAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7Y2Fyc30pO1xufSJdLCJuYW1lcyI6WyJzZWFyY2hDYXJzIiwiaGFuZGxlciIsInJlcSIsInJlcyIsInF1ZXJ5IiwicSIsImNhcnMiLCJzdGF0dXMiLCJqc29uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/search.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/search.js"));
module.exports = __webpack_exports__;

})();