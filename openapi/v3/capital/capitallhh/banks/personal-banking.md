---
title: 查询支持个人业务的银行列表
description: 通过本接口可以查询支持个人业务的银行列表
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| query {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的查询参数
| offset {data-indent=1} | integer | 本次查询偏移量
| limit {data-required data-indent=1} | integer | 本次请求最大查询条数

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->capital->capitallhh->banks->personalBanking->getAsync([
  'query' => [
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
$instance->chain('v3/capital/capitallhh/banks/personal-banking')->getAsync([
  'query' => [
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
$instance['v3/capital/capitallhh/banks/personal-banking']->getAsync([
  'query' => [
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
$response = $instance->v3->capital->capitallhh->banks->personalBanking->get([
  'query' => [
    'offset' => 0,
    'limit' => 200,
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/capital/capitallhh/banks/personal-banking')->get([
  'query' => [
    'offset' => 0,
    'limit' => 200,
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/capital/capitallhh/banks/personal-banking']->get([
  'query' => [
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
| count {data-required}| integer | 本次查询数据条数
| data | object[] {data-tooltip="对应PHP的array"} | 银行列表
| bank_alias {data-required data-indent=1} | string | 银行别名
| bank_alias_code {data-required data-indent=1} | string | 银行别名编码
| account_bank {data-required data-indent=1} | string | 开户银行
| account_bank_code {data-required data-indent=1} | integer | 开户银行编码
| need_bank_branch {data-required data-indent=1} | boolean | 是否需要填写支行
| offset {data-required}| integer | 本次查询偏移量
| links {data-required}| object {data-tooltip="对应PHP的array"} | 分页链接
| next {data-indent=1} | string | 下一页链接
| prev {data-indent=1} | string | 上一页链接
| self {data-indent=1} | string | 当前链接

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3_partner/Offline/apis/chapter11_2_2.shtml)
