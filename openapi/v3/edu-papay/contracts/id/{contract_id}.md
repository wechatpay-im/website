---
title: 通过协议号查询签约
description: 商户通过签约协议号可查询签约信息，如果对应签约状态为“已签约”，返回签约信息，如果对应签约状态为“已解约”，返回明确错误码
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| contract_id {data-required} | string | 签约协议号
| query {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的查询参数
| appid {data-required data-indent=1} | string | 服务商APPID
| sub_mchid {data-indent=1} | string | 子商户号
| sub_appid {data-indent=1} | string | 子商户APPID

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->eduPapay->contracts->id->_contract_id_->getAsync([
  'contract_id' => 'wx998877665544wx',
  'query' => [
    'appid' => 'wx8888888888888888',
    'sub_mchid' => '1900000109',
    'sub_appid' => 'wx8888888888888888',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/edu-papay/contracts/id/{contract_id}')->getAsync([
  'contract_id' => 'wx998877665544wx',
  'query' => [
    'appid' => 'wx8888888888888888',
    'sub_mchid' => '1900000109',
    'sub_appid' => 'wx8888888888888888',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/edu-papay/contracts/id/{contract_id}']->getAsync([
  'contract_id' => 'wx998877665544wx',
  'query' => [
    'appid' => 'wx8888888888888888',
    'sub_mchid' => '1900000109',
    'sub_appid' => 'wx8888888888888888',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->eduPapay->contracts->id->_contract_id_->get([
  'contract_id' => 'wx998877665544wx',
  'query' => [
    'appid' => 'wx8888888888888888',
    'sub_mchid' => '1900000109',
    'sub_appid' => 'wx8888888888888888',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/edu-papay/contracts/id/{contract_id}')->get([
  'contract_id' => 'wx998877665544wx',
  'query' => [
    'appid' => 'wx8888888888888888',
    'sub_mchid' => '1900000109',
    'sub_appid' => 'wx8888888888888888',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/edu-papay/contracts/id/{contract_id}']->get([
  'contract_id' => 'wx998877665544wx',
  'query' => [
    'appid' => 'wx8888888888888888',
    'sub_mchid' => '1900000109',
    'sub_appid' => 'wx8888888888888888',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| sp_mchid {data-required} | string | 服务商商户号
| appid {data-required} | string | 服务商APPID
| sub_mchid | string | 子商户号
| sub_appid | string | 子商户APPID
| openid | string | 服务商APPID下的用户标识
| sub_openid | string | 子商户APPID下的用户标识
| plan_id | string | 签约模板号
| contract_information | object {data-tooltip="对应PHP的array"} | 签约信息
| contract_id {data-indent=1} | string | 签约协议号
| contract_status {data-indent=1} | string | 签约状态
| create_time {data-indent=1} | string | 签约时间

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/Offline/apis/chapter5_2_2.shtml)
