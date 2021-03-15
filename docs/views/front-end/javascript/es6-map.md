---
autoGroup-2: ES6
title: ES6 Map数据类型
---

# Map 的基本概念
Map 保存一个键值对, 任何值或键都作为一个键或者值。和 Set 中元素的 [value,value] 形式不同，Map 中元素的形式是 [key,value]

::: tip
注：要是用引用类型的数据作为键名，则要注意获取该键值对时，需要传递同地址的引用类型的数据，而非简单的同值数据。

:::

# Map 的属性
 + map.size: map中的元素的数量

# Map 的方法
 
## 创建和增加
 + 构造函数传入数组创建 
  ```js
   const getmap = new Map([['aa',1],['bb',2]]); 
   getmap.set('aa',2); 
   console.log(getmap.get('aa')); //2 
  ```
 + 使用 Set 对象创建 Map 对象
 + map.set(key, value) 新增一条键值对记录，然后返回该map对象
  
## 删除
 + map.delete(key) 如果存在该 key 删除后则返回 true，要是没有该元素则返回 false
 + map.clear() 移除Map对象的所有键/值对

## 查询和遍历

 +  map.has(key) 如果存在该 key 则返回 true，否则则返回 false
 +  map.get(key) 如果存在该 key 则返回 key 对应的 value，否则则返回 undefined
 +  map.entries() 返回一个新的迭代器对象，按照**插入顺序**包含的元素形式是[key, value] 的数组
 +  map.keys() 返回一个新的可迭代的对象，包含了按照**插入顺序** 的 map 的 各个键
 +  map.values() 返回一个新的可迭代的对象，包含了按照**插入顺序**的 map 的 各个值
 +  map.forEach((value,key,map)=>{}) 其中 value 是当前元素的值，key 是当前元素的键名，map 是当前正在遍历的 map 对象

