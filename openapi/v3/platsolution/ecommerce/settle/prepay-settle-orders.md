---
title: 个人收款-申请批量结算
description: 申请个人收款批量结算
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| appid {data-required data-indent=1} | string | 发起方AppID
| out_settle_batch_no {data-required data-indent=1} | string | 商户结算批次单号
| individual_auth_id {data-required data-indent=1} | string | 商品单个人收款方受理授权ID
| notify_url {data-required data-indent=1} | string | 通知地址
| description {data-required data-indent=1} | string | 收款方描述
| trade_scenario {data-required data-indent=1} | string | 交易场景<br/>`RECOMMERCE` 枚举值
| settle_info_list {data-required data-indent=1} | object[] {data-tooltip="对应PHP的array"} | 结算信息列表
| out_settle_no {data-required data-indent=2} | string | 商户结算单号
| transaction_id {data-required data-indent=2} | string | 微信支付订单号
| settle_detail_info_list {data-required data-indent=2} | object[] {data-tooltip="对应PHP的array"} | 结算明细单列表
| out_settle_detail_no {data-required data-indent=3} | string | 商户结算明细单号
| settle_type {data-required data-indent=3} | string | 结算类型
| receiver_type {data-required data-indent=3} | string | 接收方类型
| receiver_account {data-required data-indent=3} | string | 接收方账号
| amount {data-required data-indent=3} | object {data-tooltip="对应PHP的array"} | 金额
| amount {data-required data-indent=4} | number | 金额
| currency {data-indent=4} | string | 币种

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->platsolution->ecommerce->settle->prepaySettleOrders->postAsync([
  'json' => [
    'appid'               => 'WXA12368855126622',
    'out_settle_batch_no' => '1236698745558870',
    'individual_auth_id'  => '256322110225',
    'notify_url'          => 'https://www.weixin.qq.com/wxpay/pay.php',
    'description'         => '共计2笔订单，订单金额xxx元，平台服务费xxx元，合计收款xxx元',
    'trade_scenario'      => 'RECOMMERCE',
    'settle_info_list'    => [[
      'out_settle_no'           => '12369666555136622',
      'transaction_id'          => '4207752501201407033233368018',
      'settle_detail_info_list' => [[
        'out_settle_detail_no' => '123688556699666554',
        'settle_type'          => 'RECEIVE',
        'receiver_type'        => 'MERCHANT',
        'receiver_account'     => '1234567890',
        'amount'               => [
          'amount'   => 11000,
          'currency' => 'CNY',
        ],
      ],],
    ],],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/platsolution/ecommerce/settle/prepay-settle-orders')->postAsync([
  'json' => [
    'appid'               => 'WXA12368855126622',
    'out_settle_batch_no' => '1236698745558870',
    'individual_auth_id'  => '256322110225',
    'notify_url'          => 'https://www.weixin.qq.com/wxpay/pay.php',
    'description'         => '共计2笔订单，订单金额xxx元，平台服务费xxx元，合计收款xxx元',
    'trade_scenario'      => 'RECOMMERCE',
    'settle_info_list'    => [[
      'out_settle_no'           => '12369666555136622',
      'transaction_id'          => '4207752501201407033233368018',
      'settle_detail_info_list' => [[
        'out_settle_detail_no' => '123688556699666554',
        'settle_type'          => 'RECEIVE',
        'receiver_type'        => 'MERCHANT',
        'receiver_account'     => '1234567890',
        'amount'               => [
          'amount'   => 11000,
          'currency' => 'CNY',
        ],
      ],],
    ],],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/platsolution/ecommerce/settle/prepay-settle-orders']->postAsync([
  'json' => [
    'appid'               => 'WXA12368855126622',
    'out_settle_batch_no' => '1236698745558870',
    'individual_auth_id'  => '256322110225',
    'notify_url'          => 'https://www.weixin.qq.com/wxpay/pay.php',
    'description'         => '共计2笔订单，订单金额xxx元，平台服务费xxx元，合计收款xxx元',
    'trade_scenario'      => 'RECOMMERCE',
    'settle_info_list'    => [[
      'out_settle_no'           => '12369666555136622',
      'transaction_id'          => '4207752501201407033233368018',
      'settle_detail_info_list' => [[
        'out_settle_detail_no' => '123688556699666554',
        'settle_type'          => 'RECEIVE',
        'receiver_type'        => 'MERCHANT',
        'receiver_account'     => '1234567890',
        'amount'               => [
          'amount'   => 11000,
          'currency' => 'CNY',
        ],
      ],],
    ],],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->platsolution->ecommerce->settle->prepaySettleOrders->post([
  'json' => [
    'appid'               => 'WXA12368855126622',
    'out_settle_batch_no' => '1236698745558870',
    'individual_auth_id'  => '256322110225',
    'notify_url'          => 'https://www.weixin.qq.com/wxpay/pay.php',
    'description'         => '共计2笔订单，订单金额xxx元，平台服务费xxx元，合计收款xxx元',
    'trade_scenario'      => 'RECOMMERCE',
    'settle_info_list'    => [[
      'out_settle_no'           => '12369666555136622',
      'transaction_id'          => '4207752501201407033233368018',
      'settle_detail_info_list' => [[
        'out_settle_detail_no' => '123688556699666554',
        'settle_type'          => 'RECEIVE',
        'receiver_type'        => 'MERCHANT',
        'receiver_account'     => '1234567890',
        'amount'               => [
          'amount'   => 11000,
          'currency' => 'CNY',
        ],
      ],],
    ],],
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/platsolution/ecommerce/settle/prepay-settle-orders')->post([
  'json' => [
    'appid'               => 'WXA12368855126622',
    'out_settle_batch_no' => '1236698745558870',
    'individual_auth_id'  => '256322110225',
    'notify_url'          => 'https://www.weixin.qq.com/wxpay/pay.php',
    'description'         => '共计2笔订单，订单金额xxx元，平台服务费xxx元，合计收款xxx元',
    'trade_scenario'      => 'RECOMMERCE',
    'settle_info_list'    => [[
      'out_settle_no'           => '12369666555136622',
      'transaction_id'          => '4207752501201407033233368018',
      'settle_detail_info_list' => [[
        'out_settle_detail_no' => '123688556699666554',
        'settle_type'          => 'RECEIVE',
        'receiver_type'        => 'MERCHANT',
        'receiver_account'     => '1234567890',
        'amount'               => [
          'amount'   => 11000,
          'currency' => 'CNY',
        ],
      ],],
    ],],
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/platsolution/ecommerce/settle/prepay-settle-orders']->post([
  'json' => [
    'appid'               => 'WXA12368855126622',
    'out_settle_batch_no' => '1236698745558870',
    'individual_auth_id'  => '256322110225',
    'notify_url'          => 'https://www.weixin.qq.com/wxpay/pay.php',
    'description'         => '共计2笔订单，订单金额xxx元，平台服务费xxx元，合计收款xxx元',
    'trade_scenario'      => 'RECOMMERCE',
    'settle_info_list'    => [[
      'out_settle_no'           => '12369666555136622',
      'transaction_id'          => '4207752501201407033233368018',
      'settle_detail_info_list' => [[
        'out_settle_detail_no' => '123688556699666554',
        'settle_type'          => 'RECEIVE',
        'receiver_type'        => 'MERCHANT',
        'receiver_account'     => '1234567890',
        'amount'               => [
          'amount'   => 11000,
          'currency' => 'CNY',
        ],
      ],],
    ],],
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| out_settle_batch_no {data-required} | string | 商户结算批次单号
| settle_batch_no {data-required} | string | 微信支付结算批次单号
| individual_auth_id {data-required} | string | 商品单个人收款方受理授权ID
| description {data-required} | string | 收款方描述
| state {data-required} | string | 批次状态
| trade_scenario {data-required} | string | 交易场景
| create_time {data-required} | string | 批次创建时间
| finish_time | string | 批次完成时间

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/docs/merchant/apis/personal-collections/apply-prepay-settle-orders.html)
