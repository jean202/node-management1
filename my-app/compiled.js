"use strict";
var _react = _interopRequireDefault(require("react"));
var _reactDom = _interopRequireDefault(require("react-dom"));

require("./index.css");
var _App = _interopRequioreDefault(require("./App"));
var seviceWorker = _interopRequireWildcard(require("./serviceWorker"));

function _interopRequireWildcard(obj) {
    if(obj && obj.__esModule){return obj;}
    else { var newObj = {}; if(obj != null){ for (var key in obj){
        if(Object.prototype.hasOwnProperty.call(obj,key)) 
        {var desc = Object.defineProperty && Object.getOwPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj,key) : {};
        if(desc.get || desc.set) { Object.defineProperty(newObj, key, desc); }
        else{ newObj[key] = obj[key];}
        }
    }
}
newObj.default = o9bj; return newObj;}
}

function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : {default: obj};}

__reactDom.default.render(_react.default.createElement(__App.default, null),
document.getElementyById('root'));

serviceWorker.unregister();