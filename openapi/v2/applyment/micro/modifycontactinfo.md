---
title: 修改联系信息
description: 
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

::: danger :no_entry_sign: {.im-deprecated}

本接口服务已于 `2020.04.13` (北京时间)下线，文档仅做留存参考。

:::

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| security {data-required} | `true` | 声明加载商户API证书
| xml {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`XML`数据结构
| version {data-required data-indent=1} | string | 接口版本号<br/>`1.0` 枚举值
| mch_id {data-required data-indent=1} | string | 商户号
| sign_type {data-required data-indent=1} | string | 签名类型<br/>`HMAC-SHA256` 枚举值
| sub_mch_id {data-indent=1} | string | 小微商户号
| mobile_phone {data-indent=1} | string | 手机号
| email {data-indent=1} | string | 邮箱
| merchant_name {data-indent=1} | string | 商户简称
| cert_sn {data-required data-indent=1} | string | 加密的平台证书序列号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v2->applyment->micro->modifycontactinfo->postAsync([
  'security' => true,
  'xml' => [
    'version'       => '1.0',
    'mch_id'        => '1230000109',
    'sign_type'     => 'HMAC-SHA256',
    'sub_mch_id'    => '1230000109',
    'mobile_phone'  => '13734543456',
    'email'         => 'zhangsan@227.com',
    'merchant_name' => '张三的小店',
    'cert_sn'       => '50062CE505775F070CAB06E697F1BBD1AD4F4D87',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [异步声明式]
$instance->chain('v2/applyment/micro/modifycontactinfo')->postAsync([
  'security' => true,
  'xml' => [
    'version'       => '1.0',
    'mch_id'        => '1230000109',
    'sign_type'     => 'HMAC-SHA256',
    'sub_mch_id'    => '1230000109',
    'mobile_phone'  => '13734543456',
    'email'         => 'zhangsan@227.com',
    'merchant_name' => '张三的小店',
    'cert_sn'       => '50062CE505775F070CAB06E697F1BBD1AD4F4D87',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [异步属性式]
$instance['v2/applyment/micro/modifycontactinfo']->postAsync([
  'security' => true,
  'xml' => [
    'version'       => '1.0',
    'mch_id'        => '1230000109',
    'sign_type'     => 'HMAC-SHA256',
    'sub_mch_id'    => '1230000109',
    'mobile_phone'  => '13734543456',
    'email'         => 'zhangsan@227.com',
    'merchant_name' => '张三的小店',
    'cert_sn'       => '50062CE505775F070CAB06E697F1BBD1AD4F4D87',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v2->applyment->micro->modifycontactinfo->post([
  'security' => true,
  'xml' => [
    'version'       => '1.0',
    'mch_id'        => '1230000109',
    'sign_type'     => 'HMAC-SHA256',
    'sub_mch_id'    => '1230000109',
    'mobile_phone'  => '13734543456',
    'email'         => 'zhangsan@227.com',
    'merchant_name' => '张三的小店',
    'cert_sn'       => '50062CE505775F070CAB06E697F1BBD1AD4F4D87',
  ],
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

```php [同步声明式]
$response = $instance->chain('v2/applyment/micro/modifycontactinfo')->post([
  'security' => true,
  'xml' => [
    'version'       => '1.0',
    'mch_id'        => '1230000109',
    'sign_type'     => 'HMAC-SHA256',
    'sub_mch_id'    => '1230000109',
    'mobile_phone'  => '13734543456',
    'email'         => 'zhangsan@227.com',
    'merchant_name' => '张三的小店',
    'cert_sn'       => '50062CE505775F070CAB06E697F1BBD1AD4F4D87',
  ],
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

```php [同步属性式]
$response = $instance['v2/applyment/micro/modifycontactinfo']->post([
  'security' => true,
  'xml' => [
    'version'       => '1.0',
    'mch_id'        => '1230000109',
    'sign_type'     => 'HMAC-SHA256',
    'sub_mch_id'    => '1230000109',
    'mobile_phone'  => '13734543456',
    'email'         => 'zhangsan@227.com',
    'merchant_name' => '张三的小店',
    'cert_sn'       => '50062CE505775F070CAB06E697F1BBD1AD4F4D87',
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
| mch_id | string | 商户号
| sub_mch_id | string | 小微商户号

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/api/xiaowei.php?chapter=21_4)
