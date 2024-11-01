---
title: 服务商特约商户关注功能配置
description: 注意：API只支持新增配置，配置后隔30天才能重新修改，所以配置前请确认appid是否正确。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| xml | object | 声明请求的`XML`数据结构
| mch_id {data-indent=1} | string | 商户号
| sub_mch_id {data-indent=1} | string | 子商户号
| sub_appid {data-indent=1} | string | 特约商户APPID
| subscribe_appid {data-indent=1} | string | 推荐关注APPID
| sign_type {data-indent=1} | string | 签名类型
| security | boolean | 声明加载商户API证书<br/>固定值`true`

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v2->secapi->mkt->addrecommendconf->postAsync([
  'xml' => [
    'mch_id' => '1900000109',
    'sub_mch_id' => '1900000100',
    'sub_appid' => 'wx8888888888888888',
    'subscribe_appid' => 'wx931386123456789e',
    'sign_type' => 'HMAC-SHA256',
  ],
  'security' => true,
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [异步声明式]
$instance->chain('v2/secapi/mkt/addrecommendconf')->postAsync([
  'xml' => [
    'mch_id' => '1900000109',
    'sub_mch_id' => '1900000100',
    'sub_appid' => 'wx8888888888888888',
    'subscribe_appid' => 'wx931386123456789e',
    'sign_type' => 'HMAC-SHA256',
  ],
  'security' => true,
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [异步属性式]
$instance['v2/secapi/mkt/addrecommendconf']->postAsync([
  'xml' => [
    'mch_id' => '1900000109',
    'sub_mch_id' => '1900000100',
    'sub_appid' => 'wx8888888888888888',
    'subscribe_appid' => 'wx931386123456789e',
    'sign_type' => 'HMAC-SHA256',
  ],
  'security' => true,
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v2->secapi->mkt->addrecommendconf->post([
  'xml' => [
    'mch_id' => '1900000109',
    'sub_mch_id' => '1900000100',
    'sub_appid' => 'wx8888888888888888',
    'subscribe_appid' => 'wx931386123456789e',
    'sign_type' => 'HMAC-SHA256',
  ],
  'security' => true,
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

```php [同步声明式]
$response = $instance->chain('v2/secapi/mkt/addrecommendconf')->post([
  'xml' => [
    'mch_id' => '1900000109',
    'sub_mch_id' => '1900000100',
    'sub_appid' => 'wx8888888888888888',
    'subscribe_appid' => 'wx931386123456789e',
    'sign_type' => 'HMAC-SHA256',
  ],
  'security' => true,
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

```php [同步属性式]
$response = $instance['v2/secapi/mkt/addrecommendconf']->post([
  'xml' => [
    'mch_id' => '1900000109',
    'sub_mch_id' => '1900000100',
    'sub_appid' => 'wx8888888888888888',
    'subscribe_appid' => 'wx931386123456789e',
    'sign_type' => 'HMAC-SHA256',
  ],
  'security' => true,
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| return_code | string | 返回状态码
| return_msg | string | 返回信息
| err_code | string | 错误代码
| err_code_des | string | 错误代码描述
| result_code | string | 业务结果
| sign | string | 签名

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/api/mch_bank.php?chapter=9_24_1&index=1&p=901)
