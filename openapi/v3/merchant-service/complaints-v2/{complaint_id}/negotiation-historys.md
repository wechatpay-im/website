---
title: 查询投诉协商历史
description: 商户可通过调用此接口，查询指定投诉的用户商户协商历史，以分页输出查询结果，方便商户根据处理历史来制定后续处理方案。
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| complaint_id | string | 投诉单号
| query | object | 声明请求的查询参数
| limit {data-indent=1} | integer | 分页大小
| offset {data-indent=1} | integer | 分页开始位置

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->merchantService->complaintsV2->_complaint_id_->negotiationHistorys->getAsync([
  'complaint_id' => '200201820200101080076610000',
  'query' => [
    'limit' => 50,
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
    'limit' => 50,
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
    'limit' => 50,
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
    'limit' => 50,
    'offset' => 10,
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/merchant-service/complaints-v2/{complaint_id}/negotiation-historys')->get([
  'complaint_id' => '200201820200101080076610000',
  'query' => [
    'limit' => 50,
    'offset' => 10,
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/merchant-service/complaints-v2/{complaint_id}/negotiation-historys']->get([
  'complaint_id' => '200201820200101080076610000',
  'query' => [
    'limit' => 50,
    'offset' => 10,
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| data | object[] | 投诉协商历史
| complaint_media_list {data-indent=1} | object | 
| media_type {data-indent=2} | string | 媒体文件业务类型<br/>`USER_COMPLAINT_IMAGE` \| `OPERATION_IMAGE` 枚举值之一
| media_url {data-indent=2} | string[] | 媒体文件请求url
| log_id {data-indent=1} | string | 操作流水号
| operator {data-indent=1} | string | 操作人
| operate_time {data-indent=1} | string | 操作时间
| operate_type {data-indent=1} | string | 操作类型
| operate_details {data-indent=1} | string | 操作内容
| image_list {data-indent=1} | string[] | 图片凭证
| user_appy_platform_service_reason {data-indent=1} | string | 用户申请平台协助原因
| user_appy_platform_service_reason_description {data-indent=1} | string | 用户申请平台协助原因描述
| limit | integer | 分页大小
| offset | integer | 分页开始位置
| total_count | integer | 投诉协商历史总条数

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/docs/partner/apis/consumer-complaint/complaints/query-negotiation-history-v2.html) [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3_partner/apis/chapter10_2_12.shtml)
