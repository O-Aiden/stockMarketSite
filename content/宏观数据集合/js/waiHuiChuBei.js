    /* ===*/
    //外汇储备和黄金储备
    var juniorservice = echarts.init(document.getElementById('waiHuiChuBeiId'));
    option = {
        tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        color:['#22ac38','#eaff00'],
        legend: {
            right:'0',
            data: ['外汇储备(亿美元)', '黄金储备(万盎司)'],
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
            data: ['202003',
            '202002',
            '202001',
            '201912',
            '201911',
            '201910',
            '201909',
            '201908',
            '201907',
            '201906',
            '201905',
            '201904',
            '201903',
            '201902',
            '201901',
            '201812',
            '201811',
            '201810',
            '201809',
            '201808'],
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
                name: '外汇储备(亿美元)',
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
                data: [30606.33,
                    31067.18,
                    31154.97,
                    31079.24,
                    30955.91,
                    31051.61,
                    30924.31,
                    31071.76,
                    31036.97,
                    31192.34,
                    31010.04,
                    30949.53,
                    30987.61,
                    30901.8,
                    30879.24,
                    30727.12,
                    30616.97,
                    30530.98,
                    30870.25,
                    31097.16
                    ]
            },
            {
                name: '黄金储备(万盎司)',
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
                data: [6264,
                    6264,
                    6264,
                    6264,
                    6264,
                    6264,
                    6264,
                    6245,
                    6226,
                    6194,
                    6161,
                    6110,
                    6062,
                    6026,
                    5994,
                    5956,
                    5924,
                    5924,
                    5924,
                    5924
                    ]
            }
        ]
    };
    juniorservice.setOption(option);