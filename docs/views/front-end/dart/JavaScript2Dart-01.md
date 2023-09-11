---
title: JavaScript2Dart-01
sidebarDepth: 2
---

## 前言

[Dart 官网地址为](https://dart.cn/guides/language/coming-from/js-to-dart)

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

_信息_ **备注：** JavaScript 有两个相等运算符，`==`和`===`。`==`在对原始值进行任何必要的类型转换后，该运算符将执行相等测试。该`===`运算符不执行类型转换。Dart 使用`identical`函数来检查两个值是否是同一个对象，并使用`==`运算符来检查对象是否认为自己相等。

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

_信息_ **备注：** 您可以使用带或不带花括号的四位十六进制字符。要了解有关使用 unicode 字符的更多信息，请参阅[符文和字素簇](https://dart.cn/language/built-in-types#runes-and-grapheme-clusters)。

##### 字符串插值

JavaScript 支持模板文字。它们使用反引号 ( ```) 字符分隔符的原因如下：

- 允许多行字符串
- 使用嵌入表达式插入字符串
- 创建称为标记模板的特殊结构

在 Dart 中，您不需要将字符串括在反引号中来连接字符串或在字符串文字中使用插值。

要了解更多信息，请查看 Dart 语言之旅中的[字符串。](https://dart.cn/language/built-in-types#strings)

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

Dart 和 Javascript 中的布尔值都表示二进制条件。这两个值表示值或表达式是否为 `true`或`false`。`true`您可以使用文字 and 返回值，或者使用 or`false`等表达式生成它们。` x < 5``y == null `

```
let isBananaPeeled = false;
var isBananaPeeled = false;
```

## 变量

Dart 中的变量与 JavaScript 中的变量类似，但有两个例外：

1. 每个变量都有一个类型。
2. Dart 将所有变量的作用域限制在块级别，就像 JavaScript 中的`let`和变量一样。`const`

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

_信息_ **备注：** 创建对象时，类构造函数必须初始化 `final`实例变量。这确保了这些变量在任何人都可以读取之前就已具有值。

在[课程](https://dart.cn/guides/language/coming-from/js-to-dart#classes)部分了解更多信息。

在 Dart 中，_常量变量必须包含常量值_。非常量变量可以包含常量值，您也可以将其标记为`const`。

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
