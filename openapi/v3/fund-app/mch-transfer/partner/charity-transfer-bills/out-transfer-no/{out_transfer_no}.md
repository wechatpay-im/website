---
title: 商户单号查询公益捐赠详情
description: 根据商户单号查询公益捐赠单的详细信息。 注意 API只支持查询最近30天内的捐赠单，超过30天可以通过资金账单对账确认。转账单中涉及金额的字段单位为“分”。单个商户100QPS
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| out_transfer_no {data-required} | string | 商户公益捐赠单号
| query {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的查询参数
| sponsor_mchid {data-required data-indent=1} | string | 出资商户号
| out_budget_no {data-required data-indent=1} | string | 商户预算单号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->fundApp->mchTransfer->partner->charityTransferBills->outTransferNo->_out_transfer_no_->getAsync([
  'out_transfer_no' => 'trans202506300102',
  'query' => [
    'sponsor_mchid' => '1900001109',
    'out_budget_no' => 'budget202506030102',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/fund-app/mch-transfer/partner/charity-transfer-bills/out-transfer-no/{out_transfer_no}')->getAsync([
  'out_transfer_no' => 'trans202506300102',
  'query' => [
    'sponsor_mchid' => '1900001109',
    'out_budget_no' => 'budget202506030102',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/fund-app/mch-transfer/partner/charity-transfer-bills/out-transfer-no/{out_transfer_no}']->getAsync([
  'out_transfer_no' => 'trans202506300102',
  'query' => [
    'sponsor_mchid' => '1900001109',
    'out_budget_no' => 'budget202506030102',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->fundApp->mchTransfer->partner->charityTransferBills->outTransferNo->_out_transfer_no_->get([
  'out_transfer_no' => 'trans202506300102',
  'query' => [
    'sponsor_mchid' => '1900001109',
    'out_budget_no' => 'budget202506030102',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/fund-app/mch-transfer/partner/charity-transfer-bills/out-transfer-no/{out_transfer_no}')->get([
  'out_transfer_no' => 'trans202506300102',
  'query' => [
    'sponsor_mchid' => '1900001109',
    'out_budget_no' => 'budget202506030102',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/fund-app/mch-transfer/partner/charity-transfer-bills/out-transfer-no/{out_transfer_no}']->get([
  'out_transfer_no' => 'trans202506300102',
  'query' => [
    'sponsor_mchid' => '1900001109',
    'out_budget_no' => 'budget202506030102',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| out_budget_no {data-required} | string | 商户预算单号
| budget_id {data-required} | string | 微信支付预算单号
| out_transfer_no {data-required} | string | 商户公益捐赠单号
| transfer_id {data-required} | string | 微信支付公益捐赠单号
| amount {data-required} | number | 预算总金额
| transfer_remark {data-required} | string | 捐赠备注
| receive_mchid {data-required} | string | 收款商户号
| state {data-required} | string | 捐赠状态<br/>`ACCEPTED` \| `SUCCESS` \| `CLOSE` 枚举值之一
| create_time {data-required} | string | 捐赠单创建时间
| success_time | string | 捐赠完成时间

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4015554859)
