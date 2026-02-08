---
title: 查询投诉单详情
description: 商户可通过调用此接口，查询指定投诉单的用户投诉详情，包含投诉内容、投诉关联订单、投诉人联系方式等信息，方便商户处理投诉。
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| base_uri | string | 声明接入点`https://apihk.mch.weixin.qq.com/`(香港接入)
| complaint_id {data-required} | string | 投诉单号
| query | object {data-tooltip="对应PHP的array"} | 声明请求的查询参数
| mch_language {data-indent=1} | string | 商户语言<br/>`ZH_CN` \| `ZH_TW` \| `ZH_HK` \| `EN` \| `JA` \| `KO` \| `TH` \| `VI` \| `RU` \| `DE` \| `FR` \| `AR` \| `ES` 枚举值之一

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->global->merchantService->complaints->_complaint_id_->getAsync([
  'base_uri' => 'https://apihk.mch.weixin.qq.com/', // 接入点(香港接入)
  'complaint_id' => '200201820200101080076610000',
  'query' => [
    'mch_language' => 'zh_CN',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/global/merchant-service/complaints/{complaint_id}')->getAsync([
  'base_uri' => 'https://apihk.mch.weixin.qq.com/', // 接入点(香港接入)
  'complaint_id' => '200201820200101080076610000',
  'query' => [
    'mch_language' => 'zh_CN',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/global/merchant-service/complaints/{complaint_id}']->getAsync([
  'base_uri' => 'https://apihk.mch.weixin.qq.com/', // 接入点(香港接入)
  'complaint_id' => '200201820200101080076610000',
  'query' => [
    'mch_language' => 'zh_CN',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->global->merchantService->complaints->_complaint_id_->get([
  'base_uri' => 'https://apihk.mch.weixin.qq.com/', // 接入点(香港接入)
  'complaint_id' => '200201820200101080076610000',
  'query' => [
    'mch_language' => 'zh_CN',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/global/merchant-service/complaints/{complaint_id}')->get([
  'base_uri' => 'https://apihk.mch.weixin.qq.com/', // 接入点(香港接入)
  'complaint_id' => '200201820200101080076610000',
  'query' => [
    'mch_language' => 'zh_CN',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/global/merchant-service/complaints/{complaint_id}']->get([
  'base_uri' => 'https://apihk.mch.weixin.qq.com/', // 接入点(香港接入)
  'complaint_id' => '200201820200101080076610000',
  'query' => [
    'mch_language' => 'zh_CN',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| complaint_id {data-required} | string | 投诉单号
| complaint_time {data-required} | string | 投诉时间
| complaint_detail {data-required} | string | 投诉详情
| complaint_state {data-required} | string | 投诉单状态<br/>`PENDING` \| `PROCESSING` \| `PROCESSED` 枚举值之一
| complainted_mchid {data-required} | string | 被诉商户号
| payer_phone | string {data-tooltip=商户API证书对应的公钥加密后的BASE64字符串 data-encrypted=by-rsa-pubkey} | 投诉人联系方式
| complaint_order_info | object[] {data-tooltip="对应PHP的array"} | 投诉单关联订单信息
| transaction_id {data-required data-indent=1} | string | 微信订单号
| out_trade_no {data-required data-indent=1} | string | 商户订单号
| settlement_amount {data-required data-indent=1} | integer | 结算币种金额
| settlement_refunded_amount {data-required data-indent=1} | string | 结算币种累计已退款金额
| settlement_currency {data-required data-indent=1} | string | 结算币种
| payer_amount {data-required data-indent=1} | integer | 订单金额
| payer_refunded_amount {data-required data-indent=1} | integer | 支付币种累计已退款金额
| payer_currency {data-required data-indent=1} | string | 支付币种
| trade_time {data-required data-indent=1} | string | 交易时间
| complaint_full_refunded {data-required} | boolean | 投诉单是否已全额退款
| is_overdue | boolean | 是否超时
| priority | string | 优先级<br/>`PRIORITY` \| `GENERAL` 枚举值之一
| incoming_user_response {data-required} | boolean | 是否有待回复的用户留言
| user_complaint_times {data-required} | integer | 用户投诉次数
| complaint_media_list | object[] {data-tooltip="对应PHP的array"} | 投诉资料列表
| media_type {data-required data-indent=1} | string | 媒体文件业务类型<br/>`USER_COMPLAINT_IMAGE` \| `OPERATION_IMAGE` 枚举值之一
| media_url {data-required data-indent=1} | string[] | 媒体文列表
| problem_description | string | 问题描述
| complaint_detail_trans | string | 投诉详情翻译
| service_order_info | object[] {data-tooltip="对应PHP的array"} | 投诉单关联服务单信息
| order_id {data-indent=1} | string | 微信支付服务订单号
| out_order_no {data-indent=1} | string | 商户服务订单号
| state {data-indent=1} | string | 支付分服务单状态<br/>`DOING` \| `REVOKED` \| `WAITPAY` \| `DONE` 枚举值之一

{.im-table #response}

参阅 [官方文档](https://docs.qq.com/doc/DTlpKUmR4eHpXWU9v?nlc=1)
