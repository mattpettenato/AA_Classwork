/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./frontend/follow_toggle.js":
/*!***********************************!*\
  !*** ./frontend/follow_toggle.js ***!
  \***********************************/
/***/ ((module) => {

class FollowToggle  {
  constructor(el) {
    this.el = $(el);
    this.userId = this.el.data("user-id");
    this.followState = this.el.data("initial-follow-state");
    this.render();
    this.el.on("click", this.handleClick.bind(this));
  }
  render() {
    if (this.followState){
      this.el.text('Unfollow!')
      this.el.data("initial-follow-state", false)
    } else {
      this.el.text('Follow!')
      this.el.data("initial-follow-state", true)
    }
  }

  handleClick(event) {
    event.preventDefault();
    let method 
    if (this.followState) {
      method = "DELETE";
    } else {
      method = "POST";
    }
    
    $.ajax({
      url: `/users/${this.userId}/follow`,
      method: method,
      dataType: "json"
    }).then((el)=> {
      if (this.followState) {
        this.followState = false
        // this.el.data("initial-follow-state", false)
      } else {
        this.followState = true
        // this.el.data("initial-follow-state", true)
      }
      this.render.call(this)
    })
  }




}

module.exports = FollowToggle;

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*****************************!*\
  !*** ./frontend/twitter.js ***!
  \*****************************/
const FollowToggle = __webpack_require__(/*! ./follow_toggle.js */ "./frontend/follow_toggle.js");

$(document).ready(function() {
  $('.follow-toggle').each( function() {
    let follow = new FollowToggle(this);

    console.log(follow);
  })
});




})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map