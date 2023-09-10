---
title: Dart
sidebarDepth: 2
---

## 收藏

本节介绍 Dart 中的一些集合类型，并将它们与 JavaScript 中的类似类型进行比较。

### 列表

Dart 以与 JavaScript 数组相同的方式写入列表文字。Dart 将列表括在方括号中，并用逗号分隔值。

```
// Initialize list and specify full type
final List<String> list1 = <String>['one', 'two', 'three'];

// Initialize list using shorthand type
final list2 = <String>['one', 'two', 'three'];

// Dart can also infer the type
final list3 = ['one', 'two', 'three'];
```

以下代码示例概述了您可以在 Dart 上执行的基本操作`List`。以下示例显示如何`List` 使用索引运算符从 a 检索值。

```
final fruits = <String>['apple', 'orange', 'pear'];
final fruit = fruits[1];
```

`List`使用该方法在末尾添加一个值`add`。`List`使用以下方法添加另一个`addAll`：

```
final fruits = <String>['apple', 'orange', 'pear'];
fruits.add('peach');
fruits.addAll(['kiwi', 'mango']);
```

使用 方法在特定位置插入值 `insert`。`List`使用以下方法在特定位置插入另一个`insertAll`：

```
final fruits = <String>['apple', 'orange', 'pear'];
fruits.insert(0, 'peach');
fruits.insertAll(0, ['kiwi', 'mango']);
```

`List`结合索引和赋值运算符更新值：

```
final fruits = <String>['apple', 'orange', 'pear'];
fruits[2] = 'peach';
```

`List`使用以下方法之一从 a 中删除项目：

```
final fruits = <String>['apple', 'orange', 'pear'];
// Remove the value 'pear' from the list.
fruits.remove('pear');
// Removes the last element from the list.
fruits.removeLast();
// Removes the element at position 1 from the list.
fruits.removeAt(1);
// Removes the elements with positions greater than
// or equal to start (1) and less than end (3) from the list.
fruits.removeRange(1, 3);
// Removes all elements from the list that match the given predicate.
fruits.removeWhere((fruit) => fruit.contains('p'));
```

用于`length`获取 中的值的数量`List`：

```
final fruits = <String>['apple', 'orange', 'pear'];
assert(fruits.length == 3);
```

用于`isEmpty`检查是否`List`为空：

```
var fruits = [];
assert(fruits.isEmpty);
```

用于`isNotEmpty`检查是否`List`不为空：

```
final fruits = <String>['apple', 'orange', 'pear'];
assert(fruits.isNotEmpty);
```

#### 填充

Dart 的`List`类包含一种创建列表的方法，其中每个项目都具有相同的值。此`filled`构造函数创建一个具有默认值的固定长度列表`n`。以下示例创建一个包含 3 项的列表：

```
final list1 = List.filled(3, 'a'); // Creates: [ 'a', 'a', 'a' ]
```

- 默认情况下，您无法在此列表中添加或删除元素。要允许此列表添加或删除元素，请添加`, growable: true` 到参数列表的末尾。
- 您可以使用索引值访问和更新此列表的元素。

#### 产生

Dart`List`类包含一种创建递增值列表的方法。此构造函数 使用模板`generate`创建一个固定长度的大小列表来构建元素值。`n`该模板将索引作为参数。

```
// Creates: [ 'a0', 'a1', 'a2' ]
final list1 = List.generate(3, (index) => 'a$index');
```

### 套

与 JavaScript 不同，Dart 支持`Set`使用文字定义 s。Dart 定义集合的方式与列表相同，但使用大括号而不是方括号。集是仅包含唯一项的无序集合。Dart 使用哈希码强制这些项目的唯一性，这意味着对象需要将哈希值存储在`Set`.

_信息_ **备注：** 在 Dart 中，哈希值默认为对象的实例，但您可以覆盖它以使用一组属性。要了解更多信息，请参阅[`hashCode`](https://api.dart.cn/dart-core/Object/hashCode.html)属性页。

以下代码片段显示了如何初始化`Set`：

```
final abc = {'a', 'b', 'c'};
```

创建空集的语法一开始可能看起来很混乱，因为指定空花括号 ( `{}`) 会导致创建空的`Map`. 要创建空的`Set`，请在`{}`声明之前添加类型参数或分配`{}`给类型的变量`Set`：

```
final names = <String>{};
// Set<String> names = {}; // This works, too.
// final names = {}; // Creates an empty map, not a set.
```

以下示例概述了您可以在 Dart 上执行的基本操作`Set`。

`Set`使用该方法添加一个值`add`。使用该`addAll`方法添加多个值：

```
final fruits = {'apple', 'orange', 'pear'};
fruits.add('peach');
fruits.addAll(['kiwi', 'mango']);
```

使用以下方法之一`Set` 从集合中删除内容：

```
final fruits = {'apple', 'orange', 'pear'};
// Remove the value 'pear' from the set.
fruits.remove('pear');
// Remove all elements in the supplied list from the set.
fruits.removeAll(['orange', 'apple']);
// Removes all elements from the list that match the given predicate.
fruits.removeWhere((fruit) => fruit.contains('p'));
```

用于`length`获取 中的值的数量`Set`：

```
final fruits = {'apple', 'orange', 'pear'};
assert(fruits.length == 3);
```

用于`isEmpty`检查是否`Set`为空：

```
var fruits = <String>{};
assert(fruits.isEmpty);
```

用于`isNotEmpty`检查是否`Set`不为空：

```
final fruits = {'apple', 'orange', 'pear'};
assert(fruits.isNotEmpty);
```

### 地图

`Map`Dart 中的类型类似于 JavaScript`Map`中的类型。两种类型都将键与值相关联。如果所有键都具有相同的类型，则键可以是任何对象类型。该规则也适用于值。每个键最多出现一次，但您可以多次使用相同的值。

Dart 将字典建立在哈希表的基础上。这意味着密钥必须是可散列的。每个 Dart 对象都包含一个哈希值。

_信息_ **备注：** 在 Dart 中，对象的哈希值默认为从对象身份派生的值，并且与对象只能等于其自身的相等性兼容。要引入基于 对象*内容*`hashCode`的相等性，请覆盖和`operator==`。

考虑这些使用文字创建的简单`Map`示例：

```
final gifts = {
  'first': 'partridge',
  'second': 'turtle doves',
  'fifth': 'golden rings'
};

final nobleGases = {
  2: 'helium',
  10: 'neon',
  18: 'argon',
};
```

以下代码示例概述了您可以在 Dart 上执行的基本操作`Map`。以下示例显示如何`Map`使用索引运算符从 a 检索值。

```
final gifts = {'first': 'partridge'};
final gift = gifts['first'];
```

_信息_ **备注：** 如果映射不包含查找键，则索引运算符返回`null`。

使用该`containsKey`方法检查是否`Map`包含密钥。

```
final gifts = {'first': 'partridge'};
assert(gifts.containsKey('fifth'));
```

使用索引赋值运算符 ( `[]=`) 添加或更新`Map`. 如果`Map`尚不包含该密钥，Dart 会添加该条目。如果键存在，Dart 会更新其值。

```
final gifts = {'first': 'partridge'};
gifts['second'] = 'turtle'; // Gets added
gifts['second'] = 'turtle doves'; // Gets updated
```

使用该`addAll`方法添加另一个`Map`. 使用该`addEntries`方法将其他条目添加到`Map`.

```
final gifts = {'first': 'partridge'};
gifts['second'] = 'turtle doves';
gifts.addAll({
  'second': 'turtle doves',
  'fifth': 'golden rings',
});
gifts.addEntries([
  MapEntry('second', 'turtle doves'),
  MapEntry('fifth', 'golden rings'),
]);
```

使用该`remove`方法从 中删除条目`Map`。使用该`removeWhere`方法删除满足给定测试的所有条目。

```
final gifts = {'first': 'partridge'};
gifts.remove('first');
gifts.removeWhere((key, value) => value == 'partridge');
```

用于`length`获取 .txt 文件中键值对的数量`Map`。

```
final gifts = {'first': 'partridge'};
gifts['fourth'] = 'calling birds';
assert(gifts.length == 2);
```

用于`isEmpty`检查是否`Map`为空。

```
final gifts = {};
assert(gifts.isEmpty);
```

用于`isNotEmpty`检查是否`Map`不为空。

```
final gifts = {'first': 'partridge'};
assert(gifts.isNotEmpty);
```

### 不可修改

纯 JavaScript 不支持不变性。Dart 提供了多种方法来使数组、集合或字典等集合变得不可变。

- 如果集合是编译时常量且不应修改，请使用关键字`const`：
  `const fruits = <String>{'apple', 'orange', 'pear'};`
- 将 分配`Set`给一个`final`字段，这意味着`Set`本身不必是编译时常量。这确保了该字段不能被另一个字段覆盖，但它仍然允许修改`Set`该字段的大小或内容：`Set`
  `final fruits = <String>{'apple', 'orange', 'pear'};`
- 使用构造函数创建集合类型的最终版本`unmodifiable`（如以下示例所示）。这将创建一个无法更改其大小或内容的集合：

```
final _set = Set<String>.unmodifiable(['a', 'b', 'c']);
final _list = List<String>.unmodifiable(['a', 'b', 'c']);
final _map = Map<String, String>.unmodifiable({'foo': 'bar'});
```

### 扩展运算符

`...`与 JavaScript 中一样，Dart 支持使用展开运算符 ( ) 和 null 感知展开运算符 ( `...?`)将列表嵌入到另一个列表中。

```
var list1 = [1, 2, 3];
var list2 = [0, ...list1];　// [0, 1, 2, 3]
// When the list being inserted could be null:
list1 = null;
var list2 = [0, ...?list1]; // [0]
```

这也适用于集合和地图：

```
// Spread operator with maps
var map1 = {'foo': 'bar', 'key': 'value'};
var map2 = {'foo': 'baz', ...map1}; // {foo: bar, key: value}
// Spread operator with sets
var set1 = {'foo', 'bar'};
var set2 = {'foo', 'baz', ...set1}; // {foo, baz, bar}
```

### 收集如果/为了

在 Dart 中，`for`和`if`关键字在集合方面具有附加功能。

`if`仅当满足指定条件时，集合语句才包含列表文字中的项目：

```
var nav = [
  'Home',
  'Furniture',
  'Plants',
  if (promoActive) 'Outlet',
];
```

它对于地图和集合的作用类似。

集合`for`语句允许将多个项目映射到另一个列表中：

```
var listOfInts = [1, 2, 3];
var listOfStrings = [
  '#0',
  for (var i in listOfInts) '#$i',
]; // [#0, #1, #2, #3]
```

这对于地图和集合也以同样的方式起作用。

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
