---
title: 服务人员分配
description: 用于服务商/商户开发者在顾客下单后为顾客分配服务人员使用。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| guide_id {data-required} | string | 服务人员ID
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| sub_mchid {data-indent=1} | string | 子商户ID
| out_trade_no {data-required data-indent=1} | string | 商户订单号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->smartguide->guides->_guide_id_->assign->postAsync([
  'guide_id' => '',
  'json' => [
    'sub_mchid' => '1234567890',
    'out_trade_no' => '20150806125346',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r($response->getStatusCode() === 204);
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/smartguide/guides/{guide_id}/assign')->postAsync([
  'guide_id' => '',
  'json' => [
    'sub_mchid' => '1234567890',
    'out_trade_no' => '20150806125346',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r($response->getStatusCode() === 204);
})
->wait();
```

```php [异步属性式]
$instance['v3/smartguide/guides/{guide_id}/assign']->postAsync([
  'guide_id' => '',
  'json' => [
    'sub_mchid' => '1234567890',
    'out_trade_no' => '20150806125346',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r($response->getStatusCode() === 204);
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->smartguide->guides->_guide_id_->assign->post([
  'guide_id' => '',
  'json' => [
    'sub_mchid' => '1234567890',
    'out_trade_no' => '20150806125346',
  ],
]);
print_r($response->getStatusCode() === 204);
```

```php [同步声明式]
$response = $instance->chain('v3/smartguide/guides/{guide_id}/assign')->post([
  'guide_id' => '',
  'json' => [
    'sub_mchid' => '1234567890',
    'out_trade_no' => '20150806125346',
  ],
]);
print_r($response->getStatusCode() === 204);
```

```php [同步属性式]
$response = $instance['v3/smartguide/guides/{guide_id}/assign']->post([
  'guide_id' => '',
  'json' => [
    'sub_mchid' => '1234567890',
    'out_trade_no' => '20150806125346',
  ],
]);
print_r($response->getStatusCode() === 204);
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| 空字符串(无返回内容) {align=center colspan=3}

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/smartguide/chapter3_2.shtml)
