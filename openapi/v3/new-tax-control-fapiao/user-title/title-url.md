---
title: 获取抬头填写链接
description: 非微信支付场景中，商户需先调用本接口获取抬头填写链接，供用户填写发票抬头。当用户提交抬头信息后，微信支付会根据商户配置的回调地址进行回调通知。 注意：获取到的抬头填写链接有30分钟的有效期，若在用户填写发票抬头之前链接过期，商户需要重新获取（此时无需更换发票申请单号）
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| query {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的查询参数
| sub_mchid {data-indent=1} | string | 子商户号
| fapiao_apply_id {data-required data-indent=1} | string | 发票申请单号
| source {data-required data-indent=1} | string | 开票来源
| appid {data-required data-indent=1} | string | 商户AppID
| openid {data-required data-indent=1} | string | 用户OpenID
| total_amount {data-required data-indent=1} | integer | 总金额
| seller_name {data-indent=1} | string | 销售方名称
| show_phone_cell {data-indent=1} | boolean | 是否需要展示手机号填写栏
| must_input_phone {data-indent=1} | boolean | 用户是否必须填写手机号
| show_email_cell {data-indent=1} | boolean | 是否需要展示邮箱地址填写栏
| must_input_email {data-indent=1} | boolean | 用户是否必须填写邮箱地址

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->newTaxControlFapiao->userTitle->titleUrl->getAsync([
  'query' => [
    'sub_mchid' => '1900000109',
    'fapiao_apply_id' => 'fapiao_20200701_123456',
    'source' => 'WEB',
    'appid' => 'wxb1170446a4c0a5a2',
    'openid' => 'plN5twRbHym_j-QcqCzstl0HmwEs',
    'total_amount' => 382895,
    'seller_name' => '深圳市南山区测试商户',
    'show_phone_cell' => true,
    'must_input_phone' => true,
    'show_email_cell' => true,
    'must_input_email' => true,
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/new-tax-control-fapiao/user-title/title-url')->getAsync([
  'query' => [
    'sub_mchid' => '1900000109',
    'fapiao_apply_id' => 'fapiao_20200701_123456',
    'source' => 'WEB',
    'appid' => 'wxb1170446a4c0a5a2',
    'openid' => 'plN5twRbHym_j-QcqCzstl0HmwEs',
    'total_amount' => 382895,
    'seller_name' => '深圳市南山区测试商户',
    'show_phone_cell' => true,
    'must_input_phone' => true,
    'show_email_cell' => true,
    'must_input_email' => true,
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/new-tax-control-fapiao/user-title/title-url']->getAsync([
  'query' => [
    'sub_mchid' => '1900000109',
    'fapiao_apply_id' => 'fapiao_20200701_123456',
    'source' => 'WEB',
    'appid' => 'wxb1170446a4c0a5a2',
    'openid' => 'plN5twRbHym_j-QcqCzstl0HmwEs',
    'total_amount' => 382895,
    'seller_name' => '深圳市南山区测试商户',
    'show_phone_cell' => true,
    'must_input_phone' => true,
    'show_email_cell' => true,
    'must_input_email' => true,
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->newTaxControlFapiao->userTitle->titleUrl->get([
  'query' => [
    'sub_mchid' => '1900000109',
    'fapiao_apply_id' => 'fapiao_20200701_123456',
    'source' => 'WEB',
    'appid' => 'wxb1170446a4c0a5a2',
    'openid' => 'plN5twRbHym_j-QcqCzstl0HmwEs',
    'total_amount' => 382895,
    'seller_name' => '深圳市南山区测试商户',
    'show_phone_cell' => true,
    'must_input_phone' => true,
    'show_email_cell' => true,
    'must_input_email' => true,
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/new-tax-control-fapiao/user-title/title-url')->get([
  'query' => [
    'sub_mchid' => '1900000109',
    'fapiao_apply_id' => 'fapiao_20200701_123456',
    'source' => 'WEB',
    'appid' => 'wxb1170446a4c0a5a2',
    'openid' => 'plN5twRbHym_j-QcqCzstl0HmwEs',
    'total_amount' => 382895,
    'seller_name' => '深圳市南山区测试商户',
    'show_phone_cell' => true,
    'must_input_phone' => true,
    'show_email_cell' => true,
    'must_input_email' => true,
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/new-tax-control-fapiao/user-title/title-url']->get([
  'query' => [
    'sub_mchid' => '1900000109',
    'fapiao_apply_id' => 'fapiao_20200701_123456',
    'source' => 'WEB',
    'appid' => 'wxb1170446a4c0a5a2',
    'openid' => 'plN5twRbHym_j-QcqCzstl0HmwEs',
    'total_amount' => 382895,
    'seller_name' => '深圳市南山区测试商户',
    'show_phone_cell' => true,
    'must_input_phone' => true,
    'show_email_cell' => true,
    'must_input_email' => true,
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| title_url | string | 抬头填写链接
| miniprogram_appid | string | 抬头填写小程序AppID
| miniprogram_path | string | 抬头填写小程序页面路径
| miniprogram_user_name | string | 抬头填写小程序的用户名

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/new-tax-control-fapiao/chapter3_5.shtml)
