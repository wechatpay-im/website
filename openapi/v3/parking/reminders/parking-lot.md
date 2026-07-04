---
title: 查询停车场信息
description: 对商户提供查询停车场信息接口，返回停车场基础信息、启用状态及未启用/下线原因。适用对象与普通服务商一致，支持普通商户、普通服务商、平台商户（电商模式），与既有停车提醒 API 相同。
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| query | object {data-tooltip="对应PHP的array"} | 声明请求的查询参数
| out_parking_lot_id {data-indent=1} | string | 商户停车场ID
| wx_parking_lot_id {data-indent=1} | string | 微信停车场ID

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->parking->reminders->parkingLot->getAsync([
  'query' => [
    'out_parking_lot_id' => 'lot_sz_tencent_001',
    'wx_parking_lot_id'  => '21232735744117624001123604298240',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/parking/reminders/parking-lot')->getAsync([
  'query' => [
    'out_parking_lot_id' => 'lot_sz_tencent_001',
    'wx_parking_lot_id'  => '21232735744117624001123604298240',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/parking/reminders/parking-lot']->getAsync([
  'query' => [
    'out_parking_lot_id' => 'lot_sz_tencent_001',
    'wx_parking_lot_id'  => '21232735744117624001123604298240',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->parking->reminders->parkingLot->get([
  'query' => [
    'out_parking_lot_id' => 'lot_sz_tencent_001',
    'wx_parking_lot_id'  => '21232735744117624001123604298240',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/parking/reminders/parking-lot')->get([
  'query' => [
    'out_parking_lot_id' => 'lot_sz_tencent_001',
    'wx_parking_lot_id'  => '21232735744117624001123604298240',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/parking/reminders/parking-lot']->get([
  'query' => [
    'out_parking_lot_id' => 'lot_sz_tencent_001',
    'wx_parking_lot_id'  => '21232735744117624001123604298240',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| wx_parking_lot_id | string | 微信停车场ID
| out_parking_lot_id | string | 商户停车场ID
| parking_lot_name | string | 停车场名称
| parking_lot_address | string | 停车场地址
| payment_mini_prog_appid | string | 支付小程序appid
| payment_mini_prog_path | string | 支付小程序path
| parking_order_mini_prog_appid | string | 停车订单小程序appid
| parking_order_mini_prog_path | string | 停车订单小程序path
| enabled_state | string | 启用状态，停车场启用状态<br/>`ENABLED_STATE_UNKNOWN` \| `ENABLED_STATE_NOT_ENABLED` \| `ENABLED_STATE_ENABLED` \| `ENABLED_STATE_OFFLINE` 枚举值之一
| reason | string | 原因

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4023070758)
