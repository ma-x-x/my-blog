---
title: Dart
sidebarDepth: 2
---

## 前言

Dart 官网地址为 https://dart.cn/guides/language/coming-from/js-to-dart](https://flutter.dev/)

# 作为 JavaScript 开发人员学习 Dart

本指南旨在在学习 Dart 时利用您的 JavaScript 编程知识。它展示了两种语言的主要相似点和差异，并介绍了 JavaScript 中不支持的 Dart 概念。作为一名 JavaScript 开发人员，Dart 应该感觉非常熟悉，因为这两种语言共享许多概念。

与 JavaScript 一样，Dart 在事件循环上运行，因此两种语言都以类似的方式执行代码。例如，Future（JavaScript 中的 Promise）等异步概念和`async/await`语法非常相似。

与 JavaScript 不同，Dart 是强类型的。如果您使用过 TypeScript 或 Flow，这应该会简化 Dart 的学习。如果您主要使用纯 JavaScript，那么这可能更像是一个调整。通过强类型，Dart 在编译之前捕获 JavaScript 代码中可能存在的许多错误。

Dart 默认启用空安全。JavaScript 不支持空安全。作为一名 JavaScript 开发人员，可能需要一段时间才能学习如何编写 null 安全代码，但代价是更好地防止在编译 Dart 代码之前检测到的 null 引用异常。（从而避免`TypeError`在对结果为 null 的 JavaScript 变量进行操作时发生的那些可怕的情况。）

## 约定和 linting

JavaScript 和 Dart 都有 linting 工具来强制执行标准约定。虽然 JavaScript 提供了许多工具、标准和配置，但 Dart 拥有一套官方的布局和样式约定以及用于简化合规性的 linter。Dart 分析器会检查代码并提供更多分析功能。要为您的项目自定义 lint 规则，请按照[自定义静态分析](https://dart.cn/tools/analysis)说明进行操作。

Dart 提供[`dart fix`](https://dart.cn/tools/dart-fix)查找和修复错误的功能。

Dart 还提供了类似于[Prettier](https://prettier.io/)等 JavaScript 工具的代码格式化程序。要格式化任何 Dart 项目中的代码，请 [`dart format`](https://dart.cn/tools/dart-format)在命令行上运行。Dart 和 Flutter 的 IDE 插件也提供了这种功能。

Dart 支持逗号分隔的集合、参数或参数列表的尾随逗号。当您添加尾随逗号时，格式化程序会将每个列表项放在自己的行上。当您认为您的列表以后可能会有更多项目时，请添加尾随逗号。避免仅为了格式化而添加尾随逗号。

JavaScript 仅支持列表和映射文字中的尾随逗号。

要了解更多信息：

- 使用逗号使代码读起来更像 HTML，请阅读 flutter.dev 上的[使用尾随逗号。](https://flutter.cn/docs/development/tools/formatting#using-trailing-commas)
- Linting Dart，阅读[Linter 规则](https://dart.cn/tools/linter-rules)。
- 编写优秀的 Dart 代码，请阅读[《Effective Dart》](https://dart.cn/effective-dart)。

## 内置类型

JavaScript 和 Dart 都将其数据分类为*类型*。每个变量都有一个关联的类型。类型决定了变量可以存储的值的类型以及可以对这些值执行哪些操作。Dart 与 JavaScript 的不同之处在于它为每个表达式和变量分配静态类型。静态类型预测变量值或表达式值的运行时类型。这意味着 Dart 应用程序具有健全的静态类型。

JavaScript 提供了基本类型`num`、`string`、`boolean` 和`null`值以及*数组*和`Map`类型。

Dart 支持以下内置类型：

- 数字 ( `num`, `int`, `double`)
- 字符串 ( `String`)
- 布尔值 ( `bool`)
- 列表（`List`也称为数组）
- 套 ( `Set`)
- 地图 ( `Map`)
- 符号 ( `Symbol`)
- 值`null`( `Null`)

要了解更多信息，请查看[Dart 语言之旅](https://dart.cn/guides/language)中的[内置类型](https://dart.cn/language/built-in-types)。

Dart 中的所有非`Null`类型都是 Object 的子类型。所有值也是对象。Dart 不使用像 JavaScript 那样的“原始类型”。相比之下，Dart 标准化或*规范化*数字、布尔值和`null`值。这意味着只有一个`int`具有数值的值`1`存在。

*信息* **备注：** JavaScript 有两个相等运算符，`==`和`===`。`==`在对原始值进行任何必要的类型转换后，该运算符将执行相等测试。该`===`运算符不执行类型转换。Dart 使用`identical`函数来检查两个值是否是同一个对象，并使用`==`运算符来检查对象是否认为自己相等。

例如：等于运算符`==`和`identical()`方法返回`true` 相同的数字类型值。查看以下代码中显示的示例：

```
var a = 2;
var b = 1 + 1;

print(a == b); // Prints true
print(identical(a, b)); // Prints true; only one "2" object exists
```

### 原始类型

本节介绍 Dart 如何表示 JavaScript 中的基本类型。

#### 数字

Dart 具有三种用于保存数字的数据类型：

- `num`

  相当于 JavaScript 中的通用数字类型。

- `int`

  没有小数部分的数值。

- `double`

  任何 64 位（双精度）浮点数。

Dart API 将所有这些类型包含为类。`int`和类型都`double`共享`num`其父类：

![num 子类 Object 和 int 和 double 每个子类 num](https://dart.cn/assets/img/guides/number-classes.png)

由于 Dart 将数字视为对象，因此数字可以将自己的实用函数公开为对象方法。您不需要使用额外的对象来将函数应用于数字。

例如，将 a 舍入`double`为整数：

```
let rounded = Math.round(2.5);
var rounded = 2.5.round();
```

#### 弦乐

Dart 中的字符串与 JavaScript 中的字符串类似。要编写字符串文字，请将其括在单引号 ( `'`) 或双`"`引号 ( ) 中。大多数 Dart 开发人员都使用单引号，但该语言不强制执行任何标准。如果您不想转义字符串中的单引号，请使用双引号。

```
var a = 'This is a string.';
```

##### 转义特殊字符

要在字符串中包含具有其他含义的字符（例如`$`用于字符串插值的字符），必须对该字符进行转义。在 Dart 中转义特殊字符的方式与 JavaScript 和大多数其他语言类似。要转义特殊字符，请在该字符前添加反斜杠字符 ( `\`)。

以下代码显示了一些示例。

```
final singleQuotes = 'I\'m learning Dart'; // I'm learning Dart
final doubleQuotes = "Escaping the \" character"; // Escaping the " character
final dollarEscape = 'The price is \$3.14.'; // The price is $3.14.
final backslashEscape = 'The Dart string escape character is \\.';
final unicode = '\u{1F60E}'; // 😎,  Unicode scalar U+1F60E
```

*信息* **备注：** 您可以使用带或不带花括号的四位十六进制字符。要了解有关使用 unicode 字符的更多信息，请参阅[符文和字素簇](https://dart.cn/language/built-in-types#runes-and-grapheme-clusters)。

##### 字符串插值

JavaScript 支持模板文字。它们使用反引号 ( ```) 字符分隔符的原因如下：

- 允许多行字符串
- 使用嵌入表达式插入字符串
- 创建称为标记模板的特殊结构

在 Dart 中，您不需要将字符串括在反引号中来连接字符串或在字符串文字中使用插值。

要了解更多信息，请查看Dart 语言之旅中的[字符串。](https://dart.cn/language/built-in-types#strings)

与 JavaScript 模板文本一样，您可以使用`${<expression>}`语法将表达式插入到字符串文本中。Dart 使用此语法，并允许您在表达式使用单个标识符时省略大括号。

```
var food = 'bread';
var str = 'I eat $food'; // I eat bread
var str = 'I eat ${food}'; // I eat bread
```

#### 字符串连接和多行声明

在 JavaScript 中，您可以使用模板文字定义多行字符串。Dart 有两种定义多行字符串的方法。

1. 使用隐式字符串连接：Dart 连接任何相邻的字符串文字，即使分布在多行上：

   ```
   final s1 = 'String '
       'concatenation'
       " even works over line breaks.";
   ```

2. 使用多行字符串文字：当在字符串的两侧使用三个引号（单引号或双引号）时，文字可以跨越多行。

   ```
   final s2 = '''
   You can create
   multiline strings like this one.
   ''';
   
   final s3 = """
   This is also a
   multiline string.""";
   ```

#### 平等

当两个字符串包含相同的代码单元序列时，Dart 认为它们相等。要确定两个字符串是否具有相同的序列，请使用等于运算符 ( `==`)。

```
final s1 = 'String '
    'concatenation'
    " works even over line breaks.";
assert(s1 ==
    'String concatenation works even over '
        'line breaks.');
```

#### 布尔值

Dart 和 Javascript 中的布尔值都表示二进制条件。这两个值表示值或表达式是否为 `true`或`false`。`true`您可以使用文字and返回值，或者使用or`false`等表达式生成它们。`x < 5``y == null`

```
let isBananaPeeled = false;
var isBananaPeeled = false;
```

## 变量

Dart 中的变量与 JavaScript 中的变量类似，但有两个例外：

1. 每个变量都有一个类型。
2. Dart 将所有变量的作用域限制在块级别，就像JavaScript 中的`let`和变量一样。`const`

Dart 变量通过以下两种方式之一获取其类型：

1. 声明的：在声明中编写的类型。
2. 推断：用于初始化变量的表达式。按照[惯例](https://dart.cn/effective-dart/design#dont-redundantly-type-annotate-initialized-local-variables)，使用`var`或`final`时分析器就可以推断出类型。

```
// Declare and initialize a variable at once
let name = "bob";
// Declare a variable with a specific type
// when you don't provide an initial value
String name;
// Declare and initialize a variable
// at the same time and Dart infers
// the type
var name = 'bob';
```

变量只能接受其类型的值。

```
var name = 'bob';
name = 5; // Forbidden, as `name` has type `String`.
```

如果您不提供初始值或显式类型，Dart 会将变量的类型推断为 catch-all type `dynamic`。

与 JavaScript 变量一样，您可以为使用该`dynamic`类型的 Dart 变量分配任何值。

```
// Declare a variable
let name;
// Initialize the variable
name = "bob";
// Declare a variable without a type or assigned value
// and Dart infers the 'dynamic' type
var name;
// Initialize the variable and the type remains `dynamic`
name = 'bob';
name = 5; // Allowed, as `name` has type `dynamic`.
```

### 最终和常量

JavaScript 和 Dart 都使用变量修饰符。两者都使用`const`，但工作方式不同`const`。JavaScript 会使用的地方`const`，Dart 会使用`final`。

当您添加`final`到 Dart 变量或`const`JavaScript 变量时，必须先初始化该变量，然后其他代码才能读取其值。一旦初始化，您就无法更改这些变量的引用。

当 Dart 使用 时`const`，它指的是编译时创建的特殊值。Dart 使用有限表达式来创建这些不可变值。这些表达式*不能*有副作用。在这些条件下，编译器可以预测常量变量或表达式的精确值，而不仅仅是其静态类型。

```
final String name;
// Cannot read name here, not initialized.
if (useNickname) {
  name = "Bob";
} else {
  name = "Robert";
}
print(name); // Properly initialized here.
```

*信息* **备注：** 创建对象时，类构造函数必须初始化 `final`实例变量。这确保了这些变量在任何人都可以读取之前就已具有值。

在[课程](https://dart.cn/guides/language/coming-from/js-to-dart#classes)部分了解更多信息。

在 Dart 中，*常量变量必须包含常量值*。非常量变量可以包含常量值，您也可以将其标记为`const`。

```
var foo = const [];
  // foo is not constant, but the value it points to is.
  // You can reassign foo to a different list value,
  // but its current list value cannot be altered.

const baz = []; // Equivalent to `const []`
```

同样，类可以有自己的`const`构造函数来生成不可变的实例。

您无法修改`const`JavaScript 或 Dart 中的变量。JavaScript 确实允许您修改`const`对象的字段，但 Dart 不允许。

要了解更多信息，请参阅[课程](https://dart.cn/guides/language/coming-from/js-to-dart#classes)部分。

## 空安全

与 JavaScript 不同，Dart 支持 null 安全。在 Dart 中，所有类型都默认为不可空。这有利于 Dart 开发人员，因为 Dart 在编写代码时捕获空引用异常，而不是在运行时捕获。

### 可空类型与不可空类型

以下代码示例中的任何变量都不能是`null`.

```
// In null-safe Dart, none of these can ever be null.
var i = 42; // Inferred to be an int.
String name = getFileName();
final b = Foo(); // Foo() invokes a constructor
```

要指示变量可能具有值`null`，请添加`?`到其类型声明中：

```
int? aNullableInt = null;
```

这同样适用于任何其他类型声明，例如函数声明：

```
String? returnsNullable() {
  return random.nextDouble() < 0.5
    ? 'Sometimes null!'
    : null;
}

String returnsNonNullable() {
  return 'Never null!';
}
```

### 空感知运算符

Dart 支持多个运算符来处理可为空性。与 JavaScript 中一样，Dart 支持空赋值运算符 ( `??=`)、空合并运算符 ( `??`) 和可选链接运算符 ( `?.`)。这些运算符的工作方式与 JavaScript 相同。

#### ！操作员

如果可空变量或表达式可能不为空，您可以使用 ( `!`) 运算符告诉编译器抑制任何编译时错误。将此运算符放在表达式后面。

不要将其与 Dart 的 not ( `!`) 运算符混淆，后者使用相同的符号，但位于表达式之前。

```
int? a = 5;

int b = a; // Not allowed.
int b = a!; // Allowed.
```

在运行时，如果 a 结果是`null`，则会发生运行时错误。

与运算符一样，在访问对象的属性或方法时`?.`使用运算符：`!`

```
myObject!.someProperty;
myObject!.someMethod();
```

如果`myObject`是`null`在运行时，则会发生运行时错误。

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

由于 null 安全性，可选位置参数必须具有默认值或标记为可为 null。[要了解更多信息，请参阅前面有关null 安全性](https://dart.cn/guides/language/coming-from/js-to-dart#null-safety)的部分。

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

*信息* **备注：**`map`前面示例中的函数返回 > `Iterable<T`，而不是`List<T>`。该`toList`函数将返回值转换 `Iterable`回`List`.

列表文字可以实现相同的目标。

```
  // These two statements are equivalent:
  print([for (var e in [1, 2, 3]) e + 3]);
  print([1, 2, 3].map((e) => e + 3).toList());
```

### 发电机功能

两种语言都支持[*生成器函数*](https://dart.cn/language/functions#generators)。这些函数返回一个可迭代的项目集合，这些项目经过计算以避免不必要的工作。

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

*信息* **备注：** 与 JavaScript 和 Dart 中的语句的一个关键区别`switch`：当 case 没有`break`、 `continue`或`return`语句时，JavaScript 允许执行失败并继续执行下一条语句。然而，Dart 仅在 case 主体为空时才允许这样做。

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

### 运营商

Dart 和 JavaScript 都包含预定义的运算符。这两种语言都不支持添加新的运算符。Dart 支持使用`operator`关键字重载一些现有的运算符。例如：

```
class Vector {
  final double x;
  final double y;
  final double z;
  Vector(this.x, this.y, this.z);
  Vector operator +(Vector other) => Vector(
    x + other.x, 
    y + other.y,
    z + other.z,
  );
  Vector operator *(double scalar) => Vector(
    x * scalar,
    y * scalar,
    z * scalar,
  );
}
```

#### 算术运算符

两种语言的等式和关系运算符几乎相同，如下表所示：

| 意义                             | JavaScript 运算符 | 飞镖操作员 |
| -------------------------------- | ----------------- | ---------- |
| 添加                             | `+`               | `+`        |
| 减去                             | `-`               | `-`        |
| 一元减号，也称为否定             | `-expr`           | `-expr`    |
| 乘                               | `*`               | `*`        |
| 划分                             | `/`               | `/`        |
| 除法返回整数结果                 |                   | `~/`       |
| 获取整数除法的余数（模）         | `%`               | `%`        |
| `x = x + 1`（表达式值为`x + 1`） | `++x`             | `++x`      |
| `x = x + 1`（表达式值为`x`）     | `x++`             | `x++`      |
| `x = x - 1`（表达式值为`x - 1`） | `--x`             | `--x`      |
| `x = x - 1`（表达式值为`x`）     | `x--`             | `x--`      |

例如：

```
assert(2 + 3 == 5);
assert(2 - 3 == -1);
assert(2 * 3 == 6);
assert(5 / 2 == 2.5); // Result is a double
assert(5 ~/ 2 == 2); // Result is an int
assert(5 % 2 == 1); // Remainder

a = 0;
b = ++a; // Increment a before b gets its value.
assert(++a); // 1 == 1

a = 0;
b = a++; // Increment a AFTER b gets its value.
assert(a != b); // 1 != 0

a = 0;
b = --a; // Decrement a before b gets its value.
assert(a == b); // -1 == -1

a = 0;
b = a--; // Decrement a AFTER b gets its value.
assert(a != b); // -1 != 0
```

您可能已经注意到，Dart 还包含一个`~/`运算符（称为*截断除法运算符*），该运算符除以双精度数并输出下限整数：

```
assert(25 == 50.4 ~/ 2);
assert(25 == 50.6 ~/ 2);
assert(25 == 51.6 ~/ 2);
```

#### 相等和关系运算符

两种语言的相等和关系运算符的工作方式相同：

| 意义       | JavaScript 运算符 | 飞镖操作员 |
| ---------- | ----------------- | ---------- |
| 严格等于   | `===`             | `==`       |
| 抽象平等   | `==`              |            |
| 严格不等于 | `!==`             | `!=`       |
| 抽象不等于 | `!=`              |            |
| 比...更棒  | `>`               | `>`        |
| 少于       | `<`               | `<`        |
| 大于或等于 | `>=`              | `>=`       |
| 小于或等于 | `<=`              | `<=`       |

和JavaScript 运算符没有等效项`==`。`!=`

例如：

```
assert(2 == 2);
assert(2 != 3);
assert(3 > 2);
assert(2 < 3);
assert(3 >= 3);
assert(2 <= 3);
```

#### 型式试验操作员

两种语言的测试运算符的实现有些不同：

| 意义                          | JavaScript 运算符   | 飞镖操作员 |
| ----------------------------- | ------------------- | ---------- |
| 类型转换                      |                     | `x as T`   |
| 如果对象具有指定类型则为 True | `x instanceof T`    | `x is T`   |
| 如果对象缺少指定类型则为 True | `!(x instanceof T)` | `x is! T`  |

如果实现 指定的接口，则 的结果`obj is T`为 true 。例如，始终为真。`obj``T``obj is Object?`

使用类型转换运算符 ( `as`) 确保值具有特定类型。*如果您知道*该对象将具有该类型，则编译器可以使用它。

例如：

```
(person as Employee).employeeNumber = 4204583;
```

如果您不*知道*该对象的类型`T`，请在使用该对象*之前*`is T`检查类型。

在 Dart 中，局部变量的类型在 if 语句的范围内更新。实例变量的情况并非如此。

```
if (person is Employee) {
   person.employeeNumber = 4204583;
}
```

#### 逻辑运算符

您可以使用逻辑运算符反转或组合布尔表达式。两种语言的逻辑运算符是相同的。

| 意义                                               | JavaScript 运算符 | 飞镖操作员 |
| -------------------------------------------------- | ----------------- | ---------- |
| 反转下一个表达式（将 false 更改为 true，反之亦然） | `!x`              | `!x`       |
| 逻辑或                                             | `||`              | `||`       |
| 逻辑与                                             | `&&`              | `&&`       |

JavaScript 允许在需要布尔值的地方使用任何值。然后它将这些值转换为`true`或`false`。JavaScript 将空字符串和数字`0`视为“假”值。Dart 允许`bool`条件中的值以及作为逻辑运算符的操作数。

例如：

```
if (!done && (col == 0 || col == 3)) {
  // ...Do something...
}
```

#### 按位和移位运算符

您可以通过对整数使用按位运算符和移位运算符来操作数字的各个位。两种语言的运算符几乎相同，如下表所示：

| 意义                               | JavaScript 运算符 | 飞镖操作员 |
| ---------------------------------- | ----------------- | ---------- |
| 按位与                             | `&`               | `&`        |
| 按位或                             | `|`               | `|`        |
| 按位异或                           | `^`               | `^`        |
| 一元按位求补（0 变为 1；1 变为 0） | `~expr`           | `~expr`    |
| 左移                               | `<<`              | `<<`       |
| 右移                               | `>>`              | `>>`       |
| 无符号右移                         | `>>>`             | `>>>`      |

例如：

```
final value = 0x22;
final bitmask = 0x0f;

assert((value & bitmask) == 0x02); // AND
assert((value & ~bitmask) == 0x20); // AND NOT
assert((value | bitmask) == 0x2f); // OR
assert((value ^ bitmask) == 0x2d); // XOR
assert((value << 4) == 0x220); // Shift left
assert((value >> 4) == 0x02); // Shift right
assert((-value >> 4) == -0x03); // Shift right
assert((value >>> 4) == 0x02); // Unsigned shift right
assert((-value >>> 4) > 0); // Unsigned shift right
```

#### 条件运算符

Dart 和 JavaScript 都包含用于计算表达式的条件运算符 ( `?:`)。一些开发人员将其称为三元运算符，因为它需要三个操作数。由于 Dart 有另一个带有三个操作数的运算符 ( `[]=`)，因此将此运算符 ( `?:`) 称为条件运算符。该运算符适用于表达式，就像[if-else](https://dart.cn/language/branches#if)适用于语句一样。

```
let visibility = isPublic ? "public" : "private";
final visibility = isPublic ? 'public' : 'private';
```

### 赋值运算符

使用 ( `=`) 运算符来赋值。

```
// Assign value to a
a = value;
```

该运算符还有一个 null 感知变体 ( `??=`)。

要了解更多信息，请参阅[空赋值](https://dart.cn/guides/language/coming-from/js-to-dart#null-aware-operators)运算符部分。

JavaScript 和 Dart 包含计算新值并将其分配给表达式中的变量的运算符。这些赋值运算符使用右侧值和变量初始值作为操作数。

下表列出了这些赋值运算符：

| 操作员 | 描述           |
| ------ | -------------- |
| `=`    | 任务           |
| `+=`   | 加法作业       |
| `-=`   | 减法作业       |
| `*=`   | 乘法作业       |
| `/=`   | 分区分配       |
| `~/=`  | 截断除法赋值   |
| `%=`   | 余数（模）赋值 |
| `>>>=` | 无符号右移赋值 |
| `^=`   | 按位异或赋值   |
| `<<=`  | 左移分配       |
| `>>=`  | 右移赋值       |
| `&=`   | 按位与赋值     |
| `|=`   | 按位或赋值     |

JavaScript 不支持`~/=`赋值运算符。

```
var a = 5;
a *= 2; // Multiply `a` by 2 and assign the result back to a.
print(a); // `a` is now 10.
```

### 级联（`..`运算符）

Dart 允许您在单个对象上链接多个方法调用、属性分配或两者。Dart 将此称为*级联*，并使用级联语法 ( `..`) 来执行此操作。

JavaScript 缺乏这种语法。

以下示例显示使用级联语法在新构造的对象上链接多个方法：

```
var animal = Animal() // Sets multiple properties and methods
  ..name = "Bob"
  ..age = 5
  ..feed()
  ..walk();

print(animal.name); // "Bob"
print(animal.age); // 5
```

要使第一个级联语法能够识别空值，请将其写为`?..`.

```
var result = maybePerson
    ?..employment = employer
    ..salary = salary;
```

`maybePerson`如果值为 ，则 Dart 会忽略整个级联`null`。

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

*信息* **备注：** 在 Dart 中，哈希值默认为对象的实例，但您可以覆盖它以使用一组属性。要了解更多信息，请参阅[`hashCode`](https://api.dart.cn/dart-core/Object/hashCode.html)属性页。

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

`Map`Dart 中的类型类似于JavaScript`Map`中的类型。两种类型都将键与值相关联。如果所有键都具有相同的类型，则键可以是任何对象类型。该规则也适用于值。每个键最多出现一次，但您可以多次使用相同的值。

Dart 将字典建立在哈希表的基础上。这意味着密钥必须是可散列的。每个 Dart 对象都包含一个哈希值。

*信息* **备注：** 在 Dart 中，对象的哈希值默认为从对象身份派生的值，并且与对象只能等于其自身的相等性兼容。要引入基于 对象*内容*`hashCode`的相等性，请覆盖和`operator==`。

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

*信息* **备注：** 如果映射不包含查找键，则索引运算符返回`null`。

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

这不是收听流的唯一方法。与 s的`async`/语法类似，您可以在 上下文中将流与循环组合起来。该循环为发出的每个项目调用回调方法，并在流完成或出错时结束：`await``Future``for-in``async``for`

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

与`Future`s 一样，您有多种不同的方法来创建流。该类具有实用程序构造函数，用于从s 或s`Stream`创建流，或用于创建按时间间隔发出值的流。要了解更多信息，请参阅API 页面。`Future``Iterable`[`Stream`](https://api.dart.cn/dart-async/Stream-class.html)

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

## 课程

从表面上看，Dart 中的类与 JavaScript 中的类相似，尽管 JavaScript 类在技术上更像是原型的包装器。在 Dart 中，类是该语言的标准功能。本节介绍在 Dart 中定义和使用类以及它们与 JavaScript 的不同之处。

### “这个”上下文

Dart 中的关键字`this`比 JavaScript 中的更简单。在 Dart 中，您不能将函数绑定到`this`，并且`this`从不依赖于执行上下文（就像在 JavaScript 中一样）。在 Dart 中， `this`仅在类中使用，并且始终引用当前实例。

### 构造函数

本节讨论 Dart 中的构造函数与 JavaScript 中的构造函数有何不同。

#### 标准构造器

标准类构造函数看起来与 JavaScript 构造函数非常相似。在 Dart 中，`constructor`关键字被完整的类名替换，并且所有参数都必须显式键入。在 Dart 中，该`new`关键字曾经是创建类实例所必需的，但现在是可选的，并且不再建议使用它。

```
class Point {
  final double x;
  final double y;

  Point(double x, double y) : this.x = x, this.y = y { }
}

// Create a new instance of the Point class
Point p = Point(3, 5);
```

#### 初始化列表

使用初始值设定项列表来编写构造函数。在构造函数的参数和主体之间插入初始值设定项列表。

```
class Point {
  ...
  Point.fromJson(Map<String, double> json)
      : x = json['x']!,
        y = json['y']! {
    print('In Point.fromJson(): ($x, $y)');
  }
  ...
}
```

#### 构造函数参数

编写在构造函数中分配类字段的代码感觉就像创建样板代码，因此 Dart 有一些语法糖，称为 [初始化参数](https://dart.cn/language/constructors)，以使这更容易：

```
class Point {
  double x;
  double y;

  // Syntactic sugar for setting x and y
  // before the constructor body runs.
  Point(this.x, this.y);
}

// Create a new instance of the Point class
Point p = Point(3, 5);
```

与函数类似，构造函数可以选择采用定位参数或命名参数：

```
class Point {
  ...
  // With an optional positioned parameter
  Point(this.x, [this.y = 5]);
  // With named parameters
  Point({ required this.y, this.x = 5 });
  // With both positional and named parameters
  Point(int x, int y, { boolean multiply }) {
    ...
  }
  ...
}
```

#### 命名构造函数

与 JavaScript 不同，Dart 允许类拥有多个构造函数，并允许您命名它们。您可以选择拥有一个未命名的构造函数，任何其他构造函数都必须命名：

```
const double xOrigin = 0;
const double yOrigin = 0;

class Point {
  double x = 0;
  double y = 0;

  Point(this.x, this.y);

  // Named constructor
  Point.origin()
      : x = xOrigin,
        y = yOrigin;
}
```

#### 常量构造函数

要启用不可变类实例，请使用`const`构造函数。具有构造函数的类只能`const`有`final`实例变量。

```
class ImmutablePoint {
  final double x, y;

  const ImmutablePoint(this.x, this.y);
}
```

#### 构造函数重定向

您可以从其他构造函数调用构造函数以防止代码重复或为参数添加其他默认值：

```
class Point {
  double x, y;

  // The main constructor for this class.
  Point(this.x, this.y);

  // Delegates to the main constructor.
  Point.alongXAxis(double x) : this(x, 0);
}
```

#### 工厂建设者

当不需要创建新的类实例时，可以使用工厂构造函数。一个例子是返回缓存的实例时：

```
class Logger {
  static final Map<String, Logger> _cache =
      <String, Logger>{};
 
  final String name;
 
  // Factory constructor that returns a cached copy,
  // or creates a new one if it is not yet available.
  factory Logger(String name) {
    return _cache.putIfAbsent(
        name, () => _cache[name] ??= Logger._internal(name);
  }

  // Private constructor for internal use only
  Logger._internal(this.name);
}
```

### 方法

在 Dart 和 JavaScript 中，方法充当为对象提供行为的函数。

```
function doSomething() { // This is a function
  // Implementation..
}

class Example {
  doSomething() { // This is a method
    // Implementation..
  }
}
void doSomething() { // This is a function
 // Implementation..
}

class Example {
 void doSomething() { // This is a method
   // Implementation..
 }
}
```

### 扩展课程

Dart 允许类扩展另一个类，就像 JavaScript 一样。

```
class Animal {
  int eyes;
 
  Animal(this.eyes);
 
  makeNoise() {
    print('???');
  }
}
class Cat extends Animal {
 
  Cat(): super(2);

  @override
  makeNoise() {
    print('Meow');
  }
}
Animal animal = Cat();
print(animal.eyes); // 2
animal.makeNoise(); // Meow
```

当重写父类的方法时，请使用`@override`注释。虽然此注释是可选的，但它表明覆盖是有意的。如果该方法实际上并未重写超类方法，则 Dart 分析器会显示警告。

仍然可以使用关键字调用被重写的父方法`super`：

```
class Cat extends Animal {
  ...
  @override
  makeNoise() {
    print('Meow');
    super.makeNoise();
  }
}
Animal animal = Cat();
animal.makeNoise(); // Meow
                    // ???
```

### 类作为接口

与 JavaScript 一样，Dart 没有单独的接口定义。然而，与 JavaScript 不同的是，所有类定义都兼作接口；您可以使用关键字将类实现为接口`implements`。

当一个类被实现为接口时，它的公共API必须由新类实现。与 不同的是`extends`，它的方法和字段实现不与新类共享。虽然一个类只能扩展一个类，但您可以一次实现多个接口，即使实现类已经扩展了另一个类。

```
class Consumer {
  consume() {
    print('Eating food...');
  }
}
class Cat implements Consumer {
  consume() {
    print('Eating mice...');
  }
}
Consumer consumer = Cat();
consumer.consume(); // Eating mice
```

实现接口时，`super`由于方法体不是继承的，因此无法调用该方法：

```
class Cat implements Consumer {
  @override
  consume() {
    print('Eating mice...');
    super.consume(); 
    // Invalid. The superclass `Object` has no `consume` method.
  }
}
```

### 抽象类和方法

要确保类只能扩展或实现其接口，但不允许构造任何实例，请将其标记为`abstract`.

标记为的类`abstract`可以具有抽象方法，这些方法不需要主体，而是需要在扩展类或其接口时实现：

```
abstract class Consumer {
  consume();
}
// Extending the full class
class Dog extends Consumer {
  consume() {
    print('Eating cookies...');
  }
}
// Just implementing the interface
class Cat implements Consumer {
  consume() {
    print('Eating mice...');
  }
}
Consumer consumer;
consumer = Dog();
consumer.consume(); // Eating cookies...
consumer = Cat();
consumer.consume(); // Eating mice...
```

### 混入

Mixin 用于在类之间共享功能。您可以在类中使用 mixin 的字段和方法，使用它们的功能就好像它是类的一部分一样。一个类可以使用多个 mixins。当多个类共享相同的功能而无需相互继承或共享共同的祖先时，这会很有帮助。

使用`with`关键字将一个或多个以逗号分隔的 mixins 添加到类中。

JavaScript 没有等效的关键字。实例化后， JavaScript 可用于`Object.assign` 将其他对象合并到现有对象中。

以下示例展示了 JavaScript 和 Dart 如何实现类似的行为：

```
class Animal {}

// Defining the mixins
class Flyer {
  fly = () => console.log('Flaps wings');
}
class Walker {
  walk = () => console.log('Walks on legs');
}
 
class Bat extends Animal {}
class Goose extends Animal {}
class Dog extends Animal {}

// Composing the class instances with
// their correct functionality.
const bat =
  Object.assign(
    new Bat(),
    new Flyer()
    );
const goose =
  Object.assign(
    new Goose(),
    new Flyer(),
    new Walker()
    );
const dog =
  Object.assign(
    new Dog(),
    new Walker()
    );

// Correct calls
bat.fly();
goose.fly();
goose.walk();
dog.walk();
// Incorrect calls
bat.walk(); // `bat` lacks the `walk` method
dog.fly(); // `dog` lacks the `fly` method
abstract class Animal {}

// Defining the mixins
class Flyer {
  fly() => print('Flaps wings');
}
class Walker {
  walk() => print('Walks on legs');
}
 
class Bat extends Animal with Flyer {}
class Goose extends Animal with Flyer, Walker {}
class Dog extends Animal with Walker {}

// Correct calls
Bat().fly();
Goose().fly();
Goose().walk();
Dog().walk();
// Incorrect calls
Bat().walk(); // Not using the Walker mixin
Dog().fly(); // Not using the Flyer mixin
```

或者，您可以将`class`关键字替换为，`mixin`以防止 mixin 被用作常规类：

```
mixin Walker {
  walk() => print('Walks legs');
}
// Not possible, as Walker is no longer a class.
class Bat extends Walker {}
```

由于您可以使用多个 mixins，因此当在同一个类上使用时，它们可以具有彼此重叠的方法或字段。它们甚至可以与使用它们的类或该类的超类重叠。它们添加到类中的顺序很重要。

举个例子：

```
class Bird extends Animal with Consumer, Flyer {
```

当在 的实例上调用方法时`Bird`，Dart 从它自己的类 开始，`Bird`该类优先于其他实现。如果`Bird`没有实现，则`Flyer`检查 then ，然后检查`Consumer`, 直到找到实现。`Animal`最后检查父类。

### 扩展

当受影响的类可编辑时，扩展类、实现接口或使用 mixins 都可以工作。然而，有时扩展已经存在的类或者属于另一个库或 Dart SDK 的一部分很有用。

在这些情况下，Dart 提供了为现有类编写扩展的能力。

例如，`String`Dart SDK 中的类的以下扩展允许解析整数：

```
extension NumberParsing on String {
  int parseInt() {
    return int.parse(this);
  }
}
```

为了使扩展可用，它必须存在于同一文件中，或者必须导入其文件。

使用方法如下：

```
import 'string_apis.dart'; // Import the file the extension is in
var age = '42'.parseInt(); // Use the extension method.
```

### 获取器和设置器

Dart 中的 getter 和 setter 的工作方式与 JavaScript 中的 getter 和 setter 完全相同：

```
class Person {
  _age = 0;

  get age() {
    return this._age;
  }

  set age(value) {
    if (value < 0) {
      throw new Error(
        'age cannot be negative'
        );
    }
    this._age = value;
  }
}

var person = new Person();
person.age = 10;
console.log(person.age);
class Person {
  int _age = 0;
 
  int get age {
    return _age;
  }
 
  set age(int value) {
    if (value < 0) {
      throw ArgumentError(
        'Age cannot be negative'
        );
    }
    _age = value;
  }
}

void main() {
  var person = Person();
  person.age = 10;
  print(person.age);
}
```

### 公共和私人会员

与 JavaScript 一样，Dart 没有访问修饰符关键字：所有类成员默认都是公共的。

JavaScript 将在 EcmaScript 标准的下一个实际修订版中包含私有类成员。因此，这种实现已经在各种浏览器和运行时中可用一段时间了。

要在 JavaScript 中将类成员设置为私有，请在其名称前添加井号（或井号）符号 ( `#`)。

```
class Animal {
  eyes; // Public field
  #paws; // Private field

  #printEyes() { // Private method
    print(this.eyes);
  }

  printPaws() { // Public method
    print(this.#paws);
  }
}
```

要在 Dart 中将类成员设置为私有，请在其名称前添加下划线 ( `_`)。

```
class Animal {
  int eyes; // Public field
  int _paws; // Private field

  void _printEyes() { // Private method
    print(this.eyes);
  }

  void printPaws() { // Public method
    print(this._paws);
  }
}
```

JavaScript 使用哈希作为约定。Dart 的编译器强制使用下划线来实现此功能。

Dart 将私有成员设为库私有，而不是类私有。这意味着您可以从同一库中的代码访问私有成员。默认情况下，Dart 将对私有类成员的访问限制为同一文件中的代码。要将库的范围扩展到一个文件之外，请添加该`part`指令。如果可能，[请避免使用`part`](https://dart.cn/guides/libraries/create-packages#organizing-a-package). 保留用于`part`代码生成器。

### 后期变量

要指示 Dart 在稍后初始化类字段，请将`late`关键字分配给这些类字段。这些类字段仍然不可为空。当变量不需要立即观察或访问并且可以稍后初始化时，请执行此操作。这与将字段标记为可为空不同。

- （不可为 null）后期字段不能在稍后分配 null。
- （不可为空）延迟字段在初始化之前访问时会引发运行时错误。应该避免这种情况。

```
class PetOwner {
  final String name;
  late final Pet _pet;
  PetOwner(this.name, String petName) {
    // Cyclic object graph, cannot set _pet before owner exists.
    _pet = Pet(petName, this);
  }
  Pet get pet => _pet;
}
class Pet {
  final String name;
  final PetOwner owner;
  Pet(this.name, this.owner);
}
```

`late`仅当代码不清楚导致编译器无法确定代码是否初始化了变量时才使用局部变量。

```
doSomething(int n, bool capture) {
  late List<Foo> captures;
  if (capture) captures = [];
  for (var i = 0; i < n; i++) {
    var foo = something(i);
    if (capture) captures.add(foo);
  }
}
```

在前面的示例中，编译器不知道如何分配 `captures`if`capture`为 true。使用将`late`正常的“分配”检查延迟到运行时。

## 泛型

虽然 JavaScript 不提供泛型，但 Dart 确实提高了类型安全性并减少了代码重复。

### 通用方法

您可以将泛型应用于方法。要定义泛型类型参数，请将其放在`< >` 方法名称后面的尖括号之间。然后，您可以在方法中使用此类型作为返回类型或在方法的参数中：

```
Map<Object?, Object?> _cache = {};
T cache<T>(T value) => (_cache[value] ??= value) as T;
```

通过用逗号分隔来定义多个泛型类型：

```
// Defining a method with multiple generics.
T transform<T, Q>(T param1, Q param2) {
   ...
}
// Calling the method with explicitly defined types.
transform<int, String>(5, 'string value');
// Types are optional when the analyzer can infer them.
transform(5, 'string value');
```

### 通用类

泛型也可以应用于类。您可以包含调用构造函数时要使用的类型。这允许您根据特定类型定制可重用的类。

在以下示例中，该类`Cache`缓存特定类型：

```
class Cache<T> {
  T getByKey(String key) {}
  void setByKey(String key, T value) {}
}
// Creating a cache for strings
var stringCache = Cache<String>(); // stringCache has type Cache<String>
stringCache.setByKey('Foo', 'Bar'); // Valid, setting a string value.
stringCache.setByKey('Baz', 5); // Invalid, int type does not match generic.
```

如果省略类型声明，则运行时类型将变为`Cache<dynamic>` 并且两个调用均`setByKey`有效。

### 限制仿制药

您可以使用泛型将代码限制为使用`extends`. 这可确保您的类使用扩展特定类型的泛型类型进行实例化：

```
class NumberManager<T extends num> {
   ...
}
// Valid.
var manager = NumberManager<int>();
var manager = NumberManager<double>();
// Invalid, String nor its parent classes extend num.
var manager = NumberManager<String>();
```

### 文字中的泛型

`Map`、`Set`和`List`文字可以接受类型参数。当 Dart 无法推断类型或无法正确推断类型时，这会有所帮助。

例如，该类`List`有一个通用定义： `class List<E>`。type 参数`E`指的是列表内容的类型。通常，该类型是自动推断的，用于某些`List`类的成员类型。（例如，它的第一个 getter 返回类型为 的值`E`。）定义`List`文字时，可以显式定义泛型类型，如下所示：

```
// Automatic type inference
var objList = [5, 2.0]; // Type: List<num>
// Explicit type definition:
var objList = <Object>[5, 2.0]; // Type: List<Object>
// Sets work identically:
var objSet = <Object>{5, 2.0};
```

对于 s 也是如此`Map`，它也使用泛型 ( ) 定义它们的键和值类型`class Map<K, V>`：

```
// Automatic type inference
var map = {
  'foo': 'bar'
}; // Type: Map<String, String>
// Explicit type definition:
var map = <String, Object>{
  'foo': 'bar'
}; // Type: Map<String, Object>
```

## 文档评论

常规注释在 Dart 中的工作方式与在 JavaScript 中的工作方式相同。使用`//`注释掉剩余行之外的所有内容，并且您可以使用它`/* ... */` 来阻止跨多行的注释。

除了常规注释之外，Dart 还具有与 协同工作的[文档注释](https://dart.cn/effective-dart/documentation#doc-comments)[`dart doc`](https://dart.cn/tools/dart-doc)：为 Dart 包生成 HTML 文档的第一方工具。将文档注释置于公共成员的所有声明之上被认为是最佳实践。

使用三个正斜杠而不是两个 ( `///`) 定义文档注释：

```
/// The number of characters in this chunk when unsplit.
int get length => ...
```
