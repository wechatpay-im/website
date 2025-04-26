---
title: 作废用户会员卡
description: 将用户的会员卡设置为失效状态。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| card_id {data-required} | string | 会员卡id
| code {data-required} | string | 会员卡code
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| reason {data-indent=1} | string | 失效理由

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->marketing->membercardOpen->cards->_card_id_->codes->_code_->unavailable->postAsync([
  'card_id' => 'pbLatjvWOibDc5-TBnbUk1pD12o0',
  'code' => '478515832665',
  'json' => [
    'reason' => '用户违反会员条例',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r($response->getStatusCode() === 204);
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/marketing/membercard-open/cards/{card_id}/codes/{code}/unavailable')->postAsync([
  'card_id' => 'pbLatjvWOibDc5-TBnbUk1pD12o0',
  'code' => '478515832665',
  'json' => [
    'reason' => '用户违反会员条例',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r($response->getStatusCode() === 204);
})
->wait();
```

```php [异步属性式]
$instance['v3/marketing/membercard-open/cards/{card_id}/codes/{code}/unavailable']->postAsync([
  'card_id' => 'pbLatjvWOibDc5-TBnbUk1pD12o0',
  'code' => '478515832665',
  'json' => [
    'reason' => '用户违反会员条例',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r($response->getStatusCode() === 204);
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->marketing->membercardOpen->cards->_card_id_->codes->_code_->unavailable->post([
  'card_id' => 'pbLatjvWOibDc5-TBnbUk1pD12o0',
  'code' => '478515832665',
  'json' => [
    'reason' => '用户违反会员条例',
  ],
]);
print_r($response->getStatusCode() === 204);
```

```php [同步声明式]
$response = $instance->chain('v3/marketing/membercard-open/cards/{card_id}/codes/{code}/unavailable')->post([
  'card_id' => 'pbLatjvWOibDc5-TBnbUk1pD12o0',
  'code' => '478515832665',
  'json' => [
    'reason' => '用户违反会员条例',
  ],
]);
print_r($response->getStatusCode() === 204);
```

```php [同步属性式]
$response = $instance['v3/marketing/membercard-open/cards/{card_id}/codes/{code}/unavailable']->post([
  'card_id' => 'pbLatjvWOibDc5-TBnbUk1pD12o0',
  'code' => '478515832665',
  'json' => [
    'reason' => '用户违反会员条例',
  ],
]);
print_r($response->getStatusCode() === 204);
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| 空字符串(无返回内容) {align=center colspan=3}

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/merchant/4012549677) [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4012726955)
