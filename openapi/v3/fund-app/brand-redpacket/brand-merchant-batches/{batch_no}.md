---
title: 微信支付批次单号查询批次单
description: 普通直连商户可以通过该接口查询品牌红包批次单以及指定状态的品牌红包明细单
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| batch_no {data-required} | string | 微信支付品牌红包批次单号
| query | object {data-tooltip="对应PHP的array"} | 声明请求的查询参数
| need_query_detail {data-indent=1} | boolean | 是否需要查询品牌红包明细单
| detail_state {data-indent=1} | string | 品牌红包明细单状态<br/>`DETAIL_VIEW_ALL` \| `DETAIL_VIEW_SUCCESS` \| `DETAIL_VIEW_FAIL` 枚举值之一

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->fundApp->brandRedpacket->brandMerchantBatches->_batch_no_->getAsync([
  'batch_no' => '1030000071100999991182020050700019480001',
  'query' => [
    'need_query_detail' => true,
    'detail_state'      => 'DETAIL_VIEW_ALL',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/fund-app/brand-redpacket/brand-merchant-batches/{batch_no}')->getAsync([
  'batch_no' => '1030000071100999991182020050700019480001',
  'query' => [
    'need_query_detail' => true,
    'detail_state'      => 'DETAIL_VIEW_ALL',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/fund-app/brand-redpacket/brand-merchant-batches/{batch_no}']->getAsync([
  'batch_no' => '1030000071100999991182020050700019480001',
  'query' => [
    'need_query_detail' => true,
    'detail_state'      => 'DETAIL_VIEW_ALL',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->fundApp->brandRedpacket->brandMerchantBatches->_batch_no_->get([
  'batch_no' => '1030000071100999991182020050700019480001',
  'query' => [
    'need_query_detail' => true,
    'detail_state'      => 'DETAIL_VIEW_ALL',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/fund-app/brand-redpacket/brand-merchant-batches/{batch_no}')->get([
  'batch_no' => '1030000071100999991182020050700019480001',
  'query' => [
    'need_query_detail' => true,
    'detail_state'      => 'DETAIL_VIEW_ALL',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/fund-app/brand-redpacket/brand-merchant-batches/{batch_no}']->get([
  'batch_no' => '1030000071100999991182020050700019480001',
  'query' => [
    'need_query_detail' => true,
    'detail_state'      => 'DETAIL_VIEW_ALL',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| brand_mchid {data-required} | string | 品牌主商户号
| batch_no {data-required} | string | 微信支付品牌红包批次单号
| out_batch_no {data-required} | string | 商家品牌红包批次单号
| brand_id | number | 品牌ID
| template_id | string | 品牌红包模板ID
| brand_appid | string | 品牌AppID
| batch_state {data-required} | string | 批次单状态<br/>`WAIT_PAY` \| `ACCEPTED` \| `PROCESSING` \| `FINISHED` \| `CLOSED` 枚举值之一
| batch_name {data-required} | string | 品牌红包批次名称
| batch_remark {data-required} | string | 品牌红包批次备注
| close_reason | string | 品牌红包批次单关闭原因<br/>`MERCHANT_REVOCATION` \| `SYSTEM_OVERDUE_CLOSE` 枚举值之一
| total_amount {data-required} | number | 总金额
| total_num {data-required} | number | 总笔数
| create_time {data-required} | string | 品牌红包批次创建时间
| update_time | string | 品牌红包批次更新时间
| success_amount {data-required} | number | 发放成功金额
| success_num {data-required} | number | 发放成功笔数
| fail_amount {data-required} | number | 发放失败金额
| fail_num {data-required} | number | 发放失败笔数
| detail_list | object[] {data-tooltip="对应PHP的array"} | 品牌红包明细列表
| transfer_detail_no {data-required data-indent=1} | string | 微信支付品牌红包明细单号
| out_detail_no {data-required data-indent=1} | string | 商家品牌红包明细单号
| detail_state {data-required data-indent=1} | string | 品牌红包明细单状态<br/>`DETAIL_INIT` \| `DETAIL_WAIT_PAY` \| `DETAIL_PROCESSING` \| `DETAIL_SUCCESS` \| `DETAIL_FAIL` 枚举值之一

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/merchant/4014310369)
