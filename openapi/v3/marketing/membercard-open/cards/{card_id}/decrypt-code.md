---
title: 加密code解码（跳转型激活）
description: 如果商家选择跳转激活的投放方式，用户点击开卡跳转至商家H5网页/小程序时，会员组件会在跳转链接activate_url后拼接若干个参数，包括：用户的openid、加密的会员code(encrypt_code)、激活ticket(activate_ticket)。对于加密的encrypt_code，商家可调用此api解码接口，获取真实code。
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| card_id | string | 会员卡id
| query | object | 声明请求的查询参数
| encrypt_code {data-indent=1} | string | 加密code

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->marketing->membercardOpen->cards->_card_id_->decryptCode->getAsync([
  'card_id' => 'pbLatjvWOibDc5-TBnbUk1pD12o0',
  'query' => [
    'encrypt_code' => 'XXIzTtMqCxwOaawoE91+VJdsFmv7b8g0VZIZkqf4GWA60Fzpc8ksZ/5ZZ0DVkXdE',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/marketing/membercard-open/cards/{card_id}/decrypt-code')->getAsync([
  'card_id' => 'pbLatjvWOibDc5-TBnbUk1pD12o0',
  'query' => [
    'encrypt_code' => 'XXIzTtMqCxwOaawoE91+VJdsFmv7b8g0VZIZkqf4GWA60Fzpc8ksZ/5ZZ0DVkXdE',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/marketing/membercard-open/cards/{card_id}/decrypt-code']->getAsync([
  'card_id' => 'pbLatjvWOibDc5-TBnbUk1pD12o0',
  'query' => [
    'encrypt_code' => 'XXIzTtMqCxwOaawoE91+VJdsFmv7b8g0VZIZkqf4GWA60Fzpc8ksZ/5ZZ0DVkXdE',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->marketing->membercardOpen->cards->_card_id_->decryptCode->get([
  'card_id' => 'pbLatjvWOibDc5-TBnbUk1pD12o0',
  'query' => [
    'encrypt_code' => 'XXIzTtMqCxwOaawoE91+VJdsFmv7b8g0VZIZkqf4GWA60Fzpc8ksZ/5ZZ0DVkXdE',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/marketing/membercard-open/cards/{card_id}/decrypt-code')->get([
  'card_id' => 'pbLatjvWOibDc5-TBnbUk1pD12o0',
  'query' => [
    'encrypt_code' => 'XXIzTtMqCxwOaawoE91+VJdsFmv7b8g0VZIZkqf4GWA60Fzpc8ksZ/5ZZ0DVkXdE',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/marketing/membercard-open/cards/{card_id}/decrypt-code']->get([
  'card_id' => 'pbLatjvWOibDc5-TBnbUk1pD12o0',
  'query' => [
    'encrypt_code' => 'XXIzTtMqCxwOaawoE91+VJdsFmv7b8g0VZIZkqf4GWA60Fzpc8ksZ/5ZZ0DVkXdE',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| code | string | 会员卡code

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/marketing/membercard_open/chapter4_4.shtml)
