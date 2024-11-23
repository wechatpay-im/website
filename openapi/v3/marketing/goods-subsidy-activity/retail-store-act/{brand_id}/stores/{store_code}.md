---
title: 查询小店活动门店详情
description: 该接口为服务商或商户给零售小店活动查询门店详情专用接口。 使用对象：品牌的品牌主商户号或品牌服务商。
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| brand_id {data-required} | string | 品牌ID
| store_code {data-required} | string | 门店编码

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->marketing->goodsSubsidyActivity->retailStoreAct->_brand_id_->stores->_store_code_->getAsync([
  'brand_id' => '1001',
  'store_code' => 'abc_001',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/marketing/goods-subsidy-activity/retail-store-act/{brand_id}/stores/{store_code}')->getAsync([
  'brand_id' => '1001',
  'store_code' => 'abc_001',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/marketing/goods-subsidy-activity/retail-store-act/{brand_id}/stores/{store_code}']->getAsync([
  'brand_id' => '1001',
  'store_code' => 'abc_001',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->marketing->goodsSubsidyActivity->retailStoreAct->_brand_id_->stores->_store_code_->get([
  'brand_id' => '1001',
  'store_code' => 'abc_001',
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/marketing/goods-subsidy-activity/retail-store-act/{brand_id}/stores/{store_code}')->get([
  'brand_id' => '1001',
  'store_code' => 'abc_001',
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/marketing/goods-subsidy-activity/retail-store-act/{brand_id}/stores/{store_code}']->get([
  'brand_id' => '1001',
  'store_code' => 'abc_001',
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| store_code | string | 门店编码
| store_name | string | 门店名称

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/docs/partner/apis/retail-store/retail-store-act/get-store.html)
