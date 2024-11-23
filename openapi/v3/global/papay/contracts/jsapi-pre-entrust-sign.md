---
title: JSAPI预签约
description: 该方式适用于微信公众号内发起签约。用户在完成签约后可返回商户签约页面。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| base_uri | string | 声明接入点`https://apihk.mch.weixin.qq.com/`(香港接入)
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| appid {data-indent=1} | string | 机构APPID
| sub_mchid {data-indent=1} | string | 子商户号
| sp_appid {data-indent=1} | string | 机构appid
| sp_mchid {data-indent=1} | string | 机构商户号
| sub_appid {data-indent=1} | string | 子商户应用ID
| plan_id {data-indent=1} | integer | 模板ID
| out_contract_code {data-indent=1} | string | 商户侧签约协议号
| user_display_name {data-indent=1} | string | 用户账户展示名称
| success_notify_url {data-indent=1} | string | 签约成功通知url
| openid {data-indent=1} | string | 商户appid下的用户标识
| return_url {data-indent=1} | string | 签约完成跳转URL
| expired_time {data-indent=1} | string | 过期时间

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->global->papay->contracts->jsapiPreEntrustSign->postAsync([
  'base_uri' => 'https://apihk.mch.weixin.qq.com/', // 接入点(香港接入)
  'json' => [
    'appid' => 'wxd678efh567hg6787',
    'sub_mchid' => '1230000109',
    'sp_appid' => 'wx8888888888888888',
    'sp_mchid' => '3200000001',
    'sub_appid' => 'wxcbda96de0b165484',
    'plan_id' => 123,
    'out_contract_code' => '100001256',
    'user_display_name' => '张三',
    'success_notify_url' => 'https://pay.weixin.qq.com',
    'openid' => 'ouFhd5X9s9WteC3eWRjXV3lea123',
    'return_url' => 'https://pay.weixin.qq.com',
    'expired_time' => '2021-11-20T13:29:35+08:00',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/global/papay/contracts/jsapi-pre-entrust-sign')->postAsync([
  'base_uri' => 'https://apihk.mch.weixin.qq.com/', // 接入点(香港接入)
  'json' => [
    'appid' => 'wxd678efh567hg6787',
    'sub_mchid' => '1230000109',
    'sp_appid' => 'wx8888888888888888',
    'sp_mchid' => '3200000001',
    'sub_appid' => 'wxcbda96de0b165484',
    'plan_id' => 123,
    'out_contract_code' => '100001256',
    'user_display_name' => '张三',
    'success_notify_url' => 'https://pay.weixin.qq.com',
    'openid' => 'ouFhd5X9s9WteC3eWRjXV3lea123',
    'return_url' => 'https://pay.weixin.qq.com',
    'expired_time' => '2021-11-20T13:29:35+08:00',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/global/papay/contracts/jsapi-pre-entrust-sign']->postAsync([
  'base_uri' => 'https://apihk.mch.weixin.qq.com/', // 接入点(香港接入)
  'json' => [
    'appid' => 'wxd678efh567hg6787',
    'sub_mchid' => '1230000109',
    'sp_appid' => 'wx8888888888888888',
    'sp_mchid' => '3200000001',
    'sub_appid' => 'wxcbda96de0b165484',
    'plan_id' => 123,
    'out_contract_code' => '100001256',
    'user_display_name' => '张三',
    'success_notify_url' => 'https://pay.weixin.qq.com',
    'openid' => 'ouFhd5X9s9WteC3eWRjXV3lea123',
    'return_url' => 'https://pay.weixin.qq.com',
    'expired_time' => '2021-11-20T13:29:35+08:00',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->global->papay->contracts->jsapiPreEntrustSign->post([
  'base_uri' => 'https://apihk.mch.weixin.qq.com/', // 接入点(香港接入)
  'json' => [
    'appid' => 'wxd678efh567hg6787',
    'sub_mchid' => '1230000109',
    'sp_appid' => 'wx8888888888888888',
    'sp_mchid' => '3200000001',
    'sub_appid' => 'wxcbda96de0b165484',
    'plan_id' => 123,
    'out_contract_code' => '100001256',
    'user_display_name' => '张三',
    'success_notify_url' => 'https://pay.weixin.qq.com',
    'openid' => 'ouFhd5X9s9WteC3eWRjXV3lea123',
    'return_url' => 'https://pay.weixin.qq.com',
    'expired_time' => '2021-11-20T13:29:35+08:00',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/global/papay/contracts/jsapi-pre-entrust-sign')->post([
  'base_uri' => 'https://apihk.mch.weixin.qq.com/', // 接入点(香港接入)
  'json' => [
    'appid' => 'wxd678efh567hg6787',
    'sub_mchid' => '1230000109',
    'sp_appid' => 'wx8888888888888888',
    'sp_mchid' => '3200000001',
    'sub_appid' => 'wxcbda96de0b165484',
    'plan_id' => 123,
    'out_contract_code' => '100001256',
    'user_display_name' => '张三',
    'success_notify_url' => 'https://pay.weixin.qq.com',
    'openid' => 'ouFhd5X9s9WteC3eWRjXV3lea123',
    'return_url' => 'https://pay.weixin.qq.com',
    'expired_time' => '2021-11-20T13:29:35+08:00',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/global/papay/contracts/jsapi-pre-entrust-sign']->post([
  'base_uri' => 'https://apihk.mch.weixin.qq.com/', // 接入点(香港接入)
  'json' => [
    'appid' => 'wxd678efh567hg6787',
    'sub_mchid' => '1230000109',
    'sp_appid' => 'wx8888888888888888',
    'sp_mchid' => '3200000001',
    'sub_appid' => 'wxcbda96de0b165484',
    'plan_id' => 123,
    'out_contract_code' => '100001256',
    'user_display_name' => '张三',
    'success_notify_url' => 'https://pay.weixin.qq.com',
    'openid' => 'ouFhd5X9s9WteC3eWRjXV3lea123',
    'return_url' => 'https://pay.weixin.qq.com',
    'expired_time' => '2021-11-20T13:29:35+08:00',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| sign_url {data-required}| string | 签约跳转URL

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/api_external/ch/apis/chapter5_1_15.shtml)
