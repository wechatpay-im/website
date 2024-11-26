---
title: 人脸识别SDK-获取调用凭证
description: 人脸识别通过识别用户人脸，获取用户信息（openid）。此功能常用于商户会员、商品推荐等场景， 此流程无法用于支付。FACEID-ONCE为直接启动人脸识别流程。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| base_uri {data-required} | string | 声明接入点<br/>固定值`https://payapp.weixin.qq.com/`
| xml {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`XML`数据结构
| store_id {data-required data-indent=1} | string | 门店编号， 由商户定义， 各门店唯一。
| store_name {data-required data-indent=1} | string | 门店名称，由商户定义。（可用于展示）
| device_id {data-required data-indent=1} | string | 终端设备编号，由商户定义。
| attach {data-indent=1} | string | 附加字段。字段格式使用Json
| rawdata {data-required data-indent=1} | string | 初始化数据。由微信人脸SDK的接口返回。
| appid {data-required data-indent=1} | string | 商户号绑定的公众号/小程序 appid
| mch_id {data-required data-indent=1} | string | 商户号
| sub_appid {data-indent=1} | string | 子商户绑定的公众号/小程序 appid(服务商模式)
| sub_mch_id {data-indent=1} | string | 子商户号(服务商模式)
| now {data-required data-indent=1} | integer | 取当前时间，10位unix时间戳。
| version {data-required data-indent=1} | string | 版本号。固定为1<br/>`1` 枚举值
| sign_type {data-required data-indent=1} | string | 签名类型<br/>`MD5` \| `HMAC-SHA256` 枚举值之一

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v2->face->get_wxpayface_authinfo->postAsync([
  'base_uri' => 'https://payapp.weixin.qq.com/', // 接入点
  'xml' => [
    'store_id' => 'IMG001',
    'store_name' => '爱马哥南山店',
    'device_id' => 'DEV001',
    'attach' => '',
    'rawdata' => 'H0kvnUgGHKuqflNwtNqCdOVpbO4FPSowudTG',
    'appid' => 'wx31fdaErqR31',
    'mch_id' => '12345689',
    'sub_appid' => 'wx31fdaErqR31',
    'sub_mch_id' => '12345689',
    'now' => '1239878956',
    'version' => '1',
    'sign_type' => 'MD5',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [异步声明式]
$instance->chain('v2/face/get_wxpayface_authinfo')->postAsync([
  'base_uri' => 'https://payapp.weixin.qq.com/', // 接入点
  'xml' => [
    'store_id' => 'IMG001',
    'store_name' => '爱马哥南山店',
    'device_id' => 'DEV001',
    'attach' => '',
    'rawdata' => 'H0kvnUgGHKuqflNwtNqCdOVpbO4FPSowudTG',
    'appid' => 'wx31fdaErqR31',
    'mch_id' => '12345689',
    'sub_appid' => 'wx31fdaErqR31',
    'sub_mch_id' => '12345689',
    'now' => '1239878956',
    'version' => '1',
    'sign_type' => 'MD5',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [异步属性式]
$instance['v2/face/get_wxpayface_authinfo']->postAsync([
  'base_uri' => 'https://payapp.weixin.qq.com/', // 接入点
  'xml' => [
    'store_id' => 'IMG001',
    'store_name' => '爱马哥南山店',
    'device_id' => 'DEV001',
    'attach' => '',
    'rawdata' => 'H0kvnUgGHKuqflNwtNqCdOVpbO4FPSowudTG',
    'appid' => 'wx31fdaErqR31',
    'mch_id' => '12345689',
    'sub_appid' => 'wx31fdaErqR31',
    'sub_mch_id' => '12345689',
    'now' => '1239878956',
    'version' => '1',
    'sign_type' => 'MD5',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v2->face->get_wxpayface_authinfo->post([
  'base_uri' => 'https://payapp.weixin.qq.com/', // 接入点
  'xml' => [
    'store_id' => 'IMG001',
    'store_name' => '爱马哥南山店',
    'device_id' => 'DEV001',
    'attach' => '',
    'rawdata' => 'H0kvnUgGHKuqflNwtNqCdOVpbO4FPSowudTG',
    'appid' => 'wx31fdaErqR31',
    'mch_id' => '12345689',
    'sub_appid' => 'wx31fdaErqR31',
    'sub_mch_id' => '12345689',
    'now' => '1239878956',
    'version' => '1',
    'sign_type' => 'MD5',
  ],
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

```php [同步声明式]
$response = $instance->chain('v2/face/get_wxpayface_authinfo')->post([
  'base_uri' => 'https://payapp.weixin.qq.com/', // 接入点
  'xml' => [
    'store_id' => 'IMG001',
    'store_name' => '爱马哥南山店',
    'device_id' => 'DEV001',
    'attach' => '',
    'rawdata' => 'H0kvnUgGHKuqflNwtNqCdOVpbO4FPSowudTG',
    'appid' => 'wx31fdaErqR31',
    'mch_id' => '12345689',
    'sub_appid' => 'wx31fdaErqR31',
    'sub_mch_id' => '12345689',
    'now' => '1239878956',
    'version' => '1',
    'sign_type' => 'MD5',
  ],
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

```php [同步属性式]
$response = $instance['v2/face/get_wxpayface_authinfo']->post([
  'base_uri' => 'https://payapp.weixin.qq.com/', // 接入点
  'xml' => [
    'store_id' => 'IMG001',
    'store_name' => '爱马哥南山店',
    'device_id' => 'DEV001',
    'attach' => '',
    'rawdata' => 'H0kvnUgGHKuqflNwtNqCdOVpbO4FPSowudTG',
    'appid' => 'wx31fdaErqR31',
    'mch_id' => '12345689',
    'sub_appid' => 'wx31fdaErqR31',
    'sub_mch_id' => '12345689',
    'now' => '1239878956',
    'version' => '1',
    'sign_type' => 'MD5',
  ],
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| return_code {data-required}| string | 返回状态码<br/>`SUCCESS` \| `FAIL` 枚举值之一
| return_msg | string | 错误码描述
| authinfo {data-required}| string | SDK调用凭证。用于调用SDK的人脸识别接口。
| expires_in | integer | authinfo的有效时间, 单位秒。
| nonce_str {data-required}| string | 随机字符串，不长于32位
| sign {data-required}| string | 参数签名。
| appid {data-required}| string | 公众号
| mch_id {data-required}| string | 商户号
| sub_appid | string | 子商户公众账号ID(服务商模式)
| sub_mch_id | string | 子商户号(服务商模式)

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/wxfacepay/develop/android/faceuser.html)
