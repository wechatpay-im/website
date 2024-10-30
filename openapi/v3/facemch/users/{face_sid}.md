---
title: 查询用户信息
description: 商户可以根据face_sid查询用户UnionId，调用该接口获取授权的实名信息商户需要先申请权限。
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| face_sid | string | 终端设备识别用户成功后返回的凭证
| query | object | 声明请求的查询参数
| info_type {data-indent=1} | string | 标识本次请求获取的信息类型
| appid {data-indent=1} | string | 微信分配的公众账号ID
| sub_mchid {data-indent=1} | string | 微信支付分配的子商户号，服务商模式下必填
| sub_appid {data-indent=1} | string | 微信分配的子商户公众账号ID
| sub_serial_no {data-indent=1} | string | ⼦商户证书序列号，服务商模式下请求实名信息必传

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->facemch->users->_face_sid_->getAsync([
  'face_sid' => 'aabbccdd12345',
  'query' => [
    'info_type' => 'ASK_UNIONID',
    'appid' => 'wx2b029c08a6233333',
    'sub_mchid' => '123456789',
    'sub_appid' => 'wx2b029c08a6255555',
    'sub_serial_no' => 'wx2b029c08a6255555',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/facemch/users/{face_sid}')->getAsync([
  'face_sid' => 'aabbccdd12345',
  'query' => [
    'info_type' => 'ASK_UNIONID',
    'appid' => 'wx2b029c08a6233333',
    'sub_mchid' => '123456789',
    'sub_appid' => 'wx2b029c08a6255555',
    'sub_serial_no' => 'wx2b029c08a6255555',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/facemch/users/{face_sid}']->getAsync([
  'face_sid' => 'aabbccdd12345',
  'query' => [
    'info_type' => 'ASK_UNIONID',
    'appid' => 'wx2b029c08a6233333',
    'sub_mchid' => '123456789',
    'sub_appid' => 'wx2b029c08a6255555',
    'sub_serial_no' => 'wx2b029c08a6255555',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->facemch->users->_face_sid_->get([
  'face_sid' => 'aabbccdd12345',
  'query' => [
    'info_type' => 'ASK_UNIONID',
    'appid' => 'wx2b029c08a6233333',
    'sub_mchid' => '123456789',
    'sub_appid' => 'wx2b029c08a6255555',
    'sub_serial_no' => 'wx2b029c08a6255555',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/facemch/users/{face_sid}')->get([
  'face_sid' => 'aabbccdd12345',
  'query' => [
    'info_type' => 'ASK_UNIONID',
    'appid' => 'wx2b029c08a6233333',
    'sub_mchid' => '123456789',
    'sub_appid' => 'wx2b029c08a6255555',
    'sub_serial_no' => 'wx2b029c08a6255555',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/facemch/users/{face_sid}']->get([
  'face_sid' => 'aabbccdd12345',
  'query' => [
    'info_type' => 'ASK_UNIONID',
    'appid' => 'wx2b029c08a6233333',
    'sub_mchid' => '123456789',
    'sub_appid' => 'wx2b029c08a6255555',
    'sub_serial_no' => 'wx2b029c08a6255555',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| union_id | string | 
| openid | string | 
| sub_openid | string | 
| real_name_info | object | 
| encrypted_real_name {data-indent=1} | string | 加密后的姓名信息，商户用API证书私钥解密
| credential_type {data-indent=1} | integer | 
| encrypted_credential_id {data-indent=1} | string | 加密后的身份证号，商户用API证书私钥解密

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/wxfacepay/develop/android/sid.html)