---
title: 获取商户开票基础信息
description: 查询商户在微信支付商户平台中配置的电子发票开票基础信息。
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| query {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的查询参数
| sub_mchid {data-required data-indent=1} | string | 子商户号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->newTaxControlFapiao->merchant->baseInformation->getAsync([
  'query' => [
    'sub_mchid' => '1900000109',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/new-tax-control-fapiao/merchant/base-information')->getAsync([
  'query' => [
    'sub_mchid' => '1900000109',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/new-tax-control-fapiao/merchant/base-information']->getAsync([
  'query' => [
    'sub_mchid' => '1900000109',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->newTaxControlFapiao->merchant->baseInformation->get([
  'query' => [
    'sub_mchid' => '1900000109',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/new-tax-control-fapiao/merchant/base-information')->get([
  'query' => [
    'sub_mchid' => '1900000109',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/new-tax-control-fapiao/merchant/base-information']->get([
  'query' => [
    'sub_mchid' => '1900000109',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| seller_information {data-required} | object {data-tooltip="对应PHP的array"} | 销售方信息
| name {data-required data-indent=1} | string | 名称
| taxpayer_id {data-required data-indent=1} | string | 纳税人识别号
| address {data-required data-indent=1} | string | 地址
| telephone {data-indent=1} | string | 电话
| bank_name {data-indent=1} | string | 开户银行
| bank_account {data-indent=1} | string | 银行账号
| extra_information {data-required} | object {data-tooltip="对应PHP的array"} | 附加信息
| payee {data-indent=1} | string | 收款人
| reviewer {data-indent=1} | string | 复核人
| drawer {data-required data-indent=1} | string | 开票人

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/merchant/4012538180) [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4012474053)
