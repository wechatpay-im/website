---
title: 核销用户券
description: 在用户满足优惠门槛后，商户可通过该接口核销用户微信卡包中具体某一张商家券。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| coupon_code {data-required data-indent=1} | string | 券code
| stock_id {data-indent=1} | string | 批次号
| appid {data-required data-indent=1} | string | 公众账号ID
| use_time {data-required data-indent=1} | string | 请求核销时间
| use_request_no {data-required data-indent=1} | string | 核销请求单据号
| openid {data-indent=1} | string | 用户标识

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->marketing->busifavor->coupons->use->postAsync([
  'json' => [
    'coupon_code' => 'sxxe34343434',
    'stock_id' => '100088',
    'appid' => 'wx1234567889999',
    'use_time' => '2015-05-20T13:29:35+08:00',
    'use_request_no' => '1002600620019090123143254435',
    'openid' => 'xsd3434454567676',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/marketing/busifavor/coupons/use')->postAsync([
  'json' => [
    'coupon_code' => 'sxxe34343434',
    'stock_id' => '100088',
    'appid' => 'wx1234567889999',
    'use_time' => '2015-05-20T13:29:35+08:00',
    'use_request_no' => '1002600620019090123143254435',
    'openid' => 'xsd3434454567676',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/marketing/busifavor/coupons/use']->postAsync([
  'json' => [
    'coupon_code' => 'sxxe34343434',
    'stock_id' => '100088',
    'appid' => 'wx1234567889999',
    'use_time' => '2015-05-20T13:29:35+08:00',
    'use_request_no' => '1002600620019090123143254435',
    'openid' => 'xsd3434454567676',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->marketing->busifavor->coupons->use->post([
  'json' => [
    'coupon_code' => 'sxxe34343434',
    'stock_id' => '100088',
    'appid' => 'wx1234567889999',
    'use_time' => '2015-05-20T13:29:35+08:00',
    'use_request_no' => '1002600620019090123143254435',
    'openid' => 'xsd3434454567676',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/marketing/busifavor/coupons/use')->post([
  'json' => [
    'coupon_code' => 'sxxe34343434',
    'stock_id' => '100088',
    'appid' => 'wx1234567889999',
    'use_time' => '2015-05-20T13:29:35+08:00',
    'use_request_no' => '1002600620019090123143254435',
    'openid' => 'xsd3434454567676',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/marketing/busifavor/coupons/use']->post([
  'json' => [
    'coupon_code' => 'sxxe34343434',
    'stock_id' => '100088',
    'appid' => 'wx1234567889999',
    'use_time' => '2015-05-20T13:29:35+08:00',
    'use_request_no' => '1002600620019090123143254435',
    'openid' => 'xsd3434454567676',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| stock_id {data-required}| string | 批次号
| openid {data-required}| string | 用户标识
| wechatpay_use_time {data-required}| string | 系统核销券成功的时间

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/apis/chapter9_2_3.shtml)
