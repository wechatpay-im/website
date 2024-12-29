---
title: 申请扣款
description: 委托代扣可应用于定期扣款或需事后扣款以期提高效率的场景。例如公交，地铁等通过用户授权给商户，进行委托扣款的场景。注：扣费请求首先按签约协议中记录的优先支付方式扣费，否则从可用扣款方式中依次选择扣款。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| xml {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`XML`数据结构
| appid {data-required data-indent=1} | string | 公众账号id
| mch_id {data-required data-indent=1} | string | 商户号
| sign_type {data-required data-indent=1} | string | 签名类型<br/>`HMAC-SHA256` 枚举值
| body {data-required data-indent=1} | string | 商品描述
| detail {data-indent=1} | string | 商品详情
| attach {data-indent=1} | string | 附加数据
| out_trade_no {data-required data-indent=1} | string | 商户订单号
| total_fee {data-required data-indent=1} | integer | 总金额
| fee_type {data-indent=1} | string | 货币类型
| spbill_create_ip {data-required data-indent=1} | string | 终端IP
| goods_tag {data-indent=1} | string | 商品标记
| notify_url {data-required data-indent=1} | string | 回调通知url
| trade_type {data-required data-indent=1} | string | 交易类型<br/>`PAP` 枚举值
| contract_id {data-indent=1} | string | 委托代扣协议id
| trade_scene {data-required data-indent=1} | string | 交易场景<br/>`METRO` \| `BUS` 枚举值之一
| scene_info {data-required data-indent=1} | string {data-tooltip=使用json_encode后的字符串 data-encoded=by-json_encode} | 场景信息`JSON`格式字符串
| {colspan=3 .im-table-line}
| scene_info {data-required data-indent=2} | object | 场景`METRO`信息
| start_time {data-required data-indent=3} | string | 乘车时间
| end_time {data-indent=3} | string | 结束时间
| qrcode_hash {data-indent=3} | string | 乘车码SHA256
| start_station {data-indent=3} | string | 起始站
| end_station {data-indent=3} | string | 终点站
| {colspan=3 .im-table-line}
| scene_info {data-required data-indent=2} | object | 场景`BUS`信息
| start_time {data-required data-indent=3} | string | 乘车时间
| line_name {data-indent=3} | string | 乘车路线
| qrcode_hash {data-indent=3} | string | 乘车码SHA256
| plate_number {data-indent=3} | string | 车牌号
| clientip {data-indent=1} | string | 客户端 IP
| deviceid {data-indent=1} | string | 设备ID
| mobile {data-indent=1} | string | 手机号
| email {data-indent=1} | string | 邮箱地址
| qq {data-indent=1} | string | QQ号
| openid {data-indent=1} | string | 微信openID
| creid {data-indent=1} | string | 身份证号
| outerid {data-indent=1} | string | 商户侧用户标识
| version {data-required data-indent=1} | string | 版本号 此字段仅针对有垫资权限的商户有效。<br/>`2.0` 枚举值

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v2->transit->pay->payapply->postAsync([
  'xml' => [
    'appid'            => 'wxcbda96de0b165486',
    'mch_id'           => '10000098',
    'sign_type'        => 'HMAC-SHA256',
    'body'             => '公交代扣',
    'detail'           => '公交代扣：A 公交代扣：B 公交代扣：C',
    'attach'           => '自定义参数',
    'out_trade_no'     => '1217752501201407033233368018',
    'total_fee'        => '888',
    'fee_type'         => 'CNY',
    'spbill_create_ip' => '8.8.8.8',
    'goods_tag'        => 'WXG',
    'notify_url'       => 'http://yoursite.com/wxpay.html',
    'trade_type'       => 'PAP',
    'contract_id'      => 'Wx15463511252015071056489715',
    'trade_scene'      => 'METRO',
    'scene_info'       => \json_encode([
      'scene_info' => [
        'start_time'    => '20170826104339',
        'end_time'      => '20170826114339',
        'qrcode_hash'   => 'a756836e7432437d98bbf07bdde2942c99f6a2ab88a72b60aa747fce54b093c6',
        'start_station' => '西单',
        'end_station'   => '天安门西',
      ],
    ]),
    'clientip'         => '119.145.83.6',
    'deviceid'         => 'baf04e6bbbd06f7b1a197d18ed53b7f1',
    'mobile'           => '18933432355',
    'email'            => 'aobama@whitehouse.com',
    'qq'               => '100243',
    'openid'           => 'baf04e6bbbd06f7b1a197d18ed53b7f1',
    'creid'            => '110102199701011000',
    'outerid'          => 'user123',
    'version'          => '2.0',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [异步声明式]
$instance->chain('v2/transit/pay/payapply')->postAsync([
  'xml' => [
    'appid'            => 'wxcbda96de0b165486',
    'mch_id'           => '10000098',
    'sign_type'        => 'HMAC-SHA256',
    'body'             => '公交代扣',
    'detail'           => '公交代扣：A 公交代扣：B 公交代扣：C',
    'attach'           => '自定义参数',
    'out_trade_no'     => '1217752501201407033233368018',
    'total_fee'        => '888',
    'fee_type'         => 'CNY',
    'spbill_create_ip' => '8.8.8.8',
    'goods_tag'        => 'WXG',
    'notify_url'       => 'http://yoursite.com/wxpay.html',
    'trade_type'       => 'PAP',
    'contract_id'      => 'Wx15463511252015071056489715',
    'trade_scene'      => 'METRO',
    'scene_info'       => \json_encode([
      'scene_info' => [
        'start_time'    => '20170826104339',
        'end_time'      => '20170826114339',
        'qrcode_hash'   => 'a756836e7432437d98bbf07bdde2942c99f6a2ab88a72b60aa747fce54b093c6',
        'start_station' => '西单',
        'end_station'   => '天安门西',
      ],
    ]),
    'clientip'         => '119.145.83.6',
    'deviceid'         => 'baf04e6bbbd06f7b1a197d18ed53b7f1',
    'mobile'           => '18933432355',
    'email'            => 'aobama@whitehouse.com',
    'qq'               => '100243',
    'openid'           => 'baf04e6bbbd06f7b1a197d18ed53b7f1',
    'creid'            => '110102199701011000',
    'outerid'          => 'user123',
    'version'          => '2.0',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [异步属性式]
$instance['v2/transit/pay/payapply']->postAsync([
  'xml' => [
    'appid'            => 'wxcbda96de0b165486',
    'mch_id'           => '10000098',
    'sign_type'        => 'HMAC-SHA256',
    'body'             => '公交代扣',
    'detail'           => '公交代扣：A 公交代扣：B 公交代扣：C',
    'attach'           => '自定义参数',
    'out_trade_no'     => '1217752501201407033233368018',
    'total_fee'        => '888',
    'fee_type'         => 'CNY',
    'spbill_create_ip' => '8.8.8.8',
    'goods_tag'        => 'WXG',
    'notify_url'       => 'http://yoursite.com/wxpay.html',
    'trade_type'       => 'PAP',
    'contract_id'      => 'Wx15463511252015071056489715',
    'trade_scene'      => 'METRO',
    'scene_info'       => \json_encode([
      'scene_info' => [
        'start_time'    => '20170826104339',
        'end_time'      => '20170826114339',
        'qrcode_hash'   => 'a756836e7432437d98bbf07bdde2942c99f6a2ab88a72b60aa747fce54b093c6',
        'start_station' => '西单',
        'end_station'   => '天安门西',
      ],
    ]),
    'clientip'         => '119.145.83.6',
    'deviceid'         => 'baf04e6bbbd06f7b1a197d18ed53b7f1',
    'mobile'           => '18933432355',
    'email'            => 'aobama@whitehouse.com',
    'qq'               => '100243',
    'openid'           => 'baf04e6bbbd06f7b1a197d18ed53b7f1',
    'creid'            => '110102199701011000',
    'outerid'          => 'user123',
    'version'          => '2.0',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v2->transit->pay->payapply->post([
  'xml' => [
    'appid'            => 'wxcbda96de0b165486',
    'mch_id'           => '10000098',
    'sign_type'        => 'HMAC-SHA256',
    'body'             => '公交代扣',
    'detail'           => '公交代扣：A 公交代扣：B 公交代扣：C',
    'attach'           => '自定义参数',
    'out_trade_no'     => '1217752501201407033233368018',
    'total_fee'        => '888',
    'fee_type'         => 'CNY',
    'spbill_create_ip' => '8.8.8.8',
    'goods_tag'        => 'WXG',
    'notify_url'       => 'http://yoursite.com/wxpay.html',
    'trade_type'       => 'PAP',
    'contract_id'      => 'Wx15463511252015071056489715',
    'trade_scene'      => 'METRO',
    'scene_info'       => \json_encode([
      'scene_info' => [
        'start_time'    => '20170826104339',
        'end_time'      => '20170826114339',
        'qrcode_hash'   => 'a756836e7432437d98bbf07bdde2942c99f6a2ab88a72b60aa747fce54b093c6',
        'start_station' => '西单',
        'end_station'   => '天安门西',
      ],
    ]),
    'clientip'         => '119.145.83.6',
    'deviceid'         => 'baf04e6bbbd06f7b1a197d18ed53b7f1',
    'mobile'           => '18933432355',
    'email'            => 'aobama@whitehouse.com',
    'qq'               => '100243',
    'openid'           => 'baf04e6bbbd06f7b1a197d18ed53b7f1',
    'creid'            => '110102199701011000',
    'outerid'          => 'user123',
    'version'          => '2.0',
  ],
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

```php [同步声明式]
$response = $instance->chain('v2/transit/pay/payapply')->post([
  'xml' => [
    'appid'            => 'wxcbda96de0b165486',
    'mch_id'           => '10000098',
    'sign_type'        => 'HMAC-SHA256',
    'body'             => '公交代扣',
    'detail'           => '公交代扣：A 公交代扣：B 公交代扣：C',
    'attach'           => '自定义参数',
    'out_trade_no'     => '1217752501201407033233368018',
    'total_fee'        => '888',
    'fee_type'         => 'CNY',
    'spbill_create_ip' => '8.8.8.8',
    'goods_tag'        => 'WXG',
    'notify_url'       => 'http://yoursite.com/wxpay.html',
    'trade_type'       => 'PAP',
    'contract_id'      => 'Wx15463511252015071056489715',
    'trade_scene'      => 'METRO',
    'scene_info'       => \json_encode([
      'scene_info' => [
        'start_time'    => '20170826104339',
        'end_time'      => '20170826114339',
        'qrcode_hash'   => 'a756836e7432437d98bbf07bdde2942c99f6a2ab88a72b60aa747fce54b093c6',
        'start_station' => '西单',
        'end_station'   => '天安门西',
      ],
    ]),
    'clientip'         => '119.145.83.6',
    'deviceid'         => 'baf04e6bbbd06f7b1a197d18ed53b7f1',
    'mobile'           => '18933432355',
    'email'            => 'aobama@whitehouse.com',
    'qq'               => '100243',
    'openid'           => 'baf04e6bbbd06f7b1a197d18ed53b7f1',
    'creid'            => '110102199701011000',
    'outerid'          => 'user123',
    'version'          => '2.0',
  ],
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

```php [同步属性式]
$response = $instance['v2/transit/pay/payapply']->post([
  'xml' => [
    'appid'            => 'wxcbda96de0b165486',
    'mch_id'           => '10000098',
    'sign_type'        => 'HMAC-SHA256',
    'body'             => '公交代扣',
    'detail'           => '公交代扣：A 公交代扣：B 公交代扣：C',
    'attach'           => '自定义参数',
    'out_trade_no'     => '1217752501201407033233368018',
    'total_fee'        => '888',
    'fee_type'         => 'CNY',
    'spbill_create_ip' => '8.8.8.8',
    'goods_tag'        => 'WXG',
    'notify_url'       => 'http://yoursite.com/wxpay.html',
    'trade_type'       => 'PAP',
    'contract_id'      => 'Wx15463511252015071056489715',
    'trade_scene'      => 'METRO',
    'scene_info'       => \json_encode([
      'scene_info' => [
        'start_time'    => '20170826104339',
        'end_time'      => '20170826114339',
        'qrcode_hash'   => 'a756836e7432437d98bbf07bdde2942c99f6a2ab88a72b60aa747fce54b093c6',
        'start_station' => '西单',
        'end_station'   => '天安门西',
      ],
    ]),
    'clientip'         => '119.145.83.6',
    'deviceid'         => 'baf04e6bbbd06f7b1a197d18ed53b7f1',
    'mobile'           => '18933432355',
    'email'            => 'aobama@whitehouse.com',
    'qq'               => '100243',
    'openid'           => 'baf04e6bbbd06f7b1a197d18ed53b7f1',
    'creid'            => '110102199701011000',
    'outerid'          => 'user123',
    'version'          => '2.0',
  ],
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| return_code {data-required} | string | 返回状态码<br/>`SUCCESS` \| `FAIL` 枚举值之一
| return_msg {data-required} | string | 返回信息
| appid {data-required} | string | 公众账号id
| mch_id {data-required} | string | 商户号
| device_info | string | 设备号
| nonce_str {data-required} | string | 随机字符串
| sign {data-required} | string | 签名
| result_code {data-required} | string | 业务结果<br/>`SUCCESS` \| `FAIL` 枚举值之一
| err_code | string | 错误代码
| err_code_des | string | 错误代码描述

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/api/pap_jt_v2.php?chapter=19_99&index=5)
