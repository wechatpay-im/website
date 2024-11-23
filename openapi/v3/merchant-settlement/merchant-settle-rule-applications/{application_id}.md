---
title: 根据申请单ID查询结果
description: 从业机构可调用该接口查询特约商户结算规则ID修改的结果。
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| application_id {data-required} | string | 申请单编号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->merchantSettlement->merchantSettleRuleApplications->_application_id_->getAsync([
  'application_id' => '20000011111',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/merchant-settlement/merchant-settle-rule-applications/{application_id}')->getAsync([
  'application_id' => '20000011111',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/merchant-settlement/merchant-settle-rule-applications/{application_id}']->getAsync([
  'application_id' => '20000011111',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->merchantSettlement->merchantSettleRuleApplications->_application_id_->get([
  'application_id' => '20000011111',
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/merchant-settlement/merchant-settle-rule-applications/{application_id}')->get([
  'application_id' => '20000011111',
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/merchant-settlement/merchant-settle-rule-applications/{application_id}']->get([
  'application_id' => '20000011111',
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| application_id {data-required}| string | 申请单编号
| application_process_info | string | 申请单处理信息
| application_state | string | 申请单状态
| update_time | string | 最后更新时间
| acquiring_bank_id | string | 从业机构号
| channel_id | string | 渠道商户号
| sub_mchid | string | 从业机构特约商户号
| settle_rule_id | integer | 结算规则id

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3_partner/Offline/apis/chapter3_1_2.shtml)
