---
title: 申请企业商户企业支付业务账单
description: 申请企业商户企业支付业务账单。该接口允许服务商为指定出资子商户申请特定日期的企业支付业务账单，仅支持申请三个月内的账单数据。业务账单包含交易明细，可用于企业对账和财务分析。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| sp_mchid {data-required data-indent=1} | string | 服务商商户号
| sub_mchid {data-required data-indent=1} | string | 出资子商户号
| date {data-required data-indent=1} | string | 账单日期
| type {data-required data-indent=1} | string | 账单类型<br/>`QYZFALL` 枚举值

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->webizpay->bill->tradeBill->postAsync([
  'json' => [
    'sp_mchid'  => '12341234',
    'sub_mchid' => '43214321',
    'date'      => '2025-04-23',
    'type'      => 'QYZFALL',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/webizpay/bill/trade-bill')->postAsync([
  'json' => [
    'sp_mchid'  => '12341234',
    'sub_mchid' => '43214321',
    'date'      => '2025-04-23',
    'type'      => 'QYZFALL',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/webizpay/bill/trade-bill']->postAsync([
  'json' => [
    'sp_mchid'  => '12341234',
    'sub_mchid' => '43214321',
    'date'      => '2025-04-23',
    'type'      => 'QYZFALL',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->webizpay->bill->tradeBill->post([
  'json' => [
    'sp_mchid'  => '12341234',
    'sub_mchid' => '43214321',
    'date'      => '2025-04-23',
    'type'      => 'QYZFALL',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/webizpay/bill/trade-bill')->post([
  'json' => [
    'sp_mchid'  => '12341234',
    'sub_mchid' => '43214321',
    'date'      => '2025-04-23',
    'type'      => 'QYZFALL',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/webizpay/bill/trade-bill']->post([
  'json' => [
    'sp_mchid'  => '12341234',
    'sub_mchid' => '43214321',
    'date'      => '2025-04-23',
    'type'      => 'QYZFALL',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| sp_mchid {data-required} | string | 服务商商户号
| sub_mchid {data-required} | string | 出资子商户号
| date {data-required} | string | 账单日期
| type {data-required} | string | 账单类型<br/>`QYZFALL` 枚举值
| download_url {data-required} | string | 账单下载地址

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4014507142)
