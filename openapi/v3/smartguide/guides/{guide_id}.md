---
title: 服务人员信息更新
description: 用于服务商/用于服务商/商户开发者为商户更新门店服务人员的姓名、头像等信息
---

# {{ $frontmatter.title }} {#patch}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| guide_id | string | 服务人员ID
| json | object | 声明请求的`JSON`数据结构
| sub_mchid {data-indent=1} | string | 子商户ID
| name {data-indent=1} | string | 企业微信的员工姓名
| mobile {data-indent=1} | string | 手机号码
| qr_code {data-indent=1} | string | 员工个人二维码
| avatar {data-indent=1} | string | 头像URL
| headers | object | 声明请求的头参数
| Wechatpay-Serial {data-indent=1} | string | 微信支付平台公钥证书序列号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->smartguide->guides->_guide_id_->patchAsync([
  'guide_id' => 'LLA3WJ6DSZUfiaZDS79FH5Wm5m4X69TBic',
  'json' => [
    'sub_mchid' => '1234567890',
    'name' => '',
    'mobile' => '',
    'qr_code' => '',
    'avatar' => '',
  ],
  'headers' => [
    'Wechatpay-Serial' => '',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r($response->getStatusCode() === 204);
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/smartguide/guides/{guide_id}')->patchAsync([
  'guide_id' => 'LLA3WJ6DSZUfiaZDS79FH5Wm5m4X69TBic',
  'json' => [
    'sub_mchid' => '1234567890',
    'name' => '',
    'mobile' => '',
    'qr_code' => '',
    'avatar' => '',
  ],
  'headers' => [
    'Wechatpay-Serial' => '',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r($response->getStatusCode() === 204);
})
->wait();
```

```php [异步属性式]
$instance['v3/smartguide/guides/{guide_id}']->patchAsync([
  'guide_id' => 'LLA3WJ6DSZUfiaZDS79FH5Wm5m4X69TBic',
  'json' => [
    'sub_mchid' => '1234567890',
    'name' => '',
    'mobile' => '',
    'qr_code' => '',
    'avatar' => '',
  ],
  'headers' => [
    'Wechatpay-Serial' => '',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r($response->getStatusCode() === 204);
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->smartguide->guides->_guide_id_->patch([
  'guide_id' => 'LLA3WJ6DSZUfiaZDS79FH5Wm5m4X69TBic',
  'json' => [
    'sub_mchid' => '1234567890',
    'name' => '',
    'mobile' => '',
    'qr_code' => '',
    'avatar' => '',
  ],
  'headers' => [
    'Wechatpay-Serial' => '',
  ],
]);
print_r($response->getStatusCode() === 204);
```

```php [同步声明式]
$response = $instance->chain('v3/smartguide/guides/{guide_id}')->patch([
  'guide_id' => 'LLA3WJ6DSZUfiaZDS79FH5Wm5m4X69TBic',
  'json' => [
    'sub_mchid' => '1234567890',
    'name' => '',
    'mobile' => '',
    'qr_code' => '',
    'avatar' => '',
  ],
  'headers' => [
    'Wechatpay-Serial' => '',
  ],
]);
print_r($response->getStatusCode() === 204);
```

```php [同步属性式]
$response = $instance['v3/smartguide/guides/{guide_id}']->patch([
  'guide_id' => 'LLA3WJ6DSZUfiaZDS79FH5Wm5m4X69TBic',
  'json' => [
    'sub_mchid' => '1234567890',
    'name' => '',
    'mobile' => '',
    'qr_code' => '',
    'avatar' => '',
  ],
  'headers' => [
    'Wechatpay-Serial' => '',
  ],
]);
print_r($response->getStatusCode() === 204);
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| 空字符串(无返回内容) {align=center colspan=3}

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/smartguide/chapter3_4.shtml)