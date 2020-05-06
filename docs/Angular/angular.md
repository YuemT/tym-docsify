## 目录
* [AngularJS是什么](#angularjs)
	* AngularJS是Google开源的 前端JS 结构化 框架
	* AngularJS特性和优点
	* 与jQuery的比较
	* AngularJS能做什么项目
* [开发第一个Angular应用](#application)
* [四个重要的概念](#concept)
	* 双向数据绑定
	* 依赖注入(DI)
	* MVC模式
	* MVVM模式
* [四个重要对象](#object)
	* 作用域(scope)
	* 控制器(controller)
	* 模块(module)
	* 服务
* [三个页面语法](#grammar)
	* 表达式
	* 指令
	* 过滤器
* [三个对象使用详解](#detail)
	* angular对象
	* module对象
	* $scope对象
* [两个angular扩展模块](#extend)
* [ajax封装](#ajax)
* [angular-ui-router用法](#router)
<br/>
<br/>
<br/>
<br/>

## <div id='angularjs'>一.AngularJS是什么</div>
#### 1.AngularJS是Google开源的 前端JS 结构化 框架
    动态展示页面数据，并与用户进行交互
> https://angularjs.org/  
  http://www.apjs.net/  
  
#### 2.AngularJS特性和优点
* 双向数据绑定  
* 声明式依赖注入
* 解耦应用逻辑, 数据模型和视图  
* 完善的页面指令
* 定制表单验证
* Ajax封装

#### 3.与jQuery的比较
* jQuery
	* JS函数库
	* 封装简化dom操作

* angular
	* JS结构化框架
	* 主体不再是DOM, 而是页面中的动态数据


#### 4.AngularJS能做什么项目
* 构建单页面(SPA)Web应用或Web App应用
	> 单页面应用(single page application)  
	将所有的活动局限于一个页面  
	不用刷新整个页面就能使数据发生改变(局部刷新)  
	通过ajax进行数据的读取

	* 饿了吗: https://www.ele.me/home/
	* 微信网页版: https://wx.qq.com/
	* 知乎周报: https://zhuanlan.zhihu.com/Weekly
	* 后台管理应用: 阿里云, 土豆后台, 唯品会...

## <div id='application'>二.开发第一个Angular应用</div>
#### 1.引入AnaularJS

* 使用`<script>`引用AngularJS源文件  
  	* 本地引入:  angularjs.js  
  	* 在线远程引入(CDN):  http://cdn.bootcss.com/angular.js/1.5.5/angular.min.js

#### 2.使用AngularJS 

* 在页面中使用Angular的指令和表达式  

	1. ng-app(指令)   
		> 告诉angular核心它管理当前标签所包含的整个区域,并且会自动创建$rootScope根作用域对象

	2. ng-model(指令)   
		> 将当前输入框的值与谁关联(属性名:属性值), 并作为当前作用域对象($rootScope)的属性

	3. {{name}}(表达式)
		> 显示数据,从作用域对象的指定属性名上取

* 表达式和语句概念上的区别：
	1. 表达式：  
	通常有一个返回值，可以放在任何需要值得地方，比如函数调用的参数，一个变量名，一个运算    

	2. 语句：  
	通常表示一个完整的执行单位，一段完整的js可执行的代码，有的语句也可以用表达式来执行，叫做表达式语句。

	3. 区别：语句用分号结尾，有些语句我们没有加分号，比如console.log虽然我们没有加分号，但也是语句，因为js引擎会自动解析并且加上分号。
				 js引擎在解析的时候会自动的加上分号。
       
		> 特例：if语句，就不用加分号，也是完整的语句。
       
#### 3.实例：第一个Angular程序
* 理解过程：  
	1.当页面输入框的数据发生改变时，angular会将数据更新到域对象的对应属性上。  
	2.当域对象的属性数据发生改变时，angular会更新其对应的页面显示

          <!DOCTYPE html>
          <html ng-app="">
          <head lang="en">
              <meta charset="UTF-8">
              <title></title>
          </head>
          <body ng-app>
              <input type="text" placeholder="用户名" ng-model="username">
              <p>你输入的用户名为: {{username}}</p>
          </body>
          <script type='text/javascript' src="../../vendor/angular/angularjs.js"></script>
          </html>
          
	

          
#### 4.对比jQuery

        <!DOCTYPE html>
        <html>
        <head lang="en">
            <meta charset="UTF-8">
            <title></title>
        </head>
        <script type="text/javascript" src="../../vendor/jQuery/jquery-1.11.1.js"></script>
        <script type="text/javascript">
            $(function () {
                $('#name').keyup(function () {
                    var name = $(this).val();
                    $('#resultSpan').html(name);
                });
            });
        </script>
        <body>
            <input type="text" name="username" id="name">
            <p>你输入的用户名为：<span id="resultSpan">还未输入</span></p>
        </body>
        </html>
	
	
## <div id='concept'>三.四个重要的概念</div>
#### 1.双向数据绑定  
* View(视图): 页面(标签、指令、表达式)
* Model(模型) : 作用域对象(属性、方法)
* 数据绑定:  
    数据从一个位置自动流向另一个位置, 这个操作由框架来完成。
    
    * View-->Model
    * Model-->View
* 单向数据绑定： 只支持一个方向
    * View-->Model  ： ng-init
    * Model-->View  : {{name}}
* 双向数据绑定   
     * Model<---->View  : ng-model
     
    * 当改变View中的数据, Model对象的对应属性也会随之改变  
        > 数据从View==>Model : ng-model/ng-init
    * 当Model域对象的属性发生改变时, 页面对应数据随之更新
        > 数据从Model==>View : {{}}表达式  
    * ng-init  用来初始化当前作用域变量。
        > 数据从View==>Model
    
#### 2.依赖注入(DI)
* 依赖的对象被别人(调用者)自动注入进来

     Dependency Injection
    
* 什么是依赖对象?

     完成特定功能的函数需要某个对象才能实现, 这个对象就是依赖对象

* 如何引入依赖对象?

     方式一: 内部自己创建 : 不动态  
      方式二: 全局变量 : 污染全局环境 
      方式三: 形参引入依赖 : 依赖注入使用的方式---最好
     
* 什么是依赖注入?

     1). 定义函数时, 使用形参声明依赖对象变量, 在函数体中使用依赖对象(我们实现)  
     2). 函数调用时, 自动将创建好的依赖对象动态传入(框架实现)  
     3). 例子: 事件监听就使用了依赖注入, event就是依赖对象(event可以是任意名称)  

* Angular中的依赖注入(声明式)

     angular的 $scope 对象就是依赖对象，并且是声明式依赖注入，来得到作用域对象。  
      形参必须是特定的名称 $scope, 否则Angular无法注入
      
	> 声明式和命令式的区别
	 声明式是命令式的局部包装，声明式注重执行的结果，命令式注重执行的过程

#### 3.MVC模式
##### 传统MVC模式
早起的mvc是一种架构理念，随着互联网的发展，这种架构理念逐渐被应用到实际的开发当中，成为一种架构模式，最终达到的效果是页面与数据分离。
* M:Model(数据层)在angular中:
    * 为scope
    * 存储数据的容器(实体模型)
    * 提供操作数据的方法(业务模型)
    
* V:View,视图，在angular中:
    * 为页面
    * 包括: html/css/directive/expression
    * 显示Model的数据
    * 将数据同步到Model
    * 响应用户操作, 与用户进行交互
* C:Controller,控制器,在angular中:
    * 为angular的Controller
    * 初始化Model数据
    * 为Model添加行为方法
    * 操作模型数据, 更新视图
    * View与Model之间的桥梁  
* 在MVC中最核心的是C层，它是M层与V层的纽带  
    
	![mvc模型](./image/mvc.png)


##### angular的MVVM模式
* M: Model, 即数据模型, 在angular中:为scope中的各个数据对象
* V: View, 即视图, 在angular中:为页面
* VM: ViewModel, 即视图模型, 在angular中:为scope对象
* 在MVVM中，最核心的是VM层，controller只是起辅助作用，用来辅助$scope对象，其他的同MVC一样，MVVM是MVC升级版，angular应用的就是MVVM架构模式。
 


## <div id='object'>四.四个重要对象</div>

#### 1.作用域(scope)

* 是一个js实例对象 
* 这个对象的属性、方法，页面都可以直接引用、操作
* ng-app指令: 内部创建一个根作用域对象（$rootScope）, 是所有其它作用域的父对象
* 给域对象指定方法
    `$scope.fun=function(){}`
    
#### 2.控制器(controller)
* 也是一个对象，是我们View与Model之间的桥梁
* 当我们使用了ng-controller指令， 内部就会创建控制器对象
* 用来控制AngularJS应用数据的实例对象
* 但我们同时得提供控制器的构造函数（必须定义一个$scope的形参）
* 每定义一个ng-controller指令， 内部就会创建一个新的作用域对象（$scope）, 它是$rootScope的子对象,并自动注入构造函数中,在函数内部可以直接使用$scope对象。
        
   >怎么证明这个函数是构造函数
        
        function MyController ($scope) {//必须是$scope
            alert(this instanceof MyController);//结果返回true，说明是new调用
          }  
   > instanceof 判断一个对象是否是构造函数的实例对象
        
#### 3.模块(module)
* 也是一个对象
* 创建模块对象---使用全局变量angular对象创建  
` angular.module('模块名', [依赖的模块])`
* 通过模块添加控制器：  
` module.controller('MyController', function($scope){//操作$scope的语句})`
* angular的整体设计也是多模块的
    * 核心模块： angular.js
	* 扩展模块： angular-router.js, angular-message.js, angular-animate.js
* 使用模块对象---定义控制器,定义服务,定义指令...
    
        //创建当前应用的模块对象
        var module = angular.module('模块名',[]);
              //创建一个controller，并且初始化$scope对象。
              module.controller('MyCtrl',function ($scope) {
                $scope.empName = 'Tom';
              });
              module.controller('MyCtrl1',function ($scope) {
                $scope.empName = 'Jack';
        })
    
        //方法链式调用
        angular.module('MyApp',[])//模块对象的方法执行完返回的就是模块对象本身
            .controller('MyCtrl',function ($scope) {//$scope写法问题（js代码压缩时会把所有的局部变量压缩成abcd等）
                $scope.empName = 'Tom';
            }).controller('MyCtrl1',function ($scope) {
                $scope.empName = 'Jack';
            })    
            
        //改进版本
        angular.module('MyApp',[])
            .controller('MyCtrl',['$scope',function (a) {
                a.empName = 'tom'
            }])
            .controller('MyCtrl1',['$scope',function (b) {
                b.empName = 'Jack';
        }])
        
#### 4.服务
* 是什么？ 具有特定功能的对象（object对象、函数，数组，基本类型）

* 理解服务的概念

    * 为angular应用(controller)提供各种服务的对象(单例), 具有特定的功能
    * 本质上可以是任意js类型数据
        > object对象 函数 数组 基本类型
    * Angular内置多个服务(都以$开头), 在controller函数中可以声明注入服务并直接使用
    * 我们也可以自定义服务(私人定制), 不要以$开头

* 内置服务
    * 都以$开头
    * 引入内置服务： 声明式依赖注入（定义形参）, 你不使用它就存在了
    * 常用的几个：
        * $rootScope
        * $scope(最常用)
        * $timeout 
        * $interval
        * $filter
        * $http
        * $q
        * ...
        * 脏数据检查：  
            页面的数据发生改变的时候想要实时的刷新到最新的状态，需要进行脏数据检查。原始的数据是干净的，数据一旦发生了变化便认为是脏的。
            * 当angular定义的函数执行完后，会对scope内的属性进行检查，如果发现有数据改变便会更新界面
            * 当非angular定义的回调函数执行完后，不会进行脏数据检查，即时数据更新了，scope页面不会同步更新
        * 页面如何能够自动更新的？
            * 在内置的一些函数执行完后，angular会进行脏数据检查的操作
            * controller,$timeout()中的回调函数，$interval()中的回调函数
            * 如果我们在setTimeout()的回调函数中更新scope，是不会进行藏数据检查的，页面不会更新
            * 实例：让html页面上动态显示当前时间
                 
                     html:
                       <div ng-controller="MyController">
                         <p>{{date | date:'yyyy-MM-dd HH:mm:ss'}}</p>
                       
                         <p>{{msg}}</p>
                       </div>
                       
                     js:  
                       angular.module('myApp', [])
                             //声明注入需要的服务对象(obj/function)
                             .controller('MyController', function($scope, $interval, $timeout) {
                               $scope.date = new Date;
                       
                               /*
                                setInterval(function () {
                                  //原生js回调函数执行完后, 没有进行脏数据检查, 即使数据发生了改变, 也不会更新页面
                                  console.log('------');
                                  $scope.date = new Date;
                                }, 1000);
                                */
                       
                               $interval(function() {//回调函数执行完后, 会进行脏数据检查, 如果变化了更新页面
                                 console.log('+++++');
                                 $scope.date = new Date;
                               }, 1000);
                       
                               $timeout(function() {
                                 $scope.msg = '来自$timeout的信息';
                               }, 2000);
                             });//controller()的最后会做'脏数据检查'

* 自定义服务
    * 使用module对象来定义服务
    * 定义的方法
        * factory() /工厂函数模式：可以定义任意类型的服务
        * service() /构造函数模式：只能定义object类型对象
    * factory()
        factory('服务名'，function(){  
            return 服务对象；//可以是任意类型   
        })
    * 如何引入：声明式依赖注入

 
## <div id='grammar'>五.三个页面语法</div>
#### 1.表达式
* 使用Angular表达式

    * 语法: {{expression}}
    * 作用: 从作用域对象中读取对应的属性数据来显示数据
    * 注意: 表达式中引用的变量必须是当前域对象所具有的属性(包括其原型属性)
    
* Angular表达式操作的数据
    
    * 基本类型数据: number/string/boolean  
    `{{1}}  {{'尚硅谷'}}  {{true}}`
    * undefined, Infinity, NaN, null解析为空串: "", 不显示任何效果  
    `{{undefined}}`----什么都不显示
    * 对象的属性或方法

			 html: 
			 {{abc}}  

			 js: 
			 var module = angular.module('myCtr',[]);
			  module.controller('aaa',function ($scope) {
			      $scope.abc='abc';
			  }) 
			  页面显示的结果是abc
    * 数组  
    `{{[1,2,3,4]}}`
    * 不能使用if／for／while ---会报错
    * 可以使用三元运算符  
    
			html:
			{{age>18?"成年人":'未成年'}}
			js:  
			var module = angular.module('myCtr',[]);
			 module.controller('aaa',function ($scope) {
			     $scope.age = 15 ;
			 })  
			 页面显示的结果：未成年
			 
* 比较Angular表达式与JS的表达式
    
    * Angular表达式写法与JS的表达式类同
    * 与JS表达式不同，AngularJS 表达式可以写在HTML中。
    * 与JS表达式不同，AngularJS 表达式不支持条件判断，循环及异常。
    * 与JS表达式不同，AngularJS 表达式支持过滤器。
    
#### 2.指令
* Angular指令 
    * Angular为HTML页面扩展的属性,标签
    * 与Angular的Model交互,扩展页面的动态表现力

* 常用指令(一)
    * ng-app: 指定模块名，angular管理的区域
    * ng-model： 双向绑定，输入相关标签
    * ng-init： 初始化数据
    * ng-click： 调用作用域对象的方法（点击时）可以传$event
    * ng-controller: 指定控制器构造函数名，内部会自动创建一个新的子作用域（外部的）
    * ng-bind:解决使用{{}}显示数据闪屏(在很短时间内显示{{}})
    
        	由于页面从上至下加载，在浏览器解析到html部分时还没有读到angular.js,浏览器会以普通字符串的形式解析{{}}，在很短的时间以后，页面解析到angular.js后页面恢复正常解析{{}}  
		
        `<p>{{123}}</p>`  常规写法
        `<p ng-bind="123"></p>` ng-bind写法，将写在{{}}中的内容写在ng-bind=""中 ---同样利用浏览器解析的原理
    * ng-repeat:遍历数组显示数据，数组有几个元素就会产生几个新的作用域
        * $index,$first,$last,$middle,$odd,$even---除去$index，其余返回的是布尔类型的值，奇偶以0开头判断。
		
				<li ng-repeat="num in persons">第{{$index}}个------{{num}}</li>
    * ng-show:布尔类型，如果为true就显示
    * ng-hide:布尔类型，如果为true就隐藏 
        > 切换效果案例  
	
				html  
				<button ng-click="switch()">切换</button>  
				   <p ng-show="isLike">我是糖糖</p>  
				   <p ng-hide="isLike">糖糖是我</p>  
				js   
				$scope.isLike = true;  
				  $scope.switch = function () {  
				      $scope.isLike = !$scope.isLike;
				  ｝

* 常用指令(二)  

    * ng-class: 动态引用定义的样式`{aClass:true, bClass:false}`

        >应用案例：实现隔行变色
 
                css:()-----实例均为简写代码
                <style>
                  .evenB {
                    background-color: grey;
                  }
                  .oddB {
                     background-color: green;
                  }
                </style>
                
                html:
                <ul>
                  <li ng-repeat="p in persons" ng-class="{evenB:$even, oddB:$odd}">
                    //$even,$odd返回的是布尔值
                    {{p.name}}---{{p.age}}
                  </li>
                </ul>
                
                js:
                $scope.persons = [
                  {name: 'Tom', age: 12},
                  {name: 'Tom2', age: 13},
                  {name: 'Tom3', age: 14},
                  {name: 'Tom4', age: 15},
                  {name: 'Tom5', age: 16}
                ];
                 
    * ng-style: 动态引用通过js指定的样式对象    
     `{color:'red', background:'blue'}`
        
            >应用实例：为div设置鼠标移入和移除的效果

                html：
                <div style="width: 100px;height: 100px;background-color: red"
                     ng-mouseover="over()" ng-mouseleave="leave()" ng-style="myStyle">
                </div>
                
                js:
                $scope.over = function () {
                  $scope.myStyle = {
                    background: 'blue'
                  };
                };
                $scope.leave = function () {
                  $scope.myStyle = {
                    background: 'green'
                  };
                        };

    * ng-click: 点击监听, 值为函数调用, 可以传$event

    * ng-mouseenter: 鼠标移入监听, 值为函数调用, 可以传$event

    * ng-mouseleave: 鼠标移出监听, 值为函数调用, 可以传$event

#### 3.过滤器
* 作用：在显示数据时可以对数据进行格式化或过滤

    * 单个--->格式化（将别的类型的数据转换为特定格式的字符串）
    * 多个--->格式化/过滤
    * 不会真正改变被操作数据
* 过滤器的语法:
    * 表达式中: {{expression | 过滤器：补充说明}}
    * ng-bind='expression | 过滤器'
    * JS中: 使用$filter内置服务函数
* 常用内置过滤器
    * currency 货币格式化(文本)
      
             <p ng-init="num=123123.123123">{{num}}-----{{num | currency:'￥'}}</p>
    * number数值格式化(文本)  
        
            <p ng-init="num1=123123.123123">{{num1}}-----{{num1 | number:1}}</p>
        
        > number:1 ---1表示要保留的小数点位数
    * date 将日期对象格式化(文本)
    
             <p>{{myDate}}-----{{myDate | date}}---{{myDate | date:'yyyy-MM-dd HH:mm:ss'}}</p>
    * json: 将js对象格式化为json(文本)
        > 不常用，一般使用JSON.parse和JSON.stringify
    * lowercase : 将字符串格式化为全小写(文本)
    * uppercase : 将字符串格式化全大写(文本)
    
            <p>{{msg}}---{{msg | uppercase}}----{{msg | lowercase}}</p>
    * limitTo 从一个数组或字符串中过滤出一个新的数组或字符串
        > 两个参数limitTo:num1:num2，num1截几个，num2从第几个开始截
    * orderBy : 根据指定作用域属性对数组进行排序,默认是升序
            
             {{[2,1,4,3] | orderBy}}  升序
             {{[2,1,4,3] | orderBy：‘-’}}  降序
             {{[{id:2,price:3}, {id:1, price:4}] | orderBy:'id'}  id升序
             {{[{id:2,price:3}, {id:1, price:4}] | orderBy:'-price'} price降序
    * filter : 从数组中过滤返回一个新数组
            
            {{[{id:22,price:35}, {id:23, price:45}] | filter:{id:'3'}} //根据id过滤
            {{[{id:22,price:35}, {id:23, price:45}] | filter:{$:'3'}} //根据所有字段过滤
     
     
## <div id='detail'>六.三个对象使用详解</div>
#### 1.angular对象
##### 由angular.js提供的全局变量
方法:
* module() : 创建模型对象
* bootstrap() : 编码启动angular, 代替ng-app
* element() : 将dom对象/html标签包装为jQuery对象
* forEach() : 遍历数组和元素集合伪数组
* toJson()和fromJson() : js对象与Json字符串相互转换
* isArray(),isObject(),isFunction() : 类型判断
* lowercase()和uppercase() : 大小写转换

#### 2.module对象
##### 由angular.module()创建
方法:
 * controller() : 定义控制器
* factory() : 定义服务对象
* service() : 定义服务对象
* filter() : 定义过滤器
* config() : 指定做一些配置的回调函数
* directive() : 定义指令

#### 3.$scope对象
* $apply(): 强制脏数据检查
     * 当scope中的数据发生了改变, angular会将数据同步显示到页面, 这一操作称为"脏数据检查"
     * angular在它的方法执行完后, 都会进行脏数据检查
     * 在原生JS函数中改变作用域数据, angular是不会进行脏数据检查的
     * 使用$scope的$apply函数可以解决此问题  
        `$scope.$apply(function(){  
            //在这里更新scope数据, angular会同步更新其页面数据   
        });`
     * $apply()的本质是调用$digest()去进行脏数据检查更新页面的
           		$scope.$digest()
     * $digest()虽然也能实现页面更新, 但建议使用$apply()
     
* $watch(): 监视scope中某个属性的变化 
    * angular是双向数据绑定的, Scope中的属性数据发生了改变, 会自动更新页面中对应的数据
    * 但有时, 我们想监视数据的变化情况, 来实现特定的功能
    * Angular提供了$watch()来实现
        * var unWatch = $scope.$watch('propertyName', function(newValue, oldValue){}, deepWatch)
        * 参数一: 指定监视属性的属性名
        * 参数二: 发现数据发生改变时的回调函数
        * 参数三: 是否深度监视, 默认是false, 代表只是监视属性本身, 而不监视其内部数据
        * 返回值: 用于取消监视的函数, 调用unWatch()取消监视


## <div id='extend'>七.两个angular扩展模块</div>
1. angular-animate

2. angular-route

## <div id='ajax'>八.ajax封装</div>
1. angular通过$http服务来提交ajax请求
2. GET请求

        //方式一
          $http({
              method: "GET",
              url: "",
            params: myParams //注意参数需要使用params传递
          })
          .success(function (data, status, headers, config) {
             
          })
          .error(function (data, status, headers, config) {
              
          });
          
          //方式二
          $http.get(url)
          .success(function (data, status, headers, config) {
             
          })
          .error(function (data, status, headers, config) {
              
          });
3. POST请求
        
        //方式一:
          $http({
              method: "POST",
              url: "",
          	data: myData,//参数需要放在data中
          })
          .success(function (data, status, headers, config) {
             
          })
          .error(function (data, status, headers, config) {
              
          });
          
          //方式二
          $http.post(url, data)
          .success(function (data, status, headers, config) {
             
          })
          .error(function (data, status, headers, config) {
              
          });
          
4. JSONP跨域请求
           
           $http.jsonp('http://localhost:3000/node_jsonp?callback=JSON_CALLBACK&username=Tom2&passwod=123abc2')
               .success(function (data) {
                    $scope.persons = data;
               })
               .error(function (data) {
                   alert(data);
               });


## <div id='router'>九.angular-ui-router用法</div>
#### 1.历史
* Angular.js首次发布ngRoute的时候，是有类似功能的路由存在的。angular-router
* AngularJS官方称，从1.1.6版本将ngRoute从angular.js核心中删除（更多的说法是1.2）。  
    ngRoute依然可以从AngularJS的官网上获得，但是它早已不在核心之中。
* AngularJS的社区认为，更受欢迎的路由库是AngularUI 项目的UI-Router。
#### 2.ui-router
* UI-Router被认为是AngularUI为开发者提供的最实用的一个模块，  
它是一个让开发者能够根据URL状态或者说是'机器状态'来组织和控制界面UI的渲染，  
而不是仅仅只改变路由（传统AngularJS应用实用的方式）。  
该模块为开发者提供了很多对视图（view）额外的控制。  
开发者可以创建嵌套分层的视图、在同一个页面使用多个视图、让多个视图控制某个视图等更多的功能。  
即使是非常复杂的web应用，UI-Router也可以极佳地驾驭。
* 方法：
    * 基本语法
    
            .config(function($stateProvider, $urlRouterProvider) {//配置路由
                 $stateProvider//注册路由
                    .state('main', { //路由ID
                        url: '/main', //路由地址
                        templateUrl:'./template/main.html',// 路由请求的模板页面路径
                        controller:'MainCtrl' //路由控制器对象
                    })
                    .state('company', {
                        url: '/company/:id',
                        templateUrl:'template/company.html',
                        controller:'CompanyCtrl'
                    })
                    .state('person', {
                        url: '/person',
                        templateUrl:'template/person.html',
                        controller:'PersonCtrl'
                    });
        
                $urlRouterProvider.otherwise('/main');   //默认请求路由地址
            });
    * 页面写法
            
         `<ui-view></ui-view> `
         用来接收请求的模板页面，并将模板页面渲染到页面中
