---
title: 修改订单金额
description: 完结订单总金额与实际金额不符时，可通过该接口修改订单金额。**前置条件：** 服务订单支付状态为待支付
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| out_order_no {data-required} | string | 商户服务订单号
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| appid {data-required data-indent=1} | string | 公众账号ID
| service_id {data-required data-indent=1} | string | 服务ID
| post_payments {data-required data-indent=1} | object[] {data-tooltip="对应PHP的array"} | 后付费项目
| name {data-required data-indent=2} | string | 付费名称
| amount {data-indent=2} | number | 付费金额
| description {data-indent=2} | string | 付费说明
| count {data-indent=2} | number | 付费数量
| post_discounts {data-indent=1} | object[] {data-tooltip="对应PHP的array"} | 后付费商户优惠
| name {data-indent=2} | string | 优惠名称
| description {data-indent=2} | string | 优惠说明
| amount {data-indent=2} | number | 优惠金额
| count {data-indent=2} | number | 优惠数量
| total_amount {data-required data-indent=1} | number | 总金额
| reason {data-required data-indent=1} | string | 修改原因
| device {data-indent=1} | object {data-tooltip="对应PHP的array"} | 设备信息
| start_device_id {data-indent=2} | string | 服务开始的设备ID
| end_device_id {data-indent=2} | string | 服务结束的设备ID
| materiel_no {data-indent=2} | string | 物料编码

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->payscore->serviceorder->_out_order_no_->modify->postAsync([
  'out_order_no' => '1234323JKHDFE1243252',
  'json' => [
    'appid'          => 'wxd678efh567hg6787',
    'service_id'     => '2002000000000558128851361561536',
    'post_payments'  => [[
      'name'        => '就餐费用',
      'amount'      => 40000,
      'description' => '就餐人均100元',
      'count'       => 4,
    ],],
    'post_discounts' => [[
      'name'        => '满20减1元',
      'description' => '不与其他优惠叠加',
      'amount'      => 100,
      'count'       => 2,
    ],],
    'total_amount'   => 50000,
    'reason'         => '用户投诉',
    'device'         => [
      'start_device_id' => 'HG123456',
      'end_device_id'   => 'HG123456',
      'materiel_no'     => 'example_materiel_no',
    ],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/payscore/serviceorder/{out_order_no}/modify')->postAsync([
  'out_order_no' => '1234323JKHDFE1243252',
  'json' => [
    'appid'          => 'wxd678efh567hg6787',
    'service_id'     => '2002000000000558128851361561536',
    'post_payments'  => [[
      'name'        => '就餐费用',
      'amount'      => 40000,
      'description' => '就餐人均100元',
      'count'       => 4,
    ],],
    'post_discounts' => [[
      'name'        => '满20减1元',
      'description' => '不与其他优惠叠加',
      'amount'      => 100,
      'count'       => 2,
    ],],
    'total_amount'   => 50000,
    'reason'         => '用户投诉',
    'device'         => [
      'start_device_id' => 'HG123456',
      'end_device_id'   => 'HG123456',
      'materiel_no'     => 'example_materiel_no',
    ],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/payscore/serviceorder/{out_order_no}/modify']->postAsync([
  'out_order_no' => '1234323JKHDFE1243252',
  'json' => [
    'appid'          => 'wxd678efh567hg6787',
    'service_id'     => '2002000000000558128851361561536',
    'post_payments'  => [[
      'name'        => '就餐费用',
      'amount'      => 40000,
      'description' => '就餐人均100元',
      'count'       => 4,
    ],],
    'post_discounts' => [[
      'name'        => '满20减1元',
      'description' => '不与其他优惠叠加',
      'amount'      => 100,
      'count'       => 2,
    ],],
    'total_amount'   => 50000,
    'reason'         => '用户投诉',
    'device'         => [
      'start_device_id' => 'HG123456',
      'end_device_id'   => 'HG123456',
      'materiel_no'     => 'example_materiel_no',
    ],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->payscore->serviceorder->_out_order_no_->modify->post([
  'out_order_no' => '1234323JKHDFE1243252',
  'json' => [
    'appid'          => 'wxd678efh567hg6787',
    'service_id'     => '2002000000000558128851361561536',
    'post_payments'  => [[
      'name'        => '就餐费用',
      'amount'      => 40000,
      'description' => '就餐人均100元',
      'count'       => 4,
    ],],
    'post_discounts' => [[
      'name'        => '满20减1元',
      'description' => '不与其他优惠叠加',
      'amount'      => 100,
      'count'       => 2,
    ],],
    'total_amount'   => 50000,
    'reason'         => '用户投诉',
    'device'         => [
      'start_device_id' => 'HG123456',
      'end_device_id'   => 'HG123456',
      'materiel_no'     => 'example_materiel_no',
    ],
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/payscore/serviceorder/{out_order_no}/modify')->post([
  'out_order_no' => '1234323JKHDFE1243252',
  'json' => [
    'appid'          => 'wxd678efh567hg6787',
    'service_id'     => '2002000000000558128851361561536',
    'post_payments'  => [[
      'name'        => '就餐费用',
      'amount'      => 40000,
      'description' => '就餐人均100元',
      'count'       => 4,
    ],],
    'post_discounts' => [[
      'name'        => '满20减1元',
      'description' => '不与其他优惠叠加',
      'amount'      => 100,
      'count'       => 2,
    ],],
    'total_amount'   => 50000,
    'reason'         => '用户投诉',
    'device'         => [
      'start_device_id' => 'HG123456',
      'end_device_id'   => 'HG123456',
      'materiel_no'     => 'example_materiel_no',
    ],
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/payscore/serviceorder/{out_order_no}/modify']->post([
  'out_order_no' => '1234323JKHDFE1243252',
  'json' => [
    'appid'          => 'wxd678efh567hg6787',
    'service_id'     => '2002000000000558128851361561536',
    'post_payments'  => [[
      'name'        => '就餐费用',
      'amount'      => 40000,
      'description' => '就餐人均100元',
      'count'       => 4,
    ],],
    'post_discounts' => [[
      'name'        => '满20减1元',
      'description' => '不与其他优惠叠加',
      'amount'      => 100,
      'count'       => 2,
    ],],
    'total_amount'   => 50000,
    'reason'         => '用户投诉',
    'device'         => [
      'start_device_id' => 'HG123456',
      'end_device_id'   => 'HG123456',
      'materiel_no'     => 'example_materiel_no',
    ],
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

::: tip 后付费项目(`post_payments`) 商户需要按照所属行业规程，有如下固定传参要求:
:::

::: code-group

```php [二轮电动车充电桩]
'post_payments' => [
  [
    'name'        => '收费标准',  // 固定值
    'description' => '1元/1小时', // 示例值
  ],
  [
    'name'        => '使用时长',      // 固定值
    'description' => '1小时38分20秒', // 示例值
  ],
],
```

```php [充电宝]
'post_payments' => [
  [
    'name'        => '收费标准',                   // 固定值
    'description' => '3元/60分钟，每24小时封顶30元', // 示例值
  ],
  [
    'name'        => '使用时长',      // 固定值
    'description' => '1小时38分20秒', // 示例值
  ],
],
```

```php [共享单车]
'post_payments' => [
  [
    'name'        => '计费规则',            // 固定值
    'description' => '骑行费用1.5元/30分钟', // 示例值
  ],
  [
    'name'        => '骑行时长',      // 固定值
    'description' => '1小时38分20秒', // 示例值
  ],
  [ // 选填组
    'name'   => '骑行费用', // 固定值
    'amount' => 1200,      // 示例值
  ],
  [ // 选填组
    'name'   => '调度费用', // 固定值
    'amount' => 1200,      // 示例值
  ],
  [ // 选填组
    'name'   => '头盔费用', // 固定值
    'amount' => 1200,      // 示例值
  ],
  [ // 选填组
    'name'   => '罚款', // 固定值
    'amount' => 1200,  // 示例值
  ],
],
```

```php [快递行业]
'post_payments' => [
  [
    'name'   => '首重费', // 固定值
    'amount' => 1200,    // 示例值
  ],
  [ // 选填组
    'name'   => '续重费', // 固定值
    'amount' => 1200,    // 示例值
  ],
  [ // 选填组
    'name'   => '包装费', // 固定值
    'amount' => 1200,    // 示例值
  ],
  [ // 选填组
    'name'   => '保价费', // 固定值
    'amount' => 1200,    // 示例值
  ],
],
```

```php [智慧零售(无人设备)]
'post_payments' => [
  [
    'name'        => '商品信息', // 固定值
    'amount'      => 300,      // 示例值
    'description' => '可乐',   // 示例值
    'count'       => 1,       // 示例值
  ],
  [ // 最多选填99组
    'name'        => '商品信息', // 固定值
    'amount'      => 300,      // 示例值
    'description' => '雪碧',   // 示例值
    'count'       => 1,       // 示例值
  ],
],
```

```php [汽车充电桩]
'post_payments' => [
  [
    'name'        => '计费规则',                   // 固定值
    'description' => '电费0.1元/度，服务费0.1元/度', // 示例值
  ],
  [
    'name'        => '费用明细',              // 固定值
    'description' => '电费0.2元，服务费0.2元', // 示例值
  ],
],
```

```php [汽车租赁]
'post_payments' => [ // 订单无收款费用(0元完结订单)
  [
    'name'        => '租车相关费用', // 固定值
    'description' => '本次无扣款',   // 固定值
  ],
],
'post_payments' => [ // 订单有收款费用(非0元完结)，至少有其中一组
  [ // 选填组
    'name'        => '延迟还车费用',  // 固定值
    'amount'      => 1000,          // 示例值
    'description' => '延迟还车2小时', // 示例值
    'count'       => 1,             // 示例值
  ],
  [ // 选填组
    'name'        => '加油费用',  // 固定值
    'amount'      => 9999,       // 示例值
    'description' => '97#5升',   // 示例值
    'count'       => 1,         // 示例值
  ],
  [ // 选填组
    'name'        => 'ETC高速费用',                        // 固定值
    'amount'      => 2000,                                // 示例值
    'description' => '2024年9月1日在深圳高速出口产生高速费用', // 示例值
    'count'       => 1,                                   // 示例值
  ],
  [ // 选填组
    'name'        => '车损费用',                                   // 固定值
    'amount'      => 8888,                                       // 示例值
    'description' => '客户租用期间车辆右后门发生单方剐擦，需要扣款维修', // 示例值
    'count'       => 1,                                         // 示例值
  ],
  [ // 选填组
    'name'        => '折旧费用',       // 固定值
    'amount'      => 6666,            // 示例值
    'description' => '租用十三个月折旧', // 示例值
    'count'       => 1,               // 示例值
  ],
  [ // 选填组
    'name'        => '停运费用',            // 固定值
    'amount'      => 7777,                 // 示例值
    'description' => '车损需返厂维修一个月',  // 示例值
    'count'       => 1,                   // 示例值
  ],
  [ // 选填组
    'name'        => '闯红灯违章',                     // 固定值
    'amount'      => 5555,                           // 示例值
    'description' => '2024年9月1日在深圳高速出口闯红灯',  // 示例值
    'count'       => 1,                              // 示例值
  ],
],
```

```php [酒店行业]
'post_payments' => [
  [
    'name'        => '酒店房费',             // 固定值
    'amount'      => 1200,                 // 示例值
    'description' => '北京中关村某酒店标准间', // 示例值
  ],
  [ // 选填组
    'name'        => '其他杂费',   // 固定值
    'amount'      => 200,        // 示例值
    'description' => '房间清洁费', // 示例值
  ],
],
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| out_order_no {data-required} | string | 商户服务订单号
| service_id {data-required} | string | 服务ID
| appid {data-required} | string | 服务商公众号ID
| mchid {data-required} | string | 服务商商户号
| service_introduction {data-required} | string | 服务信息
| state {data-required} | string | 服务订单状态<br/>`CREATED` \| `DOING` \| `DONE` \| `REVOKED` \| `EXPIRED` 枚举值之一
| state_description | string | 订单状态说明<br/>`USER_CONFIRM` \| `MCH_COMPLETE` 枚举值之一
| post_payments {data-required} | object[] {data-tooltip="对应PHP的array"} | 后付费项目
| name {data-required data-indent=1} | string | 付费名称
| amount {data-indent=1} | number | 付费金额
| description {data-indent=1} | string | 付费说明
| count {data-indent=1} | number | 付费数量
| post_discounts | object[] {data-tooltip="对应PHP的array"} | 商户优惠
| name {data-indent=1} | string | 优惠名称
| description {data-indent=1} | string | 优惠说明
| amount {data-indent=1} | number | 优惠金额
| count {data-indent=1} | number | 优惠数量
| risk_fund | object {data-tooltip="对应PHP的array"} | 服务风险金
| name {data-required data-indent=1} | string | 风险名称<br/>`DEPOSIT` \| `ADVANCE` \| `CASH_DEPOSIT` \| `ESTIMATE_ORDER_COST` 枚举值之一
| amount {data-required data-indent=1} | number | 风险金额
| description {data-indent=1} | string | 风险说明
| total_amount | number | 总金额
| need_collection | boolean | 是否需要收款
| collection | object {data-tooltip="对应PHP的array"} | 收款信息
| state {data-required data-indent=1} | string | 收款状态<br/>`USER_PAYING` \| `USER_PAID` 枚举值之一
| total_amount {data-indent=1} | number | 总收款金额
| paying_amount {data-indent=1} | number | 待收金额
| paid_amount {data-indent=1} | number | 已收金额
| details {data-indent=1} | object[] {data-tooltip="对应PHP的array"} | 收款明细列表
| seq {data-indent=2} | number | 收款序号
| amount {data-indent=2} | number | 单笔收款金额
| paid_type {data-indent=2} | string | 收款成功渠道<br/>`NEWTON` \| `MCH` 枚举值之一
| paid_time {data-indent=2} | string | 收款成功时间
| transaction_id {data-indent=2} | string | 微信支付交易单号
| bank_type {data-indent=1} | string | 收款银行
| time_range | object {data-tooltip="对应PHP的array"} | 服务时间
| start_time {data-indent=1} | string | 服务开始时间
| end_time {data-indent=1} | string | 服务结束时间
| start_time_remark {data-indent=1} | string | 服务开始时间备注
| end_time_remark {data-indent=1} | string | 服务结束时间备注
| location | object {data-tooltip="对应PHP的array"} | 服务位置
| start_location {data-indent=1} | string | 服务开始地点
| end_location {data-indent=1} | string | 服务结束地点
| attach | string | 附加数据
| notify_url | string | 商户回调地址
| order_id | string | 微信支付服务订单号

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/merchant/4012587957) [官方文档](https://pay.weixin.qq.com/doc/v3/merchant/4012647427)
