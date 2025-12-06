---
title: 医保退款通知
description: 从业机构调用该接口向微信医保后台通知医保订单的退款成功结果
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| sub_mchid {data-required data-indent=1} | string | 医疗机构的商户号
| med_refund_total_fee {data-required data-indent=1} | integer | 医保退款的总金额
| med_refund__gov_fee {data-required data-indent=1} | integer | 医保统筹退款金额
| med_refund__self_fee {data-required data-indent=1} | integer | 医保个账退款金额
| med_refund__other_fee {data-required data-indent=1} | integer | 医保其他退款金额
| refund_time {data-required data-indent=1} | string | 医保退款成功时间
| out_refund_no {data-required data-indent=1} | string | 从业机构退款单号
| query {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的查询参数
| mix_trade_no {data-required data-indent=1} | string | 医保自费混合订单号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->medIns->refunds->notify->postAsync([
  'json' => [
    'sub_mchid'             => '1900000109',
    'med_refund_total_fee'  => 45000,
    'med_refund__gov_fee'   => 45000,
    'med_refund__self_fee'  => 45000,
    'med_refund__other_fee' => 45000,
    'refund_time'           => '2018-06-08T10:34:56+08:00',
    'out_refund_no'         => 'R202204022005169952975171534816',
  ],
  'query' => [
    'mix_trade_no' => '1217752501201407033233368318',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r($response->getStatusCode() === 204);
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/med-ins/refunds/notify')->postAsync([
  'json' => [
    'sub_mchid'             => '1900000109',
    'med_refund_total_fee'  => 45000,
    'med_refund__gov_fee'   => 45000,
    'med_refund__self_fee'  => 45000,
    'med_refund__other_fee' => 45000,
    'refund_time'           => '2018-06-08T10:34:56+08:00',
    'out_refund_no'         => 'R202204022005169952975171534816',
  ],
  'query' => [
    'mix_trade_no' => '1217752501201407033233368318',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r($response->getStatusCode() === 204);
})
->wait();
```

```php [异步属性式]
$instance['v3/med-ins/refunds/notify']->postAsync([
  'json' => [
    'sub_mchid'             => '1900000109',
    'med_refund_total_fee'  => 45000,
    'med_refund__gov_fee'   => 45000,
    'med_refund__self_fee'  => 45000,
    'med_refund__other_fee' => 45000,
    'refund_time'           => '2018-06-08T10:34:56+08:00',
    'out_refund_no'         => 'R202204022005169952975171534816',
  ],
  'query' => [
    'mix_trade_no' => '1217752501201407033233368318',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r($response->getStatusCode() === 204);
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->medIns->refunds->notify->post([
  'json' => [
    'sub_mchid'             => '1900000109',
    'med_refund_total_fee'  => 45000,
    'med_refund__gov_fee'   => 45000,
    'med_refund__self_fee'  => 45000,
    'med_refund__other_fee' => 45000,
    'refund_time'           => '2018-06-08T10:34:56+08:00',
    'out_refund_no'         => 'R202204022005169952975171534816',
  ],
  'query' => [
    'mix_trade_no' => '1217752501201407033233368318',
  ],
]);
print_r($response->getStatusCode() === 204);
```

```php [同步声明式]
$response = $instance->chain('v3/med-ins/refunds/notify')->post([
  'json' => [
    'sub_mchid'             => '1900000109',
    'med_refund_total_fee'  => 45000,
    'med_refund__gov_fee'   => 45000,
    'med_refund__self_fee'  => 45000,
    'med_refund__other_fee' => 45000,
    'refund_time'           => '2018-06-08T10:34:56+08:00',
    'out_refund_no'         => 'R202204022005169952975171534816',
  ],
  'query' => [
    'mix_trade_no' => '1217752501201407033233368318',
  ],
]);
print_r($response->getStatusCode() === 204);
```

```php [同步属性式]
$response = $instance['v3/med-ins/refunds/notify']->post([
  'json' => [
    'sub_mchid'             => '1900000109',
    'med_refund_total_fee'  => 45000,
    'med_refund__gov_fee'   => 45000,
    'med_refund__self_fee'  => 45000,
    'med_refund__other_fee' => 45000,
    'refund_time'           => '2018-06-08T10:34:56+08:00',
    'out_refund_no'         => 'R202204022005169952975171534816',
  ],
  'query' => [
    'mix_trade_no' => '1217752501201407033233368318',
  ],
]);
print_r($response->getStatusCode() === 204);
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| 空字符串(无返回内容) {align=center colspan=3}

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/merchant/4016781561) [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4012166534)
