---
title: 查询单笔退款(微信支付退款订单号)
description: 提交退款申请后，通过调用该接口查询退款状态。退款有一定延时，用零钱支付的退款20分钟内到账，银行卡支付的退款3个工作日后重新查询退款状态。
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| base_uri | string | 声明接入点`https://apihk.mch.weixin.qq.com/`(香港接入)
| refund_id {data-required} | string | 微信支付退款订单号
| query {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的查询参数
| mchid {data-required data-indent=1} | string | 商户号
| sub_mchid {data-required data-indent=1} | string | 子商户号
| sp_mchid {data-required data-indent=1} | string | 机构商户号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->global->refunds->id->_refund_id_->getAsync([
  'base_uri' => 'https://apihk.mch.weixin.qq.com/', // 接入点(香港接入)
  'refund_id' => '',
  'query' => [
    'mchid' => '1900000109',
    'sub_mchid' => '1900000109',
    'sp_mchid' => '1900000100',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/global/refunds/id/{refund_id}')->getAsync([
  'base_uri' => 'https://apihk.mch.weixin.qq.com/', // 接入点(香港接入)
  'refund_id' => '',
  'query' => [
    'mchid' => '1900000109',
    'sub_mchid' => '1900000109',
    'sp_mchid' => '1900000100',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/global/refunds/id/{refund_id}']->getAsync([
  'base_uri' => 'https://apihk.mch.weixin.qq.com/', // 接入点(香港接入)
  'refund_id' => '',
  'query' => [
    'mchid' => '1900000109',
    'sub_mchid' => '1900000109',
    'sp_mchid' => '1900000100',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->global->refunds->id->_refund_id_->get([
  'base_uri' => 'https://apihk.mch.weixin.qq.com/', // 接入点(香港接入)
  'refund_id' => '',
  'query' => [
    'mchid' => '1900000109',
    'sub_mchid' => '1900000109',
    'sp_mchid' => '1900000100',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/global/refunds/id/{refund_id}')->get([
  'base_uri' => 'https://apihk.mch.weixin.qq.com/', // 接入点(香港接入)
  'refund_id' => '',
  'query' => [
    'mchid' => '1900000109',
    'sub_mchid' => '1900000109',
    'sp_mchid' => '1900000100',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/global/refunds/id/{refund_id}']->get([
  'base_uri' => 'https://apihk.mch.weixin.qq.com/', // 接入点(香港接入)
  'refund_id' => '',
  'query' => [
    'mchid' => '1900000109',
    'sub_mchid' => '1900000109',
    'sp_mchid' => '1900000100',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| id {data-required} | string | 微信支付退款订单号
| out_refund_no {data-required} | string | 商户退款单号
| transaction_id {data-required} | string | 微信支付交易订单号
| out_trade_no {data-required} | string | 商户原交易订单号
| channel | string | 退款渠道
| recv_account | string | 退款入账账户
| fund_source | string | 退款资金来源
| success_time | string | 退款成功时间
| create_time {data-required} | string | 退款创建时间
| status {data-required} | string | 退款状态
| amount {data-required} | object {data-tooltip="对应PHP的array"} | 退款金额
| refund {data-required data-indent=1} | integer | 退款金额
| currency {data-indent=1} | string | 货币类型
| payer_refund {data-required data-indent=1} | integer | 用户退款金额
| payer_currency {data-required data-indent=1} | string | 支付币种
| exchange_rate {data-required data-indent=1} | object {data-tooltip="对应PHP的array"} | 汇率
| type {data-indent=2} | string | 汇率类型
| rate {data-indent=2} | integer | 汇率值
| detail | object {data-tooltip="对应PHP的array"} | 优惠退款详情
| promotion_id {data-required data-indent=1} | string | 券ID
| scope {data-indent=1} | string | 优惠范围
| type {data-indent=1} | string | 优惠类型
| amount {data-indent=1} | integer | 优惠券面额
| refund_amount {data-indent=1} | integer | 优惠券退款额
| currency {data-required data-indent=1} | string | 货币类型

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/api_external/ch/apis/chapter5_1_12.shtml)
