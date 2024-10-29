---
title: 更新退款审批结果
description: 商户可通过调用此接口，更新“申请退款”单据的退款审批结果。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| complaint_id | string | 投诉单号
| json | object | 声明请求的`JSON`数据结构
| action {data-indent=1} | string | 审批动作
| launch_refund_day {data-indent=1} | integer | 预计发起退款时间
| reject_reason {data-indent=1} | string | 拒绝退款原因
| reject_media_list {data-indent=1} | string[] | 如果有拒绝的图片举证，可以提供 最多上传4张图片, 传入调用“商户上传反馈图片”接口返回的media_id，最多上传4张图片凭证
| remark {data-indent=1} | string | 备注

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->merchantService->complaintsV2->_complaint_id_->updateRefundProgress->postAsync([
  'complaint_id' => '200201820200101080076610000',
  'json' => [
    'action' => 'REJECT',
    'launch_refund_day' => 3,
    'reject_reason' => '拒绝退款',
    'reject_media_list' => ['MediaId'],
    'remark' => '已处理完成',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r($response->getStatusCode() === 204);
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/merchant-service/complaints-v2/{complaint_id}/update-refund-progress')->postAsync([
  'complaint_id' => '200201820200101080076610000',
  'json' => [
    'action' => 'REJECT',
    'launch_refund_day' => 3,
    'reject_reason' => '拒绝退款',
    'reject_media_list' => ['MediaId'],
    'remark' => '已处理完成',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r($response->getStatusCode() === 204);
})
->wait();
```

```php [异步属性式]
$instance['v3/merchant-service/complaints-v2/{complaint_id}/update-refund-progress']->postAsync([
  'complaint_id' => '200201820200101080076610000',
  'json' => [
    'action' => 'REJECT',
    'launch_refund_day' => 3,
    'reject_reason' => '拒绝退款',
    'reject_media_list' => ['MediaId'],
    'remark' => '已处理完成',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r($response->getStatusCode() === 204);
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->merchantService->complaintsV2->_complaint_id_->updateRefundProgress->post([
  'complaint_id' => '200201820200101080076610000',
  'json' => [
    'action' => 'REJECT',
    'launch_refund_day' => 3,
    'reject_reason' => '拒绝退款',
    'reject_media_list' => ['MediaId'],
    'remark' => '已处理完成',
  ],
]);
print_r($response->getStatusCode() === 204);
```

```php [同步声明式]
$response = $instance->chain('v3/merchant-service/complaints-v2/{complaint_id}/update-refund-progress')->post([
  'complaint_id' => '200201820200101080076610000',
  'json' => [
    'action' => 'REJECT',
    'launch_refund_day' => 3,
    'reject_reason' => '拒绝退款',
    'reject_media_list' => ['MediaId'],
    'remark' => '已处理完成',
  ],
]);
print_r($response->getStatusCode() === 204);
```

```php [同步属性式]
$response = $instance['v3/merchant-service/complaints-v2/{complaint_id}/update-refund-progress']->post([
  'complaint_id' => '200201820200101080076610000',
  'json' => [
    'action' => 'REJECT',
    'launch_refund_day' => 3,
    'reject_reason' => '拒绝退款',
    'reject_media_list' => ['MediaId'],
    'remark' => '已处理完成',
  ],
]);
print_r($response->getStatusCode() === 204);
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| 空字符串(无返回内容) {align=center colspan=3}

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/docs/partner/apis/consumer-complaint/complaints/update-refund-progress.html) [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/apis/chapter10_2_19.shtml)
