!function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=3)}([function(e,t,n){"use strict";var r=n(2),o=function(e){return e&&e.__esModule?e:{default:e}}(r);window.document.addEventListener("DOMContentLoaded",function(){(0,o.default)()})},function(e,t,n){"use strict";var r=n(12);(function(e){return e&&e.__esModule?e:{default:e}})(r).default.entwine("ss",function(e){e(".cms-tabset-nav-primary .ui-tabs-anchor").entwine({toggleActionsBar:function(){var t=e(".cms-content-actions");"Root_History"===this.parent("li").attr("aria-controls")&&(e(".elemental-block__history").length>0||e(".history-viewer__container").length>0)?t.hide():t.show()},onmatch:function(){this._super(),this.parent("li").hasClass("ui-state-active")&&this.toggleActionsBar()},onclick:function(){this._super(),this.toggleActionsBar()}})})},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(7),i=r(o),a=n(5),l=r(a),s=n(4),u=r(s);t.default=function(){i.default.transform("elemental-fieldgroup",function(e){e.component("FieldGroup.HistoryViewer.VersionDetail",u.default,"HistoricElement")},{after:"field-holders"}),i.default.transform("elements-history",function(e){e.component("HistoryViewer.Form_ItemEditForm",l.default,"ElementHistoryViewer")})}},function(e,t,n){"use strict";n(1),n(0)},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=function e(t,n,r){null===t&&(t=Function.prototype);var o=Object.getOwnPropertyDescriptor(t,n);if(void 0===o){var i=Object.getPrototypeOf(t);return null===i?void 0:e(i,n,r)}if("value"in o)return o.value;var a=o.get;return void 0!==a?a.call(r):void 0},u=n(8),c=r(u),f=n(11),d=r(f),p=n(10),m=r(p),h=function(e){return function(e){function t(){return o(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),l(t,[{key:"getClassName",value:function(){var e=[s(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"getClassName",this).call(this)];return this.props.data.ElementID&&e.unshift("elemental-area__element--historic-inner"),(0,m.default)(e)}},{key:"render",value:function(){var e=this.getLegend(),n=this.props.data.tag||"div",r=this.getClassName(),o=this.props.data;return o.ElementID?c.default.createElement(n,{className:r},e,c.default.createElement("div",{className:"elemental-preview elemental-preview--historic"},o.ElementEditLink&&c.default.createElement("a",{className:"elemental-preview__link",href:o.ElementEditLink},d.default._t("HistoricElementView.BLOCK_HISTORY","View block"),c.default.createElement("i",{className:"font-icon-angle-right"})),c.default.createElement("div",{className:"elemental-preview__icon"},c.default.createElement("i",{className:o.ElementIcon})),c.default.createElement("div",{className:"elemental-preview__detail"},c.default.createElement("h3",null,o.ElementTitle," ",c.default.createElement("small",null,o.ElementType)))),this.props.children):s(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"render",this).call(this)}}]),t}(e)};t.default=h},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.config=t.query=void 0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=function(e,t){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\nquery ReadHistoryViewerBlock ($block_id: ID!, $limit: Int!, $offset: Int!) {\n  readOneBlock(\n    Versioning: {\n      Mode: LATEST\n    },\n    ID: $block_id\n  ) {\n    ID\n    Versions (limit: $limit, offset: $offset) {\n      pageInfo {\n        totalCount\n      }\n      edges {\n        node {\n          Version\n          Author {\n            FirstName\n            Surname\n          }\n          Publisher {\n            FirstName\n            Surname\n          }\n          Published\n          LiveVersion\n          LastEdited\n        }\n      }\n    }\n  }\n}\n"],["\nquery ReadHistoryViewerBlock ($block_id: ID!, $limit: Int!, $offset: Int!) {\n  readOneBlock(\n    Versioning: {\n      Mode: LATEST\n    },\n    ID: $block_id\n  ) {\n    ID\n    Versions (limit: $limit, offset: $offset) {\n      pageInfo {\n        totalCount\n      }\n      edges {\n        node {\n          Version\n          Author {\n            FirstName\n            Surname\n          }\n          Publisher {\n            FirstName\n            Surname\n          }\n          Published\n          LiveVersion\n          LastEdited\n        }\n      }\n    }\n  }\n}\n"]),i=n(9),a=n(6),l=function(e){return e&&e.__esModule?e:{default:e}}(a),s=(0,l.default)(o),u={options:function(e){var t=e.recordId,n=e.limit;return{variables:{limit:n,offset:((e.page||1)-1)*n,block_id:t}}},props:function(e){var t=e.data,n=t.error,o=t.refetch,i=t.readOneBlock,a=t.loading,l=e.ownProps,s=l.actions,u=void 0===s?{versions:{}}:s,c=l.limit,f=l.recordId,d=i||null,p=n&&n.graphQLErrors&&n.graphQLErrors.map(function(e){return e.message});return{loading:a||!d,versions:d,graphQLErrors:p,actions:r({},u,{versions:r({},d,{goToPage:function(e){o({offset:((e||1)-1)*c,limit:c,block_id:f})}})})}}};t.query=s,t.config=u,t.default=(0,i.graphql)(s,u)},function(e,t){e.exports=GraphQLTag},function(e,t){e.exports=Injector},function(e,t){e.exports=React},function(e,t){e.exports=ReactApollo},function(e,t){e.exports=classnames},function(e,t){e.exports=i18n},function(e,t){e.exports=jQuery}]);