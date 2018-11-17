/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
import * as i0 from "@angular/core";
import * as i1 from "../../../node_modules/ionic-angular/umd/components/toolbar/toolbar-title.ngfactory";
import * as i2 from "ionic-angular/umd/components/toolbar/toolbar-title";
import * as i3 from "ionic-angular/umd/config/config";
import * as i4 from "ionic-angular/umd/components/toolbar/toolbar";
import * as i5 from "ionic-angular/umd/components/toolbar/navbar";
import * as i6 from "../../../node_modules/ionic-angular/umd/components/searchbar/searchbar.ngfactory";
import * as i7 from "ionic-angular/umd/components/searchbar/searchbar";
import * as i8 from "ionic-angular/umd/platform/platform";
import * as i9 from "@angular/forms";
import * as i10 from "../../../node_modules/ionic-angular/umd/components/button/button.ngfactory";
import * as i11 from "ionic-angular/umd/components/button/button";
import * as i12 from "ionic-angular/umd/components/icon/icon";
import * as i13 from "../../../node_modules/ionic-angular/umd/components/item/item.ngfactory";
import * as i14 from "ionic-angular/umd/components/item/item";
import * as i15 from "ionic-angular/umd/util/form";
import * as i16 from "ionic-angular/umd/components/item/item-reorder";
import * as i17 from "ionic-angular/umd/components/item/item-content";
import * as i18 from "ionic-angular/umd/components/grid/row";
import * as i19 from "ionic-angular/umd/components/grid/col";
import * as i20 from "../../../node_modules/ionic-image-loader/dist/components/img-loader.ngfactory";
import * as i21 from "ionic-image-loader/dist/components/img-loader";
import * as i22 from "ionic-image-loader/dist/providers/image-loader";
import * as i23 from "ionic-image-loader/dist/providers/image-loader-config";
import * as i24 from "ionic-angular/umd/components/toolbar/toolbar-header";
import * as i25 from "ionic-angular/umd/navigation/view-controller";
import * as i26 from "../../../node_modules/ionic-angular/umd/components/toolbar/navbar.ngfactory";
import * as i27 from "ionic-angular/umd/components/app/app";
import * as i28 from "ionic-angular/umd/navigation/nav-controller";
import * as i29 from "ionic-angular/umd/components/menu/menu-toggle";
import * as i30 from "ionic-angular/umd/components/app/menu-controller";
import * as i31 from "ionic-angular/umd/components/toolbar/toolbar-item";
import * as i32 from "@angular/common";
import * as i33 from "../../../node_modules/ionic-angular/umd/components/content/content.ngfactory";
import * as i34 from "ionic-angular/umd/components/content/content";
import * as i35 from "ionic-angular/umd/platform/dom-controller";
import * as i36 from "ionic-angular/umd/platform/keyboard";
import * as i37 from "ionic-angular/umd/components/list/list";
import * as i38 from "ionic-angular/umd/gestures/gesture-controller";
import * as i39 from "ionic-angular/umd/components/infinite-scroll/infinite-scroll";
import * as i40 from "../../../node_modules/ionic-angular/umd/components/infinite-scroll/infinite-scroll-content.ngfactory";
import * as i41 from "ionic-angular/umd/components/infinite-scroll/infinite-scroll-content";
import * as i42 from "./search";
import * as i43 from "../../providers/constants/constants";
import * as i44 from "@angular/http";
import * as i45 from "../../providers/rest/rest";
import * as i46 from "ionic-angular/umd/navigation/nav-params";
var styles_SearchPage = [];
var RenderType_SearchPage = i0.ɵcrt({ encapsulation: 2, styles: styles_SearchPage, data: {} });
export { RenderType_SearchPage as RenderType_SearchPage };
function View_SearchPage_1(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 2, "ion-title", [], null, null, null, i1.View_ToolbarTitle_0, i1.RenderType_ToolbarTitle)), i0.ɵdid(1, 49152, null, 0, i2.ToolbarTitle, [i3.Config, i0.ElementRef, i0.Renderer, [2, i4.Toolbar], [2, i5.Navbar]], null, null), (_l()(), i0.ɵted(2, 0, [" ", " "]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.title; _ck(_v, 2, 0, currVal_0); }); }
function View_SearchPage_2(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "ion-searchbar", [["showCancelButton", "true"]], [[2, "searchbar-animated", null], [2, "searchbar-has-value", null], [2, "searchbar-active", null], [2, "searchbar-show-cancel", null], [2, "searchbar-left-aligned", null], [2, "searchbar-has-focus", null]], [[null, "search"], [null, "ionCancel"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("search" === en)) {
        var pd_0 = (_co.onSearch($event) !== false);
        ad = (pd_0 && ad);
    } if (("ionCancel" === en)) {
        var pd_1 = ((_co.isSearchbarOpened = false) !== false);
        ad = (pd_1 && ad);
    } return ad; }, i6.View_Searchbar_0, i6.RenderType_Searchbar)), i0.ɵdid(1, 1294336, null, 0, i7.Searchbar, [i3.Config, i8.Platform, i0.ElementRef, i0.Renderer, [2, i9.NgControl]], { showCancelButton: [0, "showCancelButton"] }, { ionCancel: "ionCancel" })], function (_ck, _v) { var currVal_6 = "true"; _ck(_v, 1, 0, currVal_6); }, function (_ck, _v) { var currVal_0 = i0.ɵnov(_v, 1)._animated; var currVal_1 = i0.ɵnov(_v, 1)._value; var currVal_2 = i0.ɵnov(_v, 1)._isActive; var currVal_3 = i0.ɵnov(_v, 1)._showCancelButton; var currVal_4 = i0.ɵnov(_v, 1)._shouldAlignLeft; var currVal_5 = i0.ɵnov(_v, 1)._isFocus; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5); }); }
function View_SearchPage_3(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 3, "button", [["icon-only", ""], ["ion-button", ""]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = ((_co.isSearchbarOpened = true) !== false);
        ad = (pd_0 && ad);
    } return ad; }, i10.View_Button_0, i10.RenderType_Button)), i0.ɵdid(1, 1097728, [[2, 4]], 0, i11.Button, [[8, ""], i3.Config, i0.ElementRef, i0.Renderer], null, null), (_l()(), i0.ɵeld(2, 0, null, 0, 1, "ion-icon", [["name", "search"], ["role", "img"]], [[2, "hide", null]], null, null, null, null)), i0.ɵdid(3, 147456, null, 0, i12.Icon, [i3.Config, i0.ElementRef, i0.Renderer], { name: [0, "name"] }, null)], function (_ck, _v) { var currVal_1 = "search"; _ck(_v, 3, 0, currVal_1); }, function (_ck, _v) { var currVal_0 = i0.ɵnov(_v, 3)._hidden; _ck(_v, 2, 0, currVal_0); }); }
function View_SearchPage_4(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 14, "button", [["class", "item item-block"], ["ion-item", ""]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.openPost(_v.context.$implicit) !== false);
        ad = (pd_0 && ad);
    } return ad; }, i13.View_Item_0, i13.RenderType_Item)), i0.ɵdid(1, 1097728, null, 3, i14.Item, [i15.Form, i3.Config, i0.ElementRef, i0.Renderer, [2, i16.ItemReorder]], null, null), i0.ɵqud(335544320, 3, { contentLabel: 0 }), i0.ɵqud(603979776, 4, { _buttons: 1 }), i0.ɵqud(603979776, 5, { _icons: 1 }), i0.ɵdid(5, 16384, null, 0, i17.ItemContent, [], null, null), (_l()(), i0.ɵeld(6, 0, null, 2, 8, "ion-row", [["class", "row"]], null, null, null, null, null)), i0.ɵdid(7, 16384, null, 0, i18.Row, [], null, null), (_l()(), i0.ɵeld(8, 0, null, null, 3, "ion-col", [["class", "col"], ["col-4", ""]], null, null, null, null, null)), i0.ɵdid(9, 16384, null, 0, i19.Col, [], null, null), (_l()(), i0.ɵeld(10, 0, null, null, 1, "img-loader", [["height", "44"], ["useImg", ""], ["width", "80"]], null, [[null, "load"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("load" === en)) {
        var pd_0 = (_co.onImageLoad($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, i20.View_ImgLoaderComponent_0, i20.RenderType_ImgLoaderComponent)), i0.ɵdid(11, 114688, null, 0, i21.ImgLoaderComponent, [i0.ElementRef, i0.Renderer2, i22.ImageLoader, i23.ImageLoaderConfig], { width: [0, "width"], height: [1, "height"], useImg: [2, "useImg"], src: [3, "src"] }, { load: "load" }), (_l()(), i0.ɵeld(12, 0, null, null, 2, "ion-col", [["class", "col"], ["col-8", ""]], null, null, null, null, null)), i0.ɵdid(13, 16384, null, 0, i19.Col, [], null, null), (_l()(), i0.ɵeld(14, 0, null, null, 0, "h2", [["text-wrap", ""]], [[8, "innerHTML", 1]], null, null, null, null))], function (_ck, _v) { var currVal_0 = "80"; var currVal_1 = "44"; var currVal_2 = ""; var currVal_3 = ((_v.context.$implicit == null) ? null : _v.context.$implicit.imageurl); _ck(_v, 11, 0, currVal_0, currVal_1, currVal_2, currVal_3); }, function (_ck, _v) { var currVal_4 = _v.context.$implicit.title; _ck(_v, 14, 0, currVal_4); }); }
export function View_SearchPage_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 19, "ion-header", [], null, null, null, null, null)), i0.ɵdid(1, 16384, null, 0, i24.Header, [i3.Config, i0.ElementRef, i0.Renderer, [2, i25.ViewController]], null, null), (_l()(), i0.ɵeld(2, 0, null, null, 17, "ion-navbar", [["class", "toolbar"]], [[8, "hidden", 0], [2, "statusbar-padding", null]], null, null, i26.View_Navbar_0, i26.RenderType_Navbar)), i0.ɵdid(3, 49152, null, 0, i5.Navbar, [i27.App, [2, i25.ViewController], [2, i28.NavController], i3.Config, i0.ElementRef, i0.Renderer], null, null), (_l()(), i0.ɵeld(4, 0, null, 0, 6, "button", [["ion-button", ""], ["menuToggle", ""]], [[8, "hidden", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i0.ɵnov(_v, 6).toggle() !== false);
        ad = (pd_0 && ad);
    } return ad; }, i10.View_Button_0, i10.RenderType_Button)), i0.ɵdid(5, 1097728, [[1, 4]], 0, i11.Button, [[8, ""], i3.Config, i0.ElementRef, i0.Renderer], null, null), i0.ɵdid(6, 1064960, null, 0, i29.MenuToggle, [i30.MenuController, [2, i25.ViewController], [2, i11.Button], [2, i5.Navbar]], { menuToggle: [0, "menuToggle"] }, null), i0.ɵdid(7, 16384, null, 1, i31.ToolbarItem, [i3.Config, i0.ElementRef, i0.Renderer, [2, i4.Toolbar], [2, i5.Navbar]], null, null), i0.ɵqud(603979776, 1, { _buttons: 1 }), (_l()(), i0.ɵeld(9, 0, null, 0, 1, "ion-icon", [["name", "menu"], ["role", "img"]], [[2, "hide", null]], null, null, null, null)), i0.ɵdid(10, 147456, null, 0, i12.Icon, [i3.Config, i0.ElementRef, i0.Renderer], { name: [0, "name"] }, null), (_l()(), i0.ɵand(16777216, null, 3, 1, null, View_SearchPage_1)), i0.ɵdid(12, 16384, null, 0, i32.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i0.ɵand(16777216, null, 3, 1, null, View_SearchPage_2)), i0.ɵdid(14, 16384, null, 0, i32.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i0.ɵeld(15, 0, null, 2, 4, "ion-buttons", [["end", ""]], null, null, null, null, null)), i0.ɵdid(16, 16384, null, 1, i31.ToolbarItem, [i3.Config, i0.ElementRef, i0.Renderer, [2, i4.Toolbar], [2, i5.Navbar]], null, null), i0.ɵqud(603979776, 2, { _buttons: 1 }), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_SearchPage_3)), i0.ɵdid(19, 16384, null, 0, i32.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i0.ɵeld(20, 0, null, null, 9, "ion-content", [["padding", ""]], [[2, "statusbar-padding", null], [2, "has-refresher", null]], null, null, i33.View_Content_0, i33.RenderType_Content)), i0.ɵdid(21, 4374528, null, 0, i34.Content, [i3.Config, i8.Platform, i35.DomController, i0.ElementRef, i0.Renderer, i27.App, i36.Keyboard, i0.NgZone, [2, i25.ViewController], [2, i28.NavController]], null, null), (_l()(), i0.ɵeld(22, 0, null, 1, 3, "ion-list", [["inset", ""]], null, null, null, null, null)), i0.ɵdid(23, 16384, null, 0, i37.List, [i3.Config, i0.ElementRef, i0.Renderer, i8.Platform, i38.GestureController, i35.DomController], null, null), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_SearchPage_4)), i0.ɵdid(25, 278528, null, 0, i32.NgForOf, [i0.ViewContainerRef, i0.TemplateRef, i0.IterableDiffers], { ngForOf: [0, "ngForOf"] }, null), (_l()(), i0.ɵeld(26, 0, null, 1, 3, "ion-infinite-scroll", [], null, [[null, "ionInfinite"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("ionInfinite" === en)) {
        var pd_0 = ($event.waitFor(_co.doInfinite()) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i0.ɵdid(27, 1196032, null, 0, i39.InfiniteScroll, [i34.Content, i0.NgZone, i0.ElementRef, i35.DomController], null, { ionInfinite: "ionInfinite" }), (_l()(), i0.ɵeld(28, 0, null, null, 1, "ion-infinite-scroll-content", [["loadingSpinner", "bubbles"], ["loadingText", "Loading more data..."]], [[1, "state", 0]], null, null, i40.View_InfiniteScrollContent_0, i40.RenderType_InfiniteScrollContent)), i0.ɵdid(29, 114688, null, 0, i41.InfiniteScrollContent, [i39.InfiniteScroll, i3.Config], { loadingSpinner: [0, "loadingSpinner"], loadingText: [1, "loadingText"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_3 = ""; _ck(_v, 6, 0, currVal_3); var currVal_5 = "menu"; _ck(_v, 10, 0, currVal_5); var currVal_6 = !_co.isSearchbarOpened; _ck(_v, 12, 0, currVal_6); var currVal_7 = _co.isSearchbarOpened; _ck(_v, 14, 0, currVal_7); var currVal_8 = !_co.isSearchbarOpened; _ck(_v, 19, 0, currVal_8); var currVal_11 = _co.posts; _ck(_v, 25, 0, currVal_11); var currVal_13 = "bubbles"; var currVal_14 = "Loading more data..."; _ck(_v, 29, 0, currVal_13, currVal_14); }, function (_ck, _v) { var currVal_0 = i0.ɵnov(_v, 3)._hidden; var currVal_1 = i0.ɵnov(_v, 3)._sbPadding; _ck(_v, 2, 0, currVal_0, currVal_1); var currVal_2 = i0.ɵnov(_v, 6).isHidden; _ck(_v, 4, 0, currVal_2); var currVal_4 = i0.ɵnov(_v, 10)._hidden; _ck(_v, 9, 0, currVal_4); var currVal_9 = i0.ɵnov(_v, 21).statusbarPadding; var currVal_10 = i0.ɵnov(_v, 21)._hasRefresher; _ck(_v, 20, 0, currVal_9, currVal_10); var currVal_12 = i0.ɵnov(_v, 29).inf.state; _ck(_v, 28, 0, currVal_12); }); }
export function View_SearchPage_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "page-search", [], null, null, null, View_SearchPage_0, RenderType_SearchPage)), i0.ɵdid(1, 49152, null, 0, i42.SearchPage, [i43.ConstantsProvider, i44.Http, i28.NavController, i45.RestProvider, i22.ImageLoader, i46.NavParams], null, null)], null, null); }
var SearchPageNgFactory = i0.ɵccf("page-search", i42.SearchPage, View_SearchPage_Host_0, {}, {}, []);
export { SearchPageNgFactory as SearchPageNgFactory };
//# sourceMappingURL=search.ngfactory.js.map