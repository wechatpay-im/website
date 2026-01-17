---
title: 添加会员卡服务项
description: 在会员卡模板上添加并展示某个会员服务项，指定添加服务项id后会在会员卡上展示对应的会员服务
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| card_id {data-required} | string | 会员卡id
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| service_module_id {data-required data-indent=1} | string | 会员服务项ID
| jump_miniprogram {data-required data-indent=1} | object {data-tooltip="对应PHP的array"} | 跳转小程序
| appid {data-required data-indent=2} | string | 小程序appid
| path {data-required data-indent=2} | string | 小程序path

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->marketing->membercardOpen->cards->_card_id_->serviceModules->postAsync([
  'card_id' => 'pbLatjvWOibDc5-TBnbUk1pD12o0',
  'json' => [
    'service_module_id' => '666',
    'jump_miniprogram'  => [
      'appid' => 'wx37178d097a6851d8',
      'path'  => 'pages/index/index',
    ],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/marketing/membercard-open/cards/{card_id}/service-modules')->postAsync([
  'card_id' => 'pbLatjvWOibDc5-TBnbUk1pD12o0',
  'json' => [
    'service_module_id' => '666',
    'jump_miniprogram'  => [
      'appid' => 'wx37178d097a6851d8',
      'path'  => 'pages/index/index',
    ],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/marketing/membercard-open/cards/{card_id}/service-modules']->postAsync([
  'card_id' => 'pbLatjvWOibDc5-TBnbUk1pD12o0',
  'json' => [
    'service_module_id' => '666',
    'jump_miniprogram'  => [
      'appid' => 'wx37178d097a6851d8',
      'path'  => 'pages/index/index',
    ],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->marketing->membercardOpen->cards->_card_id_->serviceModules->post([
  'card_id' => 'pbLatjvWOibDc5-TBnbUk1pD12o0',
  'json' => [
    'service_module_id' => '666',
    'jump_miniprogram'  => [
      'appid' => 'wx37178d097a6851d8',
      'path'  => 'pages/index/index',
    ],
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/marketing/membercard-open/cards/{card_id}/service-modules')->post([
  'card_id' => 'pbLatjvWOibDc5-TBnbUk1pD12o0',
  'json' => [
    'service_module_id' => '666',
    'jump_miniprogram'  => [
      'appid' => 'wx37178d097a6851d8',
      'path'  => 'pages/index/index',
    ],
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/marketing/membercard-open/cards/{card_id}/service-modules']->post([
  'card_id' => 'pbLatjvWOibDc5-TBnbUk1pD12o0',
  'json' => [
    'service_module_id' => '666',
    'jump_miniprogram'  => [
      'appid' => 'wx37178d097a6851d8',
      'path'  => 'pages/index/index',
    ],
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| card_id {data-required} | string | 会员卡id
| service_module_id {data-required} | string | 会员服务项ID
| jump_miniprogram {data-required} | object {data-tooltip="对应PHP的array"} | 跳转小程序
| appid {data-required data-indent=1} | string | 小程序appid
| path {data-required data-indent=1} | string | 小程序path

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/merchant/4017167277) [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4017176338)
