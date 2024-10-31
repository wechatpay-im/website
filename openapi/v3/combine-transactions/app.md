---
title: 合单下单-APP支付
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
| detail {data-indent=2} | string | 商品详情
| goods_tag {data-indent=2} | string | 订单优惠标记
| description {data-indent=2} | string | 商品描述
| settle_info {data-indent=2} | object | 结算信息
| profit_sharing {data-indent=3} | boolean | 是否指定分账
| subsidy_amount {data-indent=3} | integer | 补差金额
| sub_appid {data-indent=2} | string | 子商户应用ID
| combine_payer_info {data-indent=1} | object | 支付者
| openid {data-indent=2} | string | 用户标识
| time_start {data-indent=1} | string | 交易起始时间
| time_expire {data-indent=1} | string | 交易结束时间
| notify_url {data-indent=1} | string | 通知地址
| limit_pay {data-indent=1} | string[] | `no_balance` \| `no_debit` \| `balance_only` 枚举值之一
| contract_info {data-indent=1} | object | 预签约信息
| mchid {data-indent=2} | string | 签约商户号
| appid {data-indent=2} | string | 签约商户AppID
| out_contract_code {data-indent=2} | string | 签约商户协议号
| plan_id {data-indent=2} | number | 委托代扣协议模板ID
| contract_display_account {data-indent=2} | string | 用户账户展示名称
| notify_url {data-indent=2} | string | 回调通知地址

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->combineTransactions->app->postAsync([
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
      'detail' => '买单费用',
      'goods_tag' => 'WXG',
      'description' => '腾讯充值中心-QQ会员充值',
      'settle_info' => [
        'profit_sharing' => true,
        'subsidy_amount' => 10,
      ],
      'sub_appid' => 'wxd678efh567hg6999',
    ],],
    'combine_payer_info' => [
      'openid' => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
    ],
    'time_start' => '2019-12-31T15:59:60+08:00',
    'time_expire' => '2019-12-31T15:59:60+08:00',
    'notify_url' => 'https://yourapp.com/notify',
    'limit_pay' => ['string'],
    'contract_info' => [
      'mchid' => '1900000109',
      'appid' => 'wxd678efh567hg6787',
      'out_contract_code' => 'wxwtdk20200910100000',
      'plan_id' => 12535,
      'contract_display_account' => '微信代扣用户A',
      'notify_url' => 'https://yourapp.com/notify',
    ],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/combine-transactions/app')->postAsync([
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
      'detail' => '买单费用',
      'goods_tag' => 'WXG',
      'description' => '腾讯充值中心-QQ会员充值',
      'settle_info' => [
        'profit_sharing' => true,
        'subsidy_amount' => 10,
      ],
      'sub_appid' => 'wxd678efh567hg6999',
    ],],
    'combine_payer_info' => [
      'openid' => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
    ],
    'time_start' => '2019-12-31T15:59:60+08:00',
    'time_expire' => '2019-12-31T15:59:60+08:00',
    'notify_url' => 'https://yourapp.com/notify',
    'limit_pay' => ['string'],
    'contract_info' => [
      'mchid' => '1900000109',
      'appid' => 'wxd678efh567hg6787',
      'out_contract_code' => 'wxwtdk20200910100000',
      'plan_id' => 12535,
      'contract_display_account' => '微信代扣用户A',
      'notify_url' => 'https://yourapp.com/notify',
    ],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/combine-transactions/app']->postAsync([
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
      'detail' => '买单费用',
      'goods_tag' => 'WXG',
      'description' => '腾讯充值中心-QQ会员充值',
      'settle_info' => [
        'profit_sharing' => true,
        'subsidy_amount' => 10,
      ],
      'sub_appid' => 'wxd678efh567hg6999',
    ],],
    'combine_payer_info' => [
      'openid' => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
    ],
    'time_start' => '2019-12-31T15:59:60+08:00',
    'time_expire' => '2019-12-31T15:59:60+08:00',
    'notify_url' => 'https://yourapp.com/notify',
    'limit_pay' => ['string'],
    'contract_info' => [
      'mchid' => '1900000109',
      'appid' => 'wxd678efh567hg6787',
      'out_contract_code' => 'wxwtdk20200910100000',
      'plan_id' => 12535,
      'contract_display_account' => '微信代扣用户A',
      'notify_url' => 'https://yourapp.com/notify',
    ],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->combineTransactions->app->post([
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
      'detail' => '买单费用',
      'goods_tag' => 'WXG',
      'description' => '腾讯充值中心-QQ会员充值',
      'settle_info' => [
        'profit_sharing' => true,
        'subsidy_amount' => 10,
      ],
      'sub_appid' => 'wxd678efh567hg6999',
    ],],
    'combine_payer_info' => [
      'openid' => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
    ],
    'time_start' => '2019-12-31T15:59:60+08:00',
    'time_expire' => '2019-12-31T15:59:60+08:00',
    'notify_url' => 'https://yourapp.com/notify',
    'limit_pay' => ['string'],
    'contract_info' => [
      'mchid' => '1900000109',
      'appid' => 'wxd678efh567hg6787',
      'out_contract_code' => 'wxwtdk20200910100000',
      'plan_id' => 12535,
      'contract_display_account' => '微信代扣用户A',
      'notify_url' => 'https://yourapp.com/notify',
    ],
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/combine-transactions/app')->post([
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
      'detail' => '买单费用',
      'goods_tag' => 'WXG',
      'description' => '腾讯充值中心-QQ会员充值',
      'settle_info' => [
        'profit_sharing' => true,
        'subsidy_amount' => 10,
      ],
      'sub_appid' => 'wxd678efh567hg6999',
    ],],
    'combine_payer_info' => [
      'openid' => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
    ],
    'time_start' => '2019-12-31T15:59:60+08:00',
    'time_expire' => '2019-12-31T15:59:60+08:00',
    'notify_url' => 'https://yourapp.com/notify',
    'limit_pay' => ['string'],
    'contract_info' => [
      'mchid' => '1900000109',
      'appid' => 'wxd678efh567hg6787',
      'out_contract_code' => 'wxwtdk20200910100000',
      'plan_id' => 12535,
      'contract_display_account' => '微信代扣用户A',
      'notify_url' => 'https://yourapp.com/notify',
    ],
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/combine-transactions/app']->post([
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
      'detail' => '买单费用',
      'goods_tag' => 'WXG',
      'description' => '腾讯充值中心-QQ会员充值',
      'settle_info' => [
        'profit_sharing' => true,
        'subsidy_amount' => 10,
      ],
      'sub_appid' => 'wxd678efh567hg6999',
    ],],
    'combine_payer_info' => [
      'openid' => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
    ],
    'time_start' => '2019-12-31T15:59:60+08:00',
    'time_expire' => '2019-12-31T15:59:60+08:00',
    'notify_url' => 'https://yourapp.com/notify',
    'limit_pay' => ['string'],
    'contract_info' => [
      'mchid' => '1900000109',
      'appid' => 'wxd678efh567hg6787',
      'out_contract_code' => 'wxwtdk20200910100000',
      'plan_id' => 12535,
      'contract_display_account' => '微信代扣用户A',
      'notify_url' => 'https://yourapp.com/notify',
    ],
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| prepay_id | string | 预支付交易会话标识
| contract_result | object | 预签约结果
| code {data-indent=1} | string | 签约结果码
| message {data-indent=1} | string | 签约结果描述信息

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/pay/combine/chapter3_1.shtml)
