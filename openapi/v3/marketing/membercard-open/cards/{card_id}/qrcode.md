---
title: 创建会员卡二维码
description: 商户创建会员卡后，可以调用此api创建二维码，用于投放会员卡，用户可扫码开通会员卡
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| card_id {data-required} | string | 会员卡id
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| activate_type {data-required data-indent=1} | string | 会员卡激活类型<br/>`AUTO_ACTIVATE` \| `JUMP_ACTIVATE` 枚举值之一
| activate_url {data-indent=1} | string | 跳转激活的url
| activate_appid {data-indent=1} | string | 跳转激活的appid
| activate_path {data-indent=1} | string | 跳转激活的path
| outer_str {data-indent=1} | string | 自定义场景值

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->marketing->membercardOpen->cards->_card_id_->qrcode->postAsync([
  'card_id' => 'pbLatjvWOibDc5-TBnbUk1pD12o0',
  'json' => [
    'activate_type' => 'AUTO_ACTIVATE',
    'activate_url' => 'https://w.url.cn/s/Ahz3p2C',
    'activate_appid' => 'wxea9c30a90fs8d3fe',
    'activate_path' => 'pages/activate/activate',
    'outer_str' => 'szwxtd',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/marketing/membercard-open/cards/{card_id}/qrcode')->postAsync([
  'card_id' => 'pbLatjvWOibDc5-TBnbUk1pD12o0',
  'json' => [
    'activate_type' => 'AUTO_ACTIVATE',
    'activate_url' => 'https://w.url.cn/s/Ahz3p2C',
    'activate_appid' => 'wxea9c30a90fs8d3fe',
    'activate_path' => 'pages/activate/activate',
    'outer_str' => 'szwxtd',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/marketing/membercard-open/cards/{card_id}/qrcode']->postAsync([
  'card_id' => 'pbLatjvWOibDc5-TBnbUk1pD12o0',
  'json' => [
    'activate_type' => 'AUTO_ACTIVATE',
    'activate_url' => 'https://w.url.cn/s/Ahz3p2C',
    'activate_appid' => 'wxea9c30a90fs8d3fe',
    'activate_path' => 'pages/activate/activate',
    'outer_str' => 'szwxtd',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->marketing->membercardOpen->cards->_card_id_->qrcode->post([
  'card_id' => 'pbLatjvWOibDc5-TBnbUk1pD12o0',
  'json' => [
    'activate_type' => 'AUTO_ACTIVATE',
    'activate_url' => 'https://w.url.cn/s/Ahz3p2C',
    'activate_appid' => 'wxea9c30a90fs8d3fe',
    'activate_path' => 'pages/activate/activate',
    'outer_str' => 'szwxtd',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/marketing/membercard-open/cards/{card_id}/qrcode')->post([
  'card_id' => 'pbLatjvWOibDc5-TBnbUk1pD12o0',
  'json' => [
    'activate_type' => 'AUTO_ACTIVATE',
    'activate_url' => 'https://w.url.cn/s/Ahz3p2C',
    'activate_appid' => 'wxea9c30a90fs8d3fe',
    'activate_path' => 'pages/activate/activate',
    'outer_str' => 'szwxtd',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/marketing/membercard-open/cards/{card_id}/qrcode']->post([
  'card_id' => 'pbLatjvWOibDc5-TBnbUk1pD12o0',
  'json' => [
    'activate_type' => 'AUTO_ACTIVATE',
    'activate_url' => 'https://w.url.cn/s/Ahz3p2C',
    'activate_appid' => 'wxea9c30a90fs8d3fe',
    'activate_path' => 'pages/activate/activate',
    'outer_str' => 'szwxtd',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| url {data-required}| string | 二维码对应的url

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/marketing/membercard_open/chapter4_3.shtml)
