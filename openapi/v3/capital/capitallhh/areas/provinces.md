---
title: 查询省份列表
description: 通过本接口获取省份列表数据（不包含中国港澳台地区），可用于省份下的城市数据查询
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->capital->capitallhh->areas->provinces->getAsync([])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/capital/capitallhh/areas/provinces')->getAsync([])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/capital/capitallhh/areas/provinces']->getAsync([])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->capital->capitallhh->areas->provinces->get([]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/capital/capitallhh/areas/provinces')->get([]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/capital/capitallhh/areas/provinces']->get([]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| data | object[] {data-tooltip="对应PHP的array"} | 省份列表
| province_name {data-required data-indent=1} | string | 省份名称
| province_code {data-required data-indent=1} | integer | 省份编码
| total_count {data-required}| integer | 查询数据总条数

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3_partner/Offline/apis/chapter11_2_4.shtml)
