---
title: 申请修改特约商户结算规则
description: 从业机构可调用该接口帮助特约商户进行结算规则ID的修改。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| acquiring_bank_id {data-required data-indent=1} | string | 从业机构号
| channel_id {data-required data-indent=1} | string | 渠道商户号
| sub_mchid {data-required data-indent=1} | string | 从业机构特约商户号
| settle_rule_id {data-required data-indent=1} | integer | 结算规则id

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->merchantSettlement->merchantSettleRuleApplications->postAsync([
  'json' => [
    'acquiring_bank_id' => '1356485',
    'channel_id' => '20001111',
    'sub_mchid' => '1346578',
    'settle_rule_id' => 760,
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/merchant-settlement/merchant-settle-rule-applications')->postAsync([
  'json' => [
    'acquiring_bank_id' => '1356485',
    'channel_id' => '20001111',
    'sub_mchid' => '1346578',
    'settle_rule_id' => 760,
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/merchant-settlement/merchant-settle-rule-applications']->postAsync([
  'json' => [
    'acquiring_bank_id' => '1356485',
    'channel_id' => '20001111',
    'sub_mchid' => '1346578',
    'settle_rule_id' => 760,
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->merchantSettlement->merchantSettleRuleApplications->post([
  'json' => [
    'acquiring_bank_id' => '1356485',
    'channel_id' => '20001111',
    'sub_mchid' => '1346578',
    'settle_rule_id' => 760,
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/merchant-settlement/merchant-settle-rule-applications')->post([
  'json' => [
    'acquiring_bank_id' => '1356485',
    'channel_id' => '20001111',
    'sub_mchid' => '1346578',
    'settle_rule_id' => 760,
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/merchant-settlement/merchant-settle-rule-applications']->post([
  'json' => [
    'acquiring_bank_id' => '1356485',
    'channel_id' => '20001111',
    'sub_mchid' => '1346578',
    'settle_rule_id' => 760,
  ],
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

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3_partner/Offline/apis/chapter3_1_1.shtml)
