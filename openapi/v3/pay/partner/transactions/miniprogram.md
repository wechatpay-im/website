---
title: 小程序支付下单
description: 商户系统先调用该接口在微信支付服务后台生成预支付交易单，返回正确的预支付交易会话标识后再按Native、JSAPI、APP等不同场景生成交易串调起支付。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| sp_appid {data-required data-indent=1} | string | 服务商公众号ID
| sp_mchid {data-required data-indent=1} | string | 服务商户号
| sub_appid {data-indent=1} | string | 子商户公众号ID
| sub_mchid {data-required data-indent=1} | string | 子商户号
| description {data-required data-indent=1} | string | 商品描述
| out_trade_no {data-required data-indent=1} | string | 商户订单号
| time_expire {data-indent=1} | string | 交易结束时间
| attach {data-indent=1} | string | 附加数据
| notify_url {data-indent=1} | string | 通知地址
| goods_tag {data-indent=1} | string | 订单优惠标记
| support_fapiao {data-indent=1} | boolean | 电子发票入口开放标识
| amount {data-required data-indent=1} | object {data-tooltip="对应PHP的array"} | 订单金额
| total {data-required data-indent=2} | integer | 总金额
| currency {data-indent=2} | string | 货币类型
| payer {data-required data-indent=1} | object {data-tooltip="对应PHP的array"} | 支付者
| sp_openid {data-indent=2} | string | 用户标识
| sub_openid {data-indent=2} | string | 用户子标识
| detail {data-indent=1} | object {data-tooltip="对应PHP的array"} | 优惠功能
| cost_price {data-indent=2} | integer | 订单原价
| invoice_id {data-indent=2} | string | 商品小票ID
| goods_detail {data-indent=2} | object[] {data-tooltip="对应PHP的array"} | 单品列表
| merchant_goods_id {data-required data-indent=3} | string | 商户侧商品编码
| wechatpay_goods_id {data-indent=3} | string | 微信侧商品编码
| goods_name {data-indent=3} | string | 商品名称
| quantity {data-required data-indent=3} | integer | 商品数量
| unit_price {data-required data-indent=3} | integer | 商品单价
| scene_info {data-indent=1} | object {data-tooltip="对应PHP的array"} | 场景信息
| payer_client_ip {data-indent=2} | string | 用户终端IP
| device_id {data-indent=2} | string | 商户端设备号
| store_info {data-indent=2} | object {data-tooltip="对应PHP的array"} | 商户门店信息
| id {data-indent=3} | string | 门店编号
| out_id {data-indent=3} | string | 商家自定义编码
| settle_info {data-indent=1} | object {data-tooltip="对应PHP的array"} | 结算信息
| profit_sharing {data-indent=2} | boolean | 是否指定分账

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->pay->partner->transactions->miniprogram->postAsync([
  'json' => [
    'sp_appid'       => 'wx8888888888888888',
    'sp_mchid'       => '1230000109',
    'sub_appid'      => 'wxd678efh567hg6999',
    'sub_mchid'      => '1900000109',
    'description'    => 'Image形象店-深圳腾大-QQ公仔',
    'out_trade_no'   => '1217752501201407033233368018',
    'time_expire'    => '2018-06-08T10:34:56+08:00',
    'attach'         => '自定义数据',
    'notify_url'     => 'https://www.weixin.qq.com/wxpay/pay.php',
    'goods_tag'      => 'WXG',
    'support_fapiao' => true,
    'amount'         => [
      'total'    => 100,
      'currency' => 'CNY',
    ],
    'payer'          => [
      'sp_openid'  => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
      'sub_openid' => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
    ],
    'detail'         => [
      'cost_price'   => 608800,
      'invoice_id'   => '微信123',
      'goods_detail' => [[
        'merchant_goods_id'  => '商品编码',
        'wechatpay_goods_id' => '1001',
        'goods_name'         => 'iPhoneX 256G',
        'quantity'           => 1,
        'unit_price'         => 828800,
      ],],
    ],
    'scene_info'     => [
      'payer_client_ip' => '14.23.150.211',
      'device_id'       => '013467007045764',
      'store_info'      => [
        'id'     => '0001',
        'out_id' => 'example_out_id',
      ],
    ],
    'settle_info'    => [
      'profit_sharing' => true,
    ],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/pay/partner/transactions/miniprogram')->postAsync([
  'json' => [
    'sp_appid'       => 'wx8888888888888888',
    'sp_mchid'       => '1230000109',
    'sub_appid'      => 'wxd678efh567hg6999',
    'sub_mchid'      => '1900000109',
    'description'    => 'Image形象店-深圳腾大-QQ公仔',
    'out_trade_no'   => '1217752501201407033233368018',
    'time_expire'    => '2018-06-08T10:34:56+08:00',
    'attach'         => '自定义数据',
    'notify_url'     => 'https://www.weixin.qq.com/wxpay/pay.php',
    'goods_tag'      => 'WXG',
    'support_fapiao' => true,
    'amount'         => [
      'total'    => 100,
      'currency' => 'CNY',
    ],
    'payer'          => [
      'sp_openid'  => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
      'sub_openid' => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
    ],
    'detail'         => [
      'cost_price'   => 608800,
      'invoice_id'   => '微信123',
      'goods_detail' => [[
        'merchant_goods_id'  => '商品编码',
        'wechatpay_goods_id' => '1001',
        'goods_name'         => 'iPhoneX 256G',
        'quantity'           => 1,
        'unit_price'         => 828800,
      ],],
    ],
    'scene_info'     => [
      'payer_client_ip' => '14.23.150.211',
      'device_id'       => '013467007045764',
      'store_info'      => [
        'id'     => '0001',
        'out_id' => 'example_out_id',
      ],
    ],
    'settle_info'    => [
      'profit_sharing' => true,
    ],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/pay/partner/transactions/miniprogram']->postAsync([
  'json' => [
    'sp_appid'       => 'wx8888888888888888',
    'sp_mchid'       => '1230000109',
    'sub_appid'      => 'wxd678efh567hg6999',
    'sub_mchid'      => '1900000109',
    'description'    => 'Image形象店-深圳腾大-QQ公仔',
    'out_trade_no'   => '1217752501201407033233368018',
    'time_expire'    => '2018-06-08T10:34:56+08:00',
    'attach'         => '自定义数据',
    'notify_url'     => 'https://www.weixin.qq.com/wxpay/pay.php',
    'goods_tag'      => 'WXG',
    'support_fapiao' => true,
    'amount'         => [
      'total'    => 100,
      'currency' => 'CNY',
    ],
    'payer'          => [
      'sp_openid'  => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
      'sub_openid' => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
    ],
    'detail'         => [
      'cost_price'   => 608800,
      'invoice_id'   => '微信123',
      'goods_detail' => [[
        'merchant_goods_id'  => '商品编码',
        'wechatpay_goods_id' => '1001',
        'goods_name'         => 'iPhoneX 256G',
        'quantity'           => 1,
        'unit_price'         => 828800,
      ],],
    ],
    'scene_info'     => [
      'payer_client_ip' => '14.23.150.211',
      'device_id'       => '013467007045764',
      'store_info'      => [
        'id'     => '0001',
        'out_id' => 'example_out_id',
      ],
    ],
    'settle_info'    => [
      'profit_sharing' => true,
    ],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->pay->partner->transactions->miniprogram->post([
  'json' => [
    'sp_appid'       => 'wx8888888888888888',
    'sp_mchid'       => '1230000109',
    'sub_appid'      => 'wxd678efh567hg6999',
    'sub_mchid'      => '1900000109',
    'description'    => 'Image形象店-深圳腾大-QQ公仔',
    'out_trade_no'   => '1217752501201407033233368018',
    'time_expire'    => '2018-06-08T10:34:56+08:00',
    'attach'         => '自定义数据',
    'notify_url'     => 'https://www.weixin.qq.com/wxpay/pay.php',
    'goods_tag'      => 'WXG',
    'support_fapiao' => true,
    'amount'         => [
      'total'    => 100,
      'currency' => 'CNY',
    ],
    'payer'          => [
      'sp_openid'  => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
      'sub_openid' => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
    ],
    'detail'         => [
      'cost_price'   => 608800,
      'invoice_id'   => '微信123',
      'goods_detail' => [[
        'merchant_goods_id'  => '商品编码',
        'wechatpay_goods_id' => '1001',
        'goods_name'         => 'iPhoneX 256G',
        'quantity'           => 1,
        'unit_price'         => 828800,
      ],],
    ],
    'scene_info'     => [
      'payer_client_ip' => '14.23.150.211',
      'device_id'       => '013467007045764',
      'store_info'      => [
        'id'     => '0001',
        'out_id' => 'example_out_id',
      ],
    ],
    'settle_info'    => [
      'profit_sharing' => true,
    ],
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/pay/partner/transactions/miniprogram')->post([
  'json' => [
    'sp_appid'       => 'wx8888888888888888',
    'sp_mchid'       => '1230000109',
    'sub_appid'      => 'wxd678efh567hg6999',
    'sub_mchid'      => '1900000109',
    'description'    => 'Image形象店-深圳腾大-QQ公仔',
    'out_trade_no'   => '1217752501201407033233368018',
    'time_expire'    => '2018-06-08T10:34:56+08:00',
    'attach'         => '自定义数据',
    'notify_url'     => 'https://www.weixin.qq.com/wxpay/pay.php',
    'goods_tag'      => 'WXG',
    'support_fapiao' => true,
    'amount'         => [
      'total'    => 100,
      'currency' => 'CNY',
    ],
    'payer'          => [
      'sp_openid'  => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
      'sub_openid' => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
    ],
    'detail'         => [
      'cost_price'   => 608800,
      'invoice_id'   => '微信123',
      'goods_detail' => [[
        'merchant_goods_id'  => '商品编码',
        'wechatpay_goods_id' => '1001',
        'goods_name'         => 'iPhoneX 256G',
        'quantity'           => 1,
        'unit_price'         => 828800,
      ],],
    ],
    'scene_info'     => [
      'payer_client_ip' => '14.23.150.211',
      'device_id'       => '013467007045764',
      'store_info'      => [
        'id'     => '0001',
        'out_id' => 'example_out_id',
      ],
    ],
    'settle_info'    => [
      'profit_sharing' => true,
    ],
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/pay/partner/transactions/miniprogram']->post([
  'json' => [
    'sp_appid'       => 'wx8888888888888888',
    'sp_mchid'       => '1230000109',
    'sub_appid'      => 'wxd678efh567hg6999',
    'sub_mchid'      => '1900000109',
    'description'    => 'Image形象店-深圳腾大-QQ公仔',
    'out_trade_no'   => '1217752501201407033233368018',
    'time_expire'    => '2018-06-08T10:34:56+08:00',
    'attach'         => '自定义数据',
    'notify_url'     => 'https://www.weixin.qq.com/wxpay/pay.php',
    'goods_tag'      => 'WXG',
    'support_fapiao' => true,
    'amount'         => [
      'total'    => 100,
      'currency' => 'CNY',
    ],
    'payer'          => [
      'sp_openid'  => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
      'sub_openid' => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
    ],
    'detail'         => [
      'cost_price'   => 608800,
      'invoice_id'   => '微信123',
      'goods_detail' => [[
        'merchant_goods_id'  => '商品编码',
        'wechatpay_goods_id' => '1001',
        'goods_name'         => 'iPhoneX 256G',
        'quantity'           => 1,
        'unit_price'         => 828800,
      ],],
    ],
    'scene_info'     => [
      'payer_client_ip' => '14.23.150.211',
      'device_id'       => '013467007045764',
      'store_info'      => [
        'id'     => '0001',
        'out_id' => 'example_out_id',
      ],
    ],
    'settle_info'    => [
      'profit_sharing' => true,
    ],
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| prepay_id {data-required} | string | 预支付交易会话标识

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4012886115)
