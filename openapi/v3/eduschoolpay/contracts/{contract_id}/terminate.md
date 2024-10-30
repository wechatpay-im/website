---
title: 商户主动解约
description: 商户通过调用该接口可主动解除与用户的签约关系。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| contract_id | string | 签约协议号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->eduschoolpay->contracts->_contract_id_->terminate->postAsync([
  'contract_id' => '2045011120563805041758214605',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r($response->getStatusCode() === 204);
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/eduschoolpay/contracts/{contract_id}/terminate')->postAsync([
  'contract_id' => '2045011120563805041758214605',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r($response->getStatusCode() === 204);
})
->wait();
```

```php [异步属性式]
$instance['v3/eduschoolpay/contracts/{contract_id}/terminate']->postAsync([
  'contract_id' => '2045011120563805041758214605',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r($response->getStatusCode() === 204);
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->eduschoolpay->contracts->_contract_id_->terminate->post([
  'contract_id' => '2045011120563805041758214605',
]);
print_r($response->getStatusCode() === 204);
```

```php [同步声明式]
$response = $instance->chain('v3/eduschoolpay/contracts/{contract_id}/terminate')->post([
  'contract_id' => '2045011120563805041758214605',
]);
print_r($response->getStatusCode() === 204);
```

```php [同步属性式]
$response = $instance['v3/eduschoolpay/contracts/{contract_id}/terminate']->post([
  'contract_id' => '2045011120563805041758214605',
]);
print_r($response->getStatusCode() === 204);
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| 空字符串(无返回内容) {align=center colspan=3}

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/edu/eduschoolpay/chapter3_3.shtml)
