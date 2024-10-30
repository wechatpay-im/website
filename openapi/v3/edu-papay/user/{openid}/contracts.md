---
title: 通过用户标识查询签约
description: 商户通过用户标识+签约模板号来查询用户签约信息，只返回用户在该签约模板下的有效签约（一个签约模板仅会存在一个有效签约）；若用户未与该签约模板签约，返回明确错误码
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| openid | string | 服务商APPID下的用户标识
| query | object | 声明请求的查询参数
| appid {data-indent=1} | string | 服务商APPID
| sub_mchid {data-indent=1} | string | 子商户号
| sub_appid {data-indent=1} | string | 子商户APPID
| sub_openid {data-indent=1} | string | 子商户APPID下的用户标识
| plan_id {data-indent=1} | string | 签约模板号
| contract_status {data-indent=1} | string | 签约状态
| offset {data-indent=1} | integer | 分页页码
| limit {data-indent=1} | integer | 分页大小

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->eduPapay->user->_openid_->contracts->getAsync([
  'openid' => 'oUpF8uMuAJOM2pxb1Q',
  'query' => [
    'appid' => 'wx8888888888888888',
    'sub_mchid' => '1900000109',
    'sub_appid' => 'wx8888888888888888',
    'sub_openid' => 'oUpF8uMuAJOM2pxb1Q',
    'plan_id' => '101164396123311331',
    'contract_status' => 'ADD',
    'offset' => 0,
    'limit' => 20,
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/edu-papay/user/{openid}/contracts')->getAsync([
  'openid' => 'oUpF8uMuAJOM2pxb1Q',
  'query' => [
    'appid' => 'wx8888888888888888',
    'sub_mchid' => '1900000109',
    'sub_appid' => 'wx8888888888888888',
    'sub_openid' => 'oUpF8uMuAJOM2pxb1Q',
    'plan_id' => '101164396123311331',
    'contract_status' => 'ADD',
    'offset' => 0,
    'limit' => 20,
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/edu-papay/user/{openid}/contracts']->getAsync([
  'openid' => 'oUpF8uMuAJOM2pxb1Q',
  'query' => [
    'appid' => 'wx8888888888888888',
    'sub_mchid' => '1900000109',
    'sub_appid' => 'wx8888888888888888',
    'sub_openid' => 'oUpF8uMuAJOM2pxb1Q',
    'plan_id' => '101164396123311331',
    'contract_status' => 'ADD',
    'offset' => 0,
    'limit' => 20,
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->eduPapay->user->_openid_->contracts->get([
  'openid' => 'oUpF8uMuAJOM2pxb1Q',
  'query' => [
    'appid' => 'wx8888888888888888',
    'sub_mchid' => '1900000109',
    'sub_appid' => 'wx8888888888888888',
    'sub_openid' => 'oUpF8uMuAJOM2pxb1Q',
    'plan_id' => '101164396123311331',
    'contract_status' => 'ADD',
    'offset' => 0,
    'limit' => 20,
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/edu-papay/user/{openid}/contracts')->get([
  'openid' => 'oUpF8uMuAJOM2pxb1Q',
  'query' => [
    'appid' => 'wx8888888888888888',
    'sub_mchid' => '1900000109',
    'sub_appid' => 'wx8888888888888888',
    'sub_openid' => 'oUpF8uMuAJOM2pxb1Q',
    'plan_id' => '101164396123311331',
    'contract_status' => 'ADD',
    'offset' => 0,
    'limit' => 20,
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/edu-papay/user/{openid}/contracts']->get([
  'openid' => 'oUpF8uMuAJOM2pxb1Q',
  'query' => [
    'appid' => 'wx8888888888888888',
    'sub_mchid' => '1900000109',
    'sub_appid' => 'wx8888888888888888',
    'sub_openid' => 'oUpF8uMuAJOM2pxb1Q',
    'plan_id' => '101164396123311331',
    'contract_status' => 'ADD',
    'offset' => 0,
    'limit' => 20,
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| data | object[] | 结果集
| sp_mchid {data-indent=1} | string | 服务商商户号
| appid {data-indent=1} | string | 服务商APPID
| sub_mchid {data-indent=1} | string | 子商户号
| sub_appid {data-indent=1} | string | 子商户APPID
| openid {data-indent=1} | string | 服务商APPID下的用户标识
| sub_openid {data-indent=1} | string | 子商户APPID下的用户标识
| plan_id {data-indent=1} | string | 签约模板号
| contract_information {data-indent=1} | object | 签约信息
| contract_id {data-indent=2} | string | 签约协议号
| contract_status {data-indent=2} | string | 签约状态
| create_time {data-indent=2} | string | 签约时间
| total_count | integer | 总数量
| offset | integer | 分页页码
| limit | integer | 分页大小

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/Offline/apis/chapter5_2_3.shtml)
