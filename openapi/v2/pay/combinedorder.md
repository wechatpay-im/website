---
title: 合单下单
description: 使用合单支付接口，用户只输入一次密码，即可完成多个订单的支付。目前最多一次可支持10笔订单进行合单支付。用合单下单api在微信支付服务后台生成预支付交易单，返回正确的预支付交易会话标识后再按扫码、JSAPI、APP、H5等不同场景生成交易串调起支付。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| xml {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`XML`数据结构
| combine_appid {data-required data-indent=1} | string | 合单appid
| combine_mch_id {data-required data-indent=1} | string | 合单商户号
| device_info {data-indent=1} | string | 设备号
| sign_type {data-required data-indent=1} | string | 签名类型<br/>`HMAC-SHA256` 枚举值
| combine_out_trade_no {data-required data-indent=1} | string | 合单商户订单号
| spbill_create_ip {data-required data-indent=1} | string | 终端IP
| time_start {data-indent=1} | string | 交易起始时间
| time_expire {data-indent=1} | string | 交易结束时间
| notify_url {data-required data-indent=1} | string | 通知地址
| trade_type {data-required data-indent=1} | string | 交易类型
| product_id {data-indent=1} | string | 商品ID
| combine_openid {data-indent=1} | string | 合单用户标识
| scene_info {data-required data-indent=1} | string | 场景信息`JSON`格式字符串
| {colspan=3 .im-table-line}
| device_id {data-indent=2} | string | 商户端设备号
| payer_client_ip {data-required data-indent=2} | string | 用户终端IP
| h5_info {data-indent=2} | object {data-tooltip="对应PHP的array"} | H5场景信息
| type {data-required data-indent=3} | string | 场景类型<br/>`iOS` \| `Android` \| `Wap` 枚举值之一
| app_name {data-indent=3} | string | 应用名称
| app_url {data-indent=3} | string | 网站URL
| bundle_id {data-indent=3} | string | iOS平台BundleID
| package_name {data-indent=3} | string | Android平台PackageName
| sub_order_list {data-required data-indent=1} | string | 子单信息`JSON`格式字符串
| {colspan=3 .im-table-line}
| order_num {data-required data-indent=2} | number | 子订单数
| order_list {data-required data-indent=2} | object[] {data-tooltip="对应PHP的array"} | 子订单信息
| mchid {data-required data-indent=3} | string | 子单商户号
| attach {data-required data-indent=3} | string | 附加数据
| amount {data-required data-indent=3} | object {data-tooltip="对应PHP的array"} | 订单金额
| total_amount {data-required data-indent=4} | number | 标价金额
| currency {data-indent=4} | string | 标价币种
| out_trade_no {data-required data-indent=3} | string | 子单商户订单号
| goods_tag {data-indent=3} | string | 订单优惠标记
| description {data-required data-indent=3} | string | 商品描述
| settle_info {data-indent=3} | object {data-tooltip="对应PHP的array"} | 结算信息
| profit_sharing {data-indent=4} | boolean | 是否指定分账
| subsidy_amount {data-indent=4} | number | 补差金额

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v2->pay->combinedorder->postAsync([
  'xml' => [
    'combine_appid'        => 'wx8888888888888888',
    'combine_mch_id'       => '1900000109',
    'device_info'          => '013467007045764',
    'sign_type'            => 'HMAC-SHA256',
    'combine_out_trade_no' => '1217752501201407033233368018',
    'spbill_create_ip'     => '8.8.8.8',
    'time_start'           => '20171225091010',
    'time_expire'          => '20171225091510',
    'notify_url'           => 'http://www.weixin.qq.com/wxpay/pay.php',
    'trade_type'           => 'JSAPI',
    'product_id'           => '1234567890',
    'combine_openid'       => '120061098828009406',
    'scene_info'           => '{"h5_info": {"type":"IOS","app_name": "王者荣耀","bundle_id": "com.tencent.wzryIOS"}}',
    'sub_order_list'       => '{"order_list": [{"appid": "wxdace645e0bc2c424","attach": "深圳分店","body": "子订单1","fee_type": "CNY","mch_id": "1900009001","out_trade_no": "OD201708030001","total_fee": 1234}],"order_num": 3}',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [异步声明式]
$instance->chain('v2/pay/combinedorder')->postAsync([
  'xml' => [
    'combine_appid'        => 'wx8888888888888888',
    'combine_mch_id'       => '1900000109',
    'device_info'          => '013467007045764',
    'sign_type'            => 'HMAC-SHA256',
    'combine_out_trade_no' => '1217752501201407033233368018',
    'spbill_create_ip'     => '8.8.8.8',
    'time_start'           => '20171225091010',
    'time_expire'          => '20171225091510',
    'notify_url'           => 'http://www.weixin.qq.com/wxpay/pay.php',
    'trade_type'           => 'JSAPI',
    'product_id'           => '1234567890',
    'combine_openid'       => '120061098828009406',
    'scene_info'           => '{"h5_info": {"type":"IOS","app_name": "王者荣耀","bundle_id": "com.tencent.wzryIOS"}}',
    'sub_order_list'       => '{"order_list": [{"appid": "wxdace645e0bc2c424","attach": "深圳分店","body": "子订单1","fee_type": "CNY","mch_id": "1900009001","out_trade_no": "OD201708030001","total_fee": 1234}],"order_num": 3}',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [异步属性式]
$instance['v2/pay/combinedorder']->postAsync([
  'xml' => [
    'combine_appid'        => 'wx8888888888888888',
    'combine_mch_id'       => '1900000109',
    'device_info'          => '013467007045764',
    'sign_type'            => 'HMAC-SHA256',
    'combine_out_trade_no' => '1217752501201407033233368018',
    'spbill_create_ip'     => '8.8.8.8',
    'time_start'           => '20171225091010',
    'time_expire'          => '20171225091510',
    'notify_url'           => 'http://www.weixin.qq.com/wxpay/pay.php',
    'trade_type'           => 'JSAPI',
    'product_id'           => '1234567890',
    'combine_openid'       => '120061098828009406',
    'scene_info'           => '{"h5_info": {"type":"IOS","app_name": "王者荣耀","bundle_id": "com.tencent.wzryIOS"}}',
    'sub_order_list'       => '{"order_list": [{"appid": "wxdace645e0bc2c424","attach": "深圳分店","body": "子订单1","fee_type": "CNY","mch_id": "1900009001","out_trade_no": "OD201708030001","total_fee": 1234}],"order_num": 3}',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v2->pay->combinedorder->post([
  'xml' => [
    'combine_appid'        => 'wx8888888888888888',
    'combine_mch_id'       => '1900000109',
    'device_info'          => '013467007045764',
    'sign_type'            => 'HMAC-SHA256',
    'combine_out_trade_no' => '1217752501201407033233368018',
    'spbill_create_ip'     => '8.8.8.8',
    'time_start'           => '20171225091010',
    'time_expire'          => '20171225091510',
    'notify_url'           => 'http://www.weixin.qq.com/wxpay/pay.php',
    'trade_type'           => 'JSAPI',
    'product_id'           => '1234567890',
    'combine_openid'       => '120061098828009406',
    'scene_info'           => '{"h5_info": {"type":"IOS","app_name": "王者荣耀","bundle_id": "com.tencent.wzryIOS"}}',
    'sub_order_list'       => '{"order_list": [{"appid": "wxdace645e0bc2c424","attach": "深圳分店","body": "子订单1","fee_type": "CNY","mch_id": "1900009001","out_trade_no": "OD201708030001","total_fee": 1234}],"order_num": 3}',
  ],
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

```php [同步声明式]
$response = $instance->chain('v2/pay/combinedorder')->post([
  'xml' => [
    'combine_appid'        => 'wx8888888888888888',
    'combine_mch_id'       => '1900000109',
    'device_info'          => '013467007045764',
    'sign_type'            => 'HMAC-SHA256',
    'combine_out_trade_no' => '1217752501201407033233368018',
    'spbill_create_ip'     => '8.8.8.8',
    'time_start'           => '20171225091010',
    'time_expire'          => '20171225091510',
    'notify_url'           => 'http://www.weixin.qq.com/wxpay/pay.php',
    'trade_type'           => 'JSAPI',
    'product_id'           => '1234567890',
    'combine_openid'       => '120061098828009406',
    'scene_info'           => '{"h5_info": {"type":"IOS","app_name": "王者荣耀","bundle_id": "com.tencent.wzryIOS"}}',
    'sub_order_list'       => '{"order_list": [{"appid": "wxdace645e0bc2c424","attach": "深圳分店","body": "子订单1","fee_type": "CNY","mch_id": "1900009001","out_trade_no": "OD201708030001","total_fee": 1234}],"order_num": 3}',
  ],
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

```php [同步属性式]
$response = $instance['v2/pay/combinedorder']->post([
  'xml' => [
    'combine_appid'        => 'wx8888888888888888',
    'combine_mch_id'       => '1900000109',
    'device_info'          => '013467007045764',
    'sign_type'            => 'HMAC-SHA256',
    'combine_out_trade_no' => '1217752501201407033233368018',
    'spbill_create_ip'     => '8.8.8.8',
    'time_start'           => '20171225091010',
    'time_expire'          => '20171225091510',
    'notify_url'           => 'http://www.weixin.qq.com/wxpay/pay.php',
    'trade_type'           => 'JSAPI',
    'product_id'           => '1234567890',
    'combine_openid'       => '120061098828009406',
    'scene_info'           => '{"h5_info": {"type":"IOS","app_name": "王者荣耀","bundle_id": "com.tencent.wzryIOS"}}',
    'sub_order_list'       => '{"order_list": [{"appid": "wxdace645e0bc2c424","attach": "深圳分店","body": "子订单1","fee_type": "CNY","mch_id": "1900009001","out_trade_no": "OD201708030001","total_fee": 1234}],"order_num": 3}',
  ],
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| return_code {data-required} | string | 返回状态码<br/>`SUCCESS` \| `FAIL` 枚举值之一
| return_msg | string | 返回信息
| combine_appid {data-required} | string | 合单appid
| combine_mch_id {data-required} | string | 合单商户号
| device_info | string | 设备号
| nonce_str {data-required} | string | 随机字符串
| sign {data-required} | string | 签名
| result_code {data-required} | string | 业务结果<br/>`SUCCESS` \| `FAIL` 枚举值之一
| err_code | string | 错误代码
| err_code_des | string | 错误代码描述
| trade_type {data-required} | string | 交易类型
| code_url | string | 二维码链接
| prepay_id {data-required} | string | 预支付交易会话标识
| mweb_url | string | H5支付跳转链接

{.im-table #response}

参阅 [官方合单支付文档](https://pay.weixin.qq.com/wiki/doc/api/combine.php?chapter=24_1&index=2)
