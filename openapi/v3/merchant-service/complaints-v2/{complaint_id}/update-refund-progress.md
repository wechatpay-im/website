---
title: 更新退款审批结果
description: 商户可通过调用此接口，更新“申请退款”单据的退款审批结果。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| complaint_id {data-required} | string | 投诉单号
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| action {data-required data-indent=1} | string | 审批动作<br/>`REJECT` \| `APPROVE` 枚举值之一
| launch_refund_day {data-indent=1} | integer | 预计发起退款时间
| reject_reason {data-indent=1} | string | 拒绝退款原因
| reject_media_list {data-indent=1} | string[] | 拒绝退款的举证图片列表
| remark {data-indent=1} | string | 备注

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->merchantService->complaintsV2->_complaint_id_->updateRefundProgress->postAsync([
  'complaint_id' => '200201820200101080076610000',
  'json' => [
    'action'            => 'REJECT',
    'launch_refund_day' => 3,
    'reject_reason'     => '拒绝退款',
    'reject_media_list' => ['file23578_21798531.jpg'],
    'remark'            => '已处理完成',
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
    'action'            => 'REJECT',
    'launch_refund_day' => 3,
    'reject_reason'     => '拒绝退款',
    'reject_media_list' => ['file23578_21798531.jpg'],
    'remark'            => '已处理完成',
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
    'action'            => 'REJECT',
    'launch_refund_day' => 3,
    'reject_reason'     => '拒绝退款',
    'reject_media_list' => ['file23578_21798531.jpg'],
    'remark'            => '已处理完成',
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
    'action'            => 'REJECT',
    'launch_refund_day' => 3,
    'reject_reason'     => '拒绝退款',
    'reject_media_list' => ['file23578_21798531.jpg'],
    'remark'            => '已处理完成',
  ],
]);
print_r($response->getStatusCode() === 204);
```

```php [同步声明式]
$response = $instance->chain('v3/merchant-service/complaints-v2/{complaint_id}/update-refund-progress')->post([
  'complaint_id' => '200201820200101080076610000',
  'json' => [
    'action'            => 'REJECT',
    'launch_refund_day' => 3,
    'reject_reason'     => '拒绝退款',
    'reject_media_list' => ['file23578_21798531.jpg'],
    'remark'            => '已处理完成',
  ],
]);
print_r($response->getStatusCode() === 204);
```

```php [同步属性式]
$response = $instance['v3/merchant-service/complaints-v2/{complaint_id}/update-refund-progress']->post([
  'complaint_id' => '200201820200101080076610000',
  'json' => [
    'action'            => 'REJECT',
    'launch_refund_day' => 3,
    'reject_reason'     => '拒绝退款',
    'reject_media_list' => ['file23578_21798531.jpg'],
    'remark'            => '已处理完成',
  ],
]);
print_r($response->getStatusCode() === 204);
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| 空字符串(无返回内容) {align=center colspan=3}

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/merchant/4012467256) [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4012467218)
