---
title: 授权获取code
description: 使用标准OAuth2.0协议接入微信支付，在用户授权的条件下，将可以做到访问用户资源，使用接口调用用户功能（如获取用户实名信息等）
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

::: danger :closed_lock_with_key: {.im-privated}

因为监管原因，本接口服务已于 `2021.11.10` (北京时间)停止开放，文档仅做留存参考。

:::

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| base_uri {data-required} | string | 接入点<br/>固定值`https://payapp.weixin.qq.com/`
| query {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的查询参数
| mch_id {data-required data-indent=1} | string | 商户号
| appid {data-required data-indent=1} | string | 应用ID
| redirect_uri {data-required data-indent=1} | string | 重定向地址，需要urlencode，需在支付安全域下(商户平台上配置“支付授权目录”)。
| response_type {data-required data-indent=1} | string | 固定填`code`<br/>`code` 枚举值
| scope {data-required data-indent=1} | string | 应用授权作用域<br/>`pay_identity` \| `pay_realname` 枚举值之一
| state {data-required data-indent=1} | string | 随机字符串，回调时将带上该参数
| fragment {data-required} | string | 固定填`#wechat_redirect`

{.im-table #request}

::: code-group

```php [标准Ps7]
$entry = new \GuzzleHttp\Psr7\Uri('https://payapp.weixin.qq.com/appauth/authindex');

$query = \GuzzleHttp\Psr7\Query::build([
    'mch_id'        => '1230000109',
    'appid'         => 'wxd678efh567hg6787',
    'redirect_uri'  => 'https://weixin.qq.com/i-am-a-fake-uri',
    'response_type' => 'code',
    'scope'         => 'pay_identity',
    'state'         => \WeChatPay\Formatter::nonce(),
]);

// 30x返回此变量即可
$uri = $entry->withQuery($query)->withFragment('#wechat_redirect');
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| `30x`跳转(无实际返回信息) {align=center colspan=3}

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/api/realnameauth.php?chapter=60_1&index=2)
