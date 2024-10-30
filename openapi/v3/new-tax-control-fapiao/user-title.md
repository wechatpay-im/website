---
title: 获取用户填写的抬头
description: 商户调用本接口，检查用户是否已完成抬头填写，并获取用户填写的抬头信息。在微信支付场景下，若该笔订单在下单时指定在支付凭证上展示开票入口，则也可以调用本接口查询用户填写的抬头。
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| query | object | 声明请求的查询参数
| sub_mchid {data-indent=1} | string | 子商户号
| scene {data-indent=1} | string | 开票场景
| fapiao_apply_id {data-indent=1} | string | 发票申请单号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->newTaxControlFapiao->userTitle->getAsync([
  'query' => [
    'sub_mchid' => '1900000109',
    'scene' => 'WITH_WECHATPAY',
    'fapiao_apply_id' => '4200000444201910177461284488',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/new-tax-control-fapiao/user-title')->getAsync([
  'query' => [
    'sub_mchid' => '1900000109',
    'scene' => 'WITH_WECHATPAY',
    'fapiao_apply_id' => '4200000444201910177461284488',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/new-tax-control-fapiao/user-title']->getAsync([
  'query' => [
    'sub_mchid' => '1900000109',
    'scene' => 'WITH_WECHATPAY',
    'fapiao_apply_id' => '4200000444201910177461284488',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->newTaxControlFapiao->userTitle->get([
  'query' => [
    'sub_mchid' => '1900000109',
    'scene' => 'WITH_WECHATPAY',
    'fapiao_apply_id' => '4200000444201910177461284488',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/new-tax-control-fapiao/user-title')->get([
  'query' => [
    'sub_mchid' => '1900000109',
    'scene' => 'WITH_WECHATPAY',
    'fapiao_apply_id' => '4200000444201910177461284488',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/new-tax-control-fapiao/user-title']->get([
  'query' => [
    'sub_mchid' => '1900000109',
    'scene' => 'WITH_WECHATPAY',
    'fapiao_apply_id' => '4200000444201910177461284488',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| type | string | 购买方类型
| name | string | 名称
| taxpayer_id | string | 纳税人识别号
| address | string | 地址
| telephone | string | 电话
| bank_name | string | 开户银行
| bank_account | string | 银行账号
| phone | string | 手机号
| email | string | 邮箱地址

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/new-tax-control-fapiao/chapter3_6.shtml)
