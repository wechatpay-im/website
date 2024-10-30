---
title: 撤销商户开户意愿申请单
description: 服务商提交申请单后需要修改信息时，或者申请单审核结果为”已驳回“时服务商要修改申请材料时，均需要先调用撤销申请单接口。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| business_code | string | 业务申请编号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->apply4subject->applyment->_business_code_->cancel->postAsync([
  'business_code' => '',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r($response->getStatusCode() === 204);
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/apply4subject/applyment/{business_code}/cancel')->postAsync([
  'business_code' => '',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r($response->getStatusCode() === 204);
})
->wait();
```

```php [异步属性式]
$instance['v3/apply4subject/applyment/{business_code}/cancel']->postAsync([
  'business_code' => '',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r($response->getStatusCode() === 204);
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->apply4subject->applyment->_business_code_->cancel->post([
  'business_code' => '',
]);
print_r($response->getStatusCode() === 204);
```

```php [同步声明式]
$response = $instance->chain('v3/apply4subject/applyment/{business_code}/cancel')->post([
  'business_code' => '',
]);
print_r($response->getStatusCode() === 204);
```

```php [同步属性式]
$response = $instance['v3/apply4subject/applyment/{business_code}/cancel']->post([
  'business_code' => '',
]);
print_r($response->getStatusCode() === 204);
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| 空字符串(无返回内容) {align=center colspan=3}

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/applysubject/chapter5_2.shtml)
