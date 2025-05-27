---
title: 查询风险订单
description: 商户可调用该接口，查询风险订单，从而进行之后的风险管控&生态建设。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| sp_mchid {data-indent=1} | string | 服务商商户号
| sub_mchid {data-indent=1} | string | 子商户号
| mchid {data-indent=1} | string | 商户号
| start_time {data-indent=1} | string | 开始时间
| end_time {data-indent=1} | string | 结束时间
| page_index {data-indent=1} | number | 查询页码
| page_size {data-indent=1} | number | 查询页大小

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->merchantRiskManage->ecTradeRisk->queryRiskTrades->postAsync([
  'json' => [
    'sp_mchid'   => '1900000109',
    'sub_mchid'  => '1900009231',
    'mchid'      => '1900009231',
    'start_time' => '2025-05-20T13:29:35+08:00',
    'end_time'   => '2025-05-20T13:29:35+08:00',
    'page_index' => 1,
    'page_size'  => 10,
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/merchant-risk-manage/ec-trade-risk/query-risk-trades')->postAsync([
  'json' => [
    'sp_mchid'   => '1900000109',
    'sub_mchid'  => '1900009231',
    'mchid'      => '1900009231',
    'start_time' => '2025-05-20T13:29:35+08:00',
    'end_time'   => '2025-05-20T13:29:35+08:00',
    'page_index' => 1,
    'page_size'  => 10,
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/merchant-risk-manage/ec-trade-risk/query-risk-trades']->postAsync([
  'json' => [
    'sp_mchid'   => '1900000109',
    'sub_mchid'  => '1900009231',
    'mchid'      => '1900009231',
    'start_time' => '2025-05-20T13:29:35+08:00',
    'end_time'   => '2025-05-20T13:29:35+08:00',
    'page_index' => 1,
    'page_size'  => 10,
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->merchantRiskManage->ecTradeRisk->queryRiskTrades->post([
  'json' => [
    'sp_mchid'   => '1900000109',
    'sub_mchid'  => '1900009231',
    'mchid'      => '1900009231',
    'start_time' => '2025-05-20T13:29:35+08:00',
    'end_time'   => '2025-05-20T13:29:35+08:00',
    'page_index' => 1,
    'page_size'  => 10,
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/merchant-risk-manage/ec-trade-risk/query-risk-trades')->post([
  'json' => [
    'sp_mchid'   => '1900000109',
    'sub_mchid'  => '1900009231',
    'mchid'      => '1900009231',
    'start_time' => '2025-05-20T13:29:35+08:00',
    'end_time'   => '2025-05-20T13:29:35+08:00',
    'page_index' => 1,
    'page_size'  => 10,
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/merchant-risk-manage/ec-trade-risk/query-risk-trades']->post([
  'json' => [
    'sp_mchid'   => '1900000109',
    'sub_mchid'  => '1900009231',
    'mchid'      => '1900009231',
    'start_time' => '2025-05-20T13:29:35+08:00',
    'end_time'   => '2025-05-20T13:29:35+08:00',
    'page_index' => 1,
    'page_size'  => 10,
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| total_num | number | 总风险订单数
| risk_trade_list | object[] {data-tooltip="对应PHP的array"} | 风险订单列表
| mchid {data-indent=1} | string | 商户号
| out_trade_no {data-indent=1} | string | 商户订单号
| risk_type {data-indent=1} | number | 风险类型<br/>`1` \| `2` \| `3` \| `4` 枚举值之一
| risk_level {data-indent=1} | number | 风险等级<br/>`1` \| `2` \| `3` 枚举值之一
| risk_discove_time {data-indent=1} | string | 投诉单状态

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/merchant/4013894247) [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4013894221)
