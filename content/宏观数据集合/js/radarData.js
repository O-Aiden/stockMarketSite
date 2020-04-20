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