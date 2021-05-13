title: React.lazy懒加载组件

# [React.lazy懒加载组件](https://www.cnblogs.com/mengff/p/12891500.html)

**1. React.lazy的用法**

React.lazy方法可以异步加载组件文件。

```
const Foo = React.lazy(() => import('../componets/Foo));
```

React.lazy不能单独使用，需要配合React.suspense，suspence是用来包裹异步组件，添加loading效果等。

```
<React.Suspense fallback={<div>loading...</div>}>
    <Foo/>
</React.Suspense>
```

**2. React.lazy原理**

React.lazy使用import来懒加载组件，import在webpack中最终会调用requireEnsure方法，动态插入script来请求js文件，类似jsonp的形式。