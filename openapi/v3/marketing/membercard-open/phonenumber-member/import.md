---
title: 导入加密手机号提醒会员领卡
description: 如商户有存量注册会员未领取会员卡，可导入最近一年在品牌内有微信支付交易的活跃会员手机号（需加密后才能导入），导入后微信将通过卡包提醒用户将会员卡领取到卡包。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| member_information {data-required data-indent=1} | object {data-tooltip="对应PHP的array"} | 会员信息
| card_id {data-required data-indent=2} | string | 会员卡id
| code {data-indent=2} | string | 会员卡code
| membership_number {data-indent=2} | string | 会员卡编号
| registration_time {data-required data-indent=2} | string | 会员注册时间
| encrypted_phone_number {data-required data-indent=1} | string {data-tooltip=微信支付公钥/平台证书加密后的BASE64字符串 data-encrypted=by-rsa-pubkey} | 加密手机号
| outer_str {data-indent=1} | string | 自定义场景值
| headers {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的头参数
| Wechatpay-Serial {data-required data-indent=1} | string | 微信支付公钥ID/平台证书序列号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->marketing->membercardOpen->phonenumberMember->import->postAsync([
  'json' => [
    'member_information'     => [
      'card_id'           => 'pbLatjvWOibDc5-TBnbUk1pD12o0',
      'code'              => '478515832665',
      'membership_number' => '316510891298',
      'registration_time' => '2015-05-20T13:29:35.120+08:00',
    ],
    'encrypted_phone_number' => 'vvysDQeEaH3I+wRh14St0abIkvQyFgh/fbWYSs2bLtG9tj+bdJn4WSCPzqSyXnFbzaaKSE2j4mAFON3kzNexb/SYkHZNJAuCittaW4wpGj7U+h9A==',
    'outer_str'              => 'my_card_CARD',
  ],
  'headers' => [
    'Wechatpay-Serial' => 'PUB_KEY_ID_0114232134912410000000000000',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r($response->getStatusCode() === 204);
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/marketing/membercard-open/phonenumber-member/import')->postAsync([
  'json' => [
    'member_information'     => [
      'card_id'           => 'pbLatjvWOibDc5-TBnbUk1pD12o0',
      'code'              => '478515832665',
      'membership_number' => '316510891298',
      'registration_time' => '2015-05-20T13:29:35.120+08:00',
    ],
    'encrypted_phone_number' => 'vvysDQeEaH3I+wRh14St0abIkvQyFgh/fbWYSs2bLtG9tj+bdJn4WSCPzqSyXnFbzaaKSE2j4mAFON3kzNexb/SYkHZNJAuCittaW4wpGj7U+h9A==',
    'outer_str'              => 'my_card_CARD',
  ],
  'headers' => [
    'Wechatpay-Serial' => 'PUB_KEY_ID_0114232134912410000000000000',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r($response->getStatusCode() === 204);
})
->wait();
```

```php [异步属性式]
$instance['v3/marketing/membercard-open/phonenumber-member/import']->postAsync([
  'json' => [
    'member_information'     => [
      'card_id'           => 'pbLatjvWOibDc5-TBnbUk1pD12o0',
      'code'              => '478515832665',
      'membership_number' => '316510891298',
      'registration_time' => '2015-05-20T13:29:35.120+08:00',
    ],
    'encrypted_phone_number' => 'vvysDQeEaH3I+wRh14St0abIkvQyFgh/fbWYSs2bLtG9tj+bdJn4WSCPzqSyXnFbzaaKSE2j4mAFON3kzNexb/SYkHZNJAuCittaW4wpGj7U+h9A==',
    'outer_str'              => 'my_card_CARD',
  ],
  'headers' => [
    'Wechatpay-Serial' => 'PUB_KEY_ID_0114232134912410000000000000',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r($response->getStatusCode() === 204);
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->marketing->membercardOpen->phonenumberMember->import->post([
  'json' => [
    'member_information'     => [
      'card_id'           => 'pbLatjvWOibDc5-TBnbUk1pD12o0',
      'code'              => '478515832665',
      'membership_number' => '316510891298',
      'registration_time' => '2015-05-20T13:29:35.120+08:00',
    ],
    'encrypted_phone_number' => 'vvysDQeEaH3I+wRh14St0abIkvQyFgh/fbWYSs2bLtG9tj+bdJn4WSCPzqSyXnFbzaaKSE2j4mAFON3kzNexb/SYkHZNJAuCittaW4wpGj7U+h9A==',
    'outer_str'              => 'my_card_CARD',
  ],
  'headers' => [
    'Wechatpay-Serial' => 'PUB_KEY_ID_0114232134912410000000000000',
  ],
]);
print_r($response->getStatusCode() === 204);
```

```php [同步声明式]
$response = $instance->chain('v3/marketing/membercard-open/phonenumber-member/import')->post([
  'json' => [
    'member_information'     => [
      'card_id'           => 'pbLatjvWOibDc5-TBnbUk1pD12o0',
      'code'              => '478515832665',
      'membership_number' => '316510891298',
      'registration_time' => '2015-05-20T13:29:35.120+08:00',
    ],
    'encrypted_phone_number' => 'vvysDQeEaH3I+wRh14St0abIkvQyFgh/fbWYSs2bLtG9tj+bdJn4WSCPzqSyXnFbzaaKSE2j4mAFON3kzNexb/SYkHZNJAuCittaW4wpGj7U+h9A==',
    'outer_str'              => 'my_card_CARD',
  ],
  'headers' => [
    'Wechatpay-Serial' => 'PUB_KEY_ID_0114232134912410000000000000',
  ],
]);
print_r($response->getStatusCode() === 204);
```

```php [同步属性式]
$response = $instance['v3/marketing/membercard-open/phonenumber-member/import']->post([
  'json' => [
    'member_information'     => [
      'card_id'           => 'pbLatjvWOibDc5-TBnbUk1pD12o0',
      'code'              => '478515832665',
      'membership_number' => '316510891298',
      'registration_time' => '2015-05-20T13:29:35.120+08:00',
    ],
    'encrypted_phone_number' => 'vvysDQeEaH3I+wRh14St0abIkvQyFgh/fbWYSs2bLtG9tj+bdJn4WSCPzqSyXnFbzaaKSE2j4mAFON3kzNexb/SYkHZNJAuCittaW4wpGj7U+h9A==',
    'outer_str'              => 'my_card_CARD',
  ],
  'headers' => [
    'Wechatpay-Serial' => 'PUB_KEY_ID_0114232134912410000000000000',
  ],
]);
print_r($response->getStatusCode() === 204);
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| 空字符串(无返回内容) {align=center colspan=3}

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/marketing/membercard_open/chapter4_1.shtml)
