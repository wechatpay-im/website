---
title: 微信支付实名授权
description: 由于实名信息属于敏感数据，不能以明文数据传输，所以开发者需要用私钥对请求进行签名(sha256后base64编码). 微信支付会对用户的姓名和身份证信息用开发者的公钥加密 , 加密的padding算法为RSA_PKCS1_PADDING, 开发者可以使用私钥解密出明文。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

::: danger :no_entry_sign: {.im-deprecated}

因为监管原因，本接口服务已于 `2021.11.10` (北京时间)停止开放，文档仅做留存参考。

:::

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| base_uri {data-required} | string | 声明接入点<br/>固定值`https://fraud.mch.weixin.qq.com/`
| xml {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`XML`数据结构
| version {data-required data-indent=1} | string | 接口版本号<br/>`1.0` \| `2.0` 枚举值之一
| mch_id {data-required data-indent=1} | string | 商户号
| appid {data-required data-indent=1} | string | 公众账号ID
| openid {data-required data-indent=1} | string | 用户标识
| cert_serialno {data-required data-indent=1} | string | 加密实名信息的证书序列号
| access_token {data-required data-indent=1} | string | 步骤2或步骤3获取到的access_token
| timestamp {data-required data-indent=1} | number | unix时间戳，必须获取当前时间。
| cert_sign {data-required data-indent=1} | string | 使用rsa私钥对证书序列号和unix时间戳的进行签名
| charset {data-indent=1} | string | 证件类型<br/>`UTF-8` \| `GBK` 枚举值之一
| sign_type {data-required data-indent=1} | string | 签名类型<br/>`HMAC-SHA256` 枚举值

{.im-table #request}

::: code-group

```php [异步纯链式]
$certSerialNo = $merchantCertificateSerial;
$timestamp = \WeChatPay\Formatter::timestamp();
$certSign = \WeChatPay\Crypto\Rsa::sign(
  "cert_serialno={$certSerialNo}&timestamp={$timestamp}",
  $merchantPrivateKeyInstance
);
$instance->v2->secsvc->getrealnameinfo->postAsync([
  'base_uri' => 'https://fraud.mch.weixin.qq.com/', // 接入点
  'xml' => [
    'version'       => '1.0',
    'mch_id'        => '1900000109',
    'appid'         => 'wx2421b1c4370ec43b',
    'openid'        => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
    'cert_serialno' => $certSerialNo,
    'access_token'  => '81_...',
    'timestamp'     => $timestamp,
    'cert_sign'     => 'MuRThxRSlqvs2Mi9i2VRCr_MQ==',
    'charset'       => 'UTF-8',
    'sign_type'     => 'HMAC-SHA256',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [异步声明式]
$certSerialNo = $merchantCertificateSerial;
$timestamp = \WeChatPay\Formatter::timestamp();
$certSign = \WeChatPay\Crypto\Rsa::sign(
  "cert_serialno={$certSerialNo}&timestamp={$timestamp}",
  $merchantPrivateKeyInstance
);
$instance->chain('v2/secsvc/getrealnameinfo')->postAsync([
  'base_uri' => 'https://fraud.mch.weixin.qq.com/', // 接入点
  'xml' => [
    'version'       => '1.0',
    'mch_id'        => '1900000109',
    'appid'         => 'wx2421b1c4370ec43b',
    'openid'        => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
    'cert_serialno' => $certSerialNo,
    'access_token'  => '81_...',
    'timestamp'     => $timestamp,
    'cert_sign'     => 'MuRThxRSlqvs2Mi9i2VRCr_MQ==',
    'charset'       => 'UTF-8',
    'sign_type'     => 'HMAC-SHA256',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [异步属性式]
$certSerialNo = $merchantCertificateSerial;
$timestamp = \WeChatPay\Formatter::timestamp();
$certSign = \WeChatPay\Crypto\Rsa::sign(
  "cert_serialno={$certSerialNo}&timestamp={$timestamp}",
  $merchantPrivateKeyInstance
);
$instance['v2/secsvc/getrealnameinfo']->postAsync([
  'base_uri' => 'https://fraud.mch.weixin.qq.com/', // 接入点
  'xml' => [
    'version'       => '1.0',
    'mch_id'        => '1900000109',
    'appid'         => 'wx2421b1c4370ec43b',
    'openid'        => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
    'cert_serialno' => $certSerialNo,
    'access_token'  => '81_...',
    'timestamp'     => $timestamp,
    'cert_sign'     => 'MuRThxRSlqvs2Mi9i2VRCr_MQ==',
    'charset'       => 'UTF-8',
    'sign_type'     => 'HMAC-SHA256',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [同步纯链式]
$certSerialNo = $merchantCertificateSerial;
$timestamp = \WeChatPay\Formatter::timestamp();
$certSign = \WeChatPay\Crypto\Rsa::sign(
  "cert_serialno={$certSerialNo}&timestamp={$timestamp}",
  $merchantPrivateKeyInstance
);
$response = $instance->v2->secsvc->getrealnameinfo->post([
  'base_uri' => 'https://fraud.mch.weixin.qq.com/', // 接入点
  'xml' => [
    'version'       => '1.0',
    'mch_id'        => '1900000109',
    'appid'         => 'wx2421b1c4370ec43b',
    'openid'        => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
    'cert_serialno' => $certSerialNo,
    'access_token'  => '81_...',
    'timestamp'     => $timestamp,
    'cert_sign'     => 'MuRThxRSlqvs2Mi9i2VRCr_MQ==',
    'charset'       => 'UTF-8',
    'sign_type'     => 'HMAC-SHA256',
  ],
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

```php [同步声明式]
$certSerialNo = $merchantCertificateSerial;
$timestamp = \WeChatPay\Formatter::timestamp();
$certSign = \WeChatPay\Crypto\Rsa::sign(
  "cert_serialno={$certSerialNo}&timestamp={$timestamp}",
  $merchantPrivateKeyInstance
);
$response = $instance->chain('v2/secsvc/getrealnameinfo')->post([
  'base_uri' => 'https://fraud.mch.weixin.qq.com/', // 接入点
  'xml' => [
    'version'       => '1.0',
    'mch_id'        => '1900000109',
    'appid'         => 'wx2421b1c4370ec43b',
    'openid'        => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
    'cert_serialno' => $certSerialNo,
    'access_token'  => '81_...',
    'timestamp'     => $timestamp,
    'cert_sign'     => 'MuRThxRSlqvs2Mi9i2VRCr_MQ==',
    'charset'       => 'UTF-8',
    'sign_type'     => 'HMAC-SHA256',
  ],
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

```php [同步属性式]
$certSerialNo = $merchantCertificateSerial;
$timestamp = \WeChatPay\Formatter::timestamp();
$certSign = \WeChatPay\Crypto\Rsa::sign(
  "cert_serialno={$certSerialNo}&timestamp={$timestamp}",
  $merchantPrivateKeyInstance
);
$response = $instance['v2/secsvc/getrealnameinfo']->post([
  'base_uri' => 'https://fraud.mch.weixin.qq.com/', // 接入点
  'xml' => [
    'version'       => '1.0',
    'mch_id'        => '1900000109',
    'appid'         => 'wx2421b1c4370ec43b',
    'openid'        => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
    'cert_serialno' => $certSerialNo,
    'access_token'  => '81_...',
    'timestamp'     => $timestamp,
    'cert_sign'     => 'MuRThxRSlqvs2Mi9i2VRCr_MQ==',
    'charset'       => 'UTF-8',
    'sign_type'     => 'HMAC-SHA256',
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
| sign {data-required} | string | 签名
| result_code {data-required} | string | 业务结果<br/>`SUCCESS` \| `FAIL` 枚举值之一
| appid {data-required} | string | 公众账号ID
| mch_id {data-required} | string | 商户号
| nonce_str {data-required} | string | 随机字符串
| openid {data-required} | string | 用户标识
| encrypted_real_name {data-required} | string | 加密后的姓名。如果请求参数`charset`=`UTF-8`，解密之后数据为`UTF-8`格式，否则解密之后数据为`GBK`格式。
| encrypted_credential_id {data-required} | string | 加密后的证件号码
| cre_type | number | 证件类型，`version` >= `2.0`时返回此字段<br/>`MAINLAND_ID` \| `PASSPOT` \| `MO` \| `SOLDIERS` \| `HVPS` \| `MAINLAND_TMP_ID` \| `ACCOUNT_THIN` \| `POLICE` \| `MTPS` \| `BL` \| `OTHER` \| `RPFF` \| `HK_MACAO` \| `TAIWAN` 枚举值之一

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/api/realnameauthorization.php?chapter=60_5&index=1)
