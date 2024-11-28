---
title: 商户反馈
description: 商户上传反馈处理结果的接口。 包括商户反馈类型、商户反馈内容以及图片凭证。 其中上传图片凭证需首先调用“商户上传反馈图片”接口，得到图片id，再将id填入请求。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

::: danger :no_entry_sign: {.im-deprecated}

本接口服务已于 `2021.01.08` (北京时间)下线，文档仅做留存参考。

:::

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| transaction_id {data-required data-indent=1} | string | 微信支付订单号
| complainted_mchid {data-required data-indent=1} | string | 被诉商户号
| feedback_type {data-indent=1} | integer | 反馈内容类型
| feedback_content {data-required data-indent=1} | string | 反馈内容
| feedback_images {data-indent=1} | string[] | 图片凭证
| launch_confirm_process {data-indent=1} | boolean | 反馈处理完成

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->merchantService->feedbacks->postAsync([
  'json' => [
    'transaction_id'         => '4200000404201909069117582536',
    'complainted_mchid'      => '9980456248',
    'feedback_type'          => 1,
    'feedback_content'       => '已与用户协商解决',
    'feedback_images'        => ['MediaId'],
    'launch_confirm_process' => true,
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r($response->getStatusCode() === 204);
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/merchant-service/feedbacks')->postAsync([
  'json' => [
    'transaction_id'         => '4200000404201909069117582536',
    'complainted_mchid'      => '9980456248',
    'feedback_type'          => 1,
    'feedback_content'       => '已与用户协商解决',
    'feedback_images'        => ['MediaId'],
    'launch_confirm_process' => true,
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r($response->getStatusCode() === 204);
})
->wait();
```

```php [异步属性式]
$instance['v3/merchant-service/feedbacks']->postAsync([
  'json' => [
    'transaction_id'         => '4200000404201909069117582536',
    'complainted_mchid'      => '9980456248',
    'feedback_type'          => 1,
    'feedback_content'       => '已与用户协商解决',
    'feedback_images'        => ['MediaId'],
    'launch_confirm_process' => true,
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r($response->getStatusCode() === 204);
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->merchantService->feedbacks->post([
  'json' => [
    'transaction_id'         => '4200000404201909069117582536',
    'complainted_mchid'      => '9980456248',
    'feedback_type'          => 1,
    'feedback_content'       => '已与用户协商解决',
    'feedback_images'        => ['MediaId'],
    'launch_confirm_process' => true,
  ],
]);
print_r($response->getStatusCode() === 204);
```

```php [同步声明式]
$response = $instance->chain('v3/merchant-service/feedbacks')->post([
  'json' => [
    'transaction_id'         => '4200000404201909069117582536',
    'complainted_mchid'      => '9980456248',
    'feedback_type'          => 1,
    'feedback_content'       => '已与用户协商解决',
    'feedback_images'        => ['MediaId'],
    'launch_confirm_process' => true,
  ],
]);
print_r($response->getStatusCode() === 204);
```

```php [同步属性式]
$response = $instance['v3/merchant-service/feedbacks']->post([
  'json' => [
    'transaction_id'         => '4200000404201909069117582536',
    'complainted_mchid'      => '9980456248',
    'feedback_type'          => 1,
    'feedback_content'       => '已与用户协商解决',
    'feedback_images'        => ['MediaId'],
    'launch_confirm_process' => true,
  ],
]);
print_r($response->getStatusCode() === 204);
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| 空字符串(无返回内容) {align=center colspan=3}

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/tool/merchant-service/chapter3_6.shtml)
