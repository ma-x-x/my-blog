---
title: JavaScript2Dart-07
sidebarDepth: 2
---

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
