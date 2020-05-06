## react核心内容详解
#### 一.react框架的理解
1. facebook的一个开源的框架
2. 一个用于动态构建用户界面的js库
#### 二.react框架的特点
1. 声明式编程
2. 基于组件开发
    * 基本思路:
        * 拆分页面功能
        * 确定大体组件模块
        * 编写组件
        * 渲染组件     
3. 双端渲染
    * 即可以在浏览器端渲染，也可以在服务器端渲染
        * 浏览器端
            * 默认请求的是React-dom中的index
            * 暴露的对象是：ReactDOM
            * ReactDOM的渲染方法为render()
        * 服务器端
            * 默认请求的是React-dom中的server
            * 暴露的对象是：ReactDOMServer
            * ReactDOM的渲染方法为renderToString()
4. 操作虚拟DOM对象
5. DOM diff（different）
    * 理解DOM树结构
        * react会将虚拟DOM对象映射成虚拟DOM对象树，
          * 只比较变化的部分，达到最小化页面重绘
#### 三.react核心内容
1. 虚拟DOM对象
    * 不是真实存在的dom对象，需要ReactDOM将虚拟dom对象转化为真实的DOM对象，最终渲染到页面
2. jsx语法
    * 在js中直接书写html对象，或者在html里直接写js
    * 注意:
        * 虚拟DOM对象必须有根标签
        * 必须有闭合标签
        * js中直接写html，在html中写js需要大括号{}
        * script中的type为JavaScript的时候不能解析jsx语法，需要使用babel来转换
        * 如果引入下载好的babel需要将type改为text/babel
        * 如果下载babel包，开发过程需要将setting的语言甚至为jsx ----setting-->language--javascript
3. 组件
    1. 首字母大写
    2. HTML标签或其它标签名都可以
    3. 组件对象最终返回的就是虚拟DOM对象的集合
    * 注意事项:
        * 组件内部定义的所有方法应该是组件实例对象的（this）
        * 组件的内置方法的this指向实例对象，自定义方法的this指向null
    * 定义组件的方式
        * 工厂函数式（无状态--简单组件）
                
                function Welcome1(props) {
                        return <h2>工厂函数式创建的组件</h2>
                    }
                //使用props属性对象的时候可以通过形参获取
        * ES6的class类的方法（有状态---较为复杂组件）
        
                 class Welcome2 extends React.Component{
                    render(){
                        console.log(this instanceof Welcome2, this);
                       return <h3>ES6的类class创建的组件</h3>
                    }
                 }
                 //注意继承react核心组件库
        * ES5的老语法（只做了解）
                
                var Welcome3 = React.createClass({
                    render () {
                        return <h1>ES5D的老语法</h1>
                    }
                }）；
4. 组件声明周期
    * React 为每个状态都提供了两种勾子(hook)函数，will 函数在进入状态之前调用，did 函数在进入状态之后调用
        * Mount：插入真实 DOM
        * Update：被重新渲染
        * Unmount：被移出真实 DOM
        * componentWillMount()
        * componentDidMount() : 已插入真实DOM, 在render之后才会执行
        * componentWillUpdate(object nextProps, object nextState)
        * componentDidUpdate(object prevProps, object prevState)
        * componentWillUnmount()
        * componentWillReceiveProps() 外部通过标签属性的方式向当前组件传递数据的时候调用。 
    *  生命周期流程:
        1. 第一次初始化渲染显示: render()
              * constructor(): 创建对象初始化state
              * componentWillMount() : 将要插入回调
              * render() : 用于插入虚拟DOM回调
              * componentDidMount() : 已经插入回调
        2. 每次更新state: this.setSate()
              * componentWillUpdate() : 将要更新回调
              * render() : 更新(重新渲染)
              * componentDidUpdate() : 已经更新回调
        3. 删除组件
              * ReactDOM.unmountComponentAtNode(document.getElementById('example')) : 移除组件
              * componentWillUnmount() : 组件将要被移除回调
    * 注意:
         * 一般会在componentDidMount()中: 开启监听, 发送ajax请求
         * 可以在componentWillUnmount()做一些收尾工作: 停止监听
5. 组件实例对象的三大属性
    * props
        * 组件标签的所有标签属性都保存在props中
        * 内部读取某个属性值: this.props.propertyName
        * 作用: 通过标签属性从组件外向组件内传递数据(只读)
        * 对props中的属性值进行类型限制和必要性限制
        
                Person.propTypes = {
                  name: React.PropTypes.string.isRequired,
                  age: React.PropTypes.number.isRequired
                }
        * 注意：
            1、当设置isRequired的时候必须规定属性的数据类型
            2、规定数据类型的时候可以不用规定不许填写
        * 扩展属性: 将对象的所有属性通过props传递
        
                <Person {...person}/>
        * 默认属性值
        
                Person.defaultProps = {
                  name: 'Mary'
                };
    * state
        * 初始化状态:
        
                  constructor (props) {
                    super(props);
                    this.state = {
                      stateProp1 : value1,
                      stateProp2 : value2
                    };
                  }
        * 读取某个状态值
        
                    this.state.statePropertyName
        * 更新状态---->组件界面更新
        
                  this.setState({
                    stateProp1 : value1,
                    stateProp2 : value2
                  }）
    * refs
        * 组件内的标签都可以定义 ref 属性来标识自己
        * 在组件中可以通过this.refs.refName来得到对应的真实DOM对象
        * 作用: 用于操作指定的ref属性的dom元素对象(表单标签居多)
          
                 <input ref='username'>
                 this.refs.username //返回input对象
6. 事件处理
* 通过onXxx属性指定组件的事件处理函数(注意大小写)
    * React使用的是自定义(合成)事件, 而不是使用的DOM事件
    * React中的事件是通过委托方式处理的(委托给组件最外层的元素)
    * 在react中自定义的方法都指向null，而内置的方法this指向实例对象
* 通过event.target得到发生事件的DOM元素对象

        <input onFocus={this.handleClick}/>
        handleFocus(event) {
          event.target  //返回input对象
        }
#### 四.react-router
1. 组件对象
    * Router: 路由器组件, 用来包含各个路由组件
        * 属性:  history={hashHistory} 用来监听浏览器地址栏的变化, 并将URL解析成一个地址对象，供React Router匹配
        * 子组件: Route
    * Route: 路由组件, 注册路由 
        * 属性1: path="/xxx"  
        * 属性2: component={Xxx}
        * 根路由组件: path="/"的组件, 一般为App
        * 子路由组件: 子<Route>配置的组件
    * IndexRoute: 默认路由组件
        * 当父路由被请求时, 默认就会请求此路由组件
    * hashHistory
        * 路由的切换由URL的hash变化决定，即URL的#部分发生变化
        * 用于Router组件的history属性
        * 作用: 为地址url生成?_k=hash, 用于内部保存对应的state
    * Link: 路由链接组件（会自动生成a标签）
        * 属性1: to="/xxx"
        * 属性2: activeClassName="active"
2. 学习地址
    * https://github.com/ReactTraining/react-router
    * https://github.com/reactjs/react-router-tutorial/(官方教程)
    * http://www.ruanyifeng.com/blog/2016/05/react_router.html?utm_source=tool.lu
3. react-ajax
    * jquery
        * 框架太重，不推荐使用
    * axios
        * https://github.com/mzabriskie/axios
        * 基于原生ajax和promise对象的封装
        * 基本语法：
          
                axios.get(url)
                      .then( (response) =>  {
                          console.log(response);
                          let 数据 = response.data
                      })
                      .catch( (error) =>  {
                          console.log(error);
                      });
    * fetch
        * https://github.github.io/fetch/
        * https://segmentfault.com/a/1190000003810652
        * 基于promise对象设计
        * 语法：
        
                fetch(url)
                    .then((response) => {
                        return response.json()//将repsonse对象转换为promise对象，并对数据json格式化
                    })
                    .then(data => {
                        let 数据 = data
                    })
                    .catch(error => {
                        console.log(error)
                    })
#### 五.react扩展
1. 对象之间的关系
2. hash值
    * hash值
    	* 将任意长度的二进制字符串通过一定的算法映射成一个固定长度的较小二进制字符串，这个字符串就是对应的hash值，主要特点就是唯一的，不可逆的。
    * 前端路由的hash值(#)----->angular
    	* hash通常应用在spa单页面应用中。因为通过不同的hash值映射的url来是的浏览器添加一条不同的url历史记录。
    	* 通过浏览器的pushstate、replaceState来操作，请求不同的浏览器记录达到请求不同的页面的效果
    	* H5中提供的两个操作hash值得API来操作hash值
    	* window.location.hash读取#值
    	* window.onhashchange = func 监听hash改变
    * hash值得由来
        * 历史：
        	基于 Ajax 的 Web 应用最为明显的特征在于使用了浏览器内部原生支持的 XMLHttpRequest 对象与后台服务器进行数据通信，由于这种通信方式不需要页面的刷新动作，因而无论与后台发生了多少次通信，浏览器的 URL 会一直保持在初始地址不变。这随之而来的一个问题便是不断变化的页面状态信息无法记录到浏览器的历史记录堆栈中，从而使得用户无法通过浏览器的前进 / 后退按钮在不同状态页面间进行切换。
        * 解决思路：
           浏览器能够支持在用户访问过的页面间进行前进 / 后退的操作，依赖于内部维持的 history 对象。出于安全性的考虑，浏览器并不允许 JavaScript 脚本对该对象进行增删改之类写操作，而只是可以通过 history. back/forward() 等方法进行访问。既然在页面状态发生变化时，无法通过脚本直接去影响浏览器的历史信息，那么只有通过 URL 的变化来触发浏览器增加一条新的历史记录。这也就是说需要将 Ajax 应用的不同页面状态与 URL 进行一种一对一的映射，并且能够在回退或前进到某一 URL 之时，应用本身能够在页面无刷新的情况下跳转到正确的页面状态。
        如何对 Ajax 应用的初始 URL 进行改变，而同时这种变化的切换又不会引起页面的重新加载呢？答案只有一个，那就是借助用于页面内资源片段定位目的的“片段标识符”（fragment identifier），即 URL 中“#”符号后的字符串（hash string）。当浏览器向服务器端请求资源时，片段标识符并不会连同 base URL 一同发往服务器端，而只是在得到服务器返回的结果之后帮助浏览器快速定位到被相应的锚点（anchor）所标识的资源片段，即使无法找个对应的锚点，浏览器也并不会报错。正是基于浏览器的这一特性，构建片段标识符与页面状态之间的映射关系成为了解决此类问题的基础。
3. 路由、前端路由
    * 后端路由
    	* path（路由分发）
    		针对不同的路由对应不同的回调函数处理(req, res, next)
    		* req;获取请求参数
    		* res：返回请求数据
    		* next: 调用后续的回调函数
    * 前端路由
        * 路由是根据不同的url去请求不同的页面内容
        * 前端路由就是把不同路由对应不同的内容或页面的任务交给前端来做，之前是通过服务端根据url不同返回不同的页面来实现。
        * 利用H5的history的.pushState 和 history.replaceState ，这两个history新增的api，为前端操控浏览器历史栈提供了可能性
        * 这两个Api都会操作浏览器的历史栈，而不会引起页面的刷新。
        * 不同的是，pushState会增加一条新的历史记录，而replaceState则会替换当前的历史记录。
    	* 应用：单页面应用
    	* 优点和缺点：
    		* 优点：用户体验好，不需要每次向服务器发送请求请求页面数据，响应快
    		* 缺点：使用浏览器的前进，后退键的时候会重新发送请求，没有合理地利用缓存
