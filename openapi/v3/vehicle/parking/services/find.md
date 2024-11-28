---
title: 查询车牌服务开通信息
description: 该接口仅支持停车场景，商户首先请求查询车牌服务开通信息接口，确认该车牌，是否被该用户开通车主服务。
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| query {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的查询参数
| appid {data-required data-indent=1} | string | 应用ID
| sub_mchid {data-required data-indent=1} | string | 子商户号
| plate_number {data-required data-indent=1} | string | 车牌号
| plate_color {data-required data-indent=1} | string | 车牌颜色<br/>`BLUE` \| `GREEN` \| `YELLOW` \| `BLACK` \| `WHITE` \| `LIMEGREEN` 枚举值之一
| openid {data-required data-indent=1} | string | 用户标识

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->vehicle->parking->services->find->getAsync([
  'query' => [
    'appid' => 'wxcbda96de0b165486',
    'sub_mchid' => '1900000109',
    'plate_number' => '粤B888888',
    'plate_color' => 'BLUE',
    'openid' => 'oUpF8uMuAJOM2pxb1Q',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/vehicle/parking/services/find')->getAsync([
  'query' => [
    'appid' => 'wxcbda96de0b165486',
    'sub_mchid' => '1900000109',
    'plate_number' => '粤B888888',
    'plate_color' => 'BLUE',
    'openid' => 'oUpF8uMuAJOM2pxb1Q',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/vehicle/parking/services/find']->getAsync([
  'query' => [
    'appid' => 'wxcbda96de0b165486',
    'sub_mchid' => '1900000109',
    'plate_number' => '粤B888888',
    'plate_color' => 'BLUE',
    'openid' => 'oUpF8uMuAJOM2pxb1Q',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->vehicle->parking->services->find->get([
  'query' => [
    'appid' => 'wxcbda96de0b165486',
    'sub_mchid' => '1900000109',
    'plate_number' => '粤B888888',
    'plate_color' => 'BLUE',
    'openid' => 'oUpF8uMuAJOM2pxb1Q',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/vehicle/parking/services/find')->get([
  'query' => [
    'appid' => 'wxcbda96de0b165486',
    'sub_mchid' => '1900000109',
    'plate_number' => '粤B888888',
    'plate_color' => 'BLUE',
    'openid' => 'oUpF8uMuAJOM2pxb1Q',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/vehicle/parking/services/find']->get([
  'query' => [
    'appid' => 'wxcbda96de0b165486',
    'sub_mchid' => '1900000109',
    'plate_number' => '粤B888888',
    'plate_color' => 'BLUE',
    'openid' => 'oUpF8uMuAJOM2pxb1Q',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| plate_number {data-required} | string | 车牌号
| plate_color {data-required} | string | 车牌颜色<br/>`BLUE` \| `GREEN` \| `YELLOW` \| `BLACK` \| `WHITE` \| `LIMEGREEN` 枚举值之一
| service_open_time | string | 车牌服务开通时间
| openid {data-required} | string | 用户标识
| service_state {data-required} | string | 车牌服务开通状态

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3_partner/apis/chapter8_8_1.shtml)
