---
title: 查询合作关系列表
description: 该接口主要为商户提供合作关系列表的查询能力。
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| query {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的查询参数
| partner {data-indent=1} | string | 合作方信息`JSON`格式字符串
| {colspan=3 .im-table-line}
| type {data-required data-indent=2} | string | 合作方类别<br/>`APPID` \| `MERCHANT` 枚举值之一
| appid {data-indent=2} | string | 合作方APPID
| merchant_id {data-indent=2} | string | 合作方商户ID
| authorized_data {data-indent=1} | string | 被授权数据`JSON`格式字符串
| {colspan=3 .im-table-line}
| business_type {data-indent=2} | string | 授权业务类别<br/>`FAVOR_STOCK` \| `BUSIFAVOR_STOCK` 枚举值之一
| stock_id {data-indent=2} | string | 授权批次ID
| limit {data-indent=1} | integer | 分页大小
| offset {data-indent=1} | integer | 分页页码

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->marketing->partnerships->getAsync([
  'query' => [
    'partner'         => \json_encode([
      'type'        => 'APPID',
      'appid'       => 'wx4e1916a585d1f4e9',
      'merchant_id' => '2480029552',
    ]),
    'authorized_data' => \json_encode([
      'business_type' => 'FAVOR_STOCK',
      'stock_id'      => '2433405',
    ]),
    'limit'           => 50,
    'offset'          => 0,
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/marketing/partnerships')->getAsync([
  'query' => [
    'partner'         => \json_encode([
      'type'        => 'APPID',
      'appid'       => 'wx4e1916a585d1f4e9',
      'merchant_id' => '2480029552',
    ]),
    'authorized_data' => \json_encode([
      'business_type' => 'FAVOR_STOCK',
      'stock_id'      => '2433405',
    ]),
    'limit'           => 50,
    'offset'          => 0,
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/marketing/partnerships']->getAsync([
  'query' => [
    'partner'         => \json_encode([
      'type'        => 'APPID',
      'appid'       => 'wx4e1916a585d1f4e9',
      'merchant_id' => '2480029552',
    ]),
    'authorized_data' => \json_encode([
      'business_type' => 'FAVOR_STOCK',
      'stock_id'      => '2433405',
    ]),
    'limit'           => 50,
    'offset'          => 0,
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->marketing->partnerships->get([
  'query' => [
    'partner'         => \json_encode([
      'type'        => 'APPID',
      'appid'       => 'wx4e1916a585d1f4e9',
      'merchant_id' => '2480029552',
    ]),
    'authorized_data' => \json_encode([
      'business_type' => 'FAVOR_STOCK',
      'stock_id'      => '2433405',
    ]),
    'limit'           => 50,
    'offset'          => 0,
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/marketing/partnerships')->get([
  'query' => [
    'partner'         => \json_encode([
      'type'        => 'APPID',
      'appid'       => 'wx4e1916a585d1f4e9',
      'merchant_id' => '2480029552',
    ]),
    'authorized_data' => \json_encode([
      'business_type' => 'FAVOR_STOCK',
      'stock_id'      => '2433405',
    ]),
    'limit'           => 50,
    'offset'          => 0,
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/marketing/partnerships']->get([
  'query' => [
    'partner'         => \json_encode([
      'type'        => 'APPID',
      'appid'       => 'wx4e1916a585d1f4e9',
      'merchant_id' => '2480029552',
    ]),
    'authorized_data' => \json_encode([
      'business_type' => 'FAVOR_STOCK',
      'stock_id'      => '2433405',
    ]),
    'limit'           => 50,
    'offset'          => 0,
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| data | object[] {data-tooltip="对应PHP的array"} | 合作关系结果集
| partner {data-required data-indent=1} | object {data-tooltip="对应PHP的array"} | 合作方信息
| type {data-required data-indent=2} | string | 合作方类别
| appid {data-indent=2} | string | 合作方APPID
| merchant_id {data-indent=2} | string | 合作方商户ID
| authorized_data {data-required data-indent=1} | object {data-tooltip="对应PHP的array"} | 被授权数据
| business_type {data-required data-indent=2} | string | 授权业务类别
| stock_id {data-indent=2} | string | 授权批次ID
| build_time {data-required data-indent=1} | string | 建立合作关系时间
| terminate_time {data-indent=1} | string | 终止合作关系时间
| create_time {data-required data-indent=1} | string | 创建时间
| update_time {data-required data-indent=1} | string | 更新时间
| limit {data-required} | integer | 分页大小
| offset {data-required} | integer | 分页页码
| total_count | integer | 总数量

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/merchant/4012380536) [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4012381479)
