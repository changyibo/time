

# VUE 使用

## VUE使用

1. 定义

## VUE源码部分

1. Vuex 实现原理

   1. de

2. mapGetters 实现

   ```javascript
   let getters = {
       name: ()=>console.log('Eric'),
       age: ()=>console.log('18')
   }
   let mapGetters = (props)=>{
       let arr = [];
       props.forEach((item)=>{
           arr.push(getters[item])
       })
       return arr
   }
   let arr = mapGetters([
       'name',
       'age'
   ])
   ```

   