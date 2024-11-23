---
title: 查询支行列表
description: 本接口可以用于根据银行别名编码（仅支持需要填写支行的银行别名编码）和城市编码过滤查询支行列表数据
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| bank_alias_code {data-required} | string | 银行别名编码
| query {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的查询参数
| city_code {data-required data-indent=1} | integer | 城市编码
| offset {data-indent=1} | integer | 本次查询偏移量
| limit {data-required data-indent=1} | integer | 本次请求最大查询条数

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->capital->capitallhh->banks->_bank_alias_code_->branches->getAsync([
  'bank_alias_code' => '1000006247',
  'query' => [
    'city_code' => 536,
    'offset' => 0,
    'limit' => 200,
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/capital/capitallhh/banks/{bank_alias_code}/branches')->getAsync([
  'bank_alias_code' => '1000006247',
  'query' => [
    'city_code' => 536,
    'offset' => 0,
    'limit' => 200,
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/capital/capitallhh/banks/{bank_alias_code}/branches']->getAsync([
  'bank_alias_code' => '1000006247',
  'query' => [
    'city_code' => 536,
    'offset' => 0,
    'limit' => 200,
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->capital->capitallhh->banks->_bank_alias_code_->branches->get([
  'bank_alias_code' => '1000006247',
  'query' => [
    'city_code' => 536,
    'offset' => 0,
    'limit' => 200,
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/capital/capitallhh/banks/{bank_alias_code}/branches')->get([
  'bank_alias_code' => '1000006247',
  'query' => [
    'city_code' => 536,
    'offset' => 0,
    'limit' => 200,
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/capital/capitallhh/banks/{bank_alias_code}/branches']->get([
  'bank_alias_code' => '1000006247',
  'query' => [
    'city_code' => 536,
    'offset' => 0,
    'limit' => 200,
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| total_count {data-required}| integer | 查询数据总条数
| count {data-required}| integer | 本次查询条数
| data | object[] {data-tooltip="对应PHP的array"} | 支行列表
| bank_branch_name {data-required data-indent=1} | string | 开户银行支行名称
| bank_branch_id {data-required data-indent=1} | string | 开户银行支行联行号
| offset {data-required}| integer | 本次查询偏移量
| links {data-required}| object {data-tooltip="对应PHP的array"} | 分页链接
| next {data-indent=1} | string | 下一页链接
| prev {data-indent=1} | string | 上一页链接
| self {data-indent=1} | string | 当前链接
| account_bank {data-required}| string | 开户银行
| account_bank_code {data-required}| integer | 开户银行编码
| bank_alias {data-required}| string | 银行别名
| bank_alias_code {data-required}| string | 银行别名编码

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3_partner/Offline/apis/chapter11_2_6.shtml)
