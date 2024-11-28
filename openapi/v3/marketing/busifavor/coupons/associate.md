---
title: 关联订单信息
description: 将有效态（未核销）的商家券与订单信息关联，用于后续参与摇奖&返佣激励等操作的统计。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| stock_id {data-required data-indent=1} | string | 批次号
| coupon_code {data-required data-indent=1} | string | 券code
| out_trade_no {data-required data-indent=1} | string | 关联的商户订单号
| out_request_no {data-required data-indent=1} | string | 商户请求单号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->marketing->busifavor->coupons->associate->postAsync([
  'json' => [
    'stock_id'       => '',
    'coupon_code'    => '',
    'out_trade_no'   => '',
    'out_request_no' => '',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/marketing/busifavor/coupons/associate')->postAsync([
  'json' => [
    'stock_id'       => '',
    'coupon_code'    => '',
    'out_trade_no'   => '',
    'out_request_no' => '',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/marketing/busifavor/coupons/associate']->postAsync([
  'json' => [
    'stock_id'       => '',
    'coupon_code'    => '',
    'out_trade_no'   => '',
    'out_request_no' => '',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->marketing->busifavor->coupons->associate->post([
  'json' => [
    'stock_id'       => '',
    'coupon_code'    => '',
    'out_trade_no'   => '',
    'out_request_no' => '',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/marketing/busifavor/coupons/associate')->post([
  'json' => [
    'stock_id'       => '',
    'coupon_code'    => '',
    'out_trade_no'   => '',
    'out_request_no' => '',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/marketing/busifavor/coupons/associate']->post([
  'json' => [
    'stock_id'       => '',
    'coupon_code'    => '',
    'out_trade_no'   => '',
    'out_request_no' => '',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| wechatpay_associate_time {data-required} | string | 关联成功时间

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/apis/chapter9_2_9.shtml)
