---
title: 商户提现申请单号查询提现申请单状态
description: 电商平台发起申请后, 电商平台调用此接口查询审批和出款进度。
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| out_request_no | string | 商户提现申请号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->mch_operate->risk->withdrawlApply->outRequestNo->_out_request_no_->getAsync([
  'out_request_no' => '123283928932',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/mch_operate/risk/withdrawl-apply/out-request-no/{out_request_no}')->getAsync([
  'out_request_no' => '123283928932',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/mch_operate/risk/withdrawl-apply/out-request-no/{out_request_no}']->getAsync([
  'out_request_no' => '123283928932',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->mch_operate->risk->withdrawlApply->outRequestNo->_out_request_no_->get([
  'out_request_no' => '123283928932',
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/mch_operate/risk/withdrawl-apply/out-request-no/{out_request_no}')->get([
  'out_request_no' => '123283928932',
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/mch_operate/risk/withdrawl-apply/out-request-no/{out_request_no}']->get([
  'out_request_no' => '123283928932',
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| withdrawl_apply | object | 提现申请单信息
| applyment_id {data-indent=1} | string | 微信支付提现申请单号
| out_request_no {data-indent=1} | string | 商户提现申请单号
| state {data-indent=1} | string | 申请单状态
| fail_reason {data-indent=1} | string | 失败原因
| modify_time {data-indent=1} | string | 最后更新时间

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3_partner/apis/chapter7_8_7.shtml)
