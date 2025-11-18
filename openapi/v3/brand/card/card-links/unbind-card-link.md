---
title: 解除已生效交易连接名片场景
description: 接口适用场景：当服务商配置交易连接名片后，交易连接名片配置状态为“已生效”时，可调用该接口请求解除连接关系。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| brand_id {data-required data-indent=1} | string | 品牌ID
| payment_scene {data-required data-indent=1} | string | 交易场景类型<br/>`MINI_PROGRAM` \| `APP` \| `PAYMENT_SCORE` \| `PAYMENT_CODE` 枚举值之一
| appid {data-indent=1} | string | 公众账号ID
| card_link_mchid {data-indent=1} | string | 商户号
| service_id {data-indent=1} | string | 服务ID

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->brand->card->cardLinks->unbindCardLink->postAsync([
  'json' => [
    'brand_id'        => '1004',
    'payment_scene'   => 'MINI_PROGRAM',
    'appid'           => 'wxea9c30890f48d5ae',
    'card_link_mchid' => '111222333',
    'service_id'      => '00005000000000548218251086296300',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/brand/card/card-links/unbind-card-link')->postAsync([
  'json' => [
    'brand_id'        => '1004',
    'payment_scene'   => 'MINI_PROGRAM',
    'appid'           => 'wxea9c30890f48d5ae',
    'card_link_mchid' => '111222333',
    'service_id'      => '00005000000000548218251086296300',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/brand/card/card-links/unbind-card-link']->postAsync([
  'json' => [
    'brand_id'        => '1004',
    'payment_scene'   => 'MINI_PROGRAM',
    'appid'           => 'wxea9c30890f48d5ae',
    'card_link_mchid' => '111222333',
    'service_id'      => '00005000000000548218251086296300',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->brand->card->cardLinks->unbindCardLink->post([
  'json' => [
    'brand_id'        => '1004',
    'payment_scene'   => 'MINI_PROGRAM',
    'appid'           => 'wxea9c30890f48d5ae',
    'card_link_mchid' => '111222333',
    'service_id'      => '00005000000000548218251086296300',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/brand/card/card-links/unbind-card-link')->post([
  'json' => [
    'brand_id'        => '1004',
    'payment_scene'   => 'MINI_PROGRAM',
    'appid'           => 'wxea9c30890f48d5ae',
    'card_link_mchid' => '111222333',
    'service_id'      => '00005000000000548218251086296300',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/brand/card/card-links/unbind-card-link']->post([
  'json' => [
    'brand_id'        => '1004',
    'payment_scene'   => 'MINI_PROGRAM',
    'appid'           => 'wxea9c30890f48d5ae',
    'card_link_mchid' => '111222333',
    'service_id'      => '00005000000000548218251086296300',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| brand_id {data-required} | string | 品牌ID
| payment_scene {data-required} | string | 交易场景类型<br/>`MINI_PROGRAM` \| `APP` \| `PAYMENT_SCORE` \| `PAYMENT_CODE` 枚举值之一
| appid | string | 公众账号ID
| card_link_mchid | string | 商户号
| service_id | string | 服务ID

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4016366804)
