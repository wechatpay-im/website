---
title: 微信明细单号查询明细单
description: 商户可以通过该接口查询单笔转账明细单。
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| batch_id | string | 微信批次单号
| detail_id | string | 微信明细单号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->transfer->batches->batchId->_batch_id_->details->detailId->_detail_id_->getAsync([
  'batch_id' => '1030000071100999991182020050700019480001',
  'detail_id' => '1040000071100999991182020050700019500100',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/transfer/batches/batch-id/{batch_id}/details/detail-id/{detail_id}')->getAsync([
  'batch_id' => '1030000071100999991182020050700019480001',
  'detail_id' => '1040000071100999991182020050700019500100',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/transfer/batches/batch-id/{batch_id}/details/detail-id/{detail_id}']->getAsync([
  'batch_id' => '1030000071100999991182020050700019480001',
  'detail_id' => '1040000071100999991182020050700019500100',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->transfer->batches->batchId->_batch_id_->details->detailId->_detail_id_->get([
  'batch_id' => '1030000071100999991182020050700019480001',
  'detail_id' => '1040000071100999991182020050700019500100',
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/transfer/batches/batch-id/{batch_id}/details/detail-id/{detail_id}')->get([
  'batch_id' => '1030000071100999991182020050700019480001',
  'detail_id' => '1040000071100999991182020050700019500100',
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/transfer/batches/batch-id/{batch_id}/details/detail-id/{detail_id}']->get([
  'batch_id' => '1030000071100999991182020050700019480001',
  'detail_id' => '1040000071100999991182020050700019500100',
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| mchid | string | 商户号
| out_batch_no | string | 商家批次单号
| batch_id | string | 微信批次单号
| appid | string | 直连商户的appid
| out_detail_no | string | 商家明细单号
| detail_id | string | 微信明细单号
| detail_status | string | 明细状态
| transfer_amount | integer | 转账金额
| transfer_remark | string | 转账备注
| fail_reason | string | 明细失败原因
| openid | string | 用户在直连商户应用下的用户标示
| user_name | string | 收款用户姓名
| initiate_time | string | 转账发起时间
| update_time | string | 明细更新时间

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/pay/transfer/chapter3_3.shtml)
