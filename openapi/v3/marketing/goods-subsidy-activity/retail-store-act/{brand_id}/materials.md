---
title: 生成小店活动物料码
description: 该接口为服务商或商户给零售小店活动申请物料码专用接口。 使用对象：品牌的品牌主商户号或品牌服务商。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| brand_id {data-required} | string | 品牌ID
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| out_request_no {data-required data-indent=1} | string | 请求业务单据
| material_num {data-required data-indent=1} | number | 生成物料码数量

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->marketing->goodsSubsidyActivity->retailStoreAct->_brand_id_->materials->postAsync([
  'brand_id' => '1001',
  'json' => [
    'out_request_no' => '1002600620019090123143254436',
    'material_num'   => 100,
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/marketing/goods-subsidy-activity/retail-store-act/{brand_id}/materials')->postAsync([
  'brand_id' => '1001',
  'json' => [
    'out_request_no' => '1002600620019090123143254436',
    'material_num'   => 100,
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/marketing/goods-subsidy-activity/retail-store-act/{brand_id}/materials']->postAsync([
  'brand_id' => '1001',
  'json' => [
    'out_request_no' => '1002600620019090123143254436',
    'material_num'   => 100,
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->marketing->goodsSubsidyActivity->retailStoreAct->_brand_id_->materials->post([
  'brand_id' => '1001',
  'json' => [
    'out_request_no' => '1002600620019090123143254436',
    'material_num'   => 100,
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/marketing/goods-subsidy-activity/retail-store-act/{brand_id}/materials')->post([
  'brand_id' => '1001',
  'json' => [
    'out_request_no' => '1002600620019090123143254436',
    'material_num'   => 100,
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/marketing/goods-subsidy-activity/retail-store-act/{brand_id}/materials']->post([
  'brand_id' => '1001',
  'json' => [
    'out_request_no' => '1002600620019090123143254436',
    'material_num'   => 100,
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| material_list | object[] {data-tooltip="对应PHP的array"} | 成功的物料码列表
| material_id {data-indent=1} | string | 物料码ID
| material_url {data-indent=1} | string | 物料码链接

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/merchant/4012384337) [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4012384395)
