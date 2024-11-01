---
title: 查询签约关系
description: 
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| xml | object | 声明请求的`XML`数据结构
| appid {data-indent=1} | string | 请求appid
| mch_id {data-indent=1} | integer | 商户号
| contract_id {data-indent=1} | string | 委托代扣协议id
| plan_id {data-indent=1} | integer | 模板id
| contract_code {data-indent=1} | string | 签约协议号
| version {data-indent=1} | string | 版本号
| nonceless | boolean | 声明请求的`XML`无随机字符串参数<br/>固定值`true`

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v2->papay->querycontract->postAsync([
  'xml' => [
    'appid' => 'wxcbda96de0b165486',
    'mch_id' => '10000098',
    'contract_id' => '100005698',
    'plan_id' => '123',
    'contract_code' => '1023658866',
    'version' => '1.0',
  ],
  'nonceless' => true,
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [异步声明式]
$instance->chain('v2/papay/querycontract')->postAsync([
  'xml' => [
    'appid' => 'wxcbda96de0b165486',
    'mch_id' => '10000098',
    'contract_id' => '100005698',
    'plan_id' => '123',
    'contract_code' => '1023658866',
    'version' => '1.0',
  ],
  'nonceless' => true,
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [异步属性式]
$instance['v2/papay/querycontract']->postAsync([
  'xml' => [
    'appid' => 'wxcbda96de0b165486',
    'mch_id' => '10000098',
    'contract_id' => '100005698',
    'plan_id' => '123',
    'contract_code' => '1023658866',
    'version' => '1.0',
  ],
  'nonceless' => true,
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v2->papay->querycontract->post([
  'xml' => [
    'appid' => 'wxcbda96de0b165486',
    'mch_id' => '10000098',
    'contract_id' => '100005698',
    'plan_id' => '123',
    'contract_code' => '1023658866',
    'version' => '1.0',
  ],
  'nonceless' => true,
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

```php [同步声明式]
$response = $instance->chain('v2/papay/querycontract')->post([
  'xml' => [
    'appid' => 'wxcbda96de0b165486',
    'mch_id' => '10000098',
    'contract_id' => '100005698',
    'plan_id' => '123',
    'contract_code' => '1023658866',
    'version' => '1.0',
  ],
  'nonceless' => true,
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

```php [同步属性式]
$response = $instance['v2/papay/querycontract']->post([
  'xml' => [
    'appid' => 'wxcbda96de0b165486',
    'mch_id' => '10000098',
    'contract_id' => '100005698',
    'plan_id' => '123',
    'contract_code' => '1023658866',
    'version' => '1.0',
  ],
  'nonceless' => true,
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| return_code | string | 返回状态码
| return_msg | string | 返回信息
| result_code | string | 业务结果
| mch_id | integer | 商户号
| appid | string | 公众账号id
| contract_id | string | 委托代扣协议id
| plan_id | integer | 模板id
| contract_code | string | 签约协议号
| contract_display_account | string | 用户账户展示名称
| contract_state | integer | 协议状态
| contract_signed_time | string | 协议签署时间
| contract_expired_time | string | 协议到期时间
| contract_terminated_time | string | 协议解约时间
| contract_termination_mode | integer | 协议解约方式
| sign | string | 签名
| contract_termination_remark | string | 解约备注
| openid | string | 用户标识
| err_code | string | 错误代码
| err_code_des | string | 错误代码描述

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/api/pap.php?chapter=18_2&index=7)
