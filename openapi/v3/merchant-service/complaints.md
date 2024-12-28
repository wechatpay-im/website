---
title: 查询投诉信息
description: 商户可通过调用此接口，查询指定时间段的所有用户投诉信息，并在返回结果分页输出查询结果。对于服务商、渠道商，可通过调用此接口，查询指定子商户号对应子商户的投诉信息，若不指定，则查询所有子商户投诉信。
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

::: danger :no_entry_sign: {.im-deprecated}

本接口服务已于 `2020.11.27` (北京时间)下线，文档仅做留存参考。

:::

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| query {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的查询参数
| limit {data-indent=1} | integer | 分页大小
| offset {data-indent=1} | integer | 分页开始位置
| begin_date {data-required data-indent=1} | string | 开始日期
| end_date {data-required data-indent=1} | string | 结束日期
| sub_mchid {data-indent=1} | string | 特约商户号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->merchantService->complaints->getAsync([
  'query' => [
    'limit'      => 5,
    'offset'     => 10,
    'begin_date' => '2019-01-01',
    'end_date'   => '2019-01-01',
    'sub_mchid'  => '1900012181',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/merchant-service/complaints')->getAsync([
  'query' => [
    'limit'      => 5,
    'offset'     => 10,
    'begin_date' => '2019-01-01',
    'end_date'   => '2019-01-01',
    'sub_mchid'  => '1900012181',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/merchant-service/complaints']->getAsync([
  'query' => [
    'limit'      => 5,
    'offset'     => 10,
    'begin_date' => '2019-01-01',
    'end_date'   => '2019-01-01',
    'sub_mchid'  => '1900012181',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->merchantService->complaints->get([
  'query' => [
    'limit'      => 5,
    'offset'     => 10,
    'begin_date' => '2019-01-01',
    'end_date'   => '2019-01-01',
    'sub_mchid'  => '1900012181',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/merchant-service/complaints')->get([
  'query' => [
    'limit'      => 5,
    'offset'     => 10,
    'begin_date' => '2019-01-01',
    'end_date'   => '2019-01-01',
    'sub_mchid'  => '1900012181',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/merchant-service/complaints']->get([
  'query' => [
    'limit'      => 5,
    'offset'     => 10,
    'begin_date' => '2019-01-01',
    'end_date'   => '2019-01-01',
    'sub_mchid'  => '1900012181',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| offset {data-required} | integer | 分页开始位置
| limit {data-required} | integer | 分页大小
| total_count | integer | 投诉总条数
| data | object[] {data-tooltip="对应PHP的array"} | 用户投诉信息详情
| out_trade_no {data-required data-indent=1} | string | 商户订单号
| complaint_time {data-required data-indent=1} | string | 投诉时间
| amount {data-required data-indent=1} | integer | 订单金额
| payer_phone {data-indent=1} | string {data-tooltip=商户API证书对应的公钥加密后的BASE64字符串 data-encrypted=by-rsa-pubkey} | 投诉人联系方式
| complaint_detail {data-required data-indent=1} | string | 投诉详情
| complaint_state {data-required data-indent=1} | string | 投诉单状态<br/>`PAYER_COMPLAINTED` \| `FROZENED` \| `FROZEN_FINISHED` \| `PAYER_CANCELED` \| `MERCHANT_REFUNDED` \| `SYSTEM_REFUNDED` \| `MANUAL_UNFROZEN` 枚举值之一
| transaction_id {data-required data-indent=1} | string | 微信订单号
| frozen_end_time {data-indent=1} | string | 冻结结束时间
| sub_mchid {data-indent=1} | string | 特约商户号

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/tool/merchant-service/chapter3_1.shtml)
