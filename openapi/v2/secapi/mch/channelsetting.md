---
title: 银行服务商特约子商户指定渠道号
description: 使用对象：银行服务商 使用说明：存量未指定渠道商的特约子商户，银行调用该API可以指定渠道商；通过该API指定渠道商后不能修改。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| security {data-required} | `true` | 声明加载商户API证书
| nonceless {data-required} | `true` | 声明请求的`XML`无随机字符串参数
| xml {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`XML`数据结构
| appid {data-required data-indent=1} | string | 公众账号ID
| mch_id {data-required data-indent=1} | string | 商户号
| sub_mch_id {data-required data-indent=1} | string | 特约商户号
| channel_id {data-required data-indent=1} | string | 渠道商商户号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v2->secapi->mch->channelsetting->postAsync([
  'security' => true,
  'nonceless' => true,
  'xml' => [
    'appid'      => 'wx931386123456789e',
    'mch_id'     => '1451234567',
    'sub_mch_id' => '10000101',
    'channel_id' => '10000102',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [异步声明式]
$instance->chain('v2/secapi/mch/channelsetting')->postAsync([
  'security' => true,
  'nonceless' => true,
  'xml' => [
    'appid'      => 'wx931386123456789e',
    'mch_id'     => '1451234567',
    'sub_mch_id' => '10000101',
    'channel_id' => '10000102',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [异步属性式]
$instance['v2/secapi/mch/channelsetting']->postAsync([
  'security' => true,
  'nonceless' => true,
  'xml' => [
    'appid'      => 'wx931386123456789e',
    'mch_id'     => '1451234567',
    'sub_mch_id' => '10000101',
    'channel_id' => '10000102',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v2->secapi->mch->channelsetting->post([
  'security' => true,
  'nonceless' => true,
  'xml' => [
    'appid'      => 'wx931386123456789e',
    'mch_id'     => '1451234567',
    'sub_mch_id' => '10000101',
    'channel_id' => '10000102',
  ],
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

```php [同步声明式]
$response = $instance->chain('v2/secapi/mch/channelsetting')->post([
  'security' => true,
  'nonceless' => true,
  'xml' => [
    'appid'      => 'wx931386123456789e',
    'mch_id'     => '1451234567',
    'sub_mch_id' => '10000101',
    'channel_id' => '10000102',
  ],
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

```php [同步属性式]
$response = $instance['v2/secapi/mch/channelsetting']->post([
  'security' => true,
  'nonceless' => true,
  'xml' => [
    'appid'      => 'wx931386123456789e',
    'mch_id'     => '1451234567',
    'sub_mch_id' => '10000101',
    'channel_id' => '10000102',
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
| sign {data-required} | string | 签名
| err_code | string | 错误代码
| err_code_des | string | 错误代码描述
| mch_id {data-required} | string | 商户号
| result_msg {data-required} | string | 处理信息
| appid {data-required} | string | 公众账号ID
| sub_mch_id {data-required} | string | 子商户商户号
| channel_id {data-required} | string | 渠道商商户号

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/api/mch_bank.php?chapter=9_26)
