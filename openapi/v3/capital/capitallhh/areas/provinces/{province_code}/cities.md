---
title: 查询城市列表
description: 通过本接口根据省份编码获取省份下的城市列表信息，不包含中国港澳台地区城市信息，可用于支行数据过滤查询
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| province_code {data-required} | integer | 省份编码

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->capital->capitallhh->areas->provinces->_province_code_->cities->getAsync([
  'province_code' => '10',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/capital/capitallhh/areas/provinces/{province_code}/cities')->getAsync([
  'province_code' => '10',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/capital/capitallhh/areas/provinces/{province_code}/cities']->getAsync([
  'province_code' => '10',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->capital->capitallhh->areas->provinces->_province_code_->cities->get([
  'province_code' => '10',
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/capital/capitallhh/areas/provinces/{province_code}/cities')->get([
  'province_code' => '10',
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/capital/capitallhh/areas/provinces/{province_code}/cities']->get([
  'province_code' => '10',
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| data | object[] {data-tooltip="对应PHP的array"} | 城市列表
| city_name {data-required data-indent=1} | string | 城市名称
| city_code {data-required data-indent=1} | integer | 城市编码
| total_count {data-required} | integer | 查询数据总条数

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4012697470)
