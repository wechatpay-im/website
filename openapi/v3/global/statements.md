---
title: 下载对账单
description: 商户可以通过该接口下载历史交易清单。比如掉单、系统错误等导致商户侧和微信侧数据不一致，通过对账单核对后可校正支付状态。
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| base_uri | string | 声明接入点`https://apihk.mch.weixin.qq.com/`(香港接入)
| query {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的查询参数
| date {data-required data-indent=1} | string | 账单日期
| mchid {data-required data-indent=1} | string | 商户号
| headers | object {data-tooltip="对应PHP的array"} | 声明请求的头参数
| Accept-Encoding {data-indent=1} | string | 账单压缩：如需对账单进行压缩，设置HTTP请求头值为gzip

{.im-table #request}

::: code-group

```php [异步纯链式]
$savedTo = \GuzzleHttp\Psr7\Utils::tryFopen('./somehowfile.csv.gz', 'w+');
$stream  = \GuzzleHttp\Psr7\Utils::streamFor($savedTo);

$instance->v3->global->statements->getAsync([
  'base_uri' => 'https://apihk.mch.weixin.qq.com/', // 接入点(香港接入)
  'sink' => $stream,
  'query' => [
    'date' => '20180130',
    'mchid' => '1900000109',
  ],
  'headers' => [
    'Accept-Encoding' => 'gzip',
  ],
])
->wait();
```

```php [异步声明式]
$savedTo = \GuzzleHttp\Psr7\Utils::tryFopen('./somehowfile.csv.gz', 'w+');
$stream  = \GuzzleHttp\Psr7\Utils::streamFor($savedTo);

$instance->chain('v3/global/statements')->getAsync([
  'base_uri' => 'https://apihk.mch.weixin.qq.com/', // 接入点(香港接入)
  'sink' => $stream,
  'query' => [
    'date' => '20180130',
    'mchid' => '1900000109',
  ],
  'headers' => [
    'Accept-Encoding' => 'gzip',
  ],
])
->wait();
```

```php [异步属性式]
$savedTo = \GuzzleHttp\Psr7\Utils::tryFopen('./somehowfile.csv.gz', 'w+');
$stream  = \GuzzleHttp\Psr7\Utils::streamFor($savedTo);

$instance['v3/global/statements']->getAsync([
  'base_uri' => 'https://apihk.mch.weixin.qq.com/', // 接入点(香港接入)
  'sink' => $stream,
  'query' => [
    'date' => '20180130',
    'mchid' => '1900000109',
  ],
  'headers' => [
    'Accept-Encoding' => 'gzip',
  ],
])
->wait();
```

```php [同步纯链式]
$savedTo = \GuzzleHttp\Psr7\Utils::tryFopen('./somehowfile.csv.gz', 'w+');
$stream  = \GuzzleHttp\Psr7\Utils::streamFor($savedTo);

$response = $instance->v3->global->statements->get([
  'base_uri' => 'https://apihk.mch.weixin.qq.com/', // 接入点(香港接入)
  'sink' => $stream,
  'query' => [
    'date' => '20180130',
    'mchid' => '1900000109',
  ],
  'headers' => [
    'Accept-Encoding' => 'gzip',
  ],
]);
```

```php [同步声明式]
$savedTo = \GuzzleHttp\Psr7\Utils::tryFopen('./somehowfile.csv.gz', 'w+');
$stream  = \GuzzleHttp\Psr7\Utils::streamFor($savedTo);

$response = $instance->chain('v3/global/statements')->get([
  'base_uri' => 'https://apihk.mch.weixin.qq.com/', // 接入点(香港接入)
  'sink' => $stream,
  'query' => [
    'date' => '20180130',
    'mchid' => '1900000109',
  ],
  'headers' => [
    'Accept-Encoding' => 'gzip',
  ],
]);
```

```php [同步属性式]
$savedTo = \GuzzleHttp\Psr7\Utils::tryFopen('./somehowfile.csv.gz', 'w+');
$stream  = \GuzzleHttp\Psr7\Utils::streamFor($savedTo);

$response = $instance['v3/global/statements']->get([
  'base_uri' => 'https://apihk.mch.weixin.qq.com/', // 接入点(香港接入)
  'sink' => $stream,
  'query' => [
    'date' => '20180130',
    'mchid' => '1900000109',
  ],
  'headers' => [
    'Accept-Encoding' => 'gzip',
  ],
]);
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| 文件流(需解析为对应数据) {align=center colspan=3}

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/api_external/ch/apis/chapter3_1_6.shtml)
