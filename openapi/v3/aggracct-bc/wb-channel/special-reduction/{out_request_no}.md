---
title: 查询特殊减额结果
description: 接口限频：单特殊减额目标商户号100qps
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| out_request_no {data-required} | string | 特殊减额单号
| query {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的查询参数
| mchid {data-required data-indent=1} | string | 微信支付商户号
| bal_account_no {data-required data-indent=1} | string {data-tooltip=微信支付公钥/平台证书加密后的BASE64字符串 data-encrypted=by-rsa-pubkey} | 额度台账号
| headers {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的头参数
| Wechatpay-Serial {data-required data-indent=1} | string | 微信支付公钥ID/平台证书序列号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->aggracctBc->wbChannel->specialReduction->_out_request_no_->getAsync([
  'out_request_no' => 'htozr8denqegbt6tk6u10iymo7yww5pn',
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
$instance->chain('v3/aggracct-bc/wb-channel/special-reduction/{out_request_no}')->getAsync([
  'out_request_no' => 'htozr8denqegbt6tk6u10iymo7yww5pn',
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
$instance['v3/aggracct-bc/wb-channel/special-reduction/{out_request_no}']->getAsync([
  'out_request_no' => 'htozr8denqegbt6tk6u10iymo7yww5pn',
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
$response = $instance->v3->aggracctBc->wbChannel->specialReduction->_out_request_no_->get([
  'out_request_no' => 'htozr8denqegbt6tk6u10iymo7yww5pn',
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
$response = $instance->chain('v3/aggracct-bc/wb-channel/special-reduction/{out_request_no}')->get([
  'out_request_no' => 'htozr8denqegbt6tk6u10iymo7yww5pn',
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
$response = $instance['v3/aggracct-bc/wb-channel/special-reduction/{out_request_no}']->get([
  'out_request_no' => 'htozr8denqegbt6tk6u10iymo7yww5pn',
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
| mchid | string | 微信支付商户号
| bal_account_no | string {data-tooltip=商户API证书对应的公钥加密后的BASE64字符串 data-encrypted=by-rsa-pubkey} | 额度台账号
| out_request_no | string | 特殊减额单号
| reduction_type | string | 特殊减额类型<br/>`FINANCIAL_PENALTY` \| `JUDICIAL_DEDUCTION` 枚举值之一
| amount | integer | 减额金额
| state | string | 处理结果<br/>`PROCESSING` \| `SUCCESS` \| `FAILED` 枚举值之一
| reason | string | 特殊减额原因
| quota_change_no | string | 微信支付额度变更单号
| success_time | string | 成功时间
| fail_time | string | 失败时间
| fail_reason | string | 失败原因<br/>`BALANCE_NOT_ENOUGH` \| `RECEIPT_NOT_EXIST_CLOSED` \| `TIME_OUT_CLOSED` 枚举值之一

{.im-table #response}
