---
title: 扣费受理
description: 商户请求扣费受理接口，会完成订单受理。微信支付进行异步扣款，支付完成后，会将订单支付结果发送给商户。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| appid {data-required data-indent=1} | string | 商户在微信申请公众号或移动应用成功后分配的账号ID
| sub_appid {data-indent=1} | string | 子公众账号ID，服务商模式下选传，用于扣费信息的商户信息展示。
| sub_mchid {data-indent=1} | string | 微信支付分配的子商户号
| description {data-indent=1} | string | 商户自定义字段，用于交易账单中对扣费服务的描述。
| attach {data-indent=1} | string | 附加数据，在查询API和支付通知中原样返回
| out_trade_no {data-required data-indent=1} | string | 商户系统内部订单号
| trade_scene {data-required data-indent=1} | string | 交易场景值，现在支持公交和地铁的场景值<br/>`BUS` \| `METRO` 枚举值之一
| goods_tag {data-indent=1} | string | 代金券或立减优惠功能的参数
| contract_id {data-required data-indent=1} | string | 签约成功后，微信返回代扣签约ID
| notify_url {data-indent=1} | string | 接受扣款结果异步回调通知的URL
| amount {data-indent=1} | object {data-tooltip="对应PHP的array"} | 订单金额信息
| total {data-indent=2} | integer | 订单总金额，单位为分
| currency {data-indent=2} | string | 符合ISO 4217标准的三位字母代码，目前只支持人民币：CNY
| bus_info {data-indent=1} | object {data-tooltip="对应PHP的array"} | 公交场景信息
| start_time {data-indent=2} | string | 用户乘车时间（上车）
| line_name {data-indent=2} | string | 乘车路线
| plate_number {data-indent=2} | string | 车牌号。
| metro_info {data-indent=1} | object {data-tooltip="对应PHP的array"} | 地铁场景信息
| start_time {data-indent=2} | string | 用户乘车时间（上车）
| end_time {data-indent=2} | string | 用户下车时间
| start_station {data-indent=2} | string | 乘车起始站
| end_station {data-indent=2} | string | 乘车终点站

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->qrcode->transactions->postAsync([
  'json' => [
    'appid'        => 'wxcbda96de0b165486',
    'sub_appid'    => 'wxcbda96de0b165486',
    'sub_mchid'    => '1900000109',
    'description'  => '地铁扣费',
    'attach'       => '深圳分店',
    'out_trade_no' => '20150806125346',
    'trade_scene'  => 'BUS',
    'goods_tag'    => 'WXG',
    'contract_id'  => 'Wx15463511252015071056489715',
    'notify_url'   => 'https://pay.weixin.qq.com/wxpay.html',
    'amount'       => [
      'total'    => 600,
      'currency' => 'CNY',
    ],
    'bus_info'     => [
      'start_time'   => '2017-08-26T10:43:39+08:00',
      'line_name'    => '1路公车',
      'plate_number' => '粤B888888',
    ],
    'metro_info'   => [
      'start_time'    => '2017-08-26T10:43:39+08:00',
      'end_time'      => '2017-08-26T10:43:39+08:00',
      'start_station' => '西单',
      'end_station'   => '天安门西',
    ],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/qrcode/transactions')->postAsync([
  'json' => [
    'appid'        => 'wxcbda96de0b165486',
    'sub_appid'    => 'wxcbda96de0b165486',
    'sub_mchid'    => '1900000109',
    'description'  => '地铁扣费',
    'attach'       => '深圳分店',
    'out_trade_no' => '20150806125346',
    'trade_scene'  => 'BUS',
    'goods_tag'    => 'WXG',
    'contract_id'  => 'Wx15463511252015071056489715',
    'notify_url'   => 'https://pay.weixin.qq.com/wxpay.html',
    'amount'       => [
      'total'    => 600,
      'currency' => 'CNY',
    ],
    'bus_info'     => [
      'start_time'   => '2017-08-26T10:43:39+08:00',
      'line_name'    => '1路公车',
      'plate_number' => '粤B888888',
    ],
    'metro_info'   => [
      'start_time'    => '2017-08-26T10:43:39+08:00',
      'end_time'      => '2017-08-26T10:43:39+08:00',
      'start_station' => '西单',
      'end_station'   => '天安门西',
    ],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/qrcode/transactions']->postAsync([
  'json' => [
    'appid'        => 'wxcbda96de0b165486',
    'sub_appid'    => 'wxcbda96de0b165486',
    'sub_mchid'    => '1900000109',
    'description'  => '地铁扣费',
    'attach'       => '深圳分店',
    'out_trade_no' => '20150806125346',
    'trade_scene'  => 'BUS',
    'goods_tag'    => 'WXG',
    'contract_id'  => 'Wx15463511252015071056489715',
    'notify_url'   => 'https://pay.weixin.qq.com/wxpay.html',
    'amount'       => [
      'total'    => 600,
      'currency' => 'CNY',
    ],
    'bus_info'     => [
      'start_time'   => '2017-08-26T10:43:39+08:00',
      'line_name'    => '1路公车',
      'plate_number' => '粤B888888',
    ],
    'metro_info'   => [
      'start_time'    => '2017-08-26T10:43:39+08:00',
      'end_time'      => '2017-08-26T10:43:39+08:00',
      'start_station' => '西单',
      'end_station'   => '天安门西',
    ],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->qrcode->transactions->post([
  'json' => [
    'appid'        => 'wxcbda96de0b165486',
    'sub_appid'    => 'wxcbda96de0b165486',
    'sub_mchid'    => '1900000109',
    'description'  => '地铁扣费',
    'attach'       => '深圳分店',
    'out_trade_no' => '20150806125346',
    'trade_scene'  => 'BUS',
    'goods_tag'    => 'WXG',
    'contract_id'  => 'Wx15463511252015071056489715',
    'notify_url'   => 'https://pay.weixin.qq.com/wxpay.html',
    'amount'       => [
      'total'    => 600,
      'currency' => 'CNY',
    ],
    'bus_info'     => [
      'start_time'   => '2017-08-26T10:43:39+08:00',
      'line_name'    => '1路公车',
      'plate_number' => '粤B888888',
    ],
    'metro_info'   => [
      'start_time'    => '2017-08-26T10:43:39+08:00',
      'end_time'      => '2017-08-26T10:43:39+08:00',
      'start_station' => '西单',
      'end_station'   => '天安门西',
    ],
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/qrcode/transactions')->post([
  'json' => [
    'appid'        => 'wxcbda96de0b165486',
    'sub_appid'    => 'wxcbda96de0b165486',
    'sub_mchid'    => '1900000109',
    'description'  => '地铁扣费',
    'attach'       => '深圳分店',
    'out_trade_no' => '20150806125346',
    'trade_scene'  => 'BUS',
    'goods_tag'    => 'WXG',
    'contract_id'  => 'Wx15463511252015071056489715',
    'notify_url'   => 'https://pay.weixin.qq.com/wxpay.html',
    'amount'       => [
      'total'    => 600,
      'currency' => 'CNY',
    ],
    'bus_info'     => [
      'start_time'   => '2017-08-26T10:43:39+08:00',
      'line_name'    => '1路公车',
      'plate_number' => '粤B888888',
    ],
    'metro_info'   => [
      'start_time'    => '2017-08-26T10:43:39+08:00',
      'end_time'      => '2017-08-26T10:43:39+08:00',
      'start_station' => '西单',
      'end_station'   => '天安门西',
    ],
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/qrcode/transactions']->post([
  'json' => [
    'appid'        => 'wxcbda96de0b165486',
    'sub_appid'    => 'wxcbda96de0b165486',
    'sub_mchid'    => '1900000109',
    'description'  => '地铁扣费',
    'attach'       => '深圳分店',
    'out_trade_no' => '20150806125346',
    'trade_scene'  => 'BUS',
    'goods_tag'    => 'WXG',
    'contract_id'  => 'Wx15463511252015071056489715',
    'notify_url'   => 'https://pay.weixin.qq.com/wxpay.html',
    'amount'       => [
      'total'    => 600,
      'currency' => 'CNY',
    ],
    'bus_info'     => [
      'start_time'   => '2017-08-26T10:43:39+08:00',
      'line_name'    => '1路公车',
      'plate_number' => '粤B888888',
    ],
    'metro_info'   => [
      'start_time'    => '2017-08-26T10:43:39+08:00',
      'end_time'      => '2017-08-26T10:43:39+08:00',
      'start_station' => '西单',
      'end_station'   => '天安门西',
    ],
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
