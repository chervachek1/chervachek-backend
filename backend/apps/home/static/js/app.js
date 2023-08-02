/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sass_app_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sass/app.sass */ \"./src/sass/app.sass\");\n\n\n/* Your JS Code goes here */\n$(document).ready(function () {\n  var scene = $('#scene');\n  new Parallax(scene.get(0));\n  function _classCallCheck(instance, Constructor) {\n    if (!(instance instanceof Constructor)) {\n      throw new TypeError(\"Cannot call a class as a function\");\n    }\n  }\n  var PI2 = 2 * Math.PI;\n  // amount is relative to screen size, this is the divider\n  // for the result (hight * width)\n  var AMOUNT_DIVIDER = 5000;\n  // the connect star field\n  var DIST_MAX = 100;\n  var CONNECT_RADIUS = 100;\n  // speed of rotating\n  var ROTATION = 0.0001;\n  var canvas = document.getElementById('stars');\n  canvas.width = canvas.offsetWidth;\n  canvas.height = canvas.offsetHeight;\n  var ctx = canvas.getContext('2d');\n  ctx.lineWidth = 0.4;\n  var bounds = {\n    top: -10,\n    left: -10,\n    right: canvas.width + 10,\n    bottom: canvas.height + 10\n  };\n  var center = {\n    x: Math.floor(canvas.width / 2),\n    y: Math.floor(canvas.height / 2)\n  };\n  var connectArea = {\n    destX: 0,\n    destY: 0,\n    x: center.x,\n    y: center.y\n  };\n\n  /*\n  the dots\n  */\n  var dots = [];\n  var Dot = function () {\n    function Dot() {\n      _classCallCheck(this, Dot);\n      this.x = Math.random() * canvas.width;\n      this.y = Math.random() * canvas.height;\n      this.radius = Math.random() * 1.2;\n    }\n    Dot.prototype.update = function update() {\n      if (this.y > bounds.bottom) this.y = bounds.top;else if (this.y < bounds.top) this.y = bounds.bottom;\n      this.x = Math.cos(ROTATION) * (this.x - center.x) - Math.sin(ROTATION) * (this.y - center.y) + center.x;\n      this.y = Math.sin(ROTATION) * (this.x - center.x) + Math.cos(ROTATION) * (this.y - center.y) + center.y;\n    };\n    Dot.prototype.draw = function draw() {\n      ctx.beginPath();\n      ctx.fillStyle = '#fff';\n      if (Math.random() < 0.99) ctx.arc(this.x, this.y, this.radius, 0, PI2, false);\n      ctx.fill();\n    };\n    return Dot;\n  }();\n  /*\n    and lets start\n  */\n\n  function resize() {\n    canvas.width = canvas.offsetWidth;\n    canvas.height = canvas.offsetHeight;\n    scene[0].style.width = window.innerWidth + 'px';\n    scene[0].style.height = window.innerHeight + 'px';\n    bounds.right = canvas.width - 1;\n    bounds.bottom = canvas.height - 1;\n    ctx.lineWidth = 0.4;\n    center = {\n      x: Math.floor(canvas.width / 2),\n      y: Math.floor(canvas.height / 2)\n    };\n    connectArea.destX = center.x;\n    connectArea.destY = center.y * 0.1;\n    dots.length = 0;\n    var amount = Math.floor(canvas.width * canvas.height / AMOUNT_DIVIDER);\n    for (var i = 0; i < amount; i++) {\n      dots.push(new Dot());\n    }\n  }\n\n  /*\n    funtctions\n  */\n\n  function updateConnectArea() {\n    var distX = connectArea.destX - connectArea.x;\n    if (distX > 5 || distX < 5) connectArea.x += Math.floor(distX / 20);\n    var distY = connectArea.destY - connectArea.y;\n    if (distX > 5 || distX < 5) connectArea.y += Math.floor(distY / 20);\n  }\n  function connectDots() {\n    for (var i = 0, dot1; dot1 = dots[i]; i++) {\n      for (var j = i + 1, dot2; dot2 = dots[j]; j++) {\n        var xDiff = dot1.x - dot2.x,\n          yDiff = dot1.y - dot2.y;\n        var xCoreDiff = dot1.x - connectArea.x,\n          yCoreDiff = dot1.y - connectArea.y;\n        if (xDiff < DIST_MAX && xDiff > -DIST_MAX && yDiff < DIST_MAX && yDiff > -DIST_MAX && xCoreDiff < CONNECT_RADIUS && xCoreDiff > -CONNECT_RADIUS && yCoreDiff < CONNECT_RADIUS && yCoreDiff > -CONNECT_RADIUS) {\n          ctx.beginPath();\n          ctx.strokeStyle = 'hsla(0,100%,100%,0.2)';\n          ctx.moveTo(dot1.x + 0.0, dot1.y + 0.0);\n          ctx.lineTo(dot2.x + 0.0, dot2.y + 0.0);\n          ctx.stroke();\n          ctx.closePath();\n        }\n      }\n    }\n  }\n  function animateDots() {\n    requestAnimationFrame(animateDots);\n    ctx.clearRect(0, 0, canvas.width, canvas.height);\n    updateConnectArea();\n    for (var i = 0, dot; dot = dots[i]; i++) {\n      dot.update();\n    }\n    connectDots();\n    for (var i = 0, dot; dot = dots[i]; i++) {\n      dot.draw();\n    }\n  }\n  document.body.addEventListener('mousemove', function (e) {\n    connectArea.destX = e.clientX || e.touches && e.touches[0].pageX;\n    connectArea.destY = e.clientY || e.touches && e.touches[0].pageY;\n  });\n  document.body.addEventListener('mouseleave', function (e) {\n    connectArea.destX = center.x;\n    connectArea.destY = center.y;\n  });\n  window.addEventListener('resize', resize);\n  resize();\n  animateDots();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFdBQVcsRUFBRTtJQUNmLEtBQUssSUFBSUwsQ0FBQyxHQUFHLENBQUMsRUFBRXFCLEdBQUcsRUFBRUEsR0FBRyxHQUFHekMsSUFBSSxDQUFDb0IsQ0FBQyxDQUFDLEVBQUVBLENBQUMsRUFBRSxFQUFFO01BQ3JDcUIsR0FBRyxDQUFDakMsSUFBSSxFQUFFO0lBQ2Q7RUFDSjtFQUVBN0MsUUFBUSxDQUFDK0UsSUFBSSxDQUFDQyxnQkFBZ0IsQ0FBQyxXQUFXLEVBQUUsVUFBVUMsQ0FBQyxFQUFFO0lBQ3JEL0MsV0FBVyxDQUFDQyxLQUFLLEdBQUc4QyxDQUFDLENBQUNDLE9BQU8sSUFBSUQsQ0FBQyxDQUFDRSxPQUFPLElBQUlGLENBQUMsQ0FBQ0UsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDQyxLQUFLO0lBQ2hFbEQsV0FBVyxDQUFDRSxLQUFLLEdBQUc2QyxDQUFDLENBQUNJLE9BQU8sSUFBSUosQ0FBQyxDQUFDRSxPQUFPLElBQUlGLENBQUMsQ0FBQ0UsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDRyxLQUFLO0VBQ3BFLENBQUMsQ0FBQztFQUVGdEYsUUFBUSxDQUFDK0UsSUFBSSxDQUFDQyxnQkFBZ0IsQ0FBQyxZQUFZLEVBQUUsVUFBVUMsQ0FBQyxFQUFFO0lBQ3REL0MsV0FBVyxDQUFDQyxLQUFLLEdBQUdMLE1BQU0sQ0FBQ0MsQ0FBQztJQUM1QkcsV0FBVyxDQUFDRSxLQUFLLEdBQUdOLE1BQU0sQ0FBQ0csQ0FBQztFQUNoQyxDQUFDLENBQUM7RUFFRm1CLE1BQU0sQ0FBQzRCLGdCQUFnQixDQUFDLFFBQVEsRUFBRTlCLE1BQU0sQ0FBQztFQUU1Q0EsTUFBTSxFQUFFO0VBQ1J5QixXQUFXLEVBQUU7QUFFZCxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hbGVub3J6ZS1mcm9udGVuZC8uL3NyYy9qcy9hcHAuanM/OTBlOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4uL3Nhc3MvYXBwLnNhc3MnO1xuXG4vKiBZb3VyIEpTIENvZGUgZ29lcyBoZXJlICovXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XG5cbiAgICB2YXIgc2NlbmUgPSAkKCcjc2NlbmUnKTtcbiAgICBuZXcgUGFyYWxsYXgoc2NlbmUuZ2V0KDApKTtcblxuICAgIGZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbiAgICB2YXIgUEkyID0gMiAqIE1hdGguUEk7XG4gICAgLy8gYW1vdW50IGlzIHJlbGF0aXZlIHRvIHNjcmVlbiBzaXplLCB0aGlzIGlzIHRoZSBkaXZpZGVyXG4gICAgLy8gZm9yIHRoZSByZXN1bHQgKGhpZ2h0ICogd2lkdGgpXG4gICAgdmFyIEFNT1VOVF9ESVZJREVSID0gNTAwMDtcbiAgICAvLyB0aGUgY29ubmVjdCBzdGFyIGZpZWxkXG4gICAgdmFyIERJU1RfTUFYID0gMTAwO1xuICAgIHZhciBDT05ORUNUX1JBRElVUyA9IDEwMDtcbiAgICAvLyBzcGVlZCBvZiByb3RhdGluZ1xuICAgIHZhciBST1RBVElPTiA9IDAuMDAwMTtcblxuICAgIHZhciBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RhcnMnKTtcbiAgICBjYW52YXMud2lkdGggPSBjYW52YXMub2Zmc2V0V2lkdGg7XG4gICAgY2FudmFzLmhlaWdodCA9IGNhbnZhcy5vZmZzZXRIZWlnaHQ7XG5cbiAgICB2YXIgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgY3R4LmxpbmVXaWR0aCA9IDAuNDtcblxuICAgIHZhciBib3VuZHMgPSB7XG4gICAgICAgIHRvcDogLTEwLFxuICAgICAgICBsZWZ0OiAtMTAsXG4gICAgICAgIHJpZ2h0OiBjYW52YXMud2lkdGggKyAxMCxcbiAgICAgICAgYm90dG9tOiBjYW52YXMuaGVpZ2h0ICsgMTBcbiAgICB9O1xuXG4gICAgdmFyIGNlbnRlciA9IHtcbiAgICAgICAgeDogTWF0aC5mbG9vcihjYW52YXMud2lkdGggLyAyKSxcbiAgICAgICAgeTogTWF0aC5mbG9vcihjYW52YXMuaGVpZ2h0IC8gMilcbiAgICB9O1xuXG4gICAgdmFyIGNvbm5lY3RBcmVhID0ge1xuICAgICAgICBkZXN0WDogMCxcbiAgICAgICAgZGVzdFk6IDAsXG4gICAgICAgIHg6IGNlbnRlci54LFxuICAgICAgICB5OiBjZW50ZXIueVxuICAgIH07XG5cbiAgICAvKlxuICAgIHRoZSBkb3RzXG4gICAgKi9cbiAgICB2YXIgZG90cyA9IFtdO1xuXG4gICAgdmFyIERvdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZnVuY3Rpb24gRG90KCkge1xuICAgICAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIERvdCk7XG5cbiAgICAgICAgICAgIHRoaXMueCA9IE1hdGgucmFuZG9tKCkgKiBjYW52YXMud2lkdGg7XG4gICAgICAgICAgICB0aGlzLnkgPSBNYXRoLnJhbmRvbSgpICogY2FudmFzLmhlaWdodDtcbiAgICAgICAgICAgIHRoaXMucmFkaXVzID0gTWF0aC5yYW5kb20oKSAqIDEuMjtcbiAgICAgICAgfVxuXG4gICAgICAgIERvdC5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24gdXBkYXRlKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMueSA+IGJvdW5kcy5ib3R0b20pIHRoaXMueSA9IGJvdW5kcy50b3A7IGVsc2UgaWYgKHRoaXMueSA8IGJvdW5kcy50b3ApIHRoaXMueSA9IGJvdW5kcy5ib3R0b207XG4gICAgICAgICAgICB0aGlzLnggPSBNYXRoLmNvcyhST1RBVElPTikgKiAodGhpcy54IC0gY2VudGVyLngpIC0gTWF0aC5zaW4oUk9UQVRJT04pICogKHRoaXMueSAtIGNlbnRlci55KSArIGNlbnRlci54O1xuICAgICAgICAgICAgdGhpcy55ID0gTWF0aC5zaW4oUk9UQVRJT04pICogKHRoaXMueCAtIGNlbnRlci54KSArIE1hdGguY29zKFJPVEFUSU9OKSAqICh0aGlzLnkgLSBjZW50ZXIueSkgKyBjZW50ZXIueTtcbiAgICAgICAgfTtcblxuICAgICAgICBEb3QucHJvdG90eXBlLmRyYXcgPSBmdW5jdGlvbiBkcmF3KCkge1xuICAgICAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9ICcjZmZmJztcbiAgICAgICAgICAgIGlmIChNYXRoLnJhbmRvbSgpIDwgMC45OSkgY3R4LmFyYyh0aGlzLngsIHRoaXMueSwgdGhpcy5yYWRpdXMsIDAsIFBJMiwgZmFsc2UpO1xuICAgICAgICAgICAgY3R4LmZpbGwoKTtcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gRG90O1xuICAgIH0oKTtcbiAgICAvKlxuICAgICAgYW5kIGxldHMgc3RhcnRcbiAgICAqL1xuXG4gICAgZnVuY3Rpb24gcmVzaXplKCkge1xuICAgICAgICBjYW52YXMud2lkdGggPSBjYW52YXMub2Zmc2V0V2lkdGg7XG4gICAgICAgIGNhbnZhcy5oZWlnaHQgPSBjYW52YXMub2Zmc2V0SGVpZ2h0O1xuXG4gICAgICAgIHNjZW5lWzBdLnN0eWxlLndpZHRoID0gd2luZG93LmlubmVyV2lkdGggKyAncHgnO1xuICAgICAgICBzY2VuZVswXS5zdHlsZS5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQgKyAncHgnO1xuXG4gICAgICAgIGJvdW5kcy5yaWdodCA9IGNhbnZhcy53aWR0aCAtIDE7XG4gICAgICAgIGJvdW5kcy5ib3R0b20gPSBjYW52YXMuaGVpZ2h0IC0gMTtcblxuICAgICAgICBjdHgubGluZVdpZHRoID0gMC40O1xuXG4gICAgICAgIGNlbnRlciA9IHtcbiAgICAgICAgICAgIHg6IE1hdGguZmxvb3IoY2FudmFzLndpZHRoIC8gMiksXG4gICAgICAgICAgICB5OiBNYXRoLmZsb29yKGNhbnZhcy5oZWlnaHQgLyAyKVxuICAgICAgICB9O1xuXG4gICAgICAgIGNvbm5lY3RBcmVhLmRlc3RYID0gY2VudGVyLng7XG4gICAgICAgIGNvbm5lY3RBcmVhLmRlc3RZID0gY2VudGVyLnkgKiAwLjE7XG5cbiAgICAgICAgZG90cy5sZW5ndGggPSAwO1xuXG4gICAgICAgIHZhciBhbW91bnQgPSBNYXRoLmZsb29yKGNhbnZhcy53aWR0aCAqIGNhbnZhcy5oZWlnaHQgLyBBTU9VTlRfRElWSURFUik7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYW1vdW50OyBpKyspIHtcbiAgICAgICAgICAgIGRvdHMucHVzaChuZXcgRG90KCkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLypcbiAgICAgIGZ1bnRjdGlvbnNcbiAgICAqL1xuXG4gICAgZnVuY3Rpb24gdXBkYXRlQ29ubmVjdEFyZWEoKSB7XG4gICAgICAgIHZhciBkaXN0WCA9IGNvbm5lY3RBcmVhLmRlc3RYIC0gY29ubmVjdEFyZWEueDtcbiAgICAgICAgaWYgKGRpc3RYID4gNSB8fCBkaXN0WCA8IDUpIGNvbm5lY3RBcmVhLnggKz0gTWF0aC5mbG9vcihkaXN0WCAvIDIwKTtcbiAgICAgICAgdmFyIGRpc3RZID0gY29ubmVjdEFyZWEuZGVzdFkgLSBjb25uZWN0QXJlYS55O1xuICAgICAgICBpZiAoZGlzdFggPiA1IHx8IGRpc3RYIDwgNSkgY29ubmVjdEFyZWEueSArPSBNYXRoLmZsb29yKGRpc3RZIC8gMjApO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNvbm5lY3REb3RzKCkge1xuICAgICAgICBmb3IgKHZhciBpID0gMCwgZG90MTsgZG90MSA9IGRvdHNbaV07IGkrKykge1xuICAgICAgICAgICAgZm9yICh2YXIgaiA9IGkgKyAxLCBkb3QyOyBkb3QyID0gZG90c1tqXTsgaisrKSB7XG5cbiAgICAgICAgICAgICAgICB2YXIgeERpZmYgPSBkb3QxLnggLSBkb3QyLngsXG4gICAgICAgICAgICAgICAgICAgIHlEaWZmID0gZG90MS55IC0gZG90Mi55O1xuICAgICAgICAgICAgICAgIHZhciB4Q29yZURpZmYgPSBkb3QxLnggLSBjb25uZWN0QXJlYS54LFxuICAgICAgICAgICAgICAgICAgICB5Q29yZURpZmYgPSBkb3QxLnkgLSBjb25uZWN0QXJlYS55O1xuXG4gICAgICAgICAgICAgICAgaWYgKHhEaWZmIDwgRElTVF9NQVggJiYgeERpZmYgPiAtRElTVF9NQVggJiYgeURpZmYgPCBESVNUX01BWCAmJiB5RGlmZiA+IC1ESVNUX01BWCAmJiB4Q29yZURpZmYgPCBDT05ORUNUX1JBRElVUyAmJiB4Q29yZURpZmYgPiAtQ09OTkVDVF9SQURJVVMgJiYgeUNvcmVEaWZmIDwgQ09OTkVDVF9SQURJVVMgJiYgeUNvcmVEaWZmID4gLUNPTk5FQ1RfUkFESVVTKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSAnaHNsYSgwLDEwMCUsMTAwJSwwLjIpJztcbiAgICAgICAgICAgICAgICAgICAgY3R4Lm1vdmVUbyhkb3QxLnggKyAwLjAsIGRvdDEueSArIDAuMCk7XG4gICAgICAgICAgICAgICAgICAgIGN0eC5saW5lVG8oZG90Mi54ICsgMC4wLCBkb3QyLnkgKyAwLjApO1xuICAgICAgICAgICAgICAgICAgICBjdHguc3Ryb2tlKCk7XG4gICAgICAgICAgICAgICAgICAgIGN0eC5jbG9zZVBhdGgoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhbmltYXRlRG90cygpIHtcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGVEb3RzKTtcblxuICAgICAgICBjdHguY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG5cbiAgICAgICAgdXBkYXRlQ29ubmVjdEFyZWEoKTtcblxuICAgICAgICBmb3IgKHZhciBpID0gMCwgZG90OyBkb3QgPSBkb3RzW2ldOyBpKyspIHtcbiAgICAgICAgICAgIGRvdC51cGRhdGUoKTtcbiAgICAgICAgfSBjb25uZWN0RG90cygpO1xuICAgICAgICBmb3IgKHZhciBpID0gMCwgZG90OyBkb3QgPSBkb3RzW2ldOyBpKyspIHtcbiAgICAgICAgICAgIGRvdC5kcmF3KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBkb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGNvbm5lY3RBcmVhLmRlc3RYID0gZS5jbGllbnRYIHx8IGUudG91Y2hlcyAmJiBlLnRvdWNoZXNbMF0ucGFnZVg7XG4gICAgICAgIGNvbm5lY3RBcmVhLmRlc3RZID0gZS5jbGllbnRZIHx8IGUudG91Y2hlcyAmJiBlLnRvdWNoZXNbMF0ucGFnZVk7XG4gICAgfSk7XG5cbiAgICBkb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBjb25uZWN0QXJlYS5kZXN0WCA9IGNlbnRlci54O1xuICAgICAgICBjb25uZWN0QXJlYS5kZXN0WSA9IGNlbnRlci55O1xuICAgIH0pO1xuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHJlc2l6ZSk7XG5cblx0cmVzaXplKCk7XG5cdGFuaW1hdGVEb3RzKCk7XG5cbn0pO1xuIl0sIm5hbWVzIjpbIiQiLCJkb2N1bWVudCIsInJlYWR5Iiwic2NlbmUiLCJQYXJhbGxheCIsImdldCIsIl9jbGFzc0NhbGxDaGVjayIsImluc3RhbmNlIiwiQ29uc3RydWN0b3IiLCJUeXBlRXJyb3IiLCJQSTIiLCJNYXRoIiwiUEkiLCJBTU9VTlRfRElWSURFUiIsIkRJU1RfTUFYIiwiQ09OTkVDVF9SQURJVVMiLCJST1RBVElPTiIsImNhbnZhcyIsImdldEVsZW1lbnRCeUlkIiwid2lkdGgiLCJvZmZzZXRXaWR0aCIsImhlaWdodCIsIm9mZnNldEhlaWdodCIsImN0eCIsImdldENvbnRleHQiLCJsaW5lV2lkdGgiLCJib3VuZHMiLCJ0b3AiLCJsZWZ0IiwicmlnaHQiLCJib3R0b20iLCJjZW50ZXIiLCJ4IiwiZmxvb3IiLCJ5IiwiY29ubmVjdEFyZWEiLCJkZXN0WCIsImRlc3RZIiwiZG90cyIsIkRvdCIsInJhbmRvbSIsInJhZGl1cyIsInByb3RvdHlwZSIsInVwZGF0ZSIsImNvcyIsInNpbiIsImRyYXciLCJiZWdpblBhdGgiLCJmaWxsU3R5bGUiLCJhcmMiLCJmaWxsIiwicmVzaXplIiwic3R5bGUiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiaW5uZXJIZWlnaHQiLCJsZW5ndGgiLCJhbW91bnQiLCJpIiwicHVzaCIsInVwZGF0ZUNvbm5lY3RBcmVhIiwiZGlzdFgiLCJkaXN0WSIsImNvbm5lY3REb3RzIiwiZG90MSIsImoiLCJkb3QyIiwieERpZmYiLCJ5RGlmZiIsInhDb3JlRGlmZiIsInlDb3JlRGlmZiIsInN0cm9rZVN0eWxlIiwibW92ZVRvIiwibGluZVRvIiwic3Ryb2tlIiwiY2xvc2VQYXRoIiwiYW5pbWF0ZURvdHMiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJjbGVhclJlY3QiLCJkb3QiLCJib2R5IiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJjbGllbnRYIiwidG91Y2hlcyIsInBhZ2VYIiwiY2xpZW50WSIsInBhZ2VZIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/js/app.js\n");

/***/ }),

/***/ "./src/sass/app.sass":
/*!***************************!*\
  !*** ./src/sass/app.sass ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2Fzcy9hcHAuc2Fzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hbGVub3J6ZS1mcm9udGVuZC8uL3NyYy9zYXNzL2FwcC5zYXNzPzRiZWIiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/sass/app.sass\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/app.js");
/******/ 	
/******/ })()
;