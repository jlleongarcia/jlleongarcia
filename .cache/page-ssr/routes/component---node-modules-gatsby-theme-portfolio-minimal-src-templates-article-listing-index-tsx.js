"use strict";
exports.id = 226;
exports.ids = [226];
exports.modules = {

/***/ 3972:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  T: () => (/* binding */ ArticleCard),
  w: () => (/* binding */ ArticleCardSkeleton)
});

// EXTERNAL MODULE: external "/home/jalcocert/JAlcocerT/node_modules/react/index.js"
var index_js_ = __webpack_require__(752);
var index_js_default = /*#__PURE__*/__webpack_require__.n(index_js_);
// EXTERNAL MODULE: ./.cache/gatsby-browser-entry.js + 11 modules
var gatsby_browser_entry = __webpack_require__(7076);
// EXTERNAL MODULE: ./node_modules/gatsby-plugin-image/dist/gatsby-image.module.js
var gatsby_image_module = __webpack_require__(3040);
;// CONCATENATED MODULE: ./node_modules/tiny-skeleton-loader-react/dist/index.es.js


/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = ".styles_skeleton__tyzRD{background:#eff1f6;display:inline-block;line-height:1;overflow:hidden;position:relative}.styles_skeleton__tyzRD:before{animation:styles_skeleton-progress__aezri 1.2s ease-in-out infinite;background-image:linear-gradient(90deg,hsla(0,0%,100%,0),hsla(0,0%,100%,.6),hsla(0,0%,100%,0));content:\"\";height:100%;left:-500px;position:absolute;top:0;width:500px}@keyframes styles_skeleton-progress__aezri{0%{left:-500px}to{left:100%}}";
var css = {"skeleton":"styles_skeleton__tyzRD","skeleton-progress":"styles_skeleton-progress__aezri"};
styleInject(css_248z);

function SkeletonLoader(_a) {
    var _b = _a.width, width = _b === void 0 ? "100%" : _b, _c = _a.height, height = _c === void 0 ? "1em" : _c, _d = _a.background, background = _d === void 0 ? "#E9ECEF" : _d, _e = _a.radius, radius = _e === void 0 ? "4px" : _e, _f = _a.circle, circle = _f === void 0 ? false : _f, _g = _a.block, block = _g === void 0 ? true : _g, _h = _a.style, style = _h === void 0 ? {} : _h, _j = _a.as, Tag = _j === void 0 ? "div" : _j;
    return (index_js_default().createElement(Tag, { className: css.skeleton, style: __assign({ width: width, height: height, background: background, borderRadius: circle ? "50%" : radius, display: block ? "block" : "inline-block" }, style) }, "\u200C"));
}


//# sourceMappingURL=index.es.js.map

// EXTERNAL MODULE: ./node_modules/gatsby-theme-portfolio-minimal/src/context/index.tsx
var context = __webpack_require__(5400);
;// CONCATENATED MODULE: ./node_modules/gatsby-theme-portfolio-minimal/src/components/ArticleCard/style.module.css
// Exports
var Card = "style-module--Card--c661d";
var Banner = "style-module--Banner--d401d";
var ImageWrapper = "style-module--ImageWrapper--50300";
var Image = "style-module--Image--43f10";
var DescriptionWrapper = "style-module--DescriptionWrapper--5f867";
var Category = "style-module--Category--eeb92";
var Title = "style-module--Title--de70d";
var Details = "style-module--Details--5ba4b";
var ReadingTime = "style-module--ReadingTime--a0392";

;// CONCATENATED MODULE: ./node_modules/gatsby-theme-portfolio-minimal/src/components/ArticleCard/index.tsx
function ArticleCard(props){const{globalState}=(0,context/* useGlobalState */.j1)();const darkModeEnabled=globalState.theme===context/* Theme */.Q2.Dark;// Needed to differentiate between external and internal links (whether or not we use Gatsby Link)
const absoluteUrl=props.data.link.indexOf('://')>0||props.data.link.indexOf('//')===0;const articleCard=/*#__PURE__*/index_js_default().createElement("article",{className:Card,style:darkModeEnabled?{border:'0.125rem solid var(--primary-color)'}:undefined},props.showBanner&&/*#__PURE__*/index_js_default().createElement("div",{className:Banner},props.data.image&&props.data.image.src&&/*#__PURE__*/index_js_default().createElement(gatsby_image_module/* GatsbyImage */.HN,{className:ImageWrapper,imgClassName:Image,objectFit:props.data.image.objectFit||'cover',image:props.data.image.src.childImageSharp.gatsbyImageData,alt:props.data.image.alt||props.data.title})),/*#__PURE__*/index_js_default().createElement("div",{className:DescriptionWrapper},/*#__PURE__*/index_js_default().createElement("span",{className:Category},/*#__PURE__*/index_js_default().createElement("u",null,props.data.category)),/*#__PURE__*/index_js_default().createElement("h4",{className:Title},props.data.title),/*#__PURE__*/index_js_default().createElement("div",{className:Details},formatDate(props.data.publishedAt),props.data.readingTime&&/*#__PURE__*/index_js_default().createElement("span",{className:ReadingTime},props.data.readingTime))));return absoluteUrl?/*#__PURE__*/index_js_default().createElement("a",{href:props.data.link,target:"_blank",rel:"noopener noreferrer",title:props.data.title},articleCard):/*#__PURE__*/index_js_default().createElement(gatsby_browser_entry.Link,{to:props.data.link,title:props.data.title},articleCard);}function ArticleCardSkeleton(){const{globalState}=(0,context/* useGlobalState */.j1)();const darkModeEnabled=globalState.theme===context/* Theme */.Q2.Dark;return/*#__PURE__*/index_js_default().createElement("div",{className:Card,style:darkModeEnabled?{border:'0.125rem solid var(--primary-color)'}:undefined},/*#__PURE__*/index_js_default().createElement("div",{className:DescriptionWrapper},/*#__PURE__*/index_js_default().createElement(SkeletonLoader,{style:{height:'1.5rem',marginBottom:'.5rem',background:'var(--tertiary-color)'}}),/*#__PURE__*/index_js_default().createElement(SkeletonLoader,{style:{height:'4rem',background:'var(--tertiary-color)'}}),/*#__PURE__*/index_js_default().createElement(SkeletonLoader,{style:{height:'.75rem',width:'50%',marginTop:'.5rem',background:'var(--tertiary-color)'}})));}function formatDate(date){const months=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];return`${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;}

/***/ }),

/***/ 3406:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  z: () => (/* binding */ Button_Button),
  L: () => (/* binding */ ButtonType)
});

// EXTERNAL MODULE: external "/home/jalcocert/JAlcocerT/node_modules/react/index.js"
var index_js_ = __webpack_require__(752);
var index_js_default = /*#__PURE__*/__webpack_require__.n(index_js_);
// EXTERNAL MODULE: ./.cache/gatsby-browser-entry.js + 11 modules
var gatsby_browser_entry = __webpack_require__(7076);
;// CONCATENATED MODULE: ./node_modules/gatsby-theme-portfolio-minimal/src/components/Button/style.module.css
// Exports
var Button = "style-module--Button--82b1f";

;// CONCATENATED MODULE: ./node_modules/gatsby-theme-portfolio-minimal/src/components/Button/index.tsx
let ButtonType=/*#__PURE__*/function(ButtonType){ButtonType["BUTTON"]="button";ButtonType["SUBMIT"]="submit";ButtonType["LINK"]="link";return ButtonType;}({});function Button_Button(props){if(props.type===ButtonType.LINK){if(!props.url){throw new Error(`Button should be a ${props.type} but no URL is given!`);}else{if(props.externalLink){return/*#__PURE__*/index_js_default().createElement("a",{id:props.id,className:Button,href:props.url,target:"_blank",rel:"noopener noreferrer","aria-label":"External Link"},props.label);}else{return/*#__PURE__*/index_js_default().createElement(gatsby_browser_entry.Link,{id:props.id,to:props.url,className:Button},props.label);}}}else if(props.type===ButtonType.BUTTON||props.type===ButtonType.SUBMIT){if(!props.onClickHandler){throw new Error(`Button should be a ${props.type} but no onClickHandler is given!`);}return/*#__PURE__*/index_js_default().createElement("button",{id:props.id,className:Button,type:props.type,onClick:props.onClickHandler},props.label);}else{throw new Error(`Unknown button type specified.`);}}

/***/ }),

/***/ 4443:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  $: () => (/* binding */ Section_Section)
});

// EXTERNAL MODULE: external "/home/jalcocert/JAlcocerT/node_modules/react/index.js"
var index_js_ = __webpack_require__(752);
var index_js_default = /*#__PURE__*/__webpack_require__.n(index_js_);
;// CONCATENATED MODULE: ./node_modules/gatsby-theme-portfolio-minimal/src/components/Section/style.module.css
// Exports
var Section = "style-module--Section--1d871";
var Heading = "style-module--Heading--2c002";
var ContentWrapper  = "style-module--ContentWrapper --36dde";

;// CONCATENATED MODULE: ./node_modules/gatsby-theme-portfolio-minimal/src/components/Section/index.tsx
function Section_Section(props){let classList;if(props.additionalClasses){classList=props.additionalClasses.concat(ContentWrapper).join(' ');}else{classList=ContentWrapper;}return/*#__PURE__*/index_js_default().createElement("section",{id:props.anchor,className:Section},/*#__PURE__*/index_js_default().createElement("div",{className:classList},props.heading&&/*#__PURE__*/index_js_default().createElement("h3",{className:Heading},props.heading),props.children));}

/***/ }),

/***/ 5980:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  i: () => (/* binding */ Slider)
});

// EXTERNAL MODULE: external "/home/jalcocert/JAlcocerT/node_modules/react/index.js"
var index_js_ = __webpack_require__(752);
var index_js_default = /*#__PURE__*/__webpack_require__.n(index_js_);
;// CONCATENATED MODULE: ./node_modules/gatsby-theme-portfolio-minimal/src/components/Slider/style.module.css
// Exports
var SlideContainer = "style-module--SlideContainer--60bf2";

;// CONCATENATED MODULE: ./node_modules/gatsby-theme-portfolio-minimal/src/components/Slider/index.tsx
function Slider(props){let classList;if(props.additionalClasses){classList=props.additionalClasses.concat(SlideContainer).join(' ');}else{classList=SlideContainer;}return/*#__PURE__*/index_js_default().createElement("div",{className:classList,style:props.style},props.children);}

/***/ }),

/***/ 1836:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ ArticleListingTemplate)
});

// EXTERNAL MODULE: external "/home/jalcocert/JAlcocerT/node_modules/react/index.js"
var index_js_ = __webpack_require__(752);
var index_js_default = /*#__PURE__*/__webpack_require__.n(index_js_);
// EXTERNAL MODULE: ./node_modules/gatsby-theme-portfolio-minimal/src/components/Page/index.tsx + 15 modules
var Page = __webpack_require__(1665);
// EXTERNAL MODULE: ./node_modules/gatsby-theme-portfolio-minimal/src/components/Section/index.tsx + 1 modules
var Section = __webpack_require__(4443);
// EXTERNAL MODULE: ./node_modules/gatsby-theme-portfolio-minimal/src/components/Seo/index.tsx
var Seo = __webpack_require__(533);
// EXTERNAL MODULE: ./node_modules/gatsby-theme-portfolio-minimal/src/components/Slider/index.tsx + 1 modules
var Slider = __webpack_require__(5980);
// EXTERNAL MODULE: ./node_modules/gatsby-theme-portfolio-minimal/src/components/ArticleCard/index.tsx + 2 modules
var ArticleCard = __webpack_require__(3972);
// EXTERNAL MODULE: ./node_modules/gatsby-theme-portfolio-minimal/src/components/Button/index.tsx + 1 modules
var Button = __webpack_require__(3406);
;// CONCATENATED MODULE: ./node_modules/gatsby-theme-portfolio-minimal/src/templates/ArticleListing/style.module.css
// Exports
var Listing = "style-module--Listing--52eca";
var Filter = "style-module--Filter--31377";
var Options = "style-module--Options--3515b";
var Option = "style-module--Option--83bb9";
var Selected = "style-module--Selected--f3165";
var LoadMore = "style-module--LoadMore--8b4c0";

// EXTERNAL MODULE: ./node_modules/gatsby-theme-portfolio-minimal/src/utils/pluralize.ts
var pluralize = __webpack_require__(1643);
;// CONCATENATED MODULE: ./node_modules/gatsby-theme-portfolio-minimal/src/templates/ArticleListing/index.tsx
function ArticleListingTemplate(props){var _pluralize;const ARTICLES_PER_PAGE=9;const articles=props.pageContext.articles;const[filterOptions,setFilterOptions]=index_js_default().useState(extractFilterOptions(articles));const[shownArticlesNumber,setShownArticlesNumber]=index_js_default().useState(ARTICLES_PER_PAGE);function handleFilterOptionClick(optionLabel){const updatedFilterOptions=[...filterOptions];const selectedOptionIndex=updatedFilterOptions.map(o=>o.label).indexOf(optionLabel);updatedFilterOptions[selectedOptionIndex].selected=!updatedFilterOptions[selectedOptionIndex].selected;setFilterOptions(updatedFilterOptions);}function handleLoadMoreButtonClick(articlesNumber,selectedArticlesNumber){const incrementedArticleNumber=shownArticlesNumber+3;if(selectedArticlesNumber&&selectedArticlesNumber>=incrementedArticleNumber){setShownArticlesNumber(incrementedArticleNumber);}else if(!selectedArticlesNumber&&articlesNumber>=incrementedArticleNumber){setShownArticlesNumber(incrementedArticleNumber);}}// Check if at least one filter option is selected. If so, create an array of all article ids that
// are selected based on the current filter option selection. We use this later on to easily check
// which articles to show.
let selectedArticleIds=[];const filterSelected=filterOptions.map(o=>o.selected).indexOf(true)!==-1;if(filterSelected){selectedArticleIds=filterOptions.filter(option=>option.selected)// Filter only for selected options
.map(option=>option.relatedArticleIds)// Create an array of article ids arrays
.flat(1)// Flatten the array to a string[]
.filter((id,index,arr)=>arr.indexOf(id)===index);// Remove duplicate article ids
}const entities=(_pluralize=(0,pluralize/* pluralize */._)(props.pageContext.entityName))!==null&&_pluralize!==void 0?_pluralize:'Articles';return/*#__PURE__*/index_js_default().createElement((index_js_default()).Fragment,null,/*#__PURE__*/index_js_default().createElement(Seo/* Seo */.p,{title:`All ${entities}`,useTitleTemplate:true}),/*#__PURE__*/index_js_default().createElement(Page/* Page */.T,null,/*#__PURE__*/index_js_default().createElement(Section/* Section */.$,{anchor:"articleListing",heading:entities},/*#__PURE__*/index_js_default().createElement("div",{className:Filter},"Select categories to filter ",entities.toLocaleLowerCase(),/*#__PURE__*/index_js_default().createElement(Slider/* Slider */.i,{additionalClasses:[Options]},filterOptions.map((option,key)=>{return/*#__PURE__*/index_js_default().createElement("div",{key:key,role:"button",onClick:()=>handleFilterOptionClick(option.label),className:[Option,option.selected===true?Selected:null].join(' ')},option.label," (",option.relatedArticleIds.length,")");}))),/*#__PURE__*/index_js_default().createElement("div",{className:Listing},articles.filter(article=>!filterSelected||selectedArticleIds.includes(article.id)).slice(0,shownArticlesNumber).map((article,key)=>{return/*#__PURE__*/index_js_default().createElement(ArticleCard/* ArticleCard */.T,{key:key,showBanner:true,data:{image:article.banner,title:article.title,category:article.categories.join(' / '),publishedAt:new Date(article.date.replace(/-/g,'/')),link:article.slug,readingTime:article.readingTime.text}});})),filterSelected&&selectedArticleIds.length>shownArticlesNumber||!filterSelected&&articles.length>shownArticlesNumber?/*#__PURE__*/index_js_default().createElement("div",{className:LoadMore},/*#__PURE__*/index_js_default().createElement(Button/* Button */.z,{type:Button/* ButtonType */.L.BUTTON,label:"Load More",onClickHandler:()=>handleLoadMoreButtonClick(articles.length,filterSelected?selectedArticleIds.length:undefined)})):null)));}// Helper function to calculate a sorted array of filter options based on the given articles
// We use the helper function before we initialize the state so that it can happen on the server.
function extractFilterOptions(articles){const filterOptions=[];const categoryList=[];articles.forEach(article=>{article.categories.forEach(category=>{if(!categoryList.includes(category)){filterOptions.push({label:category,selected:false,relatedArticleIds:[article.id]});categoryList.push(category);}else{const optionIndex=filterOptions.map(o=>o.label).indexOf(category);filterOptions[optionIndex].relatedArticleIds.push(article.id);}});});return filterOptions.sort((a,b)=>a.relatedArticleIds.length>b.relatedArticleIds.length?-1:1);}

/***/ }),

/***/ 1643:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _: () => (/* binding */ pluralize)
/* harmony export */ });
/**
 * Returns the plural of an English word.
 *
 * @export
 * @param {string} word
 * @param {number} [amount]
 * @returns {string}
 */function pluralize(word,amount){if(!word)return undefined;if(amount!==undefined&&amount===1){return word;}const plural={'(quiz)$':'$1zes','^(ox)$':'$1en','([m|l])ouse$':'$1ice','(matr|vert|ind)ix|ex$':'$1ices','(x|ch|ss|sh)$':'$1es','([^aeiouy]|qu)y$':'$1ies','(hive)$':'$1s','(?:([^f])fe|([lr])f)$':'$1$2ves','(shea|lea|loa|thie)f$':'$1ves',sis$:'ses','([ti])um$':'$1a','(tomat|potat|ech|her|vet)o$':'$1oes','(bu)s$':'$1ses','(alias)$':'$1es','(octop)us$':'$1i','(ax|test)is$':'$1es','(us)$':'$1es','([^s]+)$':'$1s'};const irregular={move:'moves',foot:'feet',goose:'geese',sex:'sexes',child:'children',man:'men',tooth:'teeth',person:'people'};const uncountable=['sheep','fish','deer','moose','series','species','money','rice','information','equipment','bison','cod','offspring','pike','salmon','shrimp','swine','trout','aircraft','hovercraft','spacecraft','sugar','tuna','you','wood'];// save some time in the case that singular and plural are the same
if(uncountable.indexOf(word.toLowerCase())>=0){return word;}// check for irregular forms
for(const w in irregular){const pattern=new RegExp(`${w}$`,'i');const replace=irregular[w];if(pattern.test(word)){return word.replace(pattern,replace);}}// check for matches using regular expressions
for(const reg in plural){const pattern=new RegExp(reg,'i');if(pattern.test(word)){return word.replace(pattern,plural[reg]);}}return word;}

/***/ })

};
;
//# sourceMappingURL=component---node-modules-gatsby-theme-portfolio-minimal-src-templates-article-listing-index-tsx.js.map