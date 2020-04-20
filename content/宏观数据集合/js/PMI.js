       
       
       /*图PMI制造业和非制造业*/
       var PMI = [['2016年12月份',51.4,54.5],
       ['2017年01月份',51.3,54.6],
       ['2017年02月份',51.6,54.2],
       ['2017年03月份',51.8,55.1],
       ['2017年04月份',51.2,54],
       ['2017年05月份',51.2,54.5],
       ['2017年06月份',51.7,54.9],
       ['2017年07月份',51.4,54.5],
       ['2017年08月份',51.7,53.4],
       ['2017年09月份',52.4,55.4],
       ['2017年10月份',51.6,54.3],
       ['2017年11月份',51.8,54.8],
       ['2017年12月份',51.6,55],
       ['2018年01月份',51.3,55.3],
       ['2018年02月份',50.3,54.4],
       ['2018年03月份',51.5,54.6],
       ['2018年04月份',51.4,54.8],
       ['2018年05月份',51.9,54.9],
       ['2018年06月份',51.5,55],
       ['2018年07月份',51.2,54],
       ['2018年08月份',51.3,54.2],
       ['2018年09月份',50.8,54.9],
       ['2018年10月份',50.2,53.9],
       ['2018年11月份',50,53.4],
       ['2018年12月份',49.4,53.8],
       ['2019年01月份',49.5,54.7],
       ['2019年02月份',49.2,54.3],
       ['2019年03月份',50.5,54.8],
       ['2019年04月份',50.1,54.3],
       ['2019年05月份',49.4,54.3],
       ['2019年06月份',49.4,54.2],
       ['2019年07月份',49.7,53.7],
       ['2019年08月份',49.5,53.8],
       ['2019年09月份',49.8,53.7],
       ['2019年10月份',49.3,52.8],
       ['2019年11月份',50.2,54.4],
       ['2019年12月份',50.2,53.5],
       ['2020年01月份',50,54.1],
       ['2020年02月份',35.7,29.6],
       ['2020年03月份',52,52.3],
       ]
//var PMI = require('./data.js').PMI

        var PMIId = echarts.init(document.getElementById('PMIId'));

        //PMI数据分离
        //横坐标
    var dateListAxis = shuJuFenLi(PMI,1);
        //PMI制造业
    var valueListPMI1 = shuJuFenLi(PMI,2);
            //PMI非制造业
    var valueListPMI2 = shuJuFenLi(PMI,3);
       
    
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
            color:["#72b332",'#35a9e0'],
            legend: {
                data:['PMI制造业','PMI非制造业'],
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
                    name:'PMI制造业',
                    type:'line',
                    smooth:true,
                    symbol:'roundRect',
                    data:valueListPMI1
                },
                {
                    name:'PMI非制造业',
                    type:'line',
                    smooth:true,
                    symbol:'roundRect',
                    data:valueListPMI2
                }
            ]
        };
        PMIId.setOption(option);
 