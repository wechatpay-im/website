---
title: H5纯签约
description: 该方式适用于手机、平板电脑等使用H5浏览器的设备场景使用微信签约扣款。商户在网站前端通过微信支付H5纯签约接口与用户签订委托扣款协议，再通过后台接口申请扣款来完成代扣交易。
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

::: warning :closed_lock_with_key: {.im-privated}

- 如果签约成功，微信会异步通知给商户（`notify_url`为通知路径），如果签约失败则不通知。
- 调用此接口后获得`redirect_url`，需要在前端跳转到`redirect_url`，在商户的前端页面`<head>`处需要添加声明`<meta name="referrer" content="no-referrer-when-downgrade">`
- 此外，不能使用`window.location.replace(redirect_url)`的方式跳转，而要通过`window.location.href = redirect_url`的方式跳转。
- 在`redirect_url`页面，会唤起微信。无论用户是否同意，`redirect_url`的页面会在3秒后自动回到`refer`页面。
- 如果获取的refer只有域名没有路径，那么签约完成后，需要用户手动回到浏览器。
- **特别提醒**：H5纯签约接口暂未对外开放，如有需要请咨询对接的业务人员，额外申请开通。

:::

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| nonceless {data-required} | `true` | 声明请求的`query`无随机字符串参数
| query | object {data-required data-tooltip="对应PHP的array"} | 声明请求的查询参数
| appid {data-required data-indent=1} | string | 应用ID
| mch_id {data-required data-indent=1} | string | 商户号
| sub_appid {data-indent=1} | string | 子商户应用ID
| sub_mch_id {data-required data-indent=1} | string | 子商户号
| plan_id {data-required data-indent=1} | string | 模板id
| contract_code {data-required data-indent=1} | string | 签约协议号
| request_serial {data-required data-indent=1} | integer | 请求序列号
| contract_display_account {data-required data-indent=1} | string | 用户账户展示名称
| notify_url {data-required data-indent=1} | string | 回调通知url
| version {data-required data-indent=1} | string | 版本号<br/>`1.0` 枚举值
| sign {data-required data-indent=1} | string | 签名
| sign_type {data-indent=1} | string | 签名类型<br/>`MD5` \| `HMAC-SHA256` 枚举值之一
| timestamp {data-required data-indent=1} | string | 时间戳
| clientip {data-required data-indent=1} | string | 客户端 IP
| deviceid {data-indent=1} | string | 设备ID
| mobile {data-indent=1} | string | 手机号
| email {data-indent=1} | string | 邮箱地址
| qq {data-indent=1} | string | QQ号
| openid {data-indent=1} | string | 微信openID
| creid {data-indent=1} | string | 身份证号
| outerid {data-indent=1} | string | 商户侧用户标识
| return_appid {data-indent=1} | string | 回调应用appid

{.im-table #request}

::: code-group

```php [异步纯链式]
use WeChatPay\Crypto\Hash;
use WeChatPay\Formatter;

$params = [
  'appid'                    => 'wxcbda96de0b165486',
  'mch_id'                   => '1200009811',
  'sub_appid'                => 'wxcbda96de0b165489',
  'sub_mch_id'               => '1900000109',
  'plan_id'                  => '12535',
  'contract_code'            => '100000',
  'request_serial'           => '1000',
  'contract_display_account' => '微信代扣',
  'notify_url'               => 'https://weixin.qq.com',
  'version'                  => '1.0',
  'sign_type'                => 'HMAC-SHA256',
  'timestamp'                => Formatter::timestamp(),
  'clientip'                 => '119.145.83.6',
  'deviceid'                 => 'baf04e6bbbd06f7b1a197d18ed53b7f1',
  'mobile'                   => '18933432355',
  'email'                    => 'aobama@whitehouse.com',
  'qq'                       => '100243',
  'openid'                   => 'baf04e6bbbd06f7b1a197d18ed53b7f1',
  'creid'                    => '110102199701011000',
  'outerid'                  => 'user123',
  'return_appid'             => 'wxcbda96de0b165486',
];
$params['sign'] = Hash::sign(
  Hash::ALGO_HMAC_SHA256,
  Formatter::queryStringLike(
    Formatter::ksort($params)
  ),
  $apiv2Key
);

$instance->v2->papay->partner->h5entrustweb->getAsync([
  'nonceless' => true,
  'query' => $params
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [异步声明式]
use WeChatPay\Crypto\Hash;
use WeChatPay\Formatter;

$params = [
  'appid'                    => 'wxcbda96de0b165486',
  'mch_id'                   => '1200009811',
  'sub_appid'                => 'wxcbda96de0b165489',
  'sub_mch_id'               => '1900000109',
  'plan_id'                  => '12535',
  'contract_code'            => '100000',
  'request_serial'           => '1000',
  'contract_display_account' => '微信代扣',
  'notify_url'               => 'https://weixin.qq.com',
  'version'                  => '1.0',
  'sign_type'                => 'HMAC-SHA256',
  'timestamp'                => Formatter::timestamp(),
  'clientip'                 => '119.145.83.6',
  'deviceid'                 => 'baf04e6bbbd06f7b1a197d18ed53b7f1',
  'mobile'                   => '18933432355',
  'email'                    => 'aobama@whitehouse.com',
  'qq'                       => '100243',
  'openid'                   => 'baf04e6bbbd06f7b1a197d18ed53b7f1',
  'creid'                    => '110102199701011000',
  'outerid'                  => 'user123',
  'return_appid'             => 'wxcbda96de0b165486',
];
$params['sign'] = Hash::sign(
  Hash::ALGO_HMAC_SHA256,
  Formatter::queryStringLike(
    Formatter::ksort($params)
  ),
  $apiv2Key
);

$instance->chain('v2/papay/partner/h5entrustweb')->getAsync([
  'nonceless' => true,
  'query' => $params
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [异步属性式]
use WeChatPay\Crypto\Hash;
use WeChatPay\Formatter;

$params = [
  'appid'                    => 'wxcbda96de0b165486',
  'mch_id'                   => '1200009811',
  'sub_appid'                => 'wxcbda96de0b165489',
  'sub_mch_id'               => '1900000109',
  'plan_id'                  => '12535',
  'contract_code'            => '100000',
  'request_serial'           => '1000',
  'contract_display_account' => '微信代扣',
  'notify_url'               => 'https://weixin.qq.com',
  'version'                  => '1.0',
  'sign_type'                => 'HMAC-SHA256',
  'timestamp'                => Formatter::timestamp(),
  'clientip'                 => '119.145.83.6',
  'deviceid'                 => 'baf04e6bbbd06f7b1a197d18ed53b7f1',
  'mobile'                   => '18933432355',
  'email'                    => 'aobama@whitehouse.com',
  'qq'                       => '100243',
  'openid'                   => 'baf04e6bbbd06f7b1a197d18ed53b7f1',
  'creid'                    => '110102199701011000',
  'outerid'                  => 'user123',
  'return_appid'             => 'wxcbda96de0b165486',
];
$params['sign'] = Hash::sign(
  Hash::ALGO_HMAC_SHA256,
  Formatter::queryStringLike(
    Formatter::ksort($params)
  ),
  $apiv2Key
);

$instance['v2/papay/partner/h5entrustweb']->getAsync([
  'nonceless' => true,
  'query' => $params
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [同步纯链式]
use WeChatPay\Crypto\Hash;
use WeChatPay\Formatter;

$params = [
  'appid'                    => 'wxcbda96de0b165486',
  'mch_id'                   => '1200009811',
  'sub_appid'                => 'wxcbda96de0b165489',
  'sub_mch_id'               => '1900000109',
  'plan_id'                  => '12535',
  'contract_code'            => '100000',
  'request_serial'           => '1000',
  'contract_display_account' => '微信代扣',
  'notify_url'               => 'https://weixin.qq.com',
  'version'                  => '1.0',
  'sign_type'                => 'HMAC-SHA256',
  'timestamp'                => Formatter::timestamp(),
  'clientip'                 => '119.145.83.6',
  'deviceid'                 => 'baf04e6bbbd06f7b1a197d18ed53b7f1',
  'mobile'                   => '18933432355',
  'email'                    => 'aobama@whitehouse.com',
  'qq'                       => '100243',
  'openid'                   => 'baf04e6bbbd06f7b1a197d18ed53b7f1',
  'creid'                    => '110102199701011000',
  'outerid'                  => 'user123',
  'return_appid'             => 'wxcbda96de0b165486',
];
$params['sign'] = Hash::sign(
  Hash::ALGO_HMAC_SHA256,
  Formatter::queryStringLike(
    Formatter::ksort($params)
  ),
  $apiv2Key
);

$response = $instance->v2->papay->partner->h5entrustweb->get([
  'nonceless' => true,
  'query' => $params
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

```php [同步声明式]
use WeChatPay\Crypto\Hash;
use WeChatPay\Formatter;

$params = [
  'appid'                    => 'wxcbda96de0b165486',
  'mch_id'                   => '1200009811',
  'sub_appid'                => 'wxcbda96de0b165489',
  'sub_mch_id'               => '1900000109',
  'plan_id'                  => '12535',
  'contract_code'            => '100000',
  'request_serial'           => '1000',
  'contract_display_account' => '微信代扣',
  'notify_url'               => 'https://weixin.qq.com',
  'version'                  => '1.0',
  'sign_type'                => 'HMAC-SHA256',
  'timestamp'                => Formatter::timestamp(),
  'clientip'                 => '119.145.83.6',
  'deviceid'                 => 'baf04e6bbbd06f7b1a197d18ed53b7f1',
  'mobile'                   => '18933432355',
  'email'                    => 'aobama@whitehouse.com',
  'qq'                       => '100243',
  'openid'                   => 'baf04e6bbbd06f7b1a197d18ed53b7f1',
  'creid'                    => '110102199701011000',
  'outerid'                  => 'user123',
  'return_appid'             => 'wxcbda96de0b165486',
];
$params['sign'] = Hash::sign(
  Hash::ALGO_HMAC_SHA256,
  Formatter::queryStringLike(
    Formatter::ksort($params)
  ),
  $apiv2Key
);

$response = $instance->chain('v2/papay/partner/h5entrustweb')->get([
  'nonceless' => true,
  'query' => $params
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

```php [同步属性式]
use WeChatPay\Crypto\Hash;
use WeChatPay\Formatter;

$params = [
  'appid'                    => 'wxcbda96de0b165486',
  'mch_id'                   => '1200009811',
  'sub_appid'                => 'wxcbda96de0b165489',
  'sub_mch_id'               => '1900000109',
  'plan_id'                  => '12535',
  'contract_code'            => '100000',
  'request_serial'           => '1000',
  'contract_display_account' => '微信代扣',
  'notify_url'               => 'https://weixin.qq.com',
  'version'                  => '1.0',
  'sign_type'                => 'HMAC-SHA256',
  'timestamp'                => Formatter::timestamp(),
  'clientip'                 => '119.145.83.6',
  'deviceid'                 => 'baf04e6bbbd06f7b1a197d18ed53b7f1',
  'mobile'                   => '18933432355',
  'email'                    => 'aobama@whitehouse.com',
  'qq'                       => '100243',
  'openid'                   => 'baf04e6bbbd06f7b1a197d18ed53b7f1',
  'creid'                    => '110102199701011000',
  'outerid'                  => 'user123',
  'return_appid'             => 'wxcbda96de0b165486',
];
$params['sign'] = Hash::sign(
  Hash::ALGO_HMAC_SHA256,
  Formatter::queryStringLike(
    Formatter::ksort($params)
  ),
  $apiv2Key
);

$response = $instance['v2/papay/partner/h5entrustweb']->get([
  'nonceless' => true,
  'query' => $params
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| return_code {data-required} | string | 返回状态码<br/>`SUCCESS` \| `FAIL` 枚举值之一
| return_msg | string | 返回信息
| result_code {data-required} | string | 业务结果<br/>`SUCCESS` \| `FAIL` 枚举值之一
| result_msg | string | 业务结果描述
| redirect_url {data-required} | string | 跳转URL，有效期为10分钟

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v2/partner/4011988368)
