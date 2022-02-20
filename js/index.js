//监控区域模块制作
(function(){
    $('.monitor .tabs').on('click','a',function(){
       $(this).addClass('active').siblings('a').removeClass('active');
       //选取对应索引号的content
       $('.monitor .content').eq($(this).index()).show().siblings('.content').hide();
    })
})();

//点位分布统计模块
(function(){
    //1.实例化对象
    var myEchart=echarts.init(document.querySelector('.pie'));
    //2.指定配置项和数据
    option = {
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        //注意颜色写的位置
        color:['#006cff','#60cda0','#ed8884','#ff9f7f','#0096ff','#9fe6b8','#32c5e9','#1d9dff'],
        series: [
          
          {
            name: '点位统计',
            type: 'pie',
            radius: ['10%','80%'],//如果是百分比则要加引号
            center: ['50%', '50%'],
            roseType: 'radius',
            itemStyle: {
              borderRadius: 5
            },
            data: [
              { value: 20, name: '云南' },
              { value: 26, name: '北京' },
              { value: 24, name: '山东' },
              { value: 25, name: '河北' },
              { value: 20, name: '江苏' },
              { value: 25, name: '浙江' },
              { value: 30, name: '四川' },
              { value: 42, name: '湖北' }
            ],
            label:{
                fontSize:10
            },
            labelLine:{
                length:8,
                length2:3
            }
          }
        ]
      };
    //3.把数据设置给实例化对象
    myEchart.setOption(option);

    // 4.当浏览器缩放的时候，图标也等比例缩放
    window.addEventListener('resize',function(){
        myEchart.resize();
    })
})();

//用户统计模块
(function(){
    var item={
      name:'',value:1200,itemStyle:{color:"#254065"},
      //鼠标放到柱子上不想高亮显示
      emphasis:{
        itemStyle:{
          color:"#254065"
        }
      },
      //鼠标经过柱子不显示提示框组件
      tooltip:{
        extraCssText:"opacity:0"
      }
    }



    var myEchart=echarts.init(document.querySelector('.bar'))
    option = {
      color:new echarts.graphic.LinearGradient(
        //(x1,y2)点到点(x2,y2)之间渐变
        0,0,0,1,
        [
          { offset:0,color:'#00fffb'},//0起始颜色
          { offset:1,color:'#0061ce'} //1结束颜色
        ]
      ),
        tooltip: {
          trigger: 'item',
          // axisPointer: {
          //   type: 'shadow'
          // }
        },
        grid: {
          left: '0%',
          right: '3%',
          bottom: '3%',
          top:"4%",
          containLabel: true,//刻度
          show:true,//显示网格
          borderColor:"rgba(0,240,255,0.3)"//网格颜色
        },
        xAxis: [
          {
            type: 'category',
            data: ['北京', '广州', '上海', '深圳', '合肥','','...','','杭州', '厦门','济南','成都','重庆'],
            axisTick: {
              alignWithLabel: false,//柱子在刻度中间显示
              show:false//不显示x轴刻度
            },
            axisLabel:{
              color:"#4c9bfd",
              fontSize:8
            },
            axisLine:{
              color:"rgba(0,240,255,0.3)"
            }
          }
        ],
        yAxis: [
          {
            type: 'value',
            axisTick: {
              alignWithLabel: false,//柱子在刻度中间显示
              show:false//不显示x轴刻度
            },
            axisLabel:{
              color:"#4c9bfd",
              fontSize:8
            },
            axisLine:{
              color:"rgba(0,240,255,0.3)"
            },
            splitLine:{
              lineStyle:{
                color:"rgba(0,240,255,0.3)"
              }
            }
          }
           
        ],
        series: [
          {
            name: 'Direct',
            type: 'bar',
            barWidth: '60%',
            data: [2100,1900,1700,1560,1400,
              item,
              item,item,900,
              750,600,480,240]
          }
        ]
      };
      myEchart.setOption(option);

      //  4.当浏览器缩放的时候，图标也等比例缩放
      window.addEventListener('resize',function(){
      myEchart.resize();
       })
})();


//销售模块
(function(){
  //准备数据
  var data = {
    year: [
      [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
      [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79]
    ],
    quarter: [
      [23, 75, 12, 97, 21, 67, 98, 21, 43, 64, 76, 38],
      [43, 31, 65, 23, 78, 21, 82, 64, 43, 60, 19, 34]
    ],
    month: [
      [34, 87, 32, 76, 98, 12, 32, 87, 39, 36, 29, 36],
      [56, 43, 98, 21, 56, 87, 43, 12, 43, 54, 12, 98]
    ],
    week: [
      [43, 73, 62, 54, 91, 54, 84, 43, 86, 43, 54, 53],
      [32, 54, 34, 87, 32, 45, 62, 68, 93, 54, 54, 24]
    ]
  };
  var myEchart=echarts.init(document.querySelector(".line"))
  option = {
      color:['#00f2f1','#ed3f35'],
      tooltip: {
      trigger: 'axis'
    },
    legend: {
      // 如果series里面设置了name，此时图例组件的data可以省略
      // data: ['预期销售额', '实际销售额'],
      //距离容器10%
      right:'10%',
      //修饰图例文字的颜色
      textStyle:{
        color:'#4c9bfd'
      }
    },
    grid: {
      top:'20%',
      left: '3%',
      right: '4%',
      bottom: '3%',
      show:true,
      borderColor:"#012f4a",
      containLabel: true
    },
  
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月','8月','9月','10月','11月','12月'],
      //去除刻度
      axisTick:{
        show:false
      },
      //修饰刻度标签颜色
      axixLabel:{
        color:'#4c9bfd'
      },
      //去除x轴坐标的颜色
      axisLine:{
        show:false
      }
    },
    yAxis: {
      type: 'value',
      //去除刻度
      axisTick:{
        show:false
      },
      //修饰刻度标签颜色
      axixLabel:{
        color:'#4c9bfd'
      },
      //修改y轴分割线的颜色
      splitLine:{
        lineStyle:{
          color:'#012f4a'
        }
      }
    },
    series: [
      {
        name: '预期售货额',
        type: 'line',
        stack: 'Total',
        smooth: true,//是否平滑曲线显示
        data: data.year[0]
        
      },
      {
        name: '实际销售额',
        type: 'line',
        stack: 'Total',
        smooth: true,
        data: data.year[1]
      }
    ]
  };

  myEchart.setOption(option);

  //制作tab切换效果
  //点击切换效果
  $('.sales .caption').on('click','a',function(){
    //此时要注意索引号的问题
    index=$(this).index()-1;
    //点击当前a高亮显示，调用active
    $(this).addClass('active').siblings('a').removeClass('active');
    //拿到当前a的自定义属性
    
    var arr=data[this.dataset.type];
    //根据拿到的数据重新渲染series里面的值
    option.series[0].data=arr[0];
    option.series[1].data=arr[1];
    //数据修改后要把配置好的新数据给实例对象
    myEchart.setOption(option);
  });
  // tab栏自动切换
  //开启定时器每隔3秒，自动让a触发点击事件
  var as=$('.sales .caption a');
  var index=0;
  var timer=setInterval(function(){
    index++;
    if(index>=4)
      index=0;
    as.eq(index).click();
  },2000)
  //鼠标经过sales关闭定时器,离开开启定时器
  $('.sales').hover(
    function(){
      clearInterval(timer);
    },
    function(){
    clearInterval(timer);
    timer=setInterval(function(){
      index++;
      if(index>=4)
        index=0;
      as.eq(index).click();
    },2000);
});
 // 4.当浏览器缩放的时候，图标也等比例缩放
 window.addEventListener('resize',function(){
  myEchart.resize();
})
  
})();

//销售模块 雷达图
(function(){
  var myEchart=echarts.init(document.querySelector(".radar"))

var option = {
  tooltip:{
    show:true,
    //控制提示框组件位置
    position:["60","10%"]
  },
  radar: {
    indicator: [
      { name: '机场', max: 100 },
      { name: '商场', max: 100 },
      { name: '火车站', max: 100 },
      { name: '汽车站', max: 100 },
      { name: '地铁', max: 100 },
     
    ],
    //修改雷达图得大小
    center:['50%','50%'],
    //外半径占据容器大小
    radius:'50%',
    //分割得圆圈个数
    splitNumber:4,
    name:{
      textStyle:{
        color:"#4c9bfd"
      }
    },
    shape: 'circle',
    
    axisName: {
      color: 'rgb(238, 197, 102)'
    },
    splitLine: {
      //分割圆圈线条得样式
      lineStyle: {
        color: "rgba(255,255,255,0.5)"
      }
    },
    splitArea: {
      show: false
    },
    //坐标轴得线修改为白色半透明
    axisLine: {
      show:true,
      lineStyle: {
        color: 'rgba(255, 255, 255, 0.5)'
      }
    }
  },
  series: [
    {
      name: '北京',
      type: 'radar',
      //填充区域的线条颜色
      lineStyle : {
        color:"#fff",
        width: 1,
        opacity: 0.5
      },
      data:[[90,19,56,11,34]],
      //设置图形标记（拐点）
      symbol: 'circle',
      //拐点的大小
      symbolSize:5,
      //设置拐点颜色
      itemStyle: {
        color: '#fff'
      },
      //让拐点显示数据
      label:{
        show:true,
        fontSize:10
      },
      //修饰区域填充得背景颜色
      areaStyle: {
        // opacity: 0.1
        color:"rgba(238,187,102,0.6)"
      }
    }
   
   
  ]
};

myEchart.setOption(option);

 // 4.当浏览器缩放的时候，图标也等比例缩放
 window.addEventListener('resize',function(){
  myEchart.resize();
})

})();


//销售模块 饼形图，半圆形
(function(){
  var myEchart=echarts.init(document.querySelector(".gauge"))
  
var option = {
  series: [
    {
      
      name: '销售进度',
      type: 'pie',
      radius: ['130%', '150%'],
     //移动位置 套住50%的文字
     center:['48%','80%'],
     
      labelLine: {
        show: false
      },
      //饼形图的起始角度为180，默认是90
      startAngle:180,
      data: [
        { value: 100,  },
        { value: 100,  },
        { value: 200,itemStyle:{
          color:"transparent"
        }  },
      ]
    }
  ]
};

myEchart.setOption(option);

 // 4.当浏览器缩放的时候，图标也等比例缩放
 window.addEventListener('resize',function(){
  myEchart.resize();
})
})();


(function(){
   // 1. 准备相关数据
   var hotData = [
    {
      city: "北京", // 城市
      sales: "25, 179", // 销售额
      flag: true, //  上升还是下降
      brands: [
        //  品牌种类数据
        { name: "可爱多", num: "9,086", flag: true },
        { name: "娃哈哈", num: "8,341", flag: true },
        { name: "喜之郎", num: "7,407", flag: false },
        { name: "八喜", num: "6,080", flag: false },
        { name: "小洋人", num: "6,724", flag: false },
        { name: "好多鱼", num: "2,170", flag: true }
      ]
    },
    {
      city: "河北",
      sales: "23,252",
      flag: false,
      brands: [
        { name: "可爱多", num: "3,457", flag: false },
        { name: "娃哈哈", num: "2,124", flag: true },
        { name: "喜之郎", num: "8,907", flag: false },
        { name: "八喜", num: "6,080", flag: true },
        { name: "小洋人", num: "1,724", flag: false },
        { name: "好多鱼", num: "1,170", flag: false }
      ]
    },
    {
      city: "上海",
      sales: "20,760",
      flag: true,
      brands: [
        { name: "可爱多", num: "2,345", flag: true },
        { name: "娃哈哈", num: "7,109", flag: true },
        { name: "喜之郎", num: "3,701", flag: false },
        { name: "八喜", num: "6,080", flag: false },
        { name: "小洋人", num: "2,724", flag: false },
        { name: "好多鱼", num: "2,998", flag: true }
      ]
    },
    {
      city: "江苏",
      sales: "23,252",
      flag: false,
      brands: [
        { name: "可爱多", num: "2,156", flag: false },
        { name: "娃哈哈", num: "2,456", flag: true },
        { name: "喜之郎", num: "9,737", flag: true },
        { name: "八喜", num: "2,080", flag: true },
        { name: "小洋人", num: "8,724", flag: true },
        { name: "好多鱼", num: "1,770", flag: false }
      ]
    },
    {
      city: "山东",
      sales: "20,760",
      flag: true,
      brands: [
        { name: "可爱多", num: "9,567", flag: true },
        { name: "娃哈哈", num: "2,345", flag: false },
        { name: "喜之郎", num: "9,037", flag: false },
        { name: "八喜", num: "1,080", flag: true },
        { name: "小洋人", num: "4,724", flag: false },
        { name: "好多鱼", num: "9,999", flag: true }
      ]
    }
  ];


  //根据数据渲染各省热销sup模块内容
  
  //用$.each()遍历hotData对象
  var htmlSup="";
  $.each(hotData,function(index,item){
      htmlSup+=`<li>
                  <span>${item.city}</span>
                  <span>
                     ${item.sales}
                     <s class=${item.flag?"icon-up":"icon-down"}></s>
                  </span>
                </li>`;
  })
  $('.sup').html(htmlSup);

  //当鼠标进入tab的时候
  //鼠标经过当前的li要高亮显示
  $('.province .sup').on('mouseenter','li',function(){
    index=$(this).index();
    render($(this)); 
  })
  //默认把第一个li处于鼠标经过状态
  var lis=$('.province .sup li')
  lis.eq(0).mouseenter();
  //开启定时器
  var index=0;
  var timer=setInterval(function(){
      index++;
      if(index>=5) index=0;
      // lis.eq(index).mouseenter();
      render(lis.eq(index));
  },2000)

  $('.province .sup').hover(
    //鼠标经过事件
    function(){
      clearInterval(timer);
    },
    //鼠标离开事件
    function(){
      clearInterval(timer);
       timer=setInterval(function(){
        index++;
        if(index>=5) index=0;
        //lis.eq(index).mouseenter();
        render(lis.eq(index))
       },2000);
    }
  )


  //声明一个函数 里面设置sup当前li高亮还有对应的品牌渲染
  function render(that){
    $(that).addClass('active').siblings().removeClass();
    //拿到当前城市的品牌对象
    //hotData[$(this).index()].brands
    //开始遍历品牌数组
    var htmlSub="";
    $.each(hotData[$(that).index()].brands,function(index,item){
      //是对应城市的每一个品牌对象
      htmlSub+=`<li>
                    <span>${item.name}</span>
                    <span>
                       ${item.num}
                       <s class=${item.flag?"icon-up":"icon-down"}></s>
                    </span>
                </li>`;
    })
    //把生成的6个li字符串给sub dom盒子
    $(".sub").html(htmlSub);
  }
})();





