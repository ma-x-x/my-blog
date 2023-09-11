---
title: JavaScript2Dart-06
sidebarDepth: 2
---

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

当一个类被实现为接口时，它的公共 API 必须由新类实现。与 不同的是`extends`，它的方法和字段实现不与新类共享。虽然一个类只能扩展一个类，但您可以一次实现多个接口，即使实现类已经扩展了另一个类。

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
