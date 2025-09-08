---
title: 查询投诉协商历史
description: 商户可通过调用此接口，查询指定投诉的用户商户协商历史，以分页输出查询结果，方便商户根据处理历史来制定后续处理方案。
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| complaint_id {data-required} | string | 投诉单号
| query | object {data-tooltip="对应PHP的array"} | 声明请求的查询参数
| limit {data-indent=1} | integer | 分页大小
| offset {data-indent=1} | integer | 分页开始位置

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->merchantService->complaintsV2->_complaint_id_->negotiationHistorys->getAsync([
  'complaint_id' => '200201820200101080076610000',
  'query' => [
    'limit'  => 50,
    'offset' => 10,
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/merchant-service/complaints-v2/{complaint_id}/negotiation-historys')->getAsync([
  'complaint_id' => '200201820200101080076610000',
  'query' => [
    'limit'  => 50,
    'offset' => 10,
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/merchant-service/complaints-v2/{complaint_id}/negotiation-historys']->getAsync([
  'complaint_id' => '200201820200101080076610000',
  'query' => [
    'limit'  => 50,
    'offset' => 10,
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->merchantService->complaintsV2->_complaint_id_->negotiationHistorys->get([
  'complaint_id' => '200201820200101080076610000',
  'query' => [
    'limit'  => 50,
    'offset' => 10,
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/merchant-service/complaints-v2/{complaint_id}/negotiation-historys')->get([
  'complaint_id' => '200201820200101080076610000',
  'query' => [
    'limit'  => 50,
    'offset' => 10,
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/merchant-service/complaints-v2/{complaint_id}/negotiation-historys']->get([
  'complaint_id' => '200201820200101080076610000',
  'query' => [
    'limit'  => 50,
    'offset' => 10,
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| data | object[] {data-tooltip="对应PHP的array"} | 投诉协商历史
| complaint_media_list {data-indent=1} | object {data-tooltip="对应PHP的array"} | 操作资料列表
| media_type {data-indent=2} | string | 媒体文件业务类型<br/>`USER_COMPLAINT_IMAGE` \| `OPERATION_IMAGE` 枚举值之一
| media_url {data-indent=2} | string[] | 媒体文件请求url
| log_id {data-required data-indent=1} | string | 操作流水号
| operator {data-required data-indent=1} | string | 操作人
| operate_time {data-required data-indent=1} | string | 操作时间
| operate_type {data-required data-indent=1} | string | 操作类型<br/>`USER_CREATE_COMPLAINT` \| `USER_CONTINUE_COMPLAINT` \| `USER_RESPONSE` \| `PLATFORM_RESPONSE` \| `MERCHANT_RESPONSE` \| `MERCHANT_CONFIRM_COMPLETE` \| `USER_CREATE_COMPLAINT_SYSTEM_MESSAGE` \| `COMPLAINT_FULL_REFUNDED_SYSTEM_MESSAGE` \| `USER_CONTINUE_COMPLAINT_SYSTEM_MESSAGE` \| `USER_REVOKE_COMPLAINT` \| `USER_COMFIRM_COMPLAINT` \| `PLATFORM_HELP_APPLICATION` \| `USER_APPLY_PLATFORM_HELP` \| `MERCHANT_APPROVE_REFUND` \| `MERCHANT_REFUSE_RERUND` \| `USER_SUBMIT_SATISFACTION` \| `SERVICE_ORDER_CANCEL` \| `SERVICE_ORDER_COMPLETE` \| `COMPLAINT_PARTIAL_REFUNDED_SYSTEM_MESSAGE` \| `COMPLAINT_REFUND_RECEIVED_SYSTEM_MESSAGE` \| `COMPLAINT_ENTRUSTED_REFUND_SYSTEM_MESSAGE` \| `USER_APPLY_PLATFORM_SERVICE` \| `USER_CANCEL_PLATFORM_SERVICE` \| `PLATFORM_SERVICE_FINISHED` 枚举值之一
| operate_details {data-indent=1} | string | 操作内容
| image_list {data-indent=1} | string[] | 图片凭证
| user_appy_platform_service_reason {data-indent=1} | string | 用户申请平台协助原因
| user_appy_platform_service_reason_description {data-indent=1} | string | 用户申请平台协助原因描述
| limit {data-required} | integer | 分页大小
| offset {data-required} | integer | 分页开始位置
| total_count | integer | 投诉协商历史总条数

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/merchant/4012533439) [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4012691802)
