---
title: 查询渠道结算银行账户更名申请
description: 查询渠道结算银行账户更名申请。
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

::: danger :exclamation: {.im-need-tbt}

提示：本功能目前处于灰度测试阶段、暂未开放使用，待全量开放后将通过微信支付官方文档门户公告同步。

:::

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| application_id {data-required} | string | 微信支付更名受理返回的申请单号
| query {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的查询参数
| mchid {data-required data-indent=1} | string | 目标商户号
| bal_account_no {data-required data-indent=1} | string {data-tooltip=微信支付公钥/平台证书加密后的BASE64字符串 data-encrypted=by-rsa-pubkey} | 台账ID
| headers {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的头参数
| Wechatpay-Serial {data-required data-indent=1} | string | 微信支付公钥ID/平台证书序列号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->aggracctBc->wbChannel->bankChannelAccount->rename->_application_id_->getAsync([
  'application_id' => '11117742499090086455469010028373',
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
$instance->chain('v3/aggracct-bc/wb-channel/bank-channel-account/rename/{application_id}')->getAsync([
  'application_id' => '11117742499090086455469010028373',
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
$instance['v3/aggracct-bc/wb-channel/bank-channel-account/rename/{application_id}']->getAsync([
  'application_id' => '11117742499090086455469010028373',
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
$response = $instance->v3->aggracctBc->wbChannel->bankChannelAccount->rename->_application_id_->get([
  'application_id' => '11117742499090086455469010028373',
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
$response = $instance->chain('v3/aggracct-bc/wb-channel/bank-channel-account/rename/{application_id}')->get([
  'application_id' => '11117742499090086455469010028373',
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
$response = $instance['v3/aggracct-bc/wb-channel/bank-channel-account/rename/{application_id}']->get([
  'application_id' => '11117742499090086455469010028373',
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
| change_scene {data-required} | string | 变更类型<br/>`SUBJECT_INFO_RENAME` 枚举值
| application_id {data-required} | string | 微信支付更名受理返回的申请单号
| out_request_no {data-required} | string | 渠道结算银行账户更名外部系统单号
| mchid {data-required} | string | 目标商户号
| bal_account_no {data-required} | string {data-tooltip=商户API证书对应的公钥加密后的BASE64字符串 data-encrypted=by-rsa-pubkey} | 台账ID
| new_account_name {data-required} | string {data-tooltip=商户API证书对应的公钥加密后的BASE64字符串 data-encrypted=by-rsa-pubkey} | 目标账户名
| application_state {data-required} | string | 申请单状态<br/>`PROCESSING` \| `SUCCESS` \| `FAIL` 枚举值之一
| finish_time | string | 完成时间
| fail_code | string | 失败错误码
| fail_msg | string | 失败原因

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/merchant/4018968051)
