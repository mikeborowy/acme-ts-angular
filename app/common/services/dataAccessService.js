//insert TS module START
var app;
(function (app) {
    var common;
    (function (common) {
        var services;
        (function (services) {
            //'export' allows to use it in ddifferent places thru 'import''
            var DataAccessService = (function () {
                function DataAccessService($resource) {
                    this.$resource = $resource;
                }
                //returned type from http call => IProductResource
                DataAccessService.prototype.GetProductResource = function () {
                    return this.$resource("/api/products/:productId");
                };
                //for safe minification
                DataAccessService.$inject = ["$resource"];
                return DataAccessService;
            }());
            services.DataAccessService = DataAccessService;
            //register angular service DataAccessService class
            angular
                .module('common.services')
                .service('dataAccessService', DataAccessService);
        })(services = common.services || (common.services = {}));
    })(common = app.common || (app.common = {}));
})(app || (app = {}));
//insert TS module END
