---
title: 发布商家名片配置
description: 商家在预览确认商家名片配置无误后，平台服务商可通过本接口正式提交发布申请。提交后将启动审核流程，审核通过后商家名片将在指定时间（立即或定时）正式发布生效。服务商可通过查询接口跟踪审核进度和结果。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

::: warning :pushpin: {.im-important}

注意：提交发布审核通过后，​​发布操作会立即（或定时）将线上环境的名片配置替换为当前最新通过审核的版本，每次发布都会生成一个新的线上版本。

:::

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| business_code {data-indent=1} | string | 业务申请编号
| applyment_id {data-indent=1} | string | 微信支付申请单号
| brand_id {data-required data-indent=1} | string | 品牌ID
| publish_type {data-required data-indent=1} | string | 发布方式<br/>`IMMEDIATE_PUBLISH` \| `SCHEDULED_PUBLISH` 枚举值之一
| scheduled_publish_time {data-indent=1} | string | 定时发布时间

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->brand->card->cardConfigs->publish->postAsync([
  'json' => [
    'business_code'          => '190001351110000',
    'applyment_id'           => '1111111111',
    'brand_id'               => '1004',
    'publish_type'           => 'SCHEDULED_PUBLISH',
    'scheduled_publish_time' => '2025-05-20T13:29:35+08:00',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/brand/card/card-configs/publish')->postAsync([
  'json' => [
    'business_code'          => '190001351110000',
    'applyment_id'           => '1111111111',
    'brand_id'               => '1004',
    'publish_type'           => 'SCHEDULED_PUBLISH',
    'scheduled_publish_time' => '2025-05-20T13:29:35+08:00',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/brand/card/card-configs/publish']->postAsync([
  'json' => [
    'business_code'          => '190001351110000',
    'applyment_id'           => '1111111111',
    'brand_id'               => '1004',
    'publish_type'           => 'SCHEDULED_PUBLISH',
    'scheduled_publish_time' => '2025-05-20T13:29:35+08:00',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->brand->card->cardConfigs->publish->post([
  'json' => [
    'business_code'          => '190001351110000',
    'applyment_id'           => '1111111111',
    'brand_id'               => '1004',
    'publish_type'           => 'SCHEDULED_PUBLISH',
    'scheduled_publish_time' => '2025-05-20T13:29:35+08:00',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/brand/card/card-configs/publish')->post([
  'json' => [
    'business_code'          => '190001351110000',
    'applyment_id'           => '1111111111',
    'brand_id'               => '1004',
    'publish_type'           => 'SCHEDULED_PUBLISH',
    'scheduled_publish_time' => '2025-05-20T13:29:35+08:00',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/brand/card/card-configs/publish']->post([
  'json' => [
    'business_code'          => '190001351110000',
    'applyment_id'           => '1111111111',
    'brand_id'               => '1004',
    'publish_type'           => 'SCHEDULED_PUBLISH',
    'scheduled_publish_time' => '2025-05-20T13:29:35+08:00',
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
| publish_type {data-required} | string | 发布方式<br/>`IMMEDIATE_PUBLISH` \| `SCHEDULED_PUBLISH` 枚举值之一
| scheduled_publish_time | string | 定时发布时间

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4016475176)
