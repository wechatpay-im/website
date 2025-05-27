---
title: 回传处置结果
description: 商户查询订单风险后，调用该接口回传对风险订单/风险商户的调查、处置信息。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| sp_mchid {data-indent=1} | string | 服务商商户号
| sub_mchid {data-indent=1} | string | 子商户号
| mchid {data-indent=1} | string | 商户号
| out_trade_no {data-required data-indent=1} | string | 商户订单号
| final_risk_result {data-indent=1} | number | 最终风险结论<br/>`1` \| `2` 枚举值之一
| final_risk_type {data-indent=1} | number | 最终风险类型<br/>`1` \| `2` \| `3` \| `4` 枚举值之一
| disp_conclusion {data-indent=1} | number[] | 处置结论<br/>`1` \| `2` \| `3` 枚举值之一
| disp_addition {data-indent=1} | string | 处置补充
| exist_complaint {data-indent=1} | boolean | 是否有投诉
| refund_amount {data-indent=1} | number | 退款金额

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->merchantRiskManage->ecTradeRisk->recvDisposeResult->postAsync([
  'json' => [
    'sp_mchid'          => '1900000109',
    'sub_mchid'         => '1900009231',
    'mchid'             => '1900009231',
    'out_trade_no'      => '20150806125346',
    'final_risk_result' => 1,
    'final_risk_type'   => 1,
    'disp_conclusion'   => [1, 2, 3],
    'disp_addition'     => 'example_disp_addition',
    'exist_complaint'   => true,
    'refund_amount'     => 100,
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/merchant-risk-manage/ec-trade-risk/recv-dispose-result')->postAsync([
  'json' => [
    'sp_mchid'          => '1900000109',
    'sub_mchid'         => '1900009231',
    'mchid'             => '1900009231',
    'out_trade_no'      => '20150806125346',
    'final_risk_result' => 1,
    'final_risk_type'   => 1,
    'disp_conclusion'   => [1, 2, 3],
    'disp_addition'     => 'example_disp_addition',
    'exist_complaint'   => true,
    'refund_amount'     => 100,
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/merchant-risk-manage/ec-trade-risk/recv-dispose-result']->postAsync([
  'json' => [
    'sp_mchid'          => '1900000109',
    'sub_mchid'         => '1900009231',
    'mchid'             => '1900009231',
    'out_trade_no'      => '20150806125346',
    'final_risk_result' => 1,
    'final_risk_type'   => 1,
    'disp_conclusion'   => [1, 2, 3],
    'disp_addition'     => 'example_disp_addition',
    'exist_complaint'   => true,
    'refund_amount'     => 100,
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->merchantRiskManage->ecTradeRisk->recvDisposeResult->post([
  'json' => [
    'sp_mchid'          => '1900000109',
    'sub_mchid'         => '1900009231',
    'mchid'             => '1900009231',
    'out_trade_no'      => '20150806125346',
    'final_risk_result' => 1,
    'final_risk_type'   => 1,
    'disp_conclusion'   => [1, 2, 3],
    'disp_addition'     => 'example_disp_addition',
    'exist_complaint'   => true,
    'refund_amount'     => 100,
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/merchant-risk-manage/ec-trade-risk/recv-dispose-result')->post([
  'json' => [
    'sp_mchid'          => '1900000109',
    'sub_mchid'         => '1900009231',
    'mchid'             => '1900009231',
    'out_trade_no'      => '20150806125346',
    'final_risk_result' => 1,
    'final_risk_type'   => 1,
    'disp_conclusion'   => [1, 2, 3],
    'disp_addition'     => 'example_disp_addition',
    'exist_complaint'   => true,
    'refund_amount'     => 100,
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/merchant-risk-manage/ec-trade-risk/recv-dispose-result']->post([
  'json' => [
    'sp_mchid'          => '1900000109',
    'sub_mchid'         => '1900009231',
    'mchid'             => '1900009231',
    'out_trade_no'      => '20150806125346',
    'final_risk_result' => 1,
    'final_risk_type'   => 1,
    'disp_conclusion'   => [1, 2, 3],
    'disp_addition'     => 'example_disp_addition',
    'exist_complaint'   => true,
    'refund_amount'     => 100,
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| rsp_msg | string | 返回描述

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/merchant/4013894250) [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4013894227)
