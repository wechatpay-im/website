---
title: 商户发起催收扣款
description: 当微信支付分订单支付状态处于“待支付”时，商户可使用该接口向用户发起收款。**前置条件：**服务订单支付状态处于“待支付”状态
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| out_order_no {data-required} | string | 商户服务订单号
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| appid {data-indent=1} | string | 公众账号ID
| service_id {data-indent=1} | string | 服务ID

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->payscore->serviceorder->_out_order_no_->pay->postAsync([
  'out_order_no' => '',
  'json' => [
    'appid'      => 'wxd678efh567hg6787',
    'service_id' => '500001',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/payscore/serviceorder/{out_order_no}/pay')->postAsync([
  'out_order_no' => '',
  'json' => [
    'appid'      => 'wxd678efh567hg6787',
    'service_id' => '500001',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/payscore/serviceorder/{out_order_no}/pay']->postAsync([
  'out_order_no' => '',
  'json' => [
    'appid'      => 'wxd678efh567hg6787',
    'service_id' => '500001',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->payscore->serviceorder->_out_order_no_->pay->post([
  'out_order_no' => '',
  'json' => [
    'appid'      => 'wxd678efh567hg6787',
    'service_id' => '500001',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/payscore/serviceorder/{out_order_no}/pay')->post([
  'out_order_no' => '',
  'json' => [
    'appid'      => 'wxd678efh567hg6787',
    'service_id' => '500001',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/payscore/serviceorder/{out_order_no}/pay']->post([
  'out_order_no' => '',
  'json' => [
    'appid'      => 'wxd678efh567hg6787',
    'service_id' => '500001',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| appid {data-required} | string | 公众账号ID
| mchid | string | 商户号
| out_order_no {data-required} | string | 商户服务订单号
| service_id {data-required} | string | 服务ID
| order_id {data-required} | string | 微信支付服务订单号

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/merchant/4013394596)
