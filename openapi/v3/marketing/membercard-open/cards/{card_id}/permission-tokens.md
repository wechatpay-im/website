---
title: 商户预授权
description: 生成商户预授权投放会员卡的凭证
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| card_id {data-required} | string | 会员卡模板id
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| activate_type {data-required data-indent=1} | string | 激活类型
| navigate_back_previous_page {data-indent=1} | boolean | 设置用户在开卡完成后，是否返回拉起开卡组件的商家页面
| activate_url {data-indent=1} | string | 跳转激活的url
| activate_appid {data-indent=1} | string | 跳转激活的appid
| activate_path {data-indent=1} | string | 跳转激活的path
| outer_str {data-indent=1} | string | 自定义场景值

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->marketing->membercardOpen->cards->_card_id_->permissionTokens->postAsync([
  'card_id' => 'pbLatjvWOibDc5-TBnbUk1pD12o0',
  'json' => [
    'activate_type' => 'AUTO_ACTIVATE',
    'navigate_back_previous_page' => true,
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
$instance->chain('v3/marketing/membercard-open/cards/{card_id}/permission-tokens')->postAsync([
  'card_id' => 'pbLatjvWOibDc5-TBnbUk1pD12o0',
  'json' => [
    'activate_type' => 'AUTO_ACTIVATE',
    'navigate_back_previous_page' => true,
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
$instance['v3/marketing/membercard-open/cards/{card_id}/permission-tokens']->postAsync([
  'card_id' => 'pbLatjvWOibDc5-TBnbUk1pD12o0',
  'json' => [
    'activate_type' => 'AUTO_ACTIVATE',
    'navigate_back_previous_page' => true,
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
$response = $instance->v3->marketing->membercardOpen->cards->_card_id_->permissionTokens->post([
  'card_id' => 'pbLatjvWOibDc5-TBnbUk1pD12o0',
  'json' => [
    'activate_type' => 'AUTO_ACTIVATE',
    'navigate_back_previous_page' => true,
    'activate_url' => 'https://w.url.cn/s/Ahz3p2C',
    'activate_appid' => 'wxea9c30a90fs8d3fe',
    'activate_path' => 'pages/activate/activate',
    'outer_str' => 'szwxtd',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/marketing/membercard-open/cards/{card_id}/permission-tokens')->post([
  'card_id' => 'pbLatjvWOibDc5-TBnbUk1pD12o0',
  'json' => [
    'activate_type' => 'AUTO_ACTIVATE',
    'navigate_back_previous_page' => true,
    'activate_url' => 'https://w.url.cn/s/Ahz3p2C',
    'activate_appid' => 'wxea9c30a90fs8d3fe',
    'activate_path' => 'pages/activate/activate',
    'outer_str' => 'szwxtd',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/marketing/membercard-open/cards/{card_id}/permission-tokens']->post([
  'card_id' => 'pbLatjvWOibDc5-TBnbUk1pD12o0',
  'json' => [
    'activate_type' => 'AUTO_ACTIVATE',
    'navigate_back_previous_page' => true,
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
| permission_token {data-required}| string | 预授权token

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/marketing/membercard_open/chapter4_7.shtml)
