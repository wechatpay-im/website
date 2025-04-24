---
title: 商家明细单号查询明细单
description: 普通直连商户可以通过该接口查询单笔品牌红包明细单。建议商户发放品牌红包后，间隔1分钟以上再调用该接口查单，避免查询失败
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| out_batch_no {data-required} | string | 商家品牌红包批次单号
| out_detail_no {data-required} | string | 商家品牌红包明细单号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->fundApp->brandRedpacket->brandMerchantOutBatches->_out_batch_no_->outDetails->_out_detail_no_->getAsync([
  'out_batch_no' => 'plfk2020042013',
  'out_detail_no' => 'x23zy545Bd5436',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/fund-app/brand-redpacket/brand-merchant-out-batches/{out_batch_no}/out-details/{out_detail_no}')->getAsync([
  'out_batch_no' => 'plfk2020042013',
  'out_detail_no' => 'x23zy545Bd5436',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/fund-app/brand-redpacket/brand-merchant-out-batches/{out_batch_no}/out-details/{out_detail_no}']->getAsync([
  'out_batch_no' => 'plfk2020042013',
  'out_detail_no' => 'x23zy545Bd5436',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->fundApp->brandRedpacket->brandMerchantOutBatches->_out_batch_no_->outDetails->_out_detail_no_->get([
  'out_batch_no' => 'plfk2020042013',
  'out_detail_no' => 'x23zy545Bd5436',
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/fund-app/brand-redpacket/brand-merchant-out-batches/{out_batch_no}/out-details/{out_detail_no}')->get([
  'out_batch_no' => 'plfk2020042013',
  'out_detail_no' => 'x23zy545Bd5436',
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/fund-app/brand-redpacket/brand-merchant-out-batches/{out_batch_no}/out-details/{out_detail_no}']->get([
  'out_batch_no' => 'plfk2020042013',
  'out_detail_no' => 'x23zy545Bd5436',
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| brand_mchid {data-required} | string | 品牌主商户号
| out_batch_no {data-required} | string | 商家品牌红包批次单号
| batch_no {data-required} | string | 微信支付品牌红包批次单号
| out_detail_no {data-required} | string | 商家品牌红包明细单号
| detail_no {data-required} | string | 微信支付品牌红包明细单号
| detail_state {data-required} | string | 品牌红包明细单状态<br/>`DETAIL_INIT` \| `DETAIL_WAIT_PAY` \| `DETAIL_PROCESSING` \| `DETAIL_SUCCESS` \| `DETAIL_FAIL` 枚举值之一
| amount {data-required} | number | 红包金额
| remark {data-required} | string | 红包备注
| fail_reason | string | 失败原因<br/>`ACCOUNT_FROZEN` \| `REAL_NAME_CHECK_FAIL` \| `NAME_NOT_CORRECT` \| `OPENID_INVALID` \| `TRANSFER_QUOTA_EXCEED` \| `DAY_RECEIVED_QUOTA_EXCEED` \| `DAY_RECEIVED_COUNT_EXCEED` \| `PRODUCT_AUTH_CHECK_FAIL` \| `OVERDUE_CLOSE` \| `ACCOUNT_NOT_EXIST` \| `TRANSFER_RISK` \| `USER_ACCOUNT_LIMIT` \| `FAIL_REASON_UNKNOWN` \| `PAYER_ACCOUNT_ABNORMAL` \| `PAYEE_ACCOUNT_ABNORMAL` \| `USER_RECEIVE_OVERDUE` \| `REMARK_NOT_CORRECT` \| `MERCHANT_REJECT` \| `MERCHANT_NOT_CONFIRM` \| `BLOCK_B2C_USERLIMITAMOUNT_BSRULE_MONTH` 枚举值之一
| openid {data-required} | string | 接收红包用户OpenID
| user_name | string {data-tooltip=商户API证书对应的公钥加密后的BASE64字符串 data-encrypted=by-rsa-pubkey} | 接收红包用户姓名
| initiate_time | string | 品牌红包发起时间
| update_time {data-required} | string | 品牌红包更新时间
| brand_id {data-required} | number | 品牌ID
| template_id {data-required} | string | 品牌红包模板ID
| brand_appid | string | 品牌AppID

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/merchant/4014310391)
