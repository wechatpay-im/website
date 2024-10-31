---
title: 添加分账接收方
description: 服务商发起添加分账接收方请求，建立分账接收方列表。后续可通过发起分账请求，将分账方商户结算后的资金，分到该分账接收方
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| json | object | 声明请求的`JSON`数据结构
| sub_mchid {data-indent=1} | string | 子商户号
| appid {data-indent=1} | string | 应用ID
| sub_appid {data-indent=1} | string | 子商户应用ID
| type {data-indent=1} | string | 分账接收方类型
| account {data-indent=1} | string | 分账接收方帐号
| name {data-indent=1} | string | 分账个人接收方姓名
| relation_type {data-indent=1} | string | 与分账方的关系类型
| custom_relation {data-indent=1} | string | 自定义的分账关系
| headers | object | 声明请求的头参数
| Wechatpay-Serial {data-indent=1} | string | 平台公钥ID/平台公钥证书序列号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->profitsharing->receivers->add->postAsync([
  'json' => [
    'sub_mchid' => '1900000109',
    'appid' => 'wx8888888888888888',
    'sub_appid' => 'wx8888888888888889',
    'type' => 'MERCHANT_ID',
    'account' => '86693852',
    'name' => 'hu89ohu89ohu89o',
    'relation_type' => 'SERVICE_PROVIDER',
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
    'sub_mchid' => '1900000109',
    'appid' => 'wx8888888888888888',
    'sub_appid' => 'wx8888888888888889',
    'type' => 'MERCHANT_ID',
    'account' => '86693852',
    'name' => 'hu89ohu89ohu89o',
    'relation_type' => 'SERVICE_PROVIDER',
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
    'sub_mchid' => '1900000109',
    'appid' => 'wx8888888888888888',
    'sub_appid' => 'wx8888888888888889',
    'type' => 'MERCHANT_ID',
    'account' => '86693852',
    'name' => 'hu89ohu89ohu89o',
    'relation_type' => 'SERVICE_PROVIDER',
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
    'sub_mchid' => '1900000109',
    'appid' => 'wx8888888888888888',
    'sub_appid' => 'wx8888888888888889',
    'type' => 'MERCHANT_ID',
    'account' => '86693852',
    'name' => 'hu89ohu89ohu89o',
    'relation_type' => 'SERVICE_PROVIDER',
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
    'sub_mchid' => '1900000109',
    'appid' => 'wx8888888888888888',
    'sub_appid' => 'wx8888888888888889',
    'type' => 'MERCHANT_ID',
    'account' => '86693852',
    'name' => 'hu89ohu89ohu89o',
    'relation_type' => 'SERVICE_PROVIDER',
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
    'sub_mchid' => '1900000109',
    'appid' => 'wx8888888888888888',
    'sub_appid' => 'wx8888888888888889',
    'type' => 'MERCHANT_ID',
    'account' => '86693852',
    'name' => 'hu89ohu89ohu89o',
    'relation_type' => 'SERVICE_PROVIDER',
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
| type | string | 分账接收方类型
| account | string | 分账接收方账号
| name | string | 分账接收方全称
| relation_type | string | 与分账方的关系类型
| custom_relation | string | 自定义的分账关系

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3_partner/apis/chapter8_1_8.shtml)
