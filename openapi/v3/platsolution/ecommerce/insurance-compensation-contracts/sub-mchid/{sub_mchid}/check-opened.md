---
title: 查询保险理赔功能开通状态
description: 提交开通保险理赔功能请求后，通过调用该接口查询开通结果。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| sub_mchid {data-required} | string | 二级商户号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->platsolution->ecommerce->insuranceCompensationContracts->subMchid->_sub_mchid_->checkOpened->postAsync([
  'sub_mchid' => '1900000109',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/platsolution/ecommerce/insurance-compensation-contracts/sub-mchid/{sub_mchid}/check-opened')->postAsync([
  'sub_mchid' => '1900000109',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/platsolution/ecommerce/insurance-compensation-contracts/sub-mchid/{sub_mchid}/check-opened']->postAsync([
  'sub_mchid' => '1900000109',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->platsolution->ecommerce->insuranceCompensationContracts->subMchid->_sub_mchid_->checkOpened->post([
  'sub_mchid' => '1900000109',
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/platsolution/ecommerce/insurance-compensation-contracts/sub-mchid/{sub_mchid}/check-opened')->post([
  'sub_mchid' => '1900000109',
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/platsolution/ecommerce/insurance-compensation-contracts/sub-mchid/{sub_mchid}/check-opened']->post([
  'sub_mchid' => '1900000109',
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| sub_mchid {data-required} | string | 二级商户号
| opened {data-required} | boolean | 是否开通成功
| success_time | string | 成功时间

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/docs/partner/apis/plat-compensation/plat-compensation/check-insurance-compensation-opened.html)
