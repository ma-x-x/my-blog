# Dart 概览

![Dart product logo](https://dart.cn/assets/img/logo_lockup_dart_horizontal.png)

Dart 是一种针对客户端优化的语言，可在任何平台上开发快速的应用程序。其目标是为多平台开发提供最高效的编程语言，并为应用程序框架搭配了 [灵活的运行时执行平台](https://dart.cn/overview#platform)。

通常来说，编程语言会包含一些 **技术壁垒**，即语言在设计中的抉择决定了其功能和优势。 Dart 的语言设计针对客户端开发，它优先考虑多平台 (Web，移动端和桌面端) 上的开发 (亚秒级的状态热重载) 和高质量生产环境体验。

Dart 也是 [Flutter](https://flutter.cn/) 的基础。 Dart 作为 Flutter 应用程序的编程语言，为驱动应用运行提供了环境，同时 Dart 还支持许多核心的开发任务，例如格式化，分析和代码测试。

## Dart 语言

Dart 语言是类型安全的；它使用静态类型检查来确保变量的值 **始终** 与变量的静态类型相匹配。这也叫健全类型。尽管类型是强制性的，但由于 Dart 支持类型推断，类型注释仍是可选的。 Dart 的类型系统也很灵活，允许结合使用 dynamic 类型与运行时检查，在测试开发期间，或是遇到需要特别指定为动态类型的代码时，这项特性很有帮助。

Dart 内置了 [健全的空值安全](https://dart.cn/null-safety)，这意味着只有您声明值可以为空的情况下，值才可以为空；当 Dart 确定变量不可为空时，该变量 **永远** 不可为空。凭借健全的空值安全，Dart 可以通过静态代码分析在运行时保护您免受空值异常的影响。如果你在调试器中审查正在运行的代码，你会看到不可为空性仍在运行时被保留，所以是完全的空安全。

以下代码示例展示了 Dart 语言的一些功能，包括库、异步调用、可空和不可空的类型、箭头语法、生成器、流和 getter。要了解有关 Dart 语言的更多信息，请参阅 [Dart 语言之旅](https://dart.cn/guides/language/language-tour)。

<iframe src="https://dartpad.cn/embed-dart.html?theme=light&amp;run=dartpad&amp;split=false&amp;ga_id=overview" style="box-sizing: border-box; border: 1px solid rgb(204, 204, 204); margin-bottom: 1rem; min-height: 400px; resize: vertical; width: 868px;"></iframe>

*info*

此示例在嵌入式 [DartPad](https://dart.cn/tools/dartpad) 中运行。您也可以 [在此示例自己的窗口中打开它](https://dartpad.cn/4d688b6e468fb4c53d312250f557ec5c)。

## Dart 库

Dart 拥有 [丰富的核心库](https://dart.cn/guides/libraries)，为许多日常编程任务提供了必要工具：

- 为每个 Dart 程序提供的内置类型，集合与其他核心功能 (`dart:core`)
- 更丰富的集合类型，诸如队列、链接列表、哈希图和二叉树 (`dart:collection`)
- 用于在不同的数据表示形式之间进行转换编码器和解码器，包括 JSON 和 UTF-8 (`dart:convert`)
- 数学常数和函数，以及随机数生成 (`dart:math`)
- 为非 Web 应用程序提供的文件、套接字、HTTP 和其他 I/O 支持 (`dart:io`)
- 异步编程支持，比如 `Future` 和 `Stream` 类 (`dart:async`)
- 能够有效处理固定大小的数据（例如，无符号的 8 字节整数）和 SIMD 数字类型的列表 (`dart:typed_data`)
- 用于提供 C 语言风格代码互通性支持的外部函数接口 (`dart:ffi`)
- 使用 **isolates** 的并发编程 — 这些独立的工作程序与线程相似但它们不共享内存并仅通过消息进行通信 (`dart:isolate`)
- 基于 Web 的应用程序中需要与浏览器和文档对象模型 (DOM) 交互的 HTML 元素和其他资源 (`dart:html`)

除核心库外，Dart 还通过一整套软件包提供了许多 API。 Dart 团队发布了许多有用的补充包，例如：

- [characters (字符)](https://pub.flutter-io.cn/packages/characters)
- [intl (国际化)](https://pub.flutter-io.cn/packages/intl)
- [http (http 请求)](https://pub.flutter-io.cn/packages/http)
- [crypto (哈希加密)](https://pub.flutter-io.cn/packages/crypto)
- [markdown](https://pub.flutter-io.cn/packages/markdown)

此外，第三方发布者和更广泛的社区也发布了上千个软件包，支持诸如此类功能：

- [XML](https://pub.flutter-io.cn/packages/xml)
- [Windows integration (Windows API 调用) ](https://pub.flutter-io.cn/packages/win32)
- [SQLite](https://pub.flutter-io.cn/packages/sqflite_common)
- [compression (压缩)](https://pub.flutter-io.cn/packages/archive)

你可以访问 [库概览](https://dart.cn/guides/libraries/library-tour)，查看关于 Dart 核心库的一系列示例。如果你想要查找其他 API，请参见 [常用软件包页面](https://dart.cn/guides/libraries/useful-libraries)。

## Dart 平台

Dart 的编译器技术可让您以不同的方式运行代码：

- **原生平台**：针对面向移动和桌面设备的应用程序， Dart 拥有具有实时 (JIT) 编译功能的 Dart VM 和用于生成机器代码的提前 (AOT) 编译器。
- **Web 平台**：Dart 可用于编译开发和生产阶段的面向 Web 的应用，它的 Web 编译器可以将 Dart 转换为 JavaScript。

![An illustration of the targets supported by Dart](https://dart.cn/assets/img/Dart-platforms.svg)

[Flutter 框架](https://flutter.cn/) 是一款流行的多平台 UI 工具包，由 Dart 语言强力驱动，提供一套工具和 UI 库，帮助开发者们在 iOS、Android、macOS、Windows、Linux 和 Web 平台构建优秀的 UI 体验。

#### 原生平台的 Dart (JIT 和 AOT 机器码)

在开发过程中，快速的开发周期对于迭代至关重要。 Dart VM 提供了一个实时编译器 (JIT)，编译器拥有增量重编译功能 (支持热重载)、运行数据收集（用于驱动 [DevTools](https://dart.cn/tools/dart-devtools)）以及丰富的开发调试支持。

当应用程序可以部署到生产环境时 (无论是发布到应用商店还是部署到生产后端)， Dart AOT 编译器可以编译成原生的 ARM 或 x64 的机器码。经过 AOT 编译的应用程序将稳定快速地启动。

经过 AOT 编译的代码会在高效的 Dart 运行环境中运行，该运行环境拥有健全的 Dart 类型系统，并使用快速对象分配和 [分代垃圾收集器](https://medium.com/flutter-io/flutter-dont-fear-the-garbage-collector-d69b3ff1ca30) 来管理内存。

更多相关信息：

- [快速上手：命令行与服务器应用](https://dart.cn/tutorials/server/get-started)
- [用于 JIT 运行或 AOT 编译为机器码的 `dart` 工具](https://dart.cn/tools/dart-tool)
- [编写命令行应用应用程序](https://dart.cn/tutorials/server/cmdline)
- [编写 HTTP 服务器](https://dart.cn/tutorials/server/httpserver)

#### Web 平台的 Dart (使用 JavaScript 开发和部署)

Dart 的 Web 支持让你可以在 JavaScript 驱动的网页平台上运行 Dart 代码。使用 Web 环境下的 Dart 时，你可以将 Dart 编译为在浏览器中运行的 JavaScript 代码，例如: [Chrome](https://www.google.cn/chrome/) 中的 [V8](https://v8.dev/)。

Dart Web 包含两种编译模式:

- 一个为快速开发提供帮助的增量编译器。
- 一个为生产环境优化的编译器，可以将 Dart 代码编译成快速、紧凑、可部署的 JavaScript。它的高效之处在于使用了类似消除无用代码的优化。

更多相关信息：

- [快速上手：网页应用程序](https://dart.cn/tutorials/web/get-started)
- [`dart compile js`](https://dart.cn/tools/dart-compile#js)
- [`webdev` 工具](https://dart.cn/tools/webdev)
- [网页部署提示](https://dart.cn/web/deployment)

#### Dart 运行时环境

不论你在哪个平台上使用、选择如何构建你的代码，执行代码时都需要一个 Dart 运行时环境。这个运行时环境负责下面的关键任务：

- 内存管理： Dart 使用一个受管理的内存模型，未被使用的内存会由垃圾收集器 (GC) 回收。
- 执行 Dart 语言的类型体系： Dart 语言里大多数类型检查都是静态的（编译时），但仍有部分检查是动态的（运行时）。比如，Dart 运行时环境会在遇到 [类型判断运算符](https://dart.cn/language/operators#type-test-operators) 时执行动态检查。
- 管理 [isolates](https://dart.cn/language/concurrency)： Dart 运行时环境会负责控制主 isolate（代码通常在这里运行）以及其他应用创建的 isolate。

在原生平台上，Dart 运行时环境被自动包含在独立的可执行文件中，是 [`dart run`](https://dart.cn/tools/dart-run) 命令提供的 Dart VM 的一部分。

## 学习 Dart

学习 Dart 有很多选择。以下是我们推荐的一些方法：

- [在浏览器中探索 Dart](https://dartpad.cn/) - DartPad 是一个基于网页的 Dart 代码执行环境。
- [Dart 开发语言概览](https://dart.cn/language)，它展示了如何使用 Dart 的主要特性。
- [完成 Dart 教程](https://dart.cn/tutorials/server/cmdline) 它涵盖了通过命令行构建使用 Dart 的基础知识。
- 来自 Dart 专家的 [在线课程](https://www.udemy.com/course/complete-dart-guide/?couponCode=NOV-20)。
- [探索 API 文档](https://api.dart.cn/) - 描述了 Dart 核心库。
- [阅读关于 Dart 编程的书籍](https://dart.cn/resources/books)。