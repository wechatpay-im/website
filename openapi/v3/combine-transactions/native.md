---
title: 合单下单-Native支付
description: 使用合单支付接口，用户只输入一次密码，即可完成多个订单的支付。目前最多一次可支持50笔订单进行合单支付。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| json | object | 声明请求的`JSON`数据结构
| combine_appid {data-indent=1} | string | 合单商户appid
| combine_mchid {data-indent=1} | string | 合单商户号
| combine_out_trade_no {data-indent=1} | string | 合单商户订单号
| scene_info {data-indent=1} | object | 场景信息
| device_id {data-indent=2} | string | 商户端设备号
| payer_client_ip {data-indent=2} | string | 用户终端IP
| sub_orders {data-indent=1} | object[] | 子单信息
| mchid {data-indent=2} | string | 子单商户号
| attach {data-indent=2} | string | 附加数据
| amount {data-indent=2} | object | 订单金额
| total_amount {data-indent=3} | integer | 标价金额
| currency {data-indent=3} | string | 标价币种
| out_trade_no {data-indent=2} | string | 子单商户订单号
| sub_mchid {data-indent=2} | string | 二级商户号
| goods_tag {data-indent=2} | string | 订单优惠标记
| description {data-indent=2} | string | 商品描述
| settle_info {data-indent=2} | object | 结算信息
| profit_sharing {data-indent=3} | boolean | 是否指定分账
| subsidy_amount {data-indent=3} | integer | 补差金额
| sub_appid {data-indent=2} | string | 子商户应用ID
| time_start {data-indent=1} | string | 交易起始时间
| time_expire {data-indent=1} | string | 交易结束时间
| notify_url {data-indent=1} | string | 通知地址
| limit_pay {data-indent=1} | string[] | 
| combine_payer_info {data-indent=1} | object | 支付者
| openid {data-indent=2} | string | 用户标识
| sub_openid {data-indent=2} | string | 用户子标识

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->combineTransactions->native->postAsync([
  'json' => [
    'combine_appid' => 'wxd678efh567hg6787',
    'combine_mchid' => '1900000109',
    'combine_out_trade_no' => 'P20150806125346',
    'scene_info' => [
      'device_id' => 'POS1:1',
      'payer_client_ip' => '14.17.22.32',
    ],
    'sub_orders' => [[
      'mchid' => '1900000109',
      'attach' => '深圳分店',
      'amount' => [
        'total_amount' => 100,
        'currency' => 'CNY',
      ],
      'out_trade_no' => '20150806125346',
      'sub_mchid' => '1900000109',
      'goods_tag' => 'WXG',
      'description' => '腾讯充值中心-QQ会员充值',
      'settle_info' => [
        'profit_sharing' => true,
        'subsidy_amount' => 10,
      ],
      'sub_appid' => 'wxd678efh567hg6999',
    ],],
    'time_start' => '2019-12-31T15:59:60+08:00',
    'time_expire' => '2019-12-31T15:59:60+08:00',
    'notify_url' => 'https://yourapp.com/notify',
    'limit_pay' => ['string'],
    'combine_payer_info' => [
      'openid' => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
      'sub_openid' => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
    ],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/combine-transactions/native')->postAsync([
  'json' => [
    'combine_appid' => 'wxd678efh567hg6787',
    'combine_mchid' => '1900000109',
    'combine_out_trade_no' => 'P20150806125346',
    'scene_info' => [
      'device_id' => 'POS1:1',
      'payer_client_ip' => '14.17.22.32',
    ],
    'sub_orders' => [[
      'mchid' => '1900000109',
      'attach' => '深圳分店',
      'amount' => [
        'total_amount' => 100,
        'currency' => 'CNY',
      ],
      'out_trade_no' => '20150806125346',
      'sub_mchid' => '1900000109',
      'goods_tag' => 'WXG',
      'description' => '腾讯充值中心-QQ会员充值',
      'settle_info' => [
        'profit_sharing' => true,
        'subsidy_amount' => 10,
      ],
      'sub_appid' => 'wxd678efh567hg6999',
    ],],
    'time_start' => '2019-12-31T15:59:60+08:00',
    'time_expire' => '2019-12-31T15:59:60+08:00',
    'notify_url' => 'https://yourapp.com/notify',
    'limit_pay' => ['string'],
    'combine_payer_info' => [
      'openid' => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
      'sub_openid' => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
    ],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/combine-transactions/native']->postAsync([
  'json' => [
    'combine_appid' => 'wxd678efh567hg6787',
    'combine_mchid' => '1900000109',
    'combine_out_trade_no' => 'P20150806125346',
    'scene_info' => [
      'device_id' => 'POS1:1',
      'payer_client_ip' => '14.17.22.32',
    ],
    'sub_orders' => [[
      'mchid' => '1900000109',
      'attach' => '深圳分店',
      'amount' => [
        'total_amount' => 100,
        'currency' => 'CNY',
      ],
      'out_trade_no' => '20150806125346',
      'sub_mchid' => '1900000109',
      'goods_tag' => 'WXG',
      'description' => '腾讯充值中心-QQ会员充值',
      'settle_info' => [
        'profit_sharing' => true,
        'subsidy_amount' => 10,
      ],
      'sub_appid' => 'wxd678efh567hg6999',
    ],],
    'time_start' => '2019-12-31T15:59:60+08:00',
    'time_expire' => '2019-12-31T15:59:60+08:00',
    'notify_url' => 'https://yourapp.com/notify',
    'limit_pay' => ['string'],
    'combine_payer_info' => [
      'openid' => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
      'sub_openid' => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
    ],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->combineTransactions->native->post([
  'json' => [
    'combine_appid' => 'wxd678efh567hg6787',
    'combine_mchid' => '1900000109',
    'combine_out_trade_no' => 'P20150806125346',
    'scene_info' => [
      'device_id' => 'POS1:1',
      'payer_client_ip' => '14.17.22.32',
    ],
    'sub_orders' => [[
      'mchid' => '1900000109',
      'attach' => '深圳分店',
      'amount' => [
        'total_amount' => 100,
        'currency' => 'CNY',
      ],
      'out_trade_no' => '20150806125346',
      'sub_mchid' => '1900000109',
      'goods_tag' => 'WXG',
      'description' => '腾讯充值中心-QQ会员充值',
      'settle_info' => [
        'profit_sharing' => true,
        'subsidy_amount' => 10,
      ],
      'sub_appid' => 'wxd678efh567hg6999',
    ],],
    'time_start' => '2019-12-31T15:59:60+08:00',
    'time_expire' => '2019-12-31T15:59:60+08:00',
    'notify_url' => 'https://yourapp.com/notify',
    'limit_pay' => ['string'],
    'combine_payer_info' => [
      'openid' => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
      'sub_openid' => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
    ],
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/combine-transactions/native')->post([
  'json' => [
    'combine_appid' => 'wxd678efh567hg6787',
    'combine_mchid' => '1900000109',
    'combine_out_trade_no' => 'P20150806125346',
    'scene_info' => [
      'device_id' => 'POS1:1',
      'payer_client_ip' => '14.17.22.32',
    ],
    'sub_orders' => [[
      'mchid' => '1900000109',
      'attach' => '深圳分店',
      'amount' => [
        'total_amount' => 100,
        'currency' => 'CNY',
      ],
      'out_trade_no' => '20150806125346',
      'sub_mchid' => '1900000109',
      'goods_tag' => 'WXG',
      'description' => '腾讯充值中心-QQ会员充值',
      'settle_info' => [
        'profit_sharing' => true,
        'subsidy_amount' => 10,
      ],
      'sub_appid' => 'wxd678efh567hg6999',
    ],],
    'time_start' => '2019-12-31T15:59:60+08:00',
    'time_expire' => '2019-12-31T15:59:60+08:00',
    'notify_url' => 'https://yourapp.com/notify',
    'limit_pay' => ['string'],
    'combine_payer_info' => [
      'openid' => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
      'sub_openid' => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
    ],
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/combine-transactions/native']->post([
  'json' => [
    'combine_appid' => 'wxd678efh567hg6787',
    'combine_mchid' => '1900000109',
    'combine_out_trade_no' => 'P20150806125346',
    'scene_info' => [
      'device_id' => 'POS1:1',
      'payer_client_ip' => '14.17.22.32',
    ],
    'sub_orders' => [[
      'mchid' => '1900000109',
      'attach' => '深圳分店',
      'amount' => [
        'total_amount' => 100,
        'currency' => 'CNY',
      ],
      'out_trade_no' => '20150806125346',
      'sub_mchid' => '1900000109',
      'goods_tag' => 'WXG',
      'description' => '腾讯充值中心-QQ会员充值',
      'settle_info' => [
        'profit_sharing' => true,
        'subsidy_amount' => 10,
      ],
      'sub_appid' => 'wxd678efh567hg6999',
    ],],
    'time_start' => '2019-12-31T15:59:60+08:00',
    'time_expire' => '2019-12-31T15:59:60+08:00',
    'notify_url' => 'https://yourapp.com/notify',
    'limit_pay' => ['string'],
    'combine_payer_info' => [
      'openid' => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
      'sub_openid' => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
    ],
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| code_url | string | 二维码链接

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/pay/combine/chapter3_10.shtml)