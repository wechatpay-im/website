---
title: 授权码查询openid
description: 通过授权码查询公众号Openid，调用查询后，该授权码只能由此商户号发起扣款，直至授权码更新。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| xml {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`XML`数据结构
| appid {data-required data-indent=1} | string | 公众账号ID
| mch_id {data-required data-indent=1} | string | 商户号
| sub_appid {data-indent=1} | string | 子商户公众账号ID
| sub_mch_id {data-indent=1} | string | 子商户号
| auth_code {data-required data-indent=1} | string | 授权码

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v2->tools->authcodetoopenid->postAsync([
  'xml' => [
    'appid' => '',
    'mch_id' => '',
    'sub_appid' => '',
    'sub_mch_id' => '',
    'auth_code' => '',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [异步声明式]
$instance->chain('v2/tools/authcodetoopenid')->postAsync([
  'xml' => [
    'appid' => '',
    'mch_id' => '',
    'sub_appid' => '',
    'sub_mch_id' => '',
    'auth_code' => '',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [异步属性式]
$instance['v2/tools/authcodetoopenid']->postAsync([
  'xml' => [
    'appid' => '',
    'mch_id' => '',
    'sub_appid' => '',
    'sub_mch_id' => '',
    'auth_code' => '',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v2->tools->authcodetoopenid->post([
  'xml' => [
    'appid' => '',
    'mch_id' => '',
    'sub_appid' => '',
    'sub_mch_id' => '',
    'auth_code' => '',
  ],
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

```php [同步声明式]
$response = $instance->chain('v2/tools/authcodetoopenid')->post([
  'xml' => [
    'appid' => '',
    'mch_id' => '',
    'sub_appid' => '',
    'sub_mch_id' => '',
    'auth_code' => '',
  ],
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

```php [同步属性式]
$response = $instance['v2/tools/authcodetoopenid']->post([
  'xml' => [
    'appid' => '',
    'mch_id' => '',
    'sub_appid' => '',
    'sub_mch_id' => '',
    'auth_code' => '',
  ],
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| sub_appid | string | 子商户公众账号ID
| sub_mch_id | string | 子商户号
| sub_openid | string | 用户子标识
| return_code {data-required}| string | 返回状态码
| return_msg | string | 返回信息
| appid {data-required}| string | 公众账号ID
| mch_id {data-required}| string | 商户号
| nonce_str {data-required}| string | 随机字符串
| sign {data-required}| string | 签名
| result_code {data-required}| string | 业务结果
| err_code | string | 错误代码
| openid {data-required}| string | 用户标识

{.im-table #response}

参阅 [官方服务商付款码文档](https://pay.weixin.qq.com/wiki/doc/api/micropay_sl.php?chapter=9_12&index=8)
