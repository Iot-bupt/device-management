package cn.edu.bupt.controller;

import cn.edu.bupt.utils.HttpUtil;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;
import io.swagger.annotations.ApiImplicitParam;
import io.swagger.annotations.ApiImplicitParams;
import io.swagger.annotations.ApiOperation;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

/**
 * Created by Administrator on 2017/12/26.
 *
 *  -- 该类的所有接口返回采用统一json
 */
@RestController
@RequestMapping("/api/service")
@Slf4j
public class ServicTableController extends DefaultThingsboardAwaredController {

    @RequestMapping(value = "/saveGroup",method = RequestMethod.POST)
    public String saveDeviceTable(@RequestBody String json) {
        String url = "http://"+getServiceManagementServer()+"/api/v1/abilityGroup";
        try{
            String responce = HttpUtil.sendPostToThingsboard(url,null,new JsonParser().parse(json).getAsJsonObject(),request.getSession());
            return retSuccess(responce);
        }catch(Exception e){
            return retFail("保存失败: - " + e.toString());
        }
    }

    @RequestMapping(value="/deleteGroup", method = RequestMethod.DELETE)
    public String deleteGroup(@RequestBody String json) {
        String url = "http://"+getServiceManagementServer()+"/api/servicetable/deleteServiceGroup";
        try{
            String responce = HttpUtil.sendPostToThingsboard(url,null,new JsonParser().parse(json).getAsJsonObject(),request.getSession());
            return retSuccess(responce);
        }catch(Exception e){
            return retFail("删除失败: - " + e.toString());
        }
    }

    @RequestMapping(value = "/saveServiceToGroup", method = RequestMethod.POST)
    public String saveServiceToGroup(@RequestBody String json) {
        String url = "http://"+getServiceManagementServer()+"/api/v1/ability";
        try{
            JsonObject asJsonObject = (JsonObject)new JsonParser().parse(json);
            String responce = HttpUtil.sendPostToThingsboard(url,null, asJsonObject, request.getSession());
            return retSuccess(responce);
        }catch(Exception e){
            return retFail("保存失败: - " + e.toString());
        }
    }

    @RequestMapping(value = "/deleteServiceFromGroup",method = RequestMethod.DELETE)
    public String deleteServiceFromGroup(@RequestParam int  abilityId) {
        // model
        // manufacture
        // deviceType
        // df
        String url = "http://"+getServiceManagementServer()+"/api/v1/ability/"+abilityId;
        try{
           // JsonObject asJsonObject = (JsonObject)new JsonParser().parse(json);
            String responce = HttpUtil.sendDeletToThingsboard(url, request.getSession());
            return retSuccess(responce);
        }catch(Exception e){
            return retFail("删除失败: - " + e.toString());
        }
    }

//    @RequestMapping(value = "/serviceTables",method = RequestMethod.GET)
//    public String serviceTableLists() {
//        String url = "http://"+getSmartServiceManagementServer()+"/api/ability/getAll";
//        try{
//            String s = HttpUtil.sendGetToThingsboard(url, null, request.getSession());
//            return retSuccess(s) ;
//        }catch(Exception e){
//            return retFail("保存失败: - " + e.toString());
//        }
//    }

    @RequestMapping(value = "/{modelId}/tail", method = RequestMethod.GET)
    public String serviceTableList(@PathVariable String modelId) {
        String requestAddr = String.format("/api/v1/ability/%s", modelId) ;
        String url = "http://"+getServiceManagementServer() + requestAddr;
        try{
            String response = HttpUtil.sendGetToThingsboard(url, null, request.getSession());
            return retSuccess(response) ;
        }catch(Exception e){
            return retFail("can't link to thingsboard: " + e) ;
        }
    }

    @ApiOperation(value = "获取所有厂商信息", notes = "获取所有厂商信息")
    @RequestMapping(value = "/manufactures", method = RequestMethod.GET)
    public String serviceManufacture(@RequestParam(required = false) String keyword){
        String url = "http://" + getServiceManagementServer() + "/api/v1/abilityGroup/manufacturers";
        if(keyword!=null) url += "?keyword="+keyword;
        try{
            String s = HttpUtil.sendGetToThingsboard(url, null, request.getSession());
            return retSuccess(s) ;
        }catch (Exception e){
            return retFail("获取厂商失败: - " + e.toString());
        }
    }

    @ApiOperation(value = "返回某一厂商下的所有设备类型", notes = "返回某一厂商下的所有设备类型")
    @ApiImplicitParam(name = "manufacture", value = "厂商", required = true, dataType = "String", paramType = "path")
    @RequestMapping(value = "/{manufacture}/deviceTypes", method = RequestMethod.GET)
    public String serviceDeviceType(@PathVariable String manufactureId,@RequestParam(required = false) String keyword){
        String requestAddr = String.format("/api/v1/abilityGroup/deviceTypes?manufactureId=%s", manufactureId) ;
        String url = "http://" + getServiceManagementServer() + requestAddr;
        if(keyword!=null){
            url +="&keyword="+keyword;
        }
        try{
            String s = HttpUtil.sendGetToThingsboard(url, null, request.getSession());
            return retSuccess(s) ;
        }catch (Exception e){
            return retFail("获取设备类型失败: - " + e.toString());
        }
    }

    @ApiOperation(value = "返回固定某一厂商和设备类型下的所有型号", notes = "返回固定某一厂商和设备类型下的所有型号")
    @ApiImplicitParams({ @ApiImplicitParam(name = "manufacture", value = "厂商", required = true, dataType = "String",paramType = "path"),
            @ApiImplicitParam(name = "deviceType", value = "设备类型", required = true, dataType = "String",paramType = "path")})
    @RequestMapping(value = "/{manufactureId}/{deviceTypeId}/models", method = RequestMethod.GET)
    public String serviceModel(@PathVariable String manufactureId,@PathVariable String deviceTypeId,@RequestParam(required = false)  String keyword){
        String requestAddr = String.format("/api/v1/abilityGroup/models?manufactureId=%s&deviceTypeId=%s", manufactureId, deviceTypeId) ;
        String url = "http://"+getServiceManagementServer()+ requestAddr;
        if(keyword!=null){
            url +="&keyword="+keyword;
        }
        try{
            String s = HttpUtil.sendGetToThingsboard(url, null, request.getSession());
            return retSuccess(s) ;
        }catch (Exception e){
            return retFail("获取型号失败: - " + e.toString());
        }
    }

}
