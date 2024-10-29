---
title: 下载账单
description: 下载账单API为通用接口，交易/资金账单都可以通过该接口获取到对应的账单。
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| query | object | 声明请求的查询参数
| token {data-indent=1} | string | 
| tartype {data-indent=1} | string | 

{.im-table #request}

::: code-group

```php [异步纯链式]
$savedTo = \GuzzleHttp\Psr7\Utils::tryFopen('./somehowfile.csv.gz', 'w+');
$stream  = \GuzzleHttp\Psr7\Utils::streamFor($savedTo);

$instance->v3->billdownload->file->getAsync([
  'sink' => $stream,
  'query' => [
    'token' => '',
    'tartype' => '',
  ],
])
->wait();
```

```php [异步声明式]
$savedTo = \GuzzleHttp\Psr7\Utils::tryFopen('./somehowfile.csv.gz', 'w+');
$stream  = \GuzzleHttp\Psr7\Utils::streamFor($savedTo);

$instance->chain('v3/billdownload/file')->getAsync([
  'sink' => $stream,
  'query' => [
    'token' => '',
    'tartype' => '',
  ],
])
->wait();
```

```php [异步属性式]
$savedTo = \GuzzleHttp\Psr7\Utils::tryFopen('./somehowfile.csv.gz', 'w+');
$stream  = \GuzzleHttp\Psr7\Utils::streamFor($savedTo);

$instance['v3/billdownload/file']->getAsync([
  'sink' => $stream,
  'query' => [
    'token' => '',
    'tartype' => '',
  ],
])
->wait();
```

```php [同步纯链式]
$savedTo = \GuzzleHttp\Psr7\Utils::tryFopen('./somehowfile.csv.gz', 'w+');
$stream  = \GuzzleHttp\Psr7\Utils::streamFor($savedTo);

$instance->v3->billdownload->file->get([
  'sink' => $stream,
  'query' => [
    'token' => '',
    'tartype' => '',
  ],
]);
```

```php [同步声明式]
$savedTo = \GuzzleHttp\Psr7\Utils::tryFopen('./somehowfile.csv.gz', 'w+');
$stream  = \GuzzleHttp\Psr7\Utils::streamFor($savedTo);

$instance->chain('v3/billdownload/file')->get([
  'sink' => $stream,
  'query' => [
    'token' => '',
    'tartype' => '',
  ],
]);
```

```php [同步属性式]
$savedTo = \GuzzleHttp\Psr7\Utils::tryFopen('./somehowfile.csv.gz', 'w+');
$stream  = \GuzzleHttp\Psr7\Utils::streamFor($savedTo);

$instance['v3/billdownload/file']->get([
  'sink' => $stream,
  'query' => [
    'token' => '',
    'tartype' => '',
  ],
]);
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| 文件流(需解析为对应数据) {align=center colspan=3}

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/pay/bill/chapter3_3.shtml)
