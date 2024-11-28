---
title: 获取商品和服务税收分类对照表
description: 查询商户在微信支付商户平台中配置的电子发票税收分类编码对照表。
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| query {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的查询参数
| sub_mchid {data-indent=1} | string | 子商户号
| offset {data-required data-indent=1} | integer | 本次查询的起始位置
| limit {data-required data-indent=1} | integer | 本次查询的最大数量

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->newTaxControlFapiao->merchant->taxCodes->getAsync([
  'query' => [
    'sub_mchid' => '1900000109',
    'offset' => 0,
    'limit' => 5,
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/new-tax-control-fapiao/merchant/tax-codes')->getAsync([
  'query' => [
    'sub_mchid' => '1900000109',
    'offset' => 0,
    'limit' => 5,
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/new-tax-control-fapiao/merchant/tax-codes']->getAsync([
  'query' => [
    'sub_mchid' => '1900000109',
    'offset' => 0,
    'limit' => 5,
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->newTaxControlFapiao->merchant->taxCodes->get([
  'query' => [
    'sub_mchid' => '1900000109',
    'offset' => 0,
    'limit' => 5,
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/new-tax-control-fapiao/merchant/tax-codes')->get([
  'query' => [
    'sub_mchid' => '1900000109',
    'offset' => 0,
    'limit' => 5,
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/new-tax-control-fapiao/merchant/tax-codes']->get([
  'query' => [
    'sub_mchid' => '1900000109',
    'offset' => 0,
    'limit' => 5,
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| offset {data-required} | integer | 本次查询的起始位置
| limit {data-required} | integer | 本次查询的最大数量
| links | object {data-tooltip="对应PHP的array"} | 相关链接
| next {data-indent=1} | string | 下一页链接
| prev {data-indent=1} | string | 上一页链接
| self {data-indent=1} | string | 当前链接
| data {data-required} | object[] {data-tooltip="对应PHP的array"} | 本次查询到的数据
| goods_name {data-required data-indent=1} | string | 由商户自定义的货物或应税劳务、服务名称
| goods_id {data-indent=1} | number | 企业侧维护的货物或应税劳务、服务编码
| goods_category {data-indent=1} | string | 税局侧规定的货物或应税劳务、服务分类名称
| tax_code {data-required data-indent=1} | string | 货物或应税劳务、服务编码
| tax_rate {data-required data-indent=1} | integer | 税率
| tax_prefer_mark {data-required data-indent=1} | string | 税收优惠政策标识
| total_count {data-required} | integer | 总记录数

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/new-tax-control-fapiao/chapter3_2.shtml)
