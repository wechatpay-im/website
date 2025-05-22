---
title: 微信分付-支付方式前置服务
description: 从业机构查询微信分付曝光建议
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| acquiring_bank_id {data-required data-indent=1} | string | 从业机构号
| acquiring_bank_appid {data-indent=1} | string | 从业机构应用AppID
| merchant_id {data-required data-indent=1} | string | 特约商户号
| merchant_appid {data-indent=1} | string | 特约商户应用AppID
| channel_id {data-required data-indent=1} | string | 渠道商户号
| payer {data-required data-indent=1} | object {data-tooltip="对应PHP的array"} | 支付者
| acquiring_bank_openid {data-indent=2} | string | 用户标识
| phone_number_hash {data-indent=2} | string | 用户手机号的哈希值
| out_trade_no {data-required data-indent=1} | string | 商户订单号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->pay->acquiringBank->transactions->exposure->postAsync([
  'json' => [
    'acquiring_bank_id'    => '1356485',
    'acquiring_bank_appid' => 'wx8888888888888888',
    'merchant_id'          => '1900000109',
    'merchant_appid'       => 'wxd678efh567hg6999',
    'channel_id'           => '20001111',
    'payer'                => [
      'acquiring_bank_openid' => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
      'phone_number_hash'     => 'ABDEF3445546456B',
    ],
    'out_trade_no'         => '1217752501201407033233368018',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/pay/acquiring-bank/transactions/exposure')->postAsync([
  'json' => [
    'acquiring_bank_id'    => '1356485',
    'acquiring_bank_appid' => 'wx8888888888888888',
    'merchant_id'          => '1900000109',
    'merchant_appid'       => 'wxd678efh567hg6999',
    'channel_id'           => '20001111',
    'payer'                => [
      'acquiring_bank_openid' => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
      'phone_number_hash'     => 'ABDEF3445546456B',
    ],
    'out_trade_no'         => '1217752501201407033233368018',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/pay/acquiring-bank/transactions/exposure']->postAsync([
  'json' => [
    'acquiring_bank_id'    => '1356485',
    'acquiring_bank_appid' => 'wx8888888888888888',
    'merchant_id'          => '1900000109',
    'merchant_appid'       => 'wxd678efh567hg6999',
    'channel_id'           => '20001111',
    'payer'                => [
      'acquiring_bank_openid' => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
      'phone_number_hash'     => 'ABDEF3445546456B',
    ],
    'out_trade_no'         => '1217752501201407033233368018',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->pay->acquiringBank->transactions->exposure->post([
  'json' => [
    'acquiring_bank_id'    => '1356485',
    'acquiring_bank_appid' => 'wx8888888888888888',
    'merchant_id'          => '1900000109',
    'merchant_appid'       => 'wxd678efh567hg6999',
    'channel_id'           => '20001111',
    'payer'                => [
      'acquiring_bank_openid' => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
      'phone_number_hash'     => 'ABDEF3445546456B',
    ],
    'out_trade_no'         => '1217752501201407033233368018',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/pay/acquiring-bank/transactions/exposure')->post([
  'json' => [
    'acquiring_bank_id'    => '1356485',
    'acquiring_bank_appid' => 'wx8888888888888888',
    'merchant_id'          => '1900000109',
    'merchant_appid'       => 'wxd678efh567hg6999',
    'channel_id'           => '20001111',
    'payer'                => [
      'acquiring_bank_openid' => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
      'phone_number_hash'     => 'ABDEF3445546456B',
    ],
    'out_trade_no'         => '1217752501201407033233368018',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/pay/acquiring-bank/transactions/exposure']->post([
  'json' => [
    'acquiring_bank_id'    => '1356485',
    'acquiring_bank_appid' => 'wx8888888888888888',
    'merchant_id'          => '1900000109',
    'merchant_appid'       => 'wxd678efh567hg6999',
    'channel_id'           => '20001111',
    'payer'                => [
      'acquiring_bank_openid' => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
      'phone_number_hash'     => 'ABDEF3445546456B',
    ],
    'out_trade_no'         => '1217752501201407033233368018',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| fqf_exposure {data-required} | boolean | 是否建议曝光微信分付
| market_exposure_token | string | 曝光凭证

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4014326541)
