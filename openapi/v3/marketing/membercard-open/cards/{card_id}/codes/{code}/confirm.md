---
title: 确认用户入会
description: 商户完成内部开卡动作后，调用该接口告知微信侧用户入会动作是否成功
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| card_id {data-required} | string | 会员卡id
| code {data-required} | string | 会员卡code
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| fail_reason {data-indent=1} | string | 入会失败原因
| user_card_confirm_state {data-required data-indent=1} | string | 会员卡开卡状态<br/>`DEFAULT` \| `CREATE_CARD_SUCCESS` \| `CREATE_CARD_FAIL` \| `CREATE_CARD_ALREADY_EXISTS` 枚举值之一

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->marketing->membercardOpen->cards->_card_id_->codes->_code_->confirm->postAsync([
  'card_id' => 'pbLatjvWOibDc5-TBnbUk1pD12o0',
  'code' => '478515832665',
  'json' => [
    'fail_reason'             => '',
    'user_card_confirm_state' => 'DEFAULT',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/marketing/membercard-open/cards/{card_id}/codes/{code}/confirm')->postAsync([
  'card_id' => 'pbLatjvWOibDc5-TBnbUk1pD12o0',
  'code' => '478515832665',
  'json' => [
    'fail_reason'             => '',
    'user_card_confirm_state' => 'DEFAULT',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/marketing/membercard-open/cards/{card_id}/codes/{code}/confirm']->postAsync([
  'card_id' => 'pbLatjvWOibDc5-TBnbUk1pD12o0',
  'code' => '478515832665',
  'json' => [
    'fail_reason'             => '',
    'user_card_confirm_state' => 'DEFAULT',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->marketing->membercardOpen->cards->_card_id_->codes->_code_->confirm->post([
  'card_id' => 'pbLatjvWOibDc5-TBnbUk1pD12o0',
  'code' => '478515832665',
  'json' => [
    'fail_reason'             => '',
    'user_card_confirm_state' => 'DEFAULT',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/marketing/membercard-open/cards/{card_id}/codes/{code}/confirm')->post([
  'card_id' => 'pbLatjvWOibDc5-TBnbUk1pD12o0',
  'code' => '478515832665',
  'json' => [
    'fail_reason'             => '',
    'user_card_confirm_state' => 'DEFAULT',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/marketing/membercard-open/cards/{card_id}/codes/{code}/confirm']->post([
  'card_id' => 'pbLatjvWOibDc5-TBnbUk1pD12o0',
  'code' => '478515832665',
  'json' => [
    'fail_reason'             => '',
    'user_card_confirm_state' => 'DEFAULT',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| card_id {data-required} | string | 会员卡模板ID
| code {data-required} | string | 会员卡code

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4024293896)
