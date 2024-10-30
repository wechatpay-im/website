---
title: 通过加密手机号查询会员领卡状态
description: 商户可查询导入成功的加密手机号是否已被用户领取。
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| query | object | 声明请求的查询参数
| card_id {data-indent=1} | string | 会员卡id
| encrypted_phone_number {data-indent=1} | string | 加密手机号
| headers | object | 声明请求的头参数
| Wechatpay-Serial {data-indent=1} | string | 微信支付平台公钥证书序列号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->marketing->membercardOpen->phonenumberMember->search->getAsync([
  'query' => [
    'card_id' => 'pbLatjvWOibDc5-TBnbUk1pD12o0',
    'encrypted_phone_number' => 'vvysDQeEaH3I+wRh14St0abIkvQyFgh/fbWYSs2bLtG9tj+bdJn4WSCPzLyXnFbzaaKSE2j4mAFON3kzNexb/SYkHZNJAuCittaW4wpGj7U+h9A==',
  ],
  'headers' => [
    'Wechatpay-Serial' => '',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/marketing/membercard-open/phonenumber-member/search')->getAsync([
  'query' => [
    'card_id' => 'pbLatjvWOibDc5-TBnbUk1pD12o0',
    'encrypted_phone_number' => 'vvysDQeEaH3I+wRh14St0abIkvQyFgh/fbWYSs2bLtG9tj+bdJn4WSCPzLyXnFbzaaKSE2j4mAFON3kzNexb/SYkHZNJAuCittaW4wpGj7U+h9A==',
  ],
  'headers' => [
    'Wechatpay-Serial' => '',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/marketing/membercard-open/phonenumber-member/search']->getAsync([
  'query' => [
    'card_id' => 'pbLatjvWOibDc5-TBnbUk1pD12o0',
    'encrypted_phone_number' => 'vvysDQeEaH3I+wRh14St0abIkvQyFgh/fbWYSs2bLtG9tj+bdJn4WSCPzLyXnFbzaaKSE2j4mAFON3kzNexb/SYkHZNJAuCittaW4wpGj7U+h9A==',
  ],
  'headers' => [
    'Wechatpay-Serial' => '',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->marketing->membercardOpen->phonenumberMember->search->get([
  'query' => [
    'card_id' => 'pbLatjvWOibDc5-TBnbUk1pD12o0',
    'encrypted_phone_number' => 'vvysDQeEaH3I+wRh14St0abIkvQyFgh/fbWYSs2bLtG9tj+bdJn4WSCPzLyXnFbzaaKSE2j4mAFON3kzNexb/SYkHZNJAuCittaW4wpGj7U+h9A==',
  ],
  'headers' => [
    'Wechatpay-Serial' => '',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/marketing/membercard-open/phonenumber-member/search')->get([
  'query' => [
    'card_id' => 'pbLatjvWOibDc5-TBnbUk1pD12o0',
    'encrypted_phone_number' => 'vvysDQeEaH3I+wRh14St0abIkvQyFgh/fbWYSs2bLtG9tj+bdJn4WSCPzLyXnFbzaaKSE2j4mAFON3kzNexb/SYkHZNJAuCittaW4wpGj7U+h9A==',
  ],
  'headers' => [
    'Wechatpay-Serial' => '',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/marketing/membercard-open/phonenumber-member/search']->get([
  'query' => [
    'card_id' => 'pbLatjvWOibDc5-TBnbUk1pD12o0',
    'encrypted_phone_number' => 'vvysDQeEaH3I+wRh14St0abIkvQyFgh/fbWYSs2bLtG9tj+bdJn4WSCPzLyXnFbzaaKSE2j4mAFON3kzNexb/SYkHZNJAuCittaW4wpGj7U+h9A==',
  ],
  'headers' => [
    'Wechatpay-Serial' => '',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| user_card_information | object | 用户会员卡信息
| code {data-indent=1} | string | 会员卡code
| openid {data-indent=1} | string | 用户标识
| unionid {data-indent=1} | string | 用户标识
| receive_time {data-indent=1} | string | 会员卡领取时间
| card_appid {data-indent=1} | string | 品牌appid
| card_id {data-indent=1} | string | 会员卡id

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/marketing/membercard_open/chapter4_2.shtml)