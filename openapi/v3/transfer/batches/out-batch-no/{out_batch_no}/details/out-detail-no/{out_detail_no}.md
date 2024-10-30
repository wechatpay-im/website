---
title: 商家明细单号查询明细单
description: 商户可以通过该接口查询单笔转账明细单。
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| out_detail_no | string | 商家明细单号
| out_batch_no | string | 商家批次单号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->transfer->batches->outBatchNo->_out_batch_no_->details->outDetailNo->_out_detail_no_->getAsync([
  'out_detail_no' => 'x23zy545Bd5436',
  'out_batch_no' => 'plfk2020042013',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/transfer/batches/out-batch-no/{out_batch_no}/details/out-detail-no/{out_detail_no}')->getAsync([
  'out_detail_no' => 'x23zy545Bd5436',
  'out_batch_no' => 'plfk2020042013',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/transfer/batches/out-batch-no/{out_batch_no}/details/out-detail-no/{out_detail_no}']->getAsync([
  'out_detail_no' => 'x23zy545Bd5436',
  'out_batch_no' => 'plfk2020042013',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->transfer->batches->outBatchNo->_out_batch_no_->details->outDetailNo->_out_detail_no_->get([
  'out_detail_no' => 'x23zy545Bd5436',
  'out_batch_no' => 'plfk2020042013',
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/transfer/batches/out-batch-no/{out_batch_no}/details/out-detail-no/{out_detail_no}')->get([
  'out_detail_no' => 'x23zy545Bd5436',
  'out_batch_no' => 'plfk2020042013',
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/transfer/batches/out-batch-no/{out_batch_no}/details/out-detail-no/{out_detail_no}']->get([
  'out_detail_no' => 'x23zy545Bd5436',
  'out_batch_no' => 'plfk2020042013',
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

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/pay/transfer/chapter3_5.shtml)
