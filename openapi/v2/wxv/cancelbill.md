---
title: 撤销租借订单
description: 订单创建后，调用完结租借订单接口前。调用完结租借订单接口后不可调用该接口。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| security {data-required} | `true` | 声明加载商户API证书
| xml {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`XML`数据结构
| version {data-required data-indent=1} | string | 接口版本号<br/>`1.0` 枚举值
| appid {data-required data-indent=1} | string | 公众账号ID
| mch_id {data-required data-indent=1} | string | 商户号
| sign_type {data-required data-indent=1} | string | 签名类型<br/>`HMAC-SHA256` 枚举值
| out_order_no {data-required data-indent=1} | string | 商户服务订单号
| reason {data-required data-indent=1} | string | 撤销原因
| service_id {data-required data-indent=1} | string | 服务ID

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v2->wxv->cancelbill->postAsync([
  'security' => true,
  'xml' => [
    'version'      => '1.0',
    'appid'        => 'wxd678efh567hg6787',
    'mch_id'       => '1230000109',
    'sign_type'    => 'HMAC-SHA256',
    'out_order_no' => '1234323JKHDFE1243252',
    'reason'       => '用户投诉',
    'service_id'   => '',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [异步声明式]
$instance->chain('v2/wxv/cancelbill')->postAsync([
  'security' => true,
  'xml' => [
    'version'      => '1.0',
    'appid'        => 'wxd678efh567hg6787',
    'mch_id'       => '1230000109',
    'sign_type'    => 'HMAC-SHA256',
    'out_order_no' => '1234323JKHDFE1243252',
    'reason'       => '用户投诉',
    'service_id'   => '',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [异步属性式]
$instance['v2/wxv/cancelbill']->postAsync([
  'security' => true,
  'xml' => [
    'version'      => '1.0',
    'appid'        => 'wxd678efh567hg6787',
    'mch_id'       => '1230000109',
    'sign_type'    => 'HMAC-SHA256',
    'out_order_no' => '1234323JKHDFE1243252',
    'reason'       => '用户投诉',
    'service_id'   => '',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v2->wxv->cancelbill->post([
  'security' => true,
  'xml' => [
    'version'      => '1.0',
    'appid'        => 'wxd678efh567hg6787',
    'mch_id'       => '1230000109',
    'sign_type'    => 'HMAC-SHA256',
    'out_order_no' => '1234323JKHDFE1243252',
    'reason'       => '用户投诉',
    'service_id'   => '',
  ],
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

```php [同步声明式]
$response = $instance->chain('v2/wxv/cancelbill')->post([
  'security' => true,
  'xml' => [
    'version'      => '1.0',
    'appid'        => 'wxd678efh567hg6787',
    'mch_id'       => '1230000109',
    'sign_type'    => 'HMAC-SHA256',
    'out_order_no' => '1234323JKHDFE1243252',
    'reason'       => '用户投诉',
    'service_id'   => '',
  ],
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

```php [同步属性式]
$response = $instance['v2/wxv/cancelbill']->post([
  'security' => true,
  'xml' => [
    'version'      => '1.0',
    'appid'        => 'wxd678efh567hg6787',
    'mch_id'       => '1230000109',
    'sign_type'    => 'HMAC-SHA256',
    'out_order_no' => '1234323JKHDFE1243252',
    'reason'       => '用户投诉',
    'service_id'   => '',
  ],
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| return_code {data-required} | string | 返回状态码<br/>`SUCCESS` \| `FAIL` 枚举值之一
| return_msg | string | 返回结果
| order_id {data-required} | string | 微信支付服务订单号

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/payscore.php?chapter=18_3&index=4)
