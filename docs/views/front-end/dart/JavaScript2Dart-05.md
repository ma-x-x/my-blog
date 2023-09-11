---
title: JavaScript2Dart-05
sidebarDepth: 2
---

## 异步

与 JavaScript 一样，Dart 虚拟机 (VM) 运行单个事件循环来处理所有 Dart 代码。这意味着类似的异步规则也适用于此。所有代码都是同步运行的，但您可以以不同的顺序处理它，具体取决于您如何使用可用的异步工具。以下是其中一些构造以及它们与 JavaScript 对应部分的关系。

### 期货

`Future`是 JavaScript 的 Dart 版本`Promise`。两者都是稍后解决的异步操作的*结果。*

Dart 或 Dart 包中的函数可能会返回 a `Future`，而不是它们表示的值，因为该值可能要稍后才可用。

以下示例显示，在 Dart 中处理 future 的方式与在 JavaScript 中处理 Promise 的方式相同。

```
const httpResponseBody = func();

httpResponseBody.then(value => {
  console.log(
    `Promise resolved to a value: ${value}`
  );
});
Future<String> httpResponseBody = func();

httpResponseBody.then((String value) {
  print('Future resolved to a value: $value');
});
```

同样，期货也可能像承诺一样失败。捕获错误的作用也相同：

```
httpResponseBody
  .then(...)
  .catch(err => {
    console.log(
      "Promise encountered an error before resolving."
    );
  });
httpResponseBody
  .then(...)
  .catchError((err) {
    print(
      'Future encountered an error before resolving.'
    );
  });
```

您还可以创造未来。创建一个`Future`、定义并调用一个`async`函数。当您的值需要为 a 时`Future`，请按以下示例所示转换函数。

```
String str = 'String Value';
Future<String> strFuture = Future<String>.value(str);
```

#### 异步/等待

如果您熟悉 JavaScript 中的 Promise，那么您可能也熟悉`async`/`await`语法。此语法在 Dart 中是相同的：函数被标记为`async`，并且`async`函数始终返回 a `Future`。如果函数返回 a`String`并被标记为`async`，则它会返回 a `Future<String>`。如果它什么也没返回，但确实返回`async`，则返回`Future<void>`。

以下示例展示了如何编写`async`函数：

```
// Returns a Promise of a string,
// as the method is async
async fetchString() {
  // Typically some other async
  // operations would be done here.
  return "String Value";
}
// Returns a future of a string,
// as the method is async
Future<String> fetchString() async {
  // Typically some other async
  // operations would be done here.
  return 'String Value';
}
```

调用该`async`函数如下：

```
Future<String> stringFuture = fetchString();
stringFuture.then((String str) {
  print(str); // 'String Value'
});
```

使用关键字获取未来的价值`await`。`then` 与在 JavaScript 中一样，这消除了调用来获取其值的需要`Future`，并且它允许您以更像同步的方式编写异步代码。与 JavaScript 一样，等待 future 只能在`async`上下文中（例如另一个`async`函数）。

以下示例展示了如何等待 future 的值：

```
// We can only await futures within an async context.
Future<void> asyncFunction() async {
  var str = await fetchString();
  print(str); // 'String Value'
}
```

要了解有关`Future`s 和 `async`/`await`语法的更多信息，请参阅 [异步编程](https://dart.cn/tutorials/language/streams)Codelab。

### 流

Dart 异步工具箱中的另一个工具是`Stream`s。虽然 JavaScript 有自己的流概念，但 Dart 更类似于`Observable`常用的`rxjs`库中的 s。如果您碰巧熟悉这个库，那么 Dart 的流应该会感到熟悉。

对于那些不熟悉这些概念的人： `Stream`s 基本上表现得像`Future`s，但随着时间的推移具有多个值，就像事件总线一样。您的代码可以侦听流，并且它可以完成或达到失败状态。

#### 听力

要监听流，请调用其`listen`方法并提供回调方法。每当流发出一个值时，Dart 就会调用此方法：

```
Stream<int> stream = ...
stream.listen((int value) {
  print('A value has been emitted: $value');
});
```

该`listen`方法包括用于处理错误或流完成时的可选回调：

```
stream.listen(
  (int value) { ... },
  onError: (err) {
    print('Stream encountered an error! $err');
  },
  onDone: () {
    print('Stream completed!');
  },
);
```

该`listen`方法返回 a 的实例 `StreamSubscription`，您可以使用它来停止监听流：

```
StreamSubscription subscription = stream.listen(...);
subscription.cancel();
```

这不是收听流的唯一方法。与 s 的`async`/语法类似，您可以在 上下文中将流与循环组合起来。该循环为发出的每个项目调用回调方法，并在流完成或出错时结束：` await``Future``for-in``async``for `

```
Future<int> sumStream(Stream<int> stream) async {
  var sum = 0;
  await for (final value in stream) {
    sum += value;
  }
  return sum;
}
```

当以这种方式监听流时发生错误时，会在包含关键字的行重新抛出错误`await`。您可以使用以下`try-catch`语句来处理此错误：

```
try {
  await for (final value in stream) { ... }
} catch (err) {
  print('Stream encountered an error! $err');
}
```

#### 创建流

与`Future`s 一样，您有多种不同的方法来创建流。该类具有实用程序构造函数，用于从 s 或 s`Stream`创建流，或用于创建按时间间隔发出值的流。要了解更多信息，请参阅 API 页面。` Future``Iterable `[`Stream`](https://api.dart.cn/dart-async/Stream-class.html)

##### 流控制器

实用程序类[`StreamController`](https://api.dart.cn/dart-async/StreamController-class.html)可以创建和控制流。它的流属性公开了它控制的流。它的方法提供了将事件添加到该流的方法。

例如，该`add`方法可以发出新项目并且该`close`方法完成流。

以下示例显示了流控制器的基本用法：

```
var listeners = 0;
StreamController<int>? controller;
controller = StreamController<int>(
  onListen: () {
    // Emit a new value every time the stream gets a new listener.
    controller!.add(listeners++);
    // Close the stream after the fifth listener.
    if (listeners > 5) controller.close();
  }
);
// Get the stream for the stream controller
var stream = controller.stream;
// Listen to the stream
stream.listen((int value) {
  print('$value');
});
```

##### 异步生成器

异步生成器函数可以创建流。这些函数类似于同步生成器函数，但使用`async*`关键字并返回`Stream`.

在异步生成器函数中，`yield`关键字将给定值发送到流。`yield*`然而，该关键字适用于流而不是其他可迭代对象。这允许将来自其他流的事件发送到该流。在以下示例中，一旦新生成的流完成，该函数就会继续。

```
Stream<int> asynchronousNaturalsTo(int n) async* {
  var k = 0;
  while (k < n) yield k++;
}

Stream<int> stream = asynchronousNaturalsTo(5);

// Prints each of 0 1 2 3 4 in succession.
stream.forEach(print(value));
```

[在异步编程](https://dart.cn/tutorials/language/streams)文档中了解有关 future、流和其他异步功能的更多信息 。
