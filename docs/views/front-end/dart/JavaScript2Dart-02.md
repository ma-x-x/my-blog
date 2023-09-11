---
title: JavaScript2Dart-02
sidebarDepth: 2
---

### 功能

虽然 Dart 函数的工作方式与 JavaScript 中的对应函数非常相似，但它们确实有一些附加功能，并且在声明它们时存在一些细微的语法差异。与 JavaScript 类似，您几乎可以在任何地方声明函数，无论是在顶层、作为类字段还是在本地范围内。

```
// On the top level
function multiply(a, b) {
  return a * b;
}

// As a class field
class Multiplier {
  multiply(a, b) {
    return a * b;
  }
}

// In a local scope
function main() {
  function multiply(a, b) {
    return a * b;
  }

  console.log(multiply(3, 4));
}
// On the top level
int multiply(a, b) {
  return a * b;
}

// As a class field
class Multiplier {
  multiply(a, b) {
    return a * b;
  }
}

// In a local scope
main() {
  multiply(a, b) {
    return a * b;
  }

  print(multiply(3, 4));
}
```

### 箭头语法

Dart 和 JavaScript 都支持箭头语法 ( `=>`)，但支持方式有所不同。在 Dart 中，只有当函数包含单个表达式或 return 语句时才能使用箭头语法。

例如，以下`isNoble`函数是等效的：

```
bool isNoble(int atomicNumber) {
  return _nobleGases[atomicNumber] != null;
}
bool isNoble(int atomicNumber) => _nobleGases[atomicNumber] != null;
```

### 参数

在 JavaScript 中，所有参数都*可以*是位置参数。默认情况下，Dart*要求*您将所有参数作为参数传递给函数。

```
int multiply(int a, int b) {
  return a * b;
}

main() {
  multiply(3, 5); // Valid. All parameters are provided.
  multiply(3); // Invalid. All parameters must be provided.
}
```

这可能会在两种情况下发生变化：

1. 位置参数被标记为可选。
2. 参数按要求命名但未标记。

要定义可选位置参数，请将它们括在任何所需位置参数后面的方括号中。可选参数不能跟在必需参数后面。

由于 null 安全性，可选位置参数必须具有默认值或标记为可为 null。[要了解更多信息，请参阅前面有关 null 安全性](https://dart.cn/guides/language/coming-from/js-to-dart#null-safety)的部分。

以下代码包含一个定义可选位置参数的函数的有效示例和两个无效示例。

```
// Valid: `b` has a default value of 5. `c` is marked as nullable.
multiply(int a, [int b = 5, int? c]) {
  ...
}
// Invalid: a required positional parameter follows an optional one.
multiply(int a, [int b = 5], int c) {
  ...
}
// Invalid: Neither optional positional parameter has a default
//          value or has been flagged as nullable.
multiply(int a, [int b, int c]) {
  ...
}
```

以下示例显示如何使用可选参数调用函数：

```
multiply(int a, [int b = 5, int? c]) {
  ...
}

main() {
  // All are valid function calls.
  multiply(3);
  multiply(3, 5);
  multiply(3, 5, 7);
}
```

Dart 支持**命名参数**。这些参数不必像位置参数那样按照定义的顺序提供。您可以通过名称来引用它们。默认情况下，这些是可选的，除非它们被标记为必需。命名参数是通过用大括号括起来来定义的。您可以将命名参数与所需的位置参数组合起来 - 在这种情况下，命名参数始终放置在位置之后。当调用带有命名参数的函数时，通过在传递的值前面加上参数名称作为前缀（用冒号分隔）来传递值。例如，`f(namedParameter: 5)`.

同样，对于 null 安全性，未按要求标记的命名参数要么需要具有默认值，要么被标记为可为 null。

以下代码定义了一个带有命名参数的函数：

```
// Valid:
// - `a` has been flagged as required
// - `b` has a default value of 5
// - `c` is marked as nullable
// - Named parameters follow the positional one
multiply(bool x, {required int a, int b = 5, int? c}) {
  ...
}
```

以下示例调用具有命名参数的函数：

```
// All are valid function calls.
// Beyond providing the required positional parameter:
multiply(false, a: 3); // Only provide required named parameters
multiply(false, a: 3, b: 9); // Override default value of `b`
multiply(false, c: 9, a: 3, b: 2); // Provide all named parameters out of order
```

### 一流的功能

JavaScript 和 Dart 将函数视为一等公民。这意味着 Dart 将函数视为任何其他对象。例如，以下代码显示如何将一个函数作为参数传递给另一个函数：

```
void printElement(int element) {
  print(element);
}

var list = [1, 2, 3];

// Pass printElement as a parameter.
list.forEach(printElement);
```

### 匿名函数

JavaScript 和 Dart 都支持[*匿名*函数](https://en.wikipedia.org/wiki/Anonymous_function)，或者没有名称的函数。与命名函数一样，您可以像传递任何其他值一样传递匿名函数。例如，将匿名函数存储在变量中，将它们作为参数传递给另一个函数，或者从另一个函数返回它们。

JavaScript 有两种声明匿名函数的方法：

1. 使用标准函数表达式
2. 使用箭头语法

同样，Dart 也有两种声明匿名函数的方法。两者的工作方式都与 JavaScript 箭头表达式类似。Dart 的匿名函数不支持正则函数表达式附带的额外功能。例如，JavaScript 支持充当构造函数的函数表达式，或者创建对此的自定义绑定。

要了解更多信息，请参阅[课程](https://dart.cn/guides/language/coming-from/js-to-dart#classes)部分。

```
// A regular function expression
// assigned to a variable
let funcExpr = function(a, b) {
  return a * b;
}
// The same anonymous function
// expressed as an arrow
// function with curly braces.
let arrowFuncExpr = (a, b) => {
  return a * b;
}
// An arrow function with only
// one return statement as
// its contents does not
// require a block.
let arrowFuncExpr2 = (a, b) => a * b;
// Assign an anonymous function
// to a variable.
var blockFunc =
  optionalCallback ?? (int a, int b) {
    return a * b;
};

// For an expression with only a return statement,
// you can use the arrow syntax:
var singleFunc = (int a, int b) => a * b;
```

与 JavaScript 一样，您可以将匿名函数传递给其他函数。`map`开发人员在使用数组和列表函数时经常传递匿名函数：

```
// returns [4, 5, 6]
[1, 2, 3].map(e => e + 3);

// returns [5, 7, 9]
[1, 2, 3].map(e => {
  e *= 2;
  return e + 3;
});
// returns [4, 5, 6]
[1, 2, 3].map((e) => e + 3).toList();

// returns [5, 7, 9]
var list2 = [1, 2, 3].map((e) {
  e *= 2;
  return e + 3;
}).toList();
```

_信息_ **备注：**`map`前面示例中的函数返回 > `Iterable<T`，而不是`List<T>`。该`toList`函数将返回值转换 `Iterable`回`List`.

列表文字可以实现相同的目标。

```
  // These two statements are equivalent:
  print([for (var e in [1, 2, 3]) e + 3]);
  print([1, 2, 3].map((e) => e + 3).toList());
```

### 发电机功能

两种语言都支持[_生成器函数_](https://dart.cn/language/functions#generators)。这些函数返回一个可迭代的项目集合，这些项目经过计算以避免不必要的工作。

要在 Dart 中编写生成器函数，请`sync*`在函数参数后面添加关键字，并返回`Iterable`. 使用关键字将项目添加到最终的可迭代对象中 `yield`，或使用添加整组项目`yield*`。

以下示例展示了如何编写基本生成器函数：

```
function* naturalsTo(n) {
  let k = 0;
  while (k < n) {
    yield k++;
  }
}

// Returns [0, 1, 2, 3, 4]
for (let value of naturalsTo(5)) {
  console.log(value);
}
Iterable<int> naturalsTo(int n) sync* {
  int k = 0;
  while (k < n) {
    yield k++;
  }
}

// Returns an iterable with [0, 1, 2, 3, 4]
print(naturalsTo(5).toList());
function* doubleNaturalsTo(n) {
  let k = 0;
  while (k < n) {
    yield* [k, k];
    k++;
  }
}

// Returns [0, 0, 1, 1, 2, 2]
for (let value of doubleNaturalsTo(3)) {
  console.log(value);
}
Iterable<int> doubleNaturalsTo(int n) sync* {
  int k = 0;
  while (k < n) {
    yield* [k, k];
    k++;
  }
}

// Returns an iterable with [0, 0, 1, 1, 2, 2]
print(doubleNaturalsTo(3));
```

您还可以定义异步生成器函数，它返回流而不是可迭代对象。[在即将到来的异步](https://dart.cn/guides/language/coming-from/js-to-dart#asynchrony)部分中了解更多信息。

## 声明

本节介绍 JavaScript 和 Dart 之间语句的差异。

### 控制流程（if/else、for、while、switch）

大多数控制语句的工作方式与 JavaScript 对应语句类似。[有些集合](https://dart.cn/guides/language/coming-from/js-to-dart#collections)还有其他用途。

#### 迭代

虽然 JavaScript 和 Dart 都有`for-in`循环，但它们的行为不同。

JavaScript 的`for-in`循环迭代对象的属性。要迭代 JavaScript 可迭代对象的元素，必须使用`for-of`or `Array.forEach()`。Dart`for-in`循环的工作方式类似于 JavaScript `for-of`。

以下示例显示了迭代集合并打印出每个元素：

```
for (const element of list) {
  console.log(element);
}
for (final element in list) {
  print(element);
}
```

#### 转变

_信息_ **备注：** 与 JavaScript 和 Dart 中的语句的一个关键区别`switch`：当 case 没有`break`、 `continue`或`return`语句时，JavaScript 允许执行失败并继续执行下一条语句。然而，Dart 仅在 case 主体为空时才允许这样做。

`continue`在语句中使用时`switch`，可以将其与案例上的标签结合起来：

```
switch (testEnum) {
  case TestEnum.A:
    print('A');
    continue b;
  b:
  case TestEnum.B:
    print('B');
    break;
}
```
