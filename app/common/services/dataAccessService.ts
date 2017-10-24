//insert TS module START
module app.common.services{

    interface IProductResource 
        extends ng.resource.IResource<app.domainModel.IProduct> {
    }

    interface IDataAccessService{
        GetProductResource(): ng.resource.IResourceClass<IProductResource>;  
    }

    //'export' allows to use it in ddifferent places thru 'import''
    export class DataAccessService
        implements IDataAccessService {

        //for safe minification
        static $inject = ["$resource"];
        constructor(private $resource: ng.resource.IResourceService){}
        
        //returned type from http call => IProductResource
        GetProductResource(): ng.resource.IResourceClass<IProductResource>{
            return this.$resource("/api/products/:productId");            
        }
    }
    //register angular service DataAccessService class
    angular
        .module('common.services')
        .service('dataAccessService', DataAccessService);
}
//insert TS module END
