---
title: 申请资金账单
description: 微信支付按天提供微信支付账户的资金流水账单文件，商户可以通过该接口获取账单文件的下载地址。文件内包含该账户资金操作相关的业务单号、收支金额、记账时间等信息，供商户进行核对。
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| query {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的查询参数
| bill_date {data-required data-indent=1} | string | 账单日期
| sub_mchid {data-indent=1} | string | 二级商户号
| account_type {data-indent=1} | string | 资金账户类型<br/>`BASIC` \| `OPERATION` \| `FEES` 枚举值之一
| tar_type {data-indent=1} | string | 压缩类型<br/>`GZIP` 枚举值

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->bill->fundflowbill->getAsync([
  'query' => [
    'bill_date'    => '2019-06-11',
    'sub_mchid'    => '',
    'account_type' => 'BASIC',
    'tar_type'     => 'GZIP',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/bill/fundflowbill')->getAsync([
  'query' => [
    'bill_date'    => '2019-06-11',
    'sub_mchid'    => '',
    'account_type' => 'BASIC',
    'tar_type'     => 'GZIP',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/bill/fundflowbill']->getAsync([
  'query' => [
    'bill_date'    => '2019-06-11',
    'sub_mchid'    => '',
    'account_type' => 'BASIC',
    'tar_type'     => 'GZIP',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->bill->fundflowbill->get([
  'query' => [
    'bill_date'    => '2019-06-11',
    'sub_mchid'    => '',
    'account_type' => 'BASIC',
    'tar_type'     => 'GZIP',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/bill/fundflowbill')->get([
  'query' => [
    'bill_date'    => '2019-06-11',
    'sub_mchid'    => '',
    'account_type' => 'BASIC',
    'tar_type'     => 'GZIP',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/bill/fundflowbill']->get([
  'query' => [
    'bill_date'    => '2019-06-11',
    'sub_mchid'    => '',
    'account_type' => 'BASIC',
    'tar_type'     => 'GZIP',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| hash_type {data-required} | string | 哈希类型
| hash_value {data-required} | string | 哈希值
| download_url {data-required} | string | 账单下载地址

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/merchant/4012791867) [官方文档](https://pay.weixin.qq.com/doc/v3/merchant/4013070400) [官方文档](https://pay.weixin.qq.com/doc/v3/merchant/4012810609) [官方文档](https://pay.weixin.qq.com/doc/v3/merchant/4012791888) [官方文档](https://pay.weixin.qq.com/doc/v3/merchant/4012791908) [官方文档](https://pay.weixin.qq.com/doc/v3/merchant/4012556748) [官方文档](https://pay.weixin.qq.com/doc/v3/merchant/4013421185) [官方文档](https://pay.weixin.qq.com/doc/v3/merchant/4013421284) [官方文档](https://pay.weixin.qq.com/doc/v3/merchant/4013421365) [官方文档](https://pay.weixin.qq.com/doc/v3/merchant/4013421456) [官方文档](https://pay.weixin.qq.com/doc/v3/merchant/4013071235) [官方文档](https://pay.weixin.qq.com/doc/v3/merchant/4012551886) [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4012739125) [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4013080243) [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4012759690) [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4012759741) [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4012760136) [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4012760229) [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4013462134) [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4013462202) [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4013462358) [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4013462607) [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4013080596) [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4012709668) [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4012760535) [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4012886292) [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4012760672)
