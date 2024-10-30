---
title: 取消订单
description: 
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| out_order_no | string | 商户服务订单号
| json | object | 声明请求的`JSON`数据结构
| service_id {data-indent=1} | string | 服务ID
| channel_id {data-indent=1} | string | 渠道商商户号
| sub_mchid {data-indent=1} | string | 子商户号
| reason {data-indent=1} | string | 撤销原因

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->payscore->acquiringbank->serviceorder->_out_order_no_->cancel->postAsync([
  'out_order_no' => '1234323JKHDFE1243252',
  'json' => [
    'service_id' => '2002000000000558128851361561536',
    'channel_id' => '1230000109',
    'sub_mchid' => '1900000109',
    'reason' => '用户投诉',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r($response->getStatusCode() === 204);
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/payscore/acquiringbank/serviceorder/{out_order_no}/cancel')->postAsync([
  'out_order_no' => '1234323JKHDFE1243252',
  'json' => [
    'service_id' => '2002000000000558128851361561536',
    'channel_id' => '1230000109',
    'sub_mchid' => '1900000109',
    'reason' => '用户投诉',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r($response->getStatusCode() === 204);
})
->wait();
```

```php [异步属性式]
$instance['v3/payscore/acquiringbank/serviceorder/{out_order_no}/cancel']->postAsync([
  'out_order_no' => '1234323JKHDFE1243252',
  'json' => [
    'service_id' => '2002000000000558128851361561536',
    'channel_id' => '1230000109',
    'sub_mchid' => '1900000109',
    'reason' => '用户投诉',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r($response->getStatusCode() === 204);
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->payscore->acquiringbank->serviceorder->_out_order_no_->cancel->post([
  'out_order_no' => '1234323JKHDFE1243252',
  'json' => [
    'service_id' => '2002000000000558128851361561536',
    'channel_id' => '1230000109',
    'sub_mchid' => '1900000109',
    'reason' => '用户投诉',
  ],
]);
print_r($response->getStatusCode() === 204);
```

```php [同步声明式]
$response = $instance->chain('v3/payscore/acquiringbank/serviceorder/{out_order_no}/cancel')->post([
  'out_order_no' => '1234323JKHDFE1243252',
  'json' => [
    'service_id' => '2002000000000558128851361561536',
    'channel_id' => '1230000109',
    'sub_mchid' => '1900000109',
    'reason' => '用户投诉',
  ],
]);
print_r($response->getStatusCode() === 204);
```

```php [同步属性式]
$response = $instance['v3/payscore/acquiringbank/serviceorder/{out_order_no}/cancel']->post([
  'out_order_no' => '1234323JKHDFE1243252',
  'json' => [
    'service_id' => '2002000000000558128851361561536',
    'channel_id' => '1230000109',
    'sub_mchid' => '1900000109',
    'reason' => '用户投诉',
  ],
]);
print_r($response->getStatusCode() === 204);
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| 空字符串(无返回内容) {align=center colspan=3}

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/docs/partner/apis/partner-institution-weixin-pay-score/acquiring-bank-service-order/cancel-acquiring-bank-service-order.html)
