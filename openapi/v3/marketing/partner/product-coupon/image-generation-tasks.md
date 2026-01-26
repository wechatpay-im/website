---
title: 提交图片生成任务
description: 根据类型生成图片，结果将通过回调的方式告知，或通过主动查询接口获取生成结果。频率限制：500/s
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| brand_id {data-required data-indent=1} | string | 品牌ID
| task_id {data-required data-indent=1} | string | 图片生成的任务ID
| image_generation_type {data-required data-indent=1} | string | 图片生成类型<br/>`COMBINE_IMAGE` \| `CUT_OUT` 枚举值之一
| combine_image {data-indent=1} | object {data-tooltip="对应PHP的array"} | 拼图数据
| scope {data-required data-indent=2} | string | 优惠范围<br/>`ALL` \| `SINGLE` 枚举值之一
| type {data-required data-indent=2} | string | 商品券类型<br/>`NORMAL` \| `DISCOUNT` \| `EXCHANGE` 枚举值之一
| usage_mode {data-required data-indent=2} | string | 使用模式<br/>`SINGLE` \| `PROGRESSIVE_BUNDLE` 枚举值之一
| normal_coupon {data-indent=2} | object {data-tooltip="对应PHP的array"} | 满减券使用规则
| threshold {data-required data-indent=3} | integer | 门槛金额
| discount_amount {data-required data-indent=3} | integer | 固定减免金额
| discount_coupon {data-indent=2} | object {data-tooltip="对应PHP的array"} | 折扣券使用规则
| threshold {data-required data-indent=3} | integer | 门槛金额
| percent_off {data-required data-indent=3} | integer | 固定减免百分比
| exchange_coupon {data-indent=2} | object {data-tooltip="对应PHP的array"} | 兑换券使用规则
| threshold {data-required data-indent=3} | integer | 门槛金额
| exchange_price {data-required data-indent=3} | integer | 固定兑换价格
| background_color {data-indent=2} | string | 背景颜色色值
| cut_out {data-indent=1} | object {data-tooltip="对应PHP的array"} | 抠图数据
| image_url {data-required data-indent=2} | string | 商品图URL

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->marketing->partner->productCoupon->imageGenerationTasks->postAsync([
  'json' => [
    'brand_id'              => '120344',
    'task_id'               => 'image_generation_task_1',
    'image_generation_type' => 'COMBINE_IMAGE',
    'combine_image'         => [
      'scope'            => 'ALL',
      'type'             => 'NORMAL',
      'usage_mode'       => 'SINGLE',
      'normal_coupon'    => [
        'threshold'       => 10000,
        'discount_amount' => 1,
      ],
      'discount_coupon'  => [
        'threshold'   => 10000,
        'percent_off' => 20,
      ],
      'exchange_coupon'  => [
        'threshold'      => 10000,
        'exchange_price' => 20,
      ],
      'background_color' => '#ff5733',
    ],
    'cut_out'               => [
      'image_url' => 'https://wxpaylogo.qpic.cn/wxpaylogo/example.jpg',
    ],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/marketing/partner/product-coupon/image-generation-tasks')->postAsync([
  'json' => [
    'brand_id'              => '120344',
    'task_id'               => 'image_generation_task_1',
    'image_generation_type' => 'COMBINE_IMAGE',
    'combine_image'         => [
      'scope'            => 'ALL',
      'type'             => 'NORMAL',
      'usage_mode'       => 'SINGLE',
      'normal_coupon'    => [
        'threshold'       => 10000,
        'discount_amount' => 1,
      ],
      'discount_coupon'  => [
        'threshold'   => 10000,
        'percent_off' => 20,
      ],
      'exchange_coupon'  => [
        'threshold'      => 10000,
        'exchange_price' => 20,
      ],
      'background_color' => '#ff5733',
    ],
    'cut_out'               => [
      'image_url' => 'https://wxpaylogo.qpic.cn/wxpaylogo/example.jpg',
    ],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/marketing/partner/product-coupon/image-generation-tasks']->postAsync([
  'json' => [
    'brand_id'              => '120344',
    'task_id'               => 'image_generation_task_1',
    'image_generation_type' => 'COMBINE_IMAGE',
    'combine_image'         => [
      'scope'            => 'ALL',
      'type'             => 'NORMAL',
      'usage_mode'       => 'SINGLE',
      'normal_coupon'    => [
        'threshold'       => 10000,
        'discount_amount' => 1,
      ],
      'discount_coupon'  => [
        'threshold'   => 10000,
        'percent_off' => 20,
      ],
      'exchange_coupon'  => [
        'threshold'      => 10000,
        'exchange_price' => 20,
      ],
      'background_color' => '#ff5733',
    ],
    'cut_out'               => [
      'image_url' => 'https://wxpaylogo.qpic.cn/wxpaylogo/example.jpg',
    ],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->marketing->partner->productCoupon->imageGenerationTasks->post([
  'json' => [
    'brand_id'              => '120344',
    'task_id'               => 'image_generation_task_1',
    'image_generation_type' => 'COMBINE_IMAGE',
    'combine_image'         => [
      'scope'            => 'ALL',
      'type'             => 'NORMAL',
      'usage_mode'       => 'SINGLE',
      'normal_coupon'    => [
        'threshold'       => 10000,
        'discount_amount' => 1,
      ],
      'discount_coupon'  => [
        'threshold'   => 10000,
        'percent_off' => 20,
      ],
      'exchange_coupon'  => [
        'threshold'      => 10000,
        'exchange_price' => 20,
      ],
      'background_color' => '#ff5733',
    ],
    'cut_out'               => [
      'image_url' => 'https://wxpaylogo.qpic.cn/wxpaylogo/example.jpg',
    ],
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/marketing/partner/product-coupon/image-generation-tasks')->post([
  'json' => [
    'brand_id'              => '120344',
    'task_id'               => 'image_generation_task_1',
    'image_generation_type' => 'COMBINE_IMAGE',
    'combine_image'         => [
      'scope'            => 'ALL',
      'type'             => 'NORMAL',
      'usage_mode'       => 'SINGLE',
      'normal_coupon'    => [
        'threshold'       => 10000,
        'discount_amount' => 1,
      ],
      'discount_coupon'  => [
        'threshold'   => 10000,
        'percent_off' => 20,
      ],
      'exchange_coupon'  => [
        'threshold'      => 10000,
        'exchange_price' => 20,
      ],
      'background_color' => '#ff5733',
    ],
    'cut_out'               => [
      'image_url' => 'https://wxpaylogo.qpic.cn/wxpaylogo/example.jpg',
    ],
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/marketing/partner/product-coupon/image-generation-tasks']->post([
  'json' => [
    'brand_id'              => '120344',
    'task_id'               => 'image_generation_task_1',
    'image_generation_type' => 'COMBINE_IMAGE',
    'combine_image'         => [
      'scope'            => 'ALL',
      'type'             => 'NORMAL',
      'usage_mode'       => 'SINGLE',
      'normal_coupon'    => [
        'threshold'       => 10000,
        'discount_amount' => 1,
      ],
      'discount_coupon'  => [
        'threshold'   => 10000,
        'percent_off' => 20,
      ],
      'exchange_coupon'  => [
        'threshold'      => 10000,
        'exchange_price' => 20,
      ],
      'background_color' => '#ff5733',
    ],
    'cut_out'               => [
      'image_url' => 'https://wxpaylogo.qpic.cn/wxpaylogo/example.jpg',
    ],
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| task_id {data-required} | string | 图片生成的任务ID
| brand_id {data-required} | string | 品牌ID

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4017327735) [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4017327752)
