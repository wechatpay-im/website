---
title: 新增活动发券商户号
description: 商户创建活动后，可以通过该接口增加支付有礼的发券商户号，用于管理活动。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| activity_id {data-required} | string | 活动id
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| merchant_id_list {data-indent=1} | string[] | 发券商户号
| add_request_no {data-indent=1} | string | 请求业务单据号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->marketing->paygiftactivity->activities->_activity_id_->merchants->add->postAsync([
  'activity_id' => '',
  'json' => [
    'merchant_id_list' => ['string'],
    'add_request_no'   => '',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/marketing/paygiftactivity/activities/{activity_id}/merchants/add')->postAsync([
  'activity_id' => '',
  'json' => [
    'merchant_id_list' => ['string'],
    'add_request_no'   => '',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/marketing/paygiftactivity/activities/{activity_id}/merchants/add']->postAsync([
  'activity_id' => '',
  'json' => [
    'merchant_id_list' => ['string'],
    'add_request_no'   => '',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->marketing->paygiftactivity->activities->_activity_id_->merchants->add->post([
  'activity_id' => '',
  'json' => [
    'merchant_id_list' => ['string'],
    'add_request_no'   => '',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/marketing/paygiftactivity/activities/{activity_id}/merchants/add')->post([
  'activity_id' => '',
  'json' => [
    'merchant_id_list' => ['string'],
    'add_request_no'   => '',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/marketing/paygiftactivity/activities/{activity_id}/merchants/add']->post([
  'activity_id' => '',
  'json' => [
    'merchant_id_list' => ['string'],
    'add_request_no'   => '',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| activity_id | string | 活动id
| add_time | string | 添加时间
| invalid_merchant_id_list | object[] {data-tooltip="对应PHP的array"} | 未通过规则校验的发券商户号列表
| mchid {data-indent=1} | string | 商户号
| invalid_reason {data-indent=1} | string | 无效原因

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/marketing/paygiftactivity/chapter3_8.shtml)
