---
title: 商户单号查询公益捐赠预算详情
description: 商户单号查询公益捐赠预算详情 注：单个商户的接口频率限制为50次/s
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| out_budget_no {data-required} | string | 商户预算单号
| query {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的查询参数
| sponsor_mchid {data-required data-indent=1} | string | 出资商户号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->fundApp->mchTransfer->partner->charityBudget->_out_budget_no_->getAsync([
  'out_budget_no' => 'budget202506300102',
  'query' => [
    'sponsor_mchid' => '1900001109',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/fund-app/mch-transfer/partner/charity-budget/{out_budget_no}')->getAsync([
  'out_budget_no' => 'budget202506300102',
  'query' => [
    'sponsor_mchid' => '1900001109',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/fund-app/mch-transfer/partner/charity-budget/{out_budget_no}']->getAsync([
  'out_budget_no' => 'budget202506300102',
  'query' => [
    'sponsor_mchid' => '1900001109',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->fundApp->mchTransfer->partner->charityBudget->_out_budget_no_->get([
  'out_budget_no' => 'budget202506300102',
  'query' => [
    'sponsor_mchid' => '1900001109',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/fund-app/mch-transfer/partner/charity-budget/{out_budget_no}')->get([
  'out_budget_no' => 'budget202506300102',
  'query' => [
    'sponsor_mchid' => '1900001109',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/fund-app/mch-transfer/partner/charity-budget/{out_budget_no}']->get([
  'out_budget_no' => 'budget202506300102',
  'query' => [
    'sponsor_mchid' => '1900001109',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| sp_mchid {data-required} | string | 服务商商户号
| out_budget_no {data-required} | string | 商户预算单号
| budget_id {data-required} | string | 微信支付预算单号
| amount {data-required} | number | 预算总金额
| sponsor_mchid {data-required} | string | 出资商户号
| activity_name {data-required} | string | 活动名称
| activity_remark {data-required} | string | 活动说明
| state | string | 预算单状态<br/>`PENDING` \| `LOCKED` \| `FINISHED` \| `CLOSED` 枚举值之一
| confirm_url | string | 确认出资页面地址
| super_admin_wxid_mask | string | 商户号超管微信号掩码
| remain_amount | number | 剩余预算金额
| unlock_remark | string | 撤销说明
| locked_time | string | 资金锁定时间
| finished_time | string | 完成时间
| closed_time | string | 关闭时间

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4015554788)
