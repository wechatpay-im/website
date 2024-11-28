---
title: 查询用户签约列表
description: 商户使用本接口来查询用户签约信息，返回用户在该签约模板下的合约列表（包括处于「已解约」状态下的合约）；被用户主动删除的合约无法被查询到。结果中「已签约」合约排列于「已解约」合约之前。
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| openid {data-required} | string | 商户appid下的用户标识
| query {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的查询参数
| plan_id {data-required data-indent=1} | string | 签约模板号
| contract_status {data-required data-indent=1} | string | 签约状态
| offset {data-indent=1} | integer | 分页页码
| limit {data-indent=1} | integer | 分页大小

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->eduschoolpay->users->_openid_->contracts->getAsync([
  'openid' => 'oUpF8uMuAJOM2pxb1Q',
  'query' => [
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
$instance->chain('v3/eduschoolpay/users/{openid}/contracts')->getAsync([
  'openid' => 'oUpF8uMuAJOM2pxb1Q',
  'query' => [
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
$instance['v3/eduschoolpay/users/{openid}/contracts']->getAsync([
  'openid' => 'oUpF8uMuAJOM2pxb1Q',
  'query' => [
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
$response = $instance->v3->eduschoolpay->users->_openid_->contracts->get([
  'openid' => 'oUpF8uMuAJOM2pxb1Q',
  'query' => [
    'plan_id' => '101164396123311331',
    'contract_status' => 'ADD',
    'offset' => 0,
    'limit' => 20,
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/eduschoolpay/users/{openid}/contracts')->get([
  'openid' => 'oUpF8uMuAJOM2pxb1Q',
  'query' => [
    'plan_id' => '101164396123311331',
    'contract_status' => 'ADD',
    'offset' => 0,
    'limit' => 20,
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/eduschoolpay/users/{openid}/contracts']->get([
  'openid' => 'oUpF8uMuAJOM2pxb1Q',
  'query' => [
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
| data | object[] {data-tooltip="对应PHP的array"} | 查询结果列表
| contract_id {data-required data-indent=1} | string | 签约协议号
| mchid {data-required data-indent=1} | string | 商户号
| appid {data-required data-indent=1} | string | 商户appid
| openid {data-required data-indent=1} | string | 商户appid下的用户标识
| plan_id {data-required data-indent=1} | string | 签约模板号
| contract_status {data-required data-indent=1} | string | 签约状态
| create_time {data-required data-indent=1} | string | 签约时间
| out_contract_code {data-required data-indent=1} | string | 外部签约号
| offset {data-required} | integer | 请求资源起始位置
| limit {data-required} | integer | 最大资源条数
| total_count {data-required} | integer | 资源总条数
| links {data-required} | object {data-tooltip="对应PHP的array"} | 相关链接
| next {data-indent=1} | string | 下一页链接
| prev {data-indent=1} | string | 上一页链接
| self {data-required data-indent=1} | string | 当前链接

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/edu/eduschoolpay/chapter3_4.shtml)
