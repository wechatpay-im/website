---
title: 查询投诉单列表
description: 商户可通过调用此接口，查询指定时间段的所有用户投诉信息，以分页输出查询结果。对于服务商、渠道商，可通过调用此接口，查询指定特约商户号下的投诉信息，若不指定，则查询的是名下所有特约商户投诉信息。
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| query {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的查询参数
| limit {data-indent=1} | integer | 分页大小
| offset {data-indent=1} | integer | 分页开始位置
| begin_date {data-required data-indent=1} | string | 开始日期
| end_date {data-required data-indent=1} | string | 结束日期
| complainted_mchid {data-indent=1} | string | 被诉商户号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->merchantService->complaintsV2->getAsync([
  'query' => [
    'limit'             => 5,
    'offset'            => 10,
    'begin_date'        => '2019-01-01',
    'end_date'          => '2019-01-01',
    'complainted_mchid' => '1900012181',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/merchant-service/complaints-v2')->getAsync([
  'query' => [
    'limit'             => 5,
    'offset'            => 10,
    'begin_date'        => '2019-01-01',
    'end_date'          => '2019-01-01',
    'complainted_mchid' => '1900012181',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/merchant-service/complaints-v2']->getAsync([
  'query' => [
    'limit'             => 5,
    'offset'            => 10,
    'begin_date'        => '2019-01-01',
    'end_date'          => '2019-01-01',
    'complainted_mchid' => '1900012181',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->merchantService->complaintsV2->get([
  'query' => [
    'limit'             => 5,
    'offset'            => 10,
    'begin_date'        => '2019-01-01',
    'end_date'          => '2019-01-01',
    'complainted_mchid' => '1900012181',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/merchant-service/complaints-v2')->get([
  'query' => [
    'limit'             => 5,
    'offset'            => 10,
    'begin_date'        => '2019-01-01',
    'end_date'          => '2019-01-01',
    'complainted_mchid' => '1900012181',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/merchant-service/complaints-v2']->get([
  'query' => [
    'limit'             => 5,
    'offset'            => 10,
    'begin_date'        => '2019-01-01',
    'end_date'          => '2019-01-01',
    'complainted_mchid' => '1900012181',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| data | object[] {data-tooltip="对应PHP的array"} | 用户投诉信息详情
| complaint_id {data-required data-indent=1} | string | 投诉单号
| complaint_time {data-required data-indent=1} | string | 投诉时间
| complaint_detail {data-required data-indent=1} | string | 投诉详情
| complaint_state {data-required data-indent=1} | string | 投诉单状态
| complainted_mchid {data-required data-indent=1} | string | 被诉商户号
| payer_phone {data-indent=1} | string {data-tooltip=商户API证书对应的公钥加密后的BASE64字符串 data-encrypted=by-rsa-pubkey} | 投诉人联系方式
| complaint_order_info {data-indent=1} | object[] {data-tooltip="对应PHP的array"} | 投诉单关联订单信息
| transaction_id {data-required data-indent=2} | string | 微信订单号
| out_trade_no {data-required data-indent=2} | string | 商户订单号
| amount {data-required data-indent=2} | integer | 订单金额
| service_order_info {data-indent=1} | object[] {data-tooltip="对应PHP的array"} | 投诉单关联服务单信息
| order_id {data-indent=2} | string | 微信支付服务订单号
| out_order_no {data-indent=2} | string | 商户服务订单号
| state {data-indent=2} | string | 支付分服务单状态
| complaint_media_list {data-indent=1} | object[] {data-tooltip="对应PHP的array"} | 投诉资料列表
| media_type {data-required data-indent=2} | string | 媒体文件业务类型<br/>`USER_COMPLAINT_IMAGE` \| `OPERATION_IMAGE` 枚举值之一
| media_url {data-indent=2} | string[] | 媒体文列表
| complaint_full_refunded {data-required data-indent=1} | boolean | 投诉单是否已全额退款
| incoming_user_response {data-required data-indent=1} | boolean | 是否有待回复的用户留言
| problem_description {data-required data-indent=1} | string | 问题描述
| user_complaint_times {data-required data-indent=1} | integer | 用户投诉次数
| problem_type {data-indent=1} | string | 问题类型
| apply_refund_amount {data-indent=1} | integer | 申请退款金额
| user_tag_list {data-indent=1} | string[] | 用户标签列表
| additional_info {data-indent=1} | object {data-tooltip="对应PHP的array"} | 补充信息
| type {data-indent=2} | string | 补充信息类型
| share_power_info {data-indent=2} | object {data-tooltip="对应PHP的array"} | 充电宝投诉相关信息
| return_time {data-indent=3} | string | 归还时间
| return_address_info {data-indent=3} | object {data-tooltip="对应PHP的array"} | 归还地点信息
| return_address {data-indent=4} | string | 归还地点
| longitude {data-indent=4} | string | 归还地点经度
| latitude {data-indent=4} | string | 归还地点纬度
| is_returned_to_same_machine {data-indent=3} | boolean | 是否归还同一柜机
| in_platform_service {data-indent=1} | boolean | 是否在平台协助中
| need_immediate_service {data-indent=1} | boolean | 是否需即时服务用户
| limit {data-required} | integer | 分页大小
| offset {data-required} | integer | 分页开始位置
| total_count | integer | 投诉总条数

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/docs/partner/apis/consumer-complaint/complaints/list-complaints-v2.html) [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3_partner/apis/chapter10_2_11.shtml)
