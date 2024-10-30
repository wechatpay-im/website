---
title: 发放消费卡
description: 商户通过调用本接口向用户发放消费卡，用户领到卡的同时会领取到一批代金券，消费卡会自动放入卡包中。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| card_id | string | 消费卡ID
| json | object | 声明请求的`JSON`数据结构
| appid {data-indent=1} | string | 消费卡归属appid
| openid {data-indent=1} | string | 用户openid
| out_request_no {data-indent=1} | string | 商户单据号
| send_time {data-indent=1} | string | 请求发卡时间

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->marketing->busifavor->coupons->_card_id_->send->postAsync([
  'card_id' => '',
  'json' => [
    'appid' => '',
    'openid' => '',
    'out_request_no' => '',
    'send_time' => '',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/marketing/busifavor/coupons/{card_id}/send')->postAsync([
  'card_id' => '',
  'json' => [
    'appid' => '',
    'openid' => '',
    'out_request_no' => '',
    'send_time' => '',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/marketing/busifavor/coupons/{card_id}/send']->postAsync([
  'card_id' => '',
  'json' => [
    'appid' => '',
    'openid' => '',
    'out_request_no' => '',
    'send_time' => '',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->marketing->busifavor->coupons->_card_id_->send->post([
  'card_id' => '',
  'json' => [
    'appid' => '',
    'openid' => '',
    'out_request_no' => '',
    'send_time' => '',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/marketing/busifavor/coupons/{card_id}/send')->post([
  'card_id' => '',
  'json' => [
    'appid' => '',
    'openid' => '',
    'out_request_no' => '',
    'send_time' => '',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/marketing/busifavor/coupons/{card_id}/send']->post([
  'card_id' => '',
  'json' => [
    'appid' => '',
    'openid' => '',
    'out_request_no' => '',
    'send_time' => '',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| card_code | string | 消费卡code

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/marketing/coupons/chapter3_1.shtml)
