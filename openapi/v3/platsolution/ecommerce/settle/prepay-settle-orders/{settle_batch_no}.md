---
title: 个人收款-查询批量结算信息
description: 查询个人收款批量结算信息
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| settle_batch_no {data-required} | string | 微信支付结算批次单号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->platsolution->ecommerce->settle->prepaySettleOrders->_settle_batch_no_->getAsync([
  'settle_batch_no' => '123685544886666',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/platsolution/ecommerce/settle/prepay-settle-orders/{settle_batch_no}')->getAsync([
  'settle_batch_no' => '123685544886666',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/platsolution/ecommerce/settle/prepay-settle-orders/{settle_batch_no}']->getAsync([
  'settle_batch_no' => '123685544886666',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->platsolution->ecommerce->settle->prepaySettleOrders->_settle_batch_no_->get([
  'settle_batch_no' => '123685544886666',
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/platsolution/ecommerce/settle/prepay-settle-orders/{settle_batch_no}')->get([
  'settle_batch_no' => '123685544886666',
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/platsolution/ecommerce/settle/prepay-settle-orders/{settle_batch_no}']->get([
  'settle_batch_no' => '123685544886666',
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
| state {data-required} | string | 批次状态
| trade_scenario {data-required} | string | 交易场景<br/>`RECOMMERCE` 枚举值
| create_time {data-required} | string | 批次创建时间
| finish_time | string | 批次完成时间

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4012650326)
