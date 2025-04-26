---
title: 申请二级商户商家转账授权
description: 申请二级商户商家转账授权。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| sub_mchid {data-required data-indent=1} | string | 二级商户号
| agreement_list {data-required data-indent=1} | object[] {data-tooltip="对应PHP的array"} | 签约协议列表
| agreement_code {data-required data-indent=2} | string | 协议编号
| agreement_version {data-required data-indent=2} | string | 协议版本号
| sign_organization {data-required data-indent=2} | string | 签约主体
| sign_time {data-required data-indent=2} | string | 签约时间

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->ecommerce->mchTransfer->authorizations->postAsync([
  'json' => [
    'sub_mchid'      => '1900001109',
    'agreement_list' => [[
      'agreement_code'    => '1',
      'agreement_version' => '20230101',
      'sign_organization' => '示例有限责任公司',
      'sign_time'         => '2015-05-20T13:29:35.120+08:00',
    ],],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/ecommerce/mch-transfer/authorizations')->postAsync([
  'json' => [
    'sub_mchid'      => '1900001109',
    'agreement_list' => [[
      'agreement_code'    => '1',
      'agreement_version' => '20230101',
      'sign_organization' => '示例有限责任公司',
      'sign_time'         => '2015-05-20T13:29:35.120+08:00',
    ],],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/ecommerce/mch-transfer/authorizations']->postAsync([
  'json' => [
    'sub_mchid'      => '1900001109',
    'agreement_list' => [[
      'agreement_code'    => '1',
      'agreement_version' => '20230101',
      'sign_organization' => '示例有限责任公司',
      'sign_time'         => '2015-05-20T13:29:35.120+08:00',
    ],],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->ecommerce->mchTransfer->authorizations->post([
  'json' => [
    'sub_mchid'      => '1900001109',
    'agreement_list' => [[
      'agreement_code'    => '1',
      'agreement_version' => '20230101',
      'sign_organization' => '示例有限责任公司',
      'sign_time'         => '2015-05-20T13:29:35.120+08:00',
    ],],
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/ecommerce/mch-transfer/authorizations')->post([
  'json' => [
    'sub_mchid'      => '1900001109',
    'agreement_list' => [[
      'agreement_code'    => '1',
      'agreement_version' => '20230101',
      'sign_organization' => '示例有限责任公司',
      'sign_time'         => '2015-05-20T13:29:35.120+08:00',
    ],],
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/ecommerce/mch-transfer/authorizations']->post([
  'json' => [
    'sub_mchid'      => '1900001109',
    'agreement_list' => [[
      'agreement_code'    => '1',
      'agreement_version' => '20230101',
      'sign_organization' => '示例有限责任公司',
      'sign_time'         => '2015-05-20T13:29:35.120+08:00',
    ],],
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| sub_mchid {data-required} | string | 二级商户号
| authorization_state {data-required} | string | 授权状态
| accept_time {data-required} | string | 授权申请受理时间
| authorize_time | string | 授权时间

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4013504208)
