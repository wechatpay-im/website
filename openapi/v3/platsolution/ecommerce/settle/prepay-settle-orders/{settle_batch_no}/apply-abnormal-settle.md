---
title: 个人收款-申请异常结算批次单处理
description: 申请异常结算批次单处理
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| settle_batch_no {data-required} | string | 微信支付结算批次单号
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| individual_auth_id {data-required data-indent=1} | string | 商品单个人收款方受理授权ID
| out_abnormal_settle_batch_no {data-required data-indent=1} | string | 商户异常结算批次单号
| abnormal_settle_type {data-required data-indent=1} | string | 异常结算批次单处理方式<br/>`TRANSFER_TO_ORIGINAL_RECEIVE_USER` 枚举值
| description {data-indent=1} | string | 异常处理说明

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->platsolution->ecommerce->settle->prepaySettleOrders->_settle_batch_no_->applyAbnormalSettle->postAsync([
  'settle_batch_no' => '123685544886666',
  'json' => [
    'individual_auth_id'           => '256322110225',
    'out_abnormal_settle_batch_no' => '1236698745558870',
    'abnormal_settle_type'         => 'TRANSFER_TO_ORIGINAL_RECEIVE_USER',
    'description'                  => 'xx结算失败，转付至原用户',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/platsolution/ecommerce/settle/prepay-settle-orders/{settle_batch_no}/apply-abnormal-settle')->postAsync([
  'settle_batch_no' => '123685544886666',
  'json' => [
    'individual_auth_id'           => '256322110225',
    'out_abnormal_settle_batch_no' => '1236698745558870',
    'abnormal_settle_type'         => 'TRANSFER_TO_ORIGINAL_RECEIVE_USER',
    'description'                  => 'xx结算失败，转付至原用户',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/platsolution/ecommerce/settle/prepay-settle-orders/{settle_batch_no}/apply-abnormal-settle']->postAsync([
  'settle_batch_no' => '123685544886666',
  'json' => [
    'individual_auth_id'           => '256322110225',
    'out_abnormal_settle_batch_no' => '1236698745558870',
    'abnormal_settle_type'         => 'TRANSFER_TO_ORIGINAL_RECEIVE_USER',
    'description'                  => 'xx结算失败，转付至原用户',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->platsolution->ecommerce->settle->prepaySettleOrders->_settle_batch_no_->applyAbnormalSettle->post([
  'settle_batch_no' => '123685544886666',
  'json' => [
    'individual_auth_id'           => '256322110225',
    'out_abnormal_settle_batch_no' => '1236698745558870',
    'abnormal_settle_type'         => 'TRANSFER_TO_ORIGINAL_RECEIVE_USER',
    'description'                  => 'xx结算失败，转付至原用户',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/platsolution/ecommerce/settle/prepay-settle-orders/{settle_batch_no}/apply-abnormal-settle')->post([
  'settle_batch_no' => '123685544886666',
  'json' => [
    'individual_auth_id'           => '256322110225',
    'out_abnormal_settle_batch_no' => '1236698745558870',
    'abnormal_settle_type'         => 'TRANSFER_TO_ORIGINAL_RECEIVE_USER',
    'description'                  => 'xx结算失败，转付至原用户',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/platsolution/ecommerce/settle/prepay-settle-orders/{settle_batch_no}/apply-abnormal-settle']->post([
  'settle_batch_no' => '123685544886666',
  'json' => [
    'individual_auth_id'           => '256322110225',
    'out_abnormal_settle_batch_no' => '1236698745558870',
    'abnormal_settle_type'         => 'TRANSFER_TO_ORIGINAL_RECEIVE_USER',
    'description'                  => 'xx结算失败，转付至原用户',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| out_settle_batch_no {data-required} | string | 商户结算批次单号
| settle_batch_no {data-required} | string | 微信支付结算批次单号
| individual_auth_id {data-required} | string | 商品单个人收款方受理授权ID
| description {data-required} | string | 收款方描述
| state {data-required} | string | 批次状态<br/>`ACCEPTED` \| `RECEIVED` \| `SUCCESS` \| `DEDUCT_FEE_FAIL` \| `ABNORMAL` \| `ABNORMAL_SETTLE_SUCCESS` 枚举值之一
| trade_scenario {data-required} | string | 交易场景<br/>`RECOMMERCE` 枚举值
| create_time {data-required} | string | 批次创建时间
| finish_time | string | 批次完成时间
| abnormal_type | string | 异常原因类型<br/>`AUTH_RELATIONSHIP_INVALID` \| `USER_PAY_QUOTA_LIMIT` 枚举值之一
| abnormal_settle_result | object {data-tooltip="对应PHP的array"} | 异常结算处理结果
| abnormal_settle_type {data-required data-indent=1} | string | 异常结算批次单处理方式<br/>`TRANSFER_TO_ORIGINAL_RECEIVE_USER` 枚举值
| apply_success_time {data-required data-indent=1} | string | 批次创建时间
| abnormal_fund_receipt_id {data-required data-indent=1} | string | 微信支付异常资金付款单号
| out_abnormal_settle_batch_no {data-required data-indent=1} | string | 商户异常结算批次单号

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4015198012)
