---
title: 资料更新请求审核结果回调通知
description: 微信支付侧提交资料更新申请后，此接口接收微众更新请求审核结果回调通知。限频：200/分钟
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| out_request_no {data-required data-indent=1} | string | 资料更新请求单号
| mchid {data-required data-indent=1} | string | 商户号
| audit_result {data-indent=1} | string | 审核结果<br/>`PASS` \| `REJECT` 枚举值之一
| audit_finish_time {data-indent=1} | string | 审核完成时间
| attach_info {data-indent=1} | string | 业务附属信息
| fail_code {data-indent=1} | string | 审核驳回错误码
| fail_msg {data-indent=1} | string | 审核驳回错误原因

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->aggracctBc->wbChannel->controlOrders->info->update->result->notify->postAsync([
  'json' => [
    'out_request_no'    => 'htozr8denqegbt6tk6u10iymo7yww5pn',
    'mchid'             => '1900016681',
    'audit_result'      => 'PASS',
    'audit_finish_time' => '2015-05-20T13:29:35+08:00',
    'attach_info'       => 'updateidcard',
    'fail_code'         => '1001',
    'fail_msg'          => 'IDCARD_ILLEGAL',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/aggracct-bc/wb-channel/control-orders/info/update/result/notify')->postAsync([
  'json' => [
    'out_request_no'    => 'htozr8denqegbt6tk6u10iymo7yww5pn',
    'mchid'             => '1900016681',
    'audit_result'      => 'PASS',
    'audit_finish_time' => '2015-05-20T13:29:35+08:00',
    'attach_info'       => 'updateidcard',
    'fail_code'         => '1001',
    'fail_msg'          => 'IDCARD_ILLEGAL',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/aggracct-bc/wb-channel/control-orders/info/update/result/notify']->postAsync([
  'json' => [
    'out_request_no'    => 'htozr8denqegbt6tk6u10iymo7yww5pn',
    'mchid'             => '1900016681',
    'audit_result'      => 'PASS',
    'audit_finish_time' => '2015-05-20T13:29:35+08:00',
    'attach_info'       => 'updateidcard',
    'fail_code'         => '1001',
    'fail_msg'          => 'IDCARD_ILLEGAL',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->aggracctBc->wbChannel->controlOrders->info->update->result->notify->post([
  'json' => [
    'out_request_no'    => 'htozr8denqegbt6tk6u10iymo7yww5pn',
    'mchid'             => '1900016681',
    'audit_result'      => 'PASS',
    'audit_finish_time' => '2015-05-20T13:29:35+08:00',
    'attach_info'       => 'updateidcard',
    'fail_code'         => '1001',
    'fail_msg'          => 'IDCARD_ILLEGAL',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/aggracct-bc/wb-channel/control-orders/info/update/result/notify')->post([
  'json' => [
    'out_request_no'    => 'htozr8denqegbt6tk6u10iymo7yww5pn',
    'mchid'             => '1900016681',
    'audit_result'      => 'PASS',
    'audit_finish_time' => '2015-05-20T13:29:35+08:00',
    'attach_info'       => 'updateidcard',
    'fail_code'         => '1001',
    'fail_msg'          => 'IDCARD_ILLEGAL',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/aggracct-bc/wb-channel/control-orders/info/update/result/notify']->post([
  'json' => [
    'out_request_no'    => 'htozr8denqegbt6tk6u10iymo7yww5pn',
    'mchid'             => '1900016681',
    'audit_result'      => 'PASS',
    'audit_finish_time' => '2015-05-20T13:29:35+08:00',
    'attach_info'       => 'updateidcard',
    'fail_code'         => '1001',
    'fail_msg'          => 'IDCARD_ILLEGAL',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| ret_msg | string | 接口返回信息

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/merchant/4016080141)
