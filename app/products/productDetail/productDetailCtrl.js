var app;
(function (app) {
    var products;
    (function (products) {
        var productDetail;
        (function (productDetail) {
            var ProductDetailCtrl = (function () {
                function ProductDetailCtrl($routeParams, dataAccessService) {
                    var _this = this;
                    this.$routeParams = $routeParams;
                    this.dataAccessService = dataAccessService;
                    this.title = "productDetail";
                    var productResource = dataAccessService.GetProductResource();
                    //using callback function, data:app.domainModel.IProduct[] is an argument passed to function and it is va containing data
                    //{ this.productsArray = data; } - it contains callbaack function itself; 
                    productResource.get({ productId: $routeParams.productIdParam }, //prductId must match like in dataAccessService.ts
                    function (data) {
                        _this.product = data;
                    });
                }
                ProductDetailCtrl.$inject = ["$routeParams", "dataAccessService"]; //inject dataAccessService to constructor and add it as fn paramter
                return ProductDetailCtrl;
            }());
            angular
                .module("productManagement")
                .controller("ProductDetailCtrl", ProductDetailCtrl);
        })(productDetail = products.productDetail || (products.productDetail = {}));
    })(products = app.products || (app.products = {}));
})(app || (app = {}));
