module app {
        var productManagement = angular.module("productManagement",
                [
                "ngRoute",
                "common.services",
                "productResourceMock"
                ]);

        productManagement.config(RouteConfig);

        RouteConfig.$inject = ["$routeProvider"]; 
        function RouteConfig($routeProvider: ng.route.IRouteProvider):void {
                
                $routeProvider
                        .when("/productList", {
                                templateUrl: "/app/products/productsList/productListView.html",
                                controller: "ProductListCtrl as vm"
                        })
                        .when("/productDetail/:productIdParam", {
                                templateUrl: "/app/products/productDetail/productDetailView.html",
                                controller: "ProductDetailCtrl as vm"
                        })
                        .otherwise("/productList");
        }
}

//angular modules:
//angular.module("productManagement",["ngRoute","common.services","productResourceMock"]);
//angular.module("productManagement").controller("ProductListCtrl", ProductListCtrl);
//angular.module("common.services", ["ngResource"]);
//angular.module('common.services').service('dataAccessService', DataAccessService);