---
title: JavaScript2Dart-04
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
