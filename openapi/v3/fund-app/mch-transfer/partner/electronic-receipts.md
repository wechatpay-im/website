---
title: 申请单笔转账电子回单
description: 商户可以 指定商户单号通过该接口申请 商家转账用户确认模式转账单据 对应的电子回单。微信支付会在校验满足回单申请条件后受理回单的申请，商户后续可以通过电子回单查询接口查询回单处理进度。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| sub_mchid {data-required data-indent=1} | string | 二级商户号
| out_bill_no {data-required data-indent=1} | string | 商户转账单号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->fundApp->mchTransfer->partner->electronicReceipts->postAsync([
  'json' => [
    'sub_mchid'   => '1900001121',
    'out_bill_no' => 'plfk2020042013',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/fund-app/mch-transfer/partner/electronic-receipts')->postAsync([
  'json' => [
    'sub_mchid'   => '1900001121',
    'out_bill_no' => 'plfk2020042013',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/fund-app/mch-transfer/partner/electronic-receipts']->postAsync([
  'json' => [
    'sub_mchid'   => '1900001121',
    'out_bill_no' => 'plfk2020042013',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->fundApp->mchTransfer->partner->electronicReceipts->post([
  'json' => [
    'sub_mchid'   => '1900001121',
    'out_bill_no' => 'plfk2020042013',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/fund-app/mch-transfer/partner/electronic-receipts')->post([
  'json' => [
    'sub_mchid'   => '1900001121',
    'out_bill_no' => 'plfk2020042013',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/fund-app/mch-transfer/partner/electronic-receipts']->post([
  'json' => [
    'sub_mchid'   => '1900001121',
    'out_bill_no' => 'plfk2020042013',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| sub_mchid {data-required} | string | 二级商户号
| out_bill_no {data-required} | string | 商户转账单号
| state {data-required} | string | 申请单状态<br/>`GENERATING` \| `FINISHED` 枚举值之一
| create_time {data-required} | string | 申请单创建时间
| update_time | string | 申请单更新时间
| hash_type | string | 回单文件摘要类型<br/>`SM3` 枚举值
| hash_value | string | 回单文件摘要值
| download_url | string | 回单文件下载地址

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4016315516)
