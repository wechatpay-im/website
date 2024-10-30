---
title: 获取出租车公司商户信息
description: 获取出租车公司商户信息
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| company_mchid | string | 商户号
| query | object | 声明请求的查询参数
| region_id {data-indent=1} | integer | 行政区划ID

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->taxiInvoice->taxiCompanies->_company_mchid_->getAsync([
  'company_mchid' => '1900000109',
  'query' => [
    'region_id' => 510100,
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/taxi-invoice/taxi-companies/{company_mchid}')->getAsync([
  'company_mchid' => '1900000109',
  'query' => [
    'region_id' => 510100,
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/taxi-invoice/taxi-companies/{company_mchid}']->getAsync([
  'company_mchid' => '1900000109',
  'query' => [
    'region_id' => 510100,
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->taxiInvoice->taxiCompanies->_company_mchid_->get([
  'company_mchid' => '1900000109',
  'query' => [
    'region_id' => 510100,
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/taxi-invoice/taxi-companies/{company_mchid}')->get([
  'company_mchid' => '1900000109',
  'query' => [
    'region_id' => 510100,
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/taxi-invoice/taxi-companies/{company_mchid}']->get([
  'company_mchid' => '1900000109',
  'query' => [
    'region_id' => 510100,
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| company_mchid | string | 商户号
| enterprise_type | string | 企业类型
| company_name | string | 公司名称
| short_name | string | 公司简称
| tax_id | string | 税号
| address | string | 公司地址
| phone | string | 公司电话
| bank_name | string | 开户行
| bank_account | string | 银行账号
| legal_person | string | 企业法人姓名
| invoice_mode | string | 开票渠道
| region_id | integer | 行政区划代码

{.im-table #response}

参阅 [官方文档](hhttps://pay.weixin.qq.com/docs/partner/apis/taxi-fapiao/taxi-company/query-taxi-company.html)