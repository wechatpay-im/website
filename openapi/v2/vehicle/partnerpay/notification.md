---
title: 用户入场通知
description: 在停车场场景下，如用户已加入车主平台，则进行入场通知；如用户已经欠费，会发送用户欠费入场通知。本接口，会查询用户是否有欠费或黑名单用户情况，并将对应的用户状态进行返回。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| xml {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`XML`数据结构
| appid {data-required data-indent=1} | string | 公众账号id
| mch_id {data-required data-indent=1} | string | 商户号
| sub_appid {data-required data-indent=1} | string | 子商户公众账号id
| sub_mch_id {data-required data-indent=1} | string | 子商户号
| sign_type {data-required data-indent=1} | string | 签名类型<br/>`HMAC-SHA256` 枚举值
| version {data-required data-indent=1} | string | 版本号<br/>`3.0` 枚举值
| trade_scene {data-required data-indent=1} | string | 交易场景<br/>`PARKING` \| `PARKING SPACE` 枚举值之一
| scene_info {data-required data-indent=1} | string {data-tooltip=使用json_encode后的字符串 data-encoded=by-json_encode} | 场景信息`JSON`格式字符串
| {colspan=3 .im-table-line}
| scene_info {data-required data-indent=2} | object | 场景`PARKING`信息
| start_time {data-required data-indent=3} | string | 入场时间
| notify_url {data-indent=3} | string | 回调通知URL
| plate_number {data-required data-indent=3} | string | 车牌号
| car_type {data-indent=3} | string | 车辆类型
| parking_name {data-required data-indent=3} | string | 停车场名称
| free_time {data-required data-indent=3} | string | 免费时长
| {colspan=3 .im-table-line}
| scene_info {data-required data-indent=2} | object | 场景`PARKING SPACE`信息
| start_time {data-required data-indent=3} | string | 入场时间
| car_type {data-indent=3} | string | 车辆类型
| parking_name {data-indent=3} | string | 停车场名称
| free_time {data-required data-indent=3} | string | 免费时长
| openid {data-indent=3} | string | 用户标识
| sub_openid {data-indent=3} | string | 用户子标识
| space_number {data-required data-indent=3} | string | 车位编号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v2->vehicle->partnerpay->notification->postAsync([
  'xml' => [
    'appid'       => 'wxcbda96de0b165486',
    'mch_id'      => '10000098',
    'sub_appid'   => 'wxcbda96de0b165489',
    'sub_mch_id'  => '1900000109',
    'sign_type'   => 'HMAC-SHA256',
    'version'     => '3.0',
    'trade_scene' => 'PARKING',
    'scene_info'  => \json_encode([
      'scene_info' => [
        'start_time'   => '20170826104339',
        'notify_url'   => 'https://weixin.qq.com',
        'plate_number' => '粤B888888',
        'car_type'     => '小型车',
        'parking_name' => '欢乐海岸停车场',
        'free_time'    => '1200',
      ],
    ]),
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [异步声明式]
$instance->chain('v2/vehicle/partnerpay/notification')->postAsync([
  'xml' => [
    'appid'       => 'wxcbda96de0b165486',
    'mch_id'      => '10000098',
    'sub_appid'   => 'wxcbda96de0b165489',
    'sub_mch_id'  => '1900000109',
    'sign_type'   => 'HMAC-SHA256',
    'version'     => '3.0',
    'trade_scene' => 'PARKING',
    'scene_info'  => \json_encode([
      'scene_info' => [
        'start_time'   => '20170826104339',
        'notify_url'   => 'https://weixin.qq.com',
        'plate_number' => '粤B888888',
        'car_type'     => '小型车',
        'parking_name' => '欢乐海岸停车场',
        'free_time'    => '1200',
      ],
    ]),
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [异步属性式]
$instance['v2/vehicle/partnerpay/notification']->postAsync([
  'xml' => [
    'appid'       => 'wxcbda96de0b165486',
    'mch_id'      => '10000098',
    'sub_appid'   => 'wxcbda96de0b165489',
    'sub_mch_id'  => '1900000109',
    'sign_type'   => 'HMAC-SHA256',
    'version'     => '3.0',
    'trade_scene' => 'PARKING',
    'scene_info'  => \json_encode([
      'scene_info' => [
        'start_time'   => '20170826104339',
        'notify_url'   => 'https://weixin.qq.com',
        'plate_number' => '粤B888888',
        'car_type'     => '小型车',
        'parking_name' => '欢乐海岸停车场',
        'free_time'    => '1200',
      ],
    ]),
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v2->vehicle->partnerpay->notification->post([
  'xml' => [
    'appid'       => 'wxcbda96de0b165486',
    'mch_id'      => '10000098',
    'sub_appid'   => 'wxcbda96de0b165489',
    'sub_mch_id'  => '1900000109',
    'sign_type'   => 'HMAC-SHA256',
    'version'     => '3.0',
    'trade_scene' => 'PARKING',
    'scene_info'  => \json_encode([
      'scene_info' => [
        'start_time'   => '20170826104339',
        'notify_url'   => 'https://weixin.qq.com',
        'plate_number' => '粤B888888',
        'car_type'     => '小型车',
        'parking_name' => '欢乐海岸停车场',
        'free_time'    => '1200',
      ],
    ]),
  ],
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

```php [同步声明式]
$response = $instance->chain('v2/vehicle/partnerpay/notification')->post([
  'xml' => [
    'appid'       => 'wxcbda96de0b165486',
    'mch_id'      => '10000098',
    'sub_appid'   => 'wxcbda96de0b165489',
    'sub_mch_id'  => '1900000109',
    'sign_type'   => 'HMAC-SHA256',
    'version'     => '3.0',
    'trade_scene' => 'PARKING',
    'scene_info'  => \json_encode([
      'scene_info' => [
        'start_time'   => '20170826104339',
        'notify_url'   => 'https://weixin.qq.com',
        'plate_number' => '粤B888888',
        'car_type'     => '小型车',
        'parking_name' => '欢乐海岸停车场',
        'free_time'    => '1200',
      ],
    ]),
  ],
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

```php [同步属性式]
$response = $instance['v2/vehicle/partnerpay/notification']->post([
  'xml' => [
    'appid'       => 'wxcbda96de0b165486',
    'mch_id'      => '10000098',
    'sub_appid'   => 'wxcbda96de0b165489',
    'sub_mch_id'  => '1900000109',
    'sign_type'   => 'HMAC-SHA256',
    'version'     => '3.0',
    'trade_scene' => 'PARKING',
    'scene_info'  => \json_encode([
      'scene_info' => [
        'start_time'   => '20170826104339',
        'notify_url'   => 'https://weixin.qq.com',
        'plate_number' => '粤B888888',
        'car_type'     => '小型车',
        'parking_name' => '欢乐海岸停车场',
        'free_time'    => '1200',
      ],
    ]),
  ],
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| return_code {data-required} | string | 返回状态码<br/>`SUCCESS` \| `FAIL` 枚举值之一
| return_msg | string | 返回信息
| appid {data-required} | string | 公众账号id
| mch_id {data-required} | string | 商户号
| sub_appid | string | 子商户公众账号id
| sub_mch_id {data-required} | string | 子商户号
| nonce_str {data-required} | string | 随机字符串
| sign {data-required} | string | 签名
| result_code {data-required} | string | 业务结果<br/>`SUCCESS` \| `FAIL` 枚举值之一
| err_code | string | 错误代码
| err_code_des | string | 错误代码描述
| user_state {data-required} | string | 用户状态<br/>`NORMAL` \| `BLOCK` 枚举值之一
| deduct_mode | string | 发起扣费方式<br/>`PROACTIVE` \| `AUTOPAY` 枚举值之一

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v2/partner/4011988204)
