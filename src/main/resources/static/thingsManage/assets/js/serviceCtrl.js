mainApp.controller("serviceCtrl",function ($scope,$resource) {


});
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
/*������var mainApp = angular.module("mainApp",[]);
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
});
//��ȡ���������չʾ
    $scope.showModel = true;
    var serviceManagement = $resource('/api/service/manufactures');
    $scope.serviceManagements = serviceManagement.query(function(){
        //��ʾģ��
        $scope.item = $scope.serviceManagements[0];
    });*/
/*ɾ���������js����deleteSM()����*/


