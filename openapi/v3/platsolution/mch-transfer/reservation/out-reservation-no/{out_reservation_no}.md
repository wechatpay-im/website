---
title: 商户预约单号查询预约商家转账记录
description: 商户可通过接口查询预约商家转账记录详情。预计最晚转账日期、预计最大转账金额等预约相关信息，仅在预约记录状态为已预约或已关闭且关闭原因不为用户超时未确认、商户通过API主动关闭已受理的记录、预约失败后关闭时返回。API提供的查询时限为3个月，创建时间超过3个月的预约记录不支持查询。
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| out_reservation_no | string | 商户预约单号
| query | object | 声明请求的查询参数
| sub_mchid {data-indent=1} | string | 二级商户号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->platsolution->mchTransfer->reservation->outReservationNo->_out_reservation_no_->getAsync([
  'out_reservation_no' => 'plfk2020042013',
  'query' => [
    'sub_mchid' => '1900001109',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/platsolution/mch-transfer/reservation/out-reservation-no/{out_reservation_no}')->getAsync([
  'out_reservation_no' => 'plfk2020042013',
  'query' => [
    'sub_mchid' => '1900001109',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/platsolution/mch-transfer/reservation/out-reservation-no/{out_reservation_no}']->getAsync([
  'out_reservation_no' => 'plfk2020042013',
  'query' => [
    'sub_mchid' => '1900001109',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->platsolution->mchTransfer->reservation->outReservationNo->_out_reservation_no_->get([
  'out_reservation_no' => 'plfk2020042013',
  'query' => [
    'sub_mchid' => '1900001109',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/platsolution/mch-transfer/reservation/out-reservation-no/{out_reservation_no}')->get([
  'out_reservation_no' => 'plfk2020042013',
  'query' => [
    'sub_mchid' => '1900001109',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/platsolution/mch-transfer/reservation/out-reservation-no/{out_reservation_no}']->get([
  'out_reservation_no' => 'plfk2020042013',
  'query' => [
    'sub_mchid' => '1900001109',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| sp_mchid | string | 服务商商户号
| sub_mchid | string | 二级商户号
| sp_appid | string | 服务商AppID
| sub_appid | string | 二级商户AppID
| reservation_id | string | 微信转账预约单号
| out_reservation_no | string | 商户预约单号
| transfer_scene_id | string | 转账场景ID
| estimated_date | string | 预计最晚转账日期
| estimated_max_amount | number | 预计最大转账金额
| exact_amount | number | 准确转账金额
| openid | string | 收款用户OpenID
| bank_type | string | 收款银行类型
| state | string | 预约记录状态
| accept_time | string | 预约记录受理的时间
| reserve_time | string | 预约记录用户确认预约的时间
| close_info | object | 预约记录的关闭信息
| close_time {data-indent=1} | string | 预约记录关闭的时间
| close_reason {data-indent=1} | string | 预约记录关闭的原因

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/docs/partner/apis/platsolution-mch-transfer/transfer-reservation/transfer-reservation-get-by-out-no.html)
