---
title: 函数节流与防抖
---

# 1.函数防抖

### 定义
  函数防抖：一个需要频繁触发的函数，在规定时间内只让最后一次生效，前面不生效。就是指触发事件后在 n 秒内函数只能执行一次，如果在 n 秒内又触发了事件，则会重新计算函数执行时间。
### 场景
  比如移动端input框输入时，输入结束一定时间后才知道用户输入结束，此时取输入的内容最为合适。
### 代码实现
 ```js
 function debounce(fn,delay){
     // 记录上一次的延时器
     var timer = null;
     return function(){
         // 清除上一延时器
         clearTimeout(timer)
         // 重新设置新的延时器
         timer = setTimeout(function(){
                 fn.apply(this)
         },delay)
     }
 }
 document.getElementById('btn').onclick = debounce(function(){
     console.log('点击事件被触发了'+Date.now());
 },2000) 
```

# 2.函数节流

### 定义
  一个函数执行一次后，只有大于设定的时间周期才会执行第二次。
  函数节流限制一个函数在一定时间内只能执行一次。
### 场景
  有个需要频繁触发的函数，出于性能优化角度，在规定的时间内，
  只让函数触发的第一次生效，后面的不生效。
### 代码实现
  ```js
    /*
  节流函数：throttle
  fn:   要被节流的函数
  delay：规定的时间
  */
  function throttle(fn,delay){
      // 记录上一次触发的时间
      var lasttime = 0 ;
      // 通过闭包的方式使用lasttime变量，每次都是上次的时间
      return function(){
          // 
          var nowtime = Date.now();
          if(nowtime-lasttime>delay){
              // 修正this函数问题
              fn.call(this);
              // 同步时间
              lasttime = nowtime;
          }
      }
      
  }
  // document.onscroll = throttle(function(){
  //     console.log("scroll事件被触发了"+Date.now());
  //     }
  //     ,2000)

  ```

  # 3.节流与防抖区别
  1. 函数防抖debounce，在一段连续操作结束后，处理回调，利用 clearTimeout 和 setTimeout 实现。
  2. 函数节流throttle，在一段连续操作中，每一段时间只执行一次，频率较高的事件中使用来提高性能。
  3. 函数防抖debounce关注一定时间连续触发，只在最后执行一次，而函数节流throttle侧重于一段时间内只执行一次。
   
 >正常情况、函数防抖情况 debounce、函数节流 throttle下，对于mousemove事件回调的执行情况如下：

  ![防抖节流](images/interview/debounce-throttle.png)

  # 应用场景

  ::: details 函数防抖的应用场景
  连续的事件，只需触发一次回调的场景有：
  1. 搜索框搜索输入。只需用户最后一次输入完，再发送请求。
  2. 手机号、邮箱验证输入检测。
  3. 窗口大小Resize。只需窗口调整完成后，计算窗口大小。防止重复渲染。
  ::: 
  ::: details 函数节流的应用场景
  间隔一段时间执行一次回调的场景有：
  1. 滚动加载，加载更多或滚到底部监听。
  2. 高频点击提交，表单重复提交
  :::





 
 
