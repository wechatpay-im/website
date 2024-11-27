---
title: H5纯签约
description: 该方式适用于手机、平板电脑等使用H5浏览器的设备场景使用微信签约扣款。商户在网站前端通过微信支付H5纯签约接口与用户签订委托扣款协议，再通过后台接口申请扣款来完成代扣交易。
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| query | object {data-required data-tooltip="对应PHP的array"} | 声明请求的查询参数
| appid {data-required data-indent=1} | string | 应用ID
| mch_id {data-required data-indent=1} | string | 商户号
| plan_id {data-required data-indent=1} | string | 模板id
| contract_code {data-required data-indent=1} | string | 签约协议号
| request_serial {data-required data-indent=1} | integer | 请求序列号
| contract_display_account {data-required data-indent=1} | string | 用户账户展示名称
| notify_url {data-required data-indent=1} | string | 回调通知url
| version {data-required data-indent=1} | string | 版本号<br/>`1.0` 枚举值
| sign {data-required data-indent=1} | string | 签名
| sign_type {data-indent=1} | string | 签名类型<br/>`MD5` \| `HMAC-SHA256` 枚举值之一
| timestamp {data-required data-indent=1} | string | 时间戳
| return_appid {data-indent=1} | string | 回调应用appid

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v2->papay->h5entrustweb->getAsync([
  'query' => [
    'appid'                    => 'wxcbda96de0b165486',
    'mch_id'                   => '1200009811',
    'plan_id'                  => '12535',
    'contract_code'            => '100000',
    'request_serial'           => '1000',
    'contract_display_account' => '微信代扣',
    'notify_url'               => 'https://weixin.qq.com',
    'version'                  => '1.0',
    'sign'                     => 'C380BEC2BFD727A4B6845133519F3AD6',
    'timestamp'                => '1414488825',
    'clientip'                 => '119.145.83.6',
    'deviceid'                 => 'baf04e6bbbd06f7b1a197d18ed53b7f1',
    'mobile'                   => '18933432355',
    'email'                    => 'aobama@whitehouse.com',
    'qq'                       => '100243',
    'openid'                   => 'baf04e6bbbd06f7b1a197d18ed53b7f1',
    'creid'                    => '110102199701011000',
    'outerid'                  => 'user123',
    'return_appid'             => 'wxcbda96de0b165486',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [异步声明式]
$instance->chain('v2/papay/h5entrustweb')->getAsync([
  'query' => [
    'appid'                    => 'wxcbda96de0b165486',
    'mch_id'                   => '1200009811',
    'plan_id'                  => '12535',
    'contract_code'            => '100000',
    'request_serial'           => '1000',
    'contract_display_account' => '微信代扣',
    'notify_url'               => 'https://weixin.qq.com',
    'version'                  => '1.0',
    'sign'                     => 'C380BEC2BFD727A4B6845133519F3AD6',
    'timestamp'                => '1414488825',
    'clientip'                 => '119.145.83.6',
    'deviceid'                 => 'baf04e6bbbd06f7b1a197d18ed53b7f1',
    'mobile'                   => '18933432355',
    'email'                    => 'aobama@whitehouse.com',
    'qq'                       => '100243',
    'openid'                   => 'baf04e6bbbd06f7b1a197d18ed53b7f1',
    'creid'                    => '110102199701011000',
    'outerid'                  => 'user123',
    'return_appid'             => 'wxcbda96de0b165486',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [异步属性式]
$instance['v2/papay/h5entrustweb']->getAsync([
  'query' => [
    'appid'                    => 'wxcbda96de0b165486',
    'mch_id'                   => '1200009811',
    'plan_id'                  => '12535',
    'contract_code'            => '100000',
    'request_serial'           => '1000',
    'contract_display_account' => '微信代扣',
    'notify_url'               => 'https://weixin.qq.com',
    'version'                  => '1.0',
    'sign'                     => 'C380BEC2BFD727A4B6845133519F3AD6',
    'timestamp'                => '1414488825',
    'clientip'                 => '119.145.83.6',
    'deviceid'                 => 'baf04e6bbbd06f7b1a197d18ed53b7f1',
    'mobile'                   => '18933432355',
    'email'                    => 'aobama@whitehouse.com',
    'qq'                       => '100243',
    'openid'                   => 'baf04e6bbbd06f7b1a197d18ed53b7f1',
    'creid'                    => '110102199701011000',
    'outerid'                  => 'user123',
    'return_appid'             => 'wxcbda96de0b165486',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v2->papay->h5entrustweb->get([
  'query' => [
    'appid'                    => 'wxcbda96de0b165486',
    'mch_id'                   => '1200009811',
    'plan_id'                  => '12535',
    'contract_code'            => '100000',
    'request_serial'           => '1000',
    'contract_display_account' => '微信代扣',
    'notify_url'               => 'https://weixin.qq.com',
    'version'                  => '1.0',
    'sign'                     => 'C380BEC2BFD727A4B6845133519F3AD6',
    'timestamp'                => '1414488825',
    'clientip'                 => '119.145.83.6',
    'deviceid'                 => 'baf04e6bbbd06f7b1a197d18ed53b7f1',
    'mobile'                   => '18933432355',
    'email'                    => 'aobama@whitehouse.com',
    'qq'                       => '100243',
    'openid'                   => 'baf04e6bbbd06f7b1a197d18ed53b7f1',
    'creid'                    => '110102199701011000',
    'outerid'                  => 'user123',
    'return_appid'             => 'wxcbda96de0b165486',
  ],
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

```php [同步声明式]
$response = $instance->chain('v2/papay/h5entrustweb')->get([
  'query' => [
    'appid'                    => 'wxcbda96de0b165486',
    'mch_id'                   => '1200009811',
    'plan_id'                  => '12535',
    'contract_code'            => '100000',
    'request_serial'           => '1000',
    'contract_display_account' => '微信代扣',
    'notify_url'               => 'https://weixin.qq.com',
    'version'                  => '1.0',
    'sign'                     => 'C380BEC2BFD727A4B6845133519F3AD6',
    'timestamp'                => '1414488825',
    'clientip'                 => '119.145.83.6',
    'deviceid'                 => 'baf04e6bbbd06f7b1a197d18ed53b7f1',
    'mobile'                   => '18933432355',
    'email'                    => 'aobama@whitehouse.com',
    'qq'                       => '100243',
    'openid'                   => 'baf04e6bbbd06f7b1a197d18ed53b7f1',
    'creid'                    => '110102199701011000',
    'outerid'                  => 'user123',
    'return_appid'             => 'wxcbda96de0b165486',
  ],
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

```php [同步属性式]
$response = $instance['v2/papay/h5entrustweb']->get([
  'query' => [
    'appid'                    => 'wxcbda96de0b165486',
    'mch_id'                   => '1200009811',
    'plan_id'                  => '12535',
    'contract_code'            => '100000',
    'request_serial'           => '1000',
    'contract_display_account' => '微信代扣',
    'notify_url'               => 'https://weixin.qq.com',
    'version'                  => '1.0',
    'sign'                     => 'C380BEC2BFD727A4B6845133519F3AD6',
    'timestamp'                => '1414488825',
    'clientip'                 => '119.145.83.6',
    'deviceid'                 => 'baf04e6bbbd06f7b1a197d18ed53b7f1',
    'mobile'                   => '18933432355',
    'email'                    => 'aobama@whitehouse.com',
    'qq'                       => '100243',
    'openid'                   => 'baf04e6bbbd06f7b1a197d18ed53b7f1',
    'creid'                    => '110102199701011000',
    'outerid'                  => 'user123',
    'return_appid'             => 'wxcbda96de0b165486',
  ],
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| return_code {data-required} | string | 返回状态码<br/>`SUCCESS` \| `FAIL` 枚举值之一
| return_msg | string | 返回信息

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/api/wxpay_v2/papay/chapter3_4.shtml)
