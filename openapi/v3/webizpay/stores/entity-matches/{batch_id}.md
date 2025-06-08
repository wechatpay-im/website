---
title: 查询门店主体匹配结果
description: 查询门店主体匹配结果。该接口允许服务商查询之前发起的门店主体匹配批次结果，包括各门店统一社会信用代码是否存在满足条件的微信支付商户号。通过此接口可获取匹配结果详情，确认哪些门店可以使用企业支付功能。
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| batch_id {data-required} | string | 微信支付主体匹配批次单号
| query {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的查询参数
| sp_mchid {data-required data-indent=1} | string | 服务商商户号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->webizpay->stores->entityMatches->_batch_id_->getAsync([
  'batch_id' => '1030000071201xxxxx',
  'query' => [
    'sp_mchid' => '12341234',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/webizpay/stores/entity-matches/{batch_id}')->getAsync([
  'batch_id' => '1030000071201xxxxx',
  'query' => [
    'sp_mchid' => '12341234',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/webizpay/stores/entity-matches/{batch_id}']->getAsync([
  'batch_id' => '1030000071201xxxxx',
  'query' => [
    'sp_mchid' => '12341234',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->webizpay->stores->entityMatches->_batch_id_->get([
  'batch_id' => '1030000071201xxxxx',
  'query' => [
    'sp_mchid' => '12341234',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/webizpay/stores/entity-matches/{batch_id}')->get([
  'batch_id' => '1030000071201xxxxx',
  'query' => [
    'sp_mchid' => '12341234',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/webizpay/stores/entity-matches/{batch_id}']->get([
  'batch_id' => '1030000071201xxxxx',
  'query' => [
    'sp_mchid' => '12341234',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| sp_mchid {data-required} | string | 服务商商户号
| out_batch_id {data-required} | string | 商户主体匹配批次单号
| batch_id {data-required} | string | 微信支付主体匹配批次单号
| state {data-required} | string | 批次状态<br/>`ACCEPTED` \| `IN_PROGRESS` \| `COMPLETED` \| `CLOSED` 枚举值之一
| match_results | object[] {data-tooltip="对应PHP的array"} | 主体匹配明细列表
| organization_code {data-required data-indent=1} | string | 门店统一社会信用代码
| store_name {data-required data-indent=1} | string | 门店名称
| has_valid_mchid {data-required data-indent=1} | boolean | 是否存在满足条件微信支付商户号

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4014507133)
