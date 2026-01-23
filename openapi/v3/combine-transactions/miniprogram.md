---
title: 个人收款交易下单-小程序
description: 使用个人收款交易接口，可支持为个人收款方在微信支付服务后台生成与支付交易单，返回正确的预支付交易会话标识后按照交易场景调起支付。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| combine_appid {data-required data-indent=1} | string | 平台商户应用ID
| combine_mchid {data-required data-indent=1} | string | 平台商户号
| combine_out_trade_no {data-required data-indent=1} | string | 交易单订单号
| combine_payer_info {data-required data-indent=1} | object {data-tooltip="对应PHP的array"} | 支付者
| openid {data-required data-indent=2} | string | 用户标识
| scene_info {data-indent=1} | object {data-tooltip="对应PHP的array"} | 场景信息
| device_id {data-indent=2} | string | 商户端设备号
| payer_client_ip {data-required data-indent=2} | string | 用户终端IP
| sub_orders {data-required data-indent=1} | object[] {data-tooltip="对应PHP的array"} | 商品单信息
| mchid {data-required data-indent=2} | string | 商品单发起商户号
| individual_auth_id {data-required data-indent=2} | string | 商品单个人收款方受理授权ID
| individual_name {data-indent=2} | string | 商品单个人收款方平台昵称
| out_trade_no {data-required data-indent=2} | string | 商品单商户订单号
| amount {data-required data-indent=2} | object {data-tooltip="对应PHP的array"} | 商品单金额
| total_amount {data-required data-indent=3} | number | 标价金额
| currency {data-required data-indent=3} | string | 标价币种
| attach {data-required data-indent=2} | string | 附加数据
| description {data-required data-indent=2} | string | 商品描述
| time_expire {data-indent=1} | string | 交易结束时间
| notify_url {data-indent=1} | string | 通知地址
| trade_scenario {data-indent=1} | string | 交易场景<br/>`RECOMMERCE` 枚举值

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->combineTransactions->miniprogram->postAsync([
  'json' => [
    'combine_appid'        => 'wxd678efh567hg6787',
    'combine_mchid'        => '1230000109',
    'combine_out_trade_no' => 'P20150806125346',
    'combine_payer_info'   => [
      'openid' => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
    ],
    'scene_info'           => [
      'device_id'       => 'POS1:1',
      'payer_client_ip' => '127.0.0.1',
    ],
    'sub_orders'           => [[
      'mchid'              => '1230000109',
      'individual_auth_id' => '1900000109',
      'individual_name'    => '哈哈哈小店',
      'out_trade_no'       => '20150806125346',
      'amount'             => [
        'total_amount' => 10,
        'currency'     => 'CNY',
      ],
      'attach'             => '深圳分店',
      'description'        => 'Image形象店-深圳腾大-QQ公仔',
    ],],
    'time_expire'          => '2018-06-08T10:34:56+08:00',
    'notify_url'           => 'https://yourapp.com/notify',
    'trade_scenario'       => 'RECOMMERCE',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/combine-transactions/miniprogram')->postAsync([
  'json' => [
    'combine_appid'        => 'wxd678efh567hg6787',
    'combine_mchid'        => '1230000109',
    'combine_out_trade_no' => 'P20150806125346',
    'combine_payer_info'   => [
      'openid' => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
    ],
    'scene_info'           => [
      'device_id'       => 'POS1:1',
      'payer_client_ip' => '127.0.0.1',
    ],
    'sub_orders'           => [[
      'mchid'              => '1230000109',
      'individual_auth_id' => '1900000109',
      'individual_name'    => '哈哈哈小店',
      'out_trade_no'       => '20150806125346',
      'amount'             => [
        'total_amount' => 10,
        'currency'     => 'CNY',
      ],
      'attach'             => '深圳分店',
      'description'        => 'Image形象店-深圳腾大-QQ公仔',
    ],],
    'time_expire'          => '2018-06-08T10:34:56+08:00',
    'notify_url'           => 'https://yourapp.com/notify',
    'trade_scenario'       => 'RECOMMERCE',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/combine-transactions/miniprogram']->postAsync([
  'json' => [
    'combine_appid'        => 'wxd678efh567hg6787',
    'combine_mchid'        => '1230000109',
    'combine_out_trade_no' => 'P20150806125346',
    'combine_payer_info'   => [
      'openid' => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
    ],
    'scene_info'           => [
      'device_id'       => 'POS1:1',
      'payer_client_ip' => '127.0.0.1',
    ],
    'sub_orders'           => [[
      'mchid'              => '1230000109',
      'individual_auth_id' => '1900000109',
      'individual_name'    => '哈哈哈小店',
      'out_trade_no'       => '20150806125346',
      'amount'             => [
        'total_amount' => 10,
        'currency'     => 'CNY',
      ],
      'attach'             => '深圳分店',
      'description'        => 'Image形象店-深圳腾大-QQ公仔',
    ],],
    'time_expire'          => '2018-06-08T10:34:56+08:00',
    'notify_url'           => 'https://yourapp.com/notify',
    'trade_scenario'       => 'RECOMMERCE',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->combineTransactions->miniprogram->post([
  'json' => [
    'combine_appid'        => 'wxd678efh567hg6787',
    'combine_mchid'        => '1230000109',
    'combine_out_trade_no' => 'P20150806125346',
    'combine_payer_info'   => [
      'openid' => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
    ],
    'scene_info'           => [
      'device_id'       => 'POS1:1',
      'payer_client_ip' => '127.0.0.1',
    ],
    'sub_orders'           => [[
      'mchid'              => '1230000109',
      'individual_auth_id' => '1900000109',
      'individual_name'    => '哈哈哈小店',
      'out_trade_no'       => '20150806125346',
      'amount'             => [
        'total_amount' => 10,
        'currency'     => 'CNY',
      ],
      'attach'             => '深圳分店',
      'description'        => 'Image形象店-深圳腾大-QQ公仔',
    ],],
    'time_expire'          => '2018-06-08T10:34:56+08:00',
    'notify_url'           => 'https://yourapp.com/notify',
    'trade_scenario'       => 'RECOMMERCE',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/combine-transactions/miniprogram')->post([
  'json' => [
    'combine_appid'        => 'wxd678efh567hg6787',
    'combine_mchid'        => '1230000109',
    'combine_out_trade_no' => 'P20150806125346',
    'combine_payer_info'   => [
      'openid' => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
    ],
    'scene_info'           => [
      'device_id'       => 'POS1:1',
      'payer_client_ip' => '127.0.0.1',
    ],
    'sub_orders'           => [[
      'mchid'              => '1230000109',
      'individual_auth_id' => '1900000109',
      'individual_name'    => '哈哈哈小店',
      'out_trade_no'       => '20150806125346',
      'amount'             => [
        'total_amount' => 10,
        'currency'     => 'CNY',
      ],
      'attach'             => '深圳分店',
      'description'        => 'Image形象店-深圳腾大-QQ公仔',
    ],],
    'time_expire'          => '2018-06-08T10:34:56+08:00',
    'notify_url'           => 'https://yourapp.com/notify',
    'trade_scenario'       => 'RECOMMERCE',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/combine-transactions/miniprogram']->post([
  'json' => [
    'combine_appid'        => 'wxd678efh567hg6787',
    'combine_mchid'        => '1230000109',
    'combine_out_trade_no' => 'P20150806125346',
    'combine_payer_info'   => [
      'openid' => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
    ],
    'scene_info'           => [
      'device_id'       => 'POS1:1',
      'payer_client_ip' => '127.0.0.1',
    ],
    'sub_orders'           => [[
      'mchid'              => '1230000109',
      'individual_auth_id' => '1900000109',
      'individual_name'    => '哈哈哈小店',
      'out_trade_no'       => '20150806125346',
      'amount'             => [
        'total_amount' => 10,
        'currency'     => 'CNY',
      ],
      'attach'             => '深圳分店',
      'description'        => 'Image形象店-深圳腾大-QQ公仔',
    ],],
    'time_expire'          => '2018-06-08T10:34:56+08:00',
    'notify_url'           => 'https://yourapp.com/notify',
    'trade_scenario'       => 'RECOMMERCE',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| prepay_id {data-required} | string | 预支付交易会话标识

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4012602225)
