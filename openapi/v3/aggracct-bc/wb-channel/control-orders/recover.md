---
title: 解除对微众台账的管控
description: 接口仅受理，解管成功或失败后，可以通知发起方（需发起方提供通知地址）。接口支持重入，重入有效期1年。限频：200/分钟
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| out_request_no {data-required data-indent=1} | string | 微众解管单号
| related_webank_punish_no {data-required data-indent=1} | string | 关联微众管控单号
| related_wxpay_punish_no {data-required data-indent=1} | string | 关联微信支付管控单号
| mchid {data-required data-indent=1} | string | 目标解管商户号
| bal_account_no {data-required data-indent=1} | string {data-tooltip=微信支付公钥/平台证书加密后的BASE64字符串 data-encrypted=by-rsa-pubkey} | 目标解管台账ID
| recover_reason {data-required data-indent=1} | string | 解管原因描述
| headers {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的头参数
| Wechatpay-Serial {data-required data-indent=1} | string | 微信支付公钥ID/平台证书序列号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->aggracctBc->wbChannel->controlOrders->recover->postAsync([
  'json' => [
    'out_request_no'           => 'example_out_request_no',
    'related_webank_punish_no' => 'example_related_webank_punish_no',
    'related_wxpay_punish_no'  => 'example_related_wxpay_punish_no',
    'mchid'                    => 'example_mchid',
    'bal_account_no'           => 'example_bal_account_no',
    'recover_reason'           => 'example_recover_reason',
  ],
  'headers' => [
    'Wechatpay-Serial' => 'PUB_KEY_ID_0114232134912410000000000000',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/aggracct-bc/wb-channel/control-orders/recover')->postAsync([
  'json' => [
    'out_request_no'           => 'example_out_request_no',
    'related_webank_punish_no' => 'example_related_webank_punish_no',
    'related_wxpay_punish_no'  => 'example_related_wxpay_punish_no',
    'mchid'                    => 'example_mchid',
    'bal_account_no'           => 'example_bal_account_no',
    'recover_reason'           => 'example_recover_reason',
  ],
  'headers' => [
    'Wechatpay-Serial' => 'PUB_KEY_ID_0114232134912410000000000000',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/aggracct-bc/wb-channel/control-orders/recover']->postAsync([
  'json' => [
    'out_request_no'           => 'example_out_request_no',
    'related_webank_punish_no' => 'example_related_webank_punish_no',
    'related_wxpay_punish_no'  => 'example_related_wxpay_punish_no',
    'mchid'                    => 'example_mchid',
    'bal_account_no'           => 'example_bal_account_no',
    'recover_reason'           => 'example_recover_reason',
  ],
  'headers' => [
    'Wechatpay-Serial' => 'PUB_KEY_ID_0114232134912410000000000000',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->aggracctBc->wbChannel->controlOrders->recover->post([
  'json' => [
    'out_request_no'           => 'example_out_request_no',
    'related_webank_punish_no' => 'example_related_webank_punish_no',
    'related_wxpay_punish_no'  => 'example_related_wxpay_punish_no',
    'mchid'                    => 'example_mchid',
    'bal_account_no'           => 'example_bal_account_no',
    'recover_reason'           => 'example_recover_reason',
  ],
  'headers' => [
    'Wechatpay-Serial' => 'PUB_KEY_ID_0114232134912410000000000000',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/aggracct-bc/wb-channel/control-orders/recover')->post([
  'json' => [
    'out_request_no'           => 'example_out_request_no',
    'related_webank_punish_no' => 'example_related_webank_punish_no',
    'related_wxpay_punish_no'  => 'example_related_wxpay_punish_no',
    'mchid'                    => 'example_mchid',
    'bal_account_no'           => 'example_bal_account_no',
    'recover_reason'           => 'example_recover_reason',
  ],
  'headers' => [
    'Wechatpay-Serial' => 'PUB_KEY_ID_0114232134912410000000000000',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/aggracct-bc/wb-channel/control-orders/recover']->post([
  'json' => [
    'out_request_no'           => 'example_out_request_no',
    'related_webank_punish_no' => 'example_related_webank_punish_no',
    'related_wxpay_punish_no'  => 'example_related_wxpay_punish_no',
    'mchid'                    => 'example_mchid',
    'bal_account_no'           => 'example_bal_account_no',
    'recover_reason'           => 'example_recover_reason',
  ],
  'headers' => [
    'Wechatpay-Serial' => 'PUB_KEY_ID_0114232134912410000000000000',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| wxpay_recover_no {data-required} | string | 微信支付解管单号
| out_request_no {data-required} | string | 微众解管单号

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/merchant/4016025279)
