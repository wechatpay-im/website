---
title: 直连商户模式小程序场景预签约
description: 直连商户从商户小程序拉起微信签约小程序发起签约前，需先后台调用预签约接口完成预签约，获取预签约ID，再拉起微信签约小程序；用户完成签约授权后，再返回商户小程序。 注意 用户在微信的页面中完成免密支付签约后，微信会同时将签约信息通过异步通知的方式通知给商户后台。 如果用户放弃签约或签约失败则不通知; 商户获取的签约会话有效期为2小时。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| appid {data-required data-indent=1} | string | 商户AppID
| service_id {data-required data-indent=1} | number | 免密支付服务ID
| out_contract_code {data-required data-indent=1} | string | 商户签约协议号
| notify_url {data-required data-indent=1} | string | 回调通知地址
| contract_display_account {data-required data-indent=1} | string | 用户账户展示名称
| openid {data-required data-indent=1} | string | 用户标识

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->passwordExemptContract->contracts->normal->preEntrustSign->miniProgram->postAsync([
  'json' => [
    'appid' => 'wxd678efh567hg6787',
    'service_id' => 12535,
    'out_contract_code' => 'wxwtdk20200910100000',
    'notify_url' => 'https://yourapp.com/notify',
    'contract_display_account' => '微信代扣用户A',
    'openid' => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/password-exempt-contract/contracts/normal/pre-entrust-sign/mini-program')->postAsync([
  'json' => [
    'appid' => 'wxd678efh567hg6787',
    'service_id' => 12535,
    'out_contract_code' => 'wxwtdk20200910100000',
    'notify_url' => 'https://yourapp.com/notify',
    'contract_display_account' => '微信代扣用户A',
    'openid' => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/password-exempt-contract/contracts/normal/pre-entrust-sign/mini-program']->postAsync([
  'json' => [
    'appid' => 'wxd678efh567hg6787',
    'service_id' => 12535,
    'out_contract_code' => 'wxwtdk20200910100000',
    'notify_url' => 'https://yourapp.com/notify',
    'contract_display_account' => '微信代扣用户A',
    'openid' => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->passwordExemptContract->contracts->normal->preEntrustSign->miniProgram->post([
  'json' => [
    'appid' => 'wxd678efh567hg6787',
    'service_id' => 12535,
    'out_contract_code' => 'wxwtdk20200910100000',
    'notify_url' => 'https://yourapp.com/notify',
    'contract_display_account' => '微信代扣用户A',
    'openid' => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/password-exempt-contract/contracts/normal/pre-entrust-sign/mini-program')->post([
  'json' => [
    'appid' => 'wxd678efh567hg6787',
    'service_id' => 12535,
    'out_contract_code' => 'wxwtdk20200910100000',
    'notify_url' => 'https://yourapp.com/notify',
    'contract_display_account' => '微信代扣用户A',
    'openid' => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/password-exempt-contract/contracts/normal/pre-entrust-sign/mini-program']->post([
  'json' => [
    'appid' => 'wxd678efh567hg6787',
    'service_id' => 12535,
    'out_contract_code' => 'wxwtdk20200910100000',
    'notify_url' => 'https://yourapp.com/notify',
    'contract_display_account' => '微信代扣用户A',
    'openid' => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| pre_entrustweb_id {data-required}| string | 预签约ID
| mchid {data-required}| string | 商户号
| service_id {data-required}| number | 免密支付服务ID
| out_contract_code {data-required}| string | 商户签约协议号
| sign_mp_appid {data-required}| string | 跳转签约的小程序AppID
| sign_mp_path {data-required}| string | 跳转签约的小程序路径

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/docs/merchant/apis/password-free-contract/sign/normal-mini-program-pre-entrust-sign.html)
