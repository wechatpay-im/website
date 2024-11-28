---
title: 获取凭证授权接口
description: 指定银行卡签约，用户签约时携带的token请使用预签约接口获取，该接口不支持指定卡签约。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| scene {data-indent=1} | string | 使用场景
| web_init_data {data-indent=1} | object {data-tooltip="对应PHP的array"} | 小程序/h5鉴权场景初始化数据
| out_user_id {data-indent=2} | string | 商户刷脸用户ID
| organization_id {data-indent=2} | string | 机构ID

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->offlinefacemch->tokens->postAsync([
  'json' => [
    'scene'         => 'WEBSESSION',
    'web_init_data' => [
      'out_user_id'     => '',
      'organization_id' => '',
    ],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/offlinefacemch/tokens')->postAsync([
  'json' => [
    'scene'         => 'WEBSESSION',
    'web_init_data' => [
      'out_user_id'     => '',
      'organization_id' => '',
    ],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/offlinefacemch/tokens']->postAsync([
  'json' => [
    'scene'         => 'WEBSESSION',
    'web_init_data' => [
      'out_user_id'     => '',
      'organization_id' => '',
    ],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->offlinefacemch->tokens->post([
  'json' => [
    'scene'         => 'WEBSESSION',
    'web_init_data' => [
      'out_user_id'     => '',
      'organization_id' => '',
    ],
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/offlinefacemch/tokens')->post([
  'json' => [
    'scene'         => 'WEBSESSION',
    'web_init_data' => [
      'out_user_id'     => '',
      'organization_id' => '',
    ],
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/offlinefacemch/tokens']->post([
  'json' => [
    'scene'         => 'WEBSESSION',
    'web_init_data' => [
      'out_user_id'     => '',
      'organization_id' => '',
    ],
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| token | string | 授权凭证

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/wxfacepay/develop/access-specifications.html)
