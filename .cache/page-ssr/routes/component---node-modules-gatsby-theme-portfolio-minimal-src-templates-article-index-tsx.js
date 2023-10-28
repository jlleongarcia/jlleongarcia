exports.id = 665;
exports.ids = [665];
exports.modules = {

/***/ 7719:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ ArticleTemplate)
});

// EXTERNAL MODULE: external "C:\\Users\\Jesus Alcocer\\Desktop\\JAlcocerT\\node_modules\\react\\index.js"
var external_C_Users_Jesus_Alcocer_Desktop_JAlcocerT_node_modules_react_index_js_ = __webpack_require__(3423);
var external_C_Users_Jesus_Alcocer_Desktop_JAlcocerT_node_modules_react_index_js_default = /*#__PURE__*/__webpack_require__.n(external_C_Users_Jesus_Alcocer_Desktop_JAlcocerT_node_modules_react_index_js_);
// EXTERNAL MODULE: ./.cache/gatsby-browser-entry.js + 11 modules
var gatsby_browser_entry = __webpack_require__(7076);
// EXTERNAL MODULE: ./node_modules/gatsby-plugin-image/dist/gatsby-image.module.js
var gatsby_image_module = __webpack_require__(3040);
// EXTERNAL MODULE: ./node_modules/gatsby-theme-portfolio-minimal/src/components/Page/index.tsx + 15 modules
var Page = __webpack_require__(1665);
// EXTERNAL MODULE: ./node_modules/gatsby-theme-portfolio-minimal/src/components/Seo/index.tsx
var Seo = __webpack_require__(533);
// EXTERNAL MODULE: ./node_modules/gatsby-theme-portfolio-minimal/src/hooks/useSiteMetadata.tsx
var useSiteMetadata = __webpack_require__(1379);
;// CONCATENATED MODULE: ./node_modules/gatsby-theme-portfolio-minimal/src/components/AuthorSnippet/style.module.css
// Exports
var AuthorSnippet = "style-module--AuthorSnippet--7c737";
var Avatar = "style-module--Avatar--1e2ce";
var Description = "style-module--Description--1bbd7";
var WrittenBy = "style-module--WrittenBy--181a0";
var Bio = "style-module--Bio--2fd8d";

;// CONCATENATED MODULE: ./node_modules/gatsby-theme-portfolio-minimal/src/components/AuthorSnippet/index.tsx
function AuthorSnippet_AuthorSnippet(){var _avatar$childImageSha;const{author,avatar,bio}=(0,useSiteMetadata/* useSiteMetadata */.$)();return/*#__PURE__*/external_C_Users_Jesus_Alcocer_Desktop_JAlcocerT_node_modules_react_index_js_default().createElement("div",{className:AuthorSnippet},avatar!==null&&avatar!==void 0&&(_avatar$childImageSha=avatar.childImageSharp)!==null&&_avatar$childImageSha!==void 0&&_avatar$childImageSha.gatsbyImageData?/*#__PURE__*/external_C_Users_Jesus_Alcocer_Desktop_JAlcocerT_node_modules_react_index_js_default().createElement(gatsby_image_module/* GatsbyImage */.HN,{image:avatar.childImageSharp.gatsbyImageData,alt:author,className:Avatar}):null,/*#__PURE__*/external_C_Users_Jesus_Alcocer_Desktop_JAlcocerT_node_modules_react_index_js_default().createElement("div",{className:Description},/*#__PURE__*/external_C_Users_Jesus_Alcocer_Desktop_JAlcocerT_node_modules_react_index_js_default().createElement("span",{className:WrittenBy},"Written By ",/*#__PURE__*/external_C_Users_Jesus_Alcocer_Desktop_JAlcocerT_node_modules_react_index_js_default().createElement("u",null,author)),/*#__PURE__*/external_C_Users_Jesus_Alcocer_Desktop_JAlcocerT_node_modules_react_index_js_default().createElement("p",{className:Bio},bio)));}
;// CONCATENATED MODULE: ./node_modules/gatsby-theme-portfolio-minimal/src/templates/Article/style.module.css
// Exports
var Breadcrumb = "style-module--Breadcrumb--15487";
var BackArrow = "style-module--BackArrow--f76ce";
var Article = "style-module--Article--a4577";
var Header = "style-module--Header--1fafc";
var Banner = "style-module--Banner--cbdac";
var Body = "style-module--Body--9dac7";
var Footer = "style-module--Footer--d408f";
var Category = "style-module--Category--d42a1";
var Details = "style-module--Details--92676";
var ReadingTime = "style-module--ReadingTime--45206";
var BannerImage = "style-module--BannerImage--71c8d";
var BannerCaption = "style-module--BannerCaption--55184";
var Content = "style-module--Content--a6403";
var Keyword = "style-module--Keyword--9a2c3";

// EXTERNAL MODULE: ./node_modules/gatsby-theme-portfolio-minimal/src/utils/pluralize.ts
var pluralize = __webpack_require__(1643);
;// CONCATENATED MODULE: ./node_modules/gatsby-theme-portfolio-minimal/src/templates/Article/index.tsx
// Reference to the local prismjs theme (Modified)
__webpack_require__(571);function ArticleTemplate(props){var _pluralize,_pluralize2;const article=props.pageContext.article;return/*#__PURE__*/external_C_Users_Jesus_Alcocer_Desktop_JAlcocerT_node_modules_react_index_js_default().createElement((external_C_Users_Jesus_Alcocer_Desktop_JAlcocerT_node_modules_react_index_js_default()).Fragment,null,/*#__PURE__*/external_C_Users_Jesus_Alcocer_Desktop_JAlcocerT_node_modules_react_index_js_default().createElement(Seo/* Seo */.p,{title:article.title,description:article.description||undefined,useTitleTemplate:true}),/*#__PURE__*/external_C_Users_Jesus_Alcocer_Desktop_JAlcocerT_node_modules_react_index_js_default().createElement(Page/* Page */.T,null,/*#__PURE__*/external_C_Users_Jesus_Alcocer_Desktop_JAlcocerT_node_modules_react_index_js_default().createElement("article",{className:Article},/*#__PURE__*/external_C_Users_Jesus_Alcocer_Desktop_JAlcocerT_node_modules_react_index_js_default().createElement("div",{className:Breadcrumb},/*#__PURE__*/external_C_Users_Jesus_Alcocer_Desktop_JAlcocerT_node_modules_react_index_js_default().createElement(gatsby_browser_entry.Link,{to:props.pageContext.listingPagePath,title:`Back To All ${(_pluralize=(0,pluralize/* pluralize */._)(props.pageContext.entityName))!==null&&_pluralize!==void 0?_pluralize:'Articles'}`},/*#__PURE__*/external_C_Users_Jesus_Alcocer_Desktop_JAlcocerT_node_modules_react_index_js_default().createElement("span",{className:BackArrow},"\u276E"),"All ",(_pluralize2=(0,pluralize/* pluralize */._)(props.pageContext.entityName))!==null&&_pluralize2!==void 0?_pluralize2:'Articles')),/*#__PURE__*/external_C_Users_Jesus_Alcocer_Desktop_JAlcocerT_node_modules_react_index_js_default().createElement("section",{className:Header},/*#__PURE__*/external_C_Users_Jesus_Alcocer_Desktop_JAlcocerT_node_modules_react_index_js_default().createElement("span",{className:Category},article.categories.join(' / ')),/*#__PURE__*/external_C_Users_Jesus_Alcocer_Desktop_JAlcocerT_node_modules_react_index_js_default().createElement("h1",null,article.title),/*#__PURE__*/external_C_Users_Jesus_Alcocer_Desktop_JAlcocerT_node_modules_react_index_js_default().createElement("div",{className:Details},article.date,/*#__PURE__*/external_C_Users_Jesus_Alcocer_Desktop_JAlcocerT_node_modules_react_index_js_default().createElement("span",{className:ReadingTime},article.readingTime.text))),article.banner&&article.banner.src&&/*#__PURE__*/external_C_Users_Jesus_Alcocer_Desktop_JAlcocerT_node_modules_react_index_js_default().createElement("section",{className:Banner},/*#__PURE__*/external_C_Users_Jesus_Alcocer_Desktop_JAlcocerT_node_modules_react_index_js_default().createElement(gatsby_image_module/* GatsbyImage */.HN,{image:article.banner.src.childImageSharp.gatsbyImageData,alt:article.banner.alt||`Image for ${article.title}`,imgClassName:BannerImage}),article.banner.caption&&/*#__PURE__*/external_C_Users_Jesus_Alcocer_Desktop_JAlcocerT_node_modules_react_index_js_default().createElement("span",{className:BannerCaption,dangerouslySetInnerHTML:{__html:article.banner.caption}})),/*#__PURE__*/external_C_Users_Jesus_Alcocer_Desktop_JAlcocerT_node_modules_react_index_js_default().createElement("section",{className:Body},/*#__PURE__*/external_C_Users_Jesus_Alcocer_Desktop_JAlcocerT_node_modules_react_index_js_default().createElement("div",{className:Content,dangerouslySetInnerHTML:{__html:article.body}}),article.keywords&&article.keywords.map((keyword,key)=>{return/*#__PURE__*/external_C_Users_Jesus_Alcocer_Desktop_JAlcocerT_node_modules_react_index_js_default().createElement("span",{key:key,className:Keyword},keyword);})),/*#__PURE__*/external_C_Users_Jesus_Alcocer_Desktop_JAlcocerT_node_modules_react_index_js_default().createElement("section",{className:Footer},/*#__PURE__*/external_C_Users_Jesus_Alcocer_Desktop_JAlcocerT_node_modules_react_index_js_default().createElement(AuthorSnippet_AuthorSnippet,null)))));}

/***/ }),

/***/ 1643:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ }),

/***/ 571:
/***/ (() => {



/***/ })

};
;
//# sourceMappingURL=component---node-modules-gatsby-theme-portfolio-minimal-src-templates-article-index-tsx.js.map