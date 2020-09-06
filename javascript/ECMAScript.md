# ECMAScript 上

## 数据类型
### 数据类型：
  * 基础数据类型  
    * String
    * Number
    * Boolean
    * Null
    * Undifined
    * Symbol(需要再理解)
  * 引用数据类型: 
      * Object 
### 数据类型判断
  * typeof
    * typeof(NaN) 是Number类型的
  * instanceof
  * isArray
  * constructor 这里需要思考一下

### 数据转化
#### 转 Number
  * String
    1. 使用 +
       * let a = '1', let b = +a; 
          * a 确实可以转成Number, b 将会被转换为Number类型
          * 如果a 转换不成Number,那么b的结果为 NaN       
    2. parseInt/parseFloat 转换 [差资料]
    3. 使用Number转换 不太常用 [查资料]
    
#### 转 Boolean 
  * String
  * Number: 
    1. 0为false
    2. NaN 为false 
    3. 其余为true
  * Unfinded:false 
  * Null:false
#### 转 String

## String
### 拆分为数组 split(sperator,how many) (要注意单词不要混淆了 split,slice,splice)
  * seperator 可能是字符串 也可能是正则
  * how many 
### slice 截取
### match
### replace
### sub/subStr

### 应用 
1. url截取 http://www.baidu.com/a/b/c?foo=bar&name=9#bash;  最后准备，正则确实比较尴尬

2. filter 首字母大写

## Function
## Array
### 自身操作
#### 删除/添加/替换
  * 头尾 (关系到进栈出栈操作）

      * shift  	记忆：头部移除操作 
      * unshift   记忆：头部加入   
      * push     记忆：入栈操作push(尾部)
      * pop       记忆：出栈操作pop(尾部)

  * 指定位置(删除/增加/替换) splice(index,how Many,Others), how Many 要删除的元素的数量

      * 删除：
        * 从指定位置开始删除1个或者多个元素 arr.splice(2,2): 从索引为2的元素开始删除2个元素
        * 从指定位置删除后面所有的元素 arr.splice() 
      *  替换：
        * 从指定位置开始替换1个或者多个元素 arr.splice(2,2,2,3) 从索引2位置开始，增加两个元素，分别为2，3，替换掉原来位置的元素, 
      * 添加
        * 从指定位置开始增加多个元素(不删除) arr.splice(2,0,2,3)

    * 填充 arr.fill(1) 会替换原来所有的元素为指定元素

```javascript
    let arr = new Array(5).fill(4)
```

  * 截取 slice (start,end)
    * start 开始位置
    * end 结束位置[可选]

  * 翻转 reserve

  * 排序: sort. arr.sort((a,b)=>{ })

    * a, b 分别为当前对比项 和 前一个元素 

    * a-b> 0 不交换位置 ，a-b 小于0 交换位置

```javascript
      /**
       * 
       * 如果我自己来实现
       * 
       * 第一轮对比 
       *  - [3,5] 对比：a是3,b是5，5-3>1 不交换位置
       * 第二轮对比 [ 3. 5. 2]
       *  - [5,2] 对比：a是5,b是2,2 -5<1,交换位置[3.2,5] 记住位置
       *  - [3.2] a: 2 b:3 2-3<1 交换位置 [2,3.5]
       * 第三轮对比 [2,3,5,4]
       *  - [5,4]
       */
      let arr =[3,5,2,4,1];
      arr.sort((a,b)=>{
          return a-b
      })
      console.log(arr);
      // 结果为 [1,2,3,4,5]
```
### 查找

  * find 中出第一个符合条件的
  * include  指定的值是否在数组中 arr.includes(3)
  * some: 是否有符合条件的元素1个, arr.some(item=>item>4)
  * filter: 查找符合条件的元素多个
  * Indexof 找到指定元素的位置,没有返回 -1
  * lastIndexof 倒着数元素的位置, 没有返回 -1

### 多对象操作

  * concat: 
    * 连接数组 let arr = arr1.concat(arr2,arr3)
    * 连接数字 let arr = arr1.concat(1,2,3)

### 循环

  * forEach

  * map

  * reduce : 适合做累加操作

    * prev:  参数2，或者上一次返回的结果
    * cur:当前元素,从索引0到最后一次循环

    ```javascript
    let arr = [1,2,4,5];
    arr.reduce((prev,cur,currentIndex,arrays)=>{
        console.log(prev,cur,currentIndex);
        return prev+cur
    },0)
    // 0 1 0
    // 1 2 1
    // 3 4 2
    // 7 5 3
    ```
### 字符串
* join
  * 应用场景：转换为参数
* toString

### 扁平化 

* flat(ES6)     arr.flat(depth) depth为深度，Infinity为无限深度

```javascript
    var a = [1,[2,[3,4],5],6]
    console.log(a.flat(Infinity))
```

* map或者reduce+递归实现数组扁平化

```javascript
    var a = [1,[2,[3,4],5],6]
    
    function flatton(arr){
        return arr.reduce((prev,curr)=>{
            if(Array.isArray(curr)){
                return prev.concat(flatton(curr))
            }
            return prev.concat(curr)  
        },[])
    }
    
    let arr = flatton(a)
    console.log(arr)
```
### 静态方法
* Array.from() 
  1. 将伪数组装换为数组


### 使用场景
1. mapGetters 实现（见VUE实现）
2. 找出原型链上所有的属性和公共方法

## Object

### 创建对象
* Object.create()
* 构造函数
  * 创建对象流程
  * 新建
* class
  * constructor 相当于 构造函数 ,对象创建首先执行
  * static 静态方法 类当做普通函数
  * 公共方法 
  * 对象继承
* Object.defineProperty(obj,prop,descriptor) (Vue 2.X 实现原理)
  * descriptor
    1. 数据描述
       * configuarable: true/false; 默认为false，描述的数据不可改变
       * enumerable: 是否可枚举
    2. 存取描述
       * 使用setter/getter (问题是： setter 不能设置自己的数据吗？ 应该是不能使用this)
````javascript
let obj = {
    age:2,
    name: "chang yibo"
}
let newVal = ''
Object.defineProperty(obj,'name',{
    
    get(){
        return newVal
    },
    // 这里的set不能够改变自己的数据吗？？
    set(val){
       
    }
})
obj.name = 'es';
console.log(obj.name);
````

### 对象拷贝

#### 实现浅拷贝
* Object.assgin

#### 深拷实现

* 方案1：使用JSON.stringify() 和JSON.parse()

````javascript
      let obj = {
        a: {
          foo: {
            a: {
              c: "f",
            },
          },
        },
        b: {
          system: "ubuntu",
        },
        c: "d",
      };
      let str = JSON.stringify(obj);
      let obj2 = JSON.parse(str);
      console.log(obj2);
````

* 方案2：使用递归

````javascript
      function cloneDeep(obj) {
        let clone_obj = {};
        Object.keys(obj).forEach((item) => {
          if (typeof obj[item] === "object") {
            clone_obj[item] = cloneDeep(obj[item]);
            return
          }
          clone_obj[item] = obj[item];
      
        });
        return clone_obj;
      }
      
      let obj = {
        a: {
          foo: {
            a: {
              c: "f",
            },
          },
        },
        b: {
          system: "ubuntu",
        },
        c: "d",
      };
      let obj1 = cloneDeep(obj);
      delete obj.c;
      console.log(obj);
      console.log(obj1);
````



### 对象属性

#### 检查属性是否属于对象
- hasOwnProperty: 自己的私有属性返回true
- in:私有属性和共有属性都会返回true
- hasPubPropert ,自己实现扩展，
```javascript

~function(){
    function hasPubProperty(prop){
        let n = prop in this;
        let m = this.hasOwnProperty(prop);
        return n && !m
    }
    Object.prototype.hasPubProperty = hasPubProperty;
}()

function Fn(name,age){
    this.name = name;
    this.age = age
}
Fn.prototype.SayHi = function(){
    console.log(`I am ${this.name} , ${this.age} years old`);
}

let me = new Fn('Chang',5);
me.SayHi()

console.log('name' in me);
console.log('SayHi' in me);

console.log(me.hasOwnProperty('name'));
console.log(me.hasOwnProperty('SayHi'));

console.log(me.hasPubProperty('name'));
console.log(me.hasPubProperty('SayHi'));
```



#### 枚举对象属性 

- Object.keys: 只能获取自己私有属性的对象(只有可枚举可获得)
- Reflect.OwnKeys: 可以获取到所有属性(包括可枚举和不可枚举类型)
- for..in : 私有和原型链上的属性都可以获取到(获取不到不可枚举的)
- 获取自己的私有属性以及原型链上的属性(自己实现)

```javascript
function findKeys(instance) {
  if (instance.__proto__ === null) {
    return [];
  }
  let names = Reflect.ownKeys(instance);

  names = names.filter((name) => {
    return name !== "constructor";
  });

  return [...names, ...findKeys(instance.__proto__)];
}
const keys = findKeys(c);
console.log(keys);
```


### 类的继承

- 案例1：继承Error，构建HttpException;

```javascript
class HttpException extends Error{
    constructor(msg="服务异常",errorCode=10000,code=400){
        super()
        this.errorCode = errorCode
        this.code = code;
        this.msg = msg;
    }
}
class ParameterException extends HttpException{

    constructor(msg="参数错误",errorCode=1002){
        super();
        this.code = 400,
        this.msg = msg || "参数错误",
        this.errorCode = errorCode || 10000;
    }   
}
try{
    throw new ParameterException()
}catch(err){
    if(err instanceof HttpException){
        // 返回网络请求
    }else{
        // 写入日志
    }
}

```