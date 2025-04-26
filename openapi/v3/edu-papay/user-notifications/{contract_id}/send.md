---
title: 发送扣款预通知
description: 给用户发送扣款预通知
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| contract_id {data-required} | string | 签约协议号
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| appid {data-required data-indent=1} | string | 服务商APPID
| sub_mchid {data-indent=1} | string | 子商户号
| sub_appid {data-indent=1} | string | 子商户APPID

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->eduPapay->userNotifications->_contract_id_->send->postAsync([
  'contract_id' => 'wx8888888888888888',
  'json' => [
    'appid'     => 'wx8888888888888888',
    'sub_mchid' => '1900000109',
    'sub_appid' => 'wx8888888888888888',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r($response->getStatusCode() === 204);
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/edu-papay/user-notifications/{contract_id}/send')->postAsync([
  'contract_id' => 'wx8888888888888888',
  'json' => [
    'appid'     => 'wx8888888888888888',
    'sub_mchid' => '1900000109',
    'sub_appid' => 'wx8888888888888888',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r($response->getStatusCode() === 204);
})
->wait();
```

```php [异步属性式]
$instance['v3/edu-papay/user-notifications/{contract_id}/send']->postAsync([
  'contract_id' => 'wx8888888888888888',
  'json' => [
    'appid'     => 'wx8888888888888888',
    'sub_mchid' => '1900000109',
    'sub_appid' => 'wx8888888888888888',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r($response->getStatusCode() === 204);
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->eduPapay->userNotifications->_contract_id_->send->post([
  'contract_id' => 'wx8888888888888888',
  'json' => [
    'appid'     => 'wx8888888888888888',
    'sub_mchid' => '1900000109',
    'sub_appid' => 'wx8888888888888888',
  ],
]);
print_r($response->getStatusCode() === 204);
```

```php [同步声明式]
$response = $instance->chain('v3/edu-papay/user-notifications/{contract_id}/send')->post([
  'contract_id' => 'wx8888888888888888',
  'json' => [
    'appid'     => 'wx8888888888888888',
    'sub_mchid' => '1900000109',
    'sub_appid' => 'wx8888888888888888',
  ],
]);
print_r($response->getStatusCode() === 204);
```

```php [同步属性式]
$response = $instance['v3/edu-papay/user-notifications/{contract_id}/send']->post([
  'contract_id' => 'wx8888888888888888',
  'json' => [
    'appid'     => 'wx8888888888888888',
    'sub_mchid' => '1900000109',
    'sub_appid' => 'wx8888888888888888',
  ],
]);
print_r($response->getStatusCode() === 204);
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| 空字符串(无返回内容) {align=center colspan=3}

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/merchant/4012524814) [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4012855408)
