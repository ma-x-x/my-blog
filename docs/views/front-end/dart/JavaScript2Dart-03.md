---
title: JavaScript2Dart-03
sidebarDepth: 2
---

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

和 JavaScript 运算符没有等效项`==`。`!=`

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

如果实现 指定的接口，则 的结果`obj is T`为 true 。例如，始终为真。` obj``T``obj is Object? `

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
