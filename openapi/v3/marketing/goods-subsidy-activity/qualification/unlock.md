---
title: 解锁品牌加价购活动资格
description: 指定服务商可通过该接口报名加价购活动、查询某个区域内的加价购活动列表、锁定加价活动购资格以及解锁加价购活动资格。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| order_information {data-required data-indent=1} | object {data-tooltip="对应PHP的array"} | 订单信息
| payer_openid {data-indent=2} | string | 支付订单的微信用户OpenID
| out_trade_no {data-indent=2} | string | 商户订单号
| total_fee {data-indent=2} | number | 订单总金额
| store_id {data-indent=2} | string | 门店ID
| store_merchant_id {data-indent=2} | string | 门店商户号
| qualification_ids {data-required data-indent=1} | string[] | 待锁定的加价购资格ID列表

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->marketing->goodsSubsidyActivity->qualification->unlock->postAsync([
  'json' => [
    'order_information' => [
      'payer_openid' => '',
      'out_trade_no' => '',
      'total_fee' => 0,
      'store_id' => '',
      'store_merchant_id' => '',
    ],
    'qualification_ids' => ['string'],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/marketing/goods-subsidy-activity/qualification/unlock')->postAsync([
  'json' => [
    'order_information' => [
      'payer_openid' => '',
      'out_trade_no' => '',
      'total_fee' => 0,
      'store_id' => '',
      'store_merchant_id' => '',
    ],
    'qualification_ids' => ['string'],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/marketing/goods-subsidy-activity/qualification/unlock']->postAsync([
  'json' => [
    'order_information' => [
      'payer_openid' => '',
      'out_trade_no' => '',
      'total_fee' => 0,
      'store_id' => '',
      'store_merchant_id' => '',
    ],
    'qualification_ids' => ['string'],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->marketing->goodsSubsidyActivity->qualification->unlock->post([
  'json' => [
    'order_information' => [
      'payer_openid' => '',
      'out_trade_no' => '',
      'total_fee' => 0,
      'store_id' => '',
      'store_merchant_id' => '',
    ],
    'qualification_ids' => ['string'],
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/marketing/goods-subsidy-activity/qualification/unlock')->post([
  'json' => [
    'order_information' => [
      'payer_openid' => '',
      'out_trade_no' => '',
      'total_fee' => 0,
      'store_id' => '',
      'store_merchant_id' => '',
    ],
    'qualification_ids' => ['string'],
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/marketing/goods-subsidy-activity/qualification/unlock']->post([
  'json' => [
    'order_information' => [
      'payer_openid' => '',
      'out_trade_no' => '',
      'total_fee' => 0,
      'store_id' => '',
      'store_merchant_id' => '',
    ],
    'qualification_ids' => ['string'],
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| return_message | string | 返回结果文案
| failed_qualification_ids | string[] | 锁定失败的资格ID列表
| succeed_qualification_ids | string[] | 锁定成功的资格ID列表

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/docs/merchant/products/retail-store/introduction.html)
