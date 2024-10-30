---
title: 商户单号查询转账单
description: 根据商户单号查询商家转账订单的详细信息。
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| out_bill_no | string | 商户单号
| query | object | 声明请求的查询参数
| sub_mchid {data-indent=1} | string | 二级商户号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->ecommerce->mchTransfer->transferBills->outBillNo->_out_bill_no_->getAsync([
  'out_bill_no' => 'plfk2020042013',
  'query' => [
    'sub_mchid' => '1900001121',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/ecommerce/mch-transfer/transfer-bills/out-bill-no/{out_bill_no}')->getAsync([
  'out_bill_no' => 'plfk2020042013',
  'query' => [
    'sub_mchid' => '1900001121',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/ecommerce/mch-transfer/transfer-bills/out-bill-no/{out_bill_no}']->getAsync([
  'out_bill_no' => 'plfk2020042013',
  'query' => [
    'sub_mchid' => '1900001121',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->ecommerce->mchTransfer->transferBills->outBillNo->_out_bill_no_->get([
  'out_bill_no' => 'plfk2020042013',
  'query' => [
    'sub_mchid' => '1900001121',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/ecommerce/mch-transfer/transfer-bills/out-bill-no/{out_bill_no}')->get([
  'out_bill_no' => 'plfk2020042013',
  'query' => [
    'sub_mchid' => '1900001121',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/ecommerce/mch-transfer/transfer-bills/out-bill-no/{out_bill_no}']->get([
  'out_bill_no' => 'plfk2020042013',
  'query' => [
    'sub_mchid' => '1900001121',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| mchid | string | 服务商商户号
| sub_mchid | string | 二级商户号
| out_bill_no | string | 商户单号
| transfer_bill_no | string | 微信转账单号
| appid | string | 服务商AppID
| transfer_scene_id | string | 转账场景ID
| state | string | 单据状态
| transfer_amount | number | 转账金额
| transfer_remark | string | 转账备注
| fail_reason | string | 失败原因
| openid | string | 收款用户OpenID
| user_name | string | 收款用户姓名
| create_time | string | 单据创建时间
| update_time | string | 状态变更时间

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/docs/partner/apis/platsolution-mch-transfer/transfer-bill/get-transfer-bill-by-out-no.html)
