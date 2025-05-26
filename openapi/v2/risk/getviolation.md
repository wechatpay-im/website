---
title: 银行特约商户违规信息查询
description: 方便银行服务商查询特约商户违规记录
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| security {data-required} | `true` | 声明加载商户API证书
| xml {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`XML`数据结构
| mch_id {data-indent=1} | string | 商户号
| sign_type {data-indent=1} | string | 签名类型<br/>`HMAC-SHA256` 枚举值
| begin_time {data-indent=1} | string | 开始时间
| end_time {data-indent=1} | string | 结束时间
| page_index {data-indent=1} | string | 页码
| page_size {data-indent=1} | string | 每页返回的数量
| violation_records_format {data-indent=1} | string | 违规记录数据格式<br/>`csv` \| `json` 枚举值之一

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v2->risk->getviolation->postAsync([
  'security' => true,
  'xml' => [
    'mch_id'                   => '1230000110',
    'sign_type'                => 'HMAC-SHA256',
    'begin_time'               => '2020-05-11 10:10:00',
    'end_time'                 => '2020-05-11 10:10:00',
    'page_index'               => '1',
    'page_size'                => '10',
    'violation_records_format' => 'json',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [异步声明式]
$instance->chain('v2/risk/getviolation')->postAsync([
  'security' => true,
  'xml' => [
    'mch_id'                   => '1230000110',
    'sign_type'                => 'HMAC-SHA256',
    'begin_time'               => '2020-05-11 10:10:00',
    'end_time'                 => '2020-05-11 10:10:00',
    'page_index'               => '1',
    'page_size'                => '10',
    'violation_records_format' => 'json',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [异步属性式]
$instance['v2/risk/getviolation']->postAsync([
  'security' => true,
  'xml' => [
    'mch_id'                   => '1230000110',
    'sign_type'                => 'HMAC-SHA256',
    'begin_time'               => '2020-05-11 10:10:00',
    'end_time'                 => '2020-05-11 10:10:00',
    'page_index'               => '1',
    'page_size'                => '10',
    'violation_records_format' => 'json',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v2->risk->getviolation->post([
  'security' => true,
  'xml' => [
    'mch_id'                   => '1230000110',
    'sign_type'                => 'HMAC-SHA256',
    'begin_time'               => '2020-05-11 10:10:00',
    'end_time'                 => '2020-05-11 10:10:00',
    'page_index'               => '1',
    'page_size'                => '10',
    'violation_records_format' => 'json',
  ],
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

```php [同步声明式]
$response = $instance->chain('v2/risk/getviolation')->post([
  'security' => true,
  'xml' => [
    'mch_id'                   => '1230000110',
    'sign_type'                => 'HMAC-SHA256',
    'begin_time'               => '2020-05-11 10:10:00',
    'end_time'                 => '2020-05-11 10:10:00',
    'page_index'               => '1',
    'page_size'                => '10',
    'violation_records_format' => 'json',
  ],
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

```php [同步属性式]
$response = $instance['v2/risk/getviolation']->post([
  'security' => true,
  'xml' => [
    'mch_id'                   => '1230000110',
    'sign_type'                => 'HMAC-SHA256',
    'begin_time'               => '2020-05-11 10:10:00',
    'end_time'                 => '2020-05-11 10:10:00',
    'page_index'               => '1',
    'page_size'                => '10',
    'violation_records_format' => 'json',
  ],
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| return_code {data-required} | string | 返回状态码<br/>`SUCCESS` \| `FAIL` 枚举值之一
| return_msg | string | 错误码描述
| error_code | string | 错误码
| error_code_des | string | 错误代码描述
| result_code {data-required} | string | 返回状态码<br/>`SUCCESS` \| `FAIL` 枚举值之一
| result_msg {data-required} | string | 错误码描述
| violation_records | string {data-tooltip=使用json_encode后的字符串 data-encoded=by-json_encode} | 违规记录数据`JSON`格式字符串
| {colspan=3 .im-table-line}
| total_size {data-required data-indent=1} | number | 记录总数
| violation_records {data-required data-indent=1} | object[] {data-tooltip="对应PHP的array"} | 违规记录列表
| company_name {data-required data-indent=2} | string | 公司名称
| handle_method {data-required data-indent=2} | string | 处理方式
| handle_state {data-required data-indent=2} | string | 处理状态
| punish_time {data-required data-indent=2} | string | 处罚时间
| sub_mch_id {data-required data-indent=2} | string | 违规子商户号
| deadline {data-indent=2} | string | 最后处理时间

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v2/institution/4011985446)
