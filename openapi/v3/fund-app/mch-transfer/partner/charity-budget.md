---
title: 申请公益捐赠预算
description: 申请公益捐赠预算 注：单个商户的接口频率限制为50次/s
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| out_budget_no {data-required data-indent=1} | string | 商户预算单号
| sponsor_mchid {data-required data-indent=1} | string | 出资商户号
| sponsor_subject_name {data-required data-indent=1} | string | 出资企业主体名称
| activity_name {data-required data-indent=1} | string | 活动名称
| activity_remark {data-required data-indent=1} | string | 活动说明
| amount {data-required data-indent=1} | number | 预算总金额
| notify_url {data-indent=1} | string | 回调地址

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->fundApp->mchTransfer->partner->charityBudget->postAsync([
  'json' => [
    'out_budget_no'        => 'budget202506300102',
    'sponsor_mchid'        => '1900001109',
    'sponsor_subject_name' => '腾讯控股有限公司',
    'activity_name'        => '公益企业配捐活动',
    'activity_remark'      => '公益活动开始于9月1日，帮助困难儿童筹款活动',
    'amount'               => 20000000,
    'notify_url'           => 'https://www.weixin.qq.com/wxpay/pay.php',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/fund-app/mch-transfer/partner/charity-budget')->postAsync([
  'json' => [
    'out_budget_no'        => 'budget202506300102',
    'sponsor_mchid'        => '1900001109',
    'sponsor_subject_name' => '腾讯控股有限公司',
    'activity_name'        => '公益企业配捐活动',
    'activity_remark'      => '公益活动开始于9月1日，帮助困难儿童筹款活动',
    'amount'               => 20000000,
    'notify_url'           => 'https://www.weixin.qq.com/wxpay/pay.php',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/fund-app/mch-transfer/partner/charity-budget']->postAsync([
  'json' => [
    'out_budget_no'        => 'budget202506300102',
    'sponsor_mchid'        => '1900001109',
    'sponsor_subject_name' => '腾讯控股有限公司',
    'activity_name'        => '公益企业配捐活动',
    'activity_remark'      => '公益活动开始于9月1日，帮助困难儿童筹款活动',
    'amount'               => 20000000,
    'notify_url'           => 'https://www.weixin.qq.com/wxpay/pay.php',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->fundApp->mchTransfer->partner->charityBudget->post([
  'json' => [
    'out_budget_no'        => 'budget202506300102',
    'sponsor_mchid'        => '1900001109',
    'sponsor_subject_name' => '腾讯控股有限公司',
    'activity_name'        => '公益企业配捐活动',
    'activity_remark'      => '公益活动开始于9月1日，帮助困难儿童筹款活动',
    'amount'               => 20000000,
    'notify_url'           => 'https://www.weixin.qq.com/wxpay/pay.php',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/fund-app/mch-transfer/partner/charity-budget')->post([
  'json' => [
    'out_budget_no'        => 'budget202506300102',
    'sponsor_mchid'        => '1900001109',
    'sponsor_subject_name' => '腾讯控股有限公司',
    'activity_name'        => '公益企业配捐活动',
    'activity_remark'      => '公益活动开始于9月1日，帮助困难儿童筹款活动',
    'amount'               => 20000000,
    'notify_url'           => 'https://www.weixin.qq.com/wxpay/pay.php',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/fund-app/mch-transfer/partner/charity-budget']->post([
  'json' => [
    'out_budget_no'        => 'budget202506300102',
    'sponsor_mchid'        => '1900001109',
    'sponsor_subject_name' => '腾讯控股有限公司',
    'activity_name'        => '公益企业配捐活动',
    'activity_remark'      => '公益活动开始于9月1日，帮助困难儿童筹款活动',
    'amount'               => 20000000,
    'notify_url'           => 'https://www.weixin.qq.com/wxpay/pay.php',
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

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4015554763)
