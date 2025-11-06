---
title: 查询渠道额度
description: 接口限频：单查询渠道额度目标商户号100qps
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| query {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的查询参数
| mchid {data-required data-indent=1} | string | 微信支付商户号
| bal_account_no {data-required data-indent=1} | string {data-tooltip=微信支付公钥/平台证书加密后的BASE64字符串 data-encrypted=by-rsa-pubkey} | 额度台账号
| headers {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的头参数
| Wechatpay-Serial {data-required data-indent=1} | string | 微信支付公钥ID/平台证书序列号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->aggracctBc->wbChannel->account->balance->getAsync([
  'query' => [
    'mchid'          => '1900016681',
    'bal_account_no' => '8609cb22e1774a50a930e414cc71eca06121bc',
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
$instance->chain('v3/aggracct-bc/wb-channel/account/balance')->getAsync([
  'query' => [
    'mchid'          => '1900016681',
    'bal_account_no' => '8609cb22e1774a50a930e414cc71eca06121bc',
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
$instance['v3/aggracct-bc/wb-channel/account/balance']->getAsync([
  'query' => [
    'mchid'          => '1900016681',
    'bal_account_no' => '8609cb22e1774a50a930e414cc71eca06121bc',
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
$response = $instance->v3->aggracctBc->wbChannel->account->balance->get([
  'query' => [
    'mchid'          => '1900016681',
    'bal_account_no' => '8609cb22e1774a50a930e414cc71eca06121bc',
  ],
  'headers' => [
    'Wechatpay-Serial' => 'PUB_KEY_ID_0114232134912410000000000000',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/aggracct-bc/wb-channel/account/balance')->get([
  'query' => [
    'mchid'          => '1900016681',
    'bal_account_no' => '8609cb22e1774a50a930e414cc71eca06121bc',
  ],
  'headers' => [
    'Wechatpay-Serial' => 'PUB_KEY_ID_0114232134912410000000000000',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/aggracct-bc/wb-channel/account/balance']->get([
  'query' => [
    'mchid'          => '1900016681',
    'bal_account_no' => '8609cb22e1774a50a930e414cc71eca06121bc',
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
| in_transit_reduction_exist | boolean | 是否存在在途减额指令
| balance | integer | 额度台账号额度

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/merchant/4016061186)
