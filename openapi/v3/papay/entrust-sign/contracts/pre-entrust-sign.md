---
title: 代扣预签约
description: 商户可调用本接口预先指定签约信息，生成预签约跳转参数，然后跳转至微信支付的页面。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| sign_scene {data-required data-indent=1} | string | 签约场景<br/>`SIGN_SCENE_APP` \| `SIGN_SCENE_QRCODE` 枚举值之一
| appid {data-required data-indent=1} | string | 应用ID
| openid {data-indent=1} | string | 用户在直连商户应用下的用户标示
| plan_id {data-required data-indent=1} | number | 委托代扣模板ID
| out_contract_code {data-required data-indent=1} | string | 商户签约协议号
| contract_display_account {data-required data-indent=1} | string | 用户账户展示名称
| contract_notify_url {data-required data-indent=1} | string | 签约结果通知地址
| out_user_code {data-required data-indent=1} | string | 商户侧用户标识
| return_url {data-indent=1} | string | 回跳地址的url
| device_info {data-required data-indent=1} | object {data-tooltip="对应PHP的array"} | 发起预签约的用户，其设备信息
| device_type {data-required data-indent=2} | string | 设备类型<br/>`DEVICE_TYPE_UNKNOW` \| `DEVICE_TYPE_PHONE` \| `DEVICE_TYPE_PAD` \| `DEVICE_TYPE_TV` \| `DEVICE_TYPE_WATCH` 枚举值之一
| device_os {data-required data-indent=2} | string | 设备的OS版本
| device_id {data-required data-indent=2} | string | 设备ID
| device_running_as_root {data-required data-indent=2} | boolean | 设备是否以root身份运行
| device_ip {data-required data-indent=2} | string | 设备的IP
| weixin_installed {data-required data-indent=2} | boolean | 设备上是否安装微信
| weixin_version {data-required data-indent=2} | string | 设备上微信的版本
| days_since_first_login {data-required data-indent=2} | string | 发起预签约的用户首次登录该设备的时间<br/>`DAYS_SINCE_FIRST_LOGIN_UNKNOW` \| `DAYS_SINCE_FIRST_LOGIN_WITHIN_1_DAY` \| `DAYS_SINCE_FIRST_LOGIN_WITHIN_7_DAYS` \| `DAYS_SINCE_FIRST_LOGIN_WITHIN_30_DAYS` \| `DAYS_SINCE_FIRST_LOGIN_WITHIN_90_DAYS` \| `DAYS_SINCE_FIRST_LOGIN_WITHIN_180_DAYS` \| `DAYS_SINCE_FIRST_LOGIN_MORE_THEN_180_DAYS` 枚举值之一

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->papay->entrustSign->contracts->preEntrustSign->postAsync([
  'json' => [
    'sign_scene'               => 'SIGN_SCENE_APP',
    'appid'                    => 'wxd678efh567hg6787',
    'openid'                   => 'oYobu0MVnQfWpSMOYJz2AHPG_gQw',
    'plan_id'                  => 12535,
    'out_contract_code'        => 'wxwtdk20200910100000',
    'contract_display_account' => '微信代扣用户A',
    'contract_notify_url'      => 'https://yourapp.com/notify',
    'out_user_code'            => '用户A',
    'return_url'               => 'https://yourapp.com/notify',
    'device_info'              => [
      'device_type'            => 'DEVICE_TYPE_UNKNOW',
      'device_os'              => 'example_device_os',
      'device_id'              => 'example_device_id',
      'device_running_as_root' => true,
      'device_ip'              => 'example_device_ip',
      'weixin_installed'       => true,
      'weixin_version'         => 'example_weixin_version',
      'days_since_first_login' => 'DAYS_SINCE_FIRST_LOGIN_UNKNOW',
    ],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/papay/entrust-sign/contracts/pre-entrust-sign')->postAsync([
  'json' => [
    'sign_scene'               => 'SIGN_SCENE_APP',
    'appid'                    => 'wxd678efh567hg6787',
    'openid'                   => 'oYobu0MVnQfWpSMOYJz2AHPG_gQw',
    'plan_id'                  => 12535,
    'out_contract_code'        => 'wxwtdk20200910100000',
    'contract_display_account' => '微信代扣用户A',
    'contract_notify_url'      => 'https://yourapp.com/notify',
    'out_user_code'            => '用户A',
    'return_url'               => 'https://yourapp.com/notify',
    'device_info'              => [
      'device_type'            => 'DEVICE_TYPE_UNKNOW',
      'device_os'              => 'example_device_os',
      'device_id'              => 'example_device_id',
      'device_running_as_root' => true,
      'device_ip'              => 'example_device_ip',
      'weixin_installed'       => true,
      'weixin_version'         => 'example_weixin_version',
      'days_since_first_login' => 'DAYS_SINCE_FIRST_LOGIN_UNKNOW',
    ],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/papay/entrust-sign/contracts/pre-entrust-sign']->postAsync([
  'json' => [
    'sign_scene'               => 'SIGN_SCENE_APP',
    'appid'                    => 'wxd678efh567hg6787',
    'openid'                   => 'oYobu0MVnQfWpSMOYJz2AHPG_gQw',
    'plan_id'                  => 12535,
    'out_contract_code'        => 'wxwtdk20200910100000',
    'contract_display_account' => '微信代扣用户A',
    'contract_notify_url'      => 'https://yourapp.com/notify',
    'out_user_code'            => '用户A',
    'return_url'               => 'https://yourapp.com/notify',
    'device_info'              => [
      'device_type'            => 'DEVICE_TYPE_UNKNOW',
      'device_os'              => 'example_device_os',
      'device_id'              => 'example_device_id',
      'device_running_as_root' => true,
      'device_ip'              => 'example_device_ip',
      'weixin_installed'       => true,
      'weixin_version'         => 'example_weixin_version',
      'days_since_first_login' => 'DAYS_SINCE_FIRST_LOGIN_UNKNOW',
    ],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->papay->entrustSign->contracts->preEntrustSign->post([
  'json' => [
    'sign_scene'               => 'SIGN_SCENE_APP',
    'appid'                    => 'wxd678efh567hg6787',
    'openid'                   => 'oYobu0MVnQfWpSMOYJz2AHPG_gQw',
    'plan_id'                  => 12535,
    'out_contract_code'        => 'wxwtdk20200910100000',
    'contract_display_account' => '微信代扣用户A',
    'contract_notify_url'      => 'https://yourapp.com/notify',
    'out_user_code'            => '用户A',
    'return_url'               => 'https://yourapp.com/notify',
    'device_info'              => [
      'device_type'            => 'DEVICE_TYPE_UNKNOW',
      'device_os'              => 'example_device_os',
      'device_id'              => 'example_device_id',
      'device_running_as_root' => true,
      'device_ip'              => 'example_device_ip',
      'weixin_installed'       => true,
      'weixin_version'         => 'example_weixin_version',
      'days_since_first_login' => 'DAYS_SINCE_FIRST_LOGIN_UNKNOW',
    ],
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/papay/entrust-sign/contracts/pre-entrust-sign')->post([
  'json' => [
    'sign_scene'               => 'SIGN_SCENE_APP',
    'appid'                    => 'wxd678efh567hg6787',
    'openid'                   => 'oYobu0MVnQfWpSMOYJz2AHPG_gQw',
    'plan_id'                  => 12535,
    'out_contract_code'        => 'wxwtdk20200910100000',
    'contract_display_account' => '微信代扣用户A',
    'contract_notify_url'      => 'https://yourapp.com/notify',
    'out_user_code'            => '用户A',
    'return_url'               => 'https://yourapp.com/notify',
    'device_info'              => [
      'device_type'            => 'DEVICE_TYPE_UNKNOW',
      'device_os'              => 'example_device_os',
      'device_id'              => 'example_device_id',
      'device_running_as_root' => true,
      'device_ip'              => 'example_device_ip',
      'weixin_installed'       => true,
      'weixin_version'         => 'example_weixin_version',
      'days_since_first_login' => 'DAYS_SINCE_FIRST_LOGIN_UNKNOW',
    ],
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/papay/entrust-sign/contracts/pre-entrust-sign']->post([
  'json' => [
    'sign_scene'               => 'SIGN_SCENE_APP',
    'appid'                    => 'wxd678efh567hg6787',
    'openid'                   => 'oYobu0MVnQfWpSMOYJz2AHPG_gQw',
    'plan_id'                  => 12535,
    'out_contract_code'        => 'wxwtdk20200910100000',
    'contract_display_account' => '微信代扣用户A',
    'contract_notify_url'      => 'https://yourapp.com/notify',
    'out_user_code'            => '用户A',
    'return_url'               => 'https://yourapp.com/notify',
    'device_info'              => [
      'device_type'            => 'DEVICE_TYPE_UNKNOW',
      'device_os'              => 'example_device_os',
      'device_id'              => 'example_device_id',
      'device_running_as_root' => true,
      'device_ip'              => 'example_device_ip',
      'weixin_installed'       => true,
      'weixin_version'         => 'example_weixin_version',
      'days_since_first_login' => 'DAYS_SINCE_FIRST_LOGIN_UNKNOW',
    ],
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| pre_entrustweb_id {data-required} | string | 预签约ID
| mini_program_username | string | 跳转签约小程序的username
| mini_program_path | string | 跳转签约小程序的path
| redirect_url | string | 展示扫码签约的二维码的URL

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/merchant/4012978414)
