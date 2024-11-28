---
title: 查询用户在品牌下所有会员卡
description: 通过此接口可查询用户在当前品牌下领取的所有会员卡
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| query {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的查询参数
| openid {data-required data-indent=1} | string | 用户标识
| appid {data-indent=1} | string | 商户AppId
| offset {data-required data-indent=1} | integer | 分页页码
| limit {data-required data-indent=1} | integer | 分页大小

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->marketing->membercardOpen->user->cards->getAsync([
  'query' => [
    'openid' => 'obLatjnx9gnqzS4myYGmLZ7LgLBA',
    'appid' => 'wxea9c30890f48d5ae',
    'offset' => 0,
    'limit' => 0,
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/marketing/membercard-open/user/cards')->getAsync([
  'query' => [
    'openid' => 'obLatjnx9gnqzS4myYGmLZ7LgLBA',
    'appid' => 'wxea9c30890f48d5ae',
    'offset' => 0,
    'limit' => 0,
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/marketing/membercard-open/user/cards']->getAsync([
  'query' => [
    'openid' => 'obLatjnx9gnqzS4myYGmLZ7LgLBA',
    'appid' => 'wxea9c30890f48d5ae',
    'offset' => 0,
    'limit' => 0,
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->marketing->membercardOpen->user->cards->get([
  'query' => [
    'openid' => 'obLatjnx9gnqzS4myYGmLZ7LgLBA',
    'appid' => 'wxea9c30890f48d5ae',
    'offset' => 0,
    'limit' => 0,
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/marketing/membercard-open/user/cards')->get([
  'query' => [
    'openid' => 'obLatjnx9gnqzS4myYGmLZ7LgLBA',
    'appid' => 'wxea9c30890f48d5ae',
    'offset' => 0,
    'limit' => 0,
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/marketing/membercard-open/user/cards']->get([
  'query' => [
    'openid' => 'obLatjnx9gnqzS4myYGmLZ7LgLBA',
    'appid' => 'wxea9c30890f48d5ae',
    'offset' => 0,
    'limit' => 0,
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| data | object[] {data-tooltip="对应PHP的array"} | 会员卡列表
| card_id {data-indent=1} | string | 会员卡id
| code {data-indent=1} | string | 会员卡code
| total_count {data-required} | integer | 总数量
| offset {data-required} | integer | 分页页码
| limit {data-required} | integer | 分页大小

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/marketing/membercard_open/chapter3_5.shtml)
