---
title: 提交商户简称变更申请单
description: 服务商使用该接口提交商家的商户简称变更申请，帮助商家修改商户简称。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| merchant_code {data-required data-indent=1} | string | 商户号
| out_request_no {data-required data-indent=1} | string | 业务申请编号
| merchant_shortname {data-required data-indent=1} | string | 商户简称

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->mchalterapply->merchantnamealterapplyment->postAsync([
  'json' => [
    'merchant_code'      => '2492185251',
    'out_request_no'     => '1900013511_10000',
    'merchant_shortname' => 'example_merchant_shortname',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/mchalterapply/merchantnamealterapplyment')->postAsync([
  'json' => [
    'merchant_code'      => '2492185251',
    'out_request_no'     => '1900013511_10000',
    'merchant_shortname' => 'example_merchant_shortname',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/mchalterapply/merchantnamealterapplyment']->postAsync([
  'json' => [
    'merchant_code'      => '2492185251',
    'out_request_no'     => '1900013511_10000',
    'merchant_shortname' => 'example_merchant_shortname',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->mchalterapply->merchantnamealterapplyment->post([
  'json' => [
    'merchant_code'      => '2492185251',
    'out_request_no'     => '1900013511_10000',
    'merchant_shortname' => 'example_merchant_shortname',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/mchalterapply/merchantnamealterapplyment')->post([
  'json' => [
    'merchant_code'      => '2492185251',
    'out_request_no'     => '1900013511_10000',
    'merchant_shortname' => 'example_merchant_shortname',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/mchalterapply/merchantnamealterapplyment']->post([
  'json' => [
    'merchant_code'      => '2492185251',
    'out_request_no'     => '1900013511_10000',
    'merchant_shortname' => 'example_merchant_shortname',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| apply_id | string | 申请单号

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4016166071)
