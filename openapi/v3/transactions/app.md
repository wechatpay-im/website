---
title: APP支付下单
description: 通过本接口提交微信支付APP支付订单
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| base_uri {data-required} | string | 声明接入点`https://api.mch.weixin.qq.com/hk/`(国内接入)
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| mchid {data-required data-indent=1} | string | 商户号
| appid {data-required data-indent=1} | string | APPID
| sub_mchid {data-required data-indent=1} | string | 子商户号
| sp_mchid {data-required data-indent=1} | string | 机构商户号
| sp_appid {data-required data-indent=1} | string | 机构APPID
| sub_appid {data-indent=1} | string | 子商户APPID
| description {data-required data-indent=1} | string | 商品描述
| attach {data-indent=1} | string | 商户数据
| notify_url {data-required data-indent=1} | string | 通知地址
| out_trade_no {data-required data-indent=1} | string | 商户订单号
| goods_tag {data-indent=1} | string | 商品标记
| trade_type {data-required data-indent=1} | string | 交易类型
| limit_pay {data-indent=1} | string | 指定支付方式
| time_start {data-indent=1} | string | 交易起始时间
| time_expire {data-indent=1} | string | 交易结束时间
| merchant_category_code {data-required data-indent=1} | string | MCC码
| payer {data-indent=1} | object {data-tooltip="对应PHP的array"} | 支付者
| openid {data-indent=2} | string | 用户标识
| sp_openid {data-indent=2} | string | 用户标识（机构）
| sub_openid {data-indent=2} | string | 用户标识（特约商户）
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
$instance->v3->transactions->app->postAsync([
  'base_uri' => 'https://api.mch.weixin.qq.com/hk/', // 接入点(国内接入)
  'json' => [
    'mchid'                  => '1900000109',
    'appid'                  => 'wx8888888888888888',
    'sub_mchid'              => '1900000109',
    'sp_mchid'               => '1900000100',
    'sp_appid'               => 'wx8888888888888888',
    'sub_appid'              => '',
    'description'            => 'image形象店-深圳腾大- QQ公仔',
    'attach'                 => '自定义数据',
    'notify_url'             => 'https://www.weixin.qq.com/wxpay/pay.php',
    'out_trade_no'           => '1217752501201407033233368018',
    'goods_tag'              => 'WXG',
    'trade_type'             => 'APP',
    'limit_pay'              => 'no_credit',
    'time_start'             => '2018-06-08T10:34:56+08:00',
    'time_expire'            => '2018-06-08T10:34:56+08:00',
    'merchant_category_code' => '1011',
    'payer'                  => [
      'openid'     => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
      'sp_openid'  => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
      'sub_openid' => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
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
        'goods_id'       => '12345',
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
$instance->chain('v3/transactions/app')->postAsync([
  'base_uri' => 'https://api.mch.weixin.qq.com/hk/', // 接入点(国内接入)
  'json' => [
    'mchid'                  => '1900000109',
    'appid'                  => 'wx8888888888888888',
    'sub_mchid'              => '1900000109',
    'sp_mchid'               => '1900000100',
    'sp_appid'               => 'wx8888888888888888',
    'sub_appid'              => '',
    'description'            => 'image形象店-深圳腾大- QQ公仔',
    'attach'                 => '自定义数据',
    'notify_url'             => 'https://www.weixin.qq.com/wxpay/pay.php',
    'out_trade_no'           => '1217752501201407033233368018',
    'goods_tag'              => 'WXG',
    'trade_type'             => 'APP',
    'limit_pay'              => 'no_credit',
    'time_start'             => '2018-06-08T10:34:56+08:00',
    'time_expire'            => '2018-06-08T10:34:56+08:00',
    'merchant_category_code' => '1011',
    'payer'                  => [
      'openid'     => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
      'sp_openid'  => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
      'sub_openid' => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
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
        'goods_id'       => '12345',
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
$instance['v3/transactions/app']->postAsync([
  'base_uri' => 'https://api.mch.weixin.qq.com/hk/', // 接入点(国内接入)
  'json' => [
    'mchid'                  => '1900000109',
    'appid'                  => 'wx8888888888888888',
    'sub_mchid'              => '1900000109',
    'sp_mchid'               => '1900000100',
    'sp_appid'               => 'wx8888888888888888',
    'sub_appid'              => '',
    'description'            => 'image形象店-深圳腾大- QQ公仔',
    'attach'                 => '自定义数据',
    'notify_url'             => 'https://www.weixin.qq.com/wxpay/pay.php',
    'out_trade_no'           => '1217752501201407033233368018',
    'goods_tag'              => 'WXG',
    'trade_type'             => 'APP',
    'limit_pay'              => 'no_credit',
    'time_start'             => '2018-06-08T10:34:56+08:00',
    'time_expire'            => '2018-06-08T10:34:56+08:00',
    'merchant_category_code' => '1011',
    'payer'                  => [
      'openid'     => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
      'sp_openid'  => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
      'sub_openid' => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
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
        'goods_id'       => '12345',
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
$response = $instance->v3->transactions->app->post([
  'base_uri' => 'https://api.mch.weixin.qq.com/hk/', // 接入点(国内接入)
  'json' => [
    'mchid'                  => '1900000109',
    'appid'                  => 'wx8888888888888888',
    'sub_mchid'              => '1900000109',
    'sp_mchid'               => '1900000100',
    'sp_appid'               => 'wx8888888888888888',
    'sub_appid'              => '',
    'description'            => 'image形象店-深圳腾大- QQ公仔',
    'attach'                 => '自定义数据',
    'notify_url'             => 'https://www.weixin.qq.com/wxpay/pay.php',
    'out_trade_no'           => '1217752501201407033233368018',
    'goods_tag'              => 'WXG',
    'trade_type'             => 'APP',
    'limit_pay'              => 'no_credit',
    'time_start'             => '2018-06-08T10:34:56+08:00',
    'time_expire'            => '2018-06-08T10:34:56+08:00',
    'merchant_category_code' => '1011',
    'payer'                  => [
      'openid'     => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
      'sp_openid'  => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
      'sub_openid' => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
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
        'goods_id'       => '12345',
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
$response = $instance->chain('v3/transactions/app')->post([
  'base_uri' => 'https://api.mch.weixin.qq.com/hk/', // 接入点(国内接入)
  'json' => [
    'mchid'                  => '1900000109',
    'appid'                  => 'wx8888888888888888',
    'sub_mchid'              => '1900000109',
    'sp_mchid'               => '1900000100',
    'sp_appid'               => 'wx8888888888888888',
    'sub_appid'              => '',
    'description'            => 'image形象店-深圳腾大- QQ公仔',
    'attach'                 => '自定义数据',
    'notify_url'             => 'https://www.weixin.qq.com/wxpay/pay.php',
    'out_trade_no'           => '1217752501201407033233368018',
    'goods_tag'              => 'WXG',
    'trade_type'             => 'APP',
    'limit_pay'              => 'no_credit',
    'time_start'             => '2018-06-08T10:34:56+08:00',
    'time_expire'            => '2018-06-08T10:34:56+08:00',
    'merchant_category_code' => '1011',
    'payer'                  => [
      'openid'     => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
      'sp_openid'  => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
      'sub_openid' => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
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
        'goods_id'       => '12345',
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
$response = $instance['v3/transactions/app']->post([
  'base_uri' => 'https://api.mch.weixin.qq.com/hk/', // 接入点(国内接入)
  'json' => [
    'mchid'                  => '1900000109',
    'appid'                  => 'wx8888888888888888',
    'sub_mchid'              => '1900000109',
    'sp_mchid'               => '1900000100',
    'sp_appid'               => 'wx8888888888888888',
    'sub_appid'              => '',
    'description'            => 'image形象店-深圳腾大- QQ公仔',
    'attach'                 => '自定义数据',
    'notify_url'             => 'https://www.weixin.qq.com/wxpay/pay.php',
    'out_trade_no'           => '1217752501201407033233368018',
    'goods_tag'              => 'WXG',
    'trade_type'             => 'APP',
    'limit_pay'              => 'no_credit',
    'time_start'             => '2018-06-08T10:34:56+08:00',
    'time_expire'            => '2018-06-08T10:34:56+08:00',
    'merchant_category_code' => '1011',
    'payer'                  => [
      'openid'     => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
      'sp_openid'  => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
      'sub_openid' => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
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
        'goods_id'       => '12345',
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
| prepay_id {data-required} | string | 预支付交易会话标识

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/api/wxpay/ch/fusion_wallet_ch/In-AppPay/chapter6_3.shtml)
