---
title: 撤销订单(微信支付订单号)
description: 支付交易返回失败或支付系统超时，调用该接口撤销交易。如果此订单用户支付失败，微信支付系统会将此订单关闭；如果用户支付成功，微信支付系统会将此订单资金退还给用户。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| base_uri | string | 声明接入点`https://apihk.mch.weixin.qq.com/`(香港接入)
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| mchid {data-required data-indent=1} | string | 商户号
| sp_mchid {data-required data-indent=1} | string | 机构商户号
| sub_mchid {data-required data-indent=1} | string | 子商户号
| transaction_id {data-required} | string | 微信订单号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->global->micropay->transactions->id->_transaction_id_->reverse->postAsync([
  'base_uri' => 'https://apihk.mch.weixin.qq.com/', // 接入点(香港接入)
  'json' => [
    'mchid'     => '1900000109',
    'sp_mchid'  => '1900000100',
    'sub_mchid' => '1900000109',
  ],
  'transaction_id' => '1217752501201407033233368018',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r($response->getStatusCode() === 204);
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/global/micropay/transactions/id/{transaction_id}/reverse')->postAsync([
  'base_uri' => 'https://apihk.mch.weixin.qq.com/', // 接入点(香港接入)
  'json' => [
    'mchid'     => '1900000109',
    'sp_mchid'  => '1900000100',
    'sub_mchid' => '1900000109',
  ],
  'transaction_id' => '1217752501201407033233368018',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r($response->getStatusCode() === 204);
})
->wait();
```

```php [异步属性式]
$instance['v3/global/micropay/transactions/id/{transaction_id}/reverse']->postAsync([
  'base_uri' => 'https://apihk.mch.weixin.qq.com/', // 接入点(香港接入)
  'json' => [
    'mchid'     => '1900000109',
    'sp_mchid'  => '1900000100',
    'sub_mchid' => '1900000109',
  ],
  'transaction_id' => '1217752501201407033233368018',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r($response->getStatusCode() === 204);
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->global->micropay->transactions->id->_transaction_id_->reverse->post([
  'base_uri' => 'https://apihk.mch.weixin.qq.com/', // 接入点(香港接入)
  'json' => [
    'mchid'     => '1900000109',
    'sp_mchid'  => '1900000100',
    'sub_mchid' => '1900000109',
  ],
  'transaction_id' => '1217752501201407033233368018',
]);
print_r($response->getStatusCode() === 204);
```

```php [同步声明式]
$response = $instance->chain('v3/global/micropay/transactions/id/{transaction_id}/reverse')->post([
  'base_uri' => 'https://apihk.mch.weixin.qq.com/', // 接入点(香港接入)
  'json' => [
    'mchid'     => '1900000109',
    'sp_mchid'  => '1900000100',
    'sub_mchid' => '1900000109',
  ],
  'transaction_id' => '1217752501201407033233368018',
]);
print_r($response->getStatusCode() === 204);
```

```php [同步属性式]
$response = $instance['v3/global/micropay/transactions/id/{transaction_id}/reverse']->post([
  'base_uri' => 'https://apihk.mch.weixin.qq.com/', // 接入点(香港接入)
  'json' => [
    'mchid'     => '1900000109',
    'sp_mchid'  => '1900000100',
    'sub_mchid' => '1900000109',
  ],
  'transaction_id' => '1217752501201407033233368018',
]);
print_r($response->getStatusCode() === 204);
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| 空字符串(无返回内容) {align=center colspan=3}

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/global/v3/zh/4013013926)
