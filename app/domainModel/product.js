//module START
var app;
(function (app) {
    var domainModel;
    (function (domainModel) {
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
        var Product = (function () {
            function Product(productId, productName, productCode, releaseDate, price, description, imageUrl) {
                this.productId = productId;
                this.productName = productName;
                this.productCode = productCode;
                this.releaseDate = releaseDate;
                this.price = price;
                this.description = description;
                this.imageUrl = imageUrl;
            }
            //methods START
            Product.prototype.CalculateDiscount = function (percent) {
                return this.price - (this.price * percent / 100);
            };
            return Product;
        }());
        domainModel.Product = Product; // ProductModel END
    })(domainModel = app.domainModel || (app.domainModel = {}));
})(app || (app = {})); //module END
