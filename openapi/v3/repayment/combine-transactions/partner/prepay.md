---
title: 还款下单
description: 还款下单，只能使用还款对应的查单、关单接口
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| combine_out_trade_no {data-required data-indent=1} | string | 还款单订单号
| combine_mchid {data-required data-indent=1} | string | 还款服务商商户号
| sub_orders {data-required data-indent=1} | object[] {data-tooltip="对应PHP的array"} | 还款明细单信息列表
| mchid {data-required data-indent=2} | string | 还款单发起商户号
| sub_mchid {data-indent=2} | string | 子商户号
| out_trade_no {data-required data-indent=2} | string | 还款明细单订单号
| amount {data-required data-indent=2} | object {data-tooltip="对应PHP的array"} | 订单金额
| total_amount {data-required data-indent=3} | number | 标价金额
| currency {data-required data-indent=3} | string | 标价币种
| attach {data-required data-indent=2} | string | 附加数据
| description {data-required data-indent=2} | string | 商品描述
| settle_info {data-indent=2} | object {data-tooltip="对应PHP的array"} | 结算信息
| profit_sharing {data-indent=3} | boolean | 是否指定分账
| subsidy_amount {data-indent=3} | integer | 补差金额
| time_expire {data-indent=1} | string | 交易结束时间
| notify_url {data-indent=1} | string | 通知地址
| h5_info {data-indent=1} | object {data-tooltip="对应PHP的array"} | H5调起支付场景信息
| combine_appid {data-required data-indent=2} | string | 还款服务商APPID
| payer_client_ip {data-required data-indent=2} | string | 用户终端IP
| type {data-required data-indent=2} | string | 场景类型<br/>`iOS` \| `Android` \| `Wap` 枚举值之一
| app_name {data-indent=2} | string | 应用名称
| app_url {data-required data-indent=2} | string | 网站URL
| bundle_id {data-indent=2} | string | iOS平台BundleID
| package_name {data-indent=2} | string | Android平台PackageName
| app_info {data-indent=1} | object {data-tooltip="对应PHP的array"} | APP调起支付场景信息
| combine_appid {data-required data-indent=2} | string | 还款服务商APPID
| miniprogram_info {data-indent=1} | object {data-tooltip="对应PHP的array"} | 小程序调起支付场景信息
| combine_appid {data-required data-indent=2} | string | 还款服务商APPID
| openid {data-required data-indent=2} | string | 用户标识

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->repayment->combineTransactions->partner->prepay->postAsync([
  'json' => [
    'combine_out_trade_no' => '1217752501201407033233368018',
    'combine_mchid'        => '1230000109',
    'sub_orders'           => [[
      'mchid'        => '1230000109',
      'sub_mchid'    => '1900000109',
      'out_trade_no' => '20150806125346',
      'amount'       => [
        'total_amount' => 10,
        'currency'     => 'CNY',
      ],
      'attach'       => '深圳分店',
      'description'  => '某某放心借',
      'settle_info'  => [
        'profit_sharing' => true,
        'subsidy_amount' => 10,
      ],
    ],],
    'time_expire'          => '2018-06-08T10:34:56+08:00',
    'notify_url'           => 'https://yourapp.com/notify',
    'h5_info'              => [
      'combine_appid'   => 'wxd678efh567hg6787',
      'payer_client_ip' => '127.0.0.1',
      'type'            => 'iOS',
      'app_name'        => '王者荣耀',
      'app_url'         => 'https://pay.qq.com',
      'bundle_id'       => 'com.tencent.wzryiOS',
      'package_name'    => 'com.tencent.tmgp.sgame',
    ],
    'app_info'             => [
      'combine_appid' => 'wxd678efh567hg6787',
    ],
    'miniprogram_info'     => [
      'combine_appid' => 'wxd678efh567hg6787',
      'openid'        => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
    ],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/repayment/combine-transactions/partner/prepay')->postAsync([
  'json' => [
    'combine_out_trade_no' => '1217752501201407033233368018',
    'combine_mchid'        => '1230000109',
    'sub_orders'           => [[
      'mchid'        => '1230000109',
      'sub_mchid'    => '1900000109',
      'out_trade_no' => '20150806125346',
      'amount'       => [
        'total_amount' => 10,
        'currency'     => 'CNY',
      ],
      'attach'       => '深圳分店',
      'description'  => '某某放心借',
      'settle_info'  => [
        'profit_sharing' => true,
        'subsidy_amount' => 10,
      ],
    ],],
    'time_expire'          => '2018-06-08T10:34:56+08:00',
    'notify_url'           => 'https://yourapp.com/notify',
    'h5_info'              => [
      'combine_appid'   => 'wxd678efh567hg6787',
      'payer_client_ip' => '127.0.0.1',
      'type'            => 'iOS',
      'app_name'        => '王者荣耀',
      'app_url'         => 'https://pay.qq.com',
      'bundle_id'       => 'com.tencent.wzryiOS',
      'package_name'    => 'com.tencent.tmgp.sgame',
    ],
    'app_info'             => [
      'combine_appid' => 'wxd678efh567hg6787',
    ],
    'miniprogram_info'     => [
      'combine_appid' => 'wxd678efh567hg6787',
      'openid'        => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
    ],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/repayment/combine-transactions/partner/prepay']->postAsync([
  'json' => [
    'combine_out_trade_no' => '1217752501201407033233368018',
    'combine_mchid'        => '1230000109',
    'sub_orders'           => [[
      'mchid'        => '1230000109',
      'sub_mchid'    => '1900000109',
      'out_trade_no' => '20150806125346',
      'amount'       => [
        'total_amount' => 10,
        'currency'     => 'CNY',
      ],
      'attach'       => '深圳分店',
      'description'  => '某某放心借',
      'settle_info'  => [
        'profit_sharing' => true,
        'subsidy_amount' => 10,
      ],
    ],],
    'time_expire'          => '2018-06-08T10:34:56+08:00',
    'notify_url'           => 'https://yourapp.com/notify',
    'h5_info'              => [
      'combine_appid'   => 'wxd678efh567hg6787',
      'payer_client_ip' => '127.0.0.1',
      'type'            => 'iOS',
      'app_name'        => '王者荣耀',
      'app_url'         => 'https://pay.qq.com',
      'bundle_id'       => 'com.tencent.wzryiOS',
      'package_name'    => 'com.tencent.tmgp.sgame',
    ],
    'app_info'             => [
      'combine_appid' => 'wxd678efh567hg6787',
    ],
    'miniprogram_info'     => [
      'combine_appid' => 'wxd678efh567hg6787',
      'openid'        => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
    ],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->repayment->combineTransactions->partner->prepay->post([
  'json' => [
    'combine_out_trade_no' => '1217752501201407033233368018',
    'combine_mchid'        => '1230000109',
    'sub_orders'           => [[
      'mchid'        => '1230000109',
      'sub_mchid'    => '1900000109',
      'out_trade_no' => '20150806125346',
      'amount'       => [
        'total_amount' => 10,
        'currency'     => 'CNY',
      ],
      'attach'       => '深圳分店',
      'description'  => '某某放心借',
      'settle_info'  => [
        'profit_sharing' => true,
        'subsidy_amount' => 10,
      ],
    ],],
    'time_expire'          => '2018-06-08T10:34:56+08:00',
    'notify_url'           => 'https://yourapp.com/notify',
    'h5_info'              => [
      'combine_appid'   => 'wxd678efh567hg6787',
      'payer_client_ip' => '127.0.0.1',
      'type'            => 'iOS',
      'app_name'        => '王者荣耀',
      'app_url'         => 'https://pay.qq.com',
      'bundle_id'       => 'com.tencent.wzryiOS',
      'package_name'    => 'com.tencent.tmgp.sgame',
    ],
    'app_info'             => [
      'combine_appid' => 'wxd678efh567hg6787',
    ],
    'miniprogram_info'     => [
      'combine_appid' => 'wxd678efh567hg6787',
      'openid'        => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
    ],
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/repayment/combine-transactions/partner/prepay')->post([
  'json' => [
    'combine_out_trade_no' => '1217752501201407033233368018',
    'combine_mchid'        => '1230000109',
    'sub_orders'           => [[
      'mchid'        => '1230000109',
      'sub_mchid'    => '1900000109',
      'out_trade_no' => '20150806125346',
      'amount'       => [
        'total_amount' => 10,
        'currency'     => 'CNY',
      ],
      'attach'       => '深圳分店',
      'description'  => '某某放心借',
      'settle_info'  => [
        'profit_sharing' => true,
        'subsidy_amount' => 10,
      ],
    ],],
    'time_expire'          => '2018-06-08T10:34:56+08:00',
    'notify_url'           => 'https://yourapp.com/notify',
    'h5_info'              => [
      'combine_appid'   => 'wxd678efh567hg6787',
      'payer_client_ip' => '127.0.0.1',
      'type'            => 'iOS',
      'app_name'        => '王者荣耀',
      'app_url'         => 'https://pay.qq.com',
      'bundle_id'       => 'com.tencent.wzryiOS',
      'package_name'    => 'com.tencent.tmgp.sgame',
    ],
    'app_info'             => [
      'combine_appid' => 'wxd678efh567hg6787',
    ],
    'miniprogram_info'     => [
      'combine_appid' => 'wxd678efh567hg6787',
      'openid'        => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
    ],
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/repayment/combine-transactions/partner/prepay']->post([
  'json' => [
    'combine_out_trade_no' => '1217752501201407033233368018',
    'combine_mchid'        => '1230000109',
    'sub_orders'           => [[
      'mchid'        => '1230000109',
      'sub_mchid'    => '1900000109',
      'out_trade_no' => '20150806125346',
      'amount'       => [
        'total_amount' => 10,
        'currency'     => 'CNY',
      ],
      'attach'       => '深圳分店',
      'description'  => '某某放心借',
      'settle_info'  => [
        'profit_sharing' => true,
        'subsidy_amount' => 10,
      ],
    ],],
    'time_expire'          => '2018-06-08T10:34:56+08:00',
    'notify_url'           => 'https://yourapp.com/notify',
    'h5_info'              => [
      'combine_appid'   => 'wxd678efh567hg6787',
      'payer_client_ip' => '127.0.0.1',
      'type'            => 'iOS',
      'app_name'        => '王者荣耀',
      'app_url'         => 'https://pay.qq.com',
      'bundle_id'       => 'com.tencent.wzryiOS',
      'package_name'    => 'com.tencent.tmgp.sgame',
    ],
    'app_info'             => [
      'combine_appid' => 'wxd678efh567hg6787',
    ],
    'miniprogram_info'     => [
      'combine_appid' => 'wxd678efh567hg6787',
      'openid'        => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
    ],
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| prepay_id | string | 预支付交易会话标识
| h5_url | string | 支付跳转链接

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4015124463)
