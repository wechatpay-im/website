---
title: 申请解约
description: 
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| xml | object | 声明请求的`XML`数据结构
| appid {data-indent=1} | string | 请求appid
| mch_id {data-indent=1} | string | 商户号
| plan_id {data-indent=1} | string | 模板id
| contract_code {data-indent=1} | string | 签约协议号
| contract_id {data-indent=1} | string | 委托代扣协议id
| contract_termination_remark {data-indent=1} | string | 解约备注
| version {data-indent=1} | string | 版本号
| nonceless | boolean | 声明请求的`XML`无随机字符串参数<br/>固定值`true`

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v2->papay->deletecontract->postAsync([
  'xml' => [
    'appid' => 'wxcbda96de0b165486',
    'mch_id' => '10000098',
    'plan_id' => '12251',
    'contract_code' => '1234',
    'contract_id' => 'Wx15463511252015071056489715',
    'contract_termination_remark' => '解约原因',
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
$instance->chain('v2/papay/deletecontract')->postAsync([
  'xml' => [
    'appid' => 'wxcbda96de0b165486',
    'mch_id' => '10000098',
    'plan_id' => '12251',
    'contract_code' => '1234',
    'contract_id' => 'Wx15463511252015071056489715',
    'contract_termination_remark' => '解约原因',
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
$instance['v2/papay/deletecontract']->postAsync([
  'xml' => [
    'appid' => 'wxcbda96de0b165486',
    'mch_id' => '10000098',
    'plan_id' => '12251',
    'contract_code' => '1234',
    'contract_id' => 'Wx15463511252015071056489715',
    'contract_termination_remark' => '解约原因',
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
$response = $instance->v2->papay->deletecontract->post([
  'xml' => [
    'appid' => 'wxcbda96de0b165486',
    'mch_id' => '10000098',
    'plan_id' => '12251',
    'contract_code' => '1234',
    'contract_id' => 'Wx15463511252015071056489715',
    'contract_termination_remark' => '解约原因',
    'version' => '1.0',
  ],
  'nonceless' => true,
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

```php [同步声明式]
$response = $instance->chain('v2/papay/deletecontract')->post([
  'xml' => [
    'appid' => 'wxcbda96de0b165486',
    'mch_id' => '10000098',
    'plan_id' => '12251',
    'contract_code' => '1234',
    'contract_id' => 'Wx15463511252015071056489715',
    'contract_termination_remark' => '解约原因',
    'version' => '1.0',
  ],
  'nonceless' => true,
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

```php [同步属性式]
$response = $instance['v2/papay/deletecontract']->post([
  'xml' => [
    'appid' => 'wxcbda96de0b165486',
    'mch_id' => '10000098',
    'plan_id' => '12251',
    'contract_code' => '1234',
    'contract_id' => 'Wx15463511252015071056489715',
    'contract_termination_remark' => '解约原因',
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
| appid | string | 公众账号id
| mch_id | string | 商户号
| contract_id | string | 委托代扣协议id
| plan_id | string | 模板id
| contract_code | string | 签约协议号
| result_code | string | 业务结果
| err_code | string | 错误代码
| err_code_des | string | 错误代码描述
| sign | string | 签名

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/api/pap.php?chapter=18_4&index=9)
