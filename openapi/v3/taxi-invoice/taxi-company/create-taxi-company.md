---
title: 新增出租车公司
description: 新增出租车公司，主要用于服务商绑定特约商户，为出租车公司开通电子发票功能，提交开票信息等
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| json | object | 声明请求的`JSON`数据结构
| company_name {data-indent=1} | string | 公司名称
| tax_id {data-indent=1} | string | 税号
| address {data-indent=1} | string | 公司地址
| phone {data-indent=1} | string | 公司电话
| bank_name {data-indent=1} | string | 开户行
| bank_account {data-indent=1} | string | 银行账号
| invoice_mode {data-indent=1} | string | 开票渠道
| legal_person {data-indent=1} | string | 企业法人姓名
| short_name {data-indent=1} | string | 公司简称
| region_id {data-indent=1} | integer | 行政区划ID
| enterprise_type {data-indent=1} | string | 企业类型

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->taxiInvoice->taxiCompany->createTaxiCompany->postAsync([
  'json' => [
    'company_name' => '深圳市未来有限公司',
    'tax_id' => '12345678901234567J',
    'address' => '广东省深圳市南山区高新科技园科技中一路腾讯大厦',
    'phone' => '075586013388',
    'bank_name' => '中国工商银行南山支行',
    'bank_account' => '12345678901234',
    'invoice_mode' => 'JIAO_WEI',
    'legal_person' => '张三',
    'short_name' => '深圳未来',
    'region_id' => 510100,
    'enterprise_type' => 'ENTERPRISE',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/taxi-invoice/taxi-company/create-taxi-company')->postAsync([
  'json' => [
    'company_name' => '深圳市未来有限公司',
    'tax_id' => '12345678901234567J',
    'address' => '广东省深圳市南山区高新科技园科技中一路腾讯大厦',
    'phone' => '075586013388',
    'bank_name' => '中国工商银行南山支行',
    'bank_account' => '12345678901234',
    'invoice_mode' => 'JIAO_WEI',
    'legal_person' => '张三',
    'short_name' => '深圳未来',
    'region_id' => 510100,
    'enterprise_type' => 'ENTERPRISE',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/taxi-invoice/taxi-company/create-taxi-company']->postAsync([
  'json' => [
    'company_name' => '深圳市未来有限公司',
    'tax_id' => '12345678901234567J',
    'address' => '广东省深圳市南山区高新科技园科技中一路腾讯大厦',
    'phone' => '075586013388',
    'bank_name' => '中国工商银行南山支行',
    'bank_account' => '12345678901234',
    'invoice_mode' => 'JIAO_WEI',
    'legal_person' => '张三',
    'short_name' => '深圳未来',
    'region_id' => 510100,
    'enterprise_type' => 'ENTERPRISE',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->taxiInvoice->taxiCompany->createTaxiCompany->post([
  'json' => [
    'company_name' => '深圳市未来有限公司',
    'tax_id' => '12345678901234567J',
    'address' => '广东省深圳市南山区高新科技园科技中一路腾讯大厦',
    'phone' => '075586013388',
    'bank_name' => '中国工商银行南山支行',
    'bank_account' => '12345678901234',
    'invoice_mode' => 'JIAO_WEI',
    'legal_person' => '张三',
    'short_name' => '深圳未来',
    'region_id' => 510100,
    'enterprise_type' => 'ENTERPRISE',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/taxi-invoice/taxi-company/create-taxi-company')->post([
  'json' => [
    'company_name' => '深圳市未来有限公司',
    'tax_id' => '12345678901234567J',
    'address' => '广东省深圳市南山区高新科技园科技中一路腾讯大厦',
    'phone' => '075586013388',
    'bank_name' => '中国工商银行南山支行',
    'bank_account' => '12345678901234',
    'invoice_mode' => 'JIAO_WEI',
    'legal_person' => '张三',
    'short_name' => '深圳未来',
    'region_id' => 510100,
    'enterprise_type' => 'ENTERPRISE',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/taxi-invoice/taxi-company/create-taxi-company']->post([
  'json' => [
    'company_name' => '深圳市未来有限公司',
    'tax_id' => '12345678901234567J',
    'address' => '广东省深圳市南山区高新科技园科技中一路腾讯大厦',
    'phone' => '075586013388',
    'bank_name' => '中国工商银行南山支行',
    'bank_account' => '12345678901234',
    'invoice_mode' => 'JIAO_WEI',
    'legal_person' => '张三',
    'short_name' => '深圳未来',
    'region_id' => 510100,
    'enterprise_type' => 'ENTERPRISE',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| mchid | string | 商户号
| company_name | string | 公司名称

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/docs/partner/apis/taxi-fapiao/taxi-company/create-taxi-company.html)
