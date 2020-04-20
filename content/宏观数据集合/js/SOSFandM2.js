       /*图M2和社融*/
    //M2同比
    M2 = [
        ['2017年01月份',10.70],
        ['2017年02月份',10.45],
        ['2017年03月份',10.12],
        ['2017年04月份',9.84],
        ['2017年05月份',9.13],
        ['2017年06月份',9.10],
        ['2017年07月份',8.89],
        ['2017年08月份',8.56],
        ['2017年09月份',8.98],
        ['2017年10月份',8.88],
        ['2017年11月份',9.11],
        ['2017年12月份',8.07],
        ['2018年01月份',8.60],
        ['2018年02月份',8.80],
        ['2018年03月份',8.20],
        ['2018年04月份',8.30],
        ['2018年05月份',8.30],
        ['2018年06月份',8.00],
        ['2018年07月份',8.50],
        ['2018年08月份',8.20],
        ['2018年09月份',8.30],
        ['2018年10月份',8.00],
        ['2018年11月份',8.00],
        ['2018年12月份',8.10],
        ['2019年01月份',8.40],
        ['2019年02月份',8.00],
        ['2019年03月份',8.60],
        ['2019年04月份',8.50],
        ['2019年05月份',8.50],
        ['2019年06月份',8.50],
        ['2019年07月份',8.10],
        ['2019年08月份',8.20],
        ['2019年09月份',8.40],
        ['2019年10月份',8.40],
        ['2019年11月份',8.20],
        ['2019年12月份',8.70],
        ['2020年01月份',8.40],
        ['2020年02月份',8.80],
        ['2020年03月份',10.10]
    ]
    //社会融资规模存量增速同比
    SOSF = [
        ['2017年01月份',16.4],
        ['2017年02月份',16.4], 
        ['2017年03月份',15.7], 
        ['2017年04月份',15.5], 
        ['2017年05月份',15.5], 
        ['2017年06月份',14.9], 
        ['2017年07月份',15.5], 
        ['2017年08月份',15.1], 
        ['2017年09月份',14.9], 
        ['2017年10月份',15.0], 
        ['2017年11月份',14.5], 
        ['2017年12月份',14.1], 
        ['2018年01月份',13.4], 
        ['2018年02月份',13.4], 
        ['2018年03月份',12.7], 
        ['2018年04月份',12.7], 
        ['2018年05月份',12.2], 
        ['2018年06月份',11.8], 
        ['2018年07月份',11.5], 
        ['2018年08月份',11.5], 
        ['2018年09月份',11.2], 
        ['2018年10月份',10.8], 
        ['2018年11月份',10.3], 
        ['2018年12月份',10.3], 
        ['2019年01月份',10.9], 
        ['2019年02月份',10.6], 
        ['2019年03月份',11.2], 
        ['2019年04月份',10.8], 
        ['2019年05月份',11.0], 
        ['2019年06月份',11.2], 
        ['2019年07月份',10.8], 
        ['2019年08月份',10.7], 
        ['2019年09月份',10.7], 
        ['2019年10月份',10.6], 
        ['2019年11月份',10.7], 
        ['2019年12月份',10.7], 
        ['2020年01月份',10.7],
        ['2020年02月份',10.7],
        ['2020年03月份',11.5]
    ]


       //var SOSF = require('./data.js').SOSF;
       //var M2 = require('./data.js').M2;

       var graduateyear = echarts.init(document.getElementById('SOSFandM2Id'));

       //M2数据分离
   var dateListAxis = shuJuFenLi(M2,1);
   var valueListM2 = shuJuFenLi(M2,2);
       //社融数据分离
   //var dateListPPI = shuJuFenLi(PPI,1);
   var valueListSOSF = shuJuFenLi(SOSF,2);    
      
   
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
