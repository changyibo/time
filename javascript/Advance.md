# ECMAScript 下

::: tip 
* 作用域及闭包
* 原型
* 异步与单线程
:::

## 作用域及闭包

### 函数执行流程
<img :src="$withBase('/imgs/stack.png')" alt="foo">

* 创建执行环境: 开辟新的栈内存
* 词法解析
* 变量提升/函数提升: 声明变量的关键字： var let const function import 等
   - var：只提升，不赋值
   - function： 提升，且赋值
   - let/const： 不进行变量提升，所在的执行栈就是其块级作用域
   - 箭头函数： 不进行变量提升
* 入栈运行



### this专题

#### 手写 call/apply/bind

- 要注意的点
  1. 尽量使用闭包，防止全局污染
  2. 得到的参数是一个伪数组，需要使用 Array.from 将其转化为数组
  3. bind 实现要考虑到 this 的问题

```javascript
let obj = {
  name: "Yibo",
  age: 30,
};
function sayHi(city) {
  console.log(
    `my name is ${this.name}, and ${this.age} years old, I am in ${city}`
  );
}
~(function() {
  function _call(context) {
    let args = Array.from(arguments).slice(1);
    context.fn = this;
    context.fn(...args);
    delete context.fn;
  }
  function _bind(context) {
    return () => {
      let args = Array.from(arguments).slice(1);
      context.fn = this;
      context.fn(...args);
      delete context.fn;
    };
  }
//   function _bind(context) {
//     let that = this;
//     let args = Array.from(arguments).slice(1);
//     return function() {
//       context.fn = that;
//       context.fn(...args);
//       delete context.fn;
//     };
//   }

  Function.prototype._call = _call;
  Function.prototype._bind = _bind;
})();

sayHi._call(obj, "Beijing");
let fn = sayHi._bind(obj);
fn();
```
### 名词解释
* 作用域
  1. 全局作用域
  2. 函数作用域
  3. 块级作用域
* 闭包
* this
* 
## 原型链
*  \_\_proto\_\_ 于 prototype
* class中的\_\_proto\_\_
## 异步任务

### 手写Promise

超简版本Promise，明天把剩下的实现完成

```js
let EventEmitter = require('./events')
class _Promise {
    constructor(excutor) {
        this.status = "pending";
        this.value = undefined;
        this.event = new EventEmitter();
        let resolve = result => {
            if (this.status !== 'pending') return;
            this.status = "resolved";
            this.value = result;
            this.event.emit('change');
        }
        let reject = err => {
            if (this.status !== 'pending') return;
            this.status = "rejected"
            this.value = err;
        }
        try {
            excutor(resolve, reject)
        } catch (err) {
            reject(err)
        }
    }
    then(resolveFn, rejectFn) {
        let fn = resolveFn || rejectFn;
        this.event.on('change',()=>{
            process.nextTick(()=>{
                return new Promise((resolve,reject)=>{
                    try {
                        fn(this.value);
                        resolve()
                    } catch (error) {
                        reject(error)
                    }
                })
            })
        }) 
    }

}

let p1 = new _Promise((resovle, reject) => {
    setTimeout(() => {
        if (Math.random() >= 0.5) {
            resovle("OK") 
            
        } else {
            let err = new Error('小于0.5')
            reject(err)
        }
    }, 2000)
})

p1.then(res=>{
    console.log(res)
})
```