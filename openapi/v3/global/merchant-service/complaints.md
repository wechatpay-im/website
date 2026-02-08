---
title: 查询投诉单列表
description: 商户可通过调用此接口，查询指定时间段的所有用户投诉信息，以分页输出查询结果。对于服务商、渠道商，可通过调用此接口，查询指定特约商户号下的投诉信息，若不指定，则查询的是名下所有特约商户投诉信息。
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| base_uri | string | 声明接入点`https://apihk.mch.weixin.qq.com/`(香港接入)
| query {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的查询参数
| limit {data-indent=1} | integer | 分页大小
| offset {data-indent=1} | integer | 分页开始位置
| begin_date {data-required data-indent=1} | string | 开始日期
| end_date {data-required data-indent=1} | string | 结束日期
| complainted_mchid {data-indent=1} | string | 诉商户号
| mch_language {data-indent=1} | string | 商户语言<br/>`ZH_CN` \| `ZH_TW` \| `ZH_HK` \| `EN` \| `JA` \| `KO` \| `TH` \| `VI` \| `RU` \| `DE` \| `FR` \| `AR` \| `ES` 枚举值之一

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->global->merchantService->complaints->getAsync([
  'base_uri' => 'https://apihk.mch.weixin.qq.com/', // 接入点(香港接入)
  'query' => [
    'limit'             => 5,
    'offset'            => 10,
    'begin_date'        => '2019-01-01',
    'end_date'          => '2019-01-01',
    'complainted_mchid' => '1900012181',
    'mch_language'      => 'zh_CN',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/global/merchant-service/complaints')->getAsync([
  'base_uri' => 'https://apihk.mch.weixin.qq.com/', // 接入点(香港接入)
  'query' => [
    'limit'             => 5,
    'offset'            => 10,
    'begin_date'        => '2019-01-01',
    'end_date'          => '2019-01-01',
    'complainted_mchid' => '1900012181',
    'mch_language'      => 'zh_CN',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/global/merchant-service/complaints']->getAsync([
  'base_uri' => 'https://apihk.mch.weixin.qq.com/', // 接入点(香港接入)
  'query' => [
    'limit'             => 5,
    'offset'            => 10,
    'begin_date'        => '2019-01-01',
    'end_date'          => '2019-01-01',
    'complainted_mchid' => '1900012181',
    'mch_language'      => 'zh_CN',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->global->merchantService->complaints->get([
  'base_uri' => 'https://apihk.mch.weixin.qq.com/', // 接入点(香港接入)
  'query' => [
    'limit'             => 5,
    'offset'            => 10,
    'begin_date'        => '2019-01-01',
    'end_date'          => '2019-01-01',
    'complainted_mchid' => '1900012181',
    'mch_language'      => 'zh_CN',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/global/merchant-service/complaints')->get([
  'base_uri' => 'https://apihk.mch.weixin.qq.com/', // 接入点(香港接入)
  'query' => [
    'limit'             => 5,
    'offset'            => 10,
    'begin_date'        => '2019-01-01',
    'end_date'          => '2019-01-01',
    'complainted_mchid' => '1900012181',
    'mch_language'      => 'zh_CN',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/global/merchant-service/complaints']->get([
  'base_uri' => 'https://apihk.mch.weixin.qq.com/', // 接入点(香港接入)
  'query' => [
    'limit'             => 5,
    'offset'            => 10,
    'begin_date'        => '2019-01-01',
    'end_date'          => '2019-01-01',
    'complainted_mchid' => '1900012181',
    'mch_language'      => 'zh_CN',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| data | object[] {data-tooltip="对应PHP的array"} | 用户投诉信息详情
| complaint_id {data-required data-indent=1} | string | 投诉单号
| complaint_time {data-required data-indent=1} | string | 投诉时间
| complaint_detail {data-required data-indent=1} | string | 投诉详情
| complaint_state {data-required data-indent=1} | string | 投诉单状态<br/>`PENDING` \| `PROCESSING` \| `PROCESSED` 枚举值之一
| complainted_mchid {data-required data-indent=1} | string | 被诉商户号
| payer_phone {data-indent=1} | string {data-tooltip=商户API证书对应的公钥加密后的BASE64字符串 data-encrypted=by-rsa-pubkey} | 投诉人联系方式
| complaint_order_info {data-indent=1} | object[] {data-tooltip="对应PHP的array"} | 投诉单关联订单信息
| transaction_id {data-required data-indent=2} | string | 微信订单号
| out_trade_no {data-required data-indent=2} | string | 商户订单号
| settlement_amount {data-required data-indent=2} | integer | 结算币种金额
| settlement_refunded_amount {data-required data-indent=2} | string | 结算币种累计已退款金额
| settlement_currency {data-required data-indent=2} | string | 结算币种
| payer_amount {data-required data-indent=2} | integer | 订单金额
| payer_refunded_amount {data-required data-indent=2} | integer | 支付币种累计已退款金额
| payer_currency {data-required data-indent=2} | string | 支付币种
| trade_time {data-required data-indent=2} | string | 交易时间
| complaint_full_refunded {data-required data-indent=1} | boolean | 投诉单是否已全额退款
| is_overdue {data-indent=1} | boolean | 是否超时
| priority {data-indent=1} | string | 优先级<br/>`PRIORITY` \| `GENERAL` 枚举值之一
| incoming_user_response {data-required data-indent=1} | boolean | 是否有待回复的用户留言
| user_complaint_times {data-required data-indent=1} | integer | 用户投诉次数
| complaint_media_list {data-indent=1} | object[] {data-tooltip="对应PHP的array"} | 投诉资料列表
| media_type {data-required data-indent=2} | string | 媒体文件业务类型<br/>`USER_COMPLAINT_IMAGE` \| `OPERATION_IMAGE` 枚举值之一
| media_url {data-required data-indent=2} | string[] | 媒体文列表
| problem_description {data-indent=1} | string | 问题描述
| complaint_detail_trans {data-indent=1} | string | 投诉详情翻译
| service_order_info {data-indent=1} | object[] {data-tooltip="对应PHP的array"} | 投诉单关联服务单信息
| order_id {data-indent=2} | string | 微信支付服务订单号
| out_order_no {data-indent=2} | string | 商户服务订单号
| state {data-indent=2} | string | 支付分服务单状态<br/>`DOING` \| `REVOKED` \| `WAITPAY` \| `DONE` 枚举值之一
| limit {data-required} | integer | 分页大小
| offset {data-required} | integer | 分页开始位置
| total_count | integer | 投诉总条数

{.im-table #response}

参阅 [官方文档](https://docs.qq.com/doc/DTmZhV0pWT1Zmd2du?nlc=1)
