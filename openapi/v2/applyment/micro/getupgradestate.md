---
title: 查询升级申请单状态
description: 使用“提交升级申请单”接口后，可不定期调用此接口查询申请单状态（建议提交申请后1分钟查询），直至申请单为“完成”状态。1)若申请状态为待账户验证，请按接口中的指引完成账户验证；2)若申请状态为审核中，微信支付会在2个工作日内完成资料审核；3)若申请状态为待签约，接口会返回签约二维码。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

::: danger :no_entry_sign: {.im-deprecated}

本接口服务已于 `2023.05.23` (北京时间)下线，文档仅做留存参考。

:::

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| security {data-required} | `true` | 声明加载商户API证书
| xml {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`XML`数据结构
| version {data-required data-indent=1} | string | 接口版本号
| mch_id {data-required data-indent=1} | string | 商户号
| sign_type {data-required data-indent=1} | string | 签名类型<br/>`HMAC-SHA256` 枚举值
| sub_mch_id {data-required data-indent=1} | string | 小微商户号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v2->applyment->micro->getupgradestate->postAsync([
  'security' => true,
  'xml' => [
    'version'    => '1.0',
    'mch_id'     => '1230000109',
    'sign_type'  => 'HMAC-SHA256',
    'sub_mch_id' => '1230000109',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [异步声明式]
$instance->chain('v2/applyment/micro/getupgradestate')->postAsync([
  'security' => true,
  'xml' => [
    'version'    => '1.0',
    'mch_id'     => '1230000109',
    'sign_type'  => 'HMAC-SHA256',
    'sub_mch_id' => '1230000109',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [异步属性式]
$instance['v2/applyment/micro/getupgradestate']->postAsync([
  'security' => true,
  'xml' => [
    'version'    => '1.0',
    'mch_id'     => '1230000109',
    'sign_type'  => 'HMAC-SHA256',
    'sub_mch_id' => '1230000109',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v2->applyment->micro->getupgradestate->post([
  'security' => true,
  'xml' => [
    'version'    => '1.0',
    'mch_id'     => '1230000109',
    'sign_type'  => 'HMAC-SHA256',
    'sub_mch_id' => '1230000109',
  ],
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

```php [同步声明式]
$response = $instance->chain('v2/applyment/micro/getupgradestate')->post([
  'security' => true,
  'xml' => [
    'version'    => '1.0',
    'mch_id'     => '1230000109',
    'sign_type'  => 'HMAC-SHA256',
    'sub_mch_id' => '1230000109',
  ],
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

```php [同步属性式]
$response = $instance['v2/applyment/micro/getupgradestate']->post([
  'security' => true,
  'xml' => [
    'version'    => '1.0',
    'mch_id'     => '1230000109',
    'sign_type'  => 'HMAC-SHA256',
    'sub_mch_id' => '1230000109',
  ],
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| return_code {data-required} | string | 返回状态码<br/>`SUCCESS` \| `FAIL` 枚举值之一
| return_msg | string | 返回信息
| nonce_str {data-required} | string | 随机字符串
| sign {data-required} | string | 签名
| result_code {data-required} | string | 业务结果<br/>`SUCCESS` \| `FAIL` 枚举值之一
| err_code | string | 错误代码
| err_code_des | string | 错误代码描述
| sub_mch_id {data-required} | string | 小微商户号
| applyment_state {data-required} | string | 申请状态
| applyment_state_desc {data-required} | string | 申请状态描述
| sign_qrcode | string | 签约二维码
| sign_url | string | 签约链接
| audit_detail | string | 审核详情
| account_name {data-required} | string | 付款户名
| pay_amount {data-required} | string | 汇款金额
| destination_account_number {data-required} | string | 收款卡号
| destination_account_name {data-required} | string | 收款户名
| destination_account_bank {data-required} | string | 开户银行
| city {data-required} | string | 省市信息
| remark {data-required} | string | 备注信息
| deadline_time {data-required} | string | 汇款截止时间
| param_name {data-required} | string | 参数名称
| reject_reason {data-required} | string | 驳回原因

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/api/xiaowei.php?chapter=28_3&index=3)
