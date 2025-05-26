---
title: 申请解约
description: 商户与用户的签约关系有误或者商户主动要求与用户解除之前的签约协议时可调用此接口完成解约。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| nonceless {data-required} | `true` | 声明请求的`XML`无随机字符串参数
| xml {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`XML`数据结构
| appid {data-required data-indent=1} | string | 请求appid
| mch_id {data-required data-indent=1} | string | 商户号
| plan_id {data-indent=1} | string | 模板id
| contract_code {data-indent=1} | string | 签约协议号
| contract_id {data-indent=1} | string | 委托代扣协议id
| contract_termination_remark {data-required data-indent=1} | string | 解约备注
| version {data-required data-indent=1} | string | 版本号<br/>`1.0` 枚举值
| sub_appid {data-indent=1} | string | 子商户公众账号ID
| sub_mch_id {data-indent=1} | string | 子商户号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v2->papay->deletecontract->postAsync([
  'nonceless' => true,
  'xml' => [
    'appid'                       => 'wxcbda96de0b165486',
    'mch_id'                      => '10000098',
    'plan_id'                     => '12251',
    'contract_code'               => '1234',
    'contract_id'                 => 'Wx15463511252015071056489715',
    'contract_termination_remark' => '解约原因',
    'version'                     => '1.0',
    'sub_appid'                   => '',
    'sub_mch_id'                  => '',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [异步声明式]
$instance->chain('v2/papay/deletecontract')->postAsync([
  'nonceless' => true,
  'xml' => [
    'appid'                       => 'wxcbda96de0b165486',
    'mch_id'                      => '10000098',
    'plan_id'                     => '12251',
    'contract_code'               => '1234',
    'contract_id'                 => 'Wx15463511252015071056489715',
    'contract_termination_remark' => '解约原因',
    'version'                     => '1.0',
    'sub_appid'                   => '',
    'sub_mch_id'                  => '',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [异步属性式]
$instance['v2/papay/deletecontract']->postAsync([
  'nonceless' => true,
  'xml' => [
    'appid'                       => 'wxcbda96de0b165486',
    'mch_id'                      => '10000098',
    'plan_id'                     => '12251',
    'contract_code'               => '1234',
    'contract_id'                 => 'Wx15463511252015071056489715',
    'contract_termination_remark' => '解约原因',
    'version'                     => '1.0',
    'sub_appid'                   => '',
    'sub_mch_id'                  => '',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v2->papay->deletecontract->post([
  'nonceless' => true,
  'xml' => [
    'appid'                       => 'wxcbda96de0b165486',
    'mch_id'                      => '10000098',
    'plan_id'                     => '12251',
    'contract_code'               => '1234',
    'contract_id'                 => 'Wx15463511252015071056489715',
    'contract_termination_remark' => '解约原因',
    'version'                     => '1.0',
    'sub_appid'                   => '',
    'sub_mch_id'                  => '',
  ],
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

```php [同步声明式]
$response = $instance->chain('v2/papay/deletecontract')->post([
  'nonceless' => true,
  'xml' => [
    'appid'                       => 'wxcbda96de0b165486',
    'mch_id'                      => '10000098',
    'plan_id'                     => '12251',
    'contract_code'               => '1234',
    'contract_id'                 => 'Wx15463511252015071056489715',
    'contract_termination_remark' => '解约原因',
    'version'                     => '1.0',
    'sub_appid'                   => '',
    'sub_mch_id'                  => '',
  ],
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

```php [同步属性式]
$response = $instance['v2/papay/deletecontract']->post([
  'nonceless' => true,
  'xml' => [
    'appid'                       => 'wxcbda96de0b165486',
    'mch_id'                      => '10000098',
    'plan_id'                     => '12251',
    'contract_code'               => '1234',
    'contract_id'                 => 'Wx15463511252015071056489715',
    'contract_termination_remark' => '解约原因',
    'version'                     => '1.0',
    'sub_appid'                   => '',
    'sub_mch_id'                  => '',
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
| contract_id {data-required} | string | 委托代扣协议id
| plan_id {data-required} | string | 模板id
| contract_code {data-required} | string | 签约协议号
| result_code {data-required} | string | 业务结果<br/>`SUCCESS` \| `FAIL` 枚举值之一
| err_code | string | 错误代码
| err_code_des | string | 错误代码描述
| sign {data-required} | string | 签名
| sub_appid | string | 子商户公众账号ID
| sub_mch_id | string | 子商户号

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v2/merchant/4011987432) [官方文档](https://pay.weixin.qq.com/doc/v2/merchant/4011984883) [官方文档](https://pay.weixin.qq.com/doc/v2/partner/4011988374)
