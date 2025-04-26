---
title: 提交付款码支付
description: 通过本接口提交微信支付付款码支付订单。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| base_uri | string | 声明接入点`https://apihk.mch.weixin.qq.com/`(香港接入)
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| mchid {data-required data-indent=1} | string | 商户号
| appid {data-required data-indent=1} | string | APPID
| sub_mchid {data-required data-indent=1} | string | 子商户号
| sp_mchid {data-required data-indent=1} | string | 机构商户号
| sp_appid {data-required data-indent=1} | string | 机构APPID
| sub_appid {data-indent=1} | string | 子商户APPID
| description {data-required data-indent=1} | string | 商品描述
| attach {data-indent=1} | string | 商户数据
| out_trade_no {data-required data-indent=1} | string | 商户订单号
| goods_tag {data-indent=1} | string | 商品标记
| trade_type {data-required data-indent=1} | string | 交易类型
| limit_pay {data-indent=1} | string | 指定支付方式
| merchant_category_code {data-required data-indent=1} | string | MCC码
| payer {data-indent=1} | object {data-tooltip="对应PHP的array"} | 支付者
| auth_code {data-required data-indent=2} | string | 授权码
| amount {data-required data-indent=1} | object {data-tooltip="对应PHP的array"} | 订单金额
| total {data-required data-indent=2} | integer | 总金额
| currency {data-indent=2} | string | 货币类型
| scene_info {data-indent=1} | object {data-tooltip="对应PHP的array"} | 场景信息
| device_id {data-indent=2} | string | 商户端设备号
| device_ip {data-indent=2} | string | 商户端设备IP
| payer_client_ip {data-indent=2} | string | 用户终端IP
| operator_id {data-indent=2} | string | 操作员ID
| store_info {data-indent=2} | object {data-tooltip="对应PHP的array"} | 商户门店信息
| id {data-indent=3} | string | 编号
| name {data-required data-indent=3} | string | 名称
| address {data-required data-indent=3} | string | 详细地址
| detail {data-indent=1} | object[] {data-tooltip="对应PHP的array"} | 优惠功能
| cost_price {data-indent=2} | integer | 订单原价
| receipt_id {data-indent=2} | string | 商品小票ID
| goods_detail {data-indent=2} | object[] {data-tooltip="对应PHP的array"} | 单品列表
| goods_id {data-required data-indent=3} | string | 商品编码
| wxpay_goods_id {data-indent=3} | string | 微信侧商品编码
| goods_name {data-indent=3} | string | 商品名称
| quantity {data-required data-indent=3} | integer | 商品数量
| price {data-required data-indent=3} | integer | 商品单价

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->global->micropay->transactions->pay->postAsync([
  'base_uri' => 'https://apihk.mch.weixin.qq.com/', // 接入点(香港接入)
  'json' => [
    'mchid'                  => '1900000109',
    'appid'                  => 'wx8888888888888888',
    'sub_mchid'              => '1900000109',
    'sp_mchid'               => '1900000100',
    'sp_appid'               => 'wx8888888888888888',
    'sub_appid'              => 'wx8888888888888888',
    'description'            => 'image形象店-深圳腾大- QQ公仔',
    'attach'                 => '自定义数据',
    'out_trade_no'           => '1217752501201407033233368018',
    'goods_tag'              => 'WXG',
    'trade_type'             => 'MICROPAY',
    'limit_pay'              => 'no_credit',
    'merchant_category_code' => '1011',
    'payer'                  => [
      'auth_code' => '120061098828009406',
    ],
    'amount'                 => [
      'total'    => 888,
      'currency' => 'HKD',
    ],
    'scene_info'             => [
      'device_id'       => '013467007045764',
      'device_ip'       => '128.0.0.1',
      'payer_client_ip' => '128.0.0.1',
      'operator_id'     => '123145',
      'store_info'      => [
        'id'      => '0001',
        'name'    => '腾讯大厦分店',
        'address' => '广东省深圳市南山区科技中一道10000号',
      ],
    ],
    'detail'                 => [[
      'cost_price'   => 608800,
      'receipt_id'   => 'wx123',
      'goods_detail' => [[
        'goods_id'       => '商品编码',
        'wxpay_goods_id' => '1001',
        'goods_name'     => 'iPhone6s 16G',
        'quantity'       => 1,
        'price'          => 528800,
      ],],
    ],],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/global/micropay/transactions/pay')->postAsync([
  'base_uri' => 'https://apihk.mch.weixin.qq.com/', // 接入点(香港接入)
  'json' => [
    'mchid'                  => '1900000109',
    'appid'                  => 'wx8888888888888888',
    'sub_mchid'              => '1900000109',
    'sp_mchid'               => '1900000100',
    'sp_appid'               => 'wx8888888888888888',
    'sub_appid'              => 'wx8888888888888888',
    'description'            => 'image形象店-深圳腾大- QQ公仔',
    'attach'                 => '自定义数据',
    'out_trade_no'           => '1217752501201407033233368018',
    'goods_tag'              => 'WXG',
    'trade_type'             => 'MICROPAY',
    'limit_pay'              => 'no_credit',
    'merchant_category_code' => '1011',
    'payer'                  => [
      'auth_code' => '120061098828009406',
    ],
    'amount'                 => [
      'total'    => 888,
      'currency' => 'HKD',
    ],
    'scene_info'             => [
      'device_id'       => '013467007045764',
      'device_ip'       => '128.0.0.1',
      'payer_client_ip' => '128.0.0.1',
      'operator_id'     => '123145',
      'store_info'      => [
        'id'      => '0001',
        'name'    => '腾讯大厦分店',
        'address' => '广东省深圳市南山区科技中一道10000号',
      ],
    ],
    'detail'                 => [[
      'cost_price'   => 608800,
      'receipt_id'   => 'wx123',
      'goods_detail' => [[
        'goods_id'       => '商品编码',
        'wxpay_goods_id' => '1001',
        'goods_name'     => 'iPhone6s 16G',
        'quantity'       => 1,
        'price'          => 528800,
      ],],
    ],],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/global/micropay/transactions/pay']->postAsync([
  'base_uri' => 'https://apihk.mch.weixin.qq.com/', // 接入点(香港接入)
  'json' => [
    'mchid'                  => '1900000109',
    'appid'                  => 'wx8888888888888888',
    'sub_mchid'              => '1900000109',
    'sp_mchid'               => '1900000100',
    'sp_appid'               => 'wx8888888888888888',
    'sub_appid'              => 'wx8888888888888888',
    'description'            => 'image形象店-深圳腾大- QQ公仔',
    'attach'                 => '自定义数据',
    'out_trade_no'           => '1217752501201407033233368018',
    'goods_tag'              => 'WXG',
    'trade_type'             => 'MICROPAY',
    'limit_pay'              => 'no_credit',
    'merchant_category_code' => '1011',
    'payer'                  => [
      'auth_code' => '120061098828009406',
    ],
    'amount'                 => [
      'total'    => 888,
      'currency' => 'HKD',
    ],
    'scene_info'             => [
      'device_id'       => '013467007045764',
      'device_ip'       => '128.0.0.1',
      'payer_client_ip' => '128.0.0.1',
      'operator_id'     => '123145',
      'store_info'      => [
        'id'      => '0001',
        'name'    => '腾讯大厦分店',
        'address' => '广东省深圳市南山区科技中一道10000号',
      ],
    ],
    'detail'                 => [[
      'cost_price'   => 608800,
      'receipt_id'   => 'wx123',
      'goods_detail' => [[
        'goods_id'       => '商品编码',
        'wxpay_goods_id' => '1001',
        'goods_name'     => 'iPhone6s 16G',
        'quantity'       => 1,
        'price'          => 528800,
      ],],
    ],],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->global->micropay->transactions->pay->post([
  'base_uri' => 'https://apihk.mch.weixin.qq.com/', // 接入点(香港接入)
  'json' => [
    'mchid'                  => '1900000109',
    'appid'                  => 'wx8888888888888888',
    'sub_mchid'              => '1900000109',
    'sp_mchid'               => '1900000100',
    'sp_appid'               => 'wx8888888888888888',
    'sub_appid'              => 'wx8888888888888888',
    'description'            => 'image形象店-深圳腾大- QQ公仔',
    'attach'                 => '自定义数据',
    'out_trade_no'           => '1217752501201407033233368018',
    'goods_tag'              => 'WXG',
    'trade_type'             => 'MICROPAY',
    'limit_pay'              => 'no_credit',
    'merchant_category_code' => '1011',
    'payer'                  => [
      'auth_code' => '120061098828009406',
    ],
    'amount'                 => [
      'total'    => 888,
      'currency' => 'HKD',
    ],
    'scene_info'             => [
      'device_id'       => '013467007045764',
      'device_ip'       => '128.0.0.1',
      'payer_client_ip' => '128.0.0.1',
      'operator_id'     => '123145',
      'store_info'      => [
        'id'      => '0001',
        'name'    => '腾讯大厦分店',
        'address' => '广东省深圳市南山区科技中一道10000号',
      ],
    ],
    'detail'                 => [[
      'cost_price'   => 608800,
      'receipt_id'   => 'wx123',
      'goods_detail' => [[
        'goods_id'       => '商品编码',
        'wxpay_goods_id' => '1001',
        'goods_name'     => 'iPhone6s 16G',
        'quantity'       => 1,
        'price'          => 528800,
      ],],
    ],],
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/global/micropay/transactions/pay')->post([
  'base_uri' => 'https://apihk.mch.weixin.qq.com/', // 接入点(香港接入)
  'json' => [
    'mchid'                  => '1900000109',
    'appid'                  => 'wx8888888888888888',
    'sub_mchid'              => '1900000109',
    'sp_mchid'               => '1900000100',
    'sp_appid'               => 'wx8888888888888888',
    'sub_appid'              => 'wx8888888888888888',
    'description'            => 'image形象店-深圳腾大- QQ公仔',
    'attach'                 => '自定义数据',
    'out_trade_no'           => '1217752501201407033233368018',
    'goods_tag'              => 'WXG',
    'trade_type'             => 'MICROPAY',
    'limit_pay'              => 'no_credit',
    'merchant_category_code' => '1011',
    'payer'                  => [
      'auth_code' => '120061098828009406',
    ],
    'amount'                 => [
      'total'    => 888,
      'currency' => 'HKD',
    ],
    'scene_info'             => [
      'device_id'       => '013467007045764',
      'device_ip'       => '128.0.0.1',
      'payer_client_ip' => '128.0.0.1',
      'operator_id'     => '123145',
      'store_info'      => [
        'id'      => '0001',
        'name'    => '腾讯大厦分店',
        'address' => '广东省深圳市南山区科技中一道10000号',
      ],
    ],
    'detail'                 => [[
      'cost_price'   => 608800,
      'receipt_id'   => 'wx123',
      'goods_detail' => [[
        'goods_id'       => '商品编码',
        'wxpay_goods_id' => '1001',
        'goods_name'     => 'iPhone6s 16G',
        'quantity'       => 1,
        'price'          => 528800,
      ],],
    ],],
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/global/micropay/transactions/pay']->post([
  'base_uri' => 'https://apihk.mch.weixin.qq.com/', // 接入点(香港接入)
  'json' => [
    'mchid'                  => '1900000109',
    'appid'                  => 'wx8888888888888888',
    'sub_mchid'              => '1900000109',
    'sp_mchid'               => '1900000100',
    'sp_appid'               => 'wx8888888888888888',
    'sub_appid'              => 'wx8888888888888888',
    'description'            => 'image形象店-深圳腾大- QQ公仔',
    'attach'                 => '自定义数据',
    'out_trade_no'           => '1217752501201407033233368018',
    'goods_tag'              => 'WXG',
    'trade_type'             => 'MICROPAY',
    'limit_pay'              => 'no_credit',
    'merchant_category_code' => '1011',
    'payer'                  => [
      'auth_code' => '120061098828009406',
    ],
    'amount'                 => [
      'total'    => 888,
      'currency' => 'HKD',
    ],
    'scene_info'             => [
      'device_id'       => '013467007045764',
      'device_ip'       => '128.0.0.1',
      'payer_client_ip' => '128.0.0.1',
      'operator_id'     => '123145',
      'store_info'      => [
        'id'      => '0001',
        'name'    => '腾讯大厦分店',
        'address' => '广东省深圳市南山区科技中一道10000号',
      ],
    ],
    'detail'                 => [[
      'cost_price'   => 608800,
      'receipt_id'   => 'wx123',
      'goods_detail' => [[
        'goods_id'       => '商品编码',
        'wxpay_goods_id' => '1001',
        'goods_name'     => 'iPhone6s 16G',
        'quantity'       => 1,
        'price'          => 528800,
      ],],
    ],],
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| id {data-required} | string | 微信支付订单号
| mchid {data-required} | string | 商户号
| appid {data-required} | string | APPID
| sub_mchid {data-required} | string | 子商户号
| sp_mchid {data-required} | string | 机构商户号
| sp_appid {data-required} | string | 机构APPID
| sub_appid | string | 子商户APPID
| out_trade_no {data-required} | string | 商户订单号
| trade_type {data-required} | string | 交易类型
| trade_state {data-required} | string | 交易状态
| trade_state_desc {data-required} | string | 交易状态描述
| bank_type {data-required} | string | 付款银行
| attach | string | 商户数据
| success_time {data-required} | string | 支付完成时间
| payer | object {data-tooltip="对应PHP的array"} | 支付者
| openid {data-indent=1} | string | 用户标识
| sp_openid {data-indent=1} | string | 用户标识（机构）
| sub_openid {data-indent=1} | string | 用户标识（特约商户）
| amount {data-required} | object {data-tooltip="对应PHP的array"} | 订单金额
| total {data-required data-indent=1} | integer | 订单金额
| currency {data-indent=1} | string | 货币类型
| payer_total {data-required data-indent=1} | integer | 用户支付金额
| payer _currency {data-indent=1} | string | 支付货币类型
| exchange_rate {data-indent=1} | object {data-tooltip="对应PHP的array"} | 汇率
| type {data-indent=2} | string | 汇率类型<br/>`SETTLEMENT_RATE` 枚举值
| rate {data-indent=2} | integer | 汇率值
| detail | object[] {data-tooltip="对应PHP的array"} | 优惠功能
| promotion_id {data-required data-indent=1} | string | 券ID
| name {data-indent=1} | string | 优惠名称
| scope {data-indent=1} | string | 优惠范围<br/>`GLOBAL` \| `SINGLE` 枚举值之一
| type {data-indent=1} | string | 优惠类型<br/>`COUPON` \| `DISCOUNT` 枚举值之一
| amount {data-required data-indent=1} | integer | 优惠券面额
| currency {data-indent=1} | string | 货币类型
| activity_id {data-indent=1} | string | 活动ID
| wechatpay_contribute_amount {data-indent=1} | integer | 微信出资
| merchant_contribute_amount {data-indent=1} | integer | 商户出资
| other_contribute_amount {data-indent=1} | integer | 其他出资
| goods_detail {data-indent=1} | object[] {data-tooltip="对应PHP的array"} | 单品列表
| goods_id {data-required data-indent=2} | string | 商品编码
| goods_remark {data-indent=2} | string | 商品备注
| quantity {data-required data-indent=2} | integer | 商品数量
| price {data-required data-indent=2} | integer | 商品价格

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/global/v3/zh/4013010527)
