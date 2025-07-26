---
title: 解锁公益捐赠预算
description: 解锁公益捐赠预算 注：单个商户的接口频率限制为100次/s
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| out_budget_no {data-required} | string | 商户预算单号
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| sponsor_mchid {data-required data-indent=1} | string | 出资商户号
| activity_remark {data-required data-indent=1} | string | 解锁备注

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->fundApp->mchTransfer->partner->charityBudget->_out_budget_no_->unlock->postAsync([
  'out_budget_no' => 'budget202506300102',
  'json' => [
    'sponsor_mchid'   => '1900001109',
    'activity_remark' => '公益活动结束，解锁资金',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/fund-app/mch-transfer/partner/charity-budget/{out_budget_no}/unlock')->postAsync([
  'out_budget_no' => 'budget202506300102',
  'json' => [
    'sponsor_mchid'   => '1900001109',
    'activity_remark' => '公益活动结束，解锁资金',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/fund-app/mch-transfer/partner/charity-budget/{out_budget_no}/unlock']->postAsync([
  'out_budget_no' => 'budget202506300102',
  'json' => [
    'sponsor_mchid'   => '1900001109',
    'activity_remark' => '公益活动结束，解锁资金',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->fundApp->mchTransfer->partner->charityBudget->_out_budget_no_->unlock->post([
  'out_budget_no' => 'budget202506300102',
  'json' => [
    'sponsor_mchid'   => '1900001109',
    'activity_remark' => '公益活动结束，解锁资金',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/fund-app/mch-transfer/partner/charity-budget/{out_budget_no}/unlock')->post([
  'out_budget_no' => 'budget202506300102',
  'json' => [
    'sponsor_mchid'   => '1900001109',
    'activity_remark' => '公益活动结束，解锁资金',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/fund-app/mch-transfer/partner/charity-budget/{out_budget_no}/unlock']->post([
  'out_budget_no' => 'budget202506300102',
  'json' => [
    'sponsor_mchid'   => '1900001109',
    'activity_remark' => '公益活动结束，解锁资金',
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
| state {data-required} | string | 预算单状态<br/>`FINISHED` 枚举值
| unlock_remark {data-required} | string | 撤销说明
| locked_time {data-required} | string | 资金锁定时间
| finished_time {data-required} | string | 完成时间

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4015554795)
