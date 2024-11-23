---
title: 根据openid导入用户会员卡
description: 对于经营会员生意的商户来说，存量会员的注册渠道广泛，包括但不限于线下渠道、微信渠道、APP及其他线上渠道。因而，在微信生态下经营会员时常遇到两类问题：（1）存量会员的身份难统一识别；（2）在应用「开卡有礼」活动能力时，容易对存量（但未同步身份至微信侧的）老会员重复补贴。因而，针对大部分存量会员在微信内的商户，商户可通过用户在微信公众号/小程序内的openid，将存量会员通过接口导入至微信侧后台。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| card_id {data-required} | string | 会员卡ID
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| openid {data-required data-indent=1} | string | 用户标识
| code {data-indent=1} | string | 会员卡code
| out_request_no {data-required data-indent=1} | string | 商户请求单号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->marketing->membercardOpen->cards->_card_id_->users->import->postAsync([
  'card_id' => 'pbLatjvWOibDc5-TBnbUk1pD12o0',
  'json' => [
    'openid' => 'obLatjnx9gnqzS4myYGmLZ7LgLBA',
    'code' => '478515832665',
    'out_request_no' => '100002322019090134234sfdf',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/marketing/membercard-open/cards/{card_id}/users/import')->postAsync([
  'card_id' => 'pbLatjvWOibDc5-TBnbUk1pD12o0',
  'json' => [
    'openid' => 'obLatjnx9gnqzS4myYGmLZ7LgLBA',
    'code' => '478515832665',
    'out_request_no' => '100002322019090134234sfdf',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/marketing/membercard-open/cards/{card_id}/users/import']->postAsync([
  'card_id' => 'pbLatjvWOibDc5-TBnbUk1pD12o0',
  'json' => [
    'openid' => 'obLatjnx9gnqzS4myYGmLZ7LgLBA',
    'code' => '478515832665',
    'out_request_no' => '100002322019090134234sfdf',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->marketing->membercardOpen->cards->_card_id_->users->import->post([
  'card_id' => 'pbLatjvWOibDc5-TBnbUk1pD12o0',
  'json' => [
    'openid' => 'obLatjnx9gnqzS4myYGmLZ7LgLBA',
    'code' => '478515832665',
    'out_request_no' => '100002322019090134234sfdf',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/marketing/membercard-open/cards/{card_id}/users/import')->post([
  'card_id' => 'pbLatjvWOibDc5-TBnbUk1pD12o0',
  'json' => [
    'openid' => 'obLatjnx9gnqzS4myYGmLZ7LgLBA',
    'code' => '478515832665',
    'out_request_no' => '100002322019090134234sfdf',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/marketing/membercard-open/cards/{card_id}/users/import']->post([
  'card_id' => 'pbLatjvWOibDc5-TBnbUk1pD12o0',
  'json' => [
    'openid' => 'obLatjnx9gnqzS4myYGmLZ7LgLBA',
    'code' => '478515832665',
    'out_request_no' => '100002322019090134234sfdf',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| code {data-required}| string | 会员卡code

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/marketing/membercard_open/chapter3_13.shtml)
