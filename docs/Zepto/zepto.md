

## 目录

#### 一.[什么是zepto.js](#a)
#### 二.[与jquery相同的API](#b)
* jquery核心函数
* jquery对象
#### 三.[与jquery的区别](#c)
* attr和prop --- 操作对象属性
* DOM操作
* each方法
* offset()的区别
* width(),height()区别
* 事件委托 -- 根据冒泡原理，将子元素的事件绑定到父元素身上
* 隐藏元素宽高
#### 四.[同jquery类似的事件](#d)
* jquery
* zepto touch方法
#### 五.[事件处理机制](#e)
#### 六.[form表单](#f)
* serialize()   
* serializeArray()  
* submit()  
#### 七.[面试案例剖析](#g)
#### 八.[实战练习](#h)
#### 九.[知识点补充](#i) 
* 移动端click事件300ms延迟 
* 解决子元素绝对定位造成的父元素高度塌陷问题
 
 
 


<br/><br/><br/><br/><br/><br/><br/>
#### <div id='a'>一.什么是zepto.js</div>
1. 概念：
    * 移动端开发框架,是jquery的轻量级代替品；
    * API及语句同jquery相似，但文件更小(可压缩至8KB)。
    * 是目前功能完备的库中，最小的一个。
2. zepto.js特点:
    * 针对的是移动端
    * 轻量级，压缩版本只有8KB
    * 语法大部分同jquery一样，学习成本低，上手快。
    * 响应，执行快。
    * 同jquery一样以$作为核心函数和核心对象。
#### <div id='b'>二.与jquery相同的API</div>
1. jquery核心函数: $

    * 作为函数使用（参数）
            
       1. function 
       
             `$(function(){})`  
       2. html字符串
        
             `$('<p>我是新添加的标签p</p>')`  
       3. DOM code
        
             `$('body')`  
       4. 选择器字符串  
       
             `$('#id')`
                 
    * 作为对象调用(方法)
         
      1. $.ajax()  $.get() $.post()  －－－－返回值是XMLHttpRequest实例对象？  
      2. $.isArray()  判断是否是数组  
        $.each()   遍历  
        $.isFunction()  判断指定参数是否是一个函数。   
        $.trim() 去掉前后空格    
        ......
                
2. jquery对象

* 概念：jquery核心函数$()调用返回的对象就是jquery对象的数组（也可能只有一个）；
            
    使用：  
    1. addClass()  添加类
    2. removeClass()  删除类
    3. show()  显示
    4. find()  查找
            
* zepto:以上jquery的特性zepto同样适用

#### <div id='c'>三.与jquery的区别</div>
1. attr和prop --- 操作对象属性

    * jquery
    
       attr与prop的区别:
       
       1. prop多用在标签的固有属性，布尔值属性。比如：a标签的href，class，selected等。  
       2. attr多用在自定义属性上。  
       3. 在jquery中如果用attr去获取布尔值属性且该布尔值属性在标签体内没有定义的时候，会返回undefined
    
    * zepto
        
        1. 在zepto中用attr也可以获取布尔值属性,当该布尔值属性在标签体内没有定义的时候，返回的是false。  
        2. 若该布尔值属性在标签体已经定义，返回的是该属性名。  
        3. prop在读取属性的时候优先级高于attr，布尔值属性的读取还是建议用prop。   
        4. zepto中 removeProp() 的方法。在1.2以上才支持。  
        5. 所以在移除目标元素属性时使用 removeAttr() 方法从被选元素中移除属性。  
        6. removeProp()函数用于移除在当前jQuery对象所匹配的每一个元素上指定的属性。
           
2. DOM操作   

    * jquery
        
        jquery中插入DOM元素的时候添加配置对象（属性选择器：id，class。。。)的时候不会显示；
        
    * zepto
        
        插入DOM元素的时候添加配置对象的时候可以添加进去，并且添加的配置对象的内容会直接反应在标签属性内，且可以操作，影响对应的DOM元素。
    
3. each方法

    * jquery
        
        ` $.each(collection, function(index, item){ ... }) `  
        
        可以遍历数组,以index，item的形式，  
        可以遍历对象，以key-value的形式。  
        不可以遍历字符串。  
        不可以遍历json字符串。
        
    * zepto
    
       ` $.each(collection, function(index, item){ ... }) ` 
         
       可以遍历数组,以index，item的形式。  
       可以遍历对象，以key-value的形式。  
       可以遍历字符串，同对数组的遍历方法一样以index-item的形式。
    
4. offset()的区别 
 
    * jquery中的offset()
        
        1、获取匹配元素在当前视口的相对偏移，不带单位。  
        2、返回的对象包含两个整型属性：top 和 left。此方法只对可见元素有效。  
        3、获取width，height时为undefined
    
    * zepto中的offset()
    
        1、获得当前元素相对于视口的位置信息以及元素自身的宽和高，不带单位。  
        2、返回一个对象含有： top, left, width和height(获取的宽高是盒模型可见区域的宽高)
    
5. width(),height()区别

    * jquery
    jquery获取宽高的方法 
     
        1、width(),height()---content内容区的宽高，没有单位px;  
        2、.css('width')----可以获取content内容区的宽高，padding，border的值，有单位px;   
        3、可以通过css（）获取padding，border的值。  
        4、innerHeight(),innerWidth()---outerHeight(),outerWidth()来获取padding和border的值 
    
    * zepto
    
        1、zepto用width(),height()是根据盒模型决定的，包含padding的值,border的值，不包含单位PX。  
        2、zepto中没有innerHeight(),innerWidth()---outerHeight(),outerWidth()。  
        3、用.css('width')获取的是content的宽高。  
        4、用.css('padding')和.css('border-width')单独获取padding，border的值。  
    
6. 事件委托 -- 根据冒泡原理，将子元素的事件绑定到父元素身上
    * jquery
        
        1、1.7以后已经不支持live了。  
        2、在jquery中事件委托只是找相应的event.target触发元素进行的回调函数执行,其他的并不关心。
        
    * zepto   
          
        1、在zepto的官网表示已经废除了live，delegate等。  
        2、在zepto中事件委托,委托的事件先被依次放入数组队列里，然后由自身开始往后找直到找到最后，期间符合条件的元素委托的事件都会执行。  
        3、理解js单线程，alert阻塞渲染。
        
            1、委托在同一个父元素,或者触发的元素的事件范围小于同类型事件(冒泡能冒到自身范围)
            2、同一个事件
            3、委托关联  操作的类要进行关联
            4、绑定顺序---从当前的位置往后看
            
7. 隐藏元素宽高
    * jquery: jquery可以获取隐藏元素的宽高。
    
    * zepto: zepto无法获取隐藏元素宽高。
    
#### <div id='d'>四.同jquery类似的事件</div>
1. jquery

    * on()  绑定事件处理程序  
    * off() 方法移除用目标oon绑定的事件处理程序。  
    * bind()  为每个匹配元素的特定事件绑定事件处理函数，可同时绑定多个事件，也可以自定义事件。  
    * one() 为每一个匹配元素的特定事件（像click）绑定一个一次性的事件处理函数。只执行一次。  
    * trigger() 触发有bind定义的事件（通常是自定义事件）  
    * unbind()  bind的反向操作，删除匹配元素所绑定的bind事件。  

2. zepto touch方法

    * tap()点击事件 利用在document上绑定touch事件来模拟tap事件的，并且tap事件会冒泡到document上
    * singleTap()  点击事件  
    * tap() 和 singleTap() 的区别：  
        
    * doubleTap()  双击事件
    * longTap()    当一个元素被按住超过750ms触发。
    * swipe, swipeLeft, swipeRight, swipeUp, swipeDown — 当元素被划过(同一个方向滑动距离大于30px)时触发。  
    (可选择给定的方向)
    在一个方向滑动大于30px即为滑动。否则算点击。  
    > 注意：禁止浏览器的默认行为


#### <div id='e'>五.事件处理机制</div>
* zepto有自己的一套事件机制，并且对不同的浏览器做了兼容的内部封装处理。
    * 像新版本的zepto中已经舍弃了bind，delegate，die，同样jquery中舍弃了live，die等。
    * 现在统一使用on，off标准事件来绑定事件。
        
            简单绑定    
            $('#box').on('touchstart',function(){
                    alert('ddd');
            });   
                
            事件委托
            $('#box1').on('touchstart','p',function(){
                alert($(this).text());
            });
            
            解除绑定事件
            $('#box').off('touchstart');
            
            一次函数
            $('#box2').one('touchstart',function(){
                alert('我就执行一次');
            });
    
#### <div id='f'>六.form表单</div>
* serialize()   
     * 在Ajax post请求中将用作提交的表单元素的值编译成 URL-encoded 字符串。---key(name)/value  
* serializeArray()  
     * 将用作提交的表单元素的值编译成拥有name和value对象组成的数组。  
     * 不能使用的表单元素，buttons，未选中的radio buttons/checkboxs 将会被跳过。  
* submit()  
     * 为 "submit" 事件绑定一个处理函数，或者触发元素上的 "submit" 事件。  
     * 当参数function没有给出时，触发当前表单“submit”事件，并且执行默认的提交表单行为，除非阻止默认行为。  
     
#### <div id='g'>七.面试案例剖析</div>
1. 需求:  
点击获取验证码的按钮，用户十秒时候可以再次获取，当十秒过后第一次请求没有返回，用户再次点击获取,然后因为网速好或者其他原因，两次请求同时返回，该怎么解决?
2. 大致思路:  
    * 如何废除一个ajax请求 ----abort()方法  
    * 考虑用户体验,定义何时让用户可以再次发送请求  
    * 当用户再次点击的时候取消上一次的请求  
    * 如何找到上一个对象

3. 注意:  
disabled属性   设置表单项或者按钮不可再点击或者操作；但是只是针对click事件，而并没有针对touch事件作出处理。
4. 实现:  



#### <div id='h'>八.实战练习</div>
1. 准备工作
    * 创建reset.css文件，将需要重置／清除的默认样式写在该文件中，并引入到html文件中。
    * 分析设置页面结构
        * 一个大的div中包含5个小的div，并且每个小的div的宽和高都是100%。
        * 5个小div中只有一个div是显示的，其余4个为隐藏状态
        * 设置公共div样式
        * 通过绝对定位设置小div中img的位置及样式
            > 此时补充一点：left设置为50%，再将图片的margin-left值设置为负的其宽度的1/2，便可达到图片居中的效果。
            
                .common_img{
                    height: auto;
                    width: 25px;
                    position: absolute;
                    top: 92%;
                    left: 50%;
                    margin-left:-12px ;
                }
        * 子元素绝对定位后会造成父元素高度塌陷，此时将父元素设置为绝对定位，因为相对定位的话其高度不能被其子元素撑开。
        * 通过分析页面结构，有规律的为div设置class属性，方便后期对div进行操作时，整理头绪。
    
2. 代码实现  
    * 分析动画实现的两个要素：  
        * 为元素设置animation属性，  
        * 设置@keyframes帧动画 
    
                .class{
                    animation: 动画名 执行时间 定义动画速度 both（默认）；
                }
                @keyframes 动画名{
                    from{ }
                    to{ }
                    或者使用百分百
                    0%｛ ｝
                    50%｛ ｝
                    100%｛ ｝
                }
                
        > from..to..适用于两帧动画  
          百分比适用于多帧动画
    
    * 定义四个方向的动画----设置animation属性
    * 定义四个方向动画的实现过程-----设置@keyframes帧动画 
    * 为底部小箭头和缩放元素设置动画
    
    * 封装动画函数  
       * 初始化两个动画类
       * 根据不同的方向，定义不同的动画类  
       * 将动画类加到对应的页面 -- 拼串
       * 
    
    
#### <div id='i'>九.知识点补充</div>
1. 移动端click事件300ms延迟  
    * 问题的由来：  
    由于用户可以进行双击缩放或者双击滚动的操作，当用户一次点击屏幕之后，浏览器并不能立刻判断用户是确实要打开这个链接，还是想要进行双击操作。因此，iOS Safari 就等待 300 毫秒，以判断用户是否再次点击了屏幕。
     
    * 解决办法：  
    FastClick，是FT Labs专门为解决移动端浏览器 300 毫秒点击延迟问题所开发的一个轻量级的库。
    * 原理：  
    FastClick 在检测到 touchend 事件的时候，会通过 DOM 自定义事件立即触发一个模拟 click 事件，并把浏览器在 300 毫秒之后真正触发的click事件阻止掉。 
    * 使用方法：  
    在 window load 事件之后，在body上调用FastClick.attach()即可。  
       
            window.addEventListener( "load", function() {
                 FastClick.attach( document.body );
            }, false );
    
2. 解决子元素绝对定位造成的父元素高度塌陷问题
    * 问题产生的根本原因：  
    子元素设置绝对定位以后，脱离文档流，无法撑开父元素的高度，导致父元素高度塌陷。
    
    * 解决办法：  
    设置父元素为绝对定位，使父元素与子元素在同一层级，子元素便可以撑开父元素的高。