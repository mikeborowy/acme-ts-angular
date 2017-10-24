module app.products.productDetail{

        interface IProductDetailModel {
            title: string;
            product: app.domainModel.IProduct;
        }

        interface IRouteParameter extends ng.route.IRouteParamsService{
            productIdParam:number; //must match like in route config in app.ts
        }

        class ProductDetailCtrl 
            implements IProductDetailModel{

            title:string;
            product: app.domainModel.IProduct;

            static $inject = ["$routeParams","dataAccessService"]; //inject dataAccessService to constructor and add it as fn paramter
		    constructor(private $routeParams:IRouteParameter, private dataAccessService:app.common.services.DataAccessService) {

                this.title = "productDetail";
                var productResource = dataAccessService.GetProductResource();
                //using callback function, data:app.domainModel.IProduct[] is an argument passed to function and it is va containing data
			    //{ this.productsArray = data; } - it contains callbaack function itself; 
                productResource.get( 
                    {productId: $routeParams.productIdParam}, //prductId must match like in dataAccessService.ts
                    (data:app.domainModel.IProduct) => {
                    this.product = data;
                });
            }
        }

    	angular
		.module("productManagement")
		.controller("ProductDetailCtrl", ProductDetailCtrl);
}