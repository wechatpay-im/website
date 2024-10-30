---
title: 受理商家转账
description: 发起商家转账接口。商户可以通过该接口同时向多个已经确认预约的用户进行转账操作。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| json | object | 声明请求的`JSON`数据结构
| sub_mchid {data-indent=1} | string | 二级商户号
| sp_appid {data-indent=1} | string | 服务商AppID
| sub_appid {data-indent=1} | string | 二级商户AppID
| out_batch_no {data-indent=1} | string | 商家批次单号
| batch_name {data-indent=1} | string | 批次名称
| batch_remark {data-indent=1} | string | 批次备注
| total_amount {data-indent=1} | number | 转账总金额
| total_num {data-indent=1} | number | 转账总笔数
| transfer_scene_id {data-indent=1} | string | 转账场景ID
| transfer_detail_list {data-indent=1} | object[] | 转账明细列表
| out_detail_no {data-indent=2} | string | 商家明细单号
| transfer_amount {data-indent=2} | number | 转账金额
| transfer_remark {data-indent=2} | string | 转账备注
| reservation_id {data-indent=2} | string | 微信转账预约单号
| openid {data-indent=2} | string | 收款用户OpenID
| notify_url {data-indent=1} | string | 商户回调地址

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->platsolution->mchTransfer->batches->apply->postAsync([
  'json' => [
    'sub_mchid' => '1900001109',
    'sp_appid' => 'wxf636efh567hg4356',
    'sub_appid' => 'wxf636efh567hg4356',
    'out_batch_no' => 'sjzz20230223',
    'batch_name' => '2023年2月深圳分部报销单',
    'batch_remark' => '2023年2月深圳分部报销单',
    'total_amount' => 4000000,
    'total_num' => 200,
    'transfer_scene_id' => '1000',
    'transfer_detail_list' => [[
      'out_detail_no' => 'x23zy545Bd5436',
      'transfer_amount' => 200000,
      'transfer_remark' => '2023年2月报销',
      'reservation_id' => '1330000071100999991182020050700019480001',
      'openid' => 'o-MYE42l80oelYMDE34nYD456Xoy',
    ],],
    'notify_url' => 'https://www.weixin.qq.com/wxpay/pay.php',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/platsolution/mch-transfer/batches/apply')->postAsync([
  'json' => [
    'sub_mchid' => '1900001109',
    'sp_appid' => 'wxf636efh567hg4356',
    'sub_appid' => 'wxf636efh567hg4356',
    'out_batch_no' => 'sjzz20230223',
    'batch_name' => '2023年2月深圳分部报销单',
    'batch_remark' => '2023年2月深圳分部报销单',
    'total_amount' => 4000000,
    'total_num' => 200,
    'transfer_scene_id' => '1000',
    'transfer_detail_list' => [[
      'out_detail_no' => 'x23zy545Bd5436',
      'transfer_amount' => 200000,
      'transfer_remark' => '2023年2月报销',
      'reservation_id' => '1330000071100999991182020050700019480001',
      'openid' => 'o-MYE42l80oelYMDE34nYD456Xoy',
    ],],
    'notify_url' => 'https://www.weixin.qq.com/wxpay/pay.php',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/platsolution/mch-transfer/batches/apply']->postAsync([
  'json' => [
    'sub_mchid' => '1900001109',
    'sp_appid' => 'wxf636efh567hg4356',
    'sub_appid' => 'wxf636efh567hg4356',
    'out_batch_no' => 'sjzz20230223',
    'batch_name' => '2023年2月深圳分部报销单',
    'batch_remark' => '2023年2月深圳分部报销单',
    'total_amount' => 4000000,
    'total_num' => 200,
    'transfer_scene_id' => '1000',
    'transfer_detail_list' => [[
      'out_detail_no' => 'x23zy545Bd5436',
      'transfer_amount' => 200000,
      'transfer_remark' => '2023年2月报销',
      'reservation_id' => '1330000071100999991182020050700019480001',
      'openid' => 'o-MYE42l80oelYMDE34nYD456Xoy',
    ],],
    'notify_url' => 'https://www.weixin.qq.com/wxpay/pay.php',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->platsolution->mchTransfer->batches->apply->post([
  'json' => [
    'sub_mchid' => '1900001109',
    'sp_appid' => 'wxf636efh567hg4356',
    'sub_appid' => 'wxf636efh567hg4356',
    'out_batch_no' => 'sjzz20230223',
    'batch_name' => '2023年2月深圳分部报销单',
    'batch_remark' => '2023年2月深圳分部报销单',
    'total_amount' => 4000000,
    'total_num' => 200,
    'transfer_scene_id' => '1000',
    'transfer_detail_list' => [[
      'out_detail_no' => 'x23zy545Bd5436',
      'transfer_amount' => 200000,
      'transfer_remark' => '2023年2月报销',
      'reservation_id' => '1330000071100999991182020050700019480001',
      'openid' => 'o-MYE42l80oelYMDE34nYD456Xoy',
    ],],
    'notify_url' => 'https://www.weixin.qq.com/wxpay/pay.php',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/platsolution/mch-transfer/batches/apply')->post([
  'json' => [
    'sub_mchid' => '1900001109',
    'sp_appid' => 'wxf636efh567hg4356',
    'sub_appid' => 'wxf636efh567hg4356',
    'out_batch_no' => 'sjzz20230223',
    'batch_name' => '2023年2月深圳分部报销单',
    'batch_remark' => '2023年2月深圳分部报销单',
    'total_amount' => 4000000,
    'total_num' => 200,
    'transfer_scene_id' => '1000',
    'transfer_detail_list' => [[
      'out_detail_no' => 'x23zy545Bd5436',
      'transfer_amount' => 200000,
      'transfer_remark' => '2023年2月报销',
      'reservation_id' => '1330000071100999991182020050700019480001',
      'openid' => 'o-MYE42l80oelYMDE34nYD456Xoy',
    ],],
    'notify_url' => 'https://www.weixin.qq.com/wxpay/pay.php',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/platsolution/mch-transfer/batches/apply']->post([
  'json' => [
    'sub_mchid' => '1900001109',
    'sp_appid' => 'wxf636efh567hg4356',
    'sub_appid' => 'wxf636efh567hg4356',
    'out_batch_no' => 'sjzz20230223',
    'batch_name' => '2023年2月深圳分部报销单',
    'batch_remark' => '2023年2月深圳分部报销单',
    'total_amount' => 4000000,
    'total_num' => 200,
    'transfer_scene_id' => '1000',
    'transfer_detail_list' => [[
      'out_detail_no' => 'x23zy545Bd5436',
      'transfer_amount' => 200000,
      'transfer_remark' => '2023年2月报销',
      'reservation_id' => '1330000071100999991182020050700019480001',
      'openid' => 'o-MYE42l80oelYMDE34nYD456Xoy',
    ],],
    'notify_url' => 'https://www.weixin.qq.com/wxpay/pay.php',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| out_batch_no | string | 商家批次单号
| batch_id | string | 商家转账批次单号
| create_time | string | 批次创建时间
| batch_state | string | 批次状态

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/docs/partner/apis/platsolution-mch-transfer/transfer-batch/transfer-batch-apply.html)