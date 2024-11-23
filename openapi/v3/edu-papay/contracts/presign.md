---
title: 预签约
description: 商户通过调用该接口可获取预签约号（“presign_token”），预签约号对应用户一次的签约信息，之后用户可以从商户小程序跳转到微信签约小程序时使用该预签约号进行签约
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| appid {data-required data-indent=1} | string | 服务商APPID
| sub_mchid {data-indent=1} | string | 子商户号
| sub_appid {data-indent=1} | string | 子商户APPID
| openid {data-required data-indent=1} | string | 服务商APPID下的用户标识
| sub_openid {data-indent=1} | string | 子商户APPID下的用户标识
| plan_id {data-required data-indent=1} | string | 签约模板号
| user_id {data-required data-indent=1} | string | 用户账号
| period_start_date {data-required data-indent=1} | string | 首次扣款日期
| trade_scene {data-required data-indent=1} | string | 场景信息枚举

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->eduPapay->contracts->presign->postAsync([
  'json' => [
    'appid' => 'wx8888888888888888',
    'sub_mchid' => '1900000109',
    'sub_appid' => 'wx8888888888888888',
    'openid' => 'oUpF8uMuAJOM2pxb1Q',
    'sub_openid' => 'oUpF8uMuAJOM2pxb2W',
    'plan_id' => '101164396123311331',
    'user_id' => '20200330tony',
    'period_start_date' => '2020-03-19',
    'trade_scene' => 'EDUCATION_PERIOD',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/edu-papay/contracts/presign')->postAsync([
  'json' => [
    'appid' => 'wx8888888888888888',
    'sub_mchid' => '1900000109',
    'sub_appid' => 'wx8888888888888888',
    'openid' => 'oUpF8uMuAJOM2pxb1Q',
    'sub_openid' => 'oUpF8uMuAJOM2pxb2W',
    'plan_id' => '101164396123311331',
    'user_id' => '20200330tony',
    'period_start_date' => '2020-03-19',
    'trade_scene' => 'EDUCATION_PERIOD',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/edu-papay/contracts/presign']->postAsync([
  'json' => [
    'appid' => 'wx8888888888888888',
    'sub_mchid' => '1900000109',
    'sub_appid' => 'wx8888888888888888',
    'openid' => 'oUpF8uMuAJOM2pxb1Q',
    'sub_openid' => 'oUpF8uMuAJOM2pxb2W',
    'plan_id' => '101164396123311331',
    'user_id' => '20200330tony',
    'period_start_date' => '2020-03-19',
    'trade_scene' => 'EDUCATION_PERIOD',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->eduPapay->contracts->presign->post([
  'json' => [
    'appid' => 'wx8888888888888888',
    'sub_mchid' => '1900000109',
    'sub_appid' => 'wx8888888888888888',
    'openid' => 'oUpF8uMuAJOM2pxb1Q',
    'sub_openid' => 'oUpF8uMuAJOM2pxb2W',
    'plan_id' => '101164396123311331',
    'user_id' => '20200330tony',
    'period_start_date' => '2020-03-19',
    'trade_scene' => 'EDUCATION_PERIOD',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/edu-papay/contracts/presign')->post([
  'json' => [
    'appid' => 'wx8888888888888888',
    'sub_mchid' => '1900000109',
    'sub_appid' => 'wx8888888888888888',
    'openid' => 'oUpF8uMuAJOM2pxb1Q',
    'sub_openid' => 'oUpF8uMuAJOM2pxb2W',
    'plan_id' => '101164396123311331',
    'user_id' => '20200330tony',
    'period_start_date' => '2020-03-19',
    'trade_scene' => 'EDUCATION_PERIOD',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/edu-papay/contracts/presign']->post([
  'json' => [
    'appid' => 'wx8888888888888888',
    'sub_mchid' => '1900000109',
    'sub_appid' => 'wx8888888888888888',
    'openid' => 'oUpF8uMuAJOM2pxb1Q',
    'sub_openid' => 'oUpF8uMuAJOM2pxb2W',
    'plan_id' => '101164396123311331',
    'user_id' => '20200330tony',
    'period_start_date' => '2020-03-19',
    'trade_scene' => 'EDUCATION_PERIOD',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| presign_token {data-required}| string | 预签约号

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/Offline/apis/chapter5_2_1.shtml)
