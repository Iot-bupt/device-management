
mainApp.controller("serviceCtrl",["$scope","$location",function ($scope,$location) {
    var mainApp = angular.module("mainApp",["ngRoute","ngAnimate"]);

    $scope.Bmanagement =
        [{serviceName:216,serviceType:"�豸",serviceDescription:"Tpss"},
        {serviceName:217,serviceType:"�豸",serviceDescription:"Tps"},
        {serviceName:218,serviceType:"�豸",serviceDescription:"Tp"},
        {serviceName:219,serviceType:"�豸",serviceDescription:"T"}]
    /*mainApp.filter('search',function () {
        return function (input,serviceName) {
            var result = [];
            console.log("serviceName param=" + serviceName);
            console.log("arguments[1] param="+ arguments[1]);
            if(typeof (serviceName)!= 'undefined'&& serviceName!=''){
                angular.forEach(input,function (item) {
                    if(item.serviceName==serviceName){
                        result.push(item);
                    }
                });
                return result;
            }
            return input;
        };
    });*/
}]);

/*������
var mainApp = angular.module("mainApp",[]);
mainApp.controller("serviceCtrl",function ($scope) {
    $scope.managements = [{vendor:216,equipmentType:"�豸1",equipmentModel:"Tpss"},
        {vendor:215,equipmentType:"�豸2",equipmentModel:"Tps"},
        {vendor:214,equipmentType:"�豸3",equipmentModel:"Tp"},
        {vendor:213,equipmentType:"�豸4",equipmentModel:"T"}]
});
app.filter('search',function () {
    return function (input,equipmentType) {
        var result = [];
        console.log("equipmentType param=" + equipmentType);
        console.log("arguments[1] param="+ arguments[1]);
        if(typeof (equipmentType)!= 'undefined'&& equipmentType!=''){
            angular.forEach(input,function (item) {
                if(item.equipmentType==equipmentType){
                    result.push(item);
                }
            });
            return result;
        }
        return input;
    };
});*/

