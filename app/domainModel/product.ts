//module START
module app.domainModel{

	//IProduct START
    export interface IProduct {
		productId: number;
		productName: string;
		productCode: string;
		releaseDate: Date;
		price: number;
		description: string;
		imageUrl: string;
		CalculateDiscount(percent: number): number;
	}
	//IProduct END

	// ProductModel START
	// class ProductModel implements IProduct{
	// 	productName:string;
	//	...
	// 	constructor(productName:string, ...){
	// 		this.productName = productName;
	//		this... = ...
	// 	}
	// }
	export class Product implements IProduct{

		constructor(public productId: number,
					public productName: string,
					public productCode: string,
					public releaseDate: Date,
					public price: number,
					public description: string,
					public imageUrl: string){
		}

		//methods START
		CalculateDiscount(percent: number): number {
			return this.price - ( this.price * percent/ 100); 
		}
		//methods END
		
	}// ProductModel END

}//module END

