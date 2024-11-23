---
title: 预受理领卡请求
description: 商户在引导用户跳转先享卡领卡前，需要请求先享卡预受理领卡请求接口，再根据返回数据引导用户跳转领卡。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| out_card_code {data-required data-indent=1} | string | 商户领卡号
| card_template_id {data-required data-indent=1} | string | 卡模板ID
| appid {data-required data-indent=1} | string | 公众账号ID
| notify_url {data-required data-indent=1} | string | 通知商户URL

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->discountCard->cards->postAsync([
  'json' => [
    'out_card_code' => '6e8369071cd942c0476613f9d1ce9ca3',
    'card_template_id' => '87789b2f25177433bcbf407e8e471f95',
    'appid' => 'wxd678efh567hg6787',
    'notify_url' => 'https://api.test.com',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/discount-card/cards')->postAsync([
  'json' => [
    'out_card_code' => '6e8369071cd942c0476613f9d1ce9ca3',
    'card_template_id' => '87789b2f25177433bcbf407e8e471f95',
    'appid' => 'wxd678efh567hg6787',
    'notify_url' => 'https://api.test.com',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/discount-card/cards']->postAsync([
  'json' => [
    'out_card_code' => '6e8369071cd942c0476613f9d1ce9ca3',
    'card_template_id' => '87789b2f25177433bcbf407e8e471f95',
    'appid' => 'wxd678efh567hg6787',
    'notify_url' => 'https://api.test.com',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->discountCard->cards->post([
  'json' => [
    'out_card_code' => '6e8369071cd942c0476613f9d1ce9ca3',
    'card_template_id' => '87789b2f25177433bcbf407e8e471f95',
    'appid' => 'wxd678efh567hg6787',
    'notify_url' => 'https://api.test.com',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/discount-card/cards')->post([
  'json' => [
    'out_card_code' => '6e8369071cd942c0476613f9d1ce9ca3',
    'card_template_id' => '87789b2f25177433bcbf407e8e471f95',
    'appid' => 'wxd678efh567hg6787',
    'notify_url' => 'https://api.test.com',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/discount-card/cards']->post([
  'json' => [
    'out_card_code' => '6e8369071cd942c0476613f9d1ce9ca3',
    'card_template_id' => '87789b2f25177433bcbf407e8e471f95',
    'appid' => 'wxd678efh567hg6787',
    'notify_url' => 'https://api.test.com',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| prepare_card_token {data-required}| string | 预领卡请求token

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/discount-card/chapter3_1.shtml)
