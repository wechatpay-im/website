---
title: 添加分账接收方
description: 服务商发起添加分账接收方请求，建立分账接收方列表。后续可通过发起分账请求，将分账方商户结算后的资金，分到该分账接收方
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| sub_mchid {data-indent=1} | string | 子商户号
| appid {data-required data-indent=1} | string | 应用ID
| sub_appid {data-indent=1} | string | 子商户应用ID
| type {data-required data-indent=1} | string | 分账接收方类型
| account {data-required data-indent=1} | string | 分账接收方帐号
| name {data-indent=1} | string {data-tooltip=微信支付公钥/平台证书加密后的BASE64字符串 data-encrypted=by-rsa-pubkey} | 分账个人接收方姓名
| relation_type {data-required data-indent=1} | string | 与分账方的关系类型<br/>`SERVICE_PROVIDER` \| `STORE` \| `STAFF` \| `STORE_OWNER` \| `PARTNER` \| `HEADQUARTER` \| `BRAND` \| `DISTRIBUTOR` \| `USER` \| `SUPPLIER` \| `CUSTOM` 枚举值之一
| custom_relation {data-indent=1} | string | 自定义的分账关系
| headers {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的头参数
| Wechatpay-Serial {data-required data-indent=1} | string | 微信支付公钥ID/平台证书序列号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->profitsharing->receivers->add->postAsync([
  'json' => [
    'sub_mchid'       => '1900000109',
    'appid'           => 'wx8888888888888888',
    'sub_appid'       => 'wx8888888888888889',
    'type'            => 'MERCHANT_ID',
    'account'         => '86693852',
    'name'            => 'hu89ohu89ohu89o',
    'relation_type'   => 'SERVICE_PROVIDER',
    'custom_relation' => '代理商',
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
$instance->chain('v3/profitsharing/receivers/add')->postAsync([
  'json' => [
    'sub_mchid'       => '1900000109',
    'appid'           => 'wx8888888888888888',
    'sub_appid'       => 'wx8888888888888889',
    'type'            => 'MERCHANT_ID',
    'account'         => '86693852',
    'name'            => 'hu89ohu89ohu89o',
    'relation_type'   => 'SERVICE_PROVIDER',
    'custom_relation' => '代理商',
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
$instance['v3/profitsharing/receivers/add']->postAsync([
  'json' => [
    'sub_mchid'       => '1900000109',
    'appid'           => 'wx8888888888888888',
    'sub_appid'       => 'wx8888888888888889',
    'type'            => 'MERCHANT_ID',
    'account'         => '86693852',
    'name'            => 'hu89ohu89ohu89o',
    'relation_type'   => 'SERVICE_PROVIDER',
    'custom_relation' => '代理商',
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
$response = $instance->v3->profitsharing->receivers->add->post([
  'json' => [
    'sub_mchid'       => '1900000109',
    'appid'           => 'wx8888888888888888',
    'sub_appid'       => 'wx8888888888888889',
    'type'            => 'MERCHANT_ID',
    'account'         => '86693852',
    'name'            => 'hu89ohu89ohu89o',
    'relation_type'   => 'SERVICE_PROVIDER',
    'custom_relation' => '代理商',
  ],
  'headers' => [
    'Wechatpay-Serial' => 'PUB_KEY_ID_0114232134912410000000000000',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/profitsharing/receivers/add')->post([
  'json' => [
    'sub_mchid'       => '1900000109',
    'appid'           => 'wx8888888888888888',
    'sub_appid'       => 'wx8888888888888889',
    'type'            => 'MERCHANT_ID',
    'account'         => '86693852',
    'name'            => 'hu89ohu89ohu89o',
    'relation_type'   => 'SERVICE_PROVIDER',
    'custom_relation' => '代理商',
  ],
  'headers' => [
    'Wechatpay-Serial' => 'PUB_KEY_ID_0114232134912410000000000000',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/profitsharing/receivers/add']->post([
  'json' => [
    'sub_mchid'       => '1900000109',
    'appid'           => 'wx8888888888888888',
    'sub_appid'       => 'wx8888888888888889',
    'type'            => 'MERCHANT_ID',
    'account'         => '86693852',
    'name'            => 'hu89ohu89ohu89o',
    'relation_type'   => 'SERVICE_PROVIDER',
    'custom_relation' => '代理商',
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
| sub_mchid | string | 子商户号
| type {data-required} | string | 分账接收方类型
| account {data-required} | string | 分账接收方账号
| name | string {data-tooltip=商户API证书对应的公钥加密后的BASE64字符串 data-encrypted=by-rsa-pubkey} | 分账接收方全称
| relation_type {data-required} | string | 与分账方的关系类型
| custom_relation | string | 自定义的分账关系

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3_partner/apis/chapter8_1_8.shtml)
