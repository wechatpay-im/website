---
title: 申请企业商户企业支付出资凭证
description: 申请企业商户企业支付出资凭证。该接口允许服务商为指定出资子商户申请特定日期范围内的企业支付出资凭证，便于企业财务记账和报销管理。出资凭证包含企业支付交易的详细信息，可用于财务核对和税务申报。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| sp_mchid {data-required data-indent=1} | string | 服务商商户号
| sub_mchid {data-required data-indent=1} | string | 出资子商户号
| start_date {data-required data-indent=1} | string | 起始日期
| end_date {data-required data-indent=1} | string | 结束日期
| entity_name {data-indent=1} | string | 商户主体名称
| out_operation_id {data-required data-indent=1} | string | 商户操作流水号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->webizpay->bill->proof->postAsync([
  'json' => [
    'sp_mchid'         => '12341234',
    'sub_mchid'        => '43214321',
    'start_date'       => '2025-04-23',
    'end_date'         => '2025-04-23',
    'entity_name'      => '某某科技有限公司',
    'out_operation_id' => 'operation12345678',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/webizpay/bill/proof')->postAsync([
  'json' => [
    'sp_mchid'         => '12341234',
    'sub_mchid'        => '43214321',
    'start_date'       => '2025-04-23',
    'end_date'         => '2025-04-23',
    'entity_name'      => '某某科技有限公司',
    'out_operation_id' => 'operation12345678',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/webizpay/bill/proof']->postAsync([
  'json' => [
    'sp_mchid'         => '12341234',
    'sub_mchid'        => '43214321',
    'start_date'       => '2025-04-23',
    'end_date'         => '2025-04-23',
    'entity_name'      => '某某科技有限公司',
    'out_operation_id' => 'operation12345678',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->webizpay->bill->proof->post([
  'json' => [
    'sp_mchid'         => '12341234',
    'sub_mchid'        => '43214321',
    'start_date'       => '2025-04-23',
    'end_date'         => '2025-04-23',
    'entity_name'      => '某某科技有限公司',
    'out_operation_id' => 'operation12345678',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/webizpay/bill/proof')->post([
  'json' => [
    'sp_mchid'         => '12341234',
    'sub_mchid'        => '43214321',
    'start_date'       => '2025-04-23',
    'end_date'         => '2025-04-23',
    'entity_name'      => '某某科技有限公司',
    'out_operation_id' => 'operation12345678',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/webizpay/bill/proof']->post([
  'json' => [
    'sp_mchid'         => '12341234',
    'sub_mchid'        => '43214321',
    'start_date'       => '2025-04-23',
    'end_date'         => '2025-04-23',
    'entity_name'      => '某某科技有限公司',
    'out_operation_id' => 'operation12345678',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| sp_mchid {data-required} | string | 服务商商户号
| out_operation_id {data-required} | string | 商户操作流水号
| operation_id {data-required} | string | 微信支付操作流水号
| sub_mchid {data-required} | string | 出资子商户号
| start_date {data-required} | string | 起始日期
| end_date {data-required} | string | 结束日期
| entity_name {data-required} | string | 商户主体名称
| proof_id {data-required} | string | 出资凭证申请单单号
| download_url {data-required} | string | 凭证下载地址
| create_time {data-required} | string | 凭证申请创建时间
| updated_time {data-required} | string | 凭证状态更新时间

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4014507157)
