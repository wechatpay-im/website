---
title: 查询指定主体子商户列表
description: 接口适用场景：收付通（平台）服务商可通过本接口，查询其名下指定主体的子商户列表。1、通过organization_type与cert_number定位主体。2、仅返回属于指定主体、与当前服务商存在有效父子绑定关系且未注销的子商户。3、支持limit/offset分页查询。
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| query {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的查询参数
| organization_type {data-required data-indent=1} | string | 主体类型<br/>`SUBJECT_TYPE_ENTERPRISE` \| `SUBJECT_TYPE_INSTITUTIONS_CLONED` \| `SUBJECT_TYPE_INDIVIDUAL` \| `SUBJECT_TYPE_OTHERS` \| `SUBJECT_TYPE_GOVERNMENT` \| `SUBJECT_TYPE_MICRO` 枚举值之一
| cert_number {data-required data-indent=1} | string | 证件号码
| limit {data-indent=1} | integer | 分页大小
| offset {data-indent=1} | integer | 分页偏移
| headers {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的头参数
| Wechatpay-Serial {data-required data-indent=1} | string | 微信支付公钥ID/平台证书序列号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->ecommerce->subjectSubMerchants->getAsync([
  'query' => [
    'organization_type' => 'SUBJECT_TYPE_ENTERPRISE',
    'cert_number'       => 'Iuas%2BxWj7ma0t%',
    'limit'             => 20,
    'offset'            => 0,
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
$instance->chain('v3/ecommerce/subject-sub-merchants')->getAsync([
  'query' => [
    'organization_type' => 'SUBJECT_TYPE_ENTERPRISE',
    'cert_number'       => 'Iuas%2BxWj7ma0t%',
    'limit'             => 20,
    'offset'            => 0,
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
$instance['v3/ecommerce/subject-sub-merchants']->getAsync([
  'query' => [
    'organization_type' => 'SUBJECT_TYPE_ENTERPRISE',
    'cert_number'       => 'Iuas%2BxWj7ma0t%',
    'limit'             => 20,
    'offset'            => 0,
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
$response = $instance->v3->ecommerce->subjectSubMerchants->get([
  'query' => [
    'organization_type' => 'SUBJECT_TYPE_ENTERPRISE',
    'cert_number'       => 'Iuas%2BxWj7ma0t%',
    'limit'             => 20,
    'offset'            => 0,
  ],
  'headers' => [
    'Wechatpay-Serial' => 'PUB_KEY_ID_0114232134912410000000000000',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/ecommerce/subject-sub-merchants')->get([
  'query' => [
    'organization_type' => 'SUBJECT_TYPE_ENTERPRISE',
    'cert_number'       => 'Iuas%2BxWj7ma0t%',
    'limit'             => 20,
    'offset'            => 0,
  ],
  'headers' => [
    'Wechatpay-Serial' => 'PUB_KEY_ID_0114232134912410000000000000',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/ecommerce/subject-sub-merchants']->get([
  'query' => [
    'organization_type' => 'SUBJECT_TYPE_ENTERPRISE',
    'cert_number'       => 'Iuas%2BxWj7ma0t%',
    'limit'             => 20,
    'offset'            => 0,
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
| data {data-required} | object[] {data-tooltip="对应PHP的array"} | 子商户列表
| sub_mchid {data-required data-indent=1} | string | 子商户号
| merchant_shortname {data-required data-indent=1} | string | 商户简称
| sign_time {data-required data-indent=1} | string | 签约时间
| offset {data-required} | integer | 分页偏移
| limit {data-required} | integer | 分页大小
| total_count {data-required} | integer | 总条数

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4033742105)
