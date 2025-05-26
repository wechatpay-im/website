---
title: 点餐订单信息同步（渠道商/服务商）
description: 当点餐订单状态发生变化时，都上传全量的订单明细。1、用户在扫码点餐小程序/h5页面中下单时，上报用户的下单信息，此时status为CREATE_DEAL;2、确定支付成功后上报用户的支付信息，此时status为PAY_SUCCESS
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| sp_mchid {data-indent=1} | string | 微信支付分配的服务商商户号
| sp_appid {data-indent=1} | string | 子商户在微信公众平台申请服务号对应的APPID
| channel_id {data-required data-indent=1} | string | 微信支付分配的渠道商商户号
| sub_mchid {data-required data-indent=1} | string | 微信支付分配子商户商户号
| sub_appid {data-required data-indent=1} | string | 子商户在微信公众平台申请服务号对应的APPID
| out_shop_no {data-required data-indent=1} | string | 商户旗下门店的唯一编号
| sub_openid {data-required data-indent=1} | string | 用户子标识，用户在子商户appid下的openid
| login_token {data-required data-indent=1} | string | 微信用户登录接口返回的登录票据。公众号，填写页面授权access_token，详细参考；小程序，填写session_key，详细参考。
| order_entry {data-required data-indent=1} | string | 点餐入口，公众号：点餐页面完整URL；小程序：点餐页面path路径
| total_amount {data-required data-indent=1} | integer | 总价，单位为分
| discount_amount {data-required data-indent=1} | integer | 优惠金额，单位为分
| user_amount {data-required data-indent=1} | integer | 实际支付金额，单位为分
| status {data-required data-indent=1} | string | 订单状态，取值如下：CREATE_DEAL—用户下单；PAY_SUCCESS—支付完成，结账成功；<br/>`CREATE_DEAL` \| `PAY_SUCCESS` 枚举值之一
| action_time {data-required data-indent=1} | string | 状态发生变化的时间，格式为rfc3339格式，如2018-06-08T10:34:56+08:00 代表北京时间2018年06月08日10时34分56秒
| pay_time {data-indent=1} | string | 支付时间，格式为rfc3339格式，如2018-06-08T10:34:56+08:00 代表北京时间2018年06月08日10时34分56秒（status为PAY_SUCCESS时必填）
| transaction_id {data-indent=1} | string | 支付订单号（status为PAY_SUCCESS时必填）
| out_trade_no {data-indent=1} | string | 渠道商系统内部支付订单号（status为PAY_SUCCESS时必填）
| out_order_no {data-required data-indent=1} | string | 渠道商系统内部订单号
| out_table_no {data-indent=1} | string | 桌位号
| people_count {data-indent=1} | integer | 消费人数
| dish_list {data-required data-indent=1} | object[] {data-tooltip="对应PHP的array"} | 商户菜品信息
| out_dish_no {data-required data-indent=2} | string | 商户菜品ID
| name {data-required data-indent=2} | string | 菜品名称
| price {data-required data-indent=2} | integer | 菜品单价，单位为分
| unit {data-required data-indent=2} | string | 菜品单位，BY_SHARE-按份 BY_WEIGHT-按重量<br/>`BY_SHARE` \| `BY_WEIGHT` 枚举值之一
| count {data-required data-indent=2} | number | 菜品数量，保留小数点后2位有效数字
| discount {data-indent=2} | integer | 菜品折扣，百分值，8折填80
| type {data-indent=2} | string | 菜品分类，如等。详见参数规定《菜品类型列表》
| priority {data-indent=2} | integer | 当前菜品在服务商平台的顺序，值越小越靠前，取值（1~100）
| properties {data-indent=2} | object {data-tooltip="对应PHP的array"} | 菜品属性
| taste {data-required data-indent=3} | string | 口味
| cuisine {data-required data-indent=3} | string | 做法
| main_material {data-required data-indent=3} | string | 主料
| ingredients {data-required data-indent=3} | string | 配料
| others {data-indent=3} | string | 其他

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->catering->orders->syncStatus->postAsync([
  'json' => [
    'sp_mchid'        => '1900000100',
    'sp_appid'        => 'wx8888888888888888',
    'channel_id'      => '1900000109',
    'sub_mchid'       => '1900000100',
    'sub_appid'       => 'wx8888888888888888',
    'out_shop_no'     => '6895',
    'sub_openid'      => 'oYobu0Dmn6TdodZnFWKOEkqoRbI8',
    'login_token'     => '071oYFSN19sCH31AyNSN15QDSN1oYFSA',
    'order_entry'     => 'http://www.example.com',
    'total_amount'    => 1000,
    'discount_amount' => 100,
    'user_amount'     => 900,
    'status'          => 'CREATE_DEAL',
    'action_time'     => '2018-06-08T10:34:56+08:00',
    'pay_time'        => '2018-06-08T10:34:56+08:00',
    'transaction_id'  => '1009660380201506130728806387',
    'out_trade_no'    => '20150806125346',
    'out_order_no'    => '20150806125346',
    'out_table_no'    => '1',
    'people_count'    => 2,
    'dish_list'       => [[
      'out_dish_no' => '1',
      'name'        => '清汤锅底',
      'price'       => 1,
      'unit'        => 'BY_SHARE',
      'count'       => 1.5,
      'discount'    => 100,
      'type'        => 'FAST_FOOD',
      'priority'    => 1,
      'properties'  => [
        'taste'         => '辣',
        'cuisine'       => '炒',
        'main_material' => '猪肝',
        'ingredients'   => '青椒 | 辣椒 | 葱 | 八角',
        'others'        => '有机 | 农家',
      ],
    ],],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r($response->getStatusCode() === 204);
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/catering/orders/sync-status')->postAsync([
  'json' => [
    'sp_mchid'        => '1900000100',
    'sp_appid'        => 'wx8888888888888888',
    'channel_id'      => '1900000109',
    'sub_mchid'       => '1900000100',
    'sub_appid'       => 'wx8888888888888888',
    'out_shop_no'     => '6895',
    'sub_openid'      => 'oYobu0Dmn6TdodZnFWKOEkqoRbI8',
    'login_token'     => '071oYFSN19sCH31AyNSN15QDSN1oYFSA',
    'order_entry'     => 'http://www.example.com',
    'total_amount'    => 1000,
    'discount_amount' => 100,
    'user_amount'     => 900,
    'status'          => 'CREATE_DEAL',
    'action_time'     => '2018-06-08T10:34:56+08:00',
    'pay_time'        => '2018-06-08T10:34:56+08:00',
    'transaction_id'  => '1009660380201506130728806387',
    'out_trade_no'    => '20150806125346',
    'out_order_no'    => '20150806125346',
    'out_table_no'    => '1',
    'people_count'    => 2,
    'dish_list'       => [[
      'out_dish_no' => '1',
      'name'        => '清汤锅底',
      'price'       => 1,
      'unit'        => 'BY_SHARE',
      'count'       => 1.5,
      'discount'    => 100,
      'type'        => 'FAST_FOOD',
      'priority'    => 1,
      'properties'  => [
        'taste'         => '辣',
        'cuisine'       => '炒',
        'main_material' => '猪肝',
        'ingredients'   => '青椒 | 辣椒 | 葱 | 八角',
        'others'        => '有机 | 农家',
      ],
    ],],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r($response->getStatusCode() === 204);
})
->wait();
```

```php [异步属性式]
$instance['v3/catering/orders/sync-status']->postAsync([
  'json' => [
    'sp_mchid'        => '1900000100',
    'sp_appid'        => 'wx8888888888888888',
    'channel_id'      => '1900000109',
    'sub_mchid'       => '1900000100',
    'sub_appid'       => 'wx8888888888888888',
    'out_shop_no'     => '6895',
    'sub_openid'      => 'oYobu0Dmn6TdodZnFWKOEkqoRbI8',
    'login_token'     => '071oYFSN19sCH31AyNSN15QDSN1oYFSA',
    'order_entry'     => 'http://www.example.com',
    'total_amount'    => 1000,
    'discount_amount' => 100,
    'user_amount'     => 900,
    'status'          => 'CREATE_DEAL',
    'action_time'     => '2018-06-08T10:34:56+08:00',
    'pay_time'        => '2018-06-08T10:34:56+08:00',
    'transaction_id'  => '1009660380201506130728806387',
    'out_trade_no'    => '20150806125346',
    'out_order_no'    => '20150806125346',
    'out_table_no'    => '1',
    'people_count'    => 2,
    'dish_list'       => [[
      'out_dish_no' => '1',
      'name'        => '清汤锅底',
      'price'       => 1,
      'unit'        => 'BY_SHARE',
      'count'       => 1.5,
      'discount'    => 100,
      'type'        => 'FAST_FOOD',
      'priority'    => 1,
      'properties'  => [
        'taste'         => '辣',
        'cuisine'       => '炒',
        'main_material' => '猪肝',
        'ingredients'   => '青椒 | 辣椒 | 葱 | 八角',
        'others'        => '有机 | 农家',
      ],
    ],],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r($response->getStatusCode() === 204);
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->catering->orders->syncStatus->post([
  'json' => [
    'sp_mchid'        => '1900000100',
    'sp_appid'        => 'wx8888888888888888',
    'channel_id'      => '1900000109',
    'sub_mchid'       => '1900000100',
    'sub_appid'       => 'wx8888888888888888',
    'out_shop_no'     => '6895',
    'sub_openid'      => 'oYobu0Dmn6TdodZnFWKOEkqoRbI8',
    'login_token'     => '071oYFSN19sCH31AyNSN15QDSN1oYFSA',
    'order_entry'     => 'http://www.example.com',
    'total_amount'    => 1000,
    'discount_amount' => 100,
    'user_amount'     => 900,
    'status'          => 'CREATE_DEAL',
    'action_time'     => '2018-06-08T10:34:56+08:00',
    'pay_time'        => '2018-06-08T10:34:56+08:00',
    'transaction_id'  => '1009660380201506130728806387',
    'out_trade_no'    => '20150806125346',
    'out_order_no'    => '20150806125346',
    'out_table_no'    => '1',
    'people_count'    => 2,
    'dish_list'       => [[
      'out_dish_no' => '1',
      'name'        => '清汤锅底',
      'price'       => 1,
      'unit'        => 'BY_SHARE',
      'count'       => 1.5,
      'discount'    => 100,
      'type'        => 'FAST_FOOD',
      'priority'    => 1,
      'properties'  => [
        'taste'         => '辣',
        'cuisine'       => '炒',
        'main_material' => '猪肝',
        'ingredients'   => '青椒 | 辣椒 | 葱 | 八角',
        'others'        => '有机 | 农家',
      ],
    ],],
  ],
]);
print_r($response->getStatusCode() === 204);
```

```php [同步声明式]
$response = $instance->chain('v3/catering/orders/sync-status')->post([
  'json' => [
    'sp_mchid'        => '1900000100',
    'sp_appid'        => 'wx8888888888888888',
    'channel_id'      => '1900000109',
    'sub_mchid'       => '1900000100',
    'sub_appid'       => 'wx8888888888888888',
    'out_shop_no'     => '6895',
    'sub_openid'      => 'oYobu0Dmn6TdodZnFWKOEkqoRbI8',
    'login_token'     => '071oYFSN19sCH31AyNSN15QDSN1oYFSA',
    'order_entry'     => 'http://www.example.com',
    'total_amount'    => 1000,
    'discount_amount' => 100,
    'user_amount'     => 900,
    'status'          => 'CREATE_DEAL',
    'action_time'     => '2018-06-08T10:34:56+08:00',
    'pay_time'        => '2018-06-08T10:34:56+08:00',
    'transaction_id'  => '1009660380201506130728806387',
    'out_trade_no'    => '20150806125346',
    'out_order_no'    => '20150806125346',
    'out_table_no'    => '1',
    'people_count'    => 2,
    'dish_list'       => [[
      'out_dish_no' => '1',
      'name'        => '清汤锅底',
      'price'       => 1,
      'unit'        => 'BY_SHARE',
      'count'       => 1.5,
      'discount'    => 100,
      'type'        => 'FAST_FOOD',
      'priority'    => 1,
      'properties'  => [
        'taste'         => '辣',
        'cuisine'       => '炒',
        'main_material' => '猪肝',
        'ingredients'   => '青椒 | 辣椒 | 葱 | 八角',
        'others'        => '有机 | 农家',
      ],
    ],],
  ],
]);
print_r($response->getStatusCode() === 204);
```

```php [同步属性式]
$response = $instance['v3/catering/orders/sync-status']->post([
  'json' => [
    'sp_mchid'        => '1900000100',
    'sp_appid'        => 'wx8888888888888888',
    'channel_id'      => '1900000109',
    'sub_mchid'       => '1900000100',
    'sub_appid'       => 'wx8888888888888888',
    'out_shop_no'     => '6895',
    'sub_openid'      => 'oYobu0Dmn6TdodZnFWKOEkqoRbI8',
    'login_token'     => '071oYFSN19sCH31AyNSN15QDSN1oYFSA',
    'order_entry'     => 'http://www.example.com',
    'total_amount'    => 1000,
    'discount_amount' => 100,
    'user_amount'     => 900,
    'status'          => 'CREATE_DEAL',
    'action_time'     => '2018-06-08T10:34:56+08:00',
    'pay_time'        => '2018-06-08T10:34:56+08:00',
    'transaction_id'  => '1009660380201506130728806387',
    'out_trade_no'    => '20150806125346',
    'out_order_no'    => '20150806125346',
    'out_table_no'    => '1',
    'people_count'    => 2,
    'dish_list'       => [[
      'out_dish_no' => '1',
      'name'        => '清汤锅底',
      'price'       => 1,
      'unit'        => 'BY_SHARE',
      'count'       => 1.5,
      'discount'    => 100,
      'type'        => 'FAST_FOOD',
      'priority'    => 1,
      'properties'  => [
        'taste'         => '辣',
        'cuisine'       => '炒',
        'main_material' => '猪肝',
        'ingredients'   => '青椒 | 辣椒 | 葱 | 八角',
        'others'        => '有机 | 农家',
      ],
    ],],
  ],
]);
print_r($response->getStatusCode() === 204);
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| 空字符串(无返回内容) {align=center colspan=3}

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v2/partner/4011939936) [官方文档](https://pay.weixin.qq.com/doc/v2/institution/4011941011)
