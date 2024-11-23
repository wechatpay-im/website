---
title: 下载电子回单
description: 下载电子回单API为通用接口，商家转账等业务电子回单均可通过该接口进行下载。
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| query {data-required} | object | 声明请求的查询参数
| token {data-required data-indent=1} | string | 前序download_url的查询参数

{.im-table #request}

::: code-group

```php [异步纯链式]
$savedTo = \GuzzleHttp\Psr7\Utils::tryFopen('./somehowfile.csv.gz', 'w+');
$stream  = \GuzzleHttp\Psr7\Utils::streamFor($savedTo);

$instance->v3->transferdownload->signfile->getAsync([
  'sink' => $stream,
  'query' => [
    'token' => 'X8Uk3sD4a4eZVPTBvqNDoUqcYMlZ9uuD',
  ],
])
->wait();
```

```php [异步声明式]
$savedTo = \GuzzleHttp\Psr7\Utils::tryFopen('./somehowfile.csv.gz', 'w+');
$stream  = \GuzzleHttp\Psr7\Utils::streamFor($savedTo);

$instance->chain('v3/transferdownload/signfile')->getAsync([
  'sink' => $stream,
  'query' => [
    'token' => 'X8Uk3sD4a4eZVPTBvqNDoUqcYMlZ9uuD',
  ],
])
->wait();
```

```php [异步属性式]
$savedTo = \GuzzleHttp\Psr7\Utils::tryFopen('./somehowfile.csv.gz', 'w+');
$stream  = \GuzzleHttp\Psr7\Utils::streamFor($savedTo);

$instance['v3/transferdownload/signfile']->getAsync([
  'sink' => $stream,
  'query' => [
    'token' => 'X8Uk3sD4a4eZVPTBvqNDoUqcYMlZ9uuD',
  ],
])
->wait();
```

```php [同步纯链式]
$savedTo = \GuzzleHttp\Psr7\Utils::tryFopen('./somehowfile.csv.gz', 'w+');
$stream  = \GuzzleHttp\Psr7\Utils::streamFor($savedTo);

$instance->v3->transferdownload->signfile->get([
  'sink' => $stream,
  'query' => [
    'token' => 'X8Uk3sD4a4eZVPTBvqNDoUqcYMlZ9uuD',
  ],
]);
```

```php [同步声明式]
$savedTo = \GuzzleHttp\Psr7\Utils::tryFopen('./somehowfile.csv.gz', 'w+');
$stream  = \GuzzleHttp\Psr7\Utils::streamFor($savedTo);

$instance->chain('v3/transferdownload/signfile')->get([
  'sink' => $stream,
  'query' => [
    'token' => 'X8Uk3sD4a4eZVPTBvqNDoUqcYMlZ9uuD',
  ],
]);
```

```php [同步属性式]
$savedTo = \GuzzleHttp\Psr7\Utils::tryFopen('./somehowfile.csv.gz', 'w+');
$stream  = \GuzzleHttp\Psr7\Utils::streamFor($savedTo);

$instance['v3/transferdownload/signfile']->get([
  'sink' => $stream,
  'query' => [
    'token' => 'X8Uk3sD4a4eZVPTBvqNDoUqcYMlZ9uuD',
  ],
]);
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| 文件流(需解析为对应数据) {align=center colspan=3}

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3_partner/Offline/apis/chapter4_1_15.shtml)
