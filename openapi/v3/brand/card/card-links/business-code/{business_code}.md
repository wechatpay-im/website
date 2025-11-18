---
title: 根据业务申请编号查询添加申请状态
description: 接口适用场景：服务商申请添加交易连接名片规则后，可调用此接口查询申请状态。
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| business_code {data-required} | string | 业务申请编号
| query {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的查询参数
| brand_id {data-required data-indent=1} | string | 品牌ID

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->brand->card->cardLinks->businessCode->_business_code_->getAsync([
  'business_code' => '190001351110000',
  'query' => [
    'brand_id' => '120344',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/brand/card/card-links/business-code/{business_code}')->getAsync([
  'business_code' => '190001351110000',
  'query' => [
    'brand_id' => '120344',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/brand/card/card-links/business-code/{business_code}']->getAsync([
  'business_code' => '190001351110000',
  'query' => [
    'brand_id' => '120344',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->brand->card->cardLinks->businessCode->_business_code_->get([
  'business_code' => '190001351110000',
  'query' => [
    'brand_id' => '120344',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/brand/card/card-links/business-code/{business_code}')->get([
  'business_code' => '190001351110000',
  'query' => [
    'brand_id' => '120344',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/brand/card/card-links/business-code/{business_code}']->get([
  'business_code' => '190001351110000',
  'query' => [
    'brand_id' => '120344',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| business_code {data-required} | string | 业务申请编号
| brand_id {data-required} | string | 品牌ID
| payment_scene {data-required} | string | 交易场景类型<br/>`MINI_PROGRAM` \| `APP` \| `PAYMENT_SCORE` \| `PAYMENT_CODE` 枚举值之一
| appid | string | 公众账号ID
| card_link_mchid | string | 商户号
| service_id | string | 服务ID
| configuration_state {data-required} | string | 交易连接名片配置状态<br/>`WAITING_AUDIT` \| `AUDIT_REJECT` \| `WAITING_CONFIRMATION` \| `MERCHANT_ADMIN_REJECT` \| `IN_EFFECT` 枚举值之一
| reject_reason | string | 驳回原因

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4016366816)
