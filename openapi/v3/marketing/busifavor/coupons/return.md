---
title: 申请退券
description: 商户可以通过该接口为已核销的券申请退券
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| json | object | 声明请求的`JSON`数据结构
| coupon_code {data-indent=1} | string | 券code
| stock_id {data-indent=1} | string | 批次号
| return_request_no {data-indent=1} | string | 退券请求单据号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->marketing->busifavor->coupons->return->postAsync([
  'json' => [
    'coupon_code' => 'sxxe34343434',
    'stock_id' => '1234567891',
    'return_request_no' => '1002600620019090123143254436',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/marketing/busifavor/coupons/return')->postAsync([
  'json' => [
    'coupon_code' => 'sxxe34343434',
    'stock_id' => '1234567891',
    'return_request_no' => '1002600620019090123143254436',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/marketing/busifavor/coupons/return']->postAsync([
  'json' => [
    'coupon_code' => 'sxxe34343434',
    'stock_id' => '1234567891',
    'return_request_no' => '1002600620019090123143254436',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->marketing->busifavor->coupons->return->post([
  'json' => [
    'coupon_code' => 'sxxe34343434',
    'stock_id' => '1234567891',
    'return_request_no' => '1002600620019090123143254436',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/marketing/busifavor/coupons/return')->post([
  'json' => [
    'coupon_code' => 'sxxe34343434',
    'stock_id' => '1234567891',
    'return_request_no' => '1002600620019090123143254436',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/marketing/busifavor/coupons/return']->post([
  'json' => [
    'coupon_code' => 'sxxe34343434',
    'stock_id' => '1234567891',
    'return_request_no' => '1002600620019090123143254436',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| wechatpay_return_time | string | 微信退券成功的时间

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/apis/chapter9_2_13.shtml)
