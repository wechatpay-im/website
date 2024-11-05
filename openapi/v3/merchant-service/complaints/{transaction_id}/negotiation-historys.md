---
title: 查询投诉协商历史
description: 商户可通过调用此接口，查询指定投诉的用户商户协商历史，方便商户根据处理历史来制定后续处理方案。
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

::: danger :no_entry_sign: {.im-deprecated}

本接口服务已于 `2021.01.08` (北京时间)下线，文档仅做留存参考。
:::

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| transaction_id | string | 微信支付订单号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->merchantService->complaints->_transaction_id_->negotiationHistorys->getAsync([
  'transaction_id' => '4200000404201909069117582536',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/merchant-service/complaints/{transaction_id}/negotiation-historys')->getAsync([
  'transaction_id' => '4200000404201909069117582536',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/merchant-service/complaints/{transaction_id}/negotiation-historys']->getAsync([
  'transaction_id' => '4200000404201909069117582536',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->merchantService->complaints->_transaction_id_->negotiationHistorys->get([
  'transaction_id' => '4200000404201909069117582536',
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/merchant-service/complaints/{transaction_id}/negotiation-historys')->get([
  'transaction_id' => '4200000404201909069117582536',
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/merchant-service/complaints/{transaction_id}/negotiation-historys']->get([
  'transaction_id' => '4200000404201909069117582536',
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| complaint_negotiation_history | object[] | 投诉协商历史
| operate_user {data-indent=1} | string | 操作人
| operate_time {data-indent=1} | string | 操作时间
| operate_type {data-indent=1} | string | 操作类型<br/>`USER_CREATE_COMPLAINT` \| `CREATE_COMPLAINT_BY_PLATFORM` \| `USER_CONTINUE_COMPLAINT` \| `USER_REVOKE_COMPLAINT` \| `USER_CONFIRM_COMPLAINT` \| `SELLER_REFUND` \| `MERCHANT_LAUNCH_CONFIRM_PROCESS` \| `USER_RESPONSE` \| `MERCHANT_RESPONSE` \| `RESPONSE_BY_PLATFORM` \| `CONTINUE_COMPLAINT_BY_PLATFORM` \| `CREATE_COMPLAINT_SYSTEM_MESSAGE` \| `COMPLAINT_TIMEOUT_SYSTEM_MESSAGE` \| `SELLER_REFUND_SYSTEM_MESSAGE` \| `CONTINUE_COMPLAINT_SYSTEM_MESSAGE` \| `LAUNCH_CONFIRM_PROCESS_SYSTEM_MESSAGE` 枚举值之一
| operate_details {data-indent=1} | string | 操作内容
| image_list {data-indent=1} | string[] | 协商历史图片凭证

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/tool/merchant-service/chapter3_7.shtml)
