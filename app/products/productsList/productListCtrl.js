//start of TS module
var app;
(function (app) {
    var products;
    (function (products) {
        var productsList;
        (function (productsList) {
            //ts interface END
            //angular controller (ts class) START
            var ProductListCtrl = (function () {
                function ProductListCtrl(dataAccessService) {
                    var _this = this;
                    this.dataAccessService = dataAccessService;
                    this.title = "Product List";
                    this.showImage = false;
                    this.productsArray = [];
                    var productResource = dataAccessService.GetProductResource();
                    //using callback function, data:app.domainModel.IProduct[] is an argument passed to function and it is va containing data
                    //{ this.productsArray = data; } - it contains callbaack function itself; 
                    productResource.query(function (data) {
                        _this.productsArray = data;
                        console.log(data);
                    });
                    //this not work
                    // productResource.query( function(data:app.domainModel.IProduct[]){
                    // 	this.productsArray = data;
                    // 	console.log(this.productsArray);
                    // });
                } //constructor END
                //methods implement in interface START
                ProductListCtrl.prototype.ToggleImage = function () { this.showImage = !this.showImage; };
                ProductListCtrl.prototype.OnSuccess = function (result) { console.log(result); };
                ProductListCtrl.prototype.OnError = function (result) { console.log(result); };
                //properties implement in interface END
                ProductListCtrl.$inject = ["dataAccessService"]; //inject dataAccessService to constructor and add it as fn paramter
                return ProductListCtrl;
            }());
            //angular controller (ts class) END
            //register angular controller
            angular
                .module("productManagement")
                .controller("ProductListCtrl", ProductListCtrl);
        })(productsList = products.productsList || (products.productsList = {}));
    })(products = app.products || (app.products = {}));
})(app || (app = {})); //ts module end	
