---
title: 检查子商户开票功能状态
description: 服务商检查子商户的电子发票功能状态是否正常，若商户已经开通API开票功能并已对服务商授权，则返回成功。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| sub_mchid {data-required} | string | 子商户号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->newTaxControlFapiao->merchant->_sub_mchid_->check->postAsync([
  'sub_mchid' => '1900000109',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r($response->getStatusCode() === 204);
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/new-tax-control-fapiao/merchant/{sub_mchid}/check')->postAsync([
  'sub_mchid' => '1900000109',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r($response->getStatusCode() === 204);
})
->wait();
```

```php [异步属性式]
$instance['v3/new-tax-control-fapiao/merchant/{sub_mchid}/check']->postAsync([
  'sub_mchid' => '1900000109',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r($response->getStatusCode() === 204);
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->newTaxControlFapiao->merchant->_sub_mchid_->check->post([
  'sub_mchid' => '1900000109',
]);
print_r($response->getStatusCode() === 204);
```

```php [同步声明式]
$response = $instance->chain('v3/new-tax-control-fapiao/merchant/{sub_mchid}/check')->post([
  'sub_mchid' => '1900000109',
]);
print_r($response->getStatusCode() === 204);
```

```php [同步属性式]
$response = $instance['v3/new-tax-control-fapiao/merchant/{sub_mchid}/check']->post([
  'sub_mchid' => '1900000109',
]);
print_r($response->getStatusCode() === 204);
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| 空字符串(无返回内容) {align=center colspan=3}

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/new-tax-control-fapiao/chapter3_1.shtml)
