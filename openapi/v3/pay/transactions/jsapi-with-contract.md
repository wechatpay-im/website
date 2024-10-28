---
title: JSAPI下单并授权
description: 商户系统先通过预签约生成token或者用户免密签约后，再调用该接口在微信支付服务后台生成预支付交易单，返回正确的预支付交易会话标识后再按JSAPI方式调起支付。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| json | object | 声明请求的`JSON`数据结构
| appid {data-indent=1} | string | 公众号ID
| mchid {data-indent=1} | string | 直连商户号
| description {data-indent=1} | string | 商品描述
| out_trade_no {data-indent=1} | string | 商户订单号
| time_expire {data-indent=1} | string | 交易结束时间
| attach {data-indent=1} | string | 附加数据
| notify_url {data-indent=1} | string | 通知地址
| goods_tag {data-indent=1} | string | 订单优惠标记
| support_fapiao {data-indent=1} | boolean | 电子发票入口开放标识
| amount {data-indent=1} | object | 订单金额
| total {data-indent=2} | number | 总金额
| currency {data-indent=2} | string | 货币类型
| payer {data-indent=1} | object | 支付者
| openid {data-indent=2} | string | 用户标识
| detail {data-indent=1} | object | 优惠功能
| cost_price {data-indent=2} | number | 订单原价
| invoice_id {data-indent=2} | string | 商品小票ID
| goods_detail {data-indent=2} | object[] | 单品列表
| merchant_goods_id {data-indent=3} | string | 商户侧商品编码
| wechatpay_goods_id {data-indent=3} | string | 微信支付商品编码
| goods_name {data-indent=3} | string | 商品名称
| quantity {data-indent=3} | number | 商品数量
| unit_price {data-indent=3} | number | 商品单价
| scene_info {data-indent=1} | object | 场景信息
| payer_client_ip {data-indent=2} | string | 用户终端IP
| device_id {data-indent=2} | string | 商户端设备号
| store_info {data-indent=2} | object | 商户门店信息
| id {data-indent=3} | string | 门店编号
| name {data-indent=3} | string | 门店名称
| area_code {data-indent=3} | string | 地区编码
| address {data-indent=3} | string | 详细地址
| settle_info {data-indent=1} | object | 结算信息
| profit_sharing {data-indent=2} | boolean | 是否指定分账
| contract_info {data-indent=1} | object | 签约授权信息
| token {data-indent=2} | string | 扣费服务预授权token
| password_free_contract_id {data-indent=2} | string | 免密协议ID

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->pay->transactions->jsapiWithContract->postAsync([
  'json' => [
    'appid' => 'wxd678efh567hg6787',
    'mchid' => '1230000109',
    'description' => 'Image形象店-深圳腾大-QQ公仔',
    'out_trade_no' => '1217752501201407033233368018',
    'time_expire' => '2018-06-08T10:34:56+08:00',
    'attach' => '自定义数据说明',
    'notify_url' => 'https://www.weixin.qq.com/wxpay/pay.php',
    'goods_tag' => 'WXG',
    'support_fapiao' => true,
    'amount' => [
      'total' => 100,
      'currency' => 'CNY',
    ],
    'payer' => [
      'openid' => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
    ],
    'detail' => [
      'cost_price' => 608800,
      'invoice_id' => '微信123',
      'goods_detail' => [[
        'merchant_goods_id' => '1246464644',
        'wechatpay_goods_id' => '1001',
        'goods_name' => 'iPhoneX 256G',
        'quantity' => 1,
        'unit_price' => 528800,
      ],],
    ],
    'scene_info' => [
      'payer_client_ip' => '14.23.150.211',
      'device_id' => '013467007045764',
      'store_info' => [
        'id' => '0001',
        'name' => '腾讯大厦分店',
        'area_code' => '440305',
        'address' => '广东省深圳市南山区科技中一道10000号',
      ],
    ],
    'settle_info' => [
      'profit_sharing' => true,
    ],
    'contract_info' => [
      'token' => '201710180325670965',
      'password_free_contract_id' => '201710180325670965',
    ],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/pay/transactions/jsapi-with-contract')->postAsync([
  'json' => [
    'appid' => 'wxd678efh567hg6787',
    'mchid' => '1230000109',
    'description' => 'Image形象店-深圳腾大-QQ公仔',
    'out_trade_no' => '1217752501201407033233368018',
    'time_expire' => '2018-06-08T10:34:56+08:00',
    'attach' => '自定义数据说明',
    'notify_url' => 'https://www.weixin.qq.com/wxpay/pay.php',
    'goods_tag' => 'WXG',
    'support_fapiao' => true,
    'amount' => [
      'total' => 100,
      'currency' => 'CNY',
    ],
    'payer' => [
      'openid' => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
    ],
    'detail' => [
      'cost_price' => 608800,
      'invoice_id' => '微信123',
      'goods_detail' => [[
        'merchant_goods_id' => '1246464644',
        'wechatpay_goods_id' => '1001',
        'goods_name' => 'iPhoneX 256G',
        'quantity' => 1,
        'unit_price' => 528800,
      ],],
    ],
    'scene_info' => [
      'payer_client_ip' => '14.23.150.211',
      'device_id' => '013467007045764',
      'store_info' => [
        'id' => '0001',
        'name' => '腾讯大厦分店',
        'area_code' => '440305',
        'address' => '广东省深圳市南山区科技中一道10000号',
      ],
    ],
    'settle_info' => [
      'profit_sharing' => true,
    ],
    'contract_info' => [
      'token' => '201710180325670965',
      'password_free_contract_id' => '201710180325670965',
    ],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/pay/transactions/jsapi-with-contract']->postAsync([
  'json' => [
    'appid' => 'wxd678efh567hg6787',
    'mchid' => '1230000109',
    'description' => 'Image形象店-深圳腾大-QQ公仔',
    'out_trade_no' => '1217752501201407033233368018',
    'time_expire' => '2018-06-08T10:34:56+08:00',
    'attach' => '自定义数据说明',
    'notify_url' => 'https://www.weixin.qq.com/wxpay/pay.php',
    'goods_tag' => 'WXG',
    'support_fapiao' => true,
    'amount' => [
      'total' => 100,
      'currency' => 'CNY',
    ],
    'payer' => [
      'openid' => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
    ],
    'detail' => [
      'cost_price' => 608800,
      'invoice_id' => '微信123',
      'goods_detail' => [[
        'merchant_goods_id' => '1246464644',
        'wechatpay_goods_id' => '1001',
        'goods_name' => 'iPhoneX 256G',
        'quantity' => 1,
        'unit_price' => 528800,
      ],],
    ],
    'scene_info' => [
      'payer_client_ip' => '14.23.150.211',
      'device_id' => '013467007045764',
      'store_info' => [
        'id' => '0001',
        'name' => '腾讯大厦分店',
        'area_code' => '440305',
        'address' => '广东省深圳市南山区科技中一道10000号',
      ],
    ],
    'settle_info' => [
      'profit_sharing' => true,
    ],
    'contract_info' => [
      'token' => '201710180325670965',
      'password_free_contract_id' => '201710180325670965',
    ],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->pay->transactions->jsapiWithContract->post([
  'json' => [
    'appid' => 'wxd678efh567hg6787',
    'mchid' => '1230000109',
    'description' => 'Image形象店-深圳腾大-QQ公仔',
    'out_trade_no' => '1217752501201407033233368018',
    'time_expire' => '2018-06-08T10:34:56+08:00',
    'attach' => '自定义数据说明',
    'notify_url' => 'https://www.weixin.qq.com/wxpay/pay.php',
    'goods_tag' => 'WXG',
    'support_fapiao' => true,
    'amount' => [
      'total' => 100,
      'currency' => 'CNY',
    ],
    'payer' => [
      'openid' => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
    ],
    'detail' => [
      'cost_price' => 608800,
      'invoice_id' => '微信123',
      'goods_detail' => [[
        'merchant_goods_id' => '1246464644',
        'wechatpay_goods_id' => '1001',
        'goods_name' => 'iPhoneX 256G',
        'quantity' => 1,
        'unit_price' => 528800,
      ],],
    ],
    'scene_info' => [
      'payer_client_ip' => '14.23.150.211',
      'device_id' => '013467007045764',
      'store_info' => [
        'id' => '0001',
        'name' => '腾讯大厦分店',
        'area_code' => '440305',
        'address' => '广东省深圳市南山区科技中一道10000号',
      ],
    ],
    'settle_info' => [
      'profit_sharing' => true,
    ],
    'contract_info' => [
      'token' => '201710180325670965',
      'password_free_contract_id' => '201710180325670965',
    ],
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/pay/transactions/jsapi-with-contract')->post([
  'json' => [
    'appid' => 'wxd678efh567hg6787',
    'mchid' => '1230000109',
    'description' => 'Image形象店-深圳腾大-QQ公仔',
    'out_trade_no' => '1217752501201407033233368018',
    'time_expire' => '2018-06-08T10:34:56+08:00',
    'attach' => '自定义数据说明',
    'notify_url' => 'https://www.weixin.qq.com/wxpay/pay.php',
    'goods_tag' => 'WXG',
    'support_fapiao' => true,
    'amount' => [
      'total' => 100,
      'currency' => 'CNY',
    ],
    'payer' => [
      'openid' => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
    ],
    'detail' => [
      'cost_price' => 608800,
      'invoice_id' => '微信123',
      'goods_detail' => [[
        'merchant_goods_id' => '1246464644',
        'wechatpay_goods_id' => '1001',
        'goods_name' => 'iPhoneX 256G',
        'quantity' => 1,
        'unit_price' => 528800,
      ],],
    ],
    'scene_info' => [
      'payer_client_ip' => '14.23.150.211',
      'device_id' => '013467007045764',
      'store_info' => [
        'id' => '0001',
        'name' => '腾讯大厦分店',
        'area_code' => '440305',
        'address' => '广东省深圳市南山区科技中一道10000号',
      ],
    ],
    'settle_info' => [
      'profit_sharing' => true,
    ],
    'contract_info' => [
      'token' => '201710180325670965',
      'password_free_contract_id' => '201710180325670965',
    ],
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/pay/transactions/jsapi-with-contract']->post([
  'json' => [
    'appid' => 'wxd678efh567hg6787',
    'mchid' => '1230000109',
    'description' => 'Image形象店-深圳腾大-QQ公仔',
    'out_trade_no' => '1217752501201407033233368018',
    'time_expire' => '2018-06-08T10:34:56+08:00',
    'attach' => '自定义数据说明',
    'notify_url' => 'https://www.weixin.qq.com/wxpay/pay.php',
    'goods_tag' => 'WXG',
    'support_fapiao' => true,
    'amount' => [
      'total' => 100,
      'currency' => 'CNY',
    ],
    'payer' => [
      'openid' => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
    ],
    'detail' => [
      'cost_price' => 608800,
      'invoice_id' => '微信123',
      'goods_detail' => [[
        'merchant_goods_id' => '1246464644',
        'wechatpay_goods_id' => '1001',
        'goods_name' => 'iPhoneX 256G',
        'quantity' => 1,
        'unit_price' => 528800,
      ],],
    ],
    'scene_info' => [
      'payer_client_ip' => '14.23.150.211',
      'device_id' => '013467007045764',
      'store_info' => [
        'id' => '0001',
        'name' => '腾讯大厦分店',
        'area_code' => '440305',
        'address' => '广东省深圳市南山区科技中一道10000号',
      ],
    ],
    'settle_info' => [
      'profit_sharing' => true,
    ],
    'contract_info' => [
      'token' => '201710180325670965',
      'password_free_contract_id' => '201710180325670965',
    ],
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| prepay_id | string | 预支付交易会话标识

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/docs/merchant/apis/hide-jsapi-payment/direct-jsons/jsapi-contract-prepay.html)
