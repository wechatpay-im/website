---
title: 发起保证金赔付用户运费
description: 商户可调用该接口从保证金账户赔付给用户。注：接口频率限制为100次/s
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| sub_mchid {data-indent=1} | string | 二级商户号
| sp_appid {data-indent=1} | string | 公众账号ID
| receiver {data-required data-indent=1} | object {data-tooltip="对应PHP的array"} | 赔付用户信息
| transaction_info {data-indent=2} | object {data-tooltip="对应PHP的array"} | 转账接收方订单信息
| transaction_id {data-required data-indent=3} | string | 交易订单号
| type {data-indent=3} | string | 转账接收方订单类型<br/>`WXPAY` \| `WXVALUE` 枚举值之一
| user_info {data-indent=2} | object {data-tooltip="对应PHP的array"} | 转账接收方用户
| sp_openid {data-indent=3} | string | 转账接收方用户 openid
| out_bill_no {data-required data-indent=1} | string | 商户单号
| amount {data-indent=1} | number | 赔付金额
| transfer_remark {data-required data-indent=1} | string | 赔付原因
| transfer_scene_id {data-indent=1} | string | 转账场景ID
| user_recv_perception {data-indent=1} | string | 用户收款感知

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->platsolution->ecommerce->mchTransfer->depositShippingCostCompensationBills->postAsync([
  'json' => [
    'sub_mchid'            => '1900000109',
    'sp_appid'             => 'wx8888888888888888',
    'receiver'             => [
      'transaction_info' => [
        'transaction_id' => '1217752501201407033233368018',
        'type'           => 'WXPAY',
      ],
      'user_info'        => [
        'sp_openid' => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
      ],
    ],
    'out_bill_no'          => 'plfk2020042013',
    'amount'               => 10000,
    'transfer_remark'      => '直播违规扣罚',
    'transfer_scene_id'    => '1001',
    'user_recv_perception' => '退货运费补偿',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/platsolution/ecommerce/mch-transfer/deposit-shipping-cost-compensation-bills')->postAsync([
  'json' => [
    'sub_mchid'            => '1900000109',
    'sp_appid'             => 'wx8888888888888888',
    'receiver'             => [
      'transaction_info' => [
        'transaction_id' => '1217752501201407033233368018',
        'type'           => 'WXPAY',
      ],
      'user_info'        => [
        'sp_openid' => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
      ],
    ],
    'out_bill_no'          => 'plfk2020042013',
    'amount'               => 10000,
    'transfer_remark'      => '直播违规扣罚',
    'transfer_scene_id'    => '1001',
    'user_recv_perception' => '退货运费补偿',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/platsolution/ecommerce/mch-transfer/deposit-shipping-cost-compensation-bills']->postAsync([
  'json' => [
    'sub_mchid'            => '1900000109',
    'sp_appid'             => 'wx8888888888888888',
    'receiver'             => [
      'transaction_info' => [
        'transaction_id' => '1217752501201407033233368018',
        'type'           => 'WXPAY',
      ],
      'user_info'        => [
        'sp_openid' => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
      ],
    ],
    'out_bill_no'          => 'plfk2020042013',
    'amount'               => 10000,
    'transfer_remark'      => '直播违规扣罚',
    'transfer_scene_id'    => '1001',
    'user_recv_perception' => '退货运费补偿',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->platsolution->ecommerce->mchTransfer->depositShippingCostCompensationBills->post([
  'json' => [
    'sub_mchid'            => '1900000109',
    'sp_appid'             => 'wx8888888888888888',
    'receiver'             => [
      'transaction_info' => [
        'transaction_id' => '1217752501201407033233368018',
        'type'           => 'WXPAY',
      ],
      'user_info'        => [
        'sp_openid' => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
      ],
    ],
    'out_bill_no'          => 'plfk2020042013',
    'amount'               => 10000,
    'transfer_remark'      => '直播违规扣罚',
    'transfer_scene_id'    => '1001',
    'user_recv_perception' => '退货运费补偿',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/platsolution/ecommerce/mch-transfer/deposit-shipping-cost-compensation-bills')->post([
  'json' => [
    'sub_mchid'            => '1900000109',
    'sp_appid'             => 'wx8888888888888888',
    'receiver'             => [
      'transaction_info' => [
        'transaction_id' => '1217752501201407033233368018',
        'type'           => 'WXPAY',
      ],
      'user_info'        => [
        'sp_openid' => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
      ],
    ],
    'out_bill_no'          => 'plfk2020042013',
    'amount'               => 10000,
    'transfer_remark'      => '直播违规扣罚',
    'transfer_scene_id'    => '1001',
    'user_recv_perception' => '退货运费补偿',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/platsolution/ecommerce/mch-transfer/deposit-shipping-cost-compensation-bills']->post([
  'json' => [
    'sub_mchid'            => '1900000109',
    'sp_appid'             => 'wx8888888888888888',
    'receiver'             => [
      'transaction_info' => [
        'transaction_id' => '1217752501201407033233368018',
        'type'           => 'WXPAY',
      ],
      'user_info'        => [
        'sp_openid' => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
      ],
    ],
    'out_bill_no'          => 'plfk2020042013',
    'amount'               => 10000,
    'transfer_remark'      => '直播违规扣罚',
    'transfer_scene_id'    => '1001',
    'user_recv_perception' => '退货运费补偿',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| sp_mchid {data-required} | string | 服务商商户号
| sub_mchid | string | 二级商户号
| sub_appid | string | 二级商户AppID
| receiver_detail {data-required} | object {data-tooltip="对应PHP的array"} | 转账接收方信息
| receiver {data-indent=1} | object {data-tooltip="对应PHP的array"} | 转账接收者信息
| transaction_info {data-indent=2} | object {data-tooltip="对应PHP的array"} | 转账接收方订单信息
| transaction_id {data-required data-indent=3} | string | 交易订单号
| type {data-indent=3} | string | 转账接收方订单类型<br/>`WXPAY` \| `WXVALUE` 枚举值之一
| user_info {data-indent=2} | object {data-tooltip="对应PHP的array"} | 转账接收方用户
| sp_openid {data-indent=3} | string | 转账接收方用户 openid
| out_bill_no {data-required} | string | 商户单号
| amount | number | 赔付金额
| transfer_remark {data-required} | string | 赔付原因
| bill_id {data-required} | string | 微信支付转账单号
| state {data-required} | string | 赔付状态<br/>`ACCEPTED` \| `SUCCESS` \| `CLOSED` \| `WAIT_USER_CONFIRM` \| `CANCELING` \| `CANCELLED` 枚举值之一
| accept_time {data-required} | string | 受理时间
| success_time | string | 成功时间
| sponsor_mchid | string | 出资商户号

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4013504202)
