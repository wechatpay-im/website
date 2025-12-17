---
title: 获取商家名片预览二维码
description: 本接口用于在商家名片配置申请提交后、正式发布提交前，当预览二维码链接失效时，由平台服务商重新获取有效的预览链接，以便商家验证各跳转路径是否符合业务预期。
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| query {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的查询参数
| business_code {data-indent=1} | string | 业务申请编号
| applyment_id {data-indent=1} | string | 微信支付申请单号
| brand_id {data-required data-indent=1} | string | 品牌ID

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->brand->card->cardConfigs->previewUrl->getAsync([
  'query' => [
    'business_code' => '190001351110000',
    'applyment_id'  => '1111111111',
    'brand_id'      => '120344',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/brand/card/card-configs/preview-url')->getAsync([
  'query' => [
    'business_code' => '190001351110000',
    'applyment_id'  => '1111111111',
    'brand_id'      => '120344',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/brand/card/card-configs/preview-url']->getAsync([
  'query' => [
    'business_code' => '190001351110000',
    'applyment_id'  => '1111111111',
    'brand_id'      => '120344',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->brand->card->cardConfigs->previewUrl->get([
  'query' => [
    'business_code' => '190001351110000',
    'applyment_id'  => '1111111111',
    'brand_id'      => '120344',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/brand/card/card-configs/preview-url')->get([
  'query' => [
    'business_code' => '190001351110000',
    'applyment_id'  => '1111111111',
    'brand_id'      => '120344',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/brand/card/card-configs/preview-url']->get([
  'query' => [
    'business_code' => '190001351110000',
    'applyment_id'  => '1111111111',
    'brand_id'      => '120344',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| business_code {data-required} | string | 业务申请编号
| applyment_id {data-required} | string | 微信支付申请单号
| brand_id {data-required} | string | 品牌ID
| card_preview_url {data-required} | string | 商家名片预览二维码链接
| url_expired_time {data-required} | string | 预览二维码链接过期时间

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4016641998)
