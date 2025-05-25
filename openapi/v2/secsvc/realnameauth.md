---
title: 微信支付实名验证
description: 取得token后调用本接口验证微信用户的姓名和身份证信息是否匹配
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

::: warning :closed_lock_with_key: {.im-privated}

本接口服务已于 `2021.11.10` (北京时间)停止开放，文档仅做留存参考。

:::

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| base_uri {data-required} | string | 声明接入点<br/>固定值`https://fraud.mch.weixin.qq.com/`
| xml {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`XML`数据结构
| version {data-required data-indent=1} | string | 接口版本号<br/>`1.0` \| `1.1` 枚举值之一
| mch_id {data-required data-indent=1} | string | 商户号
| appid {data-required data-indent=1} | string | 公众账号ID
| openid {data-required data-indent=1} | string | 用户标识
| real_name {data-required data-indent=1} | string | 真实姓名
| cred_type {data-required data-indent=1} | number | 证件类型<br/>`1` \| `2` \| `5` \| `9` \| `12` \| `17` \| `18` 枚举值之一
| cred_id {data-required data-indent=1} | string | 证件号码
| access_token {data-required data-indent=1} | string | 步骤2或步骤3获取到的access_token
| sign_type {data-required data-indent=1} | string | 签名类型<br/>`HMAC-SHA256` \| `MD5` 枚举值之一

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v2->secsvc->realnameauth->postAsync([
  'base_uri' => 'https://fraud.mch.weixin.qq.com/', // 接入点
  'xml' => [
    'version'      => '1.0',
    'mch_id'       => '1900000109',
    'appid'        => 'wx2421b1c4370ec43b',
    'openid'       => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
    'real_name'    => '刘某某',
    'cred_type'    => '1',
    'cred_id'      => '440000000000000000',
    'access_token' => '81_...',
    'sign_type'    => 'HMAC-SHA256',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [异步声明式]
$instance->chain('v2/secsvc/realnameauth')->postAsync([
  'base_uri' => 'https://fraud.mch.weixin.qq.com/', // 接入点
  'xml' => [
    'version'      => '1.0',
    'mch_id'       => '1900000109',
    'appid'        => 'wx2421b1c4370ec43b',
    'openid'       => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
    'real_name'    => '刘某某',
    'cred_type'    => '1',
    'cred_id'      => '440000000000000000',
    'access_token' => '81_...',
    'sign_type'    => 'HMAC-SHA256',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [异步属性式]
$instance['v2/secsvc/realnameauth']->postAsync([
  'base_uri' => 'https://fraud.mch.weixin.qq.com/', // 接入点
  'xml' => [
    'version'      => '1.0',
    'mch_id'       => '1900000109',
    'appid'        => 'wx2421b1c4370ec43b',
    'openid'       => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
    'real_name'    => '刘某某',
    'cred_type'    => '1',
    'cred_id'      => '440000000000000000',
    'access_token' => '81_...',
    'sign_type'    => 'HMAC-SHA256',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v2->secsvc->realnameauth->post([
  'base_uri' => 'https://fraud.mch.weixin.qq.com/', // 接入点
  'xml' => [
    'version'      => '1.0',
    'mch_id'       => '1900000109',
    'appid'        => 'wx2421b1c4370ec43b',
    'openid'       => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
    'real_name'    => '刘某某',
    'cred_type'    => '1',
    'cred_id'      => '440000000000000000',
    'access_token' => '81_...',
    'sign_type'    => 'HMAC-SHA256',
  ],
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

```php [同步声明式]
$response = $instance->chain('v2/secsvc/realnameauth')->post([
  'base_uri' => 'https://fraud.mch.weixin.qq.com/', // 接入点
  'xml' => [
    'version'      => '1.0',
    'mch_id'       => '1900000109',
    'appid'        => 'wx2421b1c4370ec43b',
    'openid'       => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
    'real_name'    => '刘某某',
    'cred_type'    => '1',
    'cred_id'      => '440000000000000000',
    'access_token' => '81_...',
    'sign_type'    => 'HMAC-SHA256',
  ],
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

```php [同步属性式]
$response = $instance['v2/secsvc/realnameauth']->post([
  'base_uri' => 'https://fraud.mch.weixin.qq.com/', // 接入点
  'xml' => [
    'version'      => '1.0',
    'mch_id'       => '1900000109',
    'appid'        => 'wx2421b1c4370ec43b',
    'openid'       => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
    'real_name'    => '刘某某',
    'cred_type'    => '1',
    'cred_id'      => '440000000000000000',
    'access_token' => '81_...',
    'sign_type'    => 'HMAC-SHA256',
  ],
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| return_code {data-required} | string | 返回状态码<br/>`SUCCESS` \| `FAIL` 枚举值之一
| return_msg | string | 错误码描述
| error_code | string | 错误码
| error_code_des | string | 错误代码描述
| sign | string | 签名
| result_code {data-required} | string | 业务结果<br/>`SUCCESS` \| `FAIL` 枚举值之一
| appid | string | 公众账号ID
| mch_id | string | 商户号
| nonce_str | string | 随机字符串
| openid | string | 用户标识
| access_token | string | 步骤2或步骤3获取到的access_token
| verify_openid | string | 有多个结果时用分号”;”连接<br/>`V_OP_NA` \| `V_OP_NM_MA` \| `V_OP_NM_UM` 枚举值之一
| verify_real_name | string | 当verify_openid为V_OP_NM_MA时返回<br/>`V_NM_ID_MA` \| `V_NM_ID_UM` \| `V_NM_ID_TYPE_UM` 枚举值之一
| bind_bankcard | string | 当verify_real_name为V_NM_ID_MA时返回<br/>`YES` \| `NO` 枚举值之一

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v2/merchant/4011987263)
