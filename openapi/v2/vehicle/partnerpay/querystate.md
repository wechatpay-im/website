---
title: 用户状态查询
description: 在停车场、高速、加油等场景下，商户需获取用户车主服务状态/需要关联车主服务。本接口，会查询用户是否开通、授权、有欠费或黑名单用户情况，并将对应的用户状态进行返回。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| xml {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`XML`数据结构
| appid {data-required data-indent=1} | string | 公众账号id
| sub_appid {data-required data-indent=1} | string | 子商户公众账号id
| mch_id {data-required data-indent=1} | string | 商户号
| sub_mch_id {data-required data-indent=1} | string | 子商户号
| sign_type {data-required data-indent=1} | string | 签名类型<br/>`HMAC-SHA256` 枚举值
| trade_scene {data-required data-indent=1} | string | 交易场景<br/>`PARKING` \| `PARKING SPACE` \| `GAS` \| `HIGHWAY` \| `BRIDGE` 枚举值之一
| jump_scene {data-indent=1} | string | 跳转场景<br/>`APP` \| `H5` 枚举值之一
| openid {data-required data-indent=1} | string | 用户标识
| version {data-required data-indent=1} | string | 版本号<br/>`3.0` 枚举值

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v2->vehicle->partnerpay->querystate->postAsync([
  'xml' => [
    'appid'        => 'wxcbda96de0b165486',
    'sub_appid'    => 'wxcbda96de0b165489',
    'mch_id'       => '10000098',
    'sub_mch_id'   => '1900000109',
    'sign_type'    => 'HMAC-SHA256',
    'trade_scene'  => 'PARKING',
    'jump_scene'   => 'H5',
    'openid'       => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
    'version'      => '3.0',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [异步声明式]
$instance->chain('v2/vehicle/partnerpay/querystate')->postAsync([
  'xml' => [
    'appid'        => 'wxcbda96de0b165486',
    'sub_appid'    => 'wxcbda96de0b165489',
    'mch_id'       => '10000098',
    'sub_mch_id'   => '1900000109',
    'sign_type'    => 'HMAC-SHA256',
    'trade_scene'  => 'PARKING',
    'jump_scene'   => 'H5',
    'openid'       => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
    'version'      => '3.0',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [异步属性式]
$instance['v2/vehicle/partnerpay/querystate']->postAsync([
  'xml' => [
    'appid'        => 'wxcbda96de0b165486',
    'sub_appid'    => 'wxcbda96de0b165489',
    'mch_id'       => '10000098',
    'sub_mch_id'   => '1900000109',
    'sign_type'    => 'HMAC-SHA256',
    'trade_scene'  => 'PARKING',
    'jump_scene'   => 'H5',
    'openid'       => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
    'version'      => '3.0',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v2->vehicle->partnerpay->querystate->post([
  'xml' => [
    'appid'        => 'wxcbda96de0b165486',
    'sub_appid'    => 'wxcbda96de0b165489',
    'mch_id'       => '10000098',
    'sub_mch_id'   => '1900000109',
    'sign_type'    => 'HMAC-SHA256',
    'trade_scene'  => 'PARKING',
    'jump_scene'   => 'H5',
    'openid'       => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
    'version'      => '3.0',
  ],
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

```php [同步声明式]
$response = $instance->chain('v2/vehicle/partnerpay/querystate')->post([
  'xml' => [
    'appid'        => 'wxcbda96de0b165486',
    'sub_appid'    => 'wxcbda96de0b165489',
    'mch_id'       => '10000098',
    'sub_mch_id'   => '1900000109',
    'sign_type'    => 'HMAC-SHA256',
    'trade_scene'  => 'PARKING',
    'jump_scene'   => 'H5',
    'openid'       => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
    'version'      => '3.0',
  ],
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

```php [同步属性式]
$response = $instance['v2/vehicle/partnerpay/querystate']->post([
  'xml' => [
    'appid'        => 'wxcbda96de0b165486',
    'sub_appid'    => 'wxcbda96de0b165489',
    'mch_id'       => '10000098',
    'sub_mch_id'   => '1900000109',
    'sign_type'    => 'HMAC-SHA256',
    'trade_scene'  => 'PARKING',
    'jump_scene'   => 'H5',
    'openid'       => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
    'version'      => '3.0',
  ],
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| return_code {data-required} | string | 返回状态码<br/>`SUCCESS` \| `FAIL` 枚举值之一
| return_msg | string | 返回信息
| appid {data-required} | string | 请求appid
| sub_appid | string | 子商户公众账号id
| mch_id {data-required} | string | 商户号
| sub_mch_id {data-required} | string | 子商户号
| nonce_str {data-required} | string | 随机字符串
| sign {data-required} | string | 签名
| result_code {data-required} | string | 业务结果<br/>`SUCCESS` \| `FAIL` 枚举值之一
| err_code | string | 错误代码
| err_code_des | string | 错误代码描述
| user_state {data-required} | string | 用户状态<br/>`NORMAL` \| `PAUSED` \| `OVERDUE` \| `UNAUTHORIZED` 枚举值之一
| openid | string | 用户标识
| deduct_mode | string | 发起扣费方式<br/>`PROACTIVE` \| `AUTOPAY` 枚举值之一
| sub_openid | string | 用户子标识
| path | string | 跳转路径
| plate_number_info | string {data-tooltip=使用json_encode后的字符串 data-encoded=by-json_encode} | 车牌信息
| {colspan=3 .im-table-line}
| plate_number_info {data-indent=1} | object[] {data-tooltip="对应PHP的array"} | 车牌信息列表
| plate_number {data-indent=2} | string | 车牌号
| channel_type {data-indent=2} | string | 车牌通道标识
| common_use_flag {data-indent=2} | string | 常用车牌标志

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/api/vehicle_v2_sl.php?chapter=20_93&index=9&p=202)
