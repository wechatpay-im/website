---
title: JSAPI下单
description: 除付款码支付场景以外，商户系统先调用该接口在微信支付服务后台生成预支付交易单，返回正确的预支付交易会话标识后再按Native、JSAPI、APP等不同场景生成交易串调起支付。
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
| settle_info {data-indent=1} | object {data-tooltip="对应PHP的array"} | 结算信息
| profit_sharing {data-indent=2} | boolean | 是否指定分账
| subsidy_amount {data-indent=2} | integer | 补差金额
| description {data-required data-indent=1} | string | 商品描述
| attach {data-indent=1} | string | 附加数据
| out_trade_no {data-required data-indent=1} | string | 商户订单号
| amount {data-required data-indent=1} | object {data-tooltip="对应PHP的array"} | 订单金额
| total {data-required data-indent=2} | integer | 总金额
| currency {data-indent=2} | string | 货币类型
| time_expire {data-indent=1} | string | 交易结束时间
| notify_url {data-required data-indent=1} | string | 通知地址
| goods_tag {data-indent=1} | string | 订单优惠标记
| limit_pay {data-indent=1} | string[] | 指定支付方式<br/>`no_balance` \| `no_credit` \| `no_debit` \| `balance_only` 枚举值之一
| support_fapiao {data-indent=1} | boolean | 电子发票入口开放标识
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
| name {data-required data-indent=3} | string | 门店名称
| area_code {data-required data-indent=3} | string | 地区编码
| address {data-required data-indent=3} | string | 详细地址
| payer {data-required data-indent=1} | object {data-tooltip="对应PHP的array"} | 支付者
| sp_openid {data-required data-indent=2} | string | 用户服务标识
| sub_openid {data-indent=2} | string | 用户子标识

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->pay->partner->transactions->jsapi->postAsync([
  'json' => [
    'sp_appid'       => 'wx8888888888888888',
    'sp_mchid'       => '1230000109',
    'sub_appid'      => 'wxd678efh567hg6999',
    'sub_mchid'      => '1900000109',
    'settle_info'    => [
      'profit_sharing' => true,
      'subsidy_amount' => 10,
    ],
    'description'    => 'Image形象店-深圳腾大-QQ公仔',
    'attach'         => '自定义数据',
    'out_trade_no'   => '1217752501201407033233368018',
    'amount'         => [
      'total'    => 100,
      'currency' => 'CNY',
    ],
    'time_expire'    => '2018-06-08T10:34:56+08:00',
    'notify_url'     => 'https://www.weixin.qq.com/wxpay/pay.php',
    'goods_tag'      => 'WXG',
    'limit_pay'      => ['no_balance'],
    'support_fapiao' => true,
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
        'id'        => '0001',
        'name'      => '腾讯大厦分店',
        'area_code' => '440305',
        'address'   => '广东省深圳市南山区科技中一道10000号',
      ],
    ],
    'payer'          => [
      'sp_openid'  => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
      'sub_openid' => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
    ],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/pay/partner/transactions/jsapi')->postAsync([
  'json' => [
    'sp_appid'       => 'wx8888888888888888',
    'sp_mchid'       => '1230000109',
    'sub_appid'      => 'wxd678efh567hg6999',
    'sub_mchid'      => '1900000109',
    'settle_info'    => [
      'profit_sharing' => true,
      'subsidy_amount' => 10,
    ],
    'description'    => 'Image形象店-深圳腾大-QQ公仔',
    'attach'         => '自定义数据',
    'out_trade_no'   => '1217752501201407033233368018',
    'amount'         => [
      'total'    => 100,
      'currency' => 'CNY',
    ],
    'time_expire'    => '2018-06-08T10:34:56+08:00',
    'notify_url'     => 'https://www.weixin.qq.com/wxpay/pay.php',
    'goods_tag'      => 'WXG',
    'limit_pay'      => ['no_balance'],
    'support_fapiao' => true,
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
        'id'        => '0001',
        'name'      => '腾讯大厦分店',
        'area_code' => '440305',
        'address'   => '广东省深圳市南山区科技中一道10000号',
      ],
    ],
    'payer'          => [
      'sp_openid'  => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
      'sub_openid' => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
    ],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/pay/partner/transactions/jsapi']->postAsync([
  'json' => [
    'sp_appid'       => 'wx8888888888888888',
    'sp_mchid'       => '1230000109',
    'sub_appid'      => 'wxd678efh567hg6999',
    'sub_mchid'      => '1900000109',
    'settle_info'    => [
      'profit_sharing' => true,
      'subsidy_amount' => 10,
    ],
    'description'    => 'Image形象店-深圳腾大-QQ公仔',
    'attach'         => '自定义数据',
    'out_trade_no'   => '1217752501201407033233368018',
    'amount'         => [
      'total'    => 100,
      'currency' => 'CNY',
    ],
    'time_expire'    => '2018-06-08T10:34:56+08:00',
    'notify_url'     => 'https://www.weixin.qq.com/wxpay/pay.php',
    'goods_tag'      => 'WXG',
    'limit_pay'      => ['no_balance'],
    'support_fapiao' => true,
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
        'id'        => '0001',
        'name'      => '腾讯大厦分店',
        'area_code' => '440305',
        'address'   => '广东省深圳市南山区科技中一道10000号',
      ],
    ],
    'payer'          => [
      'sp_openid'  => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
      'sub_openid' => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
    ],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->pay->partner->transactions->jsapi->post([
  'json' => [
    'sp_appid'       => 'wx8888888888888888',
    'sp_mchid'       => '1230000109',
    'sub_appid'      => 'wxd678efh567hg6999',
    'sub_mchid'      => '1900000109',
    'settle_info'    => [
      'profit_sharing' => true,
      'subsidy_amount' => 10,
    ],
    'description'    => 'Image形象店-深圳腾大-QQ公仔',
    'attach'         => '自定义数据',
    'out_trade_no'   => '1217752501201407033233368018',
    'amount'         => [
      'total'    => 100,
      'currency' => 'CNY',
    ],
    'time_expire'    => '2018-06-08T10:34:56+08:00',
    'notify_url'     => 'https://www.weixin.qq.com/wxpay/pay.php',
    'goods_tag'      => 'WXG',
    'limit_pay'      => ['no_balance'],
    'support_fapiao' => true,
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
        'id'        => '0001',
        'name'      => '腾讯大厦分店',
        'area_code' => '440305',
        'address'   => '广东省深圳市南山区科技中一道10000号',
      ],
    ],
    'payer'          => [
      'sp_openid'  => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
      'sub_openid' => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
    ],
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/pay/partner/transactions/jsapi')->post([
  'json' => [
    'sp_appid'       => 'wx8888888888888888',
    'sp_mchid'       => '1230000109',
    'sub_appid'      => 'wxd678efh567hg6999',
    'sub_mchid'      => '1900000109',
    'settle_info'    => [
      'profit_sharing' => true,
      'subsidy_amount' => 10,
    ],
    'description'    => 'Image形象店-深圳腾大-QQ公仔',
    'attach'         => '自定义数据',
    'out_trade_no'   => '1217752501201407033233368018',
    'amount'         => [
      'total'    => 100,
      'currency' => 'CNY',
    ],
    'time_expire'    => '2018-06-08T10:34:56+08:00',
    'notify_url'     => 'https://www.weixin.qq.com/wxpay/pay.php',
    'goods_tag'      => 'WXG',
    'limit_pay'      => ['no_balance'],
    'support_fapiao' => true,
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
        'id'        => '0001',
        'name'      => '腾讯大厦分店',
        'area_code' => '440305',
        'address'   => '广东省深圳市南山区科技中一道10000号',
      ],
    ],
    'payer'          => [
      'sp_openid'  => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
      'sub_openid' => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
    ],
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/pay/partner/transactions/jsapi']->post([
  'json' => [
    'sp_appid'       => 'wx8888888888888888',
    'sp_mchid'       => '1230000109',
    'sub_appid'      => 'wxd678efh567hg6999',
    'sub_mchid'      => '1900000109',
    'settle_info'    => [
      'profit_sharing' => true,
      'subsidy_amount' => 10,
    ],
    'description'    => 'Image形象店-深圳腾大-QQ公仔',
    'attach'         => '自定义数据',
    'out_trade_no'   => '1217752501201407033233368018',
    'amount'         => [
      'total'    => 100,
      'currency' => 'CNY',
    ],
    'time_expire'    => '2018-06-08T10:34:56+08:00',
    'notify_url'     => 'https://www.weixin.qq.com/wxpay/pay.php',
    'goods_tag'      => 'WXG',
    'limit_pay'      => ['no_balance'],
    'support_fapiao' => true,
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
        'id'        => '0001',
        'name'      => '腾讯大厦分店',
        'area_code' => '440305',
        'address'   => '广东省深圳市南山区科技中一道10000号',
      ],
    ],
    'payer'          => [
      'sp_openid'  => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
      'sub_openid' => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
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

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/pay/transactions/chapter5_2.shtml)
