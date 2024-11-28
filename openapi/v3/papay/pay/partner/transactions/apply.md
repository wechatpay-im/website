---
title: 受理扣款
description: 商户调用「预约扣费」接口预约成功后，可调用本接口发起委托代扣扣款。系统受理扣款请求后，异步进行扣款，并通过商户指定的回调地址通知扣费结果。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| sp_appid {data-required data-indent=1} | string | 应用ID
| sub_mchid {data-required data-indent=1} | string | 子商户号商户号
| sub_appid {data-indent=1} | string | 子商户的AppID
| out_trade_no {data-required data-indent=1} | string | 商户订单号
| description {data-required data-indent=1} | string | 商品描述
| transaction_notify_url {data-required data-indent=1} | string | 通知地址
| contract_id {data-required data-indent=1} | string | 委托代扣协议ID
| amount {data-required data-indent=1} | object {data-tooltip="对应PHP的array"} | 扣费金额信息
| total {data-required data-indent=2} | number | 金额
| currency {data-indent=2} | string | 货币类型
| goods_tag {data-indent=1} | string | 订单优惠标记
| attach {data-indent=1} | string | 附加数据

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->papay->pay->partner->transactions->apply->postAsync([
  'json' => [
    'sp_appid'               => 'wxd678efh567hg6787',
    'sub_mchid'              => '1900000109',
    'sub_appid'              => 'wxd678efh567hg6787',
    'out_trade_no'           => '1217752501201407033233368018',
    'description'            => 'Image形象店-深圳腾大-QQ公仔',
    'transaction_notify_url' => 'https://www.qq.com/',
    'contract_id'            => '123124412412423431',
    'amount'                 => [
      'total'    => 1,
      'currency' => 'CNY',
    ],
    'goods_tag'              => 'DISCOUNTS',
    'attach'                 => '自定义数据',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/papay/pay/partner/transactions/apply')->postAsync([
  'json' => [
    'sp_appid'               => 'wxd678efh567hg6787',
    'sub_mchid'              => '1900000109',
    'sub_appid'              => 'wxd678efh567hg6787',
    'out_trade_no'           => '1217752501201407033233368018',
    'description'            => 'Image形象店-深圳腾大-QQ公仔',
    'transaction_notify_url' => 'https://www.qq.com/',
    'contract_id'            => '123124412412423431',
    'amount'                 => [
      'total'    => 1,
      'currency' => 'CNY',
    ],
    'goods_tag'              => 'DISCOUNTS',
    'attach'                 => '自定义数据',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/papay/pay/partner/transactions/apply']->postAsync([
  'json' => [
    'sp_appid'               => 'wxd678efh567hg6787',
    'sub_mchid'              => '1900000109',
    'sub_appid'              => 'wxd678efh567hg6787',
    'out_trade_no'           => '1217752501201407033233368018',
    'description'            => 'Image形象店-深圳腾大-QQ公仔',
    'transaction_notify_url' => 'https://www.qq.com/',
    'contract_id'            => '123124412412423431',
    'amount'                 => [
      'total'    => 1,
      'currency' => 'CNY',
    ],
    'goods_tag'              => 'DISCOUNTS',
    'attach'                 => '自定义数据',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->papay->pay->partner->transactions->apply->post([
  'json' => [
    'sp_appid'               => 'wxd678efh567hg6787',
    'sub_mchid'              => '1900000109',
    'sub_appid'              => 'wxd678efh567hg6787',
    'out_trade_no'           => '1217752501201407033233368018',
    'description'            => 'Image形象店-深圳腾大-QQ公仔',
    'transaction_notify_url' => 'https://www.qq.com/',
    'contract_id'            => '123124412412423431',
    'amount'                 => [
      'total'    => 1,
      'currency' => 'CNY',
    ],
    'goods_tag'              => 'DISCOUNTS',
    'attach'                 => '自定义数据',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/papay/pay/partner/transactions/apply')->post([
  'json' => [
    'sp_appid'               => 'wxd678efh567hg6787',
    'sub_mchid'              => '1900000109',
    'sub_appid'              => 'wxd678efh567hg6787',
    'out_trade_no'           => '1217752501201407033233368018',
    'description'            => 'Image形象店-深圳腾大-QQ公仔',
    'transaction_notify_url' => 'https://www.qq.com/',
    'contract_id'            => '123124412412423431',
    'amount'                 => [
      'total'    => 1,
      'currency' => 'CNY',
    ],
    'goods_tag'              => 'DISCOUNTS',
    'attach'                 => '自定义数据',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/papay/pay/partner/transactions/apply']->post([
  'json' => [
    'sp_appid'               => 'wxd678efh567hg6787',
    'sub_mchid'              => '1900000109',
    'sub_appid'              => 'wxd678efh567hg6787',
    'out_trade_no'           => '1217752501201407033233368018',
    'description'            => 'Image形象店-深圳腾大-QQ公仔',
    'transaction_notify_url' => 'https://www.qq.com/',
    'contract_id'            => '123124412412423431',
    'amount'                 => [
      'total'    => 1,
      'currency' => 'CNY',
    ],
    'goods_tag'              => 'DISCOUNTS',
    'attach'                 => '自定义数据',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| out_trade_no {data-required} | string | 商户订单号
| amount {data-required} | object {data-tooltip="对应PHP的array"} | 扣费金额信息
| total {data-required data-indent=1} | number | 金额
| currency {data-indent=1} | string | 货币类型

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/docs/partner/apis/entrusted-payment/partner/partner-create-transaction.html)
