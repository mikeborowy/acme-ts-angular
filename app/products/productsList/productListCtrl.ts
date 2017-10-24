//start of TS module
module app.products.productsList{
	
	//ts interface START
	interface IProductListViewModel{
		title: string;
		showImage: boolean;
		// products: any[];
		productsArray: app.domainModel.IProduct[];
		ToggleImage():void
	}
	//ts interface END
	//angular controller (ts class) START
	class ProductListCtrl implements IProductListViewModel {
		//properties implement in interface START
		title: string;
		showImage: boolean;
		productsArray: app.domainModel.IProduct[];
		//properties implement in interface END
		
		static $inject = ["dataAccessService"]; //inject dataAccessService to constructor and add it as fn paramter
		constructor(private dataAccessService:app.common.services.DataAccessService) {

			this.title = "Product List";
			this.showImage = false;
			this.productsArray = [];
			var productResource = dataAccessService.GetProductResource();
			//using callback function, data:app.domainModel.IProduct[] is an argument passed to function and it is va containing data
			//{ this.productsArray = data; } - it contains callbaack function itself; 
			productResource.query( 
				(data:app.domainModel.IProduct[]) => {
					this.productsArray = data;
					console.log(data);
				}  
			)
			//this not work
			// productResource.query( function(data:app.domainModel.IProduct[]){
			// 	this.productsArray = data;
			// 	console.log(this.productsArray);
			// });
		}//constructor END

		//methods implement in interface START
		ToggleImage(): void {this.showImage = !this.showImage;}
		OnSuccess(result:any):void { console.log(result); }
		OnError(result:any):void { console.log(result); }
		//methods implement in interface END
	}
	//angular controller (ts class) END
	//register angular controller
	angular
		.module("productManagement")
		.controller("ProductListCtrl", ProductListCtrl);

}//ts module end	

