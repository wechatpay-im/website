---
title: Software Development Kit
description: 统一的OpenAPI客户端，提供APIv2及APIv3的一致地客户端实现，内置的composer命令，像安装依赖包一样下载微信支付平台证书文件。
aside: true
---

# 软件开发包 {#summary}

## 核心代码包 {#core}

::: info {.im-badges}
![](https://github.com/wechatpay-apiv3/wechatpay-php/workflows/CI/badge.svg)
![](https://img.shields.io/packagist/stars/wechatpay/wechatpay)
![](https://img.shields.io/packagist/dt/wechatpay/wechatpay)
![](https://img.shields.io/packagist/v/wechatpay/wechatpay)
![](https://img.shields.io/packagist/php-v/wechatpay/wechatpay)
![](https://img.shields.io/packagist/l/wechatpay/wechatpay)
:::

### 平台证书下载器 {#cli}

在[指南](/guide/)及[快速开始](/guide/getting-started)均有用法介绍，使用`composer`命令，像安装依赖包一样下载微信支付平台证书文件。

### 客户端 {#client}

统一的客户端`client`构造器，任意深度的函数`链式`集成，函数链即对应OpenAPI的接入路径，像自然语言一样处理OpenAPI调用。客户端同时也提供了异步(`Async`)调用方式，对于某些需要连续调用API的场景，将多个操作通过 `then()` `链式`串联起来会是一种优雅的实现方式。例如 [以函数链的形式流式下载交易帐单](https://developers.weixin.qq.com/community/pay/article/doc/000ec4521086b85fb81d6472a51013)。

### 数据算法类 {#algo}

提供了`数据摘要算法`、`对称加解密算法`及`非对称加解密算法`的静态封装，无状态化的方法调用，简洁方便。

### 辅助类 {#utils}

提供了`数据格式化`、`数据格式转换`、便捷的`二进制数据包裹类`的封装。
衍生地以独立包的形式提供`XML`格式转换包，按需集成使用。

独立包源码见[这里](https://github.com/TheNorthMemory/xml)，发行包见[这里](https://packagist.org/packages/thenorthmemory/xml)。

::: info {.im-badges}
![](https://github.com/TheNorthMemory/xml/workflows/CI/badge.svg)
![](https://img.shields.io/packagist/stars/thenorthmemory/xml)
![](https://img.shields.io/packagist/dt/thenorthmemory/xml)
![](https://img.shields.io/packagist/v/thenorthmemory/xml)
![](https://img.shields.io/packagist/php-v/thenorthmemory/xml)
![](https://img.shields.io/packagist/l/thenorthmemory/xml)
:::

## 静态分析及测试 {#tests}

所有开放源码均托管在`GitHub`，并由 `GitHub Actions` 提供 `CI` 支持，交叉分析及测试覆盖 `Windows`、`Linux`、`MacOS` 三大操作系统，`PHP7.1`、`PHP7.2`、`PHP7.3`、`PHP7.4`、`PHP8.0`、`PHP8.1`、`PHP8.2`、`PHP8.3`及`PHP8.4`共计 `3x9=27` 种运行时环境。

`腾讯蓝盾`额外地为社区贡献提供了内部`coverity`扫描。

### Makefile {#make}

这是一个小型的完整版`MiniCA`辅助测试套件，提供了核心包测试所需的`RSA`私钥、证书、公钥，覆盖了 `PKCS1`、`PKCS8`、`SPKI`、`X509` 格式文件的诸多模拟。

此文件并未随核心包一并发行，开放源码见[这里](https://github.com/wechatpay-apiv3/wechatpay-php/blob/main/Makefile)，国内镜像见[这里](https://gitee.com/TheNorthMemory/wechatpay-php/blob/main/Makefile)。

### PHPStan

::: info {.im-badges}
![](https://github.com/phpstan/phpstan/workflows/Tests/badge.svg)
![](https://img.shields.io/packagist/stars/phpstan/phpstan)
![](https://img.shields.io/packagist/dt/phpstan/phpstan)
![](https://img.shields.io/packagist/v/phpstan/phpstan)
![](https://img.shields.io/packagist/php-v/phpstan/phpstan)
![](https://img.shields.io/packagist/l/phpstan/phpstan)
:::

[PHPStan](https://phpstan.org/)是一款非常流行的开源代码分析包，本核心包及扩展包，在考虑兼容`PHP7`的情形下，按照九级标准(`--level 8`)全静态分析通过，基本消除了软件包可能的不严谨，可安全使用。

### PHPUnit

::: info {.im-badges}
![](https://github.com/sebastianbergmann/phpunit/workflows/CI/badge.svg)
![](https://img.shields.io/packagist/stars/phpunit/phpunit)
![](https://img.shields.io/packagist/dt/phpunit/phpunit)
![](https://img.shields.io/packagist/v/phpunit/phpunit)
![](https://img.shields.io/packagist/php-v/phpunit/phpunit)
![](https://img.shields.io/packagist/l/phpunit/phpunit)
:::

[PHPUnit](https://phpunit.de/)同样是一款非常流行的开源代码单元测试包，本核心包共计输出`533`条测试用例，`2763`条测试断言悉数通过。

测试用例开放源码见[这里](https://github.com/wechatpay-apiv3/wechatpay-php/blob/main/tests)，国内镜像见[这里](https://gitee.com/TheNorthMemory/wechatpay-php/blob/main/tests)。

## 扩展包 {#ext}

### 代码提示包 {#openapi}

::: info {.im-badges}
![](https://github.com/TheNorthMemory/wechatpay-openapi/workflows/CI/badge.svg)
![](https://img.shields.io/packagist/stars/iwechatpay/openapi)
![](https://img.shields.io/packagist/dt/iwechatpay/openapi)
![](https://img.shields.io/packagist/v/iwechatpay/openapi)
![](https://img.shields.io/packagist/php-v/iwechatpay/openapi)
![](https://img.shields.io/packagist/l/iwechatpay/openapi)
:::

现代软件编程，更多的需要借助各种辅助工具，这里提供了一个通用的、面向`IDE`工具的辅助编程软件包，借助`IDE`编程工具自有能力，不仅提供核心包业务代码级别的`方法链`提示，同时也辅助提示了最终驱动`HTTP`请求参数的完整`数据结构`。部分提示用到了`方言`来达到提示效果，例如`global`、`use`、`return`等`PHP`语言保留`关键字`，即不可以做`类`名，也不完全可以做`命名空间`，只能是以`关键字_`别名的形式提供能力支持。

对于熟练使用现代`IDE`编程工具的研发人员，推荐安装此包，可加速软件研发及交付过程。

开放源码见[这里](https://github.com/TheNorthMemory/wechatpay-openapi)，发行包见[这里](https://packagist.org/packages/iwechatpay/openapi)。
