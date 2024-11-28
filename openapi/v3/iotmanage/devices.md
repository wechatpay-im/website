---
title: 智能设备列表
description: 商户可以通过该接口分页拉取到自己拥有的设备的列表。
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| query {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的查询参数
| limit {data-required data-indent=1} | integer | 最大资源条数
| offset {data-required data-indent=1} | integer | 请求资源起始位置

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->iotmanage->devices->getAsync([
  'query' => [
    'limit' => 5,
    'offset' => 10,
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/iotmanage/devices')->getAsync([
  'query' => [
    'limit' => 5,
    'offset' => 10,
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/iotmanage/devices']->getAsync([
  'query' => [
    'limit' => 5,
    'offset' => 10,
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->iotmanage->devices->get([
  'query' => [
    'limit' => 5,
    'offset' => 10,
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/iotmanage/devices')->get([
  'query' => [
    'limit' => 5,
    'offset' => 10,
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/iotmanage/devices']->get([
  'query' => [
    'limit' => 5,
    'offset' => 10,
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| data {data-required} | object[] {data-tooltip="对应PHP的array"} | 设备信息
| device_sn {data-indent=1} | string | 设备序列号
| camera_sn {data-indent=1} | string | 摄像头序列号
| device_category_code {data-indent=1} | string | 设备品类代码
| device_category {data-indent=1} | string | 设备品类
| device_class_code {data-indent=1} | string | 设备类型代码
| device_class {data-indent=1} | string | 设备类型
| device_model {data-indent=1} | string | 设备型号
| app_scene_code {data-indent=1} | string | 刷脸应用软件模式代码
| app_scene {data-indent=1} | string | 刷脸应用软件模式
| operating_system {data-indent=1} | string | 刷脸应用操作系统
| activation_status {data-indent=1} | string | 激活状态<br/>`ACTIVATED` \| `INACTIVATED` 枚举值之一
| activation_time {data-indent=1} | string | 激活时间
| mchid {data-indent=1} | string | 商户号
| merchant_shortname {data-indent=1} | string | 商户简称
| sub_mchid {data-indent=1} | string | 子商户号
| sub_merchant_shortname {data-indent=1} | string | 子商户简称
| offset {data-required} | integer | 请求资源起始位置
| limit {data-required} | integer | 最大资源条数
| total_count {data-required} | integer | 资源总条数
| links {data-required} | object {data-tooltip="对应PHP的array"} | 相关链接
| next {data-indent=1} | string | 下一页链接
| prev {data-indent=1} | string | 上一页链接
| self {data-indent=1} | string | 当前链接

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/wxfacepay/develop/point/iotmanage-devices.html)
