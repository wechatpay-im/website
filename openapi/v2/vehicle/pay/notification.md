---
title: 用户入场通知
description: 在停车场场景下，商户调用本接口，会注册接收用户场中状态变化通知，并返回用户车主服务是否可用的状态。调用该接口，微信侧不会向用户下发入场通知消息，消息由商户下发。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| xml {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`XML`数据结构
| appid {data-required data-indent=1} | string | 公众账号id
| mch_id {data-required data-indent=1} | string | 商户号
| sign_type {data-required data-indent=1} | string | 签名类型<br/>`HMAC-SHA256` 枚举值
| version {data-required data-indent=1} | string | 版本号
| trade_scene {data-required data-indent=1} | string | 交易场景<br/>`PARKING` \| `PARKING SPACE` 枚举值之一
| scene_info {data-required data-indent=1} | string | 场景信息`JSON`格式字符串
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
| space_number {data-required data-indent=3} | string | 车位编号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v2->vehicle->pay->notification->postAsync([
  'xml' => [
    'appid'       => 'wxcbda96de0b165486',
    'mch_id'      => '10000098',
    'sign_type'   => 'HMAC-SHA256',
    'version'     => '3.0',
    'trade_scene' => 'PARKING',
    'scene_info'  => '{"scene_info":{"start_time":"20170926114339","plate_number":"CB1000sdfasd","free_time":"1200","car_type":"大型车","parking_name":"欢乐海岸停车场"}}',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [异步声明式]
$instance->chain('v2/vehicle/pay/notification')->postAsync([
  'xml' => [
    'appid'       => 'wxcbda96de0b165486',
    'mch_id'      => '10000098',
    'sign_type'   => 'HMAC-SHA256',
    'version'     => '3.0',
    'trade_scene' => 'PARKING',
    'scene_info'  => '{"scene_info":{"start_time":"20170926114339","plate_number":"CB1000sdfasd","free_time":"1200","car_type":"大型车","parking_name":"欢乐海岸停车场"}}',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [异步属性式]
$instance['v2/vehicle/pay/notification']->postAsync([
  'xml' => [
    'appid'       => 'wxcbda96de0b165486',
    'mch_id'      => '10000098',
    'sign_type'   => 'HMAC-SHA256',
    'version'     => '3.0',
    'trade_scene' => 'PARKING',
    'scene_info'  => '{"scene_info":{"start_time":"20170926114339","plate_number":"CB1000sdfasd","free_time":"1200","car_type":"大型车","parking_name":"欢乐海岸停车场"}}',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v2->vehicle->pay->notification->post([
  'xml' => [
    'appid'       => 'wxcbda96de0b165486',
    'mch_id'      => '10000098',
    'sign_type'   => 'HMAC-SHA256',
    'version'     => '3.0',
    'trade_scene' => 'PARKING',
    'scene_info'  => '{"scene_info":{"start_time":"20170926114339","plate_number":"CB1000sdfasd","free_time":"1200","car_type":"大型车","parking_name":"欢乐海岸停车场"}}',
  ],
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

```php [同步声明式]
$response = $instance->chain('v2/vehicle/pay/notification')->post([
  'xml' => [
    'appid'       => 'wxcbda96de0b165486',
    'mch_id'      => '10000098',
    'sign_type'   => 'HMAC-SHA256',
    'version'     => '3.0',
    'trade_scene' => 'PARKING',
    'scene_info'  => '{"scene_info":{"start_time":"20170926114339","plate_number":"CB1000sdfasd","free_time":"1200","car_type":"大型车","parking_name":"欢乐海岸停车场"}}',
  ],
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

```php [同步属性式]
$response = $instance['v2/vehicle/pay/notification']->post([
  'xml' => [
    'appid'       => 'wxcbda96de0b165486',
    'mch_id'      => '10000098',
    'sign_type'   => 'HMAC-SHA256',
    'version'     => '3.0',
    'trade_scene' => 'PARKING',
    'scene_info'  => '{"scene_info":{"start_time":"20170926114339","plate_number":"CB1000sdfasd","free_time":"1200","car_type":"大型车","parking_name":"欢乐海岸停车场"}}',
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
| nonce_str {data-required} | string | 随机字符串
| sign {data-required} | string | 签名
| result_code {data-required} | string | 业务结果<br/>`SUCCESS` \| `FAIL` 枚举值之一
| err_code | string | 错误代码
| err_code_des | string | 错误代码描述
| user_state {data-required} | string | 用户状态<br/>`NORMAL` \| `BLOCK` 枚举值之一
| deduct_mode | string | 发起扣费方式<br/>`PROACTIVE` \| `AUTOPAY` 枚举值之一

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/api/vehicle_v2.php?chapter=20_992&index=1)
