---
title: 查询签约关系
description: 查询签约关系接口提供单笔签约关系查询。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| nonceless {data-required} | `true` | 声明请求的`XML`无随机字符串参数
| xml {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`XML`数据结构
| appid {data-required data-indent=1} | string | 应用ID
| mch_id {data-required data-indent=1} | string | 商户号
| sub_appid {data-indent=1} | string | 子商户应用ID
| sub_mch_id {data-indent=1} | string | 子商户号
| contract_id {data-indent=1} | string | 委托代扣协议id
| plan_id {data-indent=1} | string | 模板id
| contract_code {data-indent=1} | string | 签约协议号
| version {data-required data-indent=1} | string | 版本号<br/>`1.0` 枚举值

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v2->papay->partner->querycontract->postAsync([
  'nonceless' => true,
  'xml' => [
    'appid'         => 'wxcbda96de0b165486',
    'mch_id'        => '1200009811',
    'sub_appid'     => 'wxcbda96de0b165489',
    'sub_mch_id'    => '1900000109',
    'contract_id'   => '100005698',
    'plan_id'       => '123',
    'contract_code' => '1023658866',
    'version'       => '1.0',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [异步声明式]
$instance->chain('v2/papay/partner/querycontract')->postAsync([
  'nonceless' => true,
  'xml' => [
    'appid'         => 'wxcbda96de0b165486',
    'mch_id'        => '1200009811',
    'sub_appid'     => 'wxcbda96de0b165489',
    'sub_mch_id'    => '1900000109',
    'contract_id'   => '100005698',
    'plan_id'       => '123',
    'contract_code' => '1023658866',
    'version'       => '1.0',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [异步属性式]
$instance['v2/papay/partner/querycontract']->postAsync([
  'nonceless' => true,
  'xml' => [
    'appid'         => 'wxcbda96de0b165486',
    'mch_id'        => '1200009811',
    'sub_appid'     => 'wxcbda96de0b165489',
    'sub_mch_id'    => '1900000109',
    'contract_id'   => '100005698',
    'plan_id'       => '123',
    'contract_code' => '1023658866',
    'version'       => '1.0',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v2->papay->partner->querycontract->post([
  'nonceless' => true,
  'xml' => [
    'appid'         => 'wxcbda96de0b165486',
    'mch_id'        => '1200009811',
    'sub_appid'     => 'wxcbda96de0b165489',
    'sub_mch_id'    => '1900000109',
    'contract_id'   => '100005698',
    'plan_id'       => '123',
    'contract_code' => '1023658866',
    'version'       => '1.0',
  ],
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

```php [同步声明式]
$response = $instance->chain('v2/papay/partner/querycontract')->post([
  'nonceless' => true,
  'xml' => [
    'appid'         => 'wxcbda96de0b165486',
    'mch_id'        => '1200009811',
    'sub_appid'     => 'wxcbda96de0b165489',
    'sub_mch_id'    => '1900000109',
    'contract_id'   => '100005698',
    'plan_id'       => '123',
    'contract_code' => '1023658866',
    'version'       => '1.0',
  ],
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

```php [同步属性式]
$response = $instance['v2/papay/partner/querycontract']->post([
  'nonceless' => true,
  'xml' => [
    'appid'         => 'wxcbda96de0b165486',
    'mch_id'        => '1200009811',
    'sub_appid'     => 'wxcbda96de0b165489',
    'sub_mch_id'    => '1900000109',
    'contract_id'   => '100005698',
    'plan_id'       => '123',
    'contract_code' => '1023658866',
    'version'       => '1.0',
  ],
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| return_code {data-required} | string | 返回状态码<br/>`SUCCESS` \| `FAIL` 枚举值之一
| return_msg | string | 返回信息
| result_code {data-required} | string | 业务结果<br/>`SUCCESS` \| `FAIL` 枚举值之一
| mch_id {data-required} | integer | 商户号
| appid {data-required} | string | 公众账号id
| contract_id {data-required} | string | 委托代扣协议id
| plan_id {data-required} | integer | 模板id
| contract_code {data-required} | string | 签约协议号
| contract_display_account {data-required} | string | 用户账户展示名称
| contract_state {data-required} | integer | 协议状态
| contract_signed_time {data-required} | string | 协议签署时间
| contract_expired_time {data-required} | string | 协议到期时间
| contract_terminated_time | string | 协议解约时间
| contract_termination_mode | integer | 协议解约方式
| sign {data-required} | string | 签名
| contract_termination_remark | string | 解约备注
| openid {data-required} | string | 用户标识
| err_code {data-required} | string | 错误代码
| err_code_des {data-required} | string | 错误代码描述
| sub_appid | string | 子商户公众账号ID
| sub_mch_id | string | 子商户号

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v2/partner/4011988379)
