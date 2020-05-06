## 一.vuex是什么
* github站点: https://github.com/vuejs/vuex
* 在线文档: https://vuex.vuejs.org/zh-cn/
* 简单来说: 对应用中组件的状态(data中的数据)进行集中式的管理(读／写)

## 二.状态自管理应用
* state: 驱动应用的数据源
* view: 以声明方式将state映射到视图
* actions: 响应在view上的用户输入导致的状态变化(包含n个更新状态的方法)
![单向数据流](./image/flow.png)
           
           state,状态,指的是data中数据的状态，view代表页面视图，view通过读取
           data中的数据，动态显示页面，当state的状态发生改变的时候，view页面也
           会随之改变。Actions是一个函数／方法的集合对象，当view视图响应用户操
           作时，会触发Actions中的方法／函数，更改state的状态。

## 三.多组件共享状态的问题
* 多个视图依赖于同一状态
* 来自不同视图的行为需要变更同一状态
* 以前的解决办法
    * 将数据以及操作数据的行为都定义在父组件
    * 将数据以及操作数据的行为传递给需要的各个子组件(有可能需要多级传递)
* vuex就是用来解决这个问题的
![vuex结构](./image/vuex.png)

## 四.vuex的核心概念
1. state
    * vuex管理的状态对象
    * 它应该是唯一的

            const state = {
                xxx: initValue
            }
2. mutations
	* 包含多个直接更新state的方法(回调函数)的对象
	* 谁来触发: action中的commit('mutation名称')
	* 只能包含同步的代码, 不能写异步代码
            
            const mutations = {
                yyy (state, data) { 
                    // 更新state的某个属性
                }
            }
3. actions
	* 包含多个事件回调函数的对象
	* 通过执行 commit() 来触发 mutation 的调用, 间接更新 state
	* 谁来触发: 组件中: $store.dispatch('action名称')  // 'zzz'
	* 可以包含异步代码(定时器, ajax请求)
            
            const actions = {
                zzz ({commit, state}, data1) {
                    commit('yyy', data2)
                }
            }
4. getters
	* 包含多个计算属性(get)的对象
	* 谁来读取: 组件中: $store.getters.xxx
            
            const getters = {
                mmm (state) {
                    return ...
                }
            }
5. modules
	* 包含多个module
	* 一个module是一个store的配置对象
	* 与一个组件(包含有共享数据)对应

6. 向外暴露store对象

        export default new Vuex.Store({
            state,
            mutations,
            actions,
            getters
        })

7. 组件中:

        import {mapGetters, mapActions} from 'vuex'
        export default {
            computed: mapGetters(['mmm'])
            methods: mapActions(['zzz'])
        }
    
        {{mmm}} @click="zzz(data)"


8. 映射store

        import store from './store'
        new Vue({
            store
        })

##  五.实例应用
1. 将vuex引到项目中
    * 下载: npm install vuex --save
2. 使用vuex

        store.js
            import Vuex from 'vuex'
            export default new Vuex.Store({
                state,
                mutations,
                actions,
                getters,
                modules
            })
        main.js
            import store from './store.js'
            new Vue({
                store
            })
