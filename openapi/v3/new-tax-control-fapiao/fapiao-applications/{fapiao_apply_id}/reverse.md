---
title: 冲红电子发票
description: 商户对已开具的电子发票进行冲红（开具红票），并将其从微信用户的卡包中删除。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| fapiao_apply_id | string | 发票申请单号
| json | object | 声明请求的`JSON`数据结构
| sub_mchid {data-indent=1} | string | 子商户号
| reverse_reason {data-indent=1} | string | 冲红原因
| fapiao_information {data-indent=1} | object[] | 需要冲红的发票信息
| fapiao_id {data-indent=2} | string | 商户发票单号
| fapiao_code {data-indent=2} | string | 发票代码
| fapiao_number {data-indent=2} | string | 发票号码

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->newTaxControlFapiao->fapiaoApplications->_fapiao_apply_id_->reverse->postAsync([
  'fapiao_apply_id' => '4200000444201910177461284488',
  'json' => [
    'sub_mchid' => '1900000109',
    'reverse_reason' => '退款',
    'fapiao_information' => [[
      'fapiao_id' => '20200701123456',
      'fapiao_code' => '044001911211',
      'fapiao_number' => '12897794',
    ],],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r($response->getStatusCode() === 202);
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/new-tax-control-fapiao/fapiao-applications/{fapiao_apply_id}/reverse')->postAsync([
  'fapiao_apply_id' => '4200000444201910177461284488',
  'json' => [
    'sub_mchid' => '1900000109',
    'reverse_reason' => '退款',
    'fapiao_information' => [[
      'fapiao_id' => '20200701123456',
      'fapiao_code' => '044001911211',
      'fapiao_number' => '12897794',
    ],],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r($response->getStatusCode() === 202);
})
->wait();
```

```php [异步属性式]
$instance['v3/new-tax-control-fapiao/fapiao-applications/{fapiao_apply_id}/reverse']->postAsync([
  'fapiao_apply_id' => '4200000444201910177461284488',
  'json' => [
    'sub_mchid' => '1900000109',
    'reverse_reason' => '退款',
    'fapiao_information' => [[
      'fapiao_id' => '20200701123456',
      'fapiao_code' => '044001911211',
      'fapiao_number' => '12897794',
    ],],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r($response->getStatusCode() === 202);
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->newTaxControlFapiao->fapiaoApplications->_fapiao_apply_id_->reverse->post([
  'fapiao_apply_id' => '4200000444201910177461284488',
  'json' => [
    'sub_mchid' => '1900000109',
    'reverse_reason' => '退款',
    'fapiao_information' => [[
      'fapiao_id' => '20200701123456',
      'fapiao_code' => '044001911211',
      'fapiao_number' => '12897794',
    ],],
  ],
]);
print_r($response->getStatusCode() === 202);
```

```php [同步声明式]
$response = $instance->chain('v3/new-tax-control-fapiao/fapiao-applications/{fapiao_apply_id}/reverse')->post([
  'fapiao_apply_id' => '4200000444201910177461284488',
  'json' => [
    'sub_mchid' => '1900000109',
    'reverse_reason' => '退款',
    'fapiao_information' => [[
      'fapiao_id' => '20200701123456',
      'fapiao_code' => '044001911211',
      'fapiao_number' => '12897794',
    ],],
  ],
]);
print_r($response->getStatusCode() === 202);
```

```php [同步属性式]
$response = $instance['v3/new-tax-control-fapiao/fapiao-applications/{fapiao_apply_id}/reverse']->post([
  'fapiao_apply_id' => '4200000444201910177461284488',
  'json' => [
    'sub_mchid' => '1900000109',
    'reverse_reason' => '退款',
    'fapiao_information' => [[
      'fapiao_id' => '20200701123456',
      'fapiao_code' => '044001911211',
      'fapiao_number' => '12897794',
    ],],
  ],
]);
print_r($response->getStatusCode() === 202);
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/new-tax-control-fapiao/chapter3_9.shtml)
