---
title: 银行特约商户信息修改
description: 
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| xml | object | 声明请求的`XML`数据结构
| mch_id {data-indent=1} | string | 商户号
| sub_mch_id {data-indent=1} | string | 商户识别码
| merchant_shortname {data-indent=1} | string | 商户简称
| service_phone {data-indent=1} | string | 客服电话
| nonceless | boolean | 声明请求的`XML`无随机字符串参数<br/>固定值`true`
| security | boolean | 声明加载商户API证书<br/>固定值`true`

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v2->secapi->mch->modifymchinfo->postAsync([
  'xml' => [
    'mch_id' => '1230000109',
    'sub_mch_id' => '11111111',
    'merchant_shortname' => '商户简称',
    'service_phone' => '075586010000',
  ],
  'nonceless' => true,
  'security' => true,
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [异步声明式]
$instance->chain('v2/secapi/mch/modifymchinfo')->postAsync([
  'xml' => [
    'mch_id' => '1230000109',
    'sub_mch_id' => '11111111',
    'merchant_shortname' => '商户简称',
    'service_phone' => '075586010000',
  ],
  'nonceless' => true,
  'security' => true,
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [异步属性式]
$instance['v2/secapi/mch/modifymchinfo']->postAsync([
  'xml' => [
    'mch_id' => '1230000109',
    'sub_mch_id' => '11111111',
    'merchant_shortname' => '商户简称',
    'service_phone' => '075586010000',
  ],
  'nonceless' => true,
  'security' => true,
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v2->secapi->mch->modifymchinfo->post([
  'xml' => [
    'mch_id' => '1230000109',
    'sub_mch_id' => '11111111',
    'merchant_shortname' => '商户简称',
    'service_phone' => '075586010000',
  ],
  'nonceless' => true,
  'security' => true,
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

```php [同步声明式]
$response = $instance->chain('v2/secapi/mch/modifymchinfo')->post([
  'xml' => [
    'mch_id' => '1230000109',
    'sub_mch_id' => '11111111',
    'merchant_shortname' => '商户简称',
    'service_phone' => '075586010000',
  ],
  'nonceless' => true,
  'security' => true,
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

```php [同步属性式]
$response = $instance['v2/secapi/mch/modifymchinfo']->post([
  'xml' => [
    'mch_id' => '1230000109',
    'sub_mch_id' => '11111111',
    'merchant_shortname' => '商户简称',
    'service_phone' => '075586010000',
  ],
  'nonceless' => true,
  'security' => true,
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| return_code | string | 返回状态码
| return_msg | string | 返回信息
| result_code | string | 处理结果
| result_msg | string | 处理信息
| sign | string | 签名
| err_code | string | 错误代码
| err_code_des | string | 错误代码描述
| nonce_str | string | 随机字符串

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/api/mch_bank.php?chapter=9_27&index=2&p=9)
