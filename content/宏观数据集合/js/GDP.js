       
       
       /*图PMI制造业和非制造业*/
       var GDP = [['2010年第1季度',12.2,3.9,15.4,10],
       ['2010年第1-2季度',11.4,3.7,14,9.8],
       ['2010年第1-3季度',10.9,4,13.1,9.7],
       ['2010年第1-4季度',10.6,4.3,12.7,9.7],
       ['2011年第1季度',10.2,3.2,11.3,9.9],
       ['2011年第1-2季度',10.1,2.9,11.1,10.1],
       ['2011年第1-3季度',9.8,3.5,11,9.9],
       ['2011年第1-4季度',9.5,4.2,10.7,9.5],
       ['2012年第1季度',8.1,3.7,9.5,7.3],
       ['2012年第1-2季度',7.9,4.3,8.7,7.6],
       ['2012年第1-3季度',7.8,4.2,8.3,7.8],
       ['2012年第1-4季度',7.9,4.5,8.4,8],
       ['2013年第1季度',7.9,3,7.8,8.4],
       ['2013年第1-2季度',7.7,2.8,7.7,8.3],
       ['2013年第1-3季度',7.8,3.3,7.9,8.4],
       ['2013年第1-4季度',7.8,3.8,8,8.3],
       ['2014年第1季度',7.4,3.2,7.6,7.6],
       ['2014年第1-2季度',7.4,3.7,7.7,7.6],
       ['2014年第1-3季度',7.3,4.1,7.6,7.6],
       ['2014年第1-4季度',7.3,4.1,7.4,7.8],
       ['2015年第1季度',7,3.1,6.4,7.8],
       ['2015年第1-2季度',7,3.5,6.3,8.1],
       ['2015年第1-3季度',6.9,3.8,6.2,8.2],
       ['2015年第1-4季度',6.9,3.9,6.2,8.2],
       ['2016年第1季度',6.7,2.9,6,7.5],
       ['2016年第1-2季度',6.7,3,6.2,7.5],
       ['2016年第1-3季度',6.7,3.5,6.3,7.5],
       ['2016年第1-4季度',6.7,3.3,6.3,7.7],
       ['2017年第1季度',6.9,3,6.4,7.7],
       ['2017年第1-2季度',6.9,3.5,6.4,7.7],
       ['2017年第1-3季度',6.9,3.7,6.3,7.8],
       ['2017年第1-4季度',6.9,3.9,6.1,8],
       ['2018年第1季度',6.8,3.2,6.3,7.5],
       ['2018年第1-2季度',6.8,3.2,6.1,7.6],
       ['2018年第1-3季度',6.7,3.4,5.8,7.7],
       ['2018年第1-4季度',6.6,3.5,5.8,7.6],
       ['2019年第1季度',6.4,2.7,6.1,7],
       ['2019年第1-2季度',6.3,3,5.8,7],
       ['2019年第1-3季度',6.2,2.9,5.6,7],
       ['2019年第1-4季度',6.1,3.1,5.7,6.9],
       ['2020年第1季度',-6.8,-3.2,-9.6,-5.2]        
       ]

     var GDPId = echarts.init(document.getElementById('GDPId'));

        //PMI数据分离
        //横坐标
    var dateListAxis = shuJuFenLi(GDP,1);
        //国内生产总值
    var valueListGDP1 = shuJuFenLi(GDP,2);
        //第一产业
    var valueListGDP2 = shuJuFenLi(GDP,3);
        //第二产业
    var valueListGDP3 = shuJuFenLi(GDP,4);
        //第三产业
    var valueListGDP4 = shuJuFenLi(GDP,5);
       
    
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
            color:["#72b332",'#35a9e0',"red",'purple'],
            legend: {
                data:['国内生产总值','第一产业','第二产业','第三产业'],
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
                    name:'国内生产总值',
                    type:'line',
                    smooth:true,
                    symbol:'roundRect',
                    data:valueListGDP1
                },
                {
                    name:'第一产业',
                    type:'line',
                    smooth:true,
                    symbol:'roundRect',
                    data:valueListGDP2
                }
                ,
                {
                    name:'第二产业',
                    type:'line',
                    smooth:true,
                    symbol:'roundRect',
                    data:valueListGDP3
                }
                ,
                {
                    name:'第三产业',
                    type:'line',
                    smooth:true,
                    symbol:'roundRect',
                    data:valueListGDP4
                }
            ]
        };
        GDPId.setOption(option);
 