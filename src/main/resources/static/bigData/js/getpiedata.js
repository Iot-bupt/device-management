for (var i =0; i<25; i++){
    var h = document.createElement('option');
    h.innerHTML = i;
    document.getElementById('fnameh').appendChild(h);
}
for (var j =0; j<61; j++){
    var m = document.createElement('option');
    m.innerHTML = j;
    document.getElementById('fnamemin').appendChild(m);
}
for (var k =0; k<61; k++){
    var s = document.createElement('option');
    s.innerHTML = k;
    document.getElementById('fnames').appendChild(s);
}
for (var i1 =0; i1<25; i1++){
    var h1 = document.createElement('option');
    h1.innerHTML = i1;
    document.getElementById('fnameh1').appendChild(h1);
}
for (var j1 =0; j1<61; j1++){
    var m1 = document.createElement('option');
    m1.innerHTML = j1;
    document.getElementById('fnamemin1').appendChild(m1);
}
for (var k1 =0; k1<61; k1++){
    var s1 = document.createElement('option');
    s1.innerHTML = k1;
    document.getElementById('fnames1').appendChild(s1);
}
$("#main").css("display","none");
$("#main1").css("display","none");
$("#main2").css("display","none");
$("#main3").css("display","none");
$("#main").fadeIn(1000);
$("#main1").fadeIn(2000);
$("#main2").fadeIn(3000);
$("#main3").fadeIn(4000);

/*function getData() {

    document.getElementById("YWaitDialog").setAttribute("style","display:flex;");
    function getXmlHttpObject() {

        var xmlHttpRequest;
        if(window.ActiveXObject){
            xmlHttpRequest = new ActiveXObject("Microsoft.XMLHTTP");
        }
        else{
            xmlHttpRequest = new XMLHttpRequest();
        }
        return xmlHttpRequest;

    }

    var myXmlHttpRequest="";
    myXmlHttpRequest = getXmlHttpObject();
    if(myXmlHttpRequest){
        //var url = "toajax?username=" + document.getElementById("username").value;
        var url = "http://39.104.186.210:8090/api/analysis/device?tenantId=1";//url="http://39.104.186.210:8090/api/analysis/device?tenantId=1";getpiedata
        var data = null;
        //myXmlHttpRequest.open("get",url,true);
        myXmlHttpRequest.open("post",url,true);
        myXmlHttpRequest.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
        myXmlHttpRequest.onreadystatechange = proce;
        //myXmlHttpRequest.send(null);
        myXmlHttpRequest.send(data);
    }

    function proce() {

        if (myXmlHttpRequest.readyState == 4) {

            var mes = myXmlHttpRequest.responseText;
            window.alert(mes);
            $("#main").css("display","none");
            $("#main1").css("display","none");
            $("#main2").css("display","none");
            $("#main3").css("display","none");
            $("#main").fadeIn(3000);
            $("#main1").fadeIn(5000);
            $("#main2").fadeIn(7000);
            $("#main3").fadeIn(9000);
            document.getElementById("YWaitDialog").setAttribute("style","display:none;");
            var mes1 = JSON.parse(mes);
            meso = eval("(" + mes1 + ")");
            // 基于准备好的dom，初始化echarts实例
            var myChart = echarts.init(document.getElementById('main'));

            option = {
                title : {
                    text: '设备数量',
                    subtext: '',
                    x:'center'
                },
                tooltip : {
                    trigger: 'item',
                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                },
                legend: {
                    orient: 'vertical',
                    left: 'left',
                    data: ['压力传感器','温度传感器','湿度传感器','形变传感器','速率传感器','光照传感器']
                },
                series : [
                    {
                        name: '传感器数量',
                        type: 'pie',
                        radius : '55%',
                        center: ['50%', '60%'],
                        data:[
                            {value:meso.data.deviceCount.pressure, name:'压力传感器'},
                            {value:meso.data.deviceCount.temperature, name:'温度传感器'},
                            {value:meso.data.deviceCount.humidity, name:'湿度传感器'},
                            {value:meso.data.deviceCount.deformation, name:'形变传感器'},
                            {value:meso.data.deviceCount.velocity, name:'速率传感器'},
                            {value:meso.data.deviceCount.light, name:'光照传感器'}
                        ],
                        itemStyle: {
                            emphasis: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        }
                    }
                ]
            };

            // 使用刚指定的配置项和数据显示图表。
            myChart.setOption(option);

            // 基于准备好的dom，初始化echarts实例
            var myChart1 = echarts.init(document.getElementById('main1'));

            option1 = {
                title : {
                    text: '数据数量',
                    subtext: '',
                    x:'center'
                },
                tooltip : {
                    trigger: 'item',
                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                },
                legend: {
                    orient: 'vertical',
                    left: 'left',
                    data: ['压力传感器','温度传感器','湿度传感器','形变传感器','速率传感器','光照传感器']
                },
                series : [
                    {
                        name: '传感器数量',
                        type: 'pie',
                        radius : '55%',
                        center: ['50%', '60%'],
                        data:[
                            {value:meso.data.dataCount.pressure, name:'压力传感器'},
                            {value:meso.data.dataCount.temperature, name:'温度传感器'},
                            {value:meso.data.dataCount.humidity, name:'湿度传感器'},
                            {value:meso.data.dataCount.deformation, name:'形变传感器'},
                            {value:meso.data.dataCount.velocity, name:'速率传感器'},
                            {value:meso.data.dataCount.light, name:'光照传感器'}
                        ],
                        itemStyle: {
                            emphasis: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        }
                    }
                ]
            };

            // 使用刚指定的配置项和数据显示图表。
            myChart1.setOption(option1);

            // 基于准备好的dom，初始化echarts实例
            var myChart2 = echarts.init(document.getElementById('main2'));

            option2 = {
                title : {
                    text: '正常数据数量',
                    subtext: '',
                    x:'center'
                },
                tooltip : {
                    trigger: 'item',
                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                },
                legend: {
                    orient: 'vertical',
                    left: 'left',
                    data: ['压力传感器','温度传感器','湿度传感器','形变传感器','速率传感器','光照传感器']
                },
                series : [
                    {
                        name: '传感器数量',
                        type: 'pie',
                        radius : '55%',
                        center: ['50%', '60%'],
                        data:[
                            {value:meso.data.usualDataCount.pressure, name:'压力传感器'},
                            {value:meso.data.usualDataCount.temperature, name:'温度传感器'},
                            {value:meso.data.usualDataCount.humidity, name:'湿度传感器'},
                            {value:meso.data.usualDataCount.deformation, name:'形变传感器'},
                            {value:meso.data.usualDataCount.velocity, name:'速率传感器'},
                            {value:meso.data.usualDataCount.light, name:'光照传感器'}
                        ],
                        itemStyle: {
                            emphasis: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        }
                    }
                ]
            };

            // 使用刚指定的配置项和数据显示图表。
            myChart2.setOption(option2);

            // 基于准备好的dom，初始化echarts实例
            var myChart3 = echarts.init(document.getElementById('main3'));

            option3 = {
                title : {
                    text: '正常数据占有率',
                    subtext: '',
                    x:'center'
                },
                tooltip : {
                    trigger: 'item',
                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                },
                legend: {
                    orient: 'vertical',
                    left: 'left',
                    data: ['压力传感器','温度传感器','湿度传感器','形变传感器','速率传感器','光照传感器']
                },
                series : [
                    {
                        name: '传感器数量',
                        type: 'pie',
                        radius : '55%',
                        center: ['50%', '60%'],
                        data:[
                            {value:meso.data.usualDataRate.pressure, name:'压力传感器'},
                            {value:meso.data.usualDataRate.temperature, name:'温度传感器'},
                            {value:meso.data.usualDataRate.humidity, name:'湿度传感器'},
                            {value:meso.data.usualDataRate.deformation, name:'形变传感器'},
                            {value:meso.data.usualDataRate.velocity, name:'速率传感器'},
                            {value:meso.data.usualDataRate.light, name:'光照传感器'}
                        ],
                        itemStyle: {
                            emphasis: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        }
                    }
                ]
            };

            // 使用刚指定的配置项和数据显示图表。
            myChart3.setOption(option3);
            //window.alert(meso.data[0]["0"]);
            //window.alert(Object.keys(meso.data).length);*/
            /*for (var i = 0; i < splitNum; i++) {
                xAxisData.push(i);
            }
            for (var i = 0; i < Object.keys(meso.data).length; i++) {
                data1.push(meso.data[i]["0"]);
            }
            for (var i = 0; i < Object.keys(meso.data).length; i++) {
                data2.push(meso.data[i]["2"]);
            }
            for (var i = 0; i < Object.keys(meso.data).length; i++) {
                data3.push(meso.data[i]["1"]);
            }
            for (var i = 0; i < Object.keys(meso.data).length; i++) {
                data4.push(meso.data[i]["3"]);
            }
            for (var i = 0; i < Object.keys(meso.data).length; i++) {
                data5.push(meso.data[i]["4"]);
            }
            for (var i = 0; i < Object.keys(meso.data).length; i++) {
                data6.push(meso.data[i]["5"]);
            }
            for (var i = 0; i < Object.keys(meso.data).length; i++) {
                data7.push(meso.data[i]["6"]);
            }*/
        /*}
    }
}*/

function timestampToTime(timestamp) {
    var date = new Date(timestamp);
    Y = date.getFullYear() + '-';
    M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
    D = (date.getDate()+1 < 10 ? '0'+(date.getDate()) : date.getDate()) + '\n';
    if (date.getHours()<10){
        h = "0"+date.getHours() + ':';
    }else {
        h = date.getHours() + ':';
    }
    if (date.getMinutes()<10){
        m = "0"+date.getMinutes() + ':';
    }else {
        m = date.getMinutes() + ':';
    }
    if (date.getSeconds()<10){
        s = "0"+date.getSeconds();
    }else {
        s = date.getSeconds();
    }
    return Y+M+D+h+m+s;
}
function getXmlHttpObject() {

    var xmlHttpRequest;
    if(window.ActiveXObject){
        xmlHttpRequest = new ActiveXObject("Microsoft.XMLHTTP");
    }
    else{
        xmlHttpRequest = new XMLHttpRequest();
    }
    return xmlHttpRequest;
}
var myXmlHttpRequest1 = getXmlHttpObject();
var tenantId;
if(myXmlHttpRequest1){
    var url = "/api/rule/tenant";
    myXmlHttpRequest1.open("get",url,false);
    myXmlHttpRequest1.onreadystatechange = proce1;
    myXmlHttpRequest1.send(null);
}
function  proce1() {
    if(myXmlHttpRequest1.readyState == 4){

        var tenantIdj = myXmlHttpRequest1.responseText;
        var tenantIde = JSON.parse(tenantIdj);
        //var tenantIde = eval("("+tenantId+")");
        tenantId = tenantIde.tenantId;
    }
}
recentBarAjax('1w');

var myXmlHttpRequest2=getXmlHttpObject();
var inputStartDate = "";
var inputEndDate = "";
function showData() {

    inputStartDate = document.getElementById('fname').value;
    inputEndDate = document.getElementById('fname1').value;
    var h = $('#fnameh').val();
    var min = $('#fnamemin').val();
    var s = $('#fnames').val();
    var h1 = $('#fnameh1').val();
    var min1 = $('#fnamemin1').val();
    var s1 = $('#fnames1').val();
    if (inputStartDate == ""){
        window.alert("请输入开始时间");
        $('#modelchange').removeAttr("data-dismiss");
    }else if(inputEndDate == ""){
        window.alert("请输入结束时间");
        $('#modelchange').removeAttr("data-dismiss");
    }else {
        document.getElementById("YWaitDialog").setAttribute("style","display:flex;");
        $('#modelchange').attr("data-dismiss","modal");
        if(myXmlHttpRequest2){
            //var url = "toajax?username=" + document.getElementById("username").value;
            var url = "http://39.104.186.210:8090/api/analysis/device";//url="http://39.104.186.210:8090/api/analysis/data";getselectdata
            var startTime = new Date(inputStartDate);
            var startTimeChuo = startTime.getTime()+h*3600*1000+min*60*1000+s*1000-8*3600*1000;
            var endTime = new Date(inputEndDate);
            var endTimeChuo = endTime.getTime()+h1*3600*1000+min1*60*1000+s1*1000-8*3600*1000;
            var data = "tenantId="+tenantId+"&startTime="+startTimeChuo+"&endTime="+endTimeChuo;
            //myXmlHttpRequest.open("get",url,true);
            myXmlHttpRequest2.open("post",url,true);
            myXmlHttpRequest2.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
            myXmlHttpRequest2.onreadystatechange = proce2;
            //myXmlHttpRequest.send(null);
            myXmlHttpRequest2.send(data);
        }

        function proce2() {

            if (myXmlHttpRequest2.readyState == 4) {
                document.getElementById("YWaitDialog").setAttribute("style","display:none;");
                var mes = myXmlHttpRequest2.responseText;
                if(mes == ""){
                    window.alert("返回值为null");
                }else {
                    var mes1 = JSON.parse(mes);
                    meso = eval("(" + mes1 + ")");
                    if(meso.status == 'success'){
                        if(h<10){
                            h = "0" + h;
                        }
                        if(min<10){
                            min = "0" + min;
                        }
                        if(s<10){
                            s = "0" + s;
                        }
                        if(h1<10){
                            h1 = "0" + h1;
                        }
                        if(min1<10){
                            min1 = "0" + min1;
                        }
                        if(s1<10){
                            s1 = "0" + s1;
                        }
                        var myChart = echarts.init(document.getElementById('main'));

                        option = {
                            title : {
                                text: '设备数量',
                                subtext: '精确查询：'+inputStartDate+' '+h+':'+min+':'+s+' - '+inputEndDate+' '+h1+':'+min1+':'+s1,
                                x:'center'
                            },
                            tooltip : {
                                trigger: 'item',
                                formatter: "{a} <br/>{b} : {c} ({d}%)"
                            },
                            legend: {
                                orient: 'vertical',
                                left: 'left',
                                data: ['压力传感器','温度传感器','湿度传感器','形变传感器','速率传感器','光照传感器']
                            },
                            series : [
                                {
                                    name: '传感器数量',
                                    type: 'pie',
                                    radius : '55%',
                                    center: ['50%', '60%'],
                                    data:[
                                        {value:meso.data.deviceCount.pressure, name:'压力传感器'},
                                        {value:meso.data.deviceCount.temperature, name:'温度传感器'},
                                        {value:meso.data.deviceCount.humidity, name:'湿度传感器'},
                                        {value:meso.data.deviceCount.deformation, name:'形变传感器'},
                                        {value:meso.data.deviceCount.velocity, name:'速率传感器'},
                                        {value:meso.data.deviceCount.light, name:'光照传感器'}
                                    ],
                                    itemStyle: {
                                        emphasis: {
                                            shadowBlur: 10,
                                            shadowOffsetX: 0,
                                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                                        }
                                    }
                                }
                            ]
                        };

                        // 使用刚指定的配置项和数据显示图表。
                        myChart.clear();
                        myChart.setOption(option);

                        // 基于准备好的dom，初始化echarts实例
                        var myChart1 = echarts.init(document.getElementById('main1'));

                        option1 = {
                            title : {
                                text: '数据数量',
                                subtext: '精确查询：'+inputStartDate+' '+h+':'+min+':'+s+' - '+inputEndDate+' '+h1+':'+min1+':'+s1,
                                x:'center'
                            },
                            tooltip : {
                                trigger: 'item',
                                formatter: "{a} <br/>{b} : {c} ({d}%)"
                            },
                            legend: {
                                orient: 'vertical',
                                left: 'left',
                                data: ['压力传感器','温度传感器','湿度传感器','形变传感器','速率传感器','光照传感器']
                            },
                            series : [
                                {
                                    name: '传感器数量',
                                    type: 'pie',
                                    radius : '55%',
                                    center: ['50%', '60%'],
                                    data:[
                                        {value:meso.data.dataCount.pressure, name:'压力传感器'},
                                        {value:meso.data.dataCount.temperature, name:'温度传感器'},
                                        {value:meso.data.dataCount.humidity, name:'湿度传感器'},
                                        {value:meso.data.dataCount.deformation, name:'形变传感器'},
                                        {value:meso.data.dataCount.velocity, name:'速率传感器'},
                                        {value:meso.data.dataCount.light, name:'光照传感器'}
                                    ],
                                    itemStyle: {
                                        emphasis: {
                                            shadowBlur: 10,
                                            shadowOffsetX: 0,
                                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                                        }
                                    }
                                }
                            ]
                        };

                        // 使用刚指定的配置项和数据显示图表。
                        myChart1.clear();
                        myChart1.setOption(option1);

                        // 基于准备好的dom，初始化echarts实例
                        var myChart2 = echarts.init(document.getElementById('main2'));

                        option2 = {
                            title : {
                                text: '正常数据数量',
                                subtext: '精确查询：'+inputStartDate+' '+h+':'+min+':'+s+' - '+inputEndDate+' '+h1+':'+min1+':'+s1,
                                x:'center'
                            },
                            tooltip : {
                                trigger: 'item',
                                formatter: "{a} <br/>{b} : {c} ({d}%)"
                            },
                            legend: {
                                orient: 'vertical',
                                left: 'left',
                                data: ['压力传感器','温度传感器','湿度传感器','形变传感器','速率传感器','光照传感器']
                            },
                            series : [
                                {
                                    name: '传感器数量',
                                    type: 'pie',
                                    radius : '55%',
                                    center: ['50%', '60%'],
                                    data:[
                                        {value:meso.data.usualDataCount.pressure, name:'压力传感器'},
                                        {value:meso.data.usualDataCount.temperature, name:'温度传感器'},
                                        {value:meso.data.usualDataCount.humidity, name:'湿度传感器'},
                                        {value:meso.data.usualDataCount.deformation, name:'形变传感器'},
                                        {value:meso.data.usualDataCount.velocity, name:'速率传感器'},
                                        {value:meso.data.usualDataCount.light, name:'光照传感器'}
                                    ],
                                    itemStyle: {
                                        emphasis: {
                                            shadowBlur: 10,
                                            shadowOffsetX: 0,
                                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                                        }
                                    }
                                }
                            ]
                        };

                        // 使用刚指定的配置项和数据显示图表。
                        myChart2.clear();
                        myChart2.setOption(option2);

                        var myChart3 = echarts.init(document.getElementById('main3'));
                        option3 = {
                            title: {
                                text: '正常数据比例',
                                subtext: '精确查询：'+inputStartDate+' '+h+':'+min+':'+s+' - '+inputEndDate+' '+h1+':'+min1+':'+s1,
                                x: 'center'
                            },
                            tooltip: {},
                            xAxis: {
                                data: ['压力传感','温度传感','湿度传感','形变传感','速度传感','光照传感'],
                                silent: false,
                                splitLine: {
                                    show: false
                                }
                            },
                            yAxis: {
                                name: '百分率'
                            },
                            series: [{
                                name: '百分率',
                                type: 'bar',
                                barWidth: 25,
                                data: [
                                    {value:meso.data.usualDataCount.pressure,itemStyle:{color: '#b34038'}},
                                    {value:meso.data.usualDataCount.temperature,itemStyle:{color: '#c9856b'}},
                                    {value:meso.data.usualDataCount.humidity,itemStyle:{color: '#9cc5b0'}},
                                    {value:meso.data.usualDataCount.deformation,itemStyle:{color: '#7d9e85'}},
                                    {value:meso.data.usualDataCount.velocity,itemStyle:{color: '#6f9fa7'}},
                                    {value:meso.data.usualDataCount.light,itemStyle:{color: '#344553'}}
                                ],
                                animationDelay: function (idx) {
                                    return idx * 10;
                                }
                            }
                            ],
                            animationEasing: 'elasticOut',
                            animationDelayUpdate: function (idx) {
                                return idx * 5;
                            }
                        };
                        myChart3.clear();
                        myChart3.setOption(option3);
                    }else {
                        window.alert("没有匹配的数据");
                    }
                }
            }
        }
    }
}

/*var navCount;
navCount = localStorage.getItem("navCount");
if(navCount==null){
    navCount=0;
    localStorage.setItem("navCount",navCount);
}
if(navCount%2==1){
    $("#test1").val("显示导航栏");
    $("nav").html(null);
    $("nav").css("width","0");
    $("#navid").css("margin-left","8.5%");
}else {
    $("#test1").val("隐藏导航栏");
}
$("#test1").click(
    function () {
        navCount=localStorage.getItem("navCount");
        if(navCount%2==0){
            $("nav").html(null);
            $("nav").css("width","0");
            $("#navid").css("margin-left","8.5%");
            $("#test1")[0].value="显示导航栏";
        }else {
            $("nav").html("<ul>\n" +
                "        <li><a href=\"device1.html\"><span class=\"icon\">&#128202;</span>首&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;页</a></li>\n" +
                "        <li><a href=\"start.html\"><span class=\"icon\">&#128200;</span>设备统计</a></li>\n" +
                "        <li><a href=\"model.html\"><span class=\"icon\">&#128201;</span>模型仓库</a></li>\n" +
                "        <li class=\"section\"><a href=\"hisdata.html\"><span class=\"icon\">&#128196;</span>海量分析</a></li><!--128711-->\n" +
                "    </ul>");
            $("nav").css("width","14.58%");
            showTheme();
            $("#navid").css("margin-left","0%");
            $("#test1").val("隐藏导航栏");
        }
        navCount++;
        localStorage.setItem("navCount",navCount);
    }
);*/

function recentBarAjax(days) {
    var myXmlHttpRequest3 = getXmlHttpObject();
    if(myXmlHttpRequest3){
        var url3 = "http://39.104.186.210:8090/api/analysis/recent-device?tenantId="+tenantId+"&flag="+days;
        myXmlHttpRequest3.open("get",url3,true);
        myXmlHttpRequest3.onreadystatechange = proce3;
        myXmlHttpRequest3.send(null);
    }
    function  proce3() {
        if(myXmlHttpRequest3.readyState == 4){

            var subtext = "";
            if (days == '1d'){
                subtext = '近一天';
            }else if (days == '3d'){
                subtext = '近三天';
            }else if (days == '1w'){
                subtext = '近一周';
            }else if (days == '1m'){
                subtext = '近一月';
            }else {
                window.alert("输入有误");
            }
            var data1 = [];
            var data2 = [];
            var data3 = [];
            var data4 = [];
            var lengend1 = [];
            var lengend2 = [];
            var lengend3 = [];
            var xdata = [];
            var colorGroup = ['#b34038','#c9856b','#9cc5b0','#7d9e85','#6f9fa7','#344553'];
            var j = 0;
            var mohuGroup = myXmlHttpRequest3.responseText;
            var mohuGroup1 = JSON.parse(mohuGroup);
            var mohuGroup2 = eval("("+mohuGroup1+")");
            for (var item1 in mohuGroup2.deviceCount){
                var itemname1 = "";
                if (item1 == 'velocity'){
                    itemname1 = "速度传感";
                }else if (item1 == 'humidity'){
                    itemname1 = "湿度传感";
                }else if (item1 == 'light'){
                    itemname1 = "光照传感";
                }else if (item1 == 'pressure'){
                    itemname1 = "压力传感";
                }else if (item1 == 'temperature'){
                    itemname1 = "温度传感";
                }else if (item1 == 'deformation'){
                    itemname1 = "形变传感";
                }else {
                    itemname1 = item1;
                }
                var json1 = {value:mohuGroup2.deviceCount[item1], name:itemname1};
                data1.push(json1);
                lengend1.push(itemname1);
            }
            for (var item2 in mohuGroup2.dataCount){
                var itemname2 = "";
                if (item2 == 'velocity'){
                    itemname2 = "速度传感";
                }else if (item2 == 'humidity'){
                    itemname2 = "湿度传感";
                }else if (item2 == 'light'){
                    itemname2 = "光照传感";
                }else if (item2 == 'pressure'){
                    itemname2 = "压力传感";
                }else if (item2 == 'temperature'){
                    itemname2 = "温度传感";
                }else if (item2 == 'deformation'){
                    itemname2 = "形变传感";
                }else {
                    itemname2 = item2;
                }
                var json2 = {value:mohuGroup2.dataCount[item2], name:itemname2};
                data2.push(json2);
                lengend2.push(itemname2);

            }
            for (var item3 in mohuGroup2.usualDataCount){
                var itemname3 = "";
                if (item3 == 'velocity'){
                    itemname3 = "速度传感";
                }else if (item3 == 'humidity'){
                    itemname3 = "湿度传感";
                }else if (item3 == 'light'){
                    itemname3 = "光照传感";
                }else if (item3 == 'pressure'){
                    itemname3 = "压力传感";
                }else if (item3 == 'temperature'){
                    itemname3 = "温度传感";
                }else if (item3 == 'deformation'){
                    itemname3 = "形变传感";
                }else {
                    itemname3 = item3;
                }
                var json3 = {value:mohuGroup2.usualDataCount[item3], name:itemname3};
                data3.push(json3);
                lengend3.push(itemname3);
            }
            for (var item4 in mohuGroup2.usualDataRate){
                var itemname4 = "";
                if (item4 == 'velocity'){
                    itemname4 = "速度传感";
                }else if (item4 == 'humidity'){
                    itemname4 = "湿度传感";
                }else if (item4 == 'light'){
                    itemname4 = "光照传感";
                }else if (item4 == 'pressure'){
                    itemname4 = "压力传感";
                }else if (item4 == 'temperature'){
                    itemname4 = "温度传感";
                }else if (item4 == 'deformation'){
                    itemname4 = "形变传感";
                }else {
                    itemname4 = item4;
                }
                var json4 = {value:mohuGroup2.usualDataRate[item4],itemStyle:{color: colorGroup[j]}};
                j++;
                data4.push(json4);
                xdata.push(itemname4);
            }
            drawRecentBar(subtext,lengend1,lengend2,lengend3,data1,data2,data3,data4,xdata)
        }
    }
}
$('#mohuquery').change(
    function () {
        var day = $('#mohuquery').val();
        var days;
        if (day == '近一天'){
            days = '1d';
        }else if (day == '近三天'){
            days = '3d';
        }else if (day == '近一周'){
            days = '1w';
        }else if (day == '近一月'){
            days = '1m';
        }else {
            window.alert("输入有误");
        }
        recentBarAjax(days);
    }
);

function drawRecentBar(subtext,legend1,legend2,legend3,data1,data2,data3,data4,xdata) {
    var myChart = echarts.init(document.getElementById('main'));

    option = {
        title : {
            text: '设备数量',
            subtext: "模糊查询："+subtext,
            x:'center'
        },
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            orient: 'vertical',
            left: 'left',
            data: legend1
        },
        series : [
            {
                name: '传感器占比',
                type: 'pie',
                radius : '55%',
                center: ['50%', '60%'],
                data: data1,
                /*data:[
                    {value:1, name:'压力传感器'},
                    {value:2, name:'温度传感器'},
                    {value:3, name:'湿度传感器'},
                    {value:4, name:'形变传感器'},
                    {value:3, name:'速率传感器'},
                    {value:2, name:'光照传感器'}
                ],*/
                itemStyle: {
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
    };

// 使用刚指定的配置项和数据显示图表。
    myChart.clear();
    myChart.setOption(option);

// 基于准备好的dom，初始化echarts实例
    var myChart1 = echarts.init(document.getElementById('main1'));

    option1 = {
        title : {
            text: '数据数量',
            subtext: "模糊查询："+subtext,
            x:'center'
        },
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            orient: 'vertical',
            left: 'left',
            data: legend2
        },
        series : [
            {
                name: '数据占比',
                type: 'pie',
                radius : '55%',
                center: ['50%', '60%'],
                data:data2,
                itemStyle: {
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
    };

// 使用刚指定的配置项和数据显示图表。
    myChart1.clear();
    myChart1.setOption(option1);

// 基于准备好的dom，初始化echarts实例
    var myChart2 = echarts.init(document.getElementById('main2'));

    option2 = {
        title : {
            text: '正常数据数量',
            subtext: "模糊查询："+subtext,
            x:'center'
        },
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            orient: 'vertical',
            left: 'left',
            data: legend3
        },
        series : [
            {
                name: '正常数据占比',
                type: 'pie',
                radius : '55%',
                center: ['50%', '60%'],
                data:data3,
                itemStyle: {
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
    };

// 使用刚指定的配置项和数据显示图表。
    myChart2.clear();
    myChart2.setOption(option2);

// 基于准备好的dom，初始化echarts实例
    var myChart3 = echarts.init(document.getElementById('main3'));

    option3 = {
        title: {
            text: '正常数据比例',
            subtext: "模糊查询："+subtext,
            x: 'center'
        },
        toolbox: {},
        tooltip: {},
        xAxis: {
            data: xdata,
            silent: false,
            splitLine: {
                show: false
            }
        },
        yAxis: {
            name: '百分率'
        },
        series: [{
            name: '百分率',
            type: 'bar',
            barWidth: 25,
            data: data4,/*[
                {value:24,itemStyle:{color: '#b34038'}},
                {value:12,itemStyle:{color: '#c9856b'}},
                {value:45,itemStyle:{color: '#9cc5b0'}},
                {value:33,itemStyle:{color: '#7d9e85'}},
                {value:14,itemStyle:{color: '#6f9fa7'}},
                {value:25,itemStyle:{color: '#344553'}}
            ],*/
            animationDelay: function (idx) {
                return idx * 10;
            }
        }
        ],
        animationEasing: 'elasticOut',
        animationDelayUpdate: function (idx) {
            return idx * 5;
        }
    };

// 使用刚指定的配置项和数据显示图表。
    myChart3.clear();
    myChart3.setOption(option3);
}

$('#test4').hover(
    function () {
        $('#test2').fadeIn(1000);
        $('#test3').fadeIn(1000);
    },function () {
        $('#test2').fadeOut(1000);
        $('#test3').fadeOut(1000);
    }
);

$('#test2').click(
    function () {
        themeCount=0;
        localStorage.setItem("themeCount",themeCount);
        showTheme();
    }
);

$('#test3').click(
    function () {
        themeCount=1;
        localStorage.setItem("themeCount",themeCount);
        showTheme();
    }
);

$('#test5').hover(
    function () {
        $('#test6').fadeIn(1000);
        $('#test7').fadeIn(1000);
    },function () {
        $('#test6').fadeOut(1000);
        $('#test7').fadeOut(1000);
    }
);

$('#dropzone').hover(
    function () {
        $('#dropli').fadeIn(500);
    },function () {
        $('#dropli').fadeOut(500);
    }
);