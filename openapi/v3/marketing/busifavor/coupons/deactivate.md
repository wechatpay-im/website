---
title: 使券失效
description: 商户可以通过该接口将可用券进行失效处理，券失效后无法再被核销
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| coupon_code {data-required data-indent=1} | string | 券code
| stock_id {data-required data-indent=1} | string | 批次号
| deactivate_request_no {data-required data-indent=1} | string | 失效请求单据号
| deactivate_reason {data-indent=1} | string | 失效原因

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->marketing->busifavor->coupons->deactivate->postAsync([
  'json' => [
    'coupon_code'           => 'sxxe34343434',
    'stock_id'              => '1234567891',
    'deactivate_request_no' => '1002600620019090123143254436',
    'deactivate_reason'     => '此券使用时间设置错误',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/marketing/busifavor/coupons/deactivate')->postAsync([
  'json' => [
    'coupon_code'           => 'sxxe34343434',
    'stock_id'              => '1234567891',
    'deactivate_request_no' => '1002600620019090123143254436',
    'deactivate_reason'     => '此券使用时间设置错误',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/marketing/busifavor/coupons/deactivate']->postAsync([
  'json' => [
    'coupon_code'           => 'sxxe34343434',
    'stock_id'              => '1234567891',
    'deactivate_request_no' => '1002600620019090123143254436',
    'deactivate_reason'     => '此券使用时间设置错误',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->marketing->busifavor->coupons->deactivate->post([
  'json' => [
    'coupon_code'           => 'sxxe34343434',
    'stock_id'              => '1234567891',
    'deactivate_request_no' => '1002600620019090123143254436',
    'deactivate_reason'     => '此券使用时间设置错误',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/marketing/busifavor/coupons/deactivate')->post([
  'json' => [
    'coupon_code'           => 'sxxe34343434',
    'stock_id'              => '1234567891',
    'deactivate_request_no' => '1002600620019090123143254436',
    'deactivate_reason'     => '此券使用时间设置错误',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/marketing/busifavor/coupons/deactivate']->post([
  'json' => [
    'coupon_code'           => 'sxxe34343434',
    'stock_id'              => '1234567891',
    'deactivate_request_no' => '1002600620019090123143254436',
    'deactivate_reason'     => '此券使用时间设置错误',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| wechatpay_deactivate_time {data-required} | string | 券成功失效的时间

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/merchant/4012465890) [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4012465924)
