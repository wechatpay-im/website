---
title: 解约
description: 商户通过调用该接口可主动解除与用户的签约关系，在商户查询时不会返回已解约的信息
---

# {{ $frontmatter.title }} {#delete}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| contract_id {data-required} | string | 签约协议号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->eduPapay->contracts->_contract_id_->deleteAsync([
  'contract_id' => 'wx998877665544wx',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r($response->getStatusCode() === 204);
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/edu-papay/contracts/{contract_id}')->deleteAsync([
  'contract_id' => 'wx998877665544wx',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r($response->getStatusCode() === 204);
})
->wait();
```

```php [异步属性式]
$instance['v3/edu-papay/contracts/{contract_id}']->deleteAsync([
  'contract_id' => 'wx998877665544wx',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r($response->getStatusCode() === 204);
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->eduPapay->contracts->_contract_id_->delete([
  'contract_id' => 'wx998877665544wx',
]);
print_r($response->getStatusCode() === 204);
```

```php [同步声明式]
$response = $instance->chain('v3/edu-papay/contracts/{contract_id}')->delete([
  'contract_id' => 'wx998877665544wx',
]);
print_r($response->getStatusCode() === 204);
```

```php [同步属性式]
$response = $instance['v3/edu-papay/contracts/{contract_id}']->delete([
  'contract_id' => 'wx998877665544wx',
]);
print_r($response->getStatusCode() === 204);
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| 空字符串(无返回内容) {align=center colspan=3}

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/merchant/4012466882) [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4012465374)
