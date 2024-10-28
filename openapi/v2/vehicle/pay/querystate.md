---
title: 用户状态查询
description: 在停车场、高速、加油等场景下，商户需获取用户车主服务状态/需要关联车主服务。本接口，会查询用户是否开通、授权、有欠费或黑名单用户情况，并将对应的用户状态进行返回。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| xml | object | 声明请求的`XML`数据结构
| appid {data-indent=1} | string | 公众账号id
| mch_id {data-indent=1} | string | 商户号
| sign_type {data-indent=1} | string | 签名类型
| trade_scene {data-indent=1} | string | 交易场景
| jump_scene {data-indent=1} | string | 跳转场景
| openid {data-indent=1} | string | 用户标识
| version {data-indent=1} | string | 版本号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v2->vehicle->pay->querystate->postAsync([
  'xml' => [
    'appid' => 'wxcbda96de0b165486',
    'mch_id' => '10000098',
    'sign_type' => 'HMAC-SHA256',
    'trade_scene' => 'PARKING',
    'jump_scene' => 'H5',
    'openid' => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
    'version' => '3.0',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [异步声明式]
$instance->chain('v2/vehicle/pay/querystate')->postAsync([
  'xml' => [
    'appid' => 'wxcbda96de0b165486',
    'mch_id' => '10000098',
    'sign_type' => 'HMAC-SHA256',
    'trade_scene' => 'PARKING',
    'jump_scene' => 'H5',
    'openid' => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
    'version' => '3.0',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [异步属性式]
$instance['v2/vehicle/pay/querystate']->postAsync([
  'xml' => [
    'appid' => 'wxcbda96de0b165486',
    'mch_id' => '10000098',
    'sign_type' => 'HMAC-SHA256',
    'trade_scene' => 'PARKING',
    'jump_scene' => 'H5',
    'openid' => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
    'version' => '3.0',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v2->vehicle->pay->querystate->post([
  'xml' => [
    'appid' => 'wxcbda96de0b165486',
    'mch_id' => '10000098',
    'sign_type' => 'HMAC-SHA256',
    'trade_scene' => 'PARKING',
    'jump_scene' => 'H5',
    'openid' => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
    'version' => '3.0',
  ],
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

```php [同步声明式]
$response = $instance->chain('v2/vehicle/pay/querystate')->post([
  'xml' => [
    'appid' => 'wxcbda96de0b165486',
    'mch_id' => '10000098',
    'sign_type' => 'HMAC-SHA256',
    'trade_scene' => 'PARKING',
    'jump_scene' => 'H5',
    'openid' => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
    'version' => '3.0',
  ],
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

```php [同步属性式]
$response = $instance['v2/vehicle/pay/querystate']->post([
  'xml' => [
    'appid' => 'wxcbda96de0b165486',
    'mch_id' => '10000098',
    'sign_type' => 'HMAC-SHA256',
    'trade_scene' => 'PARKING',
    'jump_scene' => 'H5',
    'openid' => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
    'version' => '3.0',
  ],
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| return_code | string | 返回状态码
| return_msg | string | 返回信息
| appid | string | 请求appid
| mch_id | string | 商户号
| nonce_str | string | 随机字符串
| sign | string | 签名
| result_code | string | 业务结果
| err_code | string | 错误代码
| err_code_des | string | 错误代码描述
| user_state | string | 用户状态
| openid | string | 用户标识
| deduct_mode | string | 发起扣费方式
| path | string | 跳转路径
| plate_number_info | string | 车牌信息
| plate_number | string | 车牌号
| channel_type | string | 车牌通道标识
| common_use_flag | string | 常用车牌标志

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/api/vehicle_v2.php?chapter=20_93&index=9)
