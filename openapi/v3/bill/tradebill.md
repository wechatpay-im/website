---
title: 申请交易账单
description: 微信支付按天提供交易账单文件，商户可以通过该接口获取账单文件的下载地址。文件内包含交易相关的金额、时间、营销等信息，供商户核对订单、退款、银行到账等情况。
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| query {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的查询参数
| bill_date {data-required data-indent=1} | string | 账单日期
| sub_mchid {data-indent=1} | string | 二级商户号
| bill_type {data-indent=1} | string | 账单类型<br/>`ALL` \| `SUCCESS` \| `REFUND` \| `RECHARGE_REFUND` \| `ALL_SPECIAL` \| `SUC_SPECIAL` \| `REF_SPECIAL` 枚举值之一
| tar_type {data-indent=1} | string | 压缩类型<br/>`GZIP` 枚举值

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->bill->tradebill->getAsync([
  'query' => [
    'bill_date' => '2019-06-11',
    'sub_mchid' => '19000000001',
    'bill_type' => 'ALL',
    'tar_type'  => 'GZIP',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/bill/tradebill')->getAsync([
  'query' => [
    'bill_date' => '2019-06-11',
    'sub_mchid' => '19000000001',
    'bill_type' => 'ALL',
    'tar_type'  => 'GZIP',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/bill/tradebill']->getAsync([
  'query' => [
    'bill_date' => '2019-06-11',
    'sub_mchid' => '19000000001',
    'bill_type' => 'ALL',
    'tar_type'  => 'GZIP',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->bill->tradebill->get([
  'query' => [
    'bill_date' => '2019-06-11',
    'sub_mchid' => '19000000001',
    'bill_type' => 'ALL',
    'tar_type'  => 'GZIP',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/bill/tradebill')->get([
  'query' => [
    'bill_date' => '2019-06-11',
    'sub_mchid' => '19000000001',
    'bill_type' => 'ALL',
    'tar_type'  => 'GZIP',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/bill/tradebill']->get([
  'query' => [
    'bill_date' => '2019-06-11',
    'sub_mchid' => '19000000001',
    'bill_type' => 'ALL',
    'tar_type'  => 'GZIP',
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

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/merchant/4012791866) [官方文档](https://pay.weixin.qq.com/doc/v3/merchant/4013070395) [官方文档](https://pay.weixin.qq.com/doc/v3/merchant/4012810606) [官方文档](https://pay.weixin.qq.com/doc/v3/merchant/4012791887) [官方文档](https://pay.weixin.qq.com/doc/v3/merchant/4012791907) [官方文档](https://pay.weixin.qq.com/doc/v3/merchant/4012556692) [官方文档](https://pay.weixin.qq.com/doc/v3/merchant/4013421176) [官方文档](https://pay.weixin.qq.com/doc/v3/merchant/4013421277) [官方文档](https://pay.weixin.qq.com/doc/v3/merchant/4013421361) [官方文档](https://pay.weixin.qq.com/doc/v3/merchant/4013421450) [官方文档](https://pay.weixin.qq.com/doc/v3/merchant/4013071227) [官方文档](https://pay.weixin.qq.com/doc/v3/merchant/4012551932) [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4012739068) [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4013080242) [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4012759683) [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4012759737) [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4012760132) [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4012760228) [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4013462129) [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4013462197) [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4013462343) [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4013462604) [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4013080595) [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4012709595) [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4012760532) [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4012886283) [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4012760667)
