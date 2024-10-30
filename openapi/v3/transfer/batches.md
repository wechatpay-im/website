---
title: 发起批量转账
description: 商户可以通过该接口同时向多个用户微信零钱进行转账操作。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| json | object | 声明请求的`JSON`数据结构
| appid {data-indent=1} | string | 直连商户的appid
| out_batch_no {data-indent=1} | string | 商家批次单号
| batch_name {data-indent=1} | string | 批次名称
| batch_remark {data-indent=1} | string | 批次备注
| total_amount {data-indent=1} | integer | 转账总金额
| total_num {data-indent=1} | integer | 转账总笔数
| transfer_detail_list {data-indent=1} | object[] | 转账明细列表
| out_detail_no {data-indent=2} | string | 商家明细单号
| transfer_amount {data-indent=2} | integer | 转账金额
| transfer_remark {data-indent=2} | string | 转账备注
| openid {data-indent=2} | string | 用户在直连商户应用下的用户标示
| user_name {data-indent=2} | string | 收款用户姓名
| user_id_card {data-indent=2} | string | 收款用户身份证
| transfer_scene_id {data-indent=1} | string | 转账场景ID
| notify_url {data-indent=1} | string | 通知地址
| headers | object | 声明请求的头参数
| Wechatpay-Serial {data-indent=1} | string | 微信支付平台公钥证书序列号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->transfer->batches->postAsync([
  'json' => [
    'appid' => 'wxf636efh567hg4356',
    'out_batch_no' => 'plfk2020042013',
    'batch_name' => '2019年1月深圳分部报销单',
    'batch_remark' => '2019年1月深圳分部报销单',
    'total_amount' => 4000000,
    'total_num' => 200,
    'transfer_detail_list' => [[
      'out_detail_no' => 'x23zy545Bd5436',
      'transfer_amount' => 200000,
      'transfer_remark' => '2020年4月报销',
      'openid' => 'o-MYE42l80oelYMDE34nYD456Xoy',
      'user_name' => '757b340b45ebef5467rter35gf464344v3542sdf4t6re4tb4f54ty45t4yyry45',
      'user_id_card' => '8609cb22e1774a50a930e414cc71eca06121bcd266335cda230d24a7886a8d9f',
    ],],
    'transfer_scene_id' => '1001',
    'notify_url' => 'https://www.weixin.qq.com/wxpay/pay.php',
  ],
  'headers' => [
    'Wechatpay-Serial' => '',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/transfer/batches')->postAsync([
  'json' => [
    'appid' => 'wxf636efh567hg4356',
    'out_batch_no' => 'plfk2020042013',
    'batch_name' => '2019年1月深圳分部报销单',
    'batch_remark' => '2019年1月深圳分部报销单',
    'total_amount' => 4000000,
    'total_num' => 200,
    'transfer_detail_list' => [[
      'out_detail_no' => 'x23zy545Bd5436',
      'transfer_amount' => 200000,
      'transfer_remark' => '2020年4月报销',
      'openid' => 'o-MYE42l80oelYMDE34nYD456Xoy',
      'user_name' => '757b340b45ebef5467rter35gf464344v3542sdf4t6re4tb4f54ty45t4yyry45',
      'user_id_card' => '8609cb22e1774a50a930e414cc71eca06121bcd266335cda230d24a7886a8d9f',
    ],],
    'transfer_scene_id' => '1001',
    'notify_url' => 'https://www.weixin.qq.com/wxpay/pay.php',
  ],
  'headers' => [
    'Wechatpay-Serial' => '',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/transfer/batches']->postAsync([
  'json' => [
    'appid' => 'wxf636efh567hg4356',
    'out_batch_no' => 'plfk2020042013',
    'batch_name' => '2019年1月深圳分部报销单',
    'batch_remark' => '2019年1月深圳分部报销单',
    'total_amount' => 4000000,
    'total_num' => 200,
    'transfer_detail_list' => [[
      'out_detail_no' => 'x23zy545Bd5436',
      'transfer_amount' => 200000,
      'transfer_remark' => '2020年4月报销',
      'openid' => 'o-MYE42l80oelYMDE34nYD456Xoy',
      'user_name' => '757b340b45ebef5467rter35gf464344v3542sdf4t6re4tb4f54ty45t4yyry45',
      'user_id_card' => '8609cb22e1774a50a930e414cc71eca06121bcd266335cda230d24a7886a8d9f',
    ],],
    'transfer_scene_id' => '1001',
    'notify_url' => 'https://www.weixin.qq.com/wxpay/pay.php',
  ],
  'headers' => [
    'Wechatpay-Serial' => '',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->transfer->batches->post([
  'json' => [
    'appid' => 'wxf636efh567hg4356',
    'out_batch_no' => 'plfk2020042013',
    'batch_name' => '2019年1月深圳分部报销单',
    'batch_remark' => '2019年1月深圳分部报销单',
    'total_amount' => 4000000,
    'total_num' => 200,
    'transfer_detail_list' => [[
      'out_detail_no' => 'x23zy545Bd5436',
      'transfer_amount' => 200000,
      'transfer_remark' => '2020年4月报销',
      'openid' => 'o-MYE42l80oelYMDE34nYD456Xoy',
      'user_name' => '757b340b45ebef5467rter35gf464344v3542sdf4t6re4tb4f54ty45t4yyry45',
      'user_id_card' => '8609cb22e1774a50a930e414cc71eca06121bcd266335cda230d24a7886a8d9f',
    ],],
    'transfer_scene_id' => '1001',
    'notify_url' => 'https://www.weixin.qq.com/wxpay/pay.php',
  ],
  'headers' => [
    'Wechatpay-Serial' => '',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/transfer/batches')->post([
  'json' => [
    'appid' => 'wxf636efh567hg4356',
    'out_batch_no' => 'plfk2020042013',
    'batch_name' => '2019年1月深圳分部报销单',
    'batch_remark' => '2019年1月深圳分部报销单',
    'total_amount' => 4000000,
    'total_num' => 200,
    'transfer_detail_list' => [[
      'out_detail_no' => 'x23zy545Bd5436',
      'transfer_amount' => 200000,
      'transfer_remark' => '2020年4月报销',
      'openid' => 'o-MYE42l80oelYMDE34nYD456Xoy',
      'user_name' => '757b340b45ebef5467rter35gf464344v3542sdf4t6re4tb4f54ty45t4yyry45',
      'user_id_card' => '8609cb22e1774a50a930e414cc71eca06121bcd266335cda230d24a7886a8d9f',
    ],],
    'transfer_scene_id' => '1001',
    'notify_url' => 'https://www.weixin.qq.com/wxpay/pay.php',
  ],
  'headers' => [
    'Wechatpay-Serial' => '',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/transfer/batches']->post([
  'json' => [
    'appid' => 'wxf636efh567hg4356',
    'out_batch_no' => 'plfk2020042013',
    'batch_name' => '2019年1月深圳分部报销单',
    'batch_remark' => '2019年1月深圳分部报销单',
    'total_amount' => 4000000,
    'total_num' => 200,
    'transfer_detail_list' => [[
      'out_detail_no' => 'x23zy545Bd5436',
      'transfer_amount' => 200000,
      'transfer_remark' => '2020年4月报销',
      'openid' => 'o-MYE42l80oelYMDE34nYD456Xoy',
      'user_name' => '757b340b45ebef5467rter35gf464344v3542sdf4t6re4tb4f54ty45t4yyry45',
      'user_id_card' => '8609cb22e1774a50a930e414cc71eca06121bcd266335cda230d24a7886a8d9f',
    ],],
    'transfer_scene_id' => '1001',
    'notify_url' => 'https://www.weixin.qq.com/wxpay/pay.php',
  ],
  'headers' => [
    'Wechatpay-Serial' => '',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| out_batch_no | string | 商家批次单号
| batch_id | string | 微信批次单号
| create_time | string | 批次创建时间
| batch_status | string | 批次状态

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/pay/transfer/chapter3_1.shtml)