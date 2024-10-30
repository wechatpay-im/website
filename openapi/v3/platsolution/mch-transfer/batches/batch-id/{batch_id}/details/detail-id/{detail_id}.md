---
title: 微信支付转账明细单号查询明细单
description: 微信商家转账明细单号查单接口。商户可以通过该接口查询单笔转账明细单。返回消息中包含微信明细单号、明细状态、转账金额、失败原因、收款用户姓名、收款用户OpenID等信息。
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| batch_id | string | 商家转账批次单号
| detail_id | string | 商家转账明细单号
| query | object | 声明请求的查询参数
| sub_mchid {data-indent=1} | string | 二级商户号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->platsolution->mchTransfer->batches->batchId->_batch_id_->details->detailId->_detail_id_->getAsync([
  'batch_id' => '131000011085109987515042023022300246500006',
  'detail_id' => '132000011085109987515042023022300246521006',
  'query' => [
    'sub_mchid' => '1900000109',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/platsolution/mch-transfer/batches/batch-id/{batch_id}/details/detail-id/{detail_id}')->getAsync([
  'batch_id' => '131000011085109987515042023022300246500006',
  'detail_id' => '132000011085109987515042023022300246521006',
  'query' => [
    'sub_mchid' => '1900000109',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/platsolution/mch-transfer/batches/batch-id/{batch_id}/details/detail-id/{detail_id}']->getAsync([
  'batch_id' => '131000011085109987515042023022300246500006',
  'detail_id' => '132000011085109987515042023022300246521006',
  'query' => [
    'sub_mchid' => '1900000109',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->platsolution->mchTransfer->batches->batchId->_batch_id_->details->detailId->_detail_id_->get([
  'batch_id' => '131000011085109987515042023022300246500006',
  'detail_id' => '132000011085109987515042023022300246521006',
  'query' => [
    'sub_mchid' => '1900000109',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/platsolution/mch-transfer/batches/batch-id/{batch_id}/details/detail-id/{detail_id}')->get([
  'batch_id' => '131000011085109987515042023022300246500006',
  'detail_id' => '132000011085109987515042023022300246521006',
  'query' => [
    'sub_mchid' => '1900000109',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/platsolution/mch-transfer/batches/batch-id/{batch_id}/details/detail-id/{detail_id}']->get([
  'batch_id' => '131000011085109987515042023022300246500006',
  'detail_id' => '132000011085109987515042023022300246521006',
  'query' => [
    'sub_mchid' => '1900000109',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| out_batch_no | string | 商家批次单号
| batch_id | string | 商家转账批次单号
| out_detail_no | string | 商家明细单号
| detail_id | string | 商家转账明细单号
| sp_appid | string | 服务商应用ID
| sub_mchid | string | 二级商户号
| sub_appid | string | 二级商户应用ID
| create_time | string | 转账发起时间
| detail_state | string | 明细状态
| transfer_amount | number | 转账金额
| transfer_remark | string | 转账备注
| fail_reason | string | 明细失败原因
| openid | string | 收款用户OpenID
| bank_type | string | 收款银行类型
| user_name | string | 收款用户姓名
| transfer_finish_time | string | 转账完成时间
| bank_refund_time | string | 银行退票时间

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/docs/partner/apis/platsolution-mch-transfer/transfer-batch/get-transfer-detail-by-no.html)
