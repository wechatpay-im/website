---
title: 扣费受理
description: 
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
| amount {data-indent=1} | object {data-tooltip="对应PHP的array"} | 
| total {data-indent=2} | integer | 订单总金额，单位为分
| currency {data-indent=2} | string | 符合ISO 4217标准的三位字母代码，目前只支持人民币：CNY
| bus_info {data-indent=1} | object {data-tooltip="对应PHP的array"} | 
| start_time {data-indent=2} | string | 用户乘车时间（上车）
| line_name {data-indent=2} | string | 乘车路线
| plate_number {data-indent=2} | string | 车牌号。
| metro_info {data-indent=1} | object {data-tooltip="对应PHP的array"} | 
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
| appid | string | 
| sub_appid | string | 
| sp_mchid | string | 
| sub_mchid | string | 
| description | string | 
| create_time | string | 
| out_trade_no | string | 
| transaction_id | string | 
| trade_state | string | `SUCCESS` \| `ACCEPTED` \| `PAY_FAIL` \| `REFUND` 枚举值之一
| trade_state_description | string | 
| success_time | string | 
| bank_type | string | 
| user_repay_state | string | `NOT_REPAY` \| `REPAID` \| `ALL_REFUND` 枚举值之一
| repay_transaction_id | string | 
| repay_time | string | 
| attach | string | 
| contract_id | string | 
| trade_scene | string | 
| bus_info | object {data-tooltip="对应PHP的array"} | 
| start_time {data-indent=1} | string | 用户乘车时间（上车）
| line_name {data-indent=1} | string | 乘车路线
| plate_number {data-indent=1} | string | 车牌号。
| metro_info | object {data-tooltip="对应PHP的array"} | 
| start_time {data-indent=1} | string | 用户乘车时间（上车）
| end_time {data-indent=1} | string | 用户下车时间
| start_station {data-indent=1} | string | 乘车起始站
| end_station {data-indent=1} | string | 乘车终点站
| amount | object {data-tooltip="对应PHP的array"} | 
| promotion_detail | object[] {data-tooltip="对应PHP的array"} | 
| coupon_id {data-indent=1} | string | 
| name {data-indent=1} | string | 
| scope {data-indent=1} | string | `GLOBAL` \| `SINGLE` 枚举值之一
| type {data-indent=1} | string | `CASH` \| `NOCASH` 枚举值之一
| stock_id {data-indent=1} | string | 
| amount {data-indent=1} | integer | 
| wechatpay_contribute {data-indent=1} | integer | 
| merchant_contribute {data-indent=1} | integer | 
| other_contribute {data-indent=1} | integer | 
| currency {data-indent=1} | string | 

{.im-table #response}

参阅 。
