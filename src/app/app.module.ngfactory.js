/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
import * as i0 from "@angular/core";
import * as i1 from "./app.module";
import * as i2 from "ionic-angular/umd/components/app/app-root";
import * as i3 from "../../node_modules/ionic-angular/umd/components/action-sheet/action-sheet-component.ngfactory";
import * as i4 from "../../node_modules/ionic-angular/umd/components/alert/alert-component.ngfactory";
import * as i5 from "../../node_modules/ionic-angular/umd/components/app/app-root.ngfactory";
import * as i6 from "../../node_modules/ionic-angular/umd/components/loading/loading-component.ngfactory";
import * as i7 from "../../node_modules/ionic-angular/umd/components/modal/modal-component.ngfactory";
import * as i8 from "../../node_modules/ionic-angular/umd/components/picker/picker-component.ngfactory";
import * as i9 from "../../node_modules/ionic-angular/umd/components/popover/popover-component.ngfactory";
import * as i10 from "../../node_modules/ionic-angular/umd/components/select/select-popover-component.ngfactory";
import * as i11 from "../../node_modules/ionic-angular/umd/components/toast/toast-component.ngfactory";
import * as i12 from "./app.component.ngfactory";
import * as i13 from "../pages/home/home.ngfactory";
import * as i14 from "../pages/post/post.ngfactory";
import * as i15 from "../pages/label/label.ngfactory";
import * as i16 from "../pages/search/search.ngfactory";
import * as i17 from "@angular/common";
import * as i18 from "@angular/platform-browser";
import * as i19 from "ionic-angular/umd/gestures/gesture-config";
import * as i20 from "@angular/common/http";
import * as i21 from "@angular/http";
import * as i22 from "@angular/forms";
import * as i23 from "ionic-image-loader/dist/providers/image-loader-config";
import * as i24 from "@ionic-native/file";
import * as i25 from "ionic-image-loader/dist/providers/image-loader";
import * as i26 from "ionic-angular/umd/platform/platform";
import * as i27 from "ionic-angular/umd/components/action-sheet/action-sheet-controller";
import * as i28 from "ionic-angular/umd/components/app/app";
import * as i29 from "ionic-angular/umd/config/config";
import * as i30 from "ionic-angular/umd/components/alert/alert-controller";
import * as i31 from "ionic-angular/umd/util/events";
import * as i32 from "ionic-angular/umd/util/form";
import * as i33 from "ionic-angular/umd/tap-click/haptic";
import * as i34 from "ionic-angular/umd/platform/keyboard";
import * as i35 from "ionic-angular/umd/platform/dom-controller";
import * as i36 from "ionic-angular/umd/components/loading/loading-controller";
import * as i37 from "ionic-angular/umd/module";
import * as i38 from "ionic-angular/umd/navigation/url-serializer";
import * as i39 from "ionic-angular/umd/navigation/deep-linker";
import * as i40 from "ionic-angular/umd/util/module-loader";
import * as i41 from "ionic-angular/umd/components/modal/modal-controller";
import * as i42 from "ionic-angular/umd/components/picker/picker-controller";
import * as i43 from "ionic-angular/umd/components/popover/popover-controller";
import * as i44 from "ionic-angular/umd/tap-click/tap-click";
import * as i45 from "ionic-angular/umd/gestures/gesture-controller";
import * as i46 from "ionic-angular/umd/components/toast/toast-controller";
import * as i47 from "ionic-angular/umd/transitions/transition-controller";
import * as i48 from "@ionic-native/status-bar";
import * as i49 from "@ionic-native/splash-screen";
import * as i50 from "@ionic-native/social-sharing";
import * as i51 from "@ionic-native/admob-free";
import * as i52 from "@ionic-native/in-app-browser";
import * as i53 from "../providers/rest/rest";
import * as i54 from "../providers/constants/constants";
import * as i55 from "ionic-angular/umd/util/ionic-error-handler";
import * as i56 from "ionic-angular/umd/platform/platform-registry";
import * as i57 from "ionic-angular/umd/components/app/menu-controller";
import * as i58 from "ionic-angular/umd/util/ng-module-loader";
import * as i59 from "ionic-angular/umd/config/mode-registry";
import * as i60 from "ionic-image-loader/dist/image-loader.module";
import * as i61 from "./app.component";
var AppModuleNgFactory = i0.ɵcmf(i1.AppModule, [i2.IonicApp], function (_l) { return i0.ɵmod([i0.ɵmpd(512, i0.ComponentFactoryResolver, i0.ɵCodegenComponentFactoryResolver, [[8, [i3.ActionSheetCmpNgFactory, i4.AlertCmpNgFactory, i5.IonicAppNgFactory, i6.LoadingCmpNgFactory, i7.ModalCmpNgFactory, i8.PickerCmpNgFactory, i9.PopoverCmpNgFactory, i10.SelectPopoverNgFactory, i11.ToastCmpNgFactory, i12.MyAppNgFactory, i13.HomePageNgFactory, i14.PostPageNgFactory, i15.LabelPageNgFactory, i16.SearchPageNgFactory]], [3, i0.ComponentFactoryResolver], i0.NgModuleRef]), i0.ɵmpd(5120, i0.LOCALE_ID, i0.ɵangular_packages_core_core_k, [[3, i0.LOCALE_ID]]), i0.ɵmpd(4608, i17.NgLocalization, i17.NgLocaleLocalization, [i0.LOCALE_ID, [2, i17.ɵangular_packages_common_common_a]]), i0.ɵmpd(5120, i0.APP_ID, i0.ɵangular_packages_core_core_f, []), i0.ɵmpd(5120, i0.IterableDiffers, i0.ɵangular_packages_core_core_i, []), i0.ɵmpd(5120, i0.KeyValueDiffers, i0.ɵangular_packages_core_core_j, []), i0.ɵmpd(4608, i18.DomSanitizer, i18.ɵDomSanitizerImpl, [i17.DOCUMENT]), i0.ɵmpd(6144, i0.Sanitizer, null, [i18.DomSanitizer]), i0.ɵmpd(4608, i18.HAMMER_GESTURE_CONFIG, i19.IonicGestureConfig, []), i0.ɵmpd(5120, i18.EVENT_MANAGER_PLUGINS, function (p0_0, p0_1, p0_2, p1_0, p2_0, p2_1, p2_2, p2_3) { return [new i18.ɵDomEventsPlugin(p0_0, p0_1, p0_2), new i18.ɵKeyEventsPlugin(p1_0), new i18.ɵHammerGesturesPlugin(p2_0, p2_1, p2_2, p2_3)]; }, [i17.DOCUMENT, i0.NgZone, i0.PLATFORM_ID, i17.DOCUMENT, i17.DOCUMENT, i18.HAMMER_GESTURE_CONFIG, i0.ɵConsole, [2, i18.HAMMER_LOADER]]), i0.ɵmpd(4608, i18.EventManager, i18.EventManager, [i18.EVENT_MANAGER_PLUGINS, i0.NgZone]), i0.ɵmpd(135680, i18.ɵDomSharedStylesHost, i18.ɵDomSharedStylesHost, [i17.DOCUMENT]), i0.ɵmpd(4608, i18.ɵDomRendererFactory2, i18.ɵDomRendererFactory2, [i18.EventManager, i18.ɵDomSharedStylesHost]), i0.ɵmpd(6144, i0.RendererFactory2, null, [i18.ɵDomRendererFactory2]), i0.ɵmpd(6144, i18.ɵSharedStylesHost, null, [i18.ɵDomSharedStylesHost]), i0.ɵmpd(4608, i0.Testability, i0.Testability, [i0.NgZone]), i0.ɵmpd(4608, i20.HttpXsrfTokenExtractor, i20.ɵangular_packages_common_http_http_g, [i17.DOCUMENT, i0.PLATFORM_ID, i20.ɵangular_packages_common_http_http_e]), i0.ɵmpd(4608, i20.ɵangular_packages_common_http_http_h, i20.ɵangular_packages_common_http_http_h, [i20.HttpXsrfTokenExtractor, i20.ɵangular_packages_common_http_http_f]), i0.ɵmpd(5120, i20.HTTP_INTERCEPTORS, function (p0_0) { return [p0_0]; }, [i20.ɵangular_packages_common_http_http_h]), i0.ɵmpd(4608, i20.ɵangular_packages_common_http_http_d, i20.ɵangular_packages_common_http_http_d, []), i0.ɵmpd(6144, i20.XhrFactory, null, [i20.ɵangular_packages_common_http_http_d]), i0.ɵmpd(4608, i20.HttpXhrBackend, i20.HttpXhrBackend, [i20.XhrFactory]), i0.ɵmpd(6144, i20.HttpBackend, null, [i20.HttpXhrBackend]), i0.ɵmpd(4608, i20.HttpHandler, i20.ɵHttpInterceptingHandler, [i20.HttpBackend, i0.Injector]), i0.ɵmpd(4608, i20.HttpClient, i20.HttpClient, [i20.HttpHandler]), i0.ɵmpd(4608, i21.BrowserXhr, i21.BrowserXhr, []), i0.ɵmpd(4608, i21.ResponseOptions, i21.BaseResponseOptions, []), i0.ɵmpd(5120, i21.XSRFStrategy, i21.ɵangular_packages_http_http_a, []), i0.ɵmpd(4608, i21.XHRBackend, i21.XHRBackend, [i21.BrowserXhr, i21.ResponseOptions, i21.XSRFStrategy]), i0.ɵmpd(4608, i21.RequestOptions, i21.BaseRequestOptions, []), i0.ɵmpd(5120, i21.Http, i21.ɵangular_packages_http_http_b, [i21.XHRBackend, i21.RequestOptions]), i0.ɵmpd(4608, i22.ɵangular_packages_forms_forms_j, i22.ɵangular_packages_forms_forms_j, []), i0.ɵmpd(4608, i22.FormBuilder, i22.FormBuilder, []), i0.ɵmpd(4608, i23.ImageLoaderConfig, i23.ImageLoaderConfig, []), i0.ɵmpd(4608, i24.File, i24.File, []), i0.ɵmpd(4608, i25.ImageLoader, i25.ImageLoader, [i23.ImageLoaderConfig, i24.File, i20.HttpClient, i26.Platform]), i0.ɵmpd(4608, i27.ActionSheetController, i27.ActionSheetController, [i28.App, i29.Config]), i0.ɵmpd(4608, i30.AlertController, i30.AlertController, [i28.App, i29.Config]), i0.ɵmpd(4608, i31.Events, i31.Events, []), i0.ɵmpd(4608, i32.Form, i32.Form, []), i0.ɵmpd(4608, i33.Haptic, i33.Haptic, [i26.Platform]), i0.ɵmpd(4608, i34.Keyboard, i34.Keyboard, [i29.Config, i26.Platform, i0.NgZone, i35.DomController]), i0.ɵmpd(4608, i36.LoadingController, i36.LoadingController, [i28.App, i29.Config]), i0.ɵmpd(5120, i17.LocationStrategy, i37.provideLocationStrategy, [i17.PlatformLocation, [2, i17.APP_BASE_HREF], i29.Config]), i0.ɵmpd(4608, i17.Location, i17.Location, [i17.LocationStrategy]), i0.ɵmpd(5120, i38.UrlSerializer, i38.setupUrlSerializer, [i28.App, i38.DeepLinkConfigToken]), i0.ɵmpd(5120, i39.DeepLinker, i39.setupDeepLinker, [i28.App, i38.UrlSerializer, i17.Location, i40.ModuleLoader, i0.ComponentFactoryResolver]), i0.ɵmpd(4608, i41.ModalController, i41.ModalController, [i28.App, i29.Config, i39.DeepLinker]), i0.ɵmpd(4608, i42.PickerController, i42.PickerController, [i28.App, i29.Config]), i0.ɵmpd(4608, i43.PopoverController, i43.PopoverController, [i28.App, i29.Config, i39.DeepLinker]), i0.ɵmpd(4608, i44.TapClick, i44.TapClick, [i29.Config, i26.Platform, i35.DomController, i28.App, i45.GestureController]), i0.ɵmpd(4608, i46.ToastController, i46.ToastController, [i28.App, i29.Config]), i0.ɵmpd(4608, i47.TransitionController, i47.TransitionController, [i26.Platform, i29.Config]), i0.ɵmpd(4608, i48.StatusBar, i48.StatusBar, []), i0.ɵmpd(4608, i49.SplashScreen, i49.SplashScreen, []), i0.ɵmpd(4608, i50.SocialSharing, i50.SocialSharing, []), i0.ɵmpd(4608, i51.AdMobFree, i51.AdMobFree, []), i0.ɵmpd(4608, i52.InAppBrowser, i52.InAppBrowser, []), i0.ɵmpd(4608, i53.RestProvider, i53.RestProvider, [i20.HttpClient]), i0.ɵmpd(4608, i54.ConstantsProvider, i54.ConstantsProvider, [i20.HttpClient]), i0.ɵmpd(1073742336, i17.CommonModule, i17.CommonModule, []), i0.ɵmpd(512, i0.ErrorHandler, i55.IonicErrorHandler, []), i0.ɵmpd(256, i29.ConfigToken, null, []), i0.ɵmpd(1024, i56.PlatformConfigToken, i56.providePlatformConfigs, []), i0.ɵmpd(1024, i26.Platform, i26.setupPlatform, [i18.DOCUMENT, i56.PlatformConfigToken, i0.NgZone]), i0.ɵmpd(1024, i29.Config, i29.setupConfig, [i29.ConfigToken, i26.Platform]), i0.ɵmpd(512, i35.DomController, i35.DomController, [i26.Platform]), i0.ɵmpd(512, i57.MenuController, i57.MenuController, []), i0.ɵmpd(512, i28.App, i28.App, [i29.Config, i26.Platform, [2, i57.MenuController]]), i0.ɵmpd(512, i45.GestureController, i45.GestureController, [i28.App]), i0.ɵmpd(256, i38.DeepLinkConfigToken, null, []), i0.ɵmpd(512, i0.Compiler, i0.Compiler, []), i0.ɵmpd(512, i58.NgModuleLoader, i58.NgModuleLoader, [i0.Compiler]), i0.ɵmpd(1024, i40.ModuleLoader, i40.provideModuleLoader, [i58.NgModuleLoader, i0.Injector]), i0.ɵmpd(1024, i0.APP_INITIALIZER, function (p0_0, p1_0, p2_0, p2_1, p3_0, p3_1, p3_2, p3_3, p3_4, p4_0, p4_1, p4_2, p4_3) { return [i18.ɵangular_packages_platform_browser_platform_browser_j(p0_0), i59.registerModeConfigs(p1_0), i31.setupProvideEvents(p2_0, p2_1), i44.setupTapClick(p3_0, p3_1, p3_2, p3_3, p3_4), i40.setupPreloading(p4_0, p4_1, p4_2, p4_3)]; }, [[2, i0.NgProbeToken], i29.Config, i26.Platform, i35.DomController, i29.Config, i26.Platform, i35.DomController, i28.App, i45.GestureController, i29.Config, i38.DeepLinkConfigToken, i40.ModuleLoader, i0.NgZone]), i0.ɵmpd(512, i0.ApplicationInitStatus, i0.ApplicationInitStatus, [[2, i0.APP_INITIALIZER]]), i0.ɵmpd(131584, i0.ApplicationRef, i0.ApplicationRef, [i0.NgZone, i0.ɵConsole, i0.Injector, i0.ErrorHandler, i0.ComponentFactoryResolver, i0.ApplicationInitStatus]), i0.ɵmpd(1073742336, i0.ApplicationModule, i0.ApplicationModule, [i0.ApplicationRef]), i0.ɵmpd(1073742336, i18.BrowserModule, i18.BrowserModule, [[3, i18.BrowserModule]]), i0.ɵmpd(1073742336, i20.HttpClientXsrfModule, i20.HttpClientXsrfModule, []), i0.ɵmpd(1073742336, i20.HttpClientModule, i20.HttpClientModule, []), i0.ɵmpd(1073742336, i21.HttpModule, i21.HttpModule, []), i0.ɵmpd(1073742336, i22.ɵangular_packages_forms_forms_bc, i22.ɵangular_packages_forms_forms_bc, []), i0.ɵmpd(1073742336, i22.FormsModule, i22.FormsModule, []), i0.ɵmpd(1073742336, i22.ReactiveFormsModule, i22.ReactiveFormsModule, []), i0.ɵmpd(1073742336, i37.IonicModule, i37.IonicModule, []), i0.ɵmpd(1073742336, i60.IonicImageLoader, i60.IonicImageLoader, []), i0.ɵmpd(1073742336, i1.AppModule, i1.AppModule, []), i0.ɵmpd(256, i0.ɵAPP_ROOT, true, []), i0.ɵmpd(256, i20.ɵangular_packages_common_http_http_e, "XSRF-TOKEN", []), i0.ɵmpd(256, i20.ɵangular_packages_common_http_http_f, "X-XSRF-TOKEN", []), i0.ɵmpd(256, i2.AppRootToken, i61.MyApp, []), i0.ɵmpd(256, i17.APP_BASE_HREF, "/", [])]); });
export { AppModuleNgFactory as AppModuleNgFactory };
//# sourceMappingURL=app.module.ngfactory.js.map