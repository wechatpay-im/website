---
title: 根据手机号导入用户会员卡
description: 商户可通过加密后的用户手机号，将存量会员通过接口导入至微信侧后台。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| card_id | string | 会员卡ID
| json | object | 声明请求的`JSON`数据结构
| encrypted_phone_number {data-indent=1} | string | 用户加密手机号
| code {data-indent=1} | string | 会员卡code
| out_request_no {data-indent=1} | string | 商户请求单号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->marketing->membercardOpen->cards->_card_id_->phoneMembercard->import->postAsync([
  'card_id' => 'pbLatjvWOibDc5-TBnbUk1pD12o0',
  'json' => [
    'encrypted_phone_number' => 'vvysDQeEaH3I+wRh14St0aaKSE2j4mAFON3kzNexb/SYkHZNJAuCittaW4wpGj7U+h9A==',
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
$instance->chain('v3/marketing/membercard-open/cards/{card_id}/phone-membercard/import')->postAsync([
  'card_id' => 'pbLatjvWOibDc5-TBnbUk1pD12o0',
  'json' => [
    'encrypted_phone_number' => 'vvysDQeEaH3I+wRh14St0aaKSE2j4mAFON3kzNexb/SYkHZNJAuCittaW4wpGj7U+h9A==',
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
$instance['v3/marketing/membercard-open/cards/{card_id}/phone-membercard/import']->postAsync([
  'card_id' => 'pbLatjvWOibDc5-TBnbUk1pD12o0',
  'json' => [
    'encrypted_phone_number' => 'vvysDQeEaH3I+wRh14St0aaKSE2j4mAFON3kzNexb/SYkHZNJAuCittaW4wpGj7U+h9A==',
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
$response = $instance->v3->marketing->membercardOpen->cards->_card_id_->phoneMembercard->import->post([
  'card_id' => 'pbLatjvWOibDc5-TBnbUk1pD12o0',
  'json' => [
    'encrypted_phone_number' => 'vvysDQeEaH3I+wRh14St0aaKSE2j4mAFON3kzNexb/SYkHZNJAuCittaW4wpGj7U+h9A==',
    'code' => '478515832665',
    'out_request_no' => '100002322019090134234sfdf',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/marketing/membercard-open/cards/{card_id}/phone-membercard/import')->post([
  'card_id' => 'pbLatjvWOibDc5-TBnbUk1pD12o0',
  'json' => [
    'encrypted_phone_number' => 'vvysDQeEaH3I+wRh14St0aaKSE2j4mAFON3kzNexb/SYkHZNJAuCittaW4wpGj7U+h9A==',
    'code' => '478515832665',
    'out_request_no' => '100002322019090134234sfdf',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/marketing/membercard-open/cards/{card_id}/phone-membercard/import']->post([
  'card_id' => 'pbLatjvWOibDc5-TBnbUk1pD12o0',
  'json' => [
    'encrypted_phone_number' => 'vvysDQeEaH3I+wRh14St0aaKSE2j4mAFON3kzNexb/SYkHZNJAuCittaW4wpGj7U+h9A==',
    'code' => '478515832665',
    'out_request_no' => '100002322019090134234sfdf',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| code | string | 会员卡code

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/marketing/membercard_open/chapter3_14.shtml)
