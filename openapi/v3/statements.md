---
title: 下载对账单
description: 商户可以通过该接口下载历史交易清单。比如掉单、系统错误等导致商户侧和微信侧数据不一致，通过对账单核对后可校正支付状态。
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

::: warning :beginner: {.im-redesigned}

本接口服务已于 `2022.09.08` (北京时间)发布新版，新接口见[这里](/openapi/v3/global/statements)，此文档仅做留存参考。

:::

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| base_uri {data-required} | string | 声明接入点`https://api.mch.weixin.qq.com/hk/`(国内接入)
| query {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的查询参数
| date {data-required data-indent=1} | string | 账单日期
| mchid {data-required data-indent=1} | string | 商户号
| headers | object {data-tooltip="对应PHP的array"} | 声明请求的头参数
| Accept-Encoding {data-indent=1} | string | 账单压缩：如需对账单进行压缩，设置HTTP请求头值为gzip

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->statements->getAsync([
  'base_uri' => 'https://api.mch.weixin.qq.com/hk/', // 接入点(国内接入)
  'sink' => './somehowfile.csv.gz',
  'query' => [
    'date'  => '20180130',
    'mchid' => '1900000109',
  ],
  'headers' => [
    'Accept-Encoding' => 'gzip',
  ],
])
->wait();
```

```php [异步声明式]
$instance->chain('v3/statements')->getAsync([
  'base_uri' => 'https://api.mch.weixin.qq.com/hk/', // 接入点(国内接入)
  'sink' => './somehowfile.csv.gz',
  'query' => [
    'date'  => '20180130',
    'mchid' => '1900000109',
  ],
  'headers' => [
    'Accept-Encoding' => 'gzip',
  ],
])
->wait();
```

```php [异步属性式]
$instance['v3/statements']->getAsync([
  'base_uri' => 'https://api.mch.weixin.qq.com/hk/', // 接入点(国内接入)
  'sink' => './somehowfile.csv.gz',
  'query' => [
    'date'  => '20180130',
    'mchid' => '1900000109',
  ],
  'headers' => [
    'Accept-Encoding' => 'gzip',
  ],
])
->wait();
```

```php [同步纯链式]
$response = $instance->v3->statements->get([
  'base_uri' => 'https://api.mch.weixin.qq.com/hk/', // 接入点(国内接入)
  'sink' => './somehowfile.csv.gz',
  'query' => [
    'date'  => '20180130',
    'mchid' => '1900000109',
  ],
  'headers' => [
    'Accept-Encoding' => 'gzip',
  ],
]);
```

```php [同步声明式]
$response = $instance->chain('v3/statements')->get([
  'base_uri' => 'https://api.mch.weixin.qq.com/hk/', // 接入点(国内接入)
  'sink' => './somehowfile.csv.gz',
  'query' => [
    'date'  => '20180130',
    'mchid' => '1900000109',
  ],
  'headers' => [
    'Accept-Encoding' => 'gzip',
  ],
]);
```

```php [同步属性式]
$response = $instance['v3/statements']->get([
  'base_uri' => 'https://api.mch.weixin.qq.com/hk/', // 接入点(国内接入)
  'sink' => './somehowfile.csv.gz',
  'query' => [
    'date'  => '20180130',
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

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/api/wxpay/ch/fusion_wallet_ch/QuickPay/chapter8_5.shtml)
