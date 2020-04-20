   
   /*图CPI、PPI*/
   



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




    //var CPI = require('./data.js').CPI;
    //var PPI = require('./data.js').PPI;

    var graduateyear = echarts.init(document.getElementById('CPIandPPIId'));

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