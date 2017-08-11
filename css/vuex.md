# 前沿
###### vuex是一个专门为vue.js设计的集中式状态管理架构。状态---理解为在data中的属性需要共享给其他vue组件使用的部分，就叫做状态。简单的说就是data中需要共用的属性。比如：我们有几个页面要显示用户名称和用户等级，或者显示用户的地理位置。如果我们不把这些属性设置为状态，那每个页面遇到后，都会到服务器进行查找计算，返回后再显示。在中大型项目中会有很多共用的数据.

***

> <font color=red> 第1节：安装  
第2节：state访问状态对象   
第3节：Mutations修改状态  
第4节：getters计算过滤操作  
第5节：actions异步修改状态 
</font>

#
# 安装
1. 利用npm包管理工具，进行安装 vuex。在控制命令行中输入下边的命令就可以了。

~~~ javascript
npm install vuex --save
~~~
###### *需要注意的是这里一定要加上 –save，因为你这个包我们在生产环境中是要使用的。
#
2. 新建一个vuex文件夹（这个不是必须的），并在文件夹下新建store.js文件，文件中引入我们的vue和vuex。
~~~ javascript
import Vue from 'vue';
import Vuex from 'vuex';
~~~

3. 使用我们vuex，引入之后用Vue.use进行引用。
~~~ javascript
Vue.use(Vuex);
~~~
###### 通过这三步的操作，vuex就算引用成功了

***
# state访问状态对象

### 赋值给模板里data中的值,有三种赋值方式

1. 通过computed的计算属性直接赋值

~~~ javascript
computed:{
    count(){
        return this.$store.state.count;
    }
}
~~~

2. 通过mapState的对象来赋值
###### 我们首先要在template中用import引入mapState。
~~~
import {mapState} from 'vuex';
~~~
###### 然后还在computed计算属性里写如下代码：
~~~ javascript
computed:mapState({
    count:state=>state.count
 })
~~~
3. 通过mapState的数组来赋值
~~~ javascript
computed:mapState(["count"])
~~~

***
# Mutations修改状态
###### Vuex提供了commit方法来修改状态
~~~ javascript
$store.commit( )
~~~

~~~ html
<button @click="$store.commit('add')">+</button>
<button @click="$store.commit('reduce')">-</button>
~~~

###### index.js文件：
~~~ javascript
const mutations={
    add(state){
        state.count++;
    },
    reduce(state){
        state.count--;
    }
}
~~~

### 模板获取Mutations方法
1. 在模板count.vue里用import 引入我们的mapMutations

~~~ javascript
import { mapState,mapMutations } from 'vuex';
~~~

2. 在模板的`<script>`标签里添加methods属性，并加入mapMutations

~~~ javascript
 methods:mapMutations([
        'add','reduce'
]),

	
<button @click="reduce">-</button>
~~~

***
# getters计算过滤操作
###### getters从表面是获得的意思，可以把他看作在获取数据之前进行的一种再编辑,相当于对数据的一个过滤和加工。你可以把它看作store.js的计算属性

###### 我们首先要在index.js里用const声明我们的getters属性。
~~~ javascript
const getters = {
    count:function(state){
        return state.count +=100;
    }
}
~~~
###### 写好了gettters之后，我们还需要在Vuex.Store()里引入，

~~~ javascript
export default new Vuex.Store({
    state,mutations,getters
})
~~~
###### 在index.js里的配置算是完成了，我们需要到模板页对computed进行配置。在vue 的构造器里边只能有一个computed属性，如果你写多个，只有最后一个computed属性可用，所以要对上节课写的computed属性进行一个改造。改造时我们使用ES6中的展开运算符”…”。

~~~ javascript 
computed:{
    ...mapState(["count"]),
    count(){
        return this.$store.getters.count;
    }
},
~~~
###### 用mapGetters简化模板写法：
###### 首先用import引入我们的mapGetters
~~~ javascript
import { mapState,mapMutations,mapGetters } from 'vuex';
~~~
###### 在computed属性中加入mapGetters
~~~ javascript
...mapGetters(["count"])
~~~
***
# actions异步修改状态
###### actions和之前的Mutations功能基本一样，不同点是，actions是异步的改变state状态，而Mutations是同步改变状态
~~~ javascript
const actions ={
    addAction(context){
        context.commit('add',10)
    },
    reduceAction({commit}){
        commit('reduce')
    }
}

export default new Vuex.Store({
    state,
    mutations,
    getters,
    actions
})
~~~
###### 在actions里写了两个方法addAction和reduceAction，在方法体里，我们都用commit调用了Mutations里边的方法。
- context：上下文对象，这里你可以理解称store本身。  
- {commit}：直接把commit对象传递过来，可以让方法体逻辑和代码更清晰明了。

### 模板中的使用
~~~ html
<p>
  <button @click="addAction">+</button>
  <button @click="reduceAction">-</button>
</p>
~~~
###### 另一种
~~~ javascript
methods:{
    ...mapMutations([  
        'add','reduce'
    ]),
    ...mapActions(['addAction','reduceAction'])
},
引入
import { mapState, mapMutations, mapGetters, mapActions } from 'vuex'
~~~