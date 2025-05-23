---
title: 公众号纯签约
description: 商户可以通过请求此接口唤起微信委托代扣的页面。
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| query | object {data-required data-tooltip="对应PHP的array"} | 声明请求的查询参数
| appid {data-required data-indent=1} | string | 应用ID
| mch_id {data-required data-indent=1} | string | 商户号
| plan_id {data-required data-indent=1} | integer | 模板id
| contract_code {data-required data-indent=1} | string | 签约协议号
| request_serial {data-required data-indent=1} | integer | 请求序列号
| contract_display_account {data-required data-indent=1} | string | 用户账户展示名称
| notify_url {data-required data-indent=1} | string | 回调通知url
| version {data-required data-indent=1} | string | 版本号<br/>`1.0` 枚举值
| sign {data-required data-indent=1} | string | 签名
| timestamp {data-required data-indent=1} | string | 时间戳
| return_web {data-indent=1} | integer | 返回web<br/>`1` 枚举值
| fragment {data-required} | string | 固定填`#wechat_redirect`

{.im-table #request}

::: code-group

```php [标准PSR7]
use WeChatPay\Crypto\Hash;
use WeChatPay\Formatter;
use GuzzleHttp\Psr7\Uri;
use GuzzleHttp\Psr7\Query;

$params =[
  'appid'                    => 'wxcbda96de0b165486',
  'mch_id'                   => '1200009811',
  'plan_id'                  => '12535',
  'contract_code'            => '100000',
  'request_serial'           => '1000',
  'contract_display_account' => '微信代扣',
  'notify_url'               => 'https://weixin.qq.com',
  'version'                  => '1.0',
  'timestamp'                => Formatter::timestamp(),
  'return_web'               => '1',
];
$params['sign'] = Hash::sign(
  Hash::ALGO_MD5,
  Formatter::queryStringLike(
    Formatter::ksort($params)
  ),
  $apiv2Key
);

$entry = new Uri('https://api.weixin.qq.com/papay/entrustweb');
$query = Query::build($params);

// 30x返回此变量即可
$uri = $entry->withQuery($query)->withFragment('#wechat_redirect');
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| `30x`跳转(无实际返回信息) {align=center colspan=3}

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/api/wxpay_v2/papay/chapter3_1.shtml)
