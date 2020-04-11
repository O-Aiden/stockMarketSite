$(function(){
    //CPI同比
    CPI = [['2018年08月份',2.3],
    ['2018年09月份',2.5],
    ['2018年10月份',2.5],
    ['2018年11月份',2.2],
    ['2018年12月份',1.9],
    ['2019年01月份',1.7],
    ['2019年02月份',1.5],
    ['2019年03月份',2.3],
    ['2019年04月份',2.5],
    ['2019年05月份',2.7],
    ['2019年06月份',2.7],
    ['2019年07月份',2.8],
    ['2019年08月份',2.8],
    ['2019年09月份',3.0],
    ['2019年10月份',3.8],
    ['2019年11月份',4.5],
    ['2019年12月份',4.5],
    ['2020年01月份',5.4],
    ['2020年02月份',5.2],
    ['2020年03月份',4.3]];
    //PPI同比
    PPI = [['2018年08月份',4.10],
        ['2018年09月份',3.60],
        ['2018年10月份',3.30],
        ['2018年11月份',2.70],
        ['2018年12月份',0.90],
        ['2019年01月份',0.10],
        ['2019年02月份',0.10],
        ['2019年03月份',0.40],
        ['2019年04月份',0.90],
        ['2019年05月份',0.60],
        ['2019年06月份',0.00],
        ['2019年07月份',-0.30],
        ['2019年08月份',-0.80],
        ['2019年09月份',-1.20],
        ['2019年10月份',-1.60],
        ['2019年11月份',-1.40],
        ['2019年12月份',-0.50],
        ['2020年01月份',0.10],
        ['2020年02月份',-0.40],
        ['2020年03月份',-1.50]];
    //M2同比
    M2 = [['2017.01',10.70],
    ['2017.02',10.45],
    ['2017.03',10.12],
    ['2017.04',9.84],
    ['2017.05',9.13],
    ['2017.06',9.10],
    ['2017.07',8.89],
    ['2017.08',8.56],
    ['2017.09',8.98],
    ['2017.10',8.88],
    ['2017.11',9.11],
    ['2017.12',8.07],
    ['2018.01',8.60],
    ['2018.02',8.80],
    ['2018.03',8.20],
    ['2018.04',8.30],
    ['2018.05',8.30],
    ['2018.06',8.00],
    ['2018.07',8.50],
    ['2018.08',8.20],
    ['2018.09',8.30],
    ['2018.10',8.00],
    ['2018.11',8.00],
    ['2018.12',8.10],
    ['2019.01',8.40],
    ['2019.02',8.00],
    ['2019.03',8.60],
    ['2019.04',8.50],
    ['2019.05',8.50],
    ['2019.06',8.50],
    ['2019.07',8.10],
    ['2019.08',8.20],
    ['2019.09',8.40],
    ['2019.10',8.40],
    ['2019.11',8.20],
    ['2019.12',8.70],
    ['2020.01',8.40],
    ['2020.02',8.80],
    ['2020,03',10.10]]
    //社会融资规模存量增速同比
    SOSF = [['2017.01',16.4],
    ['2017.02',16.4], 
    ['2017.03',15.7], 
    ['2017.04',15.5], 
    ['2017.05',15.5], 
    ['2017.06',14.9], 
    ['2017.07',15.5], 
    ['2017.08',15.1], 
    ['2017.09',14.9], 
    ['2017.10',15.0], 
    ['2017.11',14.5], 
    ['2017.12',14.1], 
    ['2018.01',13.4], 
    ['2018.02',13.4], 
    ['2018.03',12.7], 
    ['2018.04',12.7], 
    ['2018.05',12.2], 
    ['2018.06',11.8], 
    ['2018.07',11.5], 
    ['2018.08',11.5], 
    ['2018.09',11.2], 
    ['2018.10',10.8], 
    ['2018.11',10.3], 
    ['2018.12',10.3], 
    ['2019.01',10.9], 
    ['2019.02',10.6], 
    ['2019.03',11.2], 
    ['2019.04',10.8], 
    ['2019.05',11.0], 
    ['2019.06',11.2], 
    ['2019.07',10.8], 
    ['2019.08',10.7], 
    ['2019.09',10.7], 
    ['2019.10',10.6], 
    ['2019.11',10.7], 
    ['2019.12',10.7], 
    ['2020.01',10.7],
    ['2020.02',10.7],
    ['2020.03',11.5]]
    /*雷达数据*/
    var radar = echarts.init(document.getElementById('radar'));
    //雷达图数据
//CPI雷达数据
var CPIN = 4.3;var CPIP = 5.2;
var CPINa = "CPI同比";
var CPIName = upDownName(CPIN,CPIP,CPINa);
//M2雷达数据
var M2N = 10.1;var M2P = 8.8;
var M2Na = "M2同比";
var M2Name = upDownName(M2N,M2P,M2Na);
//雷达新增信贷数据
var NewCreditN = 55.09;var NewCreditP = -5.74;
var NewCreditNa = "新增信贷同比";
var NewCreditName = upDownName(NewCreditN,NewCreditP,NewCreditNa);
//雷达PPI数据
var PPIN = -1.5;var PPIP = -0.4;
var PPINa = "PPI同比";
var PPIName = upDownName(PPIN,PPIP,PPINa);
//雷达PPI数据
var PMIN = 2.97;var PMIP = -27.44;
var PMINa = "PMI同比";
var PMIName = upDownName(PMIN,PMIP,PMINa);
//雷达外汇储备数据
var FERN = 30606.33;var FERP = 31067.18;
var FERNa = "外汇储备";
var FERName = upDownName(FERN,FERP,FERNa);


function upDownName(N,P,Na) {
    //N：现在的数据；P：过去的数字；Na：指标名字
    if (N != P) {
    if (N > P) {
        Name = Na+"🔴";
    } else {
        Name = Na+"🔵";
    }
    
    }    
    else {
     Name =Na+"⚪️";
}
    return Name;
}
    option = {
        title: {
            text: ''
        },
        tooltip: {},
        legend: {

            data: ['2020年3月份','2020年2月份'],
            x:"center",
            y:'bottom',
            textStyle:{
                color:"#fff"
            }
        },
        color: ['#4c95d9', '#f6731b'],
        radar: {
            name:{
                textStyle: {
                    //设置颜色
                    color:'#fff'
                }
            },
            indicator: [
            //##指标名称和雷达图最大最小值设置（新增指标时更改）
            { name: CPIName, max: 5.5, min: 4},
            { name: M2Name, max: 10.1,min:8},
            { name: NewCreditName, max: 51,min: -6},
            { name: PPIName, max: 0,min: -2},
            { name: PMIName, max: 3,min: -28},
            { name: FERName, max: 31068,min: 30606},
            ],
            center: ['50%','50%'],
            radius: "58%"
        },
        series: [{
            name: '',
            type: 'radar',
            itemStyle : {
                normal : {
                    splitLine: {
                        lineStyle: {

                        }
                    },
                    label: {
                        show: false,
                        textStyle:{
                        },
                        formatter:function(params) {
                            return params.value;}
                    },
                }
            },
            data : [
                {
                    value: [CPIN, M2N,NewCreditN,PPIN,PMIN,FERN],
                    name: '2020年3月份'
                },
                {
                    value: [CPIP, M2P,NewCreditP,PPIP,PMIP,FERP],
                    name: '2020年2月份'
                }
            ]
        }]
    };
    radar.setOption(option);


        /*图M2和社融*/
        var graduateyear = echarts.init(document.getElementById('changedetail'));

        //M2数据分离
    var dateListAxis = shuJuFenLi(M2,1);
    var valueListM2 = shuJuFenLi(M2,2);
        //社融数据分离
    //var dateListPPI = shuJuFenLi(PPI,1);
    var valueListSOSF = shuJuFenLi(SOSF,2);    
        //CPI-PPI
    //var cha = arr_dive(valueListCPI,valueListPPI);
    
    //function arr_dive(valueListCPI,valueListPPI) {
        var cha = new Array();
        for (let index = 0; index < valueListM2.length; index++) {
             cha[index]=valueListSOSF[index]-valueListM2[index];
        }    
       // return element;
    //}
    
        //数据分离
     function shuJuFenLi(data,aix) {
         //data：需要分离的数据；aix：1为第一列，2为第二列
            var h =  data.map(function (item) {
                return item[aix - 1];
                });
        return h;
     }   
        option = {
            title : {
                text:"",
                x:'center',
                y:'top',
                textStyle:
                {
                    color:'#fff',
                    fontSize:13
                }
            },
            tooltip : {
                trigger: 'axis'
            },
            grid: {
                left: '3%',
                right: '8%',
                bottom: '5%',
                top:"13%",
                containLabel: true
            },
            color:["#72b332",'#35a9e0','red'],
            legend: {
                data:['社融(同比)','M2(同比)','社融-M2(同比)'],
                show:true,
    
                right:'15%',
                y:"0",
                textStyle:{
                    color:"#999",
                    fontSize:'13'
                },
            },
            toolbox: {
                show : false,
                feature : {
                    mark : {show: true},
                    dataView : {show: true, readOnly: false},
                    magicType : {show: true, type: ['line', 'bar', 'stack', 'tiled']},
                    restore : {show: true},
                    saveAsImage : {show: true}
                }
            },
            calculable : true,
            xAxis : [
                {
                    type : 'category',
                    boundaryGap : false,
                    data : dateListAxis,
                    splitLine:{
                        show:true,
                        lineStyle:{
                            color: '#2d3b53'
                        }
                    },
                    axisLabel:{
                        textStyle:{
                            color:"#fff"
                        },
                        alignWithLabel: true,
                        //控制横坐标标注的间距
                        //interval:0,
                        rotate:'15'
                    }
                }
            ],
            yAxis : [
                {
                    type : 'value',
                    splitLine:{
                        show:true,
                        lineStyle:{
                            color: '#2d3b53'
                        }
                    },
                    axisLabel:{
                        textStyle:{
                            color:"#999"
                        }
                    },
                }
            ],
            series : [
                {
                    name:'社融(同比)',
                    type:'line',
                    smooth:true,
                    symbol:'roundRect',
                    data:valueListSOSF
                },
                {
                    name:'M2(同比)',
                    type:'line',
                    smooth:true,
                    symbol:'roundRect',
                    data:valueListM2
                },
                {
                    name:'社融-M2(同比)',
                    type:'line',
                    smooth:true,
                    symbol:'roundRect',
                    data:cha
                }
            ]
        };
        graduateyear.setOption(option);
  
    /*图CPI、PPI*/
    var graduateyear = echarts.init(document.getElementById('graduateyear'));

    //CPI数据分离
var dateListAxis = shuJuFenLi(CPI,1);
var valueListCPI = shuJuFenLi(CPI,2);
    //PPI数据分离
//var dateListPPI = shuJuFenLi(PPI,1);
var valueListPPI = shuJuFenLi(PPI,2);    
    //CPI-PPI
//var cha = arr_dive(valueListCPI,valueListPPI);

//function arr_dive(valueListCPI,valueListPPI) {
    var cha = new Array();
    for (let index = 0; index < valueListCPI.length; index++) {
         cha[index]=valueListCPI[index]-valueListPPI[index];
    }    
   // return element;
//}

    //数据分离
 function shuJuFenLi(data,aix) {
     //data：需要分离的数据；aix：1为第一列，2为第二列
        var h =  data.map(function (item) {
            return item[aix - 1];
            });
    return h;
 }   
    option = {
        title : {
            text:"",
            x:'center',
            y:'top',
            textStyle:
            {
                color:'#fff',
                fontSize:13
            }
        },
        tooltip : {
            trigger: 'axis'
        },
        grid: {
            left: '3%',
            right: '8%',
            bottom: '5%',
            top:"13%",
            containLabel: true
        },
        color:["#72b332",'#35a9e0','red'],
        legend: {
            data:['CPI(同比)','PPI(同比)','CPI-PPI(同比)'],
            show:true,

            right:'15%',
            y:"0",
            textStyle:{
                color:"#999",
                fontSize:'13'
            },
        },
        toolbox: {
            show : false,
            feature : {
                mark : {show: true},
                dataView : {show: true, readOnly: false},
                magicType : {show: true, type: ['line', 'bar', 'stack', 'tiled']},
                restore : {show: true},
                saveAsImage : {show: true}
            }
        },
        calculable : true,
        xAxis : [
            {
                type : 'category',
                boundaryGap : false,
                data : dateListAxis,
                splitLine:{
                    show:true,
                    lineStyle:{
                        color: '#2d3b53'
                    }
                },
                axisLabel:{
                    textStyle:{
                        color:"#fff"
                    },
                    alignWithLabel: true,
                    //控制横坐标标注的间距
                    //interval:0,
                    rotate:'15'
                }
            }
        ],
        yAxis : [
            {
                type : 'value',
                splitLine:{
                    show:true,
                    lineStyle:{
                        color: '#2d3b53'
                    }
                },
                axisLabel:{
                    textStyle:{
                        color:"#999"
                    }
                },
            }
        ],
        series : [
            {
                name:'CPI(同比)',
                type:'line',
                smooth:true,
                symbol:'roundRect',
                data:valueListCPI
            },
            {
                name:'PPI(同比)',
                type:'line',
                smooth:true,
                symbol:'roundRect',
                data:valueListPPI
            },
            {
                name:'CPI-PPI(同比)',
                type:'line',
                smooth:true,
                symbol:'roundRect',
                data:cha
            }
        ]
    };
    graduateyear.setOption(option);

    /*==*/
    var sexrate = echarts.init(document.getElementById('sexrate'));
    var total = {
        name: '=='
    };
    option = {
        title: [{
            text: total.name,
            left: '48%',
            top: '34%',
            textAlign: 'center',
            textBaseline: 'middle',
            textStyle: {
                color: '#fff',
                fontWeight: 'normal',
                fontSize: 18
            }
        }, {
            text: total.value,
            left: '48%',
            top: '44%',
            textAlign: 'center',
            textBaseline: 'middle',
            textStyle: {
                color: '#fff',
                fontWeight: 'normal',
                fontSize: 18
            }
        }],
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },

        color:['#70a3ff','#ff7f4e'],
        legend: {
            orient: 'vertical',
            x:'center',
            bottom:'5%',
            selectedMode:false,
            formatter:function(name){
                var oa = option.series[0].data;
                var num = oa[0].value + oa[1].value ;
                for(var i = 0; i < option.series[0].data.length; i++){
                    if(name==oa[i].name){
                        return name + "  "+oa[i].value+"  "+ (oa[i].value / num * 100).toFixed(2) + '%';
                    }
                }
            },
            data: ['test1','test2'],
            show:true,
            textStyle:{
                color:'#fff',
                fontWeight:'bold'
            },
        },

        series : [
            {
                name: 'PK',
                type: 'pie',
                selectedMode: 'single',
                radius: ['45%', '55%'],
                center: ['50%', '40%'],
                data: [
                    {value: 2629, name: 'test1'},
                    {value: 2507, name: 'test2'}
                ],
                label: {
                    normal: {
                        show: false,
                        position: "outer",
                        align:'left',
                        textStyle: {
                            rotate:true
                        }
                    }
                },
                itemStyle: {
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    },
                    normal: {
                        label:{
                            show: true,
                            formatter: '{b} {c}'
                        }
                    }

                }
            }
        ]
    };
    sexrate.setOption(option);
 
    
    var householdrate = echarts.init(document.getElementById('householdrate'));
    var total = {
        name: '=='
    };
    option = {
        title: [{
            text: total.name,
            left: '48%',
            top: '34%',
            textAlign: 'center',
            textBaseline: 'middle',
            textStyle: {
                color: '#fff',
                fontWeight: 'normal',
                fontSize: 18
            }
        }, {
            text: total.value,
            left: '48%',
            top: '44%',
            textAlign: 'center',
            textBaseline: 'middle',
            textStyle: {
                color: '#fff',
                fontWeight: 'normal',
                fontSize: 18
            }
        }],
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },

        color:['#4f9de7','#4acf79'],
        legend: {
            orient: 'vertical',
            x:'center',
            bottom:'5%',
            selectedMode:false,
            formatter:function(name){
                var oa = option.series[0].data;
                var num = oa[0].value + oa[1].value ;
                for(var i = 0; i < option.series[0].data.length; i++){
                    if(name==oa[i].name){
                        return name + "  "+oa[i].value+"  "+ (oa[i].value / num * 100).toFixed(2) + '%';
                    }
                }
            },
            data: ['test1','test2'],
            show:true,
            textStyle:{
                color:'#fff',
                fontWeight:'bold'
            },
        },
        series : [
            {
                name: 'FK',
                type: 'pie',
                selectedMode: 'single',
                radius: ['45%', '55%'],
                center: ['50%', '40%'],
                data: [
                    {value: 2629, name: 'test1'},
                    {value: 2507, name: 'test2'}
                ],
                label: {
                    normal: {
                        show: false,
                        position: "outer",
                        align:'left',
                        textStyle: {
                            rotate:true
                        }
                    }
                },
                itemStyle: {
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    },
                    normal: {
                        label:{
                            show: true,
                            formatter: '{b} {c}'
                        }
                    }
                }
            }
        ]
    };
    householdrate.setOption(option);
   
    /*  =====-=*/
    var courserate = echarts.init(document.getElementById('courserate'));
    option = {
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            orient: 'vertical',
            right: '0',
            y:'middle',
            textStyle:{
                color:"#fff"
            },

            formatter:function(name){
                var oa = option.series[0].data;
                var num = oa[0].value + oa[1].value + oa[2].value + oa[3].value+oa[4].value+oa[5].value;
                for(var i = 0; i < option.series[0].data.length; i++){
                    if(name==oa[i].name){
                        return name +  ' '+oa[i].value;
                    }
                }
            },
            data: ['test1','test2','test3','test4','test5','text6']
        },
        series : [
            {
                name: 'FK',
                type: 'pie',
                radius : '45%',
                color:['#27c2c1','#9ccb63','#fcd85a','#60c1de','#0084c8','#d8514b'],
                center: ['38%', '50%'],
                data:[
                    {value:335, name:'test1'},
                    {value:310, name:'test2'},
                    {value:234, name:'test3'},
                    {value:135, name:'test4'},
                    {value:234, name:'test5'},
                    {value:234, name:'text6'}
                ],
                itemStyle: {
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                },
                itemStyle: {
                    normal: {
                        label:{
                            show: true,
                            position:'outside',
                            formatter: '{b}'
                        }
                    },
                    labelLine :{show:true}
                }
            }
        ]
    };
    courserate.setOption(option);

    /* =======*/
    var professionrate = echarts.init(document.getElementById('professionrate'));
    option = {
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            orient: 'vertical',
            right: '0',
            y:'middle',
            textStyle:{
                color:"#fff"
            },
            data: ['test1','test2','test3'],
            formatter:function(name){
                var oa = option.series[0].data;
                var num = oa[0].value + oa[1].value + oa[2].value;
                for(var i = 0; i < option.series[0].data.length; i++){
                    if(name==oa[i].name){
                        return name +  ' '+oa[i].value;
                    }
                }
            }
        },
        series : [
            {
                name: 'FK',
                type: 'pie',
                radius : '60%',
                center: ['35%', '50%'],
                data:[
                    {value:335, name:'test1'},
                    {value:310, name:'test2'},
                    {value:234, name:'test3'}
                ],
                itemStyle: {
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                },
                itemStyle: {
                    normal: {
                        label:{
                            show: true,
                            position:'outside',
                            formatter: '  {b}'
                        }
                    },
                    labelLine :{show:true}
                }
            }
        ]
    };
    professionrate.setOption(option);
 /* 比例变化*/
    /*
    
    var changedetail = echarts.init(document.getElementById('changedetail'));
    option = {
        tooltip: {
            trigger: 'axis',
            formatter: '{b}</br>{a}: {c}</br>{a1}: {c1}'
        },
        toolbox: {
            show:false,
            feature: {
                dataView: {show: true, readOnly: false},
                magicType: {show: true, type: ['line', 'bar']},
                restore: {show: true},
                saveAsImage: {show: true}
            }
        },
        legend: {
            data:['',''],
            show:false
        },
        grid:{
            top:'18%',
            right:'5%',
            bottom:'8%',
            left:'5%',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                data: ['2021年','2022年','2023年','2024年','2025年'],
                splitLine:{
                    show:false,
                    lineStyle:{
                        color: '#3c4452'
                    }
                },
                axisTick: {
                    show: false
                },
                axisLabel:{
                    textStyle:{
                        color:"#fff"
                    },
                    lineStyle:{
                        color: '#519cff'
                    },
                    alignWithLabel: true,
                    interval:0
                }
            }
        ],
        yAxis: [
            {
                type: 'value',
                name: '嘎嘎',
                nameTextStyle:{
                    color:'#fff'
                },
                interval: 5,
                max:50,
                min: 0,
                splitLine:{
                    show:true,
                    lineStyle:{
                        color: '#23303f'
                    }
                },
                axisLine: {
                    show:false,
                    lineStyle: {
                        color: '#115372'
                    }
                },
                axisTick: {
                    show: false
                },
                axisLabel:{
                    textStyle:{
                        color:"#fff"
                    },
                    alignWithLabel: true,
                    interval:0

                }
            },
            {
                min: 0,
                max: 2.5,
                interval: 0.5,
                type: 'value',
                name: '哈哈',
                nameTextStyle:{
                    color:'#fff'
                },
                splitLine:{
                    show:true,
                    lineStyle:{
                        color: '#23303f'
                    }
                },
                axisLine: {
                    show:false,
                    lineStyle: {
                        color: '#115372'
                    }
                },
                axisTick: {
                    show: false
                },
                axisLabel:{
                    textStyle:{
                        color:"#fff"
                    },
                    alignWithLabel: true,
                    interval:0

                }
            }
        ],
        color:"yellow",
        series: [
            {
                name:'test1',
                type:'bar',
                data:[2, 4, 7, 23, 25],
                boundaryGap: '45%',
                barWidth:'40%',

                itemStyle: {
                    normal: {
                        color: function(params) {
                            var colorList = [
                                '#6bc0fb','#7fec9d','#fedd8b','#ffa597','#84e4dd'
                            ];
                            return colorList[params.dataIndex]
                        },label: {
                            show: true,
                            position: 'top',
                            formatter: '{c}'
                        }
                    }
                }
            },

            {
                name:'test2',
                type:'line',
                yAxisIndex: 1,
                lineStyle: {
                    normal: {
                        color:'#c39705'
                    }
                },
                data:[1.0, 0.5, 0.8, 0.9, 0.6]
            }
        ]
    };
    changedetail.setOption(option);
  */ 

    /* ===*/
    var juniorservice = echarts.init(document.getElementById('juniorservice'));
    option = {
        tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        color:['#eaff00','#22ac38'],
        legend: {
            right:'0',
            data: ['test1', 'test2'],
            textStyle:{
                color:'#00ffff'
            }
        },
        grid: {
            left: '8%',
            right: '4%',
            bottom: '3%',
            top:'10%',
            containLabel: true
        },
        xAxis:  {
            type: 'value',
            splitLine:{
                show:true,
                lineStyle:{
                    color: '#1e2b43'
                }
            },
            axisLine: {
                show:false,
                lineStyle: {
                    color: '#115372'
                }
            },
            axisTick: {
                show: false
            },
            axisLabel:{
                textStyle:{
                    color:"#fff"
                },
                alignWithLabel: true,
                interval:0

            }
        },
        dataZoom: [{
            type: 'slider',
            yAxisIndex: 0,
            filterMode: 'empty',
            start: 0,
            x:'0',
            end: 60,
            handleStyle:{
                color:"#519cff",
                backgroundColor:'#519cff'
            },
            textStyle:{
                color:"#fff"},
            borderColor:"#519cff"
        }],
        yAxis: {
            type: 'category',
            data: ['a','b','c',' d','e','f','g','h','i','j',' k','l','m','n'],
            splitLine:{
                show:false,
                lineStyle:{
                    color: '#1e2b43'
                }
            },

            axisTick: {
                show: false
            },
            axisLine: {
                show:true,
                lineStyle: {
                    color: '#115372'
                }
            },
            axisLabel:{
                textStyle:{
                    color:"#419aff"
                },
                lineStyle:{
                    color: '#519cff'
                },
                alignWithLabel: true,
                interval:0
            }
        },
        series: [
            {
                name: 'test1',
                type: 'bar',
                stack: '比例',
                label: {
                    normal: {
                        show: true,
                        position: 'insideRight',
                        textStyle:{
                            color:'#333'
                        }
                    }

                },
                data: [320, 302, 301, 334, 390, 330, 320,320, 302, 301, 334, 390, 330,123]
            },
            {
                name: 'test2',
                type: 'bar',
                stack: '比例',
                label: {
                    normal: {
                        show: true,
                        position: 'right',
                        textStyle:{
                            color:'#00f0ff'
                        }

                    }
                },
                data: [120, 132, 101, 134, 90, 230, 210,120, 132, 101, 134, 90, 230,243]
            }
        ]
    };
    juniorservice.setOption(option);

    /* ===*/
    var edubalance = echarts.init(document.getElementById('edubalance'));
    option = {
        tooltip: {
            trigger: 'axis',
            formatter: '{b}</br>{a}: {c}</br>{a1}: {c1}</br>{a2}: {c2}</br>{a3}: {c3}'
        },
        toolbox: {
            show:false,
            feature: {
                dataView: {show: true, readOnly: false},
                magicType: {show: true, type: ['line', 'bar']},
                restore: {show: true},
                saveAsImage: {show: true}
            }
        },
        legend: {
            data:['test1','test2','test3','test4','test5'],
            right:"15%",
            textStyle:{
                color:'#fff'
            }
        },
        grid:{
            top:'18%',
            right:'5%',
            bottom:'8%',
            left:'5%',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                data: ['工藤新一','工藤新一','工藤新一','工藤新一'],
                splitLine:{
                    show:false,
                    lineStyle:{
                        color: '#3c4452'
                    }
                },
                axisTick: {
                    show: false
                },
                axisLabel:{
                    textStyle:{
                        color:"#fff"
                    },
                    lineStyle:{
                        color: '#519cff'
                    },
                    alignWithLabel: true,
                    interval:0,
                }
            }
        ],
        yAxis: [
            {
                type: 'value',

                nameTextStyle:{
                    color:'#fff'
                },
                interval: 5,
                max:50,
                min: 0,
                splitLine:{
                    show:true,
                    lineStyle:{
                        color: '#23303f'
                    }
                },
                axisLine: {
                    show:false,
                    lineStyle: {
                        color: '#115372'
                    }
                },
                axisTick: {
                    show: false
                },
                axisLabel:{
                    textStyle:{
                        color:"#fff"
                    },
                    alignWithLabel: true,
                    interval:0

                }
            },
            {
                min: 0,
                max: 100,
                interval: 20,
                type: 'value',
                name: '所',
                nameTextStyle:{
                    color:'#fff'
                },
                splitLine:{
                    show:true,
                    lineStyle:{
                        color: '#23303f'
                    }
                },
                axisLine: {
                    show:false,
                    lineStyle: {
                        color: '#115372'
                    }
                },
                axisTick: {
                    show: false
                },
                axisLabel:{
                    textStyle:{
                        color:"#fff"
                    },
                    alignWithLabel: true,
                    interval:0

                }
            }
        ],
        color:"yellow",
        series: [
            {
                name:'test1',
                type:'bar',
                data:[21, 14, 17, 12],
                itemStyle: {
                    normal: {
                        color: '#76da91'
                        },label: {
                            show: true,
                            position: 'top',
                            formatter: '{c}'
                        }
                    }
            },
            {
                name:'test2',
                type:'bar',
                data:[12, 14, 17, 23],
                itemStyle: {
                    normal: {
                        color: '#f8cb7f'},
                    label: {
                            show: true,
                            position: 'top',
                            formatter: '{c}'
                        }
                    }
            },
            {
                name:'test3',
                type:'bar',
                data:[12, 14, 17, 13],
                itemStyle: {
                    normal: {
                        color: '#f89588'},
                    label: {
                            show: true,
                            position: 'top',
                            formatter: '{c}'

                    }
                }
            },
            {
                name:'test4',
                type:'bar',
                data:[2, 4, 7, 3],
                itemStyle: {
                    normal: {
                        color: '#7cd6cf'},
                    label: {
                            show: true,
                            position: 'top',
                            formatter: '{c}'
                        }
                }
            },
            {
                name:'test5',
                type:'line',
                yAxisIndex: 1,
                lineStyle: {
                    normal: {
                        color:'#c39705'
                    }
                },
                data:[30, 10, 90,75]
            }
        ]
    };
    edubalance.setOption(option);

    /* 地图 需要哪个省市的地图直接引用js 将下面的name以及mapType修改为对应省市名称*/
    var maps = echarts.init(document.getElementById('mapadd'));
    option = {
        tooltip : {
            trigger: 'item',
            formatter: '{b}'
        },
        series : [{
            name: '山东',
            type: 'map',
            mapType: '山东',
            roam: false,
            top:'8%',
            zoom:1.2,
            x:'25%',
            selectedMode : 'single',//multiple多选
            itemStyle:{
                normal:{
                    label:{
                        show:true,
                        textStyle: {
                            color: "#231816"
                        }
                    },
                    areaStyle:{color:'#B1D0EC'},
                    color:'#B1D0EC',
                    borderColor:'#dadfde'//区块的边框颜色
                },
                emphasis:{//鼠标hover样式
                    label:{
                        show:true,
                        textStyle:{
                            color:'#fa4f04'
                        }
                    },
                    areaStyle:{color:'red'}
                }
            },
            data:[
                {name:'济南市',
                    itemStyle: {
                        normal: {
                            areaColor: '#13d5ff',
                            borderColor: '#edce00'
                        }
                    }
                },
                {name:'德州市',
                    itemStyle: {
                        normal: {
                            areaColor: '#13d5ff',
                            borderColor: '#0abcee'
                        }
                    }
                }, 
                {name:'聊城市',
                    itemStyle: {
                        normal: {
                            areaColor: '#92d050',
                            borderColor: '#1ca9f2'
                        }
                    }
                },
                {name:'泰安市',
                    itemStyle: {
                        normal: {
                            areaColor: '#88ddf5',
                            borderColor: '#88ddf5',
                        }
                    }
                },
                {name:'莱芜市',
                    itemStyle: {
                        normal: {
                            areaColor: '#13d5ff',
                            borderColor: '#45b5ef',
                        }
                    }
                },
                {name:'菏泽市',
                    itemStyle: {
                        normal: {
                            areaColor: '#13d5ff',
                            borderColor: '#45b5ef'
                        }
                    }
                },
                {name:'枣庄市',
                    itemStyle: {
                        normal: {
                            areaColor: '#45b5ef',
                            borderColor: '#45b5ef',
                        }
                    }
                },
                {name:'济宁市',
                    itemStyle: {
                        normal: {
                            areaColor: '#ffd811',
                            borderColor: '#45b5ef',
                        }
                    }
                },
                {name:'临沂市',
                    itemStyle: {
                        normal: {
                            areaColor: '#ffa312',
                            borderColor: '#45b5ef',
                        }
                    }
                },
                {name:'青岛市',
                    itemStyle: {
                        normal: {
                            areaColor: '#92d050',
                            borderColor: '#1ca9f2'
                        }
                    }
                },
                {name:'烟台市',
                    itemStyle: {
                        normal: {
                            areaColor: '#88ddf5',
                            borderColor: '#88ddf5',
                        }
                    }
                },
                {name:'威海市',
                    itemStyle: {
                        normal: {
                            areaColor: '#13d5ff',
                            borderColor: '#45b5ef',
                        }
                    }
                },
                {name:'潍坊市',
                    itemStyle: {
                        normal: {
                            areaColor: '#13d5ff',
                            borderColor: '#45b5ef'
                        }
                    }
                },
                {name:'淄博市',
                    itemStyle: {
                        normal: {
                            areaColor: '#45b5ef',
                            borderColor: '#45b5ef',
                        }
                    }
                },
                {name:'滨州市',
                    itemStyle: {
                        normal: {
                            areaColor: '#13d5ff',
                            borderColor: '#45b5ef',
                        }
                    }
                },
                {name:'东营市',
                    itemStyle: {
                        normal: {
                            areaColor: 'red',
                            borderColor: '#45b5ef',
                        }
                    }
                },
                {name:'日照市',
                    itemStyle: {
                        normal: {
                            areaColor: 'red',
                            borderColor: '#45b5ef',
                        }
                    }
                },
            ]
        }]
    };
    maps.setOption(option);

})