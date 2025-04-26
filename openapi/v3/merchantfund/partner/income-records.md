---
title: 特约商户银行来账查询
description: 服务商通过本接口查询指定日期内特约商户银行来账记录列表，列表内包含特约商户银行来账相关的业务单号、金额、完成时间等信息，供服务商进行查询和核对。
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| query {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的查询参数
| sub_mchid {data-required data-indent=1} | string | 特约商户号
| account_type {data-required data-indent=1} | string | 账户类型<br/>`BASIC` \| `OPERATION` \| `FEES` 枚举值之一
| offset {data-indent=1} | integer | 本次查询偏移量
| limit {data-required data-indent=1} | integer | 本次请求最大查询条数

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->merchantfund->partner->incomeRecords->getAsync([
  'query' => [
    'sub_mchid'    => '2480253391',
    'account_type' => 'BASIC',
    'offset'       => 0,
    'limit'        => 100,
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/merchantfund/partner/income-records')->getAsync([
  'query' => [
    'sub_mchid'    => '2480253391',
    'account_type' => 'BASIC',
    'offset'       => 0,
    'limit'        => 100,
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/merchantfund/partner/income-records']->getAsync([
  'query' => [
    'sub_mchid'    => '2480253391',
    'account_type' => 'BASIC',
    'offset'       => 0,
    'limit'        => 100,
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->merchantfund->partner->incomeRecords->get([
  'query' => [
    'sub_mchid'    => '2480253391',
    'account_type' => 'BASIC',
    'offset'       => 0,
    'limit'        => 100,
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/merchantfund/partner/income-records')->get([
  'query' => [
    'sub_mchid'    => '2480253391',
    'account_type' => 'BASIC',
    'offset'       => 0,
    'limit'        => 100,
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/merchantfund/partner/income-records']->get([
  'query' => [
    'sub_mchid'    => '2480253391',
    'account_type' => 'BASIC',
    'offset'       => 0,
    'limit'        => 100,
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| total_count {data-required} | integer | 查询数据总条数
| offset {data-required} | integer | 本次查询偏移量
| limit {data-required} | integer | 本次查询条数
| data | object[] {data-tooltip="对应PHP的array"} | 银行来账记录列表
| sub_mchid {data-required data-indent=1} | string | 特约商户号
| account_type {data-required data-indent=1} | string | 账户类型<br/>`BASIC` \| `OPERATION` \| `FEES` 枚举值之一
| income_record_type {data-required data-indent=1} | string | 银行来账类型<br/>`OFFLINERECHARGE` \| `ENTERPRISEDIRECTREVENUE` 枚举值之一
| income_record_id {data-required data-indent=1} | string | 银行来账微信单号
| amount {data-required data-indent=1} | integer | 银行来账金额
| success_time {data-required data-indent=1} | string | 银行来账完成时间
| bank_name {data-required data-indent=1} | string | 付款方银行名称
| bank_account_name {data-required data-indent=1} | string | 付款方银行户名
| bank_account_number {data-required data-indent=1} | string | 付款方银行卡号
| recharge_remark {data-required data-indent=1} | string | 银行备注
| links {data-required} | object {data-tooltip="对应PHP的array"} | 分页链接
| next {data-required data-indent=1} | string | 下一页链接
| prev {data-required data-indent=1} | string | 上一页链接
| self {data-required data-indent=1} | string | 当前链接

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4012720249) [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4012718620) [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4012712728)
