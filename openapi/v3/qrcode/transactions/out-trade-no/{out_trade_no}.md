---
title: 查询订单
description: 
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| out_trade_no {data-required} | string | 商户系统内部订单号
| query | object {data-tooltip="对应PHP的array"} | 声明请求的查询参数
| sub_mchid {data-indent=1} | string | 微信支付分配的子商户号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->qrcode->transactions->outTradeNo->_out_trade_no_->getAsync([
  'out_trade_no' => '20150806125346',
  'query' => [
    'sub_mchid' => '1900000109',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/qrcode/transactions/out-trade-no/{out_trade_no}')->getAsync([
  'out_trade_no' => '20150806125346',
  'query' => [
    'sub_mchid' => '1900000109',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/qrcode/transactions/out-trade-no/{out_trade_no}']->getAsync([
  'out_trade_no' => '20150806125346',
  'query' => [
    'sub_mchid' => '1900000109',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->qrcode->transactions->outTradeNo->_out_trade_no_->get([
  'out_trade_no' => '20150806125346',
  'query' => [
    'sub_mchid' => '1900000109',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/qrcode/transactions/out-trade-no/{out_trade_no}')->get([
  'out_trade_no' => '20150806125346',
  'query' => [
    'sub_mchid' => '1900000109',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/qrcode/transactions/out-trade-no/{out_trade_no}']->get([
  'out_trade_no' => '20150806125346',
  'query' => [
    'sub_mchid' => '1900000109',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| appid | string | 公众账号ID
| sub_appid | string | 子商户公众账号ID
| sp_mchid | string | 商户号
| sub_mchid | string | 子商户号
| description | string | 服务描述
| create_time | string | 订单创建时间
| out_trade_no | string | 商户订单号
| transaction_id | string | 微信支付订单号
| trade_state | string | 交易状态<br/>`SUCCESS` \| `ACCEPTED` \| `PAY_FAIL` \| `REFUND` 枚举值之一
| trade_state_description | string | 交易状态描述
| success_time | string | 支付完成时间
| bank_type | string | 付款银行
| user_repay_state | string | 用户还款状态<br/>`NOT_REPAY` \| `REPAID` \| `ALL_REFUND` 枚举值之一
| repay_transaction_id | string | 还款微信支付订单号
| repay_time | string | 垫资还款时间
| attach | string | 附加数据
| contract_id | string | 代扣签约ID
| trade_scene | string | 交易场景<br/>`BUS` \| `METRO` 枚举值之一
| bus_info | object {data-tooltip="对应PHP的array"} | 公交场景信息
| start_time {data-indent=1} | string | 用户乘车时间（上车）
| line_name {data-indent=1} | string | 乘车路线
| plate_number {data-indent=1} | string | 车牌号。
| metro_info | object {data-tooltip="对应PHP的array"} | 地铁场景信息
| start_time {data-indent=1} | string | 用户乘车时间（上车）
| end_time {data-indent=1} | string | 用户下车时间
| start_station {data-indent=1} | string | 乘车起始站
| end_station {data-indent=1} | string | 乘车终点站
| amount | object {data-tooltip="对应PHP的array"} | 订单金额信息
| promotion_detail | object[] {data-tooltip="对应PHP的array"} | 优惠信息
| coupon_id {data-indent=1} | string | 券ID
| name {data-indent=1} | string | 优惠名称
| scope {data-indent=1} | string | 优惠范围<br/>`GLOBAL` \| `SINGLE` 枚举值之一
| type {data-indent=1} | string | 优惠类型<br/>`CASH` \| `NOCASH` 枚举值之一
| stock_id {data-indent=1} | string | 活动ID
| amount {data-indent=1} | integer | 优惠券面额
| wechatpay_contribute {data-indent=1} | integer | 微信出资
| merchant_contribute {data-indent=1} | integer | 商户出资
| other_contribute {data-indent=1} | integer | 其他出资
| currency {data-indent=1} | string | 优惠币种

{.im-table #response}
