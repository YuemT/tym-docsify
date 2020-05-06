##React
>###ReactJS是什么?
1.Facebook开源的一个js库  
2.用于动态构建用户界面的js数据库  
3.React的特点:  
* Declarative(声明式编码)  
* Component-Based(组件化编码)  
* Learn Once, Write Anywhere(支持客户端与服务器渲染)  
* 高效  
* 单向数据流 (只能从model层流向view层)   

4.ReactJS官网：http://facebook.github.io/react/  
5.Github地址：https://github.com/facebook/react  
>###React高效的原因:
1.虚拟(virtual)DOM, 不是直接操作DOM  
2.高效的DOM Diff算法, 最小化页面重绘
_____
###对象之间的几种关系????????
_______


>###几个重要概念:
1. 模块与组件
* 模块:
    * 理解：向外提供特定功能的js程序，一般就是一个js文件
    * 为什么：js代码更多更复杂
    * 作用：简化js的编写，阅读，提高运行效率
* 组件:
    * 理解:用来实现特定功能效果的代码集合(html/css/js)
    * 为什么：界面的功能越来越复杂
    * 作用：复用，简化项目编码，提高运行效率 

2.模块化与组件化    
* 模块化：
    * 当应用的js都以模块来编写，并遵循一定模块化规范，这个应用就是一个模块化的应用
* 组件化：
    * 当应用是以多组件的方式实现功能，这个应用就是一个组件化的应用
    
(模块化-->组件化-->工程化开发)

>###虚拟dom对象

* React提供了一些API来创建一种 **特别** 的js对象  
`var element = React.creatElement('h1',{id:'myTitle'},'hello');`  
* React.creatElement(参数1，参数2，参数3) 创建的就是一个简单的虚拟DOM对象  
* 虚拟DOM对象最终都会被React转换为真实的DOM  
* 我们编码时基本只需要操作react的虚拟DOM相关数据,react会转换为真实DOM变化而更新界面
>###JSX

* 全称: JavaScript XML
* react定义的一种类似于XML的JS扩展语法: XML+JS
* 作用: 用来创建react虚拟DOM(元素)对象
    * `var ele = <h1>Hello JSX!</h1>;`
    * 注意1: 它不是字符串, 也不是HTML/XML标签
    * 注意2: 它最终产生的就是一个JS对象
* 标签名任意: HTML标签或其它标签
* 标签属性任意: HTML标签属性或其它
* 基本语法规则:
    * 遇到 <开头的代码, 以标签的语法解析: html同名标签转换为html同名元素, 其它标签需要特别解析
    * 遇到以 { 开头的代码，以JS的语法解析: 标签中的js代码必须用{}包含  
        `var msg = '尚硅谷'`  
        `var element = <p>{msg}</p>`
    * 注意：虚拟dom必须有结束标签／
* babel.js的作用
    * 浏览器的js引擎是不能直接解析JSX语法代码的, 需要babel转译为纯JS的代码才能运行
    * 只要用了JSX，都要加上type="text/babel", 声明需要babel来处理
    
>###渲染虚拟DOM(元素)
* 语法: ReactDOM.render(virtualDOM, containerDOM) :
* 作用: 将虚拟DOM元素渲染到真实容器DOM中显示
* 参数说明
    * 参数一: 纯js或jsx创建的虚拟dom对象
    * 参数二: 用来包含虚拟DOM元素的真实dom元素对象(一般是一个div)
>###创建虚拟DOM的2种方式:
1. 纯JS(一般不用):  
       `React.createElement('h1', {id:'myTitle'}, title)`
2. JSX:  
      `<h1 id='myTitle'>{title}</h1>`
>###React Helloworld
1. 相关js库  
    react.js: React的核心库  
    react-dom.js: 提供操作DOM的扩展库  
    babel.min.js: 解析JSX语法代码转为纯JS语法代码的库
      > 下载地址：  
      http://www.bootcdn.cn/  
        https://cdnjs.com/ 
        
2. 在页面中导入js(注意文件引入的顺序)
        
          <script type="text/javascript" src="../js/react.js"></script>
          <script type="text/javascript" src="../js/react-dom.js"></script>
          //引入这个库的时候，全局自动多了一个ReactDOM对象，
          //它有一个方法，render(参数1，参数2),
          //参数1:创建的虚拟dom对象
          //参数2：虚拟dom对象渲染完成后，放入页面中所置于的容器
          //需要在页面准备一个容器，需要靠id匹配容器
          <script type="text/javascript" src="../js/babel.min.js"></script>
    
3.编码
  * 创建虚拟dom对象-->渲染虚拟dom对象为真正的dom对象   

        <div id="container"></div>
        <script type="text/babel ">
              var element = <p>虚拟dom对象</p>;
              //渲染
              ReactDOM.render(element,document.getElementById('container'));
        </script>
>###用React遍历显示数组中所有的元素
* 使用JSX创建虚拟DOM
* React能自动遍历显示数组中所有的元素
* array.map()的使用
* 将数据数组转换成html标签数组
* 遍历生成的li需要一个唯一值key
    
          //创建一个数组
            var arr = [1,2,3,5,7]
          //渲染虚拟dom对象
            ReactDOM.render(
                //虚拟dom对象
                //React能自动遍历显示数组中所有的元素
                <ul>
                    {
                        arr.map((item,index)=>{
                            return <li key={index}>{item}</li>
                        })
                    }
                </ul>,
                document.getElementById('container3')
            )
            
>###自定义组件(Component)
####1.定义组件:  
* 方式1：工厂(无状态)函数(最简洁, 推荐使用)---this是undefined

        function MyComponent1() {
              return <h1>自定义组件标题11111</h1>
            }
* 方式2: ES6类语法(复杂组件, 推荐使用)---有状态
        
        class MyComponent3 extends React.Component {
              render () {
                return <h1>自定义组件标题33333</h1>
              }
            }
* 方式3: ES5老语法(不推荐使用了)
        
        var MyComponent2 = React.createClass({
              render () {
                return <h1>自定义组件标题22222</h1>
              }
        })
* 渲染组件标签 
        
        ReactDOM.render(<MyComponent/>, document.getElementById('example'));
####2.注意：
* 返回的组件类必须首字母大写
* 虚拟DOM元素必须只有一个根元素
* 虚拟DOM元素必须有结束标签
####3.ReactDOM.render()渲染组件标签的基本流程
* React内部会创建组件实例对象/调用函数
* 得到包含的虚拟DOM并解析为真实DOM
* 插入到指定的页面元素内部
####4.实例应用 
        
        <div id="div1"></div>
        <div id="div2"></div>
        <div id="div3"></div>
        
        //工厂函数式---->定义简单组件（无状态）
        function Welcome1() {
            return <h2>工厂函数式创建的组件</h2>
        }
        
        //ES6的类class---->复杂组件
        //继承于React的核心组件类,此过程中自动创建了类的实例
        //实例调用的render方法是继承React的核心组件类的
        class Welcome2 extends React.Component{
            render(){
                //操作的是实例
                console.log(this instanceof Welcome2, this);
               return <h3>ES6的类class创建的组件</h3>
            }
        }
        
        //ES5D的老语法
        var Welcome3 = React.createClass({
            render () {
                return <h1>ES5D的老语法</h1>
            }
        });
        
        //渲染组件标签
        ReactDOM.render(<Welcome1 />, document.getElementById('example1'));
        ReactDOM.render(<Welcome2 />, document.getElementById('example2'));
        ReactDOM.render(<Welcome3 />, document.getElementById('example3'));

  * 注意ES6中类的实例方法：
  
          //定义子类
          class Son extends Person{
              //定义构造方法
              constructor (name,age,salary){
                  super(name,age);//调用父类Person的构造方法
                  this.salary = salary;//自己的构造方法
              }
              // 重写: 子类自动拥有父类的方法, 但方法的实现不能满足当前的要求, 就需要重写
              printInfo(){
                  console.log(this.name + " : " + this.age + " : " + this.salary);
              }
          }
          //创建子类的实例
          var son = new Son('tym',18,200000);
          console.log(son);

>###组件实例对象的3大属性之一: props属性(props是一个对象)
* 每个组件实例对象都会有props(properties的简写)属性  
* 组件标签的所有标签属性都保存在props中
* 内部读取某个属性值: this.props.propertyName
* 作用: 通过标签属性从组件外向组件内传递数据(只读)
* 对props中的属性值进行类型限制和必要性限制
        
        Person.propTypes = {
              name: React.PropTypes.string.isRequired,
              age: React.PropTypes.number.isRequired
            }

* 扩展属性: 将对象的所有属性通过props传递

      <Person {...person}/>
     
* 默认属性值
        
      Person.defaultProps = {
            name: 'Mary'
          };
* 组件类的构造函数
        
        constructor (props) {
          super(props);
          console.log(props); // 查看所有属性
        }
        
* 问题: 为什么要设计对prop会进行约束的语法?
* 实例应用1:  
    * 需求: 自定义用来显示一个人员信息的组件,说明    
             1). 如果性别没有指定, 默认为男  
             2). 如果年龄没有指定, 默认为18
            
            //定义一个Person组件
                class Person extends React.Component{
                    render(){
                         let person = this.props;
                         return(
                                 <ul>
                                     <li>姓名：{person.name}</li>
                                     <li>年龄：{person.age}</li>
                                     <li>性别：{person.sex}</li>
                                 </ul>
                         )
                    }
                }
                //定义一个对象，用来向组建内传递数据
                var person = {
                    name:'tym',
                    age:27,
                    sex:'女'
                }
                //定义默认属性
                Person.defaultProps={
                    age:18
                }
                //定义属性值的类型和必要性,这个时候如果组件中没有name属性或者name属性值类型不对，属性值依然会显示，但是会有警告
                Person.propTypes={
                    name:React.PropTypes.string.isRequired
                }
                //渲染组件，为组件添加属性
                ReactDOM.render(<Person name={person.name} sex={person.sex}/>,document.getElementById('example2'))
                //通过...运算符将对象的所有属性传进去
                ReactDOM.render(<Person {...person}/>,document.getElementById('example3'));       
* 实例应用2:
    * 组件的嵌套
    * 分析需求
        1. 拆分组件: 拆分界面, 抽取组件
         * 单个标题组件: Welcome
         * 应用组件: App
        2. 分析确定传递数据和数据类型
         * Welcome: props.name  string
         * App: props.names    array  
    * react会自动遍历数据将数组的每一项内容抽出，将数据数组转换成标签数组
    
            //定义Welcome组件
              //外层组件将props以参数的形式传给内层组件
              function Welcome(props) {
                  console.log(props.names);//说明不能继承外层组件的props
                  return <h2>welcome {props.name}</h2>
              }
              //定义App组件
              class App extends React.Component{
                  render(){
                      let names = this.props.names;
                      //console.log(names);
                      return(
                          <ul>
                              {
                                  names.map((item,index)=>{
                                      return <Welcome key={index} name={item}/>
                                  })
                              }
                          </ul>
                      )
                  }
              }
              let names=['aaa','bbbb','cccc','dddd']
              //渲染组件
              ReactDOM.render(<App names={names}/>,document.getElementById('example'));
    
>###组件实例对象的3大属性之二: refs属性   
* 组件内的标签都可以定义 ref 属性来标识自己
* 在组件中可以通过this.refs.refName来得到对应的真实DOM对象
* 作用: 用于操作指定的ref属性的dom元素对象(表单标签居多)
        
        <input ref='username'>
        this.refs.username //返回input对象

* 事件处理:
    * 通过onXxx属性指定组件的事件处理函数(注意大小写)
        * React使用的是自定义(合成)事件, 而不是使用的DOM事件
        * React中的事件是通过委托方式处理的(委托给组件最外层的元素)
        * 在react中自定义的方法都指向null，而内置的方法this指向实例对象
    * 通过event.target得到发生事件的DOM元素对象(事件委托,将事件绑定在其父元素上)
            
            <input onFocus={this.handleClick}/>
                handleFocus(event) {
                event.target  //返回input对象
            }
            
    * 特别注意：
        * 组件内置的方法中的this为组件的实例对象
        * 在组件中自定义的方法中的this为null
        * 工厂函数创建组件时，this为undefined
            * 强制绑定this
            
                    constructor(props){
                        super(props);
                        //console.log(this);//this指向的肯定是组件类的实例对象
                        this.handleClick = this.handleClick.bind(this);
                    }
            * 箭头函数(ES6模块化编码时才能使用)
                > 箭头函数没有自己的this，其this与外层函数this相同，若没有外层函数this是window
                
    * 问题：如何给一个函数强制制定内部的this？  
         * call() apply() bind()  
         * 相同点：都能强制指定this  
         * 不同点：call和apply指定完this后，函数立即执行。bind指定this后将当前函数返回。call传参数时直接传参，apply传以数组的形式传参

* 实例应用：
  
    <input type="text">
    <button>提示输入数据</button>
    <input type="text" placeholder="失去焦点提示数据">   
    
     * 需求: 自定义组件, 功能说明如下:  
               1. 界面如果页面所示  
               2. 点击按钮, 提示第一个输入框中的值  
               3. 当第2个输入框失去焦点时, 提示这个输入框中的值 
     
             <div id="example"></div>
             
             <script type="text/babel">
               //创建组件
                   class App extends React.Component{
                       constructor(props){
                           super(props);
                           //console.log(this);//this指向的肯定是组件类的实例对象
                           this.handleClick = this.handleClick.bind(this);
                       }
                       //定义点击事件的方法
                       handleClick(){
                           //console.log(this);
                           let value = this.refs.msg.value;
                           alert(value);
                       }
                       //定义失去焦点的方法
                       handleBlur(event){
                           let value = event.target.value;
                           alert(value);
                       }
                       render(){
                           console.log(this);
                           return (
                                   <div>
                                       <input ref="msg" type="text" />
                                       <button onClick={this.handleClick}>提示输入数据</button>
                                       <input onBlur={this.handleBlur} type="text" placeholder="失去焦点提示数据" />
                                   </div>
                           )
                       }
                   }
               
                   //渲染组件
                   ReactDOM.render(<App />,document.getElementById('example'));
               
               </script>
               
>###组件3大属性之: state属性
* 组件被称为"状态机", 通过更新组件的状态值来更新对应的页面显示(重新渲染)
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
          }) 
* 问题: 请区别一下组件的props和state属性?-------????????搜下正确答案
    * props传入的数据是只读的，state是可以改变状态的
    * props的数据是从组件外面通过标签属性的形式传进来的，state的数据是初始化在组件内部的，放在react内存中的
    
* 实例应用1：  
    * 需求: 自定义组件, 功能说明如下   
        1. 显示h2标题, 初始文本为: 四是四 
        2. 点击标题更新为:  十是十   
         注意:因为涉及到数据的切换，而不仅仅是数据显示，所以没有直接将数据写在状态值中，而是通过true和false，通过三目运算符，设置数据切换的显示。
        
        
            class ChangeState extends React.Component{
                //设置初始化状态
                constructor(props){
                    super(props);
                    this.state={
                        state1:true
                    }
                    this.onclick = this.onclick.bind(this);
                }
                onclick(){
                    this.setState({
                        state1:!this.state.state1
                    })
                }
                render(){
                    let msg = this.state.state1?'四是四':'十是十';
                    return (
                        <p onClick={this.onclick}>{msg}</p>
                    )
                }
            }
            ReactDOM.render(<ChangeState />,document.getElementById('example'));
            
* 实例应用2:  
     <h2>Simple TODO List</h2>
         <input type="text">
         <button>Add #4</button>
         <ul>
           <li>吃饭</li>
           <li>睡觉</li>
           <li>打豆豆</li>
         </ul>
         
    功能：组件化实现此功能  

    1.界面显示如上所示  
    2.输入文本, 点击按钮显示到下面列表的首位, 并清除输入的文本
    
    思路：  
    
    > 实现静态页面 > 将数据写活 > 添加交互效果
        
    * 分解组件：  
      外层组件-->应用：App  
      内层组件-->列表：TodoList;输入：Todos   
    * 创建组件，初步渲染组件  
    * 让TodoList列表动态生成li  
        * 此时涉及到组件实例对象状态的改变，为外层组件设置初始化状态，方便内层组件使用    
        * 为组件设置属性，值为App初始化状态的值，通过通过this.state.属性值获得  
        * 内部组件通过this.props获得组件标签的属性值，获得初始化状态值，对其进行遍历并生成li，并显示对应内容  
    * 为按钮添加点击事件，并将用户输入的内容添加给外层App-->修改App的状态  
        * 自定义事件需要强制指定this  
        * 为input设置ref唯一标识，通过this.refs.标识名.value获得用户输入的数据msg    
        * 为外层组件添加add()方法，设置形参msg，为todolist添加add属性，值为this.add,todolist调用add方法并将msg以实参的形式，传递给add()  
        * 外层组件获取到msg，修改其状态，为todos添加msg  
    * 优化
        * 修改App状态之后将输入框内容置为空(todos,add方法调用之后)
        * 判断用户输入，如果为空，则弹出提示内容      
        
                class Todos extends React.Component{
                        constructor(props){
                            super(props);
                            this.onclick = this.onclick.bind(this);
                        }
                        onclick(){
                            //获取用户输入的值
                            let msg = this.refs.msg.value;
                            //判断用户输入的值，如果为空，退出
                            if(msg.trim()===''){
                                alert('输入的内容不能为空');
                                return;
                            }
                            //alert(msg);
                            //将数据返回给外层组件--修改外层组件的状态
                            this.props.add(msg);
                            //调用方法之后，将数据置为空
                            this.refs.msg.value='';
                        }
                        render(){
                            return(
                                <div>
                                    <input ref='msg' type="text"/>
                                    <button onClick={this.onclick}>Add #4</button>
                                </div>
                            )
                        }
                    }
                    //let msg = this.state.todos;???-----为什么不能获取到msg-----this是TodoList组件的实例对象
                    //通过对象的解构赋值写法，利用组件实例对象的props属性在内部组件中获取外部组件的state状态属性值
                    //let {todos}= this.props;
                    class TodoList extends React.Component{
                        render(){
                            //通过遍历todos，动态生成li
                            let {todos}= this.props;
                            console.log(this);
                            return(
                                    <ul>
                                        {
                                            todos.map((item,index)=>{
                                            return <li key={index}>{item}</li>
                                        })
                                        }
                                    </ul>
                            )
                        }
                    }
                    class App extends React.Component{
                        constructor(props){
                            super(props);
                            this.state = {
                                todos:['吃饭','睡觉','打豆豆']
                            }
                            this.add = this.add.bind(this);
                        }
                        add(msg){
                            //为外层组件定义一个方法／属性
                            let todos = this.state.todos;
                            todos.unshift(msg);
                            this.setState({todos});
                        }
                        render(){
                            //获取外层组件的todos
                            let {todos} = this.state;
                            //console.log(typeof(todos),todos+'jjjj');
                            return(
                                <div>
                                    <Todos add={this.add}/>
                                    <TodoList todos={todos}/>
                                </div>
                            )
                        }
                    }
                    ReactDOM.render(<App />,document.getElementById('example'));
                
>###受控组件
* React是一个单向数据流
* 但可以自定义双向数据流组件(受控组件)

    <input type="text" value="atguigu">
    <p>atguigu</p>
* 功能: 自定义组件, 功能如下  
      * 界面如页面所示
      * 初始数据显示为atguigu ----初始化状态
      * 输入数据时, 下面的数据同步变化 ----动态更改状态
      
        //创建组件
          class TwoWay extends React.Component{
              constructor(props){
                  super(props);
                  this.state={
                      msg:'atguigu'
                  }
                  this.changeMsg = this.changeMsg.bind(this);
              }
              //也可以通过为input设置ref唯一标识获取input的vale属性值
              changeMsg(event){
                  let msg = event.target.value;
                  this.setState({msg});
              }
              //使用对象的解构赋值手法获取msg值
              render(){
                  let {msg} = this.state;
                  return(
                        <div>
                            <input onChange={this.changeMsg} type="text" value={msg}/>
                            <p>{msg}</p>
                        </div>
                  )
              }
          }
          ReactDOM.render(<TwoWay/>,document.getElementById('example'))

        
>###组件的三个生命周期状态:
* Mount：插入真实 DOM(挂载)
* Update：被重新渲染
* Unmount：被移出真实 DOM  

    #####React 为每个状态都提供了两种勾子(hook)函数，will 函数在进入状态之前调用，did 函数在进入状态之后调用
    * componentWillMount() 将要挂载
    * componentDidMount() : 已插入真实DOM, 在render之后才会执行
    * componentWillUpdate(object nextProps, object nextState)将要更新
    * componentDidUpdate(object prevProps, object prevState)已经更新
    * componentWillUnmount()//移除真实的dom  
    
    ####生命周期流程:
    >1.第一次初始化渲染显示: render() 
    * constructor(): 创建对象初始化state
    * componentWillMount() : 将要插入回调
    * render() : 用于插入虚拟DOM回调
    * componentDidMount() : 已经插入回调  
    >2.每次更新state: this.setSate() 
    * componentWillUpdate() : 将要更新回调
    * render() : 更新(重新渲染)
    * componentDidUpdate() : 已经更新回调
    >3.删除组件
    * ReactDOM.unmountComponentAtNode(document.getElementById('example')) : 移除组件
    * componentWillUnmount() : 组件将要被移除回调
    >注意:
    * 一般会在componentDidMount()中: 开启监听, 发送ajax请求
    * 可以在componentWillUnmount()做一些收尾工作: 停止监听
    * 生命周期还有一个方法(后面需要时讲): componentWillReceiveProps
    * 在组件移除前，必须清除组件内设置的定时器，否则组件移除后，定时器仍存在，会导致内存溢出，通过把定时器句柄设置为组件实例对象的属性，才能在componentWillUnmount()中移除定时器
   
    ![组建生命周期](./组件生命周期.png)
    
    >代码展示
    
        //定义组件
        class LifeCycle extends React.Component{
            constructor(props){
                console.log('constructor()');
                super(props);
                this.state = {
                    name : 'kobe',
                    age : 39
                }
            }
            //将要挂载
            componentWillMount(){
                console.log('componentWillMount()');
            }
            //挂载完毕
            componentDidMount(){
                console.log('componentDidMount()');
                setTimeout(function () {
                    this.setState({
                        name : 'curry',
                        age : 29
                    })
                }.bind(this), 2000);
                setTimeout(() => {
                    ReactDOM.unmountComponentAtNode(document.getElementById('example'));
                }, 4000);
                //定时器返回的是定时器句柄---就是清除定时器的标识
                this.intervalId = setInterval(function () {
                    console.log('ddddd');
                }, 1000)
            }
            //将要更新
            componentWillUpdate(){
                console.log('componentWillUpdate()');
            }
            //更新完毕
            componentDidUpdate(){
                console.log('componentDidUpdate()');
            }
            componentWillUnmount(){
                console.log('componentWillUnmount()');
                clearInterval(this.intervalId);
            }
            render(){
                console.log('render()');
                return (
                       <p>{this.state.name}---{this.state.age}</p>
                )
            }
        }
        //渲染组件
        ReactDOM.render(<LifeCycle />, document.getElementById('example'));
        
        
> 实例应用：

* 自定义组件:让指定的文本做显示/隐藏的动画
        
        //定义组件
            class ShowMsg extends React.Component{
                constructor(props){
                    super(props);
                    this.state = {
                       opacity : 1
                    }
                }
                //挂载结束
                componentDidMount(){
                    //开启定时器
                    //获取当前的状态值
                    let opacity = this.state.opacity;
                    setInterval(function () {
                        //也可通过箭头函数强制指定this
                        opacity -= 0.05;
                        this.setState({opacity});
                        //设置显示限制条件
                        if(opacity < 0.1){
                            opacity = 1
                        }
                    }.bind(this), 100)
                }
                render(){
                    //此时需要{{}},第一个{}是因为此时的内容为js代码，第二个{}是因为此时的样式是一个对象，里面保存着多个属性与属性值的键值对
                    return <p style={{opacity : this.state.opacity,color:'red'}}>IT教育培训---尚硅谷</p>
                }
            }
        
            //渲染组件
            ReactDOM.render(<ShowMsg />, document.getElementById('example'));
            
            
>###虚拟DOM+DOM Diff算法: 最小化页面重绘
验证  
* Hello, <input type="text" placeholder="Your name here"/>!
      It is 21:02:05 GMT+0800 (CST)
* 代码实现：
        
        class HelloWorld extends React.Component {
              constructor(props) {
                  super(props);
                  this.state = {
                      date: new Date()
                  };
              }    
              componentDidMount () {
                  setInterval(() => {
                      this.setState({
                          date: new Date()
                      })
                  }, 1000)
              }   
              render () {
                  console.log('render()');
                  return (
                          <p>
                              Hello, <input type="text" placeholder="Your name here"/>!
                              It is {this.state.date.toTimeString()}
                          </p>
                  );
              }
          }
        
          ReactDOM.render(
                  <HelloWorld/>,
                  document.getElementById('example')
          );