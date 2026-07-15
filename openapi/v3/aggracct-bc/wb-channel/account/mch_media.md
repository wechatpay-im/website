---
title: 查询商户影像件资料
description: 查询商户影像件资料 接口限频：接口维度100次/分钟
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| query {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的查询参数
| mchid {data-indent=1} | string | 微信支付商户号
| platform_trx_id {data-indent=1} | string | 微信支付业务申请单号
| business_scene {data-required data-indent=1} | string | 业务场景<br/>`SJT_MICRO_PLUS_OPEN_ACCOUNT` \| `SJT_MICRO_PLUS_UPDATE_INFO` \| `GET_BY_MEDIA_ID` 枚举值之一
| mch_media_type {data-indent=1} | string | 影像件类型<br/>`ID_CARD_FRONT` \| `ID_CARD_BACK` \| `STORE_FRONT` \| `STORE_INTERIOR` 枚举值之一
| media_id {data-indent=1} | string | 影像件资料ID

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->aggracctBc->wbChannel->account->mch_media->getAsync([
  'query' => [
    'mchid'           => 'mchid_example',
    'platform_trx_id' => 'platform_trx_id_example',
    'business_scene'  => 'SJT_MICRO_PLUS_OPEN_ACCOUNT',
    'mch_media_type'  => 'ID_CARD_FRONT',
    'media_id'        => 'media_id_example',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/aggracct-bc/wb-channel/account/mch_media')->getAsync([
  'query' => [
    'mchid'           => 'mchid_example',
    'platform_trx_id' => 'platform_trx_id_example',
    'business_scene'  => 'SJT_MICRO_PLUS_OPEN_ACCOUNT',
    'mch_media_type'  => 'ID_CARD_FRONT',
    'media_id'        => 'media_id_example',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/aggracct-bc/wb-channel/account/mch_media']->getAsync([
  'query' => [
    'mchid'           => 'mchid_example',
    'platform_trx_id' => 'platform_trx_id_example',
    'business_scene'  => 'SJT_MICRO_PLUS_OPEN_ACCOUNT',
    'mch_media_type'  => 'ID_CARD_FRONT',
    'media_id'        => 'media_id_example',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->aggracctBc->wbChannel->account->mch_media->get([
  'query' => [
    'mchid'           => 'mchid_example',
    'platform_trx_id' => 'platform_trx_id_example',
    'business_scene'  => 'SJT_MICRO_PLUS_OPEN_ACCOUNT',
    'mch_media_type'  => 'ID_CARD_FRONT',
    'media_id'        => 'media_id_example',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/aggracct-bc/wb-channel/account/mch_media')->get([
  'query' => [
    'mchid'           => 'mchid_example',
    'platform_trx_id' => 'platform_trx_id_example',
    'business_scene'  => 'SJT_MICRO_PLUS_OPEN_ACCOUNT',
    'mch_media_type'  => 'ID_CARD_FRONT',
    'media_id'        => 'media_id_example',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/aggracct-bc/wb-channel/account/mch_media']->get([
  'query' => [
    'mchid'           => 'mchid_example',
    'platform_trx_id' => 'platform_trx_id_example',
    'business_scene'  => 'SJT_MICRO_PLUS_OPEN_ACCOUNT',
    'mch_media_type'  => 'ID_CARD_FRONT',
    'media_id'        => 'media_id_example',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| media_content | string | 文件内容
| media_type | string | 文件类型<br/>`jpg` \| `png` \| `bmp` \| `jpeg` 枚举值之一
| media_sm3 | string | 文件摘要
| key | string | sm4密钥
| media_id | string | 影像件资料ID

{.im-table #response}
