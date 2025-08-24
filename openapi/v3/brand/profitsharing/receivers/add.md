---
title: 添加分账接收方
description: 服务商可通过此接口添加分账接收方，建立分账接收方列表。连锁加盟模式下，服务商添加的分账接收方统一在品牌主商户号维度进行管理。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| brand_mchid {data-required data-indent=1} | string | 品牌主商户号
| appid {data-required data-indent=1} | string | 公众账号ID
| sub_appid {data-indent=1} | string | 子商户公众账号ID
| type {data-required data-indent=1} | string | 分账接收方类型<br/>`MERCHANT_ID` \| `PERSONAL_OPENID` \| `PERSONAL_SUB_OPENID` 枚举值之一
| account {data-required data-indent=1} | string | 分账接收方账号
| name {data-indent=1} | string | 接收方名称
| relation_type {data-required data-indent=1} | string | 与品牌主商户的的关系类型<br/>`SUPPLIER` \| `DISTRIBUTOR` \| `SERVICE_PROVIDER` \| `PLATFORM` \| `STAFF` \| `OTHERS` 枚举值之一

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->brand->profitsharing->receivers->add->postAsync([
  'json' => [
    'brand_mchid'   => '1900000108',
    'appid'         => 'wx8888888888888888',
    'sub_appid'     => 'wx8888888888888889',
    'type'          => 'MERCHANT_ID',
    'account'       => '1900000109',
    'name'          => '张三网络公司',
    'relation_type' => 'SUPPLIER',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/brand/profitsharing/receivers/add')->postAsync([
  'json' => [
    'brand_mchid'   => '1900000108',
    'appid'         => 'wx8888888888888888',
    'sub_appid'     => 'wx8888888888888889',
    'type'          => 'MERCHANT_ID',
    'account'       => '1900000109',
    'name'          => '张三网络公司',
    'relation_type' => 'SUPPLIER',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/brand/profitsharing/receivers/add']->postAsync([
  'json' => [
    'brand_mchid'   => '1900000108',
    'appid'         => 'wx8888888888888888',
    'sub_appid'     => 'wx8888888888888889',
    'type'          => 'MERCHANT_ID',
    'account'       => '1900000109',
    'name'          => '张三网络公司',
    'relation_type' => 'SUPPLIER',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->brand->profitsharing->receivers->add->post([
  'json' => [
    'brand_mchid'   => '1900000108',
    'appid'         => 'wx8888888888888888',
    'sub_appid'     => 'wx8888888888888889',
    'type'          => 'MERCHANT_ID',
    'account'       => '1900000109',
    'name'          => '张三网络公司',
    'relation_type' => 'SUPPLIER',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/brand/profitsharing/receivers/add')->post([
  'json' => [
    'brand_mchid'   => '1900000108',
    'appid'         => 'wx8888888888888888',
    'sub_appid'     => 'wx8888888888888889',
    'type'          => 'MERCHANT_ID',
    'account'       => '1900000109',
    'name'          => '张三网络公司',
    'relation_type' => 'SUPPLIER',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/brand/profitsharing/receivers/add']->post([
  'json' => [
    'brand_mchid'   => '1900000108',
    'appid'         => 'wx8888888888888888',
    'sub_appid'     => 'wx8888888888888889',
    'type'          => 'MERCHANT_ID',
    'account'       => '1900000109',
    'name'          => '张三网络公司',
    'relation_type' => 'SUPPLIER',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| brand_mchid {data-required} | string | 品牌主商户号
| type {data-required} | string | 分账接收方类型<br/>`MERCHANT_ID` \| `PERSONAL_OPENID` \| `PERSONAL_SUB_OPENID` 枚举值之一
| account {data-required} | string | 分账接收方账号

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4012467100)
