---
title: 查询图片生成任务执行结果
description: 查询图片生成任务执行结果。频率限制：500/s
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| task_id {data-required} | string | 图片生成的任务ID
| query {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的查询参数
| brand_id {data-required data-indent=1} | string | 品牌ID
| image_generation_type {data-required data-indent=1} | string | 图片生成类型<br/>`COMBINE_IMAGE` \| `CUT_OUT` 枚举值之一

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->marketing->partner->productCoupon->imageGenerationTasks->_task_id_->getAsync([
  'task_id' => 'image_generation_task_1',
  'query' => [
    'brand_id'              => '120344',
    'image_generation_type' => 'COMBINE_IMAGE',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/marketing/partner/product-coupon/image-generation-tasks/{task_id}')->getAsync([
  'task_id' => 'image_generation_task_1',
  'query' => [
    'brand_id'              => '120344',
    'image_generation_type' => 'COMBINE_IMAGE',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/marketing/partner/product-coupon/image-generation-tasks/{task_id}']->getAsync([
  'task_id' => 'image_generation_task_1',
  'query' => [
    'brand_id'              => '120344',
    'image_generation_type' => 'COMBINE_IMAGE',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->marketing->partner->productCoupon->imageGenerationTasks->_task_id_->get([
  'task_id' => 'image_generation_task_1',
  'query' => [
    'brand_id'              => '120344',
    'image_generation_type' => 'COMBINE_IMAGE',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/marketing/partner/product-coupon/image-generation-tasks/{task_id}')->get([
  'task_id' => 'image_generation_task_1',
  'query' => [
    'brand_id'              => '120344',
    'image_generation_type' => 'COMBINE_IMAGE',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/marketing/partner/product-coupon/image-generation-tasks/{task_id}']->get([
  'task_id' => 'image_generation_task_1',
  'query' => [
    'brand_id'              => '120344',
    'image_generation_type' => 'COMBINE_IMAGE',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| brand_id {data-required} | string | 品牌ID
| task_id {data-required} | string | 图片生成的任务ID
| image_generation_type {data-required} | string | 图片生成类型<br/>`COMBINE_IMAGE` \| `CUT_OUT` 枚举值之一
| task_state {data-required} | string | 任务状态<br/>`PROCESSING` \| `FAIL` \| `SUCCESS` 枚举值之一
| combine_image_result | object {data-tooltip="对应PHP的array"} | 拼图结果
| image_url {data-required data-indent=1} | string | 生成的图片URL
| cut_out_result | object {data-tooltip="对应PHP的array"} | 生成商品图结果
| image_url {data-required data-indent=1} | string | 生成的图片URL

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4017327739) [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4017327753)
