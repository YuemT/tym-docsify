#### 网页的基本组成
一个设计优良的网页要求结构、表现和行为要三者分离
* HTML(结构)
* CSS(表现)
* JavaScript(行为)

#### <div id='a'>一.标签</div>
HTML中是通过标签来编写网页的

##### 标签的语法
* 成对出现：`<标签名></标签名>`  
* 自结束标签：`<标签名 />`

##### 属性
* 属性是一个名值对的结构，用来对标签进行一些设置可以在开始标签或自结束标签中添加属性
* 语法：
    * `<标签名 属性名="属性值" 属性名="属性值" 属性名="属性值"></标签名>`
    * `<标签名 属性名="属性值" 属性名="属性值" 属性名="属性值" />`

##### 注释
* 注释中的内容不会在网页中直接显示，但是可以在源码中查看
* 通过注释可以对网页进行解释描述，要求简单明了(养成一个良好的编写注释的习惯)
* 语法:
    * `<!-- 注释的内容 -->`
4. 实体（转义字符）
* 在HTML中一些特殊的符号是不能直接打印，需要使用实体来代替
* 语法：
  * `&实体的名字;`
  * `&#字符编码;`
* 常用的实体：

        空格     &nbsp;
        <       &lt;
        >       &gt;
        版权符号 &copy;
        
####  <div id='b'>二.网页的基本结构</div>

    <!doctype html>
            <html>
                <head>
                    <meta charset="utf-8" />
                    <title></title>
                </head>
                <body>
                    <!-- 网页的主体内容 -->
                </body>
            </html>
            
#### <div id='c'>三.常用标签</div>
* `<!doctype html>` - 文档声明，声明当前的网页是html5标准的
* `<html>`  - 网页的根标签，网页中的所有的内容都应该写在根标签里
* `<head>` - 网页的头部，它里边的内容不会在网页中显示，它可以帮助浏览器来解析网页
* `<meta charset="utf-8" />	` - 设置网页的字符集为utf-8
* `<title> ` - 设置网页的标题，一般会在网页的标题栏显示
* `<body>` - 网页的主体内容，网页中所有的可见的内容都应该写在body中
* `h1 ~ h6 ` -标题标签，h1最重要 之后依次减弱
    * h1的重要性仅次于title，一个页面只能有一个h1
    * 一般情况下只会使用h1 ~ h3
*  `p` - 表示段落
* `<br />` - 换行标签
* `<hr />`  - 水平线标签

#### <div id='d'>四.列表</div>
* 无序列表

    <ul>
        <li></li>
        <li></li>
    </ul>
* 有序列表

    <ol>
          <li></li>
          <li></li>
    </ol>
* 定义列表
    
    <dl>
        <dt></dt>
        <dd></dd>
        <dt></dt>
        <dd></dd>
    </dl>
    
#### <div id='e'>五.图片</div>
`<img/>`
* 通过img标签来向页面中引入一个外部图片
        
         <img src="" alt="" width="" height="" />
    
##### 属性:
* src : 外部图片的路径
* alt : 当图片无法显示时对图片的描述，搜索引擎可以根据alt来判断图片的内容
* width : 设置图片的宽度
* height : 设置图片的高度  
    _宽度和高度，如果只设置一个值，另一个也会随之等比例改变_
* title : 当鼠标移入到元素上时，title属性中的内容将会作为提示文字显示

##### 相对路径：
* 相对于当前资源所在目录的路径
* 使用../返回到上一级目录，返回几级就使用几个
* 例子：

        site
        - pages
             - index.html   1.jpg   ../img/1.jpg
             - 1.jpg
        - img
             - 2.jpg
             
##### 图片的格式
1. JPEG(JPG)
    * 支持的颜色丰富，不支持透明效果，适合显示一些颜色丰富的图片（照片）
2. GIF
    * 支持的颜色少，支持简单的透明，支持动态图，适合显示一些颜色单一的图片或者动态图
3. PNG
    * 支持的颜色丰富，支持复杂的透明效果，适合显示颜色丰富有透明效果的图片
    * 图片的选择原则
    * 效果一致，用文件小的
    * 效果不一致，用效果好的

#### <div id='f'>六.超链接</div>
 `<a></a>`  
* 使用a标签创建一个超链接  
* 通过超链接可以从一个页面跳转到另一个页面

##### 属性
1. href
    * 要跳转到的目标地址，可以是一个相对路径，也可以是一个绝对路径
    * 可以将href的值指定为#，如果指定为#则点击超链接时，不会跳转页面，而是跳到当前页面的顶部
    * 可以将href的值指定为 #id属性值 此时点击超链接将会跳转到页面的指定位置(锚点链接)
2. target
    * 打开链接目标位置
    * 可选值：
        * _self 默认值 在当前窗口打开链接
        * _blank 在新的窗口打开链接
    
#### <div id='g'>七.id和class</div>
##### id 
id属性可以作为元素的唯一标识，在页面中不能出现重复的id属性值

##### class 
* class属性可以来为元素进行分类，一个页面中可以拥有多个重复的class属性值
* class属性值相同的元素我们称为一类元素，也可以为一个元素同时指定多个class，多个class之间使用空格分开

    _注意：id和class属性值不能使用数字开头_

#### <div id='h'>八.表格table</div>
在网页中可以使用表格来表示一些格式化的数据
- 比如:课程表 人名单 对账单 。。。

`<table></table>`
* 使用table来创建一个表格
* tr : 表示表格中的一行
* td : 表示表格中的一个单元格  
    _表格是一个几列的表格，由td最多的那行决定_
* th : 表示表头中的单元格
* table是一个块元素
* 例子：

        <table>
            <tr>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td></td>
                <td></td>
            </tr>
        </table>
        
##### 单元格的属性
* 设置边框间的距离
 ` border-spacing: 0px`
* 设置边框合并
  `border-collapse: collapse;`  
    _一旦设置了边框的合并，则`border-spacing`自动设置为0_
* 合并单元格
    * 横向的合并单元格   `colspan`
    * 纵向的合并单元格   `rowspan`
    
##### 长表格  
在日常生活中，有时需要使用一些比较长的表格，这些表格一般我们都要分成三个部分:    
* 表格头部 
    * `<thead>` 可以将头部的`tr`放到`thead`中
* 表格的主体
    * `<tbody>` 可以将主体的`tr`放到`tbody`中
    * 如果创建表格时，没有使用`tbody`，浏览器会自动创建`tbody`并将`tr`放入到`tbody`中
    * 此时tr的父元素默认是`tbody`而不是`table`
* 表格的底部
    * `<tfoot>`     可以将底部的`tr`放到`tfoot`中   
    
_这三个标签它们里边需要放的是`tr`，通过这三个标签可以将表格分成三个部分_

#### <div id='i'>九.表单(form)</div>
使用`<form>`标签来创建表单,表单可以用来将用户的信息提交给服务器

##### `<form>`表单的属性
* action (必须的)
    * action需要的是一个服务器的地址，我们的表单将会提交到该地址上
* disabled
    * 属性可以用来设置表单项是否禁用
     * true表示禁用, false表示可用
     * 使表单项可用(js) `inputs[0].disabled = false;`

##### `<input>` 标签用于搜集用户信息  
根据不同的 `type` 属性值，输入字段拥有很多种形式。输入字段可以是文本字段、复选框、掩码后的文本控件、单选按钮、按钮等等。
* 文本框 `type = 'text'`
    * 如果希望表单项中的数据可以提交到服务器中，还必须要为表单项指定一个`name`属性,	
      `name`属性表示的是表单项中的数据的名字
      
    _?username=admin&password=123123  
    当我们在表单项中指定了name属性以后，再去提交表单，表单中的数据默认会以查询字符串的形式发送到服务器中。
    查询字符串实际上是一个名值对结构，	名字就是表单项的name属性值，值就是用户所填写的内容，服务器收到查询字符串以后，就可以根据名字来获取用户填写的内容与名值对之间使用 & 来隔开_
* 密码框 `type = 'password'`
    * 密码框中的内容不会直接显示，而是以密文的形式  

* 单选按钮`type = 'radio'`
    * 类似于单选按钮的表单项，都需要使用 `name` 属性进行分组，`name` 属性相同的视为一组
    * 像这种选择框不需要用户填写内容，还必须要指定 `value` 属性，
    * 被选中的元素的 `value` 属性的值，将会传递到服务器中
    * 在单选或多选中可以通过 `checked="checked"` 来将选项设置为默认选中
* 多选框 `type = 'checkbox'`
    
* 下拉列表`<select></select>` 
    * `<select></select>` 创建一个下拉列表
    *  `<option></option>` 创建一个一个的下拉项  
       _下拉列表的 `name` 属性需要指定给 `select` , `value` 需要指定给 `option`_
    * `option selected="selected"` 将选项设置为默认选中
    * `multiple="multiple"`，将select设置为多选的下拉列表
    * `<optgroup></optgroup>` 对选项进行分组
    * `label`在`optgroup`中可以用来指定分组的名字

            <optgroup label="女明星">
                   <option value="fbb">范冰冰</option>
                   <option value="lxr">林心如</option>
            </optgroup>
* 提交按钮 `type = 'submit'`
    * 通过 `value` 属性来设置提交按钮上的文字
* 重置按钮 `type="reset" ` 
    * 通过重置按钮可以将表单初始化
* 普通按钮 `type="button" ` 
    * 创建一个普通的按钮，唯一的功能就是被点击
* button `<button type="submit">按钮1</button>`
    * 可以通过button标签来创建按钮,区别与input，它不是一个自结束标签

4. 例子：
    
        <form action=""> <!-- action需要一个服务器的地址 -->
                     
            文本框 <input type="text" name="" value="文本框中的默认值" />
            密码框 <input type="password" name="" />
            单选按钮 <input type="radio" name="" value="" />
            多选框 <input type="checkbox" name="" value="" />
            下拉列表
                <select name="">
                    <option value=""></option>
                    <option value=""></option>
                    <option value=""></option>
                </select>
            
            提交按钮 <input type="submit" value="按钮的文字" />
            重置按钮 <input type="reset" value="按钮的文字" />
            普通按钮 <input type="button" value="按钮的文字" />
            
            提交按钮 <button type="submit">按钮的文字</button>
            重置按钮 <button type="reset">按钮的文字</button>
            普通按钮 <button type="button">按钮的文字</button>
    
        </form>
    <form action=""> <!-- action需要一个服务器的地址 -->
                         
                文本框 <input type="text" name="" value="文本框中的默认值" />
                密码框 <input type="password" name="" />
                单选按钮 <input type="radio" name="" value="" />
                多选框 <input type="checkbox" name="" value="" />
                下拉列表
                    <select name="">
                        <option value=""></option>
                        <option value=""></option>
                        <option value=""></option>
                    </select>
                
                提交按钮 <input type="submit" value="按钮的文字" />
                重置按钮 <input type="reset" value="按钮的文字" />
                普通按钮 <input type="button" value="按钮的文字" />
                
                提交按钮 <button type="submit">按钮的文字</button>
                重置按钮 <button type="reset">按钮的文字</button>
                普通按钮 <button type="button">按钮的文字</button>
        
    </form>