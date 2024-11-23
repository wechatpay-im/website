---
title: 查询申请状态
description: 使用申请入驻接口提交小微商户资料后，一般5分钟左右可以通过该查询接口查询具体的申请结果。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

::: danger :no_entry_sign: {.im-deprecated}

本接口服务已于 `2023.05.23` (北京时间)下线，文档仅做留存参考。

:::

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| xml {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`XML`数据结构
| version {data-required data-indent=1} | string | 接口版本号
| mch_id {data-required data-indent=1} | string | 商户号
| sign_type {data-required data-indent=1} | string | 签名类型
| applyment_id {data-indent=1} | string | 商户申请单号
| business_code {data-indent=1} | string | 业务申请编号
| security {data-required} | `true` | 声明加载商户API证书

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v2->applyment->micro->getstate->postAsync([
  'xml' => [
    'version' => '1.0',
    'mch_id' => '1230000109',
    'sign_type' => 'HMAC-SHA256',
    'applyment_id' => '1230000109',
    'business_code' => '123456',
  ],
  'security' => true,
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [异步声明式]
$instance->chain('v2/applyment/micro/getstate')->postAsync([
  'xml' => [
    'version' => '1.0',
    'mch_id' => '1230000109',
    'sign_type' => 'HMAC-SHA256',
    'applyment_id' => '1230000109',
    'business_code' => '123456',
  ],
  'security' => true,
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [异步属性式]
$instance['v2/applyment/micro/getstate']->postAsync([
  'xml' => [
    'version' => '1.0',
    'mch_id' => '1230000109',
    'sign_type' => 'HMAC-SHA256',
    'applyment_id' => '1230000109',
    'business_code' => '123456',
  ],
  'security' => true,
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v2->applyment->micro->getstate->post([
  'xml' => [
    'version' => '1.0',
    'mch_id' => '1230000109',
    'sign_type' => 'HMAC-SHA256',
    'applyment_id' => '1230000109',
    'business_code' => '123456',
  ],
  'security' => true,
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

```php [同步声明式]
$response = $instance->chain('v2/applyment/micro/getstate')->post([
  'xml' => [
    'version' => '1.0',
    'mch_id' => '1230000109',
    'sign_type' => 'HMAC-SHA256',
    'applyment_id' => '1230000109',
    'business_code' => '123456',
  ],
  'security' => true,
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

```php [同步属性式]
$response = $instance['v2/applyment/micro/getstate']->post([
  'xml' => [
    'version' => '1.0',
    'mch_id' => '1230000109',
    'sign_type' => 'HMAC-SHA256',
    'applyment_id' => '1230000109',
    'business_code' => '123456',
  ],
  'security' => true,
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| return_code {data-required}| string | 返回状态码
| return_msg | string | 返回信息
| nonce_str {data-required}| string | 随机字符串
| sign {data-required}| string | 签名
| result_code {data-required}| string | 业务结果
| err_code | string | 错误代码
| err_code_des | string | 错误代码描述
| applyment_id {data-required}| string | 商户申请单号
| applyment_state {data-required}| string | 申请状态
| applyment_state_desc {data-required}| string | 申请状态描述
| sub_mch_id | string | 小微商户号
| sign_url | string | 签约链接
| audit_detail | string | 审核详情
| param_name {data-required}| string | 参数名称
| reject_reason {data-required}| string | 驳回原因

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/api/xiaowei.php?chapter=19_3)
